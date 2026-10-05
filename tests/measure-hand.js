import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9227;
const fileUrl = 'file:///' + path.join(rootDir, 'index.html').replace(/\\/g, '/');

async function measureHand() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-first-run',
    '--window-size=1024,381',
    fileUrl
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const res = await fetch(`http://127.0.0.1:${port}/json`);
    const targets = await res.json();
    const page = targets.find(t => t.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);

    let id = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const curId = id++;
        const handler = (msg) => {
          const data = JSON.parse(msg.data);
          if (data.id === curId) {
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: curId, method, params }));
      });
    }

    await send('Emulation.setDeviceMetricsOverride', {
      width: 1024,
      height: 381,
      deviceScaleFactor: 1,
      mobile: true,
      screenOrientation: { angle: 90, type: 'landscapePrimary' }
    });

    // Inicia jornada do Mago
    await send('Runtime.evaluate', {
      expression: 'window._gameAppInstance.startNewJourney("mage")'
    });
    await new Promise(r => setTimeout(r, 600));

    // Clica no botão Pular da cinemática
    await send('Runtime.evaluate', {
      expression: 'document.querySelector(".btn-cinematic-skip")?.click()'
    });
    await new Promise(r => setTimeout(r, 600));

    // Clica no primeiro nó do mapa
    await send('Runtime.evaluate', {
      expression: 'document.querySelector(".map-node")?.click()'
    });
    await new Promise(r => setTimeout(r, 1500));

    // Mede as cartas
    const metrics = await send('Runtime.evaluate', {
      expression: `(() => {
        const cards = Array.from(document.querySelectorAll('.player-hand .game-card'));
        return cards.map(c => {
          const r = c.getBoundingClientRect();
          const titleEl = c.querySelector('.card-title');
          const titleRect = titleEl ? titleEl.getBoundingClientRect() : null;
          const artRect = c.querySelector('.card-art-frame')?.getBoundingClientRect();
          const isTextClipped = titleEl ? titleEl.scrollWidth > titleEl.clientWidth : false;
          return {
            title: titleEl?.innerText,
            width: Math.round(r.width),
            height: Math.round(r.height),
            aspectRatio: (r.width / r.height).toFixed(3),
            isTextClipped,
            scrollWidth: titleEl?.scrollWidth,
            clientWidth: titleEl?.clientWidth,
            artHeight: Math.round(artRect?.height || 0),
            bottom: Math.round(r.bottom),
            windowHeight: window.innerHeight
          };
        });
      })()`,
      returnByValue: true
    });

    console.log('--- METRICAS REAIS ATUAIS (1024x381) ---');
    console.log(JSON.stringify(metrics.result.value, null, 2));

    const ss = await send('Page.captureScreenshot', { format: 'png' });
    if (!fs.existsSync(path.join(rootDir, 'docs', 'screenshots'))) {
      fs.mkdirSync(path.join(rootDir, 'docs', 'screenshots'), { recursive: true });
    }
    fs.writeFileSync(path.join(rootDir, 'docs', 'screenshots', 'hand_1024x381_before.png'), Buffer.from(ss.data, 'base64'));
    console.log('Screenshot salvo em docs/screenshots/hand_1024x381_before.png');

    ws.close();
  } finally {
    chrome.kill();
  }
}

measureHand().catch(console.error);
