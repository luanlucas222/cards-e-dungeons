/**
 * js/app.js
 * Script Mestre da Aplicação Web "Cards e Dungeons".
 * Integra Game Engine, Módulos de Interface, Sintetizador de Áudio e Assets Vetoriais.
 * Sprint 2: Suporte a Salvar/Continuar run, Música ambiente, Nós de Elite e Relíquias Passivas.
 */

import { GameState, GAME_SCREENS } from './engine/GameState.js';
import { SHRINE_ACTIONS } from './data/events.js';
import { CardRenderer } from './ui/CardRenderer.js';
import { ViewManager } from './ui/ViewManager.js';
import { MapRenderer } from './ui/MapRenderer.js';
import { CombatRenderer } from './ui/CombatRenderer.js';
import { CinematicManager } from './ui/CinematicManager.js';
import { GamepadManager } from './ui/GamepadManager.js';

class GameApp {
  constructor() {
    this.gameState = new GameState();
    this.monstersDefeated = 0;
    this.startTime = Date.now();

    this.initUi();
    this.bindEvents();
    this.startInitialScreen();
  }

  initUi() {
    // 1. Gerenciador de Visão e Telas
    this.viewManager = new ViewManager({
      gameState: this.gameState
    });

    // 2. Renderizador de Combate
    this.combatRenderer = new CombatRenderer({
      container: document.getElementById('screen-combat'),
      gameState: this.gameState,
      onCombatEnd: (result) => this.handleCombatEnd(result)
    });

    // 3. Renderizador do Mapa de Nós
    this.mapRenderer = new MapRenderer({
      container: document.getElementById('screen-map'),
      gameState: this.gameState,
      onNodeSelect: (nodeId) => this.handleNodeSelected(nodeId)
    });

    // 4. Gerenciador de Cinemáticas Remotion-Style
    this.cinematicManager = new CinematicManager({
      container: document.getElementById('screen-cinematic')
    });

    // 5. Gerenciador de Controle (Gamepad / Joystick - Fase 2)
    this.gamepadManager = new GamepadManager({
      app: this,
      gameState: this.gameState,
      viewManager: this.viewManager,
      combatRenderer: this.combatRenderer,
      mapRenderer: this.mapRenderer
    });

    // Disponibiliza na janela para callbacks auxiliares
    window.GameApp = this;
    window.ViewManager = this.viewManager;
    window.CinematicManager = this.cinematicManager;
    window.GamepadManager = this.gamepadManager;
  }

  bindEvents() {
    // Botão Continuar Jornada no Menu (Sprint 2)
    const btnContinue = document.getElementById('btn-continue');
    if (btnContinue) {
      btnContinue.addEventListener('click', () => {
        this.continueSavedJourney();
      });
    }

    // Botão Nova Jornada no Menu
    const btnStartGame = document.getElementById('btn-start-game');
    if (btnStartGame) {
      btnStartGame.addEventListener('click', () => {
        this.viewManager.openClassSelectModal((chosenClassId) => {
          this.startNewJourney(chosenClassId);
        });
      });
    }

    // Botão Como Jogar no Menu
    const btnMenuGuide = document.getElementById('btn-menu-guide');
    if (btnMenuGuide) {
      btnMenuGuide.addEventListener('click', () => {
        this.viewManager.openGuideModal();
      });
    }

    // Botão Créditos no Menu
    const btnMenuCredits = document.getElementById('btn-menu-credits');
    if (btnMenuCredits) {
      btnMenuCredits.addEventListener('click', () => {
        this.viewManager.showToast('Cards e Dungeons v2.0 • Edição Multiclasses com Ladina & Mago!', 'info');
      });
    }

    // Botão Pular Recompensa de Combate
    const btnSkipReward = document.getElementById('btn-skip-reward');
    if (btnSkipReward) {
      btnSkipReward.addEventListener('click', () => {
        this.skipCombatReward();
      });
    }

    // Botões de Reiniciar Jogo (Vitória e Derrota)
    const btnVictoryRestart = document.getElementById('btn-victory-restart');
    if (btnVictoryRestart) {
      btnVictoryRestart.addEventListener('click', () => {
        this.viewManager.openClassSelectModal((chosenClassId) => {
          this.startNewJourney(chosenClassId);
        });
      });
    }

    const btnVictoryMenu = document.getElementById('btn-victory-menu');
    if (btnVictoryMenu) {
      btnVictoryMenu.addEventListener('click', () => {
        if (window.SoundFX) window.SoundFX.playButtonClick();
        this.gameState.clearSavedRun();
        this.viewManager.showScreen('menu');
      });
    }

    const btnDefeatRestart = document.getElementById('btn-defeat-restart');
    if (btnDefeatRestart) {
      btnDefeatRestart.addEventListener('click', () => {
        this.viewManager.openClassSelectModal((chosenClassId) => {
          this.startNewJourney(chosenClassId);
        });
      });
    }

    const btnDefeatMenu = document.getElementById('btn-defeat-menu');
    if (btnDefeatMenu) {
      btnDefeatMenu.addEventListener('click', () => {
        if (window.SoundFX) window.SoundFX.playButtonClick();
        this.gameState.clearSavedRun();
        this.viewManager.showScreen('menu');
      });
    }

    // Opções de Santuário
    this.bindShrineEvents();
  }

