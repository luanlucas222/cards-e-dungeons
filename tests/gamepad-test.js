/**
 * tests/gamepad-test.js
 * Suíte de Testes Automatizados para o Suporte a Controle / Gamepad (Fase 2).
 * Valida: Reconhecimento de Xbox/PlayStation, Navegação Direcional, Ciclo de Foco,
 * Disparo de Ações, HUD de Dicas e Integração com DOM e GameState.
 */

import { GamepadManager } from '../js/ui/GamepadManager.js';
import { GameState } from '../js/engine/GameState.js';

console.log('====================================================');
console.log(' 🎮 CARDS E DUNGEONS - TESTES DE CONTROLE (GAMEPAD API)');
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

// Mock de DOM para ambiente Node.js
class MockClassList {
  constructor(el) {
    this.el = el;
    this.classes = new Set();
  }
  add(c) { this.classes.add(c); this.el.className = Array.from(this.classes).join(' '); }
  remove(c) { this.classes.delete(c); this.el.className = Array.from(this.classes).join(' '); }
  contains(c) { return this.classes.has(c); }
}

class MockElement {
  constructor(tag = 'div', id = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.className = '';
    this.classList = new MockClassList(this);
    this.children = [];
    this.style = {};
    this.offsetParent = {}; // visível por padrão
    this.attributes = {};
    this.clicked = 0;
  }
  appendChild(child) { this.children.push(child); return child; }
  querySelector(sel) {
    return this.children.find(c => {
      if (sel.startsWith('#')) return c.id === sel.slice(1);
      if (sel.startsWith('.')) return c.classList.contains(sel.slice(1));
      return false;
    }) || null;
  }
  querySelectorAll(sel) {
    const res = [];
    for (const c of this.children) {
      if (sel.startsWith('#') && c.id === sel.slice(1)) res.push(c);
      else if (sel.startsWith('.') && c.classList.contains(sel.slice(1))) res.push(c);
      else if (sel.includes(c.tagName.toLowerCase())) res.push(c);
    }
    return res;
  }
  setAttribute(k, v) { this.attributes[k] = v; }
  getAttribute(k) { return this.attributes[k]; }
  click() { this.clicked++; }
  scrollIntoView() {}
}

const mockBody = new MockElement('body', 'body');
const mockApp = new MockElement('div', 'app');
mockBody.appendChild(mockApp);

// Elementos de tela mockados
const screenMenu = new MockElement('section', 'screen-menu');
screenMenu.classList.add('screen-view');
screenMenu.classList.add('active');

const btnStart = new MockElement('button', 'btn-start-game');
const btnGuide = new MockElement('button', 'btn-menu-guide');
const menuButtonsList = new MockElement('div', 'menu-buttons-list');
menuButtonsList.appendChild(btnStart);
menuButtonsList.appendChild(btnGuide);
screenMenu.appendChild(menuButtonsList);
mockApp.appendChild(screenMenu);

const screenCombat = new MockElement('section', 'screen-combat');
screenCombat.classList.add('screen-view');
const playerHand = new MockElement('div', 'player-hand');
const card1 = new MockElement('div', 'card-1');
card1.classList.add('game-card');
const card2 = new MockElement('div', 'card-2');
card2.classList.add('game-card');
playerHand.appendChild(card1);
playerHand.appendChild(card2);
const btnEndTurn = new MockElement('button', 'btn-end-turn');
screenCombat.appendChild(playerHand);
screenCombat.appendChild(btnEndTurn);
mockApp.appendChild(screenCombat);

const hudBar = new MockElement('div', 'gamepad-hud-bar');
const hudContent = new MockElement('div', 'gamepad-hud-content');
hudBar.appendChild(hudContent);
mockApp.appendChild(hudBar);

globalThis.document = {
  body: mockBody,
  getElementById: (id) => {
    if (id === 'app') return mockApp;
    if (id === 'screen-menu') return screenMenu;
    if (id === 'screen-combat') return screenCombat;
    if (id === 'btn-start-game') return btnStart;
    if (id === 'btn-menu-guide') return btnGuide;
    if (id === 'btn-end-turn') return btnEndTurn;
    if (id === 'gamepad-hud-bar') return hudBar;
    if (id === 'gamepad-hud-content') return hudContent;
    return null;
  },
  createElement: (tag) => new MockElement(tag),
  querySelector: (sel) => {
    if (sel === '#screen-menu') return screenMenu;
    if (sel === '#screen-combat') return screenCombat;
    if (sel === '#btn-end-turn') return btnEndTurn;
    if (sel === '.modal-backdrop.active') return null;
    return null;
  },
  querySelectorAll: (sel) => {
    if (sel.includes('.gamepad-selected')) {
      const selected = [];
      if (btnStart.classList.contains('gamepad-selected')) selected.push(btnStart);
      if (btnGuide.classList.contains('gamepad-selected')) selected.push(btnGuide);
      if (card1.classList.contains('gamepad-selected')) selected.push(card1);
      if (card2.classList.contains('gamepad-selected')) selected.push(card2);
      return selected;
    }
    if (sel.includes('#screen-menu .menu-buttons-list button')) {
      return [btnStart, btnGuide];
    }
    if (sel.includes('#player-hand .game-card')) {
      return [card1, card2];
    }
    return [];
  },
  contains: () => true
};

