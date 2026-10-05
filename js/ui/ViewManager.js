/**
 * js/ui/ViewManager.js
 * Orquestrador de Visualização, Transição de Telas, Modais, HUD e Barra de Relíquias de "Cards e Dungeons".
 */

import { CardRenderer } from './CardRenderer.js';
import { CARDS } from '../data/cards.js';

export class ViewManager {
  /**
   * @param {Object} options
   * @param {Object} options.gameState Referência ao GameState
   */
  constructor({ gameState }) {
    this.gameState = gameState;

    this._cacheElements();
    this._bindGlobalEvents();
  }

  _cacheElements() {
    // HUD Header
    this.hudHpFill = document.getElementById('hud-hp-bar-fill');
    this.hudHpText = document.getElementById('hud-hp-text');
    this.hudGoldText = document.getElementById('hud-gold-text');
    this.hudDeckCount = document.getElementById('hud-deck-count');
    this.hudActText = document.getElementById('hud-act-text');
    this.hudTimerText = document.getElementById('hud-timer-text');
    this.relicsBar = document.getElementById('relics-bar');
    this.btnViewDeck = document.getElementById('btn-hud-deck');
    this.btnMusic = document.getElementById('btn-music');
    this.btnToggleMute = document.getElementById('btn-hud-audio');
    this.btnOpenGuide = document.getElementById('btn-hud-guide');

    // Menu Controls
    this.btnContinue = document.getElementById('btn-continue');

    // Telas
    this.screens = {
      menu: document.getElementById('screen-menu'),
      cinematic: document.getElementById('screen-cinematic'),
      map: document.getElementById('screen-map'),
      combat: document.getElementById('screen-combat'),
      victory: document.getElementById('screen-victory'),
      defeat: document.getElementById('screen-defeat')
    };

    // Modais
    this.modals = {
      deck: document.getElementById('modal-deck'),
      deckSelector: document.getElementById('modal-deck-selector'),
      shrine: document.getElementById('modal-shrine'),
      reward: document.getElementById('modal-reward'),
      guide: document.getElementById('modal-guide'),
      classSelect: document.getElementById('modal-class-select'),
      merchant: document.getElementById('modal-merchant'),
      event: document.getElementById('modal-event'),
      actTransition: document.getElementById('modal-act-transition'),
      cardSwap: document.getElementById('modal-card-swap'),
      treasure: document.getElementById('modal-treasure')
    };

    // Barra de Poções (Fase 3)
    this.hudPotionsContainer = document.getElementById('hud-potions-container');

    // Toast Container
    this.toastContainer = document.getElementById('toast-container');

    // Aplica cenários de alta definição nas telas principais
    this.applyScreenBackgrounds();
  }