  bindShrineEvents() {
    const shrineModal = document.getElementById('modal-shrine');
    if (!shrineModal) return;

    // Opção 1: Descanso / Fogueira (+30% HP)
    const optHeal = shrineModal.querySelector('#shrine-opt-heal');
    if (optHeal) {
      optHeal.addEventListener('click', () => {
        const result = this.gameState.applyShrineChoice(SHRINE_ACTIONS.HEAL);
        if (window.SoundFX) window.SoundFX.playHeal();
        this.viewManager.showToast(result.choiceResult.message || 'Você descansou na fogueira (+30% HP)!', 'success');
        this.viewManager.closeModal(shrineModal);
        this.viewManager.updateHud();
        this.mapRenderer.render();
      });
    }

    // Opção 2: Forjar & Aprimorar (+) (Fase 4)
    const optForge = shrineModal.querySelector('#shrine-opt-forge');
    if (optForge) {
      optForge.addEventListener('click', () => {
        this.viewManager.closeModal(shrineModal);
        this.viewManager.openForgeModal((cardUid, card) => {
          try {
            const res = this.gameState.upgradeCardInDeck(cardUid);
            if (window.SoundFX && typeof window.SoundFX.playBuff === 'function') {
              window.SoundFX.playBuff();
            } else if (window.SoundFX && typeof window.SoundFX.playRelicObtained === 'function') {
              window.SoundFX.playRelicObtained();
            }
            this.viewManager.triggerForgeFx();
            this.viewManager.showToast(res.message || `✨ Carta "${card.name}+" forjada com sucesso!`, 'success');
            this.gameState.shrineCardOptions = [];
            this.gameState.screen = 'map';
            this.viewManager.updateHud();
            this.mapRenderer.render();
          } catch (err) {
            this.viewManager.showToast(err.message, 'error');
          }
        });
      });
    }

    // Opção 3: Purificar / Remover Carta
    const optRemove = shrineModal.querySelector('#shrine-opt-remove');
    if (optRemove) {
      optRemove.addEventListener('click', () => {
        this.viewManager.closeModal(shrineModal);
        this.viewManager.openDeckModal(this.gameState.hero.deck, {
          title: 'Purificar o Deck',
          subtitle: 'Selecione uma carta para queimar no fogo sagrado',
          selectable: true,
          onSelect: (selectedCard) => {
            const result = this.gameState.applyShrineChoice(SHRINE_ACTIONS.REMOVE_CARD, { cardUid: selectedCard.uid });
            if (window.SoundFX) window.SoundFX.playDamage();
            this.viewManager.showToast(result.choiceResult.message, 'success');
            this.viewManager.updateHud();
            this.mapRenderer.render();
          }
        });
      });
    }

    // Opção 3: Espelho de Almas / Duplicar Carta
    const optDuplicate = shrineModal.querySelector('#shrine-opt-duplicate');
    if (optDuplicate) {
      optDuplicate.addEventListener('click', () => {
        this.viewManager.closeModal(shrineModal);
        this.viewManager.openDeckModal(this.gameState.hero.deck, {
          title: 'Espelho de Almas',
          subtitle: 'Selecione uma carta para forjar uma cópia idêntica',
          selectable: true,
          onSelect: (selectedCard) => {
            const result = this.gameState.applyShrineChoice(SHRINE_ACTIONS.DUPLICATE_CARD, { cardUid: selectedCard.uid });
            if (window.SoundFX) window.SoundFX.playHeal();
            this.viewManager.showToast(result.choiceResult.message, 'success');
            this.viewManager.updateHud();
            this.mapRenderer.render();
          }
        });
      });
    }

    // Opção 4: Bênção / Aprender Carta
    const optBlessing = shrineModal.querySelector('#shrine-opt-blessing');
    if (optBlessing) {
      optBlessing.addEventListener('click', () => {
        this.viewManager.closeModal(shrineModal);
        const options = this.gameState.shrineCardOptions;
        this.openRewardSelection(options, (chosenCard) => {
          const result = this.gameState.applyShrineChoice(SHRINE_ACTIONS.ADD_CARD, { cardId: chosenCard.id });
          if (window.SoundFX) window.SoundFX.playCardDraw();
          this.viewManager.showToast(result.choiceResult.message, 'success');
          this.viewManager.updateHud();
          this.mapRenderer.render();
        });
      });
    }
  }

