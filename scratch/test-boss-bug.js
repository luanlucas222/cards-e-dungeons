import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const fileUrl = 'file:///' + path.join(rootDir, 'index.html').replace(/\\/g, '/');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9227;

async function main() {
  console.log('Launching Chrome on port', port);
  const chromeProcess = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=1280,720',
    fileUrl
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const targetsRes = await fetch(`http://127.0.0.1:${port}/json`);
    const targets = await targetsRes.json();
    const pageTarget = targets.find(t => t.type === 'page');
    if (!pageTarget) throw new Error('Page target not found');

    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    let msgId = 1;
    const pendingCallbacks = new Map();

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });
    console.log('Connected to CDP WebSocket!');

    ws.onmessage = (event) => {
      const parsed = JSON.parse(event.data);
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
    };

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

    await sendCommand('Runtime.enable');
    await sendCommand('Page.enable');

    console.log('1. Starting Journey...');
    await evaluate(`
      window._gameAppInstance = window.GameApp;
      window.GameApp.startNewJourney('warrior');
    `);
    await new Promise(r => setTimeout(r, 600));

    console.log('2. Skipping Intro Cinematic...');
    await evaluate(`window.GameApp.cinematicManager.finish()`);
    await new Promise(r => setTimeout(r, 600));

    console.log('3. Selecting Boss Node in Act 1...');
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

    // Check boss cinematic
    const isCinematicActive = await evaluate(`document.getElementById('screen-cinematic')?.classList.contains('active')`);
    console.log('Is boss cinematic active?', isCinematicActive);
    if (isCinematicActive) {
      console.log('Finishing boss cinematic...');
      await evaluate(`window.GameApp.cinematicManager.finish()`);
      await new Promise(r => setTimeout(r, 800));
    }

    const enemyName = await evaluate(`window.GameApp.gameState.currentCombat?.enemy?.name`);
    console.log(`In combat against: ${enemyName}`);

    console.log('4. Defeating Boss...');
    await evaluate(`
      (() => {
        const combat = window.GameApp.gameState.currentCombat;
        combat.enemy.hp = 1;
        const card = combat.hand.find(c => c.damage > 0) || combat.hand[0];
        const cardEl = document.querySelector('#player-hand .game-card');
        window.GameApp.combatRenderer.handleCardClick(card, cardEl);
      })()
    `);

    await new Promise(r => setTimeout(r, 1500));

    const stateScreen = await evaluate(`window.GameApp.gameState.screen`);
    const viewScreen = await evaluate(`window.GameApp.viewManager.currentScreen`);
    const isActModalActive = await evaluate(`document.getElementById('modal-act-transition')?.classList.contains('active')`);
    const isRewardModalActive = await evaluate(`document.getElementById('modal-reward')?.classList.contains('active')`);
    console.log(`Post-kill: gameState.screen=${stateScreen}, viewManager.currentScreen=${viewScreen}`);
    console.log(`modal-act-transition active=${isActModalActive}, modal-reward active=${isRewardModalActive}`);

    console.log('5. Clicking on #btn-proceed-act...');
    const btnText = await evaluate(`document.getElementById('btn-proceed-act')?.textContent`);
    console.log('Button text:', btnText);
    await evaluate(`document.getElementById('btn-proceed-act')?.click()`);

    await new Promise(r => setTimeout(r, 1000));

    const currentAct = await evaluate(`window.GameApp.gameState.currentAct`);
    const viewScreenAfter = await evaluate(`window.GameApp.viewManager.currentScreen`);
    const isActModalOpen = await evaluate(`document.getElementById('modal-act-transition')?.classList.contains('active')`);
    const isMapScreenActive = await evaluate(`document.getElementById('screen-map')?.classList.contains('active')`);
    const isCombatScreenActive = await evaluate(`document.getElementById('screen-combat')?.classList.contains('active')`);
    const availableNodes = await evaluate(`document.querySelectorAll('#map-tree .map-node.node-available').length`);

    console.log(`Post-proceed: currentAct=${currentAct}, viewScreen=${viewScreenAfter}`);
    console.log(`isActModalOpen=${isActModalOpen}, isMapScreenActive=${isMapScreenActive}, isCombatScreenActive=${isCombatScreenActive}`);
    console.log(`Available nodes in Act 2: ${availableNodes}`);

    console.log('6. Clicking on first available Act 2 node...');
    const nodeClickResult = await evaluate(`
      (() => {
        const node = document.querySelector('#map-tree .map-node.node-available');
        if (!node) return { error: 'No node found' };
        node.click();
        return { clicked: true, text: node.innerText };
      })()
    `);
    console.log('Node click result:', nodeClickResult);

    await new Promise(r => setTimeout(r, 1000));

    const screenAfterAct2Node = await evaluate(`window.GameApp.viewManager.currentScreen`);
    const act2CombatEnemy = await evaluate(`window.GameApp.gameState.currentCombat?.enemy?.name`);
    console.log(`After Act 2 node: screen=${screenAfterAct2Node}, enemy=${act2CombatEnemy}`);

    ws.close();
  } catch (err) {
    console.error('Error during test:', err);
  } finally {
    chromeProcess.kill();
    console.log('Done.');
  }
}

main();