  _bindGlobalEvents() {
    // Botão Ver Baralho do HUD
    if (this.btnViewDeck) {
      this.btnViewDeck.addEventListener('click', () => {
        this.openDeckInspection();
      });
    }

    // Botão de Música Ambiente
    if (this.btnMusic) {
      this.btnMusic.addEventListener('click', () => {
        this.toggleMusic();
      });
    }

    // Botão de Áudio Som / Mudo
    if (this.btnToggleMute) {
      this.btnToggleMute.addEventListener('click', () => {
        this.toggleAudioMute();
      });
    }

    // Botão de Ajuda / Guia
    if (this.btnOpenGuide) {
      this.btnOpenGuide.addEventListener('click', () => {
        this.openGuideModal();
      });
    }

    // Fechar modais ao clicar no botão fechar ou fora
    Object.values(this.modals).forEach(modalEl => {
      if (!modalEl) return;
      const closeBtn = modalEl.querySelector('.modal-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          this.closeModal(modalEl);
        });
      }
      modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) {
          // Modais críticos de progressão que NUNCA devem ser fechados acidentalmente clicando no fundo
          const nonDismissible = [
            'modal-reward',
            'modal-shrine',
            'modal-act-transition',
            'modal-class-select',
            'modal-deck-selector',
            'modal-card-swap',
            'modal-treasure'
          ];
          if (!nonDismissible.includes(modalEl.id)) {
            this.closeModal(modalEl);
          }
        }
      });
    });
  }

  /**
   * Atualiza a barra de topo (HUD) e controles de persistência
   */
  updateHud() {
    const hero = this.gameState.hero;
    if (!hero) return;

    if (this.hudHpFill) {
      const pct = Math.max(0, Math.min(100, (hero.hp / hero.maxHp) * 100));
      this.hudHpFill.style.width = `${pct}%`;
    }
    if (this.hudHpText) {
      this.hudHpText.textContent = `${hero.hp} / ${hero.maxHp}`;
    }
    if (this.hudGoldText) {
      this.hudGoldText.textContent = `${hero.gold || 50} Ouro`;
    }
    if (this.hudDeckCount) {
      this.hudDeckCount.textContent = `${hero.deck ? hero.deck.length : 0}`;
    }

    // Atualiza Indicador do Ato
    if (this.hudActText) {
      const act = this.gameState.currentAct || 1;
      const actNames = { 1: 'Ato I', 2: 'Ato II', 3: 'Ato III' };
      this.hudActText.textContent = actNames[act] || `Ato ${act}`;
    }

    // Atualiza Display do Cronômetro
    this.updateRunTimerDisplay();

    // Atualiza Barra de Relíquias
    this.updateRelicsBar();

    // Atualiza Barra de Poções (Fase 3)
    this.updatePotionsBar();

    // Atualiza Botão Continuar Jornada no Menu
    if (this.btnContinue) {
      const hasSave = this.gameState.hasSavedRun();
      this.btnContinue.style.display = hasSave ? 'inline-flex' : 'none';
    }

    // Atualiza Botão de Música
    this.updateMusicButton();
  }

  /**
   * Inicia o cronômetro em tempo real da jornada (1 tick por segundo)
   */
  startRunTimer() {
    this.stopRunTimer();
    this._runTimerInterval = setInterval(() => {
      if (this.gameState && this.screens.menu && !this.screens.menu.classList.contains('active')) {
        this.gameState.elapsedTime = (this.gameState.elapsedTime || 0) + 1;
        this.updateRunTimerDisplay();
      }
    }, 1000);
  }

  /**
   * Para o cronômetro em tempo real
   */
  stopRunTimer() {
    if (this._runTimerInterval) {
      clearInterval(this._runTimerInterval);
      this._runTimerInterval = null;
    }
  }

  /**
   * Formata segundos no formato MM:SS ou HH:MM:SS
   * @param {number} seconds
   * @returns {string}
   */
  formatRunTime(seconds = 0) {
    const s = Math.max(0, Math.floor(seconds));
    const hours = Math.floor(s / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;
    const pad = (n) => String(n).padStart(2, '0');
    if (hours > 0) {
      return `${pad(hours)}:${pad(mins)}:${pad(secs)}`;
    }
    return `${pad(mins)}:${pad(secs)}`;
  }

  /**
   * Atualiza o elemento de texto do timer no HUD
   */
  updateRunTimerDisplay() {
    if (this.hudTimerText) {
      this.hudTimerText.textContent = this.formatRunTime(this.gameState.elapsedTime || 0);
    }
  }

  /**
   * Atualiza o fundo da masmorra no mapa e combate de acordo com o Ato
   * @param {number} [act=1]
   */
  updateDungeonBackground(act = 1) {
    const bgMap = {
      1: 'assets/backgrounds/catacombs.jpg',
      2: 'assets/backgrounds/mines.jpg',
      3: 'assets/backgrounds/dragon_lair.jpg'
    };
    const bgUrl = bgMap[act] || bgMap[1];
    const mapScreen = document.getElementById('screen-map');
    const combatScreen = document.getElementById('screen-combat');
    if (mapScreen) {
      mapScreen.style.backgroundImage = `radial-gradient(circle at 50% 50%, rgba(10, 11, 16, 0.72) 0%, rgba(6, 7, 10, 0.94) 100%), url('${bgUrl}')`;
      mapScreen.style.backgroundSize = 'cover';
      mapScreen.style.backgroundPosition = 'center';
    }
    if (combatScreen) {
      combatScreen.style.backgroundImage = `radial-gradient(ellipse at 50% 36%, rgba(10, 12, 18, 0.25) 0%, rgba(6, 7, 10, 0.78) 100%), url('${bgUrl}')`;
      combatScreen.style.backgroundSize = 'cover';
      combatScreen.style.backgroundPosition = 'center';
      combatScreen.style.filter = 'contrast(1.1) brightness(0.96) saturate(1.05)';
      const combatStage = combatScreen.querySelector('.combat-stage');
      if (combatStage) {
        combatStage.style.backgroundImage = 'none';
        combatStage.style.background = 'transparent';
      }
    }
  }

  /**
   * Aplica cenários de alta definição nas telas de Menu, Vitória e Derrota
   */
  applyScreenBackgrounds() {
    if (this.screens && this.screens.menu) {
      this.screens.menu.style.backgroundImage = `radial-gradient(circle at 50% 45%, rgba(10, 11, 16, 0.45) 0%, rgba(6, 7, 10, 0.88) 100%), url('assets/backgrounds/main_menu_bg.jpg')`;
      this.screens.menu.style.backgroundSize = 'cover';
      this.screens.menu.style.backgroundPosition = 'center';
    }
    if (this.screens && this.screens.victory) {
      this.screens.victory.style.backgroundImage = `radial-gradient(circle at 50% 50%, rgba(10, 11, 16, 0.45) 0%, rgba(6, 7, 10, 0.9) 100%), url('assets/backgrounds/victory_bg.jpg')`;
      this.screens.victory.style.backgroundSize = 'cover';
      this.screens.victory.style.backgroundPosition = 'center';
    }
    if (this.screens && this.screens.defeat) {
      this.screens.defeat.style.backgroundImage = `radial-gradient(circle at 50% 50%, rgba(20, 8, 10, 0.5) 0%, rgba(8, 6, 8, 0.92) 100%), url('assets/backgrounds/defeat_bg.jpg')`;
      this.screens.defeat.style.backgroundSize = 'cover';
      this.screens.defeat.style.backgroundPosition = 'center';
    }
  }

  /**
   * Renderiza a barra de relíquias passivas equipadas
   */
  updateRelicsBar() {
    if (!this.relicsBar) return;

    const hero = this.gameState.hero;
    const relics = hero?.relics || [];

    if (relics.length === 0) {
      this.relicsBar.style.display = 'none';
      return;
    }

    this.relicsBar.style.display = 'flex';
    this.relicsBar.innerHTML = '';

    const relicImgMap = {
      amulet_strength: 'assets/relics/relic_strength.jpg',
      blood_chalice: 'assets/relics/relic_blood.jpg',
      spike_shield: 'assets/relics/relic_spikes.jpg',
      ancient_orb: 'assets/relics/relic_mana.jpg',
      poison_vial: 'assets/relics/relic_poison.jpg',
      fortune_bag: 'assets/relics/relic_fortune.jpg',
      ether_cloak: 'assets/relics/relic_cloak.jpg',
      whetstone: 'assets/relics/relic_whetstone.jpg'
    };

    relics.forEach(relic => {
      const slot = document.createElement('div');
      slot.className = 'relic-slot';
      slot.setAttribute('data-tooltip', `${relic.name}: ${relic.description}`);

      const relicImg = relicImgMap[relic.id] || 'assets/relics/relic_strength.jpg';
      slot.innerHTML = `<img src="${relicImg}" alt="${relic.name}" class="relic-slot-img" />`;

      slot.addEventListener('click', () => {
        if (typeof window !== 'undefined' && window.SoundFX) {
          window.SoundFX.playButtonClick();
        }
        this.showToast(`✨ ${relic.name}: ${relic.description}`, 'info');
      });

      this.relicsBar.appendChild(slot);
    });
  }

  /**
   * Renderiza os 3 slots de poções consumíveis no HUD com assets HD
   */
  updatePotionsBar() {
    const container = document.getElementById('hud-potions-container');
    if (!container) return;

    const slots = container.querySelectorAll('.potion-slot');
    if (!slots || slots.length === 0) return;

    const hero = this.gameState.hero;
    const potions = hero?.potions || [null, null, null];

    const potionImgMap = {
      potion_health: 'assets/potions/potion_health.jpg',
      potion_energy: 'assets/potions/potion_energy.jpg',
      potion_poison: 'assets/potions/potion_poison.jpg',
      potion_fire: 'assets/potions/potion_fire.jpg',
      potion_stone: 'assets/potions/potion_stone.jpg',
      potion_strength: 'assets/potions/potion_strength.jpg'
    };

    slots.forEach((slot, index) => {
      const pot = potions[index];
      const newSlot = slot.cloneNode(false);
      slot.parentNode.replaceChild(newSlot, slot);

      if (pot) {
        newSlot.className = 'potion-slot has-potion';
        newSlot.setAttribute('data-slot-index', index);
        newSlot.setAttribute('data-tooltip', `${pot.name}: ${pot.description} (Clique para Usar)`);
        const potImg = potionImgMap[pot.id] || 'assets/potions/potion_health.jpg';
        newSlot.innerHTML = `<img src="${potImg}" alt="${pot.name}" class="potion-slot-img" />`;

        newSlot.addEventListener('click', () => {
          if (this.onPotionClicked) {
            this.onPotionClicked(index, pot);
            return;
          }

          if (this.gameState.currentCombat && !this.gameState.currentCombat.isFinished) {
            try {
              const res = this.gameState.currentCombat.usePotion(index);
              if (res.success) {
                if (typeof window !== 'undefined' && window.SoundFX && window.SoundFX.playPotion) {
                  window.SoundFX.playPotion();
                }
                const pName = res.potion?.name || pot.name;
                const pDesc = res.potion?.description || pot.description;
                this.showToast(`🧪 ${pName}: ${pDesc}`, 'success');
                this.updateHud();

                if (window.GameApp && window.GameApp.combatRenderer) {
                  const cr = window.GameApp.combatRenderer;
                  if (cr.combatFx) {
                    if (pot.id === 'potion_fire') cr.combatFx.triggerFlame(cr.enemyAvatarEl);
                    else if (pot.id === 'potion_poison') cr.combatFx.triggerPoison(cr.enemyAvatarEl);
                    else if (pot.id === 'potion_stone') cr.combatFx.triggerShield(cr.heroAvatarEl);
                    else if (pot.id === 'potion_health') cr.combatFx.triggerHeal(cr.heroAvatarEl);
                  }
                  if (res.damageDealt > 0 && cr.enemyAvatarEl) {
                    cr.showFloatingNumber(cr.enemyAvatarEl, `-${res.damageDealt}`, 'damage');
                    cr.triggerHitFlash(cr.enemyAvatarEl);
                  }
                  if (res.blockGained > 0 && cr.heroAvatarEl) {
                    cr.showFloatingNumber(cr.heroAvatarEl, `+${res.blockGained}`, 'block');
                  }
                  if (res.healDone > 0 && cr.heroAvatarEl) {
                    cr.showFloatingNumber(cr.heroAvatarEl, `+${res.healDone}`, 'heal');
                  }
                  cr.renderCombatState();
                }
              } else {
                this.showToast(res.message, 'warning');
              }
            } catch (err) {
              this.showToast(err.message, 'error');
            }
          } else {
            if (pot.canUseOutOfCombat) {
              try {
                const res = this.gameState.usePotion(index);
                if (res.success) {
                  if (typeof window !== 'undefined' && window.SoundFX && window.SoundFX.playPotion) {
                    window.SoundFX.playPotion();
                  }
                  const pName = res.potion?.name || pot.name;
                  const pDesc = res.potion?.description || pot.description;
                  this.showToast(`🧪 ${pName}: ${pDesc}`, 'success');
                  this.updateHud();
                } else {
                  this.showToast(res.message, 'warning');
                }
              } catch (err) {
                this.showToast(err.message, 'error');
              }
            } else {
              this.showToast('Esta poção só pode ser usada durante o combate!', 'warning');
            }
          }
        });
      } else {
        newSlot.className = 'potion-slot is-empty';
        newSlot.removeAttribute('data-slot-index');
        newSlot.setAttribute('data-tooltip', 'Slot de Poção Vazio');
        newSlot.innerHTML = '<img src="assets/potions/potion_slot_empty.jpg" alt="Vazio" class="potion-slot-img empty" />';
      }
    });
  }

  /**
   * Alterna a música ambiente da masmorra
   */
  toggleMusic() {
    if (typeof window === 'undefined' || !window.SoundFX) return;

    if (window.SoundFX.isMusicPlaying) {
      window.SoundFX.stopDungeonMusic();
      this.showToast('Música ambiente pausada.', 'info');
    } else {
      window.SoundFX.startDungeonMusic();
      this.showToast('Música ambiente de masmorra ativada.', 'info');
    }

    this.updateMusicButton();
  }

  /**
   * Atualiza o estado visual do botão de música
   */
  updateMusicButton() {
    if (!this.btnMusic) return;

    const isPlaying = typeof window !== 'undefined' && window.SoundFX && window.SoundFX.isMusicPlaying;
    if (isPlaying) {
      this.btnMusic.classList.add('music-active');
      this.btnMusic.innerHTML = '🎵';
      this.btnMusic.setAttribute('data-tooltip', 'Música Ambiente (Ativada - Clique para Pausar)');
    } else {
      this.btnMusic.classList.remove('music-active');
      this.btnMusic.innerHTML = '🔇';
      this.btnMusic.setAttribute('data-tooltip', 'Música Ambiente (Desativada - Clique para Tocar)');
    }
  }

  /**
   * Alterna a tela ativa
   * @param {string} screenKey 'menu' | 'map' | 'combat' | 'victory' | 'defeat'
   */
  showScreen(screenKey) {
    if (this.toastContainer) {
      this.toastContainer.innerHTML = '';
    }

    Object.entries(this.screens).forEach(([key, el]) => {
      if (!el) return;
      if (key === screenKey) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    this.updateHud();

    // Oculta a barra de topo no Menu Principal e na Cinemática
    const headerEl = document.querySelector('.game-header');
    if (headerEl) {
      if (screenKey === 'menu' || screenKey === 'cinematic') {
        headerEl.style.display = 'none';
      } else {
        headerEl.style.display = 'flex';
      }
    }

    if (typeof window !== 'undefined' && window.GamepadManager) {
      setTimeout(() => window.GamepadManager.updateContextAndFocus(), 60);
    }
  }

  /**
   * Abre um modal específico
   */
  openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
    if (typeof window !== 'undefined' && window.SoundFX) {
      window.SoundFX.playButtonClick();
    }
    if (typeof window !== 'undefined' && window.GamepadManager) {
      setTimeout(() => window.GamepadManager.updateContextAndFocus(), 60);
    }
  }

  /**
   * Fecha um modal específico
   */
  closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    if (typeof window !== 'undefined' && window.SoundFX) {
      window.SoundFX.playButtonClick();
    }
    if (typeof window !== 'undefined' && window.GamepadManager) {
      setTimeout(() => window.GamepadManager.updateContextAndFocus(), 60);
    }
  }

  /**
   * Abre modal de inspeção e gestão do Deck do jogador (Baralho Ativo vs Baú de Reserva)
   */
  openDeckInspection() {
    this.deckTab = 'active';
    this.pendingSwapReserveCard = null;
    this._renderDeckInspectionView();
    this.openModal(this.modals.deck);
  }

  /**
   * Renderiza a visualização com abas do Modal de Baralho (Ativo vs Reserva)
   */
  _renderDeckInspectionView() {
    const modal = this.modals.deck;
    if (!modal) return;

    const tabsContainer = modal.querySelector('.deck-modal-tabs');
    if (tabsContainer) tabsContainer.style.display = 'flex';

    const btnTabActive = modal.querySelector('#btn-tab-active-deck');
    const btnTabReserve = modal.querySelector('#btn-tab-reserve-deck');
    const tabActiveCount = modal.querySelector('#tab-active-count');
    const tabReserveCount = modal.querySelector('#tab-reserve-count');
    const titleEl = modal.querySelector('#deck-modal-title');
    const countEl = modal.querySelector('#deck-modal-count');
    const hintEl = modal.querySelector('#deck-tab-hint');
    const gridEl = modal.querySelector('#deck-modal-grid');

    const hero = this.gameState.hero || {};
    const deck = hero.deck || [];
    const reserve = hero.reserveDeck || [];
    const maxDeck = hero.maxDeckSize || 15;

    if (tabActiveCount) tabActiveCount.textContent = `${deck.length}/${maxDeck}`;
    if (tabReserveCount) tabReserveCount.textContent = `${reserve.length}`;

    if (btnTabActive) {
      btnTabActive.classList.toggle('active', this.deckTab === 'active');
      btnTabActive.onclick = () => {
        this.deckTab = 'active';
        this.pendingSwapReserveCard = null;
        this._renderDeckInspectionView();
      };
    }

    if (btnTabReserve) {
      btnTabReserve.classList.toggle('active', this.deckTab === 'reserve');
      btnTabReserve.onclick = () => {
        this.deckTab = 'reserve';
        this.pendingSwapReserveCard = null;
        this._renderDeckInspectionView();
      };
    }

    if (hintEl) hintEl.style.display = 'block';

    if (this.deckTab === 'active') {
      if (this.pendingSwapReserveCard) {
        if (titleEl) titleEl.textContent = `Trocar por "${this.pendingSwapReserveCard.name}"`;
        if (countEl) countEl.textContent = `Selecione a carta ativa para trocar`;
        if (hintEl) {
          hintEl.textContent = `Clique na carta do baralho ativo que você deseja mover para a reserva para equipar "${this.pendingSwapReserveCard.name}".`;
        }
      } else {
        if (titleEl) titleEl.textContent = 'Baralho de Combate Ativo';
        if (countEl) countEl.textContent = `${deck.length}/${maxDeck} Cartas`;
        if (hintEl) {
          hintEl.textContent = 'Cartas ativas que serão compradas durante o combate (mínimo 10, máximo 15). Clique em uma carta para movê-la para o Baú de Reserva.';
        }
      }

      if (gridEl) {
        gridEl.innerHTML = '';
        deck.forEach(card => {
          const cardEl = CardRenderer.renderCard(card, {
            playable: this.pendingSwapReserveCard ? true : deck.length > 10,
            onClick: () => {
              if (this.pendingSwapReserveCard) {
                try {
                  this.gameState.swapActiveAndReserveCard(card.uid, this.pendingSwapReserveCard.uid);
                  if (window.SoundFX && typeof window.SoundFX.playCardDraw === 'function') {
                    window.SoundFX.playCardDraw();
                  }
                  this.showToast(`"${card.name}" movida para reserva. "${this.pendingSwapReserveCard.name}" equipada no baralho!`, 'success');
                  this.pendingSwapReserveCard = null;
                  this.updateHud();
                  this._renderDeckInspectionView();
                } catch (err) {
                  this.showToast(err.message, 'error');
                }
                return;
              }
              if (deck.length <= 10) {
                this.showToast('O baralho ativo deve conter no mínimo 10 cartas para combater!', 'warning');
                return;
              }
              try {
                this.gameState.moveCardToReserve(card.uid);
                if (window.SoundFX && typeof window.SoundFX.playCardDraw === 'function') {
                  window.SoundFX.playCardDraw();
                }
                this.showToast(`"${card.name}" guardada no Baú de Reserva.`, 'info');
                this.updateHud();
                this._renderDeckInspectionView();
              } catch (err) {
                this.showToast(err.message, 'error');
              }
            }
          });
          gridEl.appendChild(cardEl);
        });
      }
    } else {
      // Aba Reserva
      if (titleEl) titleEl.textContent = 'Baú de Reserva';
      if (countEl) countEl.textContent = `${reserve.length} Cartas na Reserva`;
      if (hintEl) {
        hintEl.textContent = 'Cartas guardadas no baú. Clique em uma carta para equipá-la ou substituí-la no Baralho de Combate Ativo.';
      }

      if (gridEl) {
        gridEl.innerHTML = '';
        if (reserve.length === 0) {
          gridEl.innerHTML = `
            <div class="empty-reserve-box" style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; color: var(--gold-light); opacity: 0.85;">
              <div style="font-size: 2.2rem; margin-bottom: 8px;">📦</div>
              <strong style="font-size: 1.1rem; display: block; margin-bottom: 6px;">Seu Baú de Reserva está vazio</strong>
              <p style="font-size: 0.9rem; color: #a0aec0; margin: 0 auto; max-width: 420px;">
                Cartas excedentes (quando atingir o teto de 15) ou cartas retiradas do combate ficarão guardadas aqui para quando você quiser adaptá-las.
              </p>
            </div>
          `;
        } else {
          reserve.forEach(card => {
            const cardEl = CardRenderer.renderCard(card, {
              playable: true,
              onClick: () => {
                if (deck.length >= maxDeck) {
                  // Inicia troca direta no baralho cheio
                  this.pendingSwapReserveCard = card;
                  this.deckTab = 'active';
                  this.showToast(`Baralho cheio (${maxDeck}/${maxDeck})! Selecione qual carta ativa substituir por "${card.name}".`, 'info');
                  this._renderDeckInspectionView();
                  return;
                }
                try {
                  this.gameState.moveCardToActiveDeck(card.uid);
                  if (window.SoundFX && typeof window.SoundFX.playCardDraw === 'function') {
                    window.SoundFX.playCardDraw();
                  }
                  this.showToast(`"${card.name}" equipada no Baralho de Combate!`, 'success');
                  this.updateHud();
                  this._renderDeckInspectionView();
                } catch (err) {
                  this.showToast(err.message, 'error');
                }
              }
            });
            gridEl.appendChild(cardEl);
          });
        }
      }
    }
  }

  /**
   * Abre modal genérico de exibição/seleção de cartas do Deck (usado por Mercador/Eventos)
   * @param {Array<Object>} deckCards
   * @param {Object} options
   */
  openDeckModal(deckCards, options = {}) {
    const {
      title = 'Seu Baralho',
      subtitle = `${deckCards.length} cartas`,
      selectable = false,
      onSelect = null
    } = options;

    const modal = this.modals.deck;
    if (!modal) return;

    const tabsContainer = modal.querySelector('.deck-modal-tabs');
    if (tabsContainer) tabsContainer.style.display = 'none';

    const hintEl = modal.querySelector('#deck-tab-hint');
    if (hintEl) hintEl.style.display = 'none';

    const titleEl = modal.querySelector('#deck-modal-title');
    const countEl = modal.querySelector('#deck-modal-count');
    const gridEl = modal.querySelector('#deck-modal-grid');

    if (titleEl) titleEl.textContent = title;
    if (countEl) countEl.textContent = subtitle;

    if (gridEl) {
      gridEl.innerHTML = '';
      deckCards.forEach(card => {
        const cardEl = CardRenderer.renderCard(card, {
          playable: selectable,
          onClick: (c) => {
            if (selectable && onSelect) {
              onSelect(c);
              this.closeModal(modal);
            }
          }
        });
        gridEl.appendChild(cardEl);
      });
    }

    this.openModal(modal);
  }

  /**
   * Abre modal de Substituição Tática de Cartas quando o baralho de combate está cheio (15/15)
   * @param {Object} newCard A nova carta recebida como recompensa
   * @param {function} [onComplete] Callback após substituição ou escolha
   */
  openCardSwapModal(newCard, onComplete = null) {
    const modal = this.modals.cardSwap;
    if (!modal) return;

    // Garante que o GameState esteja explicitamente na tela de recompensa de combate
    if (this.gameState) {
      this.gameState.screen = 'combat_reward';
    }

    const newSlot = modal.querySelector('#card-swap-new-slot');
    const deckGrid = modal.querySelector('#card-swap-deck-grid');
    const btnToReserve = modal.querySelector('#btn-swap-to-reserve');
    const btnToGold = modal.querySelector('#btn-swap-to-gold');
    const maxDeck = this.gameState.hero?.maxDeckSize || 15;
    const badgeEl = modal.querySelector('#swap-modal-badge');
    if (badgeEl) badgeEl.textContent = `Limite: ${this.gameState.hero?.deck?.length || 0}/${maxDeck} Cartas`;

    if (newSlot) {
      newSlot.innerHTML = '';
      const renderedNew = CardRenderer.renderCard(newCard, { playable: false });
      newSlot.appendChild(renderedNew);
    }

    if (btnToReserve) {
      btnToReserve.onclick = () => {
        try {
          if (this.gameState) this.gameState.screen = 'combat_reward';
          const cardTarget = newCard.uid || newCard.id;
          this.gameState.claimCombatReward(cardTarget, null, true);
          if (window.SoundFX && typeof window.SoundFX.playCardDraw === 'function') {
            window.SoundFX.playCardDraw();
          }
          this.closeModal(modal);
          if (this.modals.reward) this.closeModal(this.modals.reward);
          this.showToast(`Carta "${newCard.name}" guardada no Baú de Reserva!`, 'info');
          this.updateHud();
          if (typeof onComplete === 'function') onComplete();
        } catch (err) {
          console.error('Erro ao guardar na reserva:', err);
          this.showToast(err.message, 'error');
        }
      };
    }

    if (btnToGold) {
      btnToGold.onclick = () => {
        try {
          if (this.gameState) this.gameState.screen = 'combat_reward';
          this.gameState.claimCombatReward(null);
          if (window.SoundFX && typeof window.SoundFX.playCoins === 'function') {
            window.SoundFX.playCoins();
          }
          this.closeModal(modal);
          if (this.modals.reward) this.closeModal(this.modals.reward);
          this.showToast('Recompensa convertida em +15 de Ouro!', 'gold');
          this.updateHud();
          if (typeof onComplete === 'function') onComplete();
        } catch (err) {
          console.error('Erro ao converter em ouro:', err);
          this.showToast(err.message, 'error');
        }
      };
    }

    if (deckGrid) {
      deckGrid.innerHTML = '';
      const currentDeck = this.gameState.hero?.deck || [];
      currentDeck.forEach(deckCard => {
        const cardEl = CardRenderer.renderCard(deckCard, {
          playable: true,
          onClick: () => {
            try {
              if (this.gameState) this.gameState.screen = 'combat_reward';
              const cardTarget = newCard.uid || newCard.id;
              const replaceTarget = deckCard.uid || deckCard.id;
              this.gameState.claimCombatReward(cardTarget, replaceTarget, false);
              if (window.SoundFX && typeof window.SoundFX.playCardDraw === 'function') {
                window.SoundFX.playCardDraw();
              }
              this.closeModal(modal);
              if (this.modals.reward) this.closeModal(this.modals.reward);
              this.showToast(`"${deckCard.name}" movida para reserva. "${newCard.name}" equipada no baralho ativo!`, 'success');
              this.updateHud();
              if (typeof onComplete === 'function') onComplete();
            } catch (err) {
              console.error('Erro na substituição de carta:', err);
              this.showToast(err.message, 'error');
            }
          }
        });
        deckGrid.appendChild(cardEl);
      });
    }

    this.openModal(modal);
  }

  /**
   * Abre o Modal da Sala do Tesouro Ancestral com 3 escolhas estratégicas
   * @param {Object} treasureData Dados do tesouro ({ relic, gold, claimed })
   * @param {function} onChoice Callback com a escolha do jogador ('relic' | 'gold' | 'potion')
   */
  openTreasureModal(treasureData, onChoice) {
    const modal = this.modals.treasure;
    if (!modal) return;

    const relicTitleEl = modal.querySelector('#treasure-relic-title');
    const relicDescEl = modal.querySelector('#treasure-relic-desc');
    const goldTitleEl = modal.querySelector('#treasure-gold-title');
    const btnRelic = modal.querySelector('#btn-treasure-relic');
    const btnGold = modal.querySelector('#btn-treasure-gold');
    const btnPotion = modal.querySelector('#btn-treasure-potion');
    const cardRelic = modal.querySelector('#treasure-opt-relic');
    const cardGold = modal.querySelector('#treasure-opt-gold');
    const cardPotion = modal.querySelector('#treasure-opt-potion');

    if (treasureData?.relic) {
      if (relicTitleEl) relicTitleEl.textContent = `👑 ${treasureData.relic.name}`;
      if (relicDescEl) relicDescEl.textContent = treasureData.relic.description;
    }

    if (goldTitleEl) {
      const amount = treasureData?.gold || 100;
      goldTitleEl.textContent = `Baú de Ouro (+${amount} 🪙)`;
    }

    const selectChoice = (type) => {
      this.closeModal(modal);
      if (typeof onChoice === 'function') {
        onChoice(type);
      }
    };

    if (btnRelic) btnRelic.onclick = (e) => { e.stopPropagation(); selectChoice('relic'); };
    if (btnGold) btnGold.onclick = (e) => { e.stopPropagation(); selectChoice('gold'); };
    if (btnPotion) btnPotion.onclick = (e) => { e.stopPropagation(); selectChoice('potion'); };

    if (cardRelic) cardRelic.onclick = () => selectChoice('relic');
    if (cardGold) cardGold.onclick = () => selectChoice('gold');
    if (cardPotion) cardPotion.onclick = () => selectChoice('potion');

    this.openModal(modal);
  }

  /**
   * Abre a tela/modal de Recompensa de Combate pós-vitória (Fase 4 - Ouro, Relíquias e Cartas)
   * @param {Object} [options]
   */
  openCombatReward(options = {}) {
    const rewardModal = this.modals.reward;
    if (!rewardModal) return;

    // 1. Atualiza e exibe o banner de ouro coletado (Fase 4)
    const goldBox = rewardModal.querySelector('#reward-gold-box');
    const goldAmountEl = rewardModal.querySelector('#reward-gold-amount');
    const goldValue = options.gold ?? this.gameState?.combatRewardGold ?? 20;

    if (goldAmountEl) {
      goldAmountEl.textContent = goldValue;
    }
    if (goldBox) {
      goldBox.style.display = 'flex';
    }

    // 2. Toca o efeito sonoro de moedas
    if (typeof window !== 'undefined' && window.SoundFX && typeof window.SoundFX.playCoins === 'function') {
      try {
        window.SoundFX.playCoins();
      } catch (e) {
        console.warn('Erro ao reproduzir som de moedas:', e);
      }
    }

    // 3. Atualiza imediatamente o HUD
    this.updateHud();

    // 4. Abre o modal de recompensa
    this.openModal(rewardModal);
  }

  /**
   * Abre o seletor visual de cartas do baralho para forja/aprimoramento (+) (Fase 4)
   * @param {function} onCardSelect Callback com (cardUid, card) ao selecionar
   */
  openForgeModal(onCardSelect) {
    const modalEl = this.modals.deckSelector || document.getElementById('modal-deck-selector');
    if (!modalEl) return;

    const gridEl = modalEl.querySelector('#deck-selector-grid');
    const subtitleEl = modalEl.querySelector('#deck-selector-subtitle');
    const titleEl = modalEl.querySelector('#deck-selector-title');

    if (titleEl) titleEl.textContent = 'Forjar & Aprimorar Carta (+)';
    if (subtitleEl) subtitleEl.textContent = 'Escolha uma carta do seu baralho para forjar sua versão aprimorada (+):';

    if (gridEl) {
      gridEl.innerHTML = '';
      const deck = this.gameState.hero?.deck || [];

      deck.forEach(card => {
        const isAlreadyUpgraded = Boolean(card.isUpgraded);
        const cardEl = CardRenderer.renderCard(card, {
          playable: !isAlreadyUpgraded,
          disabled: isAlreadyUpgraded,
          customClass: isAlreadyUpgraded ? 'already-upgraded' : 'can-forge',
          onClick: (c) => {
            if (isAlreadyUpgraded) {
              this.showToast(`A carta "${card.name}" já está aprimorada (+)`, 'warning');
              return;
            }
            if (typeof onCardSelect === 'function') {
              onCardSelect(c.uid, c);
            }
            this.closeModal(modalEl);
          }
        });

        if (isAlreadyUpgraded) {
          cardEl.setAttribute('data-tooltip', 'Esta carta já foi aprimorada (+)');
        } else {
          cardEl.setAttribute('data-tooltip', 'Clique para forjar e aprimorar esta carta (+)');
        }

        gridEl.appendChild(cardEl);
      });
    }

    this.openModal(modalEl);
  }

  /**
   * Executa animação visual e sonora de forja
   */
  triggerForgeFx() {
    const flashEl = document.getElementById('combat-screen-flash');
    if (flashEl) {
      flashEl.classList.add('active');
      setTimeout(() => flashEl.classList.remove('active'), 250);
    }
  }

  /**
   * Abre o Modal de Seleção de Classe de Herói
   * @param {function} onSelectClass Callback com a classe escolhida ('warrior' | 'rogue' | 'mage')
   */
  openClassSelectModal(onSelectClass) {
    const modalEl = this.modals.classSelect;
    if (!modalEl) {
      if (typeof onSelectClass === 'function') onSelectClass('warrior');
      return;
    }

    const classCards = modalEl.querySelectorAll('.hero-class-card');
    classCards.forEach(cardEl => {
      const classId = cardEl.getAttribute('data-class') || 'warrior';
      const selectBtn = cardEl.querySelector('.btn-select-class');

      const triggerSelect = (e) => {
        if (e) e.stopPropagation();
        this.closeModal(modalEl);
        if (typeof onSelectClass === 'function') {
          onSelectClass(classId);
        }
      };

      if (selectBtn) selectBtn.onclick = triggerSelect;
      cardEl.onclick = triggerSelect;
    });

    this.openModal(modalEl);
  }

  /**
   * Abre o Modal de Como Jogar / Guia
   */
  openGuideModal() {
    this.openModal(this.modals.guide);
  }

  /**
   * Alterna som ligado/mudo e atualiza visual do botão HUD
   */
  toggleAudioMute() {
    if (typeof window === 'undefined' || !window.SoundFX) return;

    const isMuted = window.SoundFX.toggleMute();
    const assets = window.GameAssets || {};
    const svgs = assets.SVGS || {};

    if (this.btnToggleMute) {
      if (isMuted) {
        this.btnToggleMute.classList.add('muted');
        this.btnToggleMute.innerHTML = svgs.volumeMute || '🔇';
        this.btnToggleMute.setAttribute('data-tooltip', 'Som Desativado');
      } else {
        this.btnToggleMute.classList.remove('muted');
        this.btnToggleMute.innerHTML = svgs.volumeOn || '🔊';
        this.btnToggleMute.setAttribute('data-tooltip', 'Som Ativado');
      }
    }
  }

  /**
   * Exibe notificação temporária Toast no canto da tela
   */
  showToast(message, type = 'info') {
    if (!this.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  /**
   * Abre o Modal da Loja do Mercador Renegado com catálogo interativo
   * @param {Object} params
   * @param {Object} params.merchantData Dados do estoque { cards, relics, removalCost, removalUsed, quote }
   * @param {function} params.onBuyCard Callback ao comprar carta (cardId)
   * @param {function} params.onBuyRelic Callback ao comprar relíquia (relicId)
   * @param {function} params.onBuyRemoval Callback ao pagar serviço de remoção (cardUid)
   * @param {function} params.onLeave Callback ao sair do mercador
   */
  openMerchantModal({ merchantData, onBuyCard, onBuyRelic, onBuyRemoval, onLeave }) {
    const modalEl = this.modals.merchant;
    if (!modalEl || !merchantData) return;

    const goldEl = modalEl.querySelector('#merchant-player-gold');
    const speechEl = modalEl.querySelector('#merchant-speech-bubble');
    const cardsGrid = modalEl.querySelector('#merchant-cards-grid');
    const relicsGrid = modalEl.querySelector('#merchant-relics-grid');
    const btnRemoveCard = modalEl.querySelector('#btn-merchant-remove-card');
    const purificationCard = modalEl.querySelector('.purification-card');
    const btnLeave = modalEl.querySelector('#btn-leave-merchant');

    const assets = (typeof window !== 'undefined' && window.GameAssets) || {};
    const svgs = assets.SVGS || {};

    const relicSvgMap = {
      amulet_strength: svgs.relic_strength || svgs.sword,
      blood_chalice: svgs.relic_blood || svgs.heal,
      spike_shield: svgs.relic_spikes || svgs.shield,
      ancient_orb: svgs.relic_mana || svgs.magic,
      poison_vial: svgs.relic_poison || svgs.relic_blood || svgs.magic,
      fortune_bag: svgs.relic_fortune || svgs.coins || svgs.crown,
      ether_cloak: svgs.relic_cloak || svgs.shield,
      whetstone: svgs.relic_whetstone || svgs.sword
    };

    const updateMerchantView = () => {
      if (goldEl) {
        goldEl.textContent = this.gameState.hero.gold || 0;
      }
      this.updateHud();

      // 1. Renderiza Cartas à Venda
      if (cardsGrid) {
        cardsGrid.innerHTML = '';
        merchantData.cards.forEach(cardItem => {
          const cardDef = CARDS[cardItem.id] || cardItem;
          const wrapper = document.createElement('div');
          wrapper.className = `merchant-card-wrapper ${cardItem.bought ? 'is-sold' : ''}`;

          const cardDom = CardRenderer.renderCard(cardDef, {
            selectable: false
          });
          wrapper.appendChild(cardDom);

          const buyBtn = document.createElement('button');
          buyBtn.className = 'btn btn-primary-gold btn-buy-card';
          buyBtn.innerHTML = `<span>Comprar</span> <span>🪙 ${cardItem.price}</span>`;
          if (cardItem.bought) {
            buyBtn.disabled = true;
            buyBtn.textContent = 'Esgotado';
          } else if (this.gameState.hero.gold < cardItem.price) {
            buyBtn.classList.add('btn-disabled');
            buyBtn.title = 'Ouro insuficiente';
          }

          buyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (onBuyCard) {
              const res = onBuyCard(cardItem.id);
              if (res.success) {
                if (typeof window !== 'undefined' && window.SoundFX && window.SoundFX.playCoins) {
                  window.SoundFX.playCoins();
                }
                if (speechEl && res.quote) speechEl.textContent = `"${res.quote}"`;
                this.showToast(res.message, 'success');
                updateMerchantView();
              } else {
                this.showToast(res.message, 'error');
              }
            }
          });

          wrapper.appendChild(buyBtn);
          cardsGrid.appendChild(wrapper);
        });
      }

      // 2. Renderiza Relíquias à Venda
      if (relicsGrid) {
        relicsGrid.innerHTML = '';
        merchantData.relics.forEach(relicItem => {
          const card = document.createElement('div');
          card.className = `merchant-relic-card ${relicItem.bought ? 'is-sold' : ''}`;

          const iconBox = document.createElement('div');
          iconBox.className = 'merchant-relic-icon-box';
          const rSvg = relicSvgMap[relicItem.id] || svgs.relic_strength || svgs.shield;
          iconBox.innerHTML = rSvg;

          const info = document.createElement('div');
          info.className = 'merchant-relic-info';
          info.innerHTML = `
            <div class="merchant-relic-name">${relicItem.name}</div>
            <div class="merchant-relic-desc">${relicItem.description}</div>
          `;

          const action = document.createElement('div');
          action.className = 'merchant-relic-action';
          const buyBtn = document.createElement('button');
          buyBtn.className = 'btn btn-primary-gold btn-buy-relic';
          buyBtn.innerHTML = `<span>Comprar</span> <span>🪙 ${relicItem.price}</span>`;
          if (relicItem.bought) {
            buyBtn.disabled = true;
            buyBtn.textContent = 'Comprado';
          } else if (this.gameState.hero.gold < relicItem.price) {
            buyBtn.classList.add('btn-disabled');
            buyBtn.title = 'Ouro insuficiente';
          }

          buyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (onBuyRelic) {
              const res = onBuyRelic(relicItem.id);
              if (res.success) {
                if (typeof window !== 'undefined' && window.SoundFX && window.SoundFX.playCoins) {
                  window.SoundFX.playCoins();
                }
                if (speechEl && res.quote) speechEl.textContent = `"${res.quote}"`;
                this.showToast(res.message, 'success');
                updateMerchantView();
              } else {
                this.showToast(res.message, 'error');
              }
            }
          });

          action.appendChild(buyBtn);
          card.appendChild(iconBox);
          card.appendChild(info);
          card.appendChild(action);
          relicsGrid.appendChild(card);
        });
      }

      // 3. Purificação de Deck
      if (btnRemoveCard && purificationCard) {
        if (merchantData.removalUsed) {
          purificationCard.classList.add('is-used');
          btnRemoveCard.disabled = true;
          btnRemoveCard.innerHTML = '<span>Purificado</span>';
        } else {
          purificationCard.classList.remove('is-used');
          btnRemoveCard.disabled = false;
          btnRemoveCard.innerHTML = `<span>Purificar Carta</span><span class="service-price">🪙 ${merchantData.removalCost} Ouro</span>`;
        }
      }
    };

    if (speechEl && merchantData.quote) {
      speechEl.textContent = `"${merchantData.quote}"`;
    }

    if (btnRemoveCard) {
      btnRemoveCard.onclick = () => {
        if (merchantData.removalUsed) return;
        if (this.gameState.hero.gold < merchantData.removalCost) {
          this.showToast(`Ouro insuficiente! Necessário ${merchantData.removalCost} ouro.`, 'error');
          return;
        }

        // Abre modal para o jogador escolher qual carta quer remover
        this.openDeckModal(this.gameState.hero.deck, {
          title: '🔥 Altar de Incineração',
          subtitle: 'Selecione uma carta para ser permanentemente queimada',
          selectable: true,
          onSelect: (selectedCard) => {
            this.closeModal(this.modals.deck);
            if (onBuyRemoval) {
              const res = onBuyRemoval(selectedCard.uid);
              if (res.success) {
                if (typeof window !== 'undefined' && window.SoundFX && window.SoundFX.playCoins) {
                  window.SoundFX.playCoins();
                }
                if (speechEl && res.quote) speechEl.textContent = `"${res.quote}"`;
                this.showToast(res.message, 'success');
                updateMerchantView();
              } else {
                this.showToast(res.message, 'error');
              }
            }
          }
        });
      };
    }

    if (btnLeave) {
      btnLeave.onclick = () => {
        this.closeModal(modalEl);
        if (onLeave) onLeave();
      };
    }

    updateMerchantView();
    this.openModal(modalEl);
  }

  /**
   * Abre o Modal de Evento Narrativo Misterioso com escolhas dinâmicas (Fase 4)
   * @param {Object} params
   * @param {Object} params.eventData Dados do evento narrativo ativo
   * @param {function} params.onChoice Callback executado com o choiceId
   * @param {function} params.onLeave Callback executado ao prosseguir
   */
  openEventModal({ eventData, onChoice, onLeave }) {
    const modalEl = this.modals.event;
    if (!modalEl || !eventData) return;

    const titleEl = modalEl.querySelector('#event-title');
    const headerIconEl = modalEl.querySelector('#event-header-icon');
    const illustrationBox = modalEl.querySelector('#event-illustration-box');
    const storyTextEl = modalEl.querySelector('#event-story-text');
    const choicesContainer = modalEl.querySelector('#event-choices-container');
    const resolutionBox = modalEl.querySelector('#event-resolution-box');
    const resolutionTitle = modalEl.querySelector('#event-resolution-title');
    const resolutionText = modalEl.querySelector('#event-resolution-text');
    const footerEl = modalEl.querySelector('#event-modal-footer');
    const btnLeave = modalEl.querySelector('#btn-leave-event');

    const assets = (typeof window !== 'undefined' && window.GameAssets) || {};
    const svgs = assets.SVGS || {};

    if (titleEl) titleEl.textContent = eventData.title;
    if (headerIconEl) headerIconEl.textContent = '❓';
    if (storyTextEl) storyTextEl.textContent = eventData.description;

    if (illustrationBox) {
      const eventSvg = svgs[eventData.icon] || svgs.event_icon || svgs.altar || '❓';
      illustrationBox.innerHTML = typeof eventSvg === 'string' && eventSvg.startsWith('<svg') ? eventSvg : '❓';
    }

    // Reset estado de resolução
    if (resolutionBox) resolutionBox.style.display = 'none';
    if (footerEl) footerEl.style.display = 'none';
    if (choicesContainer) {
      choicesContainer.style.display = 'flex';
      choicesContainer.innerHTML = '';
    }

    const hero = this.gameState.hero;

    // Toca som de evento misterioso
    if (typeof window !== 'undefined' && window.SoundFX && window.SoundFX.playMysteryEvent) {
      window.SoundFX.playMysteryEvent();
    }

    if (choicesContainer && Array.isArray(eventData.choices)) {
      eventData.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'event-choice-btn';

        const isAvailable = typeof choice.condition === 'function' ? choice.condition(hero) : true;
        if (!isAvailable) {
          btn.classList.add('is-disabled');
          btn.disabled = true;
        }

        const titleDiv = document.createElement('div');
        titleDiv.className = 'event-choice-title';
        titleDiv.innerHTML = `<span>🔹</span> <span>${choice.text}</span>`;

        const detailDiv = document.createElement('div');
        detailDiv.className = 'event-choice-detail';
        detailDiv.textContent = isAvailable ? choice.detail : (choice.unavailableText || 'Indisponível no momento.');

        btn.appendChild(titleDiv);
        btn.appendChild(detailDiv);

        btn.addEventListener('click', () => {
          if (!isAvailable) return;

          // Desativa todas as escolhas para evitar cliques duplos
          const allBtns = choicesContainer.querySelectorAll('.event-choice-btn');
          allBtns.forEach(b => {
            b.disabled = true;
            b.style.pointerEvents = 'none';
          });

          if (onChoice) {
            try {
              const res = onChoice(choice.id);
              if (res) {
                if (resolutionBox) {
                  resolutionBox.style.display = 'block';
                  if (resolutionTitle) resolutionTitle.textContent = res.title || 'Destino Selado';
                  if (resolutionText) resolutionText.textContent = res.message || res.detail || '';
                }
                if (footerEl) {
                  footerEl.style.display = 'flex';
                }
                this.updateHud();
                this.showToast(res.title || 'Evento concluído!', 'success');
              }
            } catch (err) {
              this.showToast(err.message, 'error');
            }
          }
        });

        choicesContainer.appendChild(btn);
      });
    }

    if (btnLeave) {
      btnLeave.onclick = () => {
        this.closeModal(modalEl);
        if (onLeave) onLeave();
      };
    }

    this.openModal(modalEl);
  }

  /**
   * Abre o modal de transição de ato épico com celebração de vitória e recuperação de fôlego (+35% HP)
   * @param {Object} params
   * @param {Object} params.transitionData
   * @param {function} params.onProceed Callback disparado ao clicar em descer para o próximo ato
   */
  openActTransitionModal({ transitionData, onProceed }) {
    const modal = this.modals.actTransition;
    if (!modal) return;

    const titleEl = modal.querySelector('#act-transition-title');
    const badgeEl = modal.querySelector('#act-transition-badge');
    const trophyBox = modal.querySelector('#act-trophy-box');
    const headlineEl = modal.querySelector('#act-transition-headline');
    const loreEl = modal.querySelector('#act-transition-lore');
    const recoveryValueEl = modal.querySelector('#act-recovery-value');
    const recoveryTextEl = modal.querySelector('#act-recovery-text');
    const nextNameEl = modal.querySelector('#act-next-name');
    const nextBossEl = modal.querySelector('#act-next-boss');
    const btnProceed = modal.querySelector('#btn-proceed-act');
    const btnTextEl = modal.querySelector('#btn-proceed-act-text');

    const completedAct = (transitionData.act || 2) - 1;
    const nextAct = transitionData.act || 2;
    const theme = transitionData.actTheme;

    if (titleEl) titleEl.textContent = `ATO ${completedAct} CONQUISTADO!`;
    if (badgeEl) badgeEl.textContent = `VITÓRIA DO ATO ${completedAct}`;

    if (trophyBox) {
      trophyBox.innerHTML = completedAct === 1 ? '🗿' : '💀';
    }

    if (headlineEl) {
      headlineEl.textContent = completedAct === 1
        ? 'O Golem Guardião Rúnico Foi Reduzido a Escombros!'
        : 'O Lich Rei dos Ossos Teve Sua Filactéria Destruída!';
    }

    if (loreEl) {
      loreEl.textContent = completedAct === 1
        ? 'As catacumbas ancestrais estremecem em silêncio. Um caminho secreto de obsidiana se abre, descendo para as minas profundas...'
        : 'A névoa necromântica se dissipa das minas. O calor sufocante e o cheiro de enxofre revelam a entrada do Covil Vulcânico do Tirano!';
    }

    if (recoveryValueEl) recoveryValueEl.textContent = `+${transitionData.healAmount} HP`;
    if (recoveryTextEl) {
      recoveryTextEl.textContent = `Você descansa brevemente e recupera +${transitionData.healAmount} HP (${transitionData.newHp}/${transitionData.maxHp} HP). Suas forças foram restauradas!`;
    }

    if (nextNameEl && theme) nextNameEl.textContent = theme.name;
    if (nextBossEl && theme) nextBossEl.textContent = `Chefe Iminente: ${theme.bossName}`;

    if (btnTextEl) btnTextEl.textContent = `Descer para o Ato ${nextAct} ➔`;

    let proceedTriggered = false;
    const safeProceed = () => {
      if (proceedTriggered) return;
      proceedTriggered = true;
      this.closeModal(modal);
      if (typeof onProceed === 'function') {
        onProceed();
      }
    };

    if (btnProceed) {
      const newBtn = btnProceed.cloneNode(true);
      btnProceed.parentNode.replaceChild(newBtn, btnProceed);
      newBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (window.SoundFX) window.SoundFX.playButtonClick();
        safeProceed();
      });
    }

    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      const newClose = closeBtn.cloneNode(true);
      closeBtn.parentNode.replaceChild(newClose, closeBtn);
      newClose.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        safeProceed();
      });
    }

    this.openModal(modal);
  }
}
