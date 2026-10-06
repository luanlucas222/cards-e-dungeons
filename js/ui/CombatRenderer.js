/**
 * js/ui/CombatRenderer.js
 * Renderizador da Arena de Combate de "Cards e Dungeons".
 * Controla animações, mão em leque, números flutuantes, screenshake, IA telegrafada,
 * badges de status (Buffs & Debuffs) e suporte a Elites (Minotauro Berserker) e Espectro.
 */

import { CardRenderer } from './CardRenderer.js';
import { COMBAT_STATES } from '../engine/CombatSystem.js';
import { CombatFx } from './CombatFx.js';

export class CombatRenderer {
  /**
   * @param {Object} options
   * @param {HTMLElement} options.container Elemento raiz da tela de combate (#screen-combat)
   * @param {Object} options.gameState Referência à instância de GameState
   * @param {function} options.onCombatEnd Callback disparado quando o combate termina
   */
  constructor({ container, gameState, onCombatEnd }) {
    this.container = container;
    this.gameState = gameState;
    this.onCombatEnd = onCombatEnd;
    this.isProcessingEnemyTurn = false;

    this._cacheDomElements();
    this._bindEvents();
  }

  _cacheDomElements() {
    // Top Bar
    this.encounterTitleEl = this.container.querySelector('#combat-encounter-title');
    this.turnCounterEl = this.container.querySelector('#combat-turn-counter');

    // Herói
    this.heroAvatarEl = this.container.querySelector('#hero-avatar-box');
    this.heroNameEl = this.container.querySelector('#hero-name') || this.container.querySelector('.hero-combatant .combatant-name');
    this.heroHpBarFill = this.container.querySelector('#hero-hp-bar-fill');
    this.heroHpBarBleed = this.container.querySelector('#hero-hp-bar-bleed');
    this.heroHpText = this.container.querySelector('#hero-hp-text');
    this.heroArmorBadge = this.container.querySelector('#hero-armor-badge');
    this.heroEnergyOrbs = this.container.querySelector('#hero-energy-orbs');
    this.heroEnergyText = this.container.querySelector('#hero-energy-text');
    this.heroStatusBadgesEl = this.container.querySelector('#hero-status-badges');

    // Inimigo
    this.enemyCombatantEl = this.container.querySelector('#enemy-combatant');
    this.enemyAvatarEl = this.container.querySelector('#enemy-avatar-box');
    this.enemyNameEl = this.container.querySelector('#enemy-name');
    this.enemyHpBarFill = this.container.querySelector('#enemy-hp-bar-fill');
    this.enemyHpBarBleed = this.container.querySelector('#enemy-hp-bar-bleed');
    this.enemyHpText = this.container.querySelector('#enemy-hp-text');
    this.enemyArmorBadge = this.container.querySelector('#enemy-armor-badge');
    this.enemyIntentEl = this.container.querySelector('#enemy-intent-bubble');
    this.enemyStatusBadgesEl = this.container.querySelector('#enemy-status-badges');

    // Área de Ação e Efeitos
    this.combatStageEl = this.container.querySelector('.combat-stage');
    this.actionNotificationEl = this.container.querySelector('#combat-action-notification');
    this.screenFlashEl = this.container.querySelector('#combat-screen-flash');
    this.fxCanvasEl = this.container.querySelector('#combat-fx-canvas');

    if (this.fxCanvasEl && this.combatStageEl) {
      this.combatFx = new CombatFx({
        canvas: this.fxCanvasEl,
        stageContainer: this.combatStageEl
      });
    }

    // Bottom Bar
    this.playerHandEl = this.container.querySelector('#player-hand');
    this.drawPileCountEl = this.container.querySelector('#draw-pile-count');
    this.discardPileCountEl = this.container.querySelector('#discard-pile-count');
    this.btnEndTurn = this.container.querySelector('#btn-end-turn');
  }

