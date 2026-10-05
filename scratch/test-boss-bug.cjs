const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const WebSocket = require('ws');

// 1. Simple static file server
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(__dirname, '..', reqPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found: ' + reqPath);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(8088, async () => {
  console.log('HTTP Server listening on http://localhost:8088');

  // Launch headless Chrome
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9226',
    '--disable-gpu',
    '--no-sandbox',
    'http://localhost:8088/index.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  // Get WebSocket debugger URL
  http.get('http://127.0.0.1:9226/json', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', async () => {
      const targets = JSON.parse(data);
      const target = targets.find(t => t.type === 'page');
      if (!target || !target.webSocketDebuggerUrl) {
        console.error('Target page not found!');
        chrome.kill();
        server.close();
        return;
      }

      console.log('Connecting to WebSocket:', target.webSocketDebuggerUrl);
      const ws = new WebSocket(target.webSocketDebuggerUrl);

      let msgId = 1;
      const pendingCallbacks = new Map();

      ws.on('open', () => {
        console.log('CDP WebSocket connected!');
        runTest();
      });

      ws.on('message', (msg) => {
        const parsed = JSON.parse(msg);
        if (parsed.method === 'Runtime.consoleAPICalled') {
          console.log('[BROWSER CONSOLE]', parsed.params.type, parsed.params.args.map(a => a.value || a.description).join(' '));
        }
        if (parsed.method === 'Runtime.exceptionThrown') {
          console.error('[BROWSER EXCEPTION]', parsed.params.exceptionDetails.text, parsed.params.exceptionDetails.exception?.description);
        }
        if (parsed.id && pendingCallbacks.has(parsed.id)) {
          const cb = pendingCallbacks.get(parsed.id);
          pendingCallbacks.delete(parsed.id);
          cb(parsed);
        }
      });

      function sendCommand(method, params = {}) {
        return new Promise((resolve, reject) => {
          const id = msgId++;
          pendingCallbacks.set(id, (resp) => {
            if (resp.error) reject(resp.error);
            else resolve(resp.result);
          });
          ws.send(JSON.stringify({ id, method, params }));
        });
      }

      async function evaluate(expr) {
        const res = await sendCommand('Runtime.evaluate', {
          expression: expr,
          returnByValue: true,
          awaitPromise: true
        });
        if (res.exceptionDetails) {
          console.error('Eval error for expr:', expr, res.exceptionDetails);
        }
        return res.result ? res.result.value : undefined;
      }

      async function runTest() {
        try {
          await sendCommand('Runtime.enable');
          await sendCommand('Page.enable');
          await sendCommand('DOM.enable');

          console.log('1. Starting Journey...');
          await evaluate(`
            window._gameAppInstance = window.GameApp;
            window.GameApp.startNewJourney('warrior');
          `);
          await new Promise(r => setTimeout(r, 600));

          console.log('2. Skipping Intro Cinematic...');
          await evaluate(`window.GameApp.cinematicManager.finish()`);
          await new Promise(r => setTimeout(r, 600));

          const screenAfterIntro = await evaluate(`window.GameApp.viewManager.currentScreen`);
          console.log('Screen after intro:', screenAfterIntro);

          console.log('3. Navigating to Boss Node...');
          await evaluate(`
            (() => {
              const state = window.GameApp.gameState;
              const bossNodeId = state.map.bossNodeId;
              const bossNode = state.map.nodes[bossNodeId];
              bossNode.state = 'available';
              window.GameApp.handleNodeSelected(bossNodeId);
            })()
          `);
          await new Promise(r => setTimeout(r, 800));

          // If boss encounter cinematic triggered, skip it
          const isCinematicActive = await evaluate(`document.getElementById('screen-cinematic')?.classList.contains('active')`);
          console.log('Is boss cinematic active?', isCinematicActive);
          if (isCinematicActive) {
            console.log('Finishing boss cinematic...');
            await evaluate(`window.GameApp.cinematicManager.finish()`);
            await new Promise(r => setTimeout(r, 800));
          }

          const screenInCombat = await evaluate(`window.GameApp.viewManager.currentScreen`);
          const enemyName = await evaluate(`window.GameApp.gameState.currentCombat?.enemy?.name`);
          const enemyHp = await evaluate(`window.GameApp.gameState.currentCombat?.enemy?.hp`);
          console.log(`In combat: screen=${screenInCombat}, enemy=${enemyName}, hp=${enemyHp}`);

          console.log('4. Killing the Boss...');
          const killResult = await evaluate(`
            (() => {
              const combat = window.GameApp.gameState.currentCombat;
              if (!combat) return { error: 'No combat active!' };
              combat.enemy.hp = 1;
              const card = combat.hand.find(c => c.damage > 0) || combat.hand[0];
              const cardEl = document.querySelector('#player-hand .game-card');
              window.GameApp.combatRenderer.handleCardClick(card, cardEl);
              return { success: true, playedCard: card.name };
            })()
          `);
          console.log('Card play result:', killResult);

          await new Promise(r => setTimeout(r, 1500));

          console.log('5. Checking State after Boss Defeat:');
          const stateScreen = await evaluate(`window.GameApp.gameState.screen`);
          const viewScreen = await evaluate(`window.GameApp.viewManager.currentScreen`);
          const isActModalActive = await evaluate(`document.getElementById('modal-act-transition')?.classList.contains('active')`);
          const isRewardModalActive = await evaluate(`document.getElementById('modal-reward')?.classList.contains('active')`);
          console.log(`gameState.screen=${stateScreen}, viewManager.currentScreen=${viewScreen}`);
          console.log(`modal-act-transition active=${isActModalActive}`);
          console.log(`modal-reward active=${isRewardModalActive}`);

          console.log('6. Clicking on #btn-proceed-act...');
          const clickProceedResult = await evaluate(`
            (() => {
              const btn = document.getElementById('btn-proceed-act');
              if (!btn) return { error: 'Button btn-proceed-act not found!' };
              btn.click();
              return { clicked: true };
            })()
          `);
          console.log('Proceed click result:', clickProceedResult);

          await new Promise(r => setTimeout(r, 1000));

          console.log('7. Checking State after Proceeding to Act 2:');
          const stateAct = await evaluate(`window.GameApp.gameState.currentAct`);
          const currentScreenAfter = await evaluate(`window.GameApp.viewManager.currentScreen`);
          const isActModalStillActive = await evaluate(`document.getElementById('modal-act-transition')?.classList.contains('active')`);
          const mapVisible = await evaluate(`document.getElementById('screen-map')?.classList.contains('active')`);
          const combatVisible = await evaluate(`document.getElementById('screen-combat')?.classList.contains('active')`);
          const availableNodesCount = await evaluate(`document.querySelectorAll('#map-tree .map-node.node-available').length`);
          console.log(`currentAct=${stateAct}`);
          console.log(`viewManager.currentScreen=${currentScreenAfter}`);
          console.log(`modal-act-transition active=${isActModalStillActive}`);
          console.log(`screen-map active=${mapVisible}`);
          console.log(`screen-combat active=${combatVisible}`);
          console.log(`Available nodes in Act 2 map: ${availableNodesCount}`);

          console.log('8. Trying to click the first available node in Act 2...');
          const clickNodeResult = await evaluate(`
            (() => {
              const nodeEl = document.querySelector('#map-tree .map-node.node-available');
              if (!nodeEl) return { error: 'No available node found in Act 2 map!' };
              nodeEl.click();
              return { clickedNodeId: nodeEl.dataset?.nodeId || 'found' };
            })()
          `);
          console.log('Act 2 node click result:', clickNodeResult);

          await new Promise(r => setTimeout(r, 1000));

          const screenAfterNodeClick = await evaluate(`window.GameApp.viewManager.currentScreen`);
          const combatEnemyAct2 = await evaluate(`window.GameApp.gameState.currentCombat?.enemy?.name`);
          console.log(`After clicking Act 2 node: screen=${screenAfterNodeClick}, enemy=${combatEnemyAct2}`);

        } catch (err) {
          console.error('Test execution error:', err);
        } finally {
          ws.close();
          chrome.kill();
          server.close();
          console.log('Test completed.');
        }
      }
    });
  });
});
