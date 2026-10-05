/**
 * js/ui/GamepadManager.js
 * Gerenciador Completo de Controle de Videogame (Gamepad / Joystick) para "Cards e Dungeons".
 * Suporte nativo a controles Xbox (XInput), PlayStation (DualShock / DualSense) e genéricos.
 * Implementa navegação 2D, seleção tátil de cartas, atalhos de combate, travessia de mapa e HUD de dicas.
 */

export class GamepadManager {
  /**
   * @param {Object} options
   * @param {Object} options.app Instância principal de GameApp
   * @param {Object} options.gameState Instância de GameState
   * @param {Object} options.viewManager Instância de ViewManager
   * @param {Object} options.combatRenderer Instância de CombatRenderer
   * @param {Object} options.mapRenderer Instância de MapRenderer
   */
  constructor({ app, gameState, viewManager, combatRenderer, mapRenderer }) {
    this.app = app;
    this.gameState = gameState;
    this.viewManager = viewManager;
    this.combatRenderer = combatRenderer;
    this.mapRenderer = mapRenderer;

    // Estado do Gamepad
    this.connectedGamepadIndex = null;
    this.gamepadType = 'xbox'; // 'xbox', 'playstation', 'nintendo', 'generic'
    this.isGamepadMode = false;
    this.focusedElement = null;

    // Estado dos Botões e Eixos (para detecção de justPressed e repetição)
    this.prevButtons = [];
    this.prevAxes = [0, 0, 0, 0];

    // Temporizadores de repetição de navegação direcional
    this.repeatTimers = {
      up: { active: false, timer: 0 },
      down: { active: false, timer: 0 },
      left: { active: false, timer: 0 },
      right: { active: false, timer: 0 }
    };
    this.INITIAL_REPEAT_DELAY = 280; // ms antes do primeiro repeat
    this.REPEAT_INTERVAL = 130;      // ms entre repeats contínuos
    this.lastFrameTime = performance.now();

    // Contexto e HUD
    this.currentContext = null;
    this.hudBarEl = null;

    this._initHudBar();
    this._bindEvents();
    this._startLoop();
  }

  /* ==========================================================================
     INICIALIZAÇÃO & EVENTOS DE CONEXÃO
     ========================================================================== */

  _initHudBar() {
    let bar = document.getElementById('gamepad-hud-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'gamepad-hud-bar';
      bar.className = 'gamepad-hud-bar';
      bar.innerHTML = '<div class="gamepad-hud-content" id="gamepad-hud-content"></div>';
      const appContainer = document.getElementById('app') || document.body;
      appContainer.appendChild(bar);
    }
    this.hudBarEl = bar;
  }

  _bindEvents() {
    // Eventos nativos de conexão da HTML5 Gamepad API
    window.addEventListener('gamepadconnected', (e) => {
      this._onGamepadConnected(e.gamepad);
    });

    window.addEventListener('gamepaddisconnected', (e) => {
      this._onGamepadDisconnected(e.gamepad);
    });

    // Detecção de mouse para alternância transparente Gamepad <-> Mouse
    window.addEventListener('mousemove', (e) => {
      // Ignora pequenos ruídos
      if (Math.abs(e.movementX) > 2 || Math.abs(e.movementY) > 2) {
        this.disableGamepadMode();
      }
    });

    window.addEventListener('mousedown', () => {
      this.disableGamepadMode();
    });

    // Tecla F3 ou Select para teste rápido de alternância
    window.addEventListener('keydown', (e) => {
      if (e.key === 'F3') {
        this.enableGamepadMode();
      }
    });
  }

  _onGamepadConnected(gamepad) {
    this.connectedGamepadIndex = gamepad.index;
    this.gamepadType = this._detectGamepadType(gamepad.id);
    
    const typeNames = {
      xbox: 'Xbox',
      playstation: 'PlayStation',
      nintendo: 'Nintendo',
      generic: 'Genérico'
    };
    const friendlyName = typeNames[this.gamepadType] || 'Gamepad';

    if (this.viewManager && typeof this.viewManager.showToast === 'function') {
      this.viewManager.showToast(`🎮 Controle Conectado: ${friendlyName} (${gamepad.id.slice(0, 24)}...)`, 'info');
    }

    this.enableGamepadMode();
  }