  _bindEvents() {
    if (this.btnEndTurn) {
      this.btnEndTurn.addEventListener('click', () => {
        this.handleEndTurnClick();
      });
    }
  }

  /**
   * Helper para tocar áudio com segurança se disponível
   */
  _playSound(soundMethod) {
    if (typeof window !== 'undefined' && window.SoundFX && typeof window.SoundFX[soundMethod] === 'function') {
      window.SoundFX[soundMethod]();
    }
  }

  /**
   * Inicia e renderiza uma sessão de combate
   */
  startCombat() {
    this.isProcessingEnemyTurn = false;
    this.hasHandledCombatEnd = false;
    if (this.combatFx) {
      this.combatFx.resize();
      this.combatFx.startAmbientEmbers(22);
    }
    this.renderCombatState();
    this._playSound('playCardDraw');
  }

  /**
   * Renderiza a visualização completa do combate ativo
   */
  renderCombatState() {
    const combat = this.gameState.currentCombat;
    if (!combat) return;

    const snap = combat.getStateSnapshot();
    const hero = snap.hero;
    const enemy = snap.enemy;

    // Atualiza Cenário de Fundo da Masmorra Conforme o Ato
    const act = this.gameState.currentAct || 1;
    const bgMap = {
      1: 'assets/backgrounds/catacombs.jpg',
      2: 'assets/backgrounds/mines.jpg',
      3: 'assets/backgrounds/dragon_lair.jpg'
    };
    const bgUrl = bgMap[act] || bgMap[1];

    this.container.style.backgroundImage = `
      radial-gradient(ellipse at 50% 36%, rgba(10, 12, 18, 0.25) 0%, rgba(6, 7, 10, 0.78) 100%),
      url('${bgUrl}')
    `;
    this.container.style.backgroundSize = 'cover';
    this.container.style.backgroundPosition = 'center';
    this.container.style.filter = 'contrast(1.1) brightness(0.96) saturate(1.05)';

    if (this.combatStageEl) {
      this.combatStageEl.style.backgroundImage = 'none';
      this.combatStageEl.style.background = 'transparent';
    }

    // 1. Top Bar
    const iconBadge = this.container.querySelector('.encounter-icon-badge');
    if (iconBadge) {
      iconBadge.textContent = enemy.type === 'boss' ? '👑' : (enemy.type === 'elite' ? '🐂' : '⚔️');
    }
    if (this.encounterTitleEl) {
      if (enemy.type === 'boss') {
        this.encounterTitleEl.textContent = 'Batalha Decisiva: ' + enemy.name;
      } else if (enemy.type === 'elite') {
        this.encounterTitleEl.textContent = 'Inimigo de Elite: ' + enemy.name;
      } else {
        this.encounterTitleEl.textContent = 'Combate: ' + enemy.name;
      }
    }
    if (this.turnCounterEl) {
      this.turnCounterEl.textContent = `Turno ${snap.turnCount}`;
    }

    // 2. Lado do Herói
    const assets = (typeof window !== 'undefined' && window.GameAssets) || {};
    const svgs = assets.SVGS || {};

    const heroDef = this.gameState.hero || {};
    const heroSprite = heroDef.sprite || 'assets/sprites/hero.jpg';
    const heroIcon = heroDef.icon || 'hero';
    const heroSvg = svgs[heroIcon] || svgs.hero || '';
    const heroName = heroDef.name || 'Guerreiro Rúnico';

    if (this.heroNameEl) {
      this.heroNameEl.textContent = heroName;
    }

    if (this.heroAvatarEl) {
      this.heroAvatarEl.innerHTML = `
        <img src="${heroSprite}" class="avatar-portrait-img" alt="${heroName}" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='block';">
        <div class="avatar-svg-fallback" style="display:none; width:100%; height:100%;">${heroSvg}</div>
      `;
    }

    // Vida do Herói com animação de sangramento (damage bleed)
    const heroHpPct = Math.max(0, Math.min(100, (hero.hp / hero.maxHp) * 100));
    if (this.heroHpBarFill) {
      this.heroHpBarFill.style.width = `${heroHpPct}%`;
    }
    if (this.heroHpBarBleed) {
      setTimeout(() => {
        if (this.heroHpBarBleed) this.heroHpBarBleed.style.width = `${heroHpPct}%`;
      }, 350);
    }
    if (this.heroHpText) {
      this.heroHpText.textContent = `${hero.hp} / ${hero.maxHp}`;
    }

    // Armadura do Herói
    if (this.heroArmorBadge) {
      if (hero.block > 0) {
        this.heroArmorBadge.textContent = hero.block;
        this.heroArmorBadge.classList.add('active');
      } else {
        this.heroArmorBadge.textContent = '0';
        this.heroArmorBadge.classList.remove('active');
      }
    }

    // Orbes Mágicos de Energia com Líquido Pulsante Arcana
    if (this.heroEnergyOrbs) {
      this.heroEnergyOrbs.innerHTML = '';
      for (let i = 0; i < hero.maxEnergy; i++) {
        const isSpent = i >= hero.energy;
        const orb = document.createElement('div');
        orb.className = `energy-orb ${isSpent ? 'spent' : 'active'}`;
        orb.innerHTML = '<span class="orb-liquid"></span><span class="orb-glint"></span>';
        this.heroEnergyOrbs.appendChild(orb);
      }
    }
    if (this.heroEnergyText) {
      this.heroEnergyText.textContent = `${hero.energy}/${hero.maxEnergy}`;
    }

    // Badges de Status do Herói
    this._renderStatusBadges(this.heroStatusBadgesEl, hero.statuses);

    // 3. Lado do Inimigo
    if (this.enemyCombatantEl) {
      this.enemyCombatantEl.classList.remove('is-boss', 'is-elite');
      if (enemy.type === 'boss') {
        this.enemyCombatantEl.classList.add('is-boss');
      } else if (enemy.type === 'elite') {
        this.enemyCombatantEl.classList.add('is-elite');
      }
    }

    if (this.enemyAvatarEl) {
      const spriteMap = {
        golem_guardiao: 'assets/sprites/golem.jpg',
        lich_rei: 'assets/sprites/lich.jpg',
        dragao_tirano: 'assets/sprites/dragon.jpg',
        minotauro_berserker: 'assets/sprites/minotaur.jpg',
        espectro_lamuriante: 'assets/sprites/specter.jpg',
        esqueleto_guardiao: 'assets/sprites/skeleton.jpg',
        feiticeiro_sombrio: 'assets/sprites/mage.jpg',
        goblin_ladino: 'assets/sprites/goblin.jpg',
        rato_peste: 'assets/sprites/rat.jpg',
        gargula_granito: 'assets/sprites/gargoyle.jpg',
        escavador_obsidiana: 'assets/sprites/burrower.jpg',
        xama_ossos: 'assets/sprites/shaman.jpg',
        elemental_igneo: 'assets/sprites/fire_elemental.jpg',
        cultista_draconico: 'assets/sprites/cultist.jpg'
      };

      const enemyImg = spriteMap[enemy.id] || (enemy.icon ? `assets/sprites/${enemy.icon}.jpg` : 'assets/sprites/goblin.jpg');
      const enemySvg = svgs[enemy.id] || svgs[enemy.icon] || svgs.goblin || '';

      this.enemyAvatarEl.innerHTML = `
        <img src="${enemyImg}" class="avatar-portrait-img" alt="${enemy.name}" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='block';">
        <div class="avatar-svg-fallback" style="display:none; width:100%; height:100%;">${enemySvg}</div>
      `;
    }

    if (this.enemyNameEl) {
      if (enemy.affix) {
        this.enemyNameEl.innerHTML = `
          <span>${enemy.name}</span>
          <div class="enemy-affix-badge" data-tooltip="${enemy.affix.description || ''}">⚡ ${enemy.affix.name}</div>
        `;
      } else {
        this.enemyNameEl.textContent = enemy.name;
      }
    }

    // Vida do Inimigo com animação de sangramento (damage bleed)
    const enemyHpPct = Math.max(0, Math.min(100, (enemy.hp / enemy.maxHp) * 100));
    if (this.enemyHpBarFill) {
      this.enemyHpBarFill.style.width = `${enemyHpPct}%`;
    }
    if (this.enemyHpBarBleed) {
      setTimeout(() => {
        if (this.enemyHpBarBleed) this.enemyHpBarBleed.style.width = `${enemyHpPct}%`;
      }, 350);
    }
    if (this.enemyHpText) {
      this.enemyHpText.textContent = `${enemy.hp} / ${enemy.maxHp}`;
    }

    // Armadura do Inimigo
    if (this.enemyArmorBadge) {
      if (enemy.block > 0) {
        this.enemyArmorBadge.textContent = enemy.block;
        this.enemyArmorBadge.classList.add('active');
      } else {
        this.enemyArmorBadge.textContent = '0';
        this.enemyArmorBadge.classList.remove('active');
      }
    }

    // Badges de Status do Inimigo
    this._renderStatusBadges(this.enemyStatusBadgesEl, enemy.statuses);

    // Placa de Intenção do Inimigo
    this._renderEnemyIntent(enemy.currentIntent);

    // 4. Mão do Jogador
    this._renderPlayerHand(snap.hand, hero.energy);

    // 5. Pilhas de Compra e Descarte
    if (this.drawPileCountEl) {
      this.drawPileCountEl.textContent = snap.drawPileCount;
    }
    if (this.discardPileCountEl) {
      this.discardPileCountEl.textContent = snap.discardPileCount;
    }

    // 6. Botão Finalizar Turno
    if (this.btnEndTurn) {
      this.btnEndTurn.disabled = this.isProcessingEnemyTurn || snap.state !== COMBAT_STATES.HERO_TURN || snap.isFinished;
    }

    // Checagem de Fim de Combate
    if (snap.isFinished) {
      this.handleCombatEnd(snap.combatResult);
    }
  }

