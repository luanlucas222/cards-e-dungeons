/**
 * tests/qa-e2e-check.js
 * Teste End-to-End e Validação de Servidor HTTP pelo Gerente Geral
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png'
};

// Cria servidor estático
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(rootDir, reqPath);

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading file');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(4123, '127.0.0.1', async () => {
  console.log('====================================================');
  console.log(' 🛡️  CARDS E DUNGEONS - TESTE DE INTEGRAÇÃO HTTP (QA)');
  console.log('====================================================');

  const filesToCheck = [
    '/index.html',
    '/css/main.css',
    '/css/cards.css',
    '/css/combat.css',
    '/css/map.css',
    '/css/modal.css',
    '/css/cinematic.css',
    '/js/assets.js',
    '/js/audio.js',
    '/js/data/heroes.js',
    '/js/app.js',
    '/js/engine/GameState.js',
    '/js/engine/CombatSystem.js',
    '/js/engine/MapGenerator.js',
    '/js/data/cards.js',
    '/js/data/enemies.js',
    '/js/data/events.js',
    '/js/data/merchant.js',
    '/js/data/potions.js',
    '/js/data/narrativeEvents.js',
    '/js/ui/CardRenderer.js',
    '/js/ui/CombatRenderer.js',
    '/js/ui/MapRenderer.js',
    '/js/ui/ViewManager.js',
    '/js/ui/CinematicManager.js',
    '/js/ui/GamepadManager.js',
    '/assets/sprites/hero.jpg',
    '/assets/sprites/rogue.jpg',
    '/assets/sprites/dragon.jpg',
    '/assets/sprites/golem.jpg',
    '/assets/sprites/lich.jpg',
    '/assets/sprites/merchant.jpg',
    '/assets/sprites/rat.jpg',
    '/assets/sprites/gargoyle.jpg',
    '/assets/sprites/burrower.jpg',
    '/assets/sprites/shaman.jpg',
    '/assets/sprites/fire_elemental.jpg',
    '/assets/sprites/cultist.jpg',
    '/assets/backgrounds/catacombs.jpg',
    '/assets/cards/sword.jpg',
    '/manifest.json',
    '/service-worker.js',
    '/dev-board.html',
    '/assets/ui/icon-192.png',
    '/assets/ui/icon-512.png',
    '/assets/ui/icon-maskable-192.png',
    '/assets/ui/icon-maskable-512.png'
  ];

  let passed = 0;
  let failed = 0;

  for (const file of filesToCheck) {
    try {
      const res = await fetch(`http://127.0.0.1:4123${file}`);
      if (res.status === 200) {
        console.log(`  ✓ HTTP 200 OK: ${file} (${res.headers.get('content-type')})`);
        passed++;
      } else {
        console.error(`  ✗ ERRO: ${file} retornou status ${res.status}`);
        failed++;
      }
    } catch (e) {
      console.error(`  ✗ FALHA na requisição de ${file}:`, e.message);
      failed++;
    }
  }

  // Verifica que o index.html contém o bundle autônomo sem CORS
  const htmlContent = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
  if (htmlContent.includes('js/game.bundle.js')) {
    console.log('  ✓ Script universal src="js/game.bundle.js" configurado corretamente no HTML');
    passed++;
  } else {
    console.error('  ✗ Falta tag de script para js/game.bundle.js');
    failed++;
  }

  // Verifica integridade PWA Mobile
  const manifestRaw = fs.readFileSync(path.join(rootDir, 'manifest.json'), 'utf-8');
  const manifest = JSON.parse(manifestRaw);
  if (manifest.display === 'standalone' && manifest.orientation === 'landscape') {
    console.log('  ✓ PWA Manifest configurado corretamente (standalone & landscape)');
    passed++;
  } else {
    console.error('  ✗ PWA Manifest com configuração incorreta');
    failed++;
  }

  // Verifica se sincronização Android existe
  const androidPublicIndex = path.join(rootDir, 'android/app/src/main/assets/public/index.html');
  if (fs.existsSync(androidPublicIndex)) {
    console.log('  ✓ Projeto Android Capacitor sincronizado com sucesso');
    passed++;
  } else {
    console.error('  ✗ Projeto Android não sincronizado com o Capacitor');
    failed++;
  }

  console.log('====================================================');
  if (failed === 0) {
    console.log(` ✅ AUDITORIA QA APROVADA: ${passed} verificações com sucesso!`);
  } else {
    console.error(` ❌ AUDITORIA QA FALHOU: ${failed} falhas encontradas.`);
  }
  console.log('====================================================');

  server.close(() => {
    process.exit(failed === 0 ? 0 : 1);
  });
});