  _onGamepadDisconnected(gamepad) {
    if (this.connectedGamepadIndex === gamepad.index) {
      this.connectedGamepadIndex = null;
      if (this.viewManager && typeof this.viewManager.showToast === 'function') {
        this.viewManager.showToast('Controle desconectado. Usando mouse.', 'warning');
      }
      this.disableGamepadMode();
    }
  }

  _detectGamepadType(idString) {
    const s = (idString || '').toLowerCase();
    if (s.includes('playstation') || s.includes('dualshock') || s.includes('dualsense') || s.includes('054c') || s.includes('sony')) {
      return 'playstation';
    }
    if (s.includes('nintendo') || s.includes('pro controller') || s.includes('joy-con')) {
      return 'nintendo';
    }
    if (s.includes('xbox') || s.includes('xinput') || s.includes('045e') || s.includes('microsoft')) {
      return 'xbox';
    }
    return 'xbox'; // Padrão recomendado
  }

  enableGamepadMode() {
    this.isGamepadMode = true;
    document.body.classList.add('gamepad-mode');
    if (this.hudBarEl) {
      this.hudBarEl.style.display = 'flex';
    }
    this.updateContextAndFocus();
    this.updateHudHints();
  }

  disableGamepadMode() {
    if (!this.isGamepadMode) return;
    this.isGamepadMode = false;
    document.body.classList.remove('gamepad-mode');
    this._clearFocusHighlights();
    if (this.hudBarEl) {
      this.hudBarEl.style.display = 'none';
    }
  }

  /* ==========================================================================
     LOOP PRINCIPAL DE POLLING (requestAnimationFrame)
     ========================================================================== */

  _startLoop() {
    const raf = typeof requestAnimationFrame !== 'undefined' 
      ? requestAnimationFrame 
      : (typeof window !== 'undefined' && window.requestAnimationFrame) 
        ? window.requestAnimationFrame 
        : (cb) => setTimeout(() => cb((typeof performance !== 'undefined' ? performance.now() : Date.now())), 16);

    const loop = (currentTime) => {
      if (this.destroyed) return;
      const now = currentTime || (typeof performance !== 'undefined' ? performance.now() : Date.now());
      const dt = now - this.lastFrameTime;
      this.lastFrameTime = now;

      this._pollGamepads(dt);
      raf(loop);
    };
    raf(loop);
  }

  destroy() {
    this.destroyed = true;
    this.disableGamepadMode();
  }