  /**
   * Renderiza os badges de status ativos (Buffs & Debuffs)
   * @param {HTMLElement} containerEl
   * @param {Object} statuses
   */
  _renderStatusBadges(containerEl, statuses) {
    if (!containerEl) return;
    containerEl.innerHTML = '';

    if (!statuses) return;

    const assets = (typeof window !== 'undefined' && window.GameAssets) || {};
    const svgs = assets.SVGS || {};

    const statusConfig = {
      strength: {
        label: 'Força',
        icon: svgs.status_strength || svgs.sword,
        cssClass: 'badge-strength',
        tooltip: (v) => `Força (+${v}): Aumenta o dano de cada ataque físico em ${v}.`
      },
      vulnerable: {
        label: 'Vulnerável',
        icon: svgs.status_vulnerable || svgs.shield,
        cssClass: 'badge-vulnerable',
        tooltip: (v) => `Vulnerável (${v} turnos): Sofre 50% mais dano de ataques físicos.`
      },
      weak: {
        label: 'Fraco',
        icon: svgs.status_weak || svgs.fist,
        cssClass: 'badge-weak',
        tooltip: (v) => `Fraco (${v} turnos): Causa 25% a menos de dano em ataques.`
      },
      burn: {
        label: 'Queimadura',
        icon: svgs.status_burn || svgs.fire,
        cssClass: 'badge-burn',
        tooltip: (v) => `Queimadura (${v}): Sofre ${v} de dano de fogo no início do turno.`
      },
      thorns: {
        label: 'Espinhos',
        icon: svgs.shield || svgs.sword,
        cssClass: 'badge-strength',
        tooltip: (v) => `Espinhos (${v}): Retalia com ${v} de dano direto a quem atacar.`
      },
      poison: {
        label: 'Veneno',
        icon: svgs.status_poison || svgs.magic,
        cssClass: 'badge-poison',
        tooltip: (v) => `Veneno (${v}): Sofre ${v} de dano letal direto na Vida no fim do turno (ignora armadura).`
      }
    };

    Object.entries(statuses).forEach(([key, value]) => {
      if (value > 0 && statusConfig[key]) {
        const config = statusConfig[key];
        const badge = document.createElement('div');
        badge.className = `status-badge ${config.cssClass}`;
        badge.setAttribute('data-tooltip', config.tooltip(value));
        badge.innerHTML = `
          ${config.icon}
          <span class="status-count">${value}</span>
        `;
        containerEl.appendChild(badge);
      }
    });
  }