  startInitialScreen() {
    this.viewManager.showScreen('menu');
    this.viewManager.updateHud();

    // Injeta ícones SVG nos botões de HUD se disponíveis
    const assets = window.GameAssets || {};
    const svgs = assets.SVGS || {};

    const brandIconEl = document.getElementById('brand-header-icon');
    if (brandIconEl) brandIconEl.innerHTML = svgs.sword || '';

    const deckIconEl = document.getElementById('hud-deck-icon');
    if (deckIconEl) deckIconEl.innerHTML = svgs.deck || '';

    const audioBtnEl = document.getElementById('btn-hud-audio');
    if (audioBtnEl) audioBtnEl.innerHTML = svgs.volumeOn || '';

    const guideBtnEl = document.getElementById('btn-hud-guide');
    if (guideBtnEl) guideBtnEl.innerHTML = svgs.magic || '?';
  }

  /**
   * Continua uma run salva anteriormente do localStorage
   */
  continueSavedJourney() {
    if (window.SoundFX) {
      window.SoundFX.playButtonClick();
    }

    const loaded = this.gameState.loadRun();
    if (!loaded) {
      this.viewManager.showToast('Nenhum salvamento válido encontrado.', 'error');
      return;
    }

    if (window.SoundFX) {
      window.SoundFX.startDungeonMusic();
    }

    // Restaura tela apropriada
    this.viewManager.updateDungeonBackground(this.gameState.currentAct || 1);
    this.viewManager.startRunTimer();
    this.viewManager.updateHud();
    this.viewManager.showScreen('map');
    this.mapRenderer.render();

    if (this.gameState.screen === GAME_SCREENS.MERCHANT && this.gameState.currentMerchantInventory) {
      this.openMerchantShop();
    } else if (this.gameState.screen === GAME_SCREENS.EVENT && this.gameState.currentNarrativeEvent) {
      this.openNarrativeEvent();
    } else if (this.gameState.screen === GAME_SCREENS.TREASURE && this.gameState.currentTreasure) {
      this.openTreasureRoom();
    } else {
      this.viewManager.showToast('Jornada retomada com sucesso! Prossiga com sabedoria.', 'info');
    }
  }

  startNewJourney(heroClassId = 'warrior') {
    if (window.SoundFX) {
      window.SoundFX.playButtonClick();
      window.SoundFX.startDungeonMusic();
    }

    this.monstersDefeated = 0;
    this.startTime = Date.now();
    this.gameState.startNewRun(heroClassId);
    this.gameState.saveRun();

    this.viewManager.updateDungeonBackground(this.gameState.currentAct || 1);
    this.viewManager.startRunTimer();

    // Toca a Cinemática de Abertura Remotion-Style (com opção de pular)
    this.viewManager.showScreen('cinematic');
    this.cinematicManager.playIntro(() => {
      this.viewManager.showScreen('map');
      this.viewManager.updateHud();
      this.mapRenderer.render();
      const heroName = this.gameState.hero.name;
      this.viewManager.showToast(`Sua jornada como ${heroName} se inicia no Ato I! Escolha o primeiro caminho.`, 'info');
    });
  }