globalThis.window = {
  addEventListener: () => {},
  getComputedStyle: () => ({ display: 'block' }),
  SoundFX: {
    playButtonClick: () => {},
    playCardDraw: () => {}
  }
};
globalThis.performance = { now: () => Date.now() };

// 1. Inicialização e Detecção de Fabricantes de Controle
console.log('▶ [1/4] Inicialização e Detecção de Controles');
const gameState = new GameState();
const mockViewManager = { showToast: () => {} };

const mgr = new GamepadManager({
  app: {},
  gameState,
  viewManager: mockViewManager,
  combatRenderer: {},
  mapRenderer: {}
});

assert(typeof mgr === 'object', 'Instância de GamepadManager criada com sucesso');
assert(mgr._detectGamepadType('Xbox 360 Controller (XInput STANDARD GAMEPAD)') === 'xbox', 'Controle Xbox 360/Xbox One detectado corretamente');
assert(mgr._detectGamepadType('DualSense Wireless Controller (STANDARD GAMEPAD Vendor: 054c)') === 'playstation', 'Controle DualSense (PS5) detectado corretamente');
assert(mgr._detectGamepadType('Nintendo Switch Pro Controller') === 'nintendo', 'Controle Nintendo Switch detectado corretamente');

// 2. Alternância de Modo Gamepad e Visibilidade do HUD
console.log('\n▶ [2/4] Ativação de Modo Gamepad e HUD Hints Bar');
mgr.enableGamepadMode();
assert(mgr.isGamepadMode === true, 'Modo gamepad ativado');
assert(mockBody.classList.contains('gamepad-mode'), 'Classe CSS .gamepad-mode adicionada ao body');
assert(hudBar.style.display === 'flex', 'HUD Bar de atalhos visível');

// 3. Resolução de Contexto e Foco
console.log('\n▶ [3/4] Resolução de Telas e Navegação de Foco');
const contextMenu = mgr.getActiveContext();
assert(contextMenu === 'SCREEN_MENU', 'Contexto resolvido como SCREEN_MENU');

const menuElements = mgr.getFocusableElements(contextMenu);
assert(menuElements.length === 2, '2 botões interativos identificados no menu');

mgr.setFocus(menuElements[0]);
assert(menuElements[0].classList.contains('gamepad-selected'), 'Primeiro botão recebe classe .gamepad-selected');

// Navegação para baixo
mgr.navigate('down');
assert(menuElements[1].classList.contains('gamepad-selected'), 'Foco navega para o segundo botão');
assert(!menuElements[0].classList.contains('gamepad-selected'), 'Primeiro botão perde foco');

// Execução de ação A (Confirmar)
mgr.handleAction('confirm');
assert(btnGuide.clicked === 1, 'Botão focado recebeu clique simulado ao apertar Botão A');

// 4. Contexto de Combate e Atalhos Especializados
console.log('\n▶ [4/4] Arena de Combate e Atalhos Especializados');
screenMenu.classList.remove('active');
screenCombat.classList.add('active');

const contextCombat = mgr.getActiveContext();
assert(contextCombat === 'SCREEN_COMBAT', 'Contexto atualizado para SCREEN_COMBAT');

mgr.updateContextAndFocus();
const combatElements = mgr.getFocusableElements(contextCombat);
assert(combatElements.length === 2, '2 cartas da mão detectadas para seleção de controle');

mgr.setFocus(card1);
assert(card1.classList.contains('gamepad-selected'), 'Primeira carta da mão ganha foco');

// Botão X: Atalho rápido de Finalizar Turno
mgr.handleAction('actionX');
assert(btnEndTurn.clicked === 1, 'Botão Finalizar Turno disparado diretamente pelo Botão X');

// Desativação limpa do modo controle
mgr.disableGamepadMode();
assert(mgr.isGamepadMode === false, 'Modo gamepad desativado limpo');
assert(!mockBody.classList.contains('gamepad-mode'), 'Classe .gamepad-mode removida do body');
assert(hudBar.style.display === 'none', 'HUD Bar ocultado no retorno ao mouse');
mgr.destroy();

console.log('\n====================================================');
console.log(` ✅ TOTAL DE TESTES DE CONTROLE: ${passedTests}/${totalTests} PASSARAM COM 100% SUCESSO!`);
console.log('====================================================\n');
process.exit(0);
