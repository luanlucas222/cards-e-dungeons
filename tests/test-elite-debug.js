import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const fileUrl = 'file:///' + path.join(rootDir, 'index.html').replace(/\\/g, '/');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9223;

async function run() {
  console.log('--- Iniciando teste de depuração de combate de ELITE ---');
  const chromeProcess = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=1280,720',
    fileUrl
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    const targetsRes = await fetch(`http://127.0.0.1:${port}/json`);
    const targets = await targetsRes.json();
    const pageTarget = targets.find(t => t.type === 'page');
    if (!pageTarget) throw new Error('Página não encontrada');

    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    let id = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.method === 'Runtime.exceptionThrown') {
        console.error('🚨 ERRO NO NAVEGADOR:', msg.params.exceptionDetails?.exception?.description || msg.params.exceptionDetails?.text);
      }
      if (msg.method === 'Runtime.consoleAPICalled') {
        console.log('📢 BROWSER LOG:', msg.params.args.map(a => a.value || JSON.stringify(a)).join(' '));
      }
      if (msg.id && callbacks.has(msg.id)) {
        const { resolve, reject } = callbacks.get(msg.id);
        callbacks.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };

    await new Promise((res, rej) => {
      ws.onopen = res;
      ws.onerror = rej;
    });

    function sendCommand(method, params = {}) {
      return new Promise((resolve, reject) => {
        const reqId = id++;
        callbacks.set(reqId, { resolve, reject });
        ws.send(JSON.stringify({ id: reqId, method, params }));
      });
    }

    await sendCommand('Runtime.enable');
    await sendCommand('Console.enable');
    await sendCommand('Page.enable');

    async function evaluate(expression) {
      const res = await sendCommand('Runtime.evaluate', {
        expression,
        returnByValue: true,
        awaitPromise: true
      });
      if (res.exceptionDetails) {
        throw new Error(res.exceptionDetails.exception?.description || res.exceptionDetails.text);
      }
      return res.result?.value;
    }

    // Aguarda inicialização do GameApp
    console.log('Aguardando inicialização do GameApp...');
    await evaluate(`
      new Promise((resolve) => {
        const check = () => {
          if (window.GameApp && window.GameApp.gameState) resolve(true);
          else setTimeout(check, 100);
        };
        check();
      })
    `);

    // 1. Inicia jornada
    console.log('1. Iniciando jornada com Guerreiro...');
    await evaluate(`window.GameApp.startNewJourney('warrior');`);
    await new Promise(r => setTimeout(r, 600));
    await evaluate(`document.querySelector('.btn-cinematic-skip')?.click();`);
    await new Promise(r => setTimeout(r, 600));

    // 2. Cria um nó de elite no andar 0 para ser clicável imediatamente
    console.log('2. Configurando nó de Elite no andar inicial...');
    const setupElite = await evaluate(`
      (() => {
        const state = window.GameApp.gameState;
        // Pega um nó do andar 0
        const firstNodeId = state.map.floors[0][0];
        const node = state.map.nodes[firstNodeId];
        node.type = 'elite';
        node.enemyId = 'minotauro_berserker';
        
        // Seleciona o nó através do GameApp
        window.GameApp.handleNodeSelected(firstNodeId);
        
        const combat = state.currentCombat;
        return {
          enemyName: combat?.enemy?.name,
          enemyHp: combat?.enemy?.hp,
          enemyType: combat?.enemy?.type,
          screen: state.screen
        };
      })()
    `);
    console.log('Setup Elite resultado:', setupElite);
    await new Promise(r => setTimeout(r, 800));

    // 3. Verifica estado da tela e arena
    console.log('3. Verificando tela de combate...');
    const combatScreenVisible = await evaluate(`document.getElementById('screen-combat').classList.contains('active')`);
    console.log('Tela de combate ativa?', combatScreenVisible);

    // 4. Mata o Minotauro com uma carta de ataque
    console.log('4. Derrotando o Minotauro Berserker...');
    const killResult = await evaluate(`
      (() => {
        const state = window.GameApp.gameState;
        const combat = state.currentCombat;
        // Define HP do Minotauro para 1
        combat.enemy.hp = 1;
        // Pega uma carta de ataque da mão
        const attackCard = combat.hand.find(c => c.damage > 0) || combat.hand[0];
        console.log('Jogando carta contra elite:', attackCard.name);
        
        // Simula clique na carta através do CombatRenderer
        const handEl = document.getElementById('player-hand');
        const firstCardEl = handEl.querySelector('.game-card');
        window.GameApp.combatRenderer.handleCardClick(attackCard, firstCardEl);
        return {
          cardPlayed: attackCard.name,
          enemyHpAfter: combat.enemy.hp,
          combatFinished: combat.isFinished,
          stateScreen: state.screen
        };
      })()
    `);
    console.log('Resultado ao derrotar Minotauro:', killResult);

    // Aguarda animação e processamento de fim de combate
    await new Promise(r => setTimeout(r, 1200));

    // 5. Verifica se o modal de recompensa abriu
    console.log('5. Verificando modal de recompensas pós-elite...');
    const rewardModalCheck = await evaluate(`
      (() => {
        const modal = document.getElementById('modal-reward');
        const isActive = modal.classList.contains('active');
        const relicBanner = document.getElementById('reward-relic-banner');
        const bannerVisible = relicBanner && relicBanner.style.display !== 'none';
        const relicName = document.getElementById('reward-relic-name')?.textContent;
        const rewardCardsCount = document.querySelectorAll('#reward-cards-container .game-card').length;
        return {
          modalActive: isActive,
          bannerVisible: bannerVisible,
          relicName: relicName,
          rewardCardsCount: rewardCardsCount,
          gameStateScreen: window.GameApp.gameState.screen,
          eliteRelic: window.GameApp.gameState.eliteRewardRelic?.name
        };
      })()
    `);
    console.log('Status do modal de recompensas:', rewardModalCheck);

    // 6. Clica em escolher a carta de recompensa
    console.log('6. Clicando na carta de recompensa...');
    const claimResult = await evaluate(`
      (() => {
        const cardEl = document.querySelector('#reward-cards-container .game-card');
        if (cardEl) {
          cardEl.click();
          return 'Carta clicada com sucesso';
        } else {
          return 'Nenhuma carta de recompensa encontrada no container!';
        }
      })()
    `);
    console.log('Resultado clique de recompensa:', claimResult);

    await new Promise(r => setTimeout(r, 1000));

    // 7. Verifica se voltou para o mapa e se o mapa está funcional
    console.log('7. Verificando retorno ao mapa...');
    const mapCheck = await evaluate(`
      (() => {
        const mapScreen = document.getElementById('screen-map');
        const isMapActive = mapScreen.classList.contains('active');
        const modalRewardActive = document.getElementById('modal-reward').classList.contains('active');
        const availableNodes = document.querySelectorAll('.map-node.node-available').length;
        const heroRelics = window.GameApp.gameState.hero.relics.map(r => r.name);
        return {
          isMapActive,
          modalRewardActive,
          availableNodes,
          heroRelics,
          gameStateScreen: window.GameApp.gameState.screen
        };
      })()
    `);
    console.log('Estado do mapa pós-vitória elite:', mapCheck);

  } finally {
    chromeProcess.kill();
  }
}

run().catch(console.error);