  /**
   * Renderiza a intenção telegrafada do inimigo
   */
  _renderEnemyIntent(intent) {
    if (!this.enemyIntentEl) return;

    if (!intent) {
      this.enemyIntentEl.style.display = 'none';
      return;
    }

    this.enemyIntentEl.style.display = 'flex';
    const assets = (typeof window !== 'undefined' && window.GameAssets) || {};
    const svgs = assets.SVGS || {};

    let iconSvg = svgs.sword;
    let valueText = '';
    let labelText = intent.name;

    if (intent.damage > 0) {
      iconSvg = intent.damage >= 15 ? svgs.fire : svgs.sword;
      const hits = intent.hits || 1;
      valueText = hits > 1 ? `${intent.damage}x${hits}` : `${intent.damage}`;
    } else if (intent.block > 0) {
      iconSvg = svgs.shield;
      valueText = `+${intent.block}`;
    } else if (intent.buff) {
      iconSvg = svgs.fire || svgs.magic;
      valueText = `+${intent.buff.strength || 2}⚡`;
    }

    this.enemyIntentEl.innerHTML = `
      <div class="intent-icon">${iconSvg}</div>
      ${valueText ? `<span class="intent-value">${valueText}</span>` : ''}
      <span class="intent-label">${labelText}</span>
    `;

    this.enemyIntentEl.setAttribute('data-tooltip', intent.description || '');
  }

