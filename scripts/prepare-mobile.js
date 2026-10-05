/**
 * scripts/prepare-mobile.js
 * Prepara o diretório de distribuição web móvel (www/) para sincronização com o Capacitor Android.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'www');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('📦 Preparando diretório www/ para o Android...');

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

// 1. Arquivos base
fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(outDir, 'index.html'));
fs.copyFileSync(path.join(rootDir, 'dev-board.html'), path.join(outDir, 'dev-board.html'));
fs.copyFileSync(path.join(rootDir, 'manifest.json'), path.join(outDir, 'manifest.json'));
fs.copyFileSync(path.join(rootDir, 'service-worker.js'), path.join(outDir, 'service-worker.js'));

// 2. Pasta CSS
copyDirRecursive(path.join(rootDir, 'css'), path.join(outDir, 'css'));

// 3. Pasta Assets
copyDirRecursive(path.join(rootDir, 'assets'), path.join(outDir, 'assets'));

// 4. Pasta JS com bundle compilado
const jsOut = path.join(outDir, 'js');
fs.mkdirSync(jsOut, { recursive: true });
fs.copyFileSync(path.join(rootDir, 'js/game.bundle.js'), path.join(jsOut, 'game.bundle.js'));

console.log('✅ Diretório www/ preparado com sucesso para o Android!');