  handleNodeSelected(nodeId) {
    try {
      this.gameState.selectNode(nodeId);
      this.gameState.saveRun();

      if (this.gameState.screen === GAME_SCREENS.COMBAT) {
        const isBoss = this.gameState.currentCombat && this.gameState.currentCombat.enemy.type === 'boss';
        if (isBoss) {
          // Cinemática especial do Dragão Boss
          this.viewManager.showScreen('cinematic');
          this.cinematicManager.playBossEncounter(() => {
            this.viewManager.showScreen('combat');
            this.combatRenderer.startCombat();
          }, {
            enemy: this.gameState.currentCombat.enemy,
            act: this.gameState.currentAct || 1
          });
        } else {
          this.viewManager.showScreen('combat');
          this.combatRenderer.startCombat();
        }
      } else if (this.gameState.screen === GAME_SCREENS.SHRINE) {
        this.viewManager.openModal(this.viewManager.modals.shrine);
      } else if (this.gameState.screen === GAME_SCREENS.MERCHANT) {
        this.openMerchantShop();
      } else if (this.gameState.screen === GAME_SCREENS.EVENT) {
        this.openNarrativeEvent();
      } else if (this.gameState.screen === GAME_SCREENS.TREASURE) {
        this.openTreasureRoom();
      }
    } catch (err) {
      console.error('Erro ao selecionar nó:', err);
      this.viewManager.showToast(err.message, 'error');
    }
  }

  openTreasureRoom() {
    this.viewManager.openTreasureModal(this.gameState.currentTreasure, (choiceType) => {
      try {
        const res = this.gameState.claimTreasureChoice(choiceType);
        if (choiceType === 'gold') {
          if (window.SoundFX && typeof window.SoundFX.playCoins === 'function') {
            window.SoundFX.playCoins();
          }
        } else if (choiceType === 'relic') {
          if (window.SoundFX && typeof window.SoundFX.playRelicObtained === 'function') {
            window.SoundFX.playRelicObtained();
          }
        } else if (choiceType === 'potion') {
          if (window.SoundFX && typeof window.SoundFX.playPotion === 'function') {
            window.SoundFX.playPotion();
          }
        }
        this.viewManager.showToast(res.message, 'success');
        this.viewManager.updateHud();
        this.mapRenderer.render();
      } catch (err) {
        this.viewManager.showToast(err.message, 'error');
      }
    });
  }

  openMerchantShop() {
    this.viewManager.openMerchantModal({
      merchantData: this.gameState.currentMerchantInventory,
      onBuyCard: (cardId) => {
        const res = this.gameState.buyMerchantCard(cardId);
        this.gameState.saveRun();
        return res;
      },
      onBuyRelic: (relicId) => {
        const res = this.gameState.buyMerchantRelic(relicId);
        this.gameState.saveRun();
        return res;
      },
      onBuyRemoval: (cardUid) => {
        const res = this.gameState.buyMerchantCardRemoval(cardUid);
        this.gameState.saveRun();
        return res;
      },
      onLeave: () => {
        this.gameState.leaveMerchant();
        this.gameState.saveRun();
        this.viewManager.updateHud();
        this.mapRenderer.render();
      }
    });
  }

  openNarrativeEvent() {
    this.viewManager.openEventModal({
      eventData: this.gameState.currentNarrativeEvent,
      onChoice: (choiceId) => {
        const res = this.gameState.applyEventChoice(choiceId);
        this.gameState.saveRun();
        return res;
      },
      onLeave: () => {
        this.gameState.leaveEvent();
        this.gameState.saveRun();
        this.viewManager.updateHud();
        this.mapRenderer.render();
      }
    });
  }

