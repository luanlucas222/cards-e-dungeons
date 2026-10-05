/**
 * tests/frontend-verify.js
 * Suíte de verificação e validação do Front-end de "Cards e Dungeons".
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('====================================================');
console.log(' 🛡️  CARDS E DUNGEONS - VERIFICAÇÃO DO FRONT-END');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✓ ${message}`);
    passedTests++;
  } else {
    console.error(`  ✗ FALHA: ${message}`);
    process.exitCode = 1;
  }
}

// 1. Verificação de Arquivos e Assets
console.log('▶ [1/4] Verificação de Arquivos e Assets Estáticos');
const expectedFiles = [
  'index.html',
  'css/main.css',
  'css/cards.css',
  'css/combat.css',
  'css/map.css',
  'css/modal.css',
  'css/cinematic.css',
  'js/assets.js',
  'js/audio.js',
  'js/data/heroes.js',
  'js/data/merchant.js',
  'js/data/potions.js',
  'js/data/narrativeEvents.js',
  'js/app.js',
  'js/ui/CardRenderer.js',
  'js/ui/CombatFx.js',
  'js/ui/CombatRenderer.js',
  'js/ui/MapRenderer.js',
  'js/ui/ViewManager.js',
  'js/ui/CinematicManager.js',
  'js/ui/GamepadManager.js',
  'assets/sprites/hero.jpg',
  'assets/sprites/goblin.jpg',
  'assets/sprites/skeleton.jpg',
  'assets/sprites/mage.jpg',
  'assets/sprites/minotaur.jpg',
  'assets/sprites/specter.jpg',
  'assets/sprites/dragon.jpg',
  'assets/backgrounds/catacombs.jpg',
  'assets/backgrounds/mines.jpg',
  'assets/backgrounds/dragon_lair.jpg',
  'assets/cards/sword.jpg',
  'assets/cards/shield.jpg',
  'assets/cards/flame.jpg',
  'assets/cards/meteor.jpg',
  'assets/cards/phoenix.jpg',
  'assets/ui/menu_logo_emblem.png',
  'assets/backgrounds/main_menu_bg.jpg',
  'assets/backgrounds/victory_bg.jpg',
  'assets/backgrounds/defeat_bg.jpg'
];

expectedFiles.forEach(relPath => {
  const fullPath = path.join(rootDir, relPath);
  assert(fs.existsSync(fullPath), `Arquivo essencial existe: ${relPath}`);
});

// 2. Verificação de index.html
console.log('\n▶ [2/4] Integridade do index.html e Elementos Semânticos');
const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');

assert(indexHtml.includes('https://fonts.googleapis.com'), 'Fontes do Google importadas no cabeçalho');
assert(indexHtml.includes('Cinzel'), 'Fonte Cinzel referenciada');
assert(indexHtml.includes('Inter'), 'Fonte Inter referenciada');

const requiredStylesheets = [
  'css/main.css',
  'css/cards.css',
  'css/combat.css',
  'css/map.css',
  'css/modal.css',
  'css/cinematic.css'
];
requiredStylesheets.forEach(css => {
  assert(indexHtml.includes(css), `Folha de estilo vinculada: ${css}`);
});

const requiredIds = [
  'screen-menu',
  'screen-cinematic',
  'screen-map',
  'screen-combat',
  'screen-victory',
  'screen-defeat',
  'modal-deck',
  'modal-shrine',
  'modal-reward',
  'modal-guide',
  'btn-start-game',
  'btn-menu-guide',
  'btn-hud-deck',
  'btn-hud-audio',
  'btn-hud-guide',
  'hud-hp-bar-fill',
  'hud-hp-text',
  'hud-gold-text',
  'hud-deck-count',
  'map-tree',
  'map-connections-svg',
  'map-floor-indicator',
  'hero-avatar-box',
  'hero-hp-bar-fill',
  'hero-hp-text',
  'hero-armor-badge',
  'hero-energy-orbs',
  'hero-energy-text',
  'enemy-combatant',
  'enemy-intent-bubble',
  'enemy-avatar-box',
  'enemy-name',
  'enemy-armor-badge',
  'enemy-hp-bar-fill',
  'enemy-hp-text',
  'player-hand',
  'pile-draw',
  'draw-pile-count',
  'pile-discard',
  'discard-pile-count',
  'btn-end-turn',
  'reward-cards-container',
  'btn-skip-reward',
  'shrine-opt-heal',
  'shrine-opt-remove',
  'shrine-opt-duplicate',
  'shrine-opt-blessing',
  'btn-continue',
  'btn-music',
  'relics-bar',
  'hero-status-badges',
  'enemy-status-badges',
  'reward-relic-banner',
  'toast-container',
  'modal-class-select',
  'modal-merchant',
  'merchant-player-gold',
  'merchant-speech-bubble',
  'merchant-cards-grid',
  'merchant-relics-grid',
  'btn-merchant-remove-card',
  'btn-leave-merchant',
  'hud-potions-container',
  'modal-event',
  'event-header-icon',
  'event-title',
  'event-illustration-box',
  'event-story-text',
  'event-choices-container',
  'event-resolution-box',
  'btn-leave-event',
  'combat-fx-canvas',
  'hud-timer-container',
  'hud-timer-text',
  'hud-act-stat',
  'hud-act-text',
  'modal-act-transition',
  'act-transition-title',
  'act-recovery-value',
  'btn-proceed-act',
  'reward-gold-box',
  'reward-gold-amount',
  'shrine-opt-forge',
  'modal-deck-selector',
  'btn-victory-menu',
  'btn-defeat-menu',
  'gamepad-hud-bar',
  'gamepad-hud-content'
];

requiredIds.forEach(id => {
  assert(indexHtml.includes(`id="${id}"`), `Elemento do DOM com id="${id}" está presente`);
});

// 3. Verificação de Módulos JavaScript e Sintaxe
console.log('\n▶ [3/4] Validação de Módulos e Exports de Interface');
if (typeof globalThis.document === 'undefined') {
  globalThis.document = {
    createElement: () => {
      const el = {
        className: '',
        dataset: {},
        classList: {
          contains: (cls) => (el.className || '').split(/\s+/).includes(cls),
          add: (cls) => { el.className = `${el.className} ${cls}`.trim(); }
        },
        style: {},
        addEventListener: () => {}
      };
      return el;
    }
  };
}
try {
  const { HERO_CLASSES } = await import('../js/data/heroes.js');
  assert(HERO_CLASSES && HERO_CLASSES.WARRIOR && HERO_CLASSES.ROGUE && HERO_CLASSES.MAGE, 'Módulo heroes.js exporta WARRIOR, ROGUE e MAGE');

  const { CardRenderer } = await import('../js/ui/CardRenderer.js');
  assert(typeof CardRenderer.renderCard === 'function', 'CardRenderer.renderCard é uma função válida');
  assert(typeof CardRenderer.formatDescription === 'function', 'CardRenderer.formatDescription é uma função válida');
  assert(typeof CardRenderer.getIconSvg === 'function', 'CardRenderer.getIconSvg é uma função válida');
  assert(typeof CardRenderer.getRarityLabel === 'function', 'CardRenderer.getRarityLabel é uma função válida');
  const upgradedSampleEl = CardRenderer.renderCard({ id: 'murro', name: 'Murro', isUpgraded: true });
  assert(upgradedSampleEl.classList.contains('is-upgraded'), 'CardRenderer adiciona classe .is-upgraded para cartas aprimoradas');

  const { CombatFx } = await import('../js/ui/CombatFx.js');
  assert(typeof CombatFx === 'function', 'CombatFx classe exportada com sucesso');

  const { CombatRenderer } = await import('../js/ui/CombatRenderer.js');
  assert(typeof CombatRenderer === 'function', 'CombatRenderer classe exportada com sucesso');

  const { MapRenderer } = await import('../js/ui/MapRenderer.js');
  assert(typeof MapRenderer === 'function', 'MapRenderer classe exportada com sucesso');

  const { ViewManager } = await import('../js/ui/ViewManager.js');
  assert(typeof ViewManager === 'function', 'ViewManager classe exportada com sucesso');
  assert(typeof ViewManager.prototype.startRunTimer === 'function', 'ViewManager.prototype.startRunTimer implementado');
  assert(typeof ViewManager.prototype.formatRunTime === 'function', 'ViewManager.prototype.formatRunTime implementado');
  assert(typeof ViewManager.prototype.updateDungeonBackground === 'function', 'ViewManager.prototype.updateDungeonBackground implementado');
  assert(typeof ViewManager.prototype.openActTransitionModal === 'function', 'ViewManager.prototype.openActTransitionModal implementado');
  assert(typeof ViewManager.prototype.openCombatReward === 'function', 'ViewManager.prototype.openCombatReward implementado');
  assert(typeof ViewManager.prototype.openForgeModal === 'function', 'ViewManager.prototype.openForgeModal implementado');

  const { CinematicManager } = await import('../js/ui/CinematicManager.js');
  assert(typeof CinematicManager === 'function', 'CinematicManager classe exportada com sucesso');

  const { MERCHANT_CONFIG, generateMerchantInventory } = await import('../js/data/merchant.js');
  assert(MERCHANT_CONFIG && typeof generateMerchantInventory === 'function', 'Módulo merchant.js exporta MERCHANT_CONFIG e generateMerchantInventory');

  const { POTIONS, ALL_POTION_IDS } = await import('../js/data/potions.js');
  assert(POTIONS && Array.isArray(ALL_POTION_IDS) && ALL_POTION_IDS.length === 6, 'Módulo potions.js exporta POTIONS e 6 poções registradas');

  const { NARRATIVE_EVENTS, getRandomNarrativeEvent } = await import('../js/data/narrativeEvents.js');
  assert(Array.isArray(NARRATIVE_EVENTS) && NARRATIVE_EVENTS.length >= 4, 'Módulo narrativeEvents.js exporta catálogo de eventos narrativos (4+)');
} catch (err) {
  assert(false, `Falha ao importar módulos de UI: ${err.message}`);
}

// 4. Verificação de Correspondência entre Áudio, Arte e Lógica
console.log('\n▶ [4/4] Validação de Métodos de Áudio e Assets');
const assetsJs = fs.readFileSync(path.join(rootDir, 'js/assets.js'), 'utf-8');
const requiredSvgKeys = [
  'hero',
  'rogue',
  'goblin',
  'skeleton',
  'mage',
  'dragon',
  'minotaur',
  'specter',
  'golem',
  'lich',
  'merchant',
  'rat',
  'gargoyle',
  'burrower',
  'shaman',
  'fire_elemental',
  'cultist',
  'relic_strength',
  'relic_blood',
  'relic_spikes',
  'relic_mana',
  'relic_poison',
  'relic_fortune',
  'relic_cloak',
  'relic_whetstone',
  'coins',
  'status_strength',
  'status_vulnerable',
  'status_weak',
  'status_burn',
  'status_poison',
  'sword',
  'fist',
  'kick',
  'shield',
  'fire',
  'magic',
  'heal',
  'campfire',
  'crown',
  'skull',
  'trophy',
  'volumeOn',
  'volumeMute',
  'deck',
  'potion_health',
  'potion_energy',
  'potion_poison',
  'potion_fire',
  'potion_stone',
  'potion_strength',
  'potion_empty',
  'event_icon',
  'altar',
  'chest',
  'blacksmith'
];

requiredSvgKeys.forEach(key => {
  assert(assetsJs.includes(`${key}:`), `Ícone/Avatar SVG "${key}" definido em assets.js`);
});

const audioJs = fs.readFileSync(path.join(rootDir, 'js/audio.js'), 'utf-8');
const requiredAudioMethods = [
  'playCardDraw',
  'playAttack',
  'playHeavyAttack',
  'playShield',
  'playDamage',
  'playHeal',
  'playButtonClick',
  'playVictory',
  'playDefeat',
  'playBurn',
  'playDebuff',
  'playBuff',
  'playRelicObtained',
  'playCoins',
  'playPotion',
  'playMysteryEvent',
  'playSlash',
  'playHeavySlash',
  'playShieldWave',
  'playPoisonBubble',
  'playFireBurst',
  'startDungeonMusic',
  'stopDungeonMusic'
];

requiredAudioMethods.forEach(method => {
  assert(audioJs.includes(`${method}()`), `Efeito sonoro procedural "${method}" implementado em audio.js`);
});

console.log('\n====================================================');
console.log(` ✅ TOTAL DE VERIFICAÇÕES DO FRONT-END: ${passedTests}/${totalTests} PASSARAM!`);
console.log('====================================================\n');