  /**
   * Renderiza as cartas da mão do jogador em leque dinâmico e tátil
   */
  _renderPlayerHand(handCards, currentEnergy) {
    if (!this.playerHandEl) return;
    this.playerHandEl.innerHTML = '';

    const totalCards = handCards.length;

    handCards.forEach((card, index) => {
      const isDisabled = card.cost > currentEnergy || this.isProcessingEnemyTurn;

      const cardEl = CardRenderer.renderCard(card, {
        playable: !this.isProcessingEnemyTurn,
        disabled: isDisabled,
        onClick: (c, el) => this.handleCardClick(c, el),
        onHover: () => {
          this._playSound('playCardDraw');
        }
      });

      // Cálculo de leque com curvatura suave e empilhamento limpo
      if (totalCards > 1) {
        const midPoint = (totalCards - 1) / 2;
        const normalizedPos = index - midPoint;
        const angleStep = Math.min(3.5, 20 / totalCards);
        const offsetStep = Math.min(5, 24 / totalCards);
        const rotationDeg = (normalizedPos * angleStep).toFixed(2);
        const offsetY = (Math.abs(normalizedPos) * offsetStep).toFixed(1);
        cardEl.style.transform = `rotate(${rotationDeg}deg) translateY(${offsetY}px)`;
        cardEl.style.zIndex = index + 1;
      } else {
        cardEl.style.zIndex = 1;
      }

      this.playerHandEl.appendChild(cardEl);
    });

    if (typeof window !== 'undefined' && window.GamepadManager && window.GamepadManager.isGamepadMode) {
      setTimeout(() => window.GamepadManager.updateContextAndFocus(), 50);
    }
  }