  handleCombatEnd(result) {
    if (result === 'defeat') {
      if (window.SoundFX) {
        window.SoundFX.stopDungeonMusic();
        window.SoundFX.playDefeat();
      }
      this.viewManager.stopRunTimer();
      this.gameState.clearSavedRun();
      this.showDefeatScreen();
    } else if (result === 'victory') {
      this.monstersDefeated++;

      if (this.gameState.currentNode && this.gameState.currentNode.type === 'boss') {
        const isCampaignComplete = (this.gameState.currentAct || 1) >= (this.gameState.totalActs || 3);

        if (isCampaignComplete) {
          // Derrotou o Chefe do Ato III (Grande Dragão Tirano) -> Vitória Suprema Final!
          if (window.SoundFX) {
            window.SoundFX.stopDungeonMusic();
            window.SoundFX.playVictory();
          }
          this.viewManager.stopRunTimer();
          this.gameState.clearSavedRun();
          this.showVictoryScreen();
        } else {
          // Conquistou o Ato I ou II -> Celebração e Transição de Ato com Recuperação de Fôlego (+35% HP)
          if (window.SoundFX) {
            window.SoundFX.playVictory();
          }
          const transitionData = this.gameState.advanceAct();
          this.viewManager.updateDungeonBackground(this.gameState.currentAct);
          this.viewManager.updateHud();

          this.viewManager.openActTransitionModal({
            transitionData,
            onProceed: () => {
              this.viewManager.showScreen('map');
              this.mapRenderer.render();
              const themeName = transitionData.actTheme?.name || `Ato ${transitionData.act}`;
              this.viewManager.showToast(`Você adentrou ${themeName}! (+${transitionData.healAmount} HP restaurados)`, 'success');
            }
          });
        }
      } else {
        // Vitória comum ou Elite -> Recompensa de cartas (+ Relíquia se for Elite)
        if (window.SoundFX) window.SoundFX.playCardDraw();
        this.openCombatReward();
      }
    }
  }