  _pollGamepads(dt) {
    const gamepads = typeof navigator.getGamepads === 'function' ? navigator.getGamepads() : [];
    let activePad = null;

    // Busca o controle ativo conectado
    if (this.connectedGamepadIndex !== null && gamepads[this.connectedGamepadIndex]) {
      activePad = gamepads[this.connectedGamepadIndex];
    } else {
      for (let i = 0; i < gamepads.length; i++) {
        if (gamepads[i]) {
          activePad = gamepads[i];
          if (this.connectedGamepadIndex === null) {
            this._onGamepadConnected(activePad);
          }
          break;
        }
      }
    }

    if (!activePad) {
      return;
    }

    // Leitura dos botões e eixos
    const buttons = activePad.buttons || [];
    const axes = activePad.axes || [];

    // Detecção de ativação por input (se o usuário mexer no controle, ativa modo gamepad)
    let anyInputActive = false;
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i]?.pressed) anyInputActive = true;
    }
    if (Math.abs(axes[0] || 0) > 0.35 || Math.abs(axes[1] || 0) > 0.35) {
      anyInputActive = true;
    }

    if (anyInputActive && !this.isGamepadMode) {
      this.enableGamepadMode();
    }

    if (!this.isGamepadMode) {
      this.prevButtons = buttons.map(b => !!b?.pressed);
      this.prevAxes = [...axes];
      return;
    }

    // Processa entradas se o modo Gamepad estiver ativo
    this._processInputs(buttons, axes, dt);

    this.prevButtons = buttons.map(b => !!b?.pressed);
    this.prevAxes = [...axes];
  }

  _isJustPressed(btnIndex, buttons) {
    const isNow = !!buttons[btnIndex]?.pressed;
    const wasThen = !!this.prevButtons[btnIndex];
    return isNow && !wasThen;
  }

  /* ==========================================================================
     PROCESSAMENTO DE BOTÕES E NAVEGAÇÃO
     ========================================================================== */

  _processInputs(buttons, axes, dt) {
    // 1. Mapeamento Direcional (D-Pad + Analógico Esquerdo)
    const axisX = axes[0] || 0;
    const axisY = axes[1] || 0;
    const DEADZONE = 0.40;

    const rawUp = !!buttons[12]?.pressed || axisY < -DEADZONE;
    const rawDown = !!buttons[13]?.pressed || axisY > DEADZONE;
    const rawLeft = !!buttons[14]?.pressed || axisX < -DEADZONE;
    const rawRight = !!buttons[15]?.pressed || axisX > DEADZONE;

    // Processa navegações com suporte a auto-repeat
    if (this._updateDirectionTimer('up', rawUp, dt)) this.navigate('up');
    if (this._updateDirectionTimer('down', rawDown, dt)) this.navigate('down');
    if (this._updateDirectionTimer('left', rawLeft, dt)) this.navigate('left');
    if (this._updateDirectionTimer('right', rawRight, dt)) this.navigate('right');

    // 2. Botão A / ✕ (Cross) -> Confirmar / Jogar Carta / Selecionar Nó
    if (this._isJustPressed(0, buttons)) {
      this.handleAction('confirm');
    }

    // 3. Botão B / ◯ (Circle) -> Voltar / Cancelar / Pular / Fechar Modal
    if (this._isJustPressed(1, buttons)) {
      this.handleAction('cancel');
    }

    // 4. Botão X / ▢ (Square) -> Ação Rápida de Combate (Finalizar Turno) / Pular Recompensa
    if (this._isJustPressed(2, buttons)) {
      this.handleAction('actionX');
    }

    // 5. Botão Y / △ (Triangle) -> Inspecionar Baralho / Informações
    if (this._isJustPressed(3, buttons)) {
      this.handleAction('actionY');
    }

    // 6. Bumpers (LB / RB) -> Navegação rápida de cartas / Abas
    if (this._isJustPressed(4, buttons)) {
      this.handleAction('bumperLeft');
    }
    if (this._isJustPressed(5, buttons)) {
      this.handleAction('bumperRight');
    }

    // 7. Triggers (LT / RT) -> Cinto de Poções / Zoom
    if (this._isJustPressed(6, buttons) || (axes[2] > 0.5 && this.prevAxes[2] <= 0.5)) {
      this.handleAction('triggerLeft');
    }
    if (this._isJustPressed(7, buttons) || (axes[3] > 0.5 && this.prevAxes[3] <= 0.5)) {
      this.handleAction('triggerRight');
    }

    // 8. Start / Options (botão 9) -> Atalho para Baralho ou Tela Cheia (F11)
    if (this._isJustPressed(9, buttons)) {
      this.handleAction('start');
    }

    // 9. Back / Select / Share (botão 8) -> Como Jogar / Guia de Regras
    if (this._isJustPressed(8, buttons)) {
      this.handleAction('select');
    }

    // 10. Analógico Direito Vertical (axes[3]) -> Scroll livre de telas longas (Mapa, Modais)
    const rightAxisY = axes[3] || 0;
    if (Math.abs(rightAxisY) > 0.25) {
      this._handleRightStickScroll(rightAxisY);
    }
  }

  _updateDirectionTimer(dir, isPressed, dt) {
    const state = this.repeatTimers[dir];
    if (!isPressed) {
      state.active = false;
      state.timer = 0;
      return false;
    }

    if (!state.active) {
      // Primeiro clique imediato
      state.active = true;
      state.timer = this.INITIAL_REPEAT_DELAY;
      return true;
    }

    // Repetição contínua após delay inicial
    state.timer -= dt;
    if (state.timer <= 0) {
      state.timer = this.REPEAT_INTERVAL;
      return true;
    }

    return false;
  }

  _handleRightStickScroll(amount) {
    const context = this.getActiveContext();
    const scrollSpeed = amount * 14;

    if (context === 'SCREEN_MAP') {
      const mapViewport = document.querySelector('#screen-map .map-viewport');
      if (mapViewport) mapViewport.scrollTop += scrollSpeed;
    } else {
      const activeModalBody = document.querySelector('.modal-backdrop.active .modal-body');
      if (activeModalBody) activeModalBody.scrollTop += scrollSpeed;
    }
  }

  /* ==========================================================================
     RESOLUÇÃO DE CONTEXTO & ELEMENTOS INTERATIVOS
     ========================================================================== */

  getActiveContext() {
    // 1. Modais Ativos (Prioridade máxima sobre telas de fundo)
    const activeModals = [
      { id: 'modal-card-swap', ctx: 'MODAL_CARD_SWAP' },
      { id: 'modal-treasure', ctx: 'MODAL_TREASURE' },
      { id: 'modal-class-select', ctx: 'MODAL_CLASS_SELECT' },
      { id: 'modal-reward', ctx: 'MODAL_REWARD' },
      { id: 'modal-shrine', ctx: 'MODAL_SHRINE' },
      { id: 'modal-deck-selector', ctx: 'MODAL_DECK_SELECTOR' },
      { id: 'modal-merchant', ctx: 'MODAL_MERCHANT' },
      { id: 'modal-event', ctx: 'MODAL_EVENT' },
      { id: 'modal-act-transition', ctx: 'MODAL_ACT_TRANSITION' },
      { id: 'modal-deck', ctx: 'MODAL_DECK' },
      { id: 'modal-guide', ctx: 'MODAL_GUIDE' }
    ];

    for (const m of activeModals) {
      const el = document.getElementById(m.id);
      if (el && el.classList.contains('active')) {
        return m.ctx;
      }
    }

    // 2. Telas Ativas
    const screens = [
      { id: 'screen-cinematic', ctx: 'SCREEN_CINEMATIC' },
      { id: 'screen-combat', ctx: 'SCREEN_COMBAT' },
      { id: 'screen-map', ctx: 'SCREEN_MAP' },
      { id: 'screen-victory', ctx: 'SCREEN_VICTORY' },
      { id: 'screen-defeat', ctx: 'SCREEN_DEFEAT' },
      { id: 'screen-menu', ctx: 'SCREEN_MENU' }
    ];

    for (const s of screens) {
      const el = document.getElementById(s.id);
      if (el && el.classList.contains('active')) {
        return s.ctx;
      }
    }

    return 'UNKNOWN';
  }

  getFocusableElements(context) {
    switch (context) {
      case 'SCREEN_MENU': {
        const menuButtons = Array.from(
          document.querySelectorAll('#screen-menu .menu-buttons-list button')
        ).filter(btn => btn.offsetParent !== null && window.getComputedStyle(btn).display !== 'none');
        return menuButtons;
      }

      case 'MODAL_CLASS_SELECT': {
        return Array.from(document.querySelectorAll('#modal-class-select .hero-class-card'));
      }

      case 'SCREEN_CINEMATIC': {
        const btns = Array.from(document.querySelectorAll('#screen-cinematic .cinematic-controls button'))
          .filter(b => b.offsetParent !== null);
        return btns;
      }

      case 'SCREEN_MAP': {
        // Apenas nós disponíveis para interação no momento
        const availableNodes = Array.from(document.querySelectorAll('#map-tree .map-node.node-available'));
        return availableNodes;
      }

      case 'SCREEN_COMBAT': {
        // Cartas na mão do jogador
        const cards = Array.from(document.querySelectorAll('#player-hand .game-card'));
        return cards;
      }

      case 'MODAL_REWARD': {
        const cards = Array.from(document.querySelectorAll('#reward-cards-container .game-card'));
        const skipBtn = document.getElementById('btn-skip-reward');
        if (skipBtn && skipBtn.offsetParent !== null) {
          return [...cards, skipBtn];
        }
        return cards;
      }

      case 'MODAL_SHRINE': {
        const options = Array.from(document.querySelectorAll('#modal-shrine .sanctuary-option-card'))
          .filter(opt => opt.offsetParent !== null && window.getComputedStyle(opt).display !== 'none');
        return options;
      }

      case 'MODAL_DECK_SELECTOR': {
        return Array.from(document.querySelectorAll('#deck-selector-grid .game-card'));
      }

      case 'MODAL_MERCHANT': {
        const cards = Array.from(document.querySelectorAll('#merchant-cards-grid .game-card'));
        const relics = Array.from(document.querySelectorAll('#merchant-relics-grid .merchant-relic-card'));
        const purgeBtn = document.getElementById('btn-merchant-remove-card');
        const leaveBtn = document.getElementById('btn-leave-merchant');
        const items = [...cards, ...relics];
        if (purgeBtn && purgeBtn.offsetParent !== null) items.push(purgeBtn);
        if (leaveBtn && leaveBtn.offsetParent !== null) items.push(leaveBtn);
        return items;
      }

      case 'MODAL_EVENT': {
        const choices = Array.from(document.querySelectorAll('#event-choices-container .event-choice-btn, #event-choices-container .event-choice-card'));
        const leaveBtn = document.getElementById('btn-leave-event');
        const leaveFooter = document.getElementById('event-modal-footer');
        if (leaveFooter && window.getComputedStyle(leaveFooter).display !== 'none' && leaveBtn) {
          return [leaveBtn];
        }
        return choices;
      }

      case 'MODAL_ACT_TRANSITION': {
        const btn = document.getElementById('btn-proceed-act');
        return btn ? [btn] : [];
      }

      case 'SCREEN_VICTORY': {
        const restart = document.getElementById('btn-victory-restart');
        const menu = document.getElementById('btn-victory-menu');
        return [restart, menu].filter(Boolean);
      }

      case 'SCREEN_DEFEAT': {
        const restart = document.getElementById('btn-defeat-restart');
        const menu = document.getElementById('btn-defeat-menu');
        return [restart, menu].filter(Boolean);
      }

      case 'MODAL_CARD_SWAP': {
        const btnReserve = document.getElementById('btn-swap-to-reserve');
        const btnGold = document.getElementById('btn-swap-to-gold');
        const deckCards = Array.from(document.querySelectorAll('#card-swap-deck-grid .game-card'));
        const closeBtn = document.querySelector('#modal-card-swap .modal-close-btn');
        const items = [];
        if (btnReserve && btnReserve.offsetParent !== null) items.push(btnReserve);
        if (btnGold && btnGold.offsetParent !== null) items.push(btnGold);
        items.push(...deckCards);
        if (closeBtn && closeBtn.offsetParent !== null) items.push(closeBtn);
        return items;
      }

      case 'MODAL_DECK': {
        const tabActive = document.getElementById('btn-tab-active-deck');
        const tabReserve = document.getElementById('btn-tab-reserve-deck');
        const cards = Array.from(document.querySelectorAll('#deck-modal-grid .game-card'));
        const closeBtn = document.querySelector('#modal-deck .modal-close-btn');
        const items = [];
        if (tabActive && tabActive.offsetParent !== null && window.getComputedStyle(tabActive).display !== 'none') items.push(tabActive);
        if (tabReserve && tabReserve.offsetParent !== null && window.getComputedStyle(tabReserve).display !== 'none') items.push(tabReserve);
        items.push(...cards);
        if (closeBtn && closeBtn.offsetParent !== null) items.push(closeBtn);
        return items;
      }

      case 'MODAL_TREASURE': {
        const btnRelic = document.getElementById('btn-treasure-relic');
        const btnGold = document.getElementById('btn-treasure-gold');
        const btnPotion = document.getElementById('btn-treasure-potion');
        return [btnRelic, btnGold, btnPotion].filter(Boolean);
      }

      case 'MODAL_GUIDE': {
        const closeBtn = document.querySelector('.modal-backdrop.active .modal-close-btn');
        return closeBtn ? [closeBtn] : [];
      }

      default:
        return [];
    }
  }

  /* ==========================================================================
     FOCO VISUAL & NAVEGAÇÃO
     ========================================================================== */

  updateContextAndFocus() {
    const newContext = this.getActiveContext();
    if (newContext !== this.currentContext || !this.focusedElement || !document.contains(this.focusedElement)) {
      this.currentContext = newContext;
      const elements = this.getFocusableElements(newContext);
      if (elements.length > 0) {
        this.setFocus(elements[0], false);
      } else {
        this._clearFocusHighlights();
      }
      this.updateHudHints();
    }
  }

  setFocus(el, playSound = true) {
    if (!el) return;
    this._clearFocusHighlights();
    this.focusedElement = el;
    el.classList.add('gamepad-selected');

    // Assegura visibilidade na tela
    if (typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }

    if (playSound && window.SoundFX && typeof window.SoundFX.playButtonClick === 'function') {
      window.SoundFX.playButtonClick();
    }
  }

  _clearFocusHighlights() {
    const prevs = document.querySelectorAll('.gamepad-selected');
    prevs.forEach(el => el.classList.remove('gamepad-selected'));
    this.focusedElement = null;
  }

  navigate(direction) {
    const context = this.getActiveContext();
    this.updateContextAndFocus();

    const elements = this.getFocusableElements(context);
    if (!elements || elements.length === 0) return;

    let currentIndex = elements.indexOf(this.focusedElement);
    if (currentIndex === -1) currentIndex = 0;

    let nextIndex = currentIndex;

    // Tratamento especial para combate (mão de cartas vs poções)
    if (context === 'SCREEN_COMBAT') {
      if (direction === 'up') {
        // Tenta focar o primeiro slot de poção disponível
        const potionSlots = Array.from(document.querySelectorAll('#hud-potions-container .potion-slot'));
        const availablePotion = potionSlots.find(p => p.querySelector('img') || p.innerHTML.includes('<svg'));
        if (availablePotion) {
          this.setFocus(availablePotion);
          return;
        }
      } else if (direction === 'down' && this.focusedElement?.classList.contains('potion-slot')) {
        // Se estava nas poções, desce de volta para a primeira carta da mão
        if (elements.length > 0) {
          this.setFocus(elements[0]);
          return;
        }
      }
    }

    // Se estiver navegando em slots de poções no combate
    if (this.focusedElement && this.focusedElement.classList.contains('potion-slot')) {
      const potionSlots = Array.from(document.querySelectorAll('#hud-potions-container .potion-slot'));
      const pIdx = potionSlots.indexOf(this.focusedElement);
      if (direction === 'left' && pIdx > 0) {
        this.setFocus(potionSlots[pIdx - 1]);
        return;
      } else if (direction === 'right' && pIdx < potionSlots.length - 1) {
        this.setFocus(potionSlots[pIdx + 1]);
        return;
      } else if (direction === 'down') {
        if (elements.length > 0) this.setFocus(elements[0]);
        return;
      }
    }

    // Grid 2D de Cartas do Seletor de Deck
    if (context === 'MODAL_DECK_SELECTOR' || context === 'MODAL_DECK') {
      const COLS = 4;
      if (direction === 'right') nextIndex = (currentIndex + 1) % elements.length;
      else if (direction === 'left') nextIndex = (currentIndex - 1 + elements.length) % elements.length;
      else if (direction === 'down') nextIndex = Math.min(elements.length - 1, currentIndex + COLS);
      else if (direction === 'up') nextIndex = Math.max(0, currentIndex - COLS);
    } else {
      // Navegação sequencial padrão
      if (direction === 'right' || direction === 'down') {
        nextIndex = (currentIndex + 1) % elements.length;
      } else if (direction === 'left' || direction === 'up') {
        nextIndex = (currentIndex - 1 + elements.length) % elements.length;
      }
    }

    if (elements[nextIndex]) {
      this.setFocus(elements[nextIndex]);
    }
  }

  /* ==========================================================================
     EXECUÇÃO DE AÇÕES DO JOGADOR
     ========================================================================== */

  handleAction(action) {
    const context = this.getActiveContext();
    this.updateContextAndFocus();

    switch (action) {
      case 'confirm': {
        // Ação Primária: Confirma / Clica no elemento focado
        if (this.focusedElement) {
          this._simulateClick(this.focusedElement);
          // Atualiza o foco após a mudança de estado
          setTimeout(() => this.updateContextAndFocus(), 120);
        }
        break;
      }

      case 'cancel': {
        // Ação Secundária: Voltar / Fechar Modal / Pular
        this._handleCancelAction(context);
        break;
      }

      case 'actionX': {
        // Botão X / ▢ (Square): Finalizar Turno em Combate / Pular Recompensa
        if (context === 'SCREEN_COMBAT') {
          const btnEndTurn = document.getElementById('btn-end-turn');
          if (btnEndTurn && !btnEndTurn.disabled) {
            btnEndTurn.click();
          }
        } else if (context === 'MODAL_REWARD') {
          const skipBtn = document.getElementById('btn-skip-reward');
          if (skipBtn) skipBtn.click();
        }
        break;
      }

      case 'actionY': {
        // Botão Y / △ (Triangle): Abrir Baralho em qualquer tela do jogo
        const btnDeck = document.getElementById('btn-hud-deck');
        if (btnDeck && context !== 'SCREEN_MENU') {
          btnDeck.click();
        }
        break;
      }

      case 'bumperLeft': {
        // LB / L1: Navega para a carta anterior na mão ou aba anterior
        if (context === 'SCREEN_COMBAT') {
          this.navigate('left');
        } else if (context === 'SCREEN_MAP') {
          // Rola mapa para cima
          const mapViewport = document.querySelector('#screen-map .map-viewport');
          if (mapViewport) mapViewport.scrollTop -= 180;
        } else if (context === 'MODAL_DECK') {
          const tabActive = document.getElementById('btn-tab-active-deck');
          if (tabActive) {
            tabActive.click();
            setTimeout(() => this.updateContextAndFocus(), 80);
          }
        }
        break;
      }

      case 'bumperRight': {
        // RB / R1: Navega para a próxima carta na mão ou próxima aba
        if (context === 'SCREEN_COMBAT') {
          this.navigate('right');
        } else if (context === 'SCREEN_MAP') {
          // Rola mapa para baixo
          const mapViewport = document.querySelector('#screen-map .map-viewport');
          if (mapViewport) mapViewport.scrollTop += 180;
        } else if (context === 'MODAL_DECK') {
          const tabReserve = document.getElementById('btn-tab-reserve-deck');
          if (tabReserve) {
            tabReserve.click();
            setTimeout(() => this.updateContextAndFocus(), 80);
          }
        }
        break;
      }

      case 'triggerLeft': {
        // LT: Seleciona e usa Poção 1 rápida
        this._usePotionSlot(0);
        break;
      }

      case 'triggerRight': {
        // RT: Seleciona e usa Poção 2 rápida
        this._usePotionSlot(1);
        break;
      }

      case 'select': {
        // Select / Share: Abre Guia de Regras
        const guideBtn = document.getElementById('btn-hud-guide') || document.getElementById('btn-menu-guide');
        if (guideBtn) guideBtn.click();
        break;
      }

      case 'start': {
        // Start / Options: Alterna Tela Cheia (Fullscreen) nativa
        this._toggleFullscreen();
        break;
      }
    }
  }

  _simulateClick(element) {
    if (!element) return;
    
    // Se for uma carta na mão do combate
    if (element.classList.contains('game-card') && element.closest('#player-hand')) {
      element.click();
      return;
    }

    // Se for uma opção de classe ou santuário
    if (element.classList.contains('hero-class-card')) {
      const selectBtn = element.querySelector('.btn-select-class');
      if (selectBtn) {
        selectBtn.click();
        return;
      }
    }

    // Disparo de clique padrão
    element.click();
  }

  _handleCancelAction(context) {
    // 1. Fecha modais abertos
    const activeModal = document.querySelector('.modal-backdrop.active');
    if (activeModal) {
      const closeBtn = activeModal.querySelector('.modal-close-btn');
      if (closeBtn) {
        closeBtn.click();
        setTimeout(() => this.updateContextAndFocus(), 100);
        return;
      }
      // Se for a loja do mercador, clica em sair
      if (activeModal.id === 'modal-merchant') {
        const leaveBtn = document.getElementById('btn-leave-merchant');
        if (leaveBtn) leaveBtn.click();
        return;
      }
      // Se for recompensa, clica em pular
      if (activeModal.id === 'modal-reward') {
        const skipBtn = document.getElementById('btn-skip-reward');
        if (skipBtn) skipBtn.click();
        return;
      }
    }

    // 2. Cinemática: Pular
    if (context === 'SCREEN_CINEMATIC') {
      const skipBtn = document.querySelector('#screen-cinematic .btn-cinematic-skip');
      if (skipBtn) skipBtn.click();
      return;
    }

    // 3. Telas de Fim de Jogo: Retornar ao Menu
    if (context === 'SCREEN_VICTORY') {
      const menuBtn = document.getElementById('btn-victory-menu');
      if (menuBtn) menuBtn.click();
      return;
    }
    if (context === 'SCREEN_DEFEAT') {
      const menuBtn = document.getElementById('btn-defeat-menu');
      if (menuBtn) menuBtn.click();
      return;
    }

    // 4. Se estiver em combate focando poção, volta para as cartas
    if (context === 'SCREEN_COMBAT' && this.focusedElement?.classList.contains('potion-slot')) {
      const cards = this.getFocusableElements(context);
      if (cards.length > 0) this.setFocus(cards[0]);
    }
  }

  _usePotionSlot(slotIndex) {
    if (this.getActiveContext() !== 'SCREEN_COMBAT') return;
    const slot = document.getElementById(`potion-slot-${slotIndex}`);
    if (slot) {
      slot.click();
    }
  }

  _toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  /* ==========================================================================
     HUD VISUAL DE DICAS DE BOTÕES (OVERLAY)
     ========================================================================== */

  updateHudHints() {
    if (!this.hudBarEl || !this.isGamepadMode) return;

    const contentEl = document.getElementById('gamepad-hud-content');
    if (!contentEl) return;

    const context = this.getActiveContext();
    const isPs = this.gamepadType === 'playstation';

    // Rótulos dos botões com estilo dinâmico Xbox / PlayStation
    const btnA = isPs ? '✕' : 'A';
    const btnB = isPs ? '◯' : 'B';
    const btnX = isPs ? '▢' : 'X';
    const btnY = isPs ? '△' : 'Y';
    const btnLb = isPs ? 'L1' : 'LB';
    const btnRb = isPs ? 'R1' : 'RB';

    let hintsHtml = '';

    const badge = (key, label, colorClass = '') => `
      <div class="gamepad-hint-item">
        <span class="gamepad-btn-badge ${colorClass}">${key}</span>
        <span class="gamepad-hint-text">${label}</span>
      </div>
    `;

    switch (context) {
      case 'SCREEN_COMBAT':
        hintsHtml = `
          ${badge('D-Pad', 'Cartas')}
          ${badge(btnA, 'Jogar Carta', 'btn-green')}
          ${badge(btnX, 'Finalizar Turno', 'btn-blue')}
          ${badge('Cima / LT', 'Poções')}
          ${badge(btnY, 'Baralho', 'btn-yellow')}
        `;
        break;

      case 'SCREEN_MAP':
        hintsHtml = `
          ${badge('D-Pad', 'Escolher Rota')}
          ${badge(btnA, 'Viajar', 'btn-green')}
          ${badge(`${btnLb}/${btnRb}`, 'Rolar Mapa')}
          ${badge(btnY, 'Baralho', 'btn-yellow')}
        `;
        break;

      case 'SCREEN_MENU':
        hintsHtml = `
          ${badge('D-Pad', 'Navegar')}
          ${badge(btnA, 'Confirmar', 'btn-green')}
          ${badge('Start', 'Tela Cheia')}
        `;
        break;

      case 'MODAL_CLASS_SELECT':
        hintsHtml = `
          ${badge('D-Pad', 'Escolher Classe')}
          ${badge(btnA, 'Iniciar Jornada', 'btn-green')}
          ${badge(btnB, 'Voltar ao Menu', 'btn-red')}
        `;
        break;

      case 'SCREEN_CINEMATIC':
        hintsHtml = `
          ${badge(btnA, 'Continuar', 'btn-green')}
          ${badge(btnB, 'Pular Cutscene', 'btn-red')}
        `;
        break;

      case 'MODAL_REWARD':
        hintsHtml = `
          ${badge('D-Pad', 'Selecionar Carta')}
          ${badge(btnA, 'Coletar Recompensa', 'btn-green')}
          ${badge(btnX, 'Pular', 'btn-blue')}
        `;
        break;

      case 'MODAL_MERCHANT':
        hintsHtml = `
          ${badge('D-Pad', 'Navegar Itens')}
          ${badge(btnA, 'Comprar', 'btn-green')}
          ${badge(btnB, 'Sair da Loja', 'btn-red')}
        `;
        break;

      case 'MODAL_SHRINE':
        hintsHtml = `
          ${badge('D-Pad', 'Escolher Bênção')}
          ${badge(btnA, 'Confirmar Escolha', 'btn-green')}
        `;
        break;

      case 'MODAL_DECK_SELECTOR':
        hintsHtml = `
          ${badge('D-Pad', 'Navegar Deck')}
          ${badge(btnA, 'Aprimorar / Forjar', 'btn-green')}
          ${badge(btnB, 'Cancelar', 'btn-red')}
        `;
        break;

      case 'SCREEN_VICTORY':
      case 'SCREEN_DEFEAT':
        hintsHtml = `
          ${badge('D-Pad', 'Navegar')}
          ${badge(btnA, 'Confirmar', 'btn-green')}
          ${badge(btnB, 'Menu Principal', 'btn-red')}
        `;
        break;

      default:
        hintsHtml = `
          ${badge('D-Pad', 'Navegar')}
          ${badge(btnA, 'Confirmar', 'btn-green')}
          ${badge(btnB, 'Voltar', 'btn-red')}
        `;
        break;
    }

    contentEl.innerHTML = hintsHtml;
  }
}