  /**
   * Manipula o clique do jogador em uma carta da mão
   */
  handleCardClick(card, cardEl) {
    const combat = this.gameState.currentCombat;
    if (!combat || this.isProcessingEnemyTurn || combat.isFinished) return;

    if (combat.hero.energy < card.cost) {
      this._playSound('playDamage');
      this.showToast('Energia insuficiente para jogar esta carta!', 'warning');
      cardEl.classList.add('shake-screen');
      setTimeout(() => cardEl.classList.remove('shake-screen'), 350);
      return;
    }

    try {
      cardEl.classList.add('anim-play');

      // Disparo de Combat FX dinâmico no Canvas e Sons Procedurais Especializados (Fase 5)
      if (card.burn > 0 || card.id === 'chuva_meteoros' || card.id === 'golpe_flamejante') {
        if (this.combatFx && this.enemyAvatarEl) this.combatFx.triggerFlame(this.enemyAvatarEl);
        this._playSound('playFireBurst');
      } else if (card.poison > 0 || card.id === 'adaga_envenenada' || card.id === 'chuva_toxica') {
        if (this.combatFx && this.enemyAvatarEl) this.combatFx.triggerPoison(this.enemyAvatarEl);
        this._playSound('playPoisonBubble');
      } else if (card.block > 0) {
        if (this.combatFx && this.heroAvatarEl) this.combatFx.triggerShield(this.heroAvatarEl);
        this._playSound('playShieldWave');
      } else if (card.damage > 0) {
        if (this.combatFx && this.enemyAvatarEl) {
          if (card.id === 'corte_vorpal') {
            this.combatFx.triggerSlash(this.enemyAvatarEl, { multi: 3, heavy: true });
          } else if (card.id === 'danca_das_laminas' || card.id === 'golpe_duplo') {
            this.combatFx.triggerSlash(this.enemyAvatarEl, { multi: card.hits || 2 });
          } else {
            this.combatFx.triggerSlash(this.enemyAvatarEl, { heavy: card.damage >= 14 });
          }
        }
        if (card.damage >= 14 || card.id === 'corte_vorpal') {
          this._playSound('playHeavySlash');
        } else {
          this._playSound('playSlash');
        }
      } else if (card.heal > 0) {
        if (this.combatFx && this.heroAvatarEl) this.combatFx.triggerHeal(this.heroAvatarEl);
        this._playSound('playHeal');
      } else if (card.vulnerable > 0 || card.weak > 0) {
        this._playSound('playDebuff');
      } else if (card.energyGain > 0 || card.id === 'furia_berserker') {
        this._playSound('playBuff');
      } else {
        this._playSound('playButtonClick');
      }

      const result = this.gameState.playCardInCombat(card.uid);

      // Feedback visual flutuante
      if (result.damageDealt > 0) {
        this.showFloatingNumber(this.enemyAvatarEl, `-${result.damageDealt}`, 'damage');
        this.triggerHitFlash(this.enemyAvatarEl);
        if (result.damageDealt >= 14) {
          this.triggerScreenShake();
        }
      }

      if (result.blockGained > 0) {
        this.showFloatingNumber(this.heroAvatarEl, `+${result.blockGained}`, 'block');
      }

      if (result.healed > 0) {
        this.showFloatingNumber(this.heroAvatarEl, `+${result.healed}`, 'heal');
      }

      if (card.burn > 0) {
        this.showFloatingNumber(this.enemyAvatarEl, `Queimadura +${card.burn}🔥`, 'damage');
      }
      if (card.vulnerable > 0) {
        this.showFloatingNumber(this.enemyAvatarEl, `Vulnerável +${card.vulnerable}⚡`, 'damage');
      }
      if (card.weak > 0) {
        this.showFloatingNumber(this.enemyAvatarEl, `Fraco +${card.weak}🛡️`, 'block');
      }
      if (card.thorns > 0) {
        this.showFloatingNumber(this.heroAvatarEl, `Espinhos +${card.thorns}🌵`, 'block');
      }

      setTimeout(() => {
        this.renderCombatState();
      }, 160);

    } catch (err) {
      console.error('Erro ao jogar carta:', err);
      this.showToast(err.message, 'error');
    }
  }