  openCombatReward() {
    this.gameState.screen = 'combat_reward';
    const rewardModal = document.getElementById('modal-reward');
    const container = document.getElementById('reward-cards-container');
    const relicBanner = document.getElementById('reward-relic-banner');
    if (!rewardModal || !container) return;

    // 0. Recompensa em Ouro pós-combate (Fase 4)
    const goldBox = rewardModal.querySelector('#reward-gold-box');
    const goldAmountEl = rewardModal.querySelector('#reward-gold-amount');
    const goldEarned = this.gameState.combatRewardGold || (this.gameState.currentNode?.type === 'elite' ? 35 : 20);

    if (goldAmountEl) {
      goldAmountEl.textContent = goldEarned;
    }
    if (goldBox) {
      goldBox.style.display = 'flex';
    }

    if (window.SoundFX && typeof window.SoundFX.playCoins === 'function') {
      try {
        window.SoundFX.playCoins();
      } catch (e) {
        console.warn('Audio playCoins warning:', e);
      }
    }
    this.viewManager.updateHud();

    // Se houve drop de Relíquia em combate de Elite (Sprint 2)
    if (this.gameState.eliteRewardRelic && relicBanner) {
      try {
        if (window.SoundFX && typeof window.SoundFX.playRelicObtained === 'function') {
          window.SoundFX.playRelicObtained();
        }
      } catch (e) {
        console.warn('Audio playRelicObtained warning:', e);
      }

      const relic = this.gameState.eliteRewardRelic;
      const relicIconEl = relicBanner.querySelector('#reward-relic-icon');
      const relicNameEl = relicBanner.querySelector('#reward-relic-name');
      const relicDescEl = relicBanner.querySelector('#reward-relic-desc');

      const assets = window.GameAssets || {};
      const svgs = assets.SVGS || {};
      const relicSvgMap = {
        amulet_strength: svgs.relic_strength,
        blood_chalice: svgs.relic_blood,
        spike_shield: svgs.relic_spikes,
        ancient_orb: svgs.relic_mana,
        poison_vial: svgs.relic_poison,
        fortune_bag: svgs.relic_fortune,
        ether_cloak: svgs.relic_cloak,
        whetstone: svgs.relic_whetstone
      };

      if (relicIconEl) {
        relicIconEl.innerHTML = '';
        const img = document.createElement('img');
        img.src = `assets/relics/relic_${relic.id}.png`;
        img.className = 'relic-icon-img';
        img.alt = relic.name;
        img.style.cssText = 'width: 100%; height: 100%; object-fit: contain;';
        img.onerror = () => {
          relicIconEl.innerHTML = relicSvgMap[relic.id] || svgs.relic_strength || svgs.shield;
        };
        relicIconEl.appendChild(img);
      }
      if (relicNameEl) relicNameEl.textContent = relic.name;
      if (relicDescEl) relicDescEl.textContent = relic.description;

      relicBanner.style.display = 'block';
    } else if (relicBanner) {
      relicBanner.style.display = 'none';
    }

    // Se houve drop de Poção (Fase 3)
    if (this.gameState.combatRewardPotion) {
      try {
        if (window.SoundFX && typeof window.SoundFX.playPotion === 'function') {
          window.SoundFX.playPotion();
        }
      } catch (e) {
        console.warn('Audio playPotion warning:', e);
      }
      this.viewManager.showToast(`🧪 Poção obtida: ${this.gameState.combatRewardPotion.name}!`, 'success');
      this.viewManager.updateHud();
    }

    container.innerHTML = '';
    const cards = this.gameState.combatRewardCards || [];

    cards.forEach((card, index) => {
      const cardEl = CardRenderer.renderCard(card, {
        playable: true,
        onClick: () => {
          this.gameState.screen = 'combat_reward';
          const maxDeck = this.gameState.hero?.maxDeckSize || 15;
          const currentDeckLen = this.gameState.hero?.deck?.length || 0;
          if (currentDeckLen >= maxDeck) {
            // Se atingiu o limite de 15 cartas, aciona a Substituição Tática
            this.viewManager.openCardSwapModal(card, () => {
              this.viewManager.updateHud();
              this.viewManager.showScreen('map');
              this.mapRenderer.render();
            });
            return;
          }

          this.gameState.claimCombatReward(card.uid || card.id);
          if (window.SoundFX) window.SoundFX.playCardDraw();
          this.viewManager.showToast(`Carta "${card.name}" adicionada ao baralho!`, 'success');
          this.viewManager.closeModal(rewardModal);
          this.viewManager.updateHud();
          this.viewManager.showScreen('map');
          this.mapRenderer.render();
        }
      });
      cardEl.classList.add('remotion-reward-card');
      cardEl.style.animationDelay = `${index * 130 + 80}ms`;
      container.appendChild(cardEl);
    });

    this.viewManager.openModal(rewardModal);
  }

  skipCombatReward() {
    const rewardModal = document.getElementById('modal-reward');
    this.gameState.claimCombatReward(null);
    if (window.SoundFX) window.SoundFX.playButtonClick();
    this.viewManager.closeModal(rewardModal);
    this.viewManager.showToast('Recompensa pulada! (+15 Ouro recebido)', 'gold');
    this.viewManager.updateHud();
    this.viewManager.showScreen('map');
    this.mapRenderer.render();
  }

  openRewardSelection(cards, onSelect) {
    const rewardModal = document.getElementById('modal-reward');
    const container = document.getElementById('reward-cards-container');
    const relicBanner = document.getElementById('reward-relic-banner');
    if (!rewardModal || !container) return;

    if (relicBanner) relicBanner.style.display = 'none';

    container.innerHTML = '';
    cards.forEach((card, index) => {
      const cardEl = CardRenderer.renderCard(card, {
        playable: true,
        onClick: () => {
          this.viewManager.closeModal(rewardModal);
          if (onSelect) onSelect(card);
        }
      });
      cardEl.classList.add('remotion-reward-card');
      cardEl.style.animationDelay = `${index * 130 + 80}ms`;
      container.appendChild(cardEl);
    });

    this.viewManager.openModal(rewardModal);
  }

