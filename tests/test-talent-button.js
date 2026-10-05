import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9225;
const fileUrl = 'file:///' + path.join(rootDir, 'index.html').replace(/\\/g, '/');

async function testTalentsButton() {
  console.log('--- TESTANDO INTERAÇÃO COM BOTÃO ÁRVORE DE TALENTOS & KANBAN ---');
  const chrome = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-first-run',
    fileUrl
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const res = await fetch(`http://127.0.0.1:${port}/json`);
    const targets = await res.json();
    const page = targets.find(t => t.type === 'page');
    if (!page) throw new Error('Página não encontrada no Chrome!');

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

    await send('Runtime.enable');

    // 1. Verifica se o botão Kanban foi devidamente removido do menu
    const kanbanCheck = await send('Runtime.evaluate', {
      expression: '!!document.getElementById("btn-menu-kanban")',
      returnByValue: true
    });
    console.log('1. Botão Kanban ausente do menu principal:', !kanbanCheck.result.value);

    // 2. Verifica se o botão de talentos tem estilos e texto corretos
    const btnCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.getElementById("btn-talents");
        if (!btn) return null;
        return {
          text: btn.innerText.replace(/\\s+/g, ' ').trim(),
          hasPurpleClass: btn.classList.contains("btn-talents-purple"),
          soulsBadge: document.getElementById("menu-souls-count")?.innerText
        };
      })()`,
      returnByValue: true
    });
    console.log('2. Informações do botão de Talentos:', btnCheck.result.value);

    // 3. Simula clique real no botão de talentos
    const clickResult = await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.getElementById("btn-talents");
        btn.click();
        const modal = document.getElementById("modal-talents");
        return {
          isOpen: modal ? modal.classList.contains("active") : false,
          cardsRendered: document.querySelectorAll(".talent-card").length,
          balanceText: document.getElementById("modal-souls-balance")?.innerText
        };
      })()`,
      returnByValue: true
    });
    console.log('3. Resultado ao Clicar em "Árvore de Talentos":', clickResult.result.value);

    // 4. Fecha o modal
    const closeResult = await send('Runtime.evaluate', {
      expression: `(() => {
        const closeBtn = document.getElementById("btn-close-talents");
        closeBtn.click();
        const modal = document.getElementById("modal-talents");
        return {
          isClosed: !modal.classList.contains("active")
        };
      })()`,
      returnByValue: true
    });
    console.log('4. Fechamento do Modal:', closeResult.result.value);

    ws.close();

    const passed = (
      !kanbanCheck.result.value &&
      btnCheck.result.value.hasPurpleClass &&
      clickResult.result.value.isOpen &&
      clickResult.result.value.cardsRendered === 4 &&
      closeResult.result.value.isClosed
    );

    if (passed) {
      console.log('✅ TODOS OS TESTES DO BOTÃO DE TALENTOS E REMOÇÃO DO KANBAN PASSARAM COM SUCESSO!');
    } else {
      console.error('❌ Falha na validação:', { kanbanCheck, btnCheck, clickResult, closeResult });
      process.exit(1);
    }
  } finally {
    chrome.kill();
  }
}

testTalentsButton().catch(err => {
  console.error(err);
  process.exit(1);
});