  /**
   * Finaliza o turno do jogador e processa a resposta do monstro
   */
  handleEndTurnClick() {
    const combat = this.gameState.currentCombat;
    if (!combat || this.isProcessingEnemyTurn || combat.isFinished) return;

    this.isProcessingEnemyTurn = true;
    this._playSound('playButtonClick');
    if (this.btnEndTurn) {
      this.btnEndTurn.disabled = true;
      this.btnEndTurn.textContent = 'Vez do Inimigo...';
    }

    this.showActionNotification(`Turno de ${combat.enemy.name}!`);

    setTimeout(() => {
      this._processEnemyAction();
    }, 650);
  }

  /**
   * Executa os impactos visuais da ação do inimigo
   */
  _processEnemyAction() {
    const combat = this.gameState.currentCombat;
    if (!combat) return;

    if (combat.isFinished) {
      this.isProcessingEnemyTurn = false;
      this.renderCombatState();
      return;
    }

    const intent = combat.enemy.currentIntent;
    const previousHeroHp = combat.hero.hp;
    const previousHeroBlock = combat.hero.block;

    // Executa a lógica de fim de turno no engine
    this.gameState.endCombatTurn();

    if (combat.isFinished) {
      this.isProcessingEnemyTurn = false;
      this.renderCombatState();
      return;
    }

    const heroDamageTaken = Math.max(0, previousHeroHp - combat.hero.hp);
    const heroBlockAbsorbed = Math.max(0, previousHeroBlock - combat.hero.block);

    if (intent && intent.damage > 0) {
      if (combat.enemy.type === 'boss') {
        if (this.combatFx && this.heroAvatarEl) this.combatFx.triggerFlame(this.heroAvatarEl);
        this._playSound('playFireBurst');
      } else {
        if (this.combatFx && this.heroAvatarEl) {
          this.combatFx.triggerSlash(this.heroAvatarEl, { color: '#f87171', glow: '#dc2626', heavy: intent.damage >= 15 });
        }
        if (intent.damage >= 15 || combat.enemy.type === 'elite') {
          this._playSound('playHeavySlash');
        } else {
          this._playSound('playSlash');
        }
      }

      this.triggerHitFlash(this.heroAvatarEl);
      if (intent.damage >= 15 || combat.enemy.type === 'boss' || combat.enemy.type === 'elite') {
        this.triggerScreenShake();
        this.triggerScreenFlash();
      }

      if (heroDamageTaken > 0) {
        this.showFloatingNumber(this.heroAvatarEl, `-${heroDamageTaken}`, 'damage');
      }
      if (heroBlockAbsorbed > 0 && heroDamageTaken === 0) {
        this.showFloatingNumber(this.heroAvatarEl, `Escudo!`, 'block');
      }
    } else if (intent && intent.block > 0) {
      if (this.combatFx && this.enemyAvatarEl) {
        this.combatFx.triggerShield(this.enemyAvatarEl, { color: 'rgba(148, 163, 184, ' });
      }
      this._playSound('playShieldWave');
      this.showFloatingNumber(this.enemyAvatarEl, `+${intent.block}`, 'block');
    } else if (intent && intent.buff) {
      this._playSound('playBuff');
      this.showFloatingNumber(this.enemyAvatarEl, `Força +${intent.buff.strength || 2}!`, 'heal');
    }

    // Se o inimigo aplicou debuff no herói
    if (intent && intent.targetStatus) {
      this._playSound('playDebuff');
      if (intent.targetStatus.weak) {
        this.showFloatingNumber(this.heroAvatarEl, `Fraco +${intent.targetStatus.weak}!`, 'damage');
      }
      if (intent.targetStatus.vulnerable) {
        this.showFloatingNumber(this.heroAvatarEl, `Vulnerável +${intent.targetStatus.vulnerable}!`, 'damage');
      }
    }

    setTimeout(() => {
      this.isProcessingEnemyTurn = false;
      if (this.btnEndTurn) {
        this.btnEndTurn.textContent = 'Finalizar Turno';
      }
      this.renderCombatState();
      this._playSound('playCardDraw');
    }, 600);
  }

