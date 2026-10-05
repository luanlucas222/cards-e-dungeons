/**
 * scripts/build-bundle.js
 * Compila e unifica todos os módulos em um único arquivo autônomo (js/game.bundle.js)
 * compatível com protocolo file:/// e zero dependências/zero CORS.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function readAndClean(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  // Remove importações ES Modules simples e multi-linha
  content = content.replace(/import\s*\{[\s\S]*?\}\s*from\s*['"][^'"]+['"];?/g, '');
  content = content.replace(/import\s+[\w*\s{},$]+\s+from\s*['"][^'"]+['"];?/g, '');
  content = content.replace(/import\s*['"][^'"]+['"];?/g, '');
  
  // Remove exportações padrão e nomeadas mantendo a declaração
  content = content.replace(/export\s+default\s+/g, '');
  content = content.replace(/export\s+(const|let|var|function|class)\s+/g, '$1 ');
  content = content.replace(/export\s*\{[\s\S]*?\}\s*;?/g, '');
  return content;
}

const filesInOrder = [
  'js/assets.js',
  'js/audio.js',
  'js/data/statusEffects.js',
  'js/data/relics.js',
  'js/data/heroes.js',
  'js/data/cards.js',
  'js/data/enemies.js',
  'js/data/events.js',
  'js/data/merchant.js',
  'js/data/potions.js',
  'js/data/narrativeEvents.js',
  'js/engine/MapGenerator.js',
  'js/engine/CombatSystem.js',
  'js/engine/GameState.js',
  'js/ui/CardRenderer.js',
  'js/ui/MapRenderer.js',
  'js/ui/CombatFx.js',
  'js/ui/CombatRenderer.js',
  'js/ui/CinematicManager.js',
  'js/ui/ViewManager.js',
  'js/ui/GamepadManager.js',
  'js/app.js'
];

let bundleContent = `/**
 * CARDS E DUNGEONS - Standalone Universal Game Bundle (v1.0)
 * Gerado para execução instantânea tanto via protocolo file:/// quanto via servidor HTTP.
 * Zero dependências externas e Zero bloqueios de CORS.
 */
(function() {
  'use strict';
`;

for (const relPath of filesInOrder) {
  const fullPath = path.join(rootDir, relPath);
  console.log('Compilando:', relPath);
  bundleContent += `\n/* --- MÓDULO: ${relPath} --- */\n`;
  bundleContent += readAndClean(fullPath);
  bundleContent += '\n';
}

bundleContent += `
  // Exposição global se necessário
  if (typeof window !== 'undefined') {
    window.CardsAndDungeonsReady = true;
  }
})();
`;

fs.writeFileSync(path.join(rootDir, 'js/game.bundle.js'), bundleContent, 'utf-8');
console.log('✅ Bundle compilado com sucesso em js/game.bundle.js!');