  showVictoryScreen() {
    const victoryScreen = document.getElementById('screen-victory');
    if (!victoryScreen) return;

    const statsFloor = victoryScreen.querySelector('#stat-victory-floors');
    const statsMonsters = victoryScreen.querySelector('#stat-victory-monsters');
    const statsDeck = victoryScreen.querySelector('#stat-victory-deck');

    const totalConqueredFloors = 30; // 3 Atos de 10 andares
    if (statsFloor) statsFloor.textContent = `${totalConqueredFloors}`;
    if (statsMonsters) statsMonsters.textContent = `${this.monstersDefeated}`;
    if (statsDeck) statsDeck.textContent = `${this.gameState.hero.deck.length}`;

    const subtitleEl = victoryScreen.querySelector('.game-over-subtitle');
    const timeFormatted = this.viewManager.formatRunTime(this.gameState.elapsedTime || 0);
    if (subtitleEl) {
      subtitleEl.innerHTML = `O Grande Dragão Tirano sucumbiu no Ato III! Você conquistou todos os 30 andares do calabouço em <strong>⏱️ ${timeFormatted}</strong> de pura bravura e maestria estratégica.`;
    }

    const iconEl = victoryScreen.querySelector('#victory-icon-box');
    if (iconEl && window.GameAssets) {
      iconEl.innerHTML = window.GameAssets.SVGS.trophy || '';
    }

    this.viewManager.showScreen('victory');
  }

  showDefeatScreen() {
    const defeatScreen = document.getElementById('screen-defeat');
    if (!defeatScreen) return;

    const currentFloor = this.gameState.currentNode ? this.gameState.currentNode.floor + 1 : 1;
    const act = this.gameState.currentAct || 1;
    const statsFloor = defeatScreen.querySelector('#stat-defeat-floors');
    const statsMonsters = defeatScreen.querySelector('#stat-defeat-monsters');
    const statsDeck = defeatScreen.querySelector('#stat-defeat-deck');
    const subtitleEl = defeatScreen.querySelector('#defeat-subtitle');

    if (statsFloor) statsFloor.textContent = `Ato ${act} (F${currentFloor})`;
    if (statsMonsters) statsMonsters.textContent = `${this.monstersDefeated}`;
    if (statsDeck) statsDeck.textContent = `${this.gameState.hero.deck.length}`;

    const timeFormatted = this.viewManager.formatRunTime(this.gameState.elapsedTime || 0);
    if (subtitleEl && this.gameState.currentCombat) {
      const killer = this.gameState.currentCombat.enemy.name;
      subtitleEl.innerHTML = `Você foi superado pelas forças de <strong>${killer}</strong> no Ato ${act} após <strong>⏱️ ${timeFormatted}</strong>. Recupere o ânimo e tente novamente!`;
    }

    const iconEl = defeatScreen.querySelector('#defeat-icon-box');
    if (iconEl && window.GameAssets) {
      iconEl.innerHTML = window.GameAssets.SVGS.skull || '';
    }

    this.viewManager.showScreen('defeat');
  }
}

// Inicializa a aplicação de forma segura e imediata
function bootGame() {
  if (!window._gameAppInstance) {
    window._gameAppInstance = new GameApp();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootGame);
} else {
  bootGame();
}

// Registro de PWA Service Worker e Instalação Móvel
if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('📱 PWA Service Worker registrado com sucesso:', reg.scope))
      .catch(err => console.warn('PWA Service Worker aviso:', err));
  });
}

// Prompt Nativo de Instalação no Celular
let _deferredPwaPrompt = null;
if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    _deferredPwaPrompt = e;
    const btnInstall = document.getElementById('btn-pwa-install');
    if (btnInstall) {
      btnInstall.style.display = 'inline-flex';
      btnInstall.onclick = async () => {
        btnInstall.style.display = 'none';
        if (_deferredPwaPrompt) {
          _deferredPwaPrompt.prompt();
          const { outcome } = await _deferredPwaPrompt.userChoice;
          console.log('PWA instalação resultado:', outcome);
          _deferredPwaPrompt = null;
        }
      };
    }
  });

  window.addEventListener('appinstalled', () => {
    console.log('Cards e Dungeons instalado com sucesso no dispositivo!');
    const btnInstall = document.getElementById('btn-pwa-install');
    if (btnInstall) btnInstall.style.display = 'none';
  });
}