  /**
   * Trata a finalização do combate (vitória ou derrota)
   */
  handleCombatEnd(result) {
    if (this.hasHandledCombatEnd) return;
    this.hasHandledCombatEnd = true;
    if (this.combatFx) {
      this.combatFx.stopAmbientEmbers();
    }
    if (this.onCombatEnd) {
      this.onCombatEnd(result);
    }
  }

  /**
   * Exibe números flutuantes animados de dano, armadura ou cura com física balística
   */
  showFloatingNumber(targetEl, text, type = 'damage') {
    if (!targetEl || !this.combatStageEl) return;

    const parsedNum = parseInt(String(text).replace(/[^0-9]/g, ''), 10);
    const isCrit = type === 'crit' || (type === 'damage' && !isNaN(parsedNum) && parsedNum >= 14);
    const effectiveType = isCrit ? 'crit' : type;
    const arcSide = Math.random() > 0.5 ? 'float-arc-right' : 'float-arc-left';

    const numEl = document.createElement('div');
    numEl.className = `floating-number floating-${effectiveType} ${arcSide}`;
    numEl.textContent = text;

    const rect = targetEl.getBoundingClientRect();
    const stageRect = this.combatStageEl.getBoundingClientRect();

    const randomOffsetX = (Math.random() * 26 - 13);
    const posX = rect.left - stageRect.left + rect.width / 2 - 25 + randomOffsetX;
    const posY = rect.top - stageRect.top + rect.height / 3;

    numEl.style.left = `${posX}px`;
    numEl.style.top = `${posY}px`;

    this.combatStageEl.appendChild(numEl);

    setTimeout(() => {
      numEl.remove();
    }, 950);
  }

  /**
   * Efeito de tremor de tela (Screenshake com intensidade normal ou pesada)
   */
  triggerScreenShake(intensity = 'normal') {
    const appEl = document.getElementById('app') || document.body;
    appEl.classList.remove('shake-screen', 'shake-screen-heavy');
    void appEl.offsetWidth;
    const shakeClass = intensity === 'heavy' ? 'shake-screen-heavy' : 'shake-screen';
    appEl.classList.add(shakeClass);

    setTimeout(() => {
      appEl.classList.remove('shake-screen', 'shake-screen-heavy');
    }, intensity === 'heavy' ? 440 : 350);
  }

  /**
   * Efeito de flash avermelhado no avatar atingido
   */
  triggerHitFlash(targetEl) {
    if (!targetEl) return;
    targetEl.classList.add('hit-flash');
    setTimeout(() => {
      targetEl.classList.remove('hit-flash');
    }, 180);
  }

  /**
   * Flash de luz na arena inteira (para golpes pesados)
   */
  triggerScreenFlash() {
    if (!this.screenFlashEl) return;
    this.screenFlashEl.classList.add('active');
    setTimeout(() => {
      this.screenFlashEl.classList.remove('active');
    }, 150);
  }

  /**
   * Notificação rápida central de ação
   */
  showActionNotification(text) {
    if (!this.actionNotificationEl) return;
    this.actionNotificationEl.textContent = text;
    this.actionNotificationEl.style.opacity = '1';
    setTimeout(() => {
      if (this.actionNotificationEl) {
        this.actionNotificationEl.style.opacity = '0';
      }
    }, 1200);
  }

  /**
   * Toast flutuante rápido
   */
  showToast(text, type = 'info') {
    if (typeof window !== 'undefined' && window.ViewManager && typeof window.ViewManager.showToast === 'function') {
      window.ViewManager.showToast(text, type);
    }
  }
}
