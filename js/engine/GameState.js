/**
 * js/engine/GameState.js
 * Gerenciador de estado global da sessão/run de "Cards e Dungeons",
 * incluindo persistência (save/load), relíquias passivas e nós de Elite.
 */

import { createInitialDeck, createCardInstance, getRandomRewardCards } from '../data/cards.js';
import { createEnemyInstance, BOSS_ENEMY_ID } from '../data/enemies.js';
import { getHeroClass, DEFAULT_HERO_CLASS_ID } from '../data/heroes.js';
import {
  CAMPFIRE_ACTIONS,
  CAMPFIRE_OPTIONS,
  SHRINE_ACTIONS,
  SHRINE_OPTIONS,
  executeRest,
  executeHeal,
  executeUpgradeCard,
  executeRemoveCard,
  executeDuplicateCard,
  executeAddCard,
  generateShrineCardOptions
} from '../data/events.js';
import { addRelicToHero, hasRelic, getRandomRelic } from '../data/relics.js';
import { generateMerchantInventory, getRandomPurchaseQuote } from '../data/merchant.js';
import { createPotionInstance, getRandomPotion, MAX_POTION_SLOTS } from '../data/potions.js';
import { getRandomNarrativeEvent } from '../data/narrativeEvents.js';
import { MapGenerator, NODE_TYPES, NODE_STATES } from './MapGenerator.js';
import { CombatSystem, COMBAT_STATES } from './CombatSystem.js';

export const GAME_SCREENS = {
  TITLE: 'title',
  MAP: 'map',
  COMBAT: 'combat',
  COMBAT_REWARD: 'combat_reward',
  SHRINE: 'shrine',
  MERCHANT: 'merchant',
  EVENT: 'event',
  TREASURE: 'treasure',
  ACT_TRANSITION: 'act_transition',
  VICTORY: 'victory',
  DEFEAT: 'defeat'
};

// Armazenamento em memória seguro para fallback em ambientes como Node.js
const _memoryStorage = new Map();

function _getStorageItem(key) {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(key);
  }
  return _memoryStorage.get(key) || null;
}

function _setStorageItem(key, value) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(key, value);
  }
  _memoryStorage.set(key, value);
}

function _removeStorageItem(key) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(key);
  }
  _memoryStorage.delete(key);
}

export class GameState {
  constructor(options = {}) {
    this.rng = options.rng || Math.random;
    this.screen = GAME_SCREENS.TITLE;

    this.currentAct = 1;
    this.totalActs = 3;
    this.elapsedTime = 0; // Tempo em segundos decorrido na run

    this.hero = {
      name: 'Guerreiro Rúnico',
      classId: 'warrior',
      hp: 70,
      maxHp: 70,
      energy: 3,
      maxEnergy: 3,
      block: 0,
      gold: 50,
      deck: [],
      reserveDeck: [],
      maxDeckSize: 15,
      relics: []
    };

    this.map = null;
    this.currentNode = null;
    this.currentCombat = null;
    this.combatRewardCards = [];
    this.combatRewardPotion = null;
    this.combatRewardGold = 0;
    this.shrineCardOptions = [];
    this.eliteRewardRelic = null;
    this.runHistory = [];
  }

  /**
   * Inicia uma nova Jornada (Run) com a classe de herói escolhida.
   * @param {string} [heroClassId='warrior'] 'warrior' | 'rogue' | 'mage'
   * @param {Object} [options={}] Opções de configuração da campanha (act, totalFloors)
   */
  startNewRun(heroClassId = DEFAULT_HERO_CLASS_ID, options = {}) {
    const heroClass = getHeroClass(heroClassId);

    this.currentAct = options.act || options.startAct || 1;
    this.totalActs = options.totalActs || 3;
    this.elapsedTime = 0;

    this.hero = {
      name: heroClass.name,
      classId: heroClass.id,
      heroClass: heroClass.id,
      subtitle: heroClass.subtitle,
      icon: heroClass.icon,
      sprite: heroClass.sprite,
      hp: heroClass.maxHp,
      maxHp: heroClass.maxHp,
      energy: heroClass.energy,
      maxEnergy: heroClass.energy,
      block: 0,
      gold: 50,
      deck: createInitialDeck(heroClass.id),
      reserveDeck: [],
      maxDeckSize: 15,
      relics: [],
      potions: [createPotionInstance('potion_health'), null, null]
    };

    // Equipa a relíquia inicial nativa da classe
    if (heroClass.startingRelicId) {
      addRelicToHero(this.hero, heroClass.startingRelicId);
    }

    const mapGen = new MapGenerator({
      act: this.currentAct,
      totalFloors: options.totalFloors || 15,
      rng: this.rng
    });
    this.map = mapGen.generateMap();
    this.currentNode = null;
    this.currentCombat = null;
    this.combatRewardCards = [];
    this.combatRewardPotion = null;
    this.combatRewardGold = 0;
    this.shrineCardOptions = [];
    this.eliteRewardRelic = null;
    this.merchantInventories = {};
    this.currentMerchantInventory = null;
    this.narrativeEventInstances = {};
    this.currentNarrativeEvent = null;
    this.runHistory = [];

    this.screen = GAME_SCREENS.MAP;
    return this.getState();
  }

  /**
   * Navega para um nó disponível no mapa.
   * @param {string} nodeId
   */
  selectNode(nodeId) {
    if (this.screen !== GAME_SCREENS.MAP) {
      throw new Error(`Não é possível selecionar nó fora da tela de mapa. Tela atual: ${this.screen}`);
    }

    const node = this.map.nodes[nodeId];
    if (!node) {
      throw new Error(`Nó inválido: ${nodeId}`);
    }

    if (node.state !== NODE_STATES.AVAILABLE && node.state !== NODE_STATES.VISITED) {
      throw new Error(`O nó ${nodeId} não está disponível para visita.`);
    }

    MapGenerator.advanceToNode(this.map, nodeId);
    this.currentNode = node;
    this.eliteRewardRelic = null;
    this.combatRewardPotion = null;
    this.combatRewardGold = 0;

    if (node.type === NODE_TYPES.COMBAT || node.type === NODE_TYPES.ELITE || node.type === NODE_TYPES.BOSS) {
      const enemy = createEnemyInstance(node.enemyId, { affix: node.affix });
      this.currentCombat = new CombatSystem({
        hero: this.hero,
        enemy,
        rng: this.rng
      });
      this.screen = GAME_SCREENS.COMBAT;
    } else if (node.type === NODE_TYPES.SHRINE) {
      this.shrineCardOptions = generateShrineCardOptions(this.rng);
      this.screen = GAME_SCREENS.SHRINE;
    } else if (node.type === NODE_TYPES.MERCHANT) {
      if (!this.merchantInventories) this.merchantInventories = {};
      if (!this.merchantInventories[nodeId]) {
        const existingRelicIds = (this.hero.relics || []).map(r => r.id);
        this.merchantInventories[nodeId] = generateMerchantInventory({
          heroClassId: this.hero.classId,
          existingRelicIds,
          rng: this.rng
        });
      }
      this.currentMerchantInventory = this.merchantInventories[nodeId];
      this.screen = GAME_SCREENS.MERCHANT;
    } else if (node.type === NODE_TYPES.EVENT) {
      if (!this.narrativeEventInstances) this.narrativeEventInstances = {};
      if (!this.narrativeEventInstances[nodeId]) {
        this.narrativeEventInstances[nodeId] = getRandomNarrativeEvent([], this.rng);
      }
      this.currentNarrativeEvent = this.narrativeEventInstances[nodeId];
      this.screen = GAME_SCREENS.EVENT;
    } else if (node.type === NODE_TYPES.TREASURE) {
      if (!this.treasureRewards) this.treasureRewards = {};
      if (!this.treasureRewards[nodeId]) {
        const existingRelicIds = (this.hero.relics || []).map(r => r.id);
        const relic = getRandomRelic(existingRelicIds, this.rng);
        const gold = Math.floor(this.rng() * 41) + 80; // 80 a 120 de ouro
        this.treasureRewards[nodeId] = {
          relic,
          gold,
          claimed: false
        };
      }
      this.currentTreasure = this.treasureRewards[nodeId];
      this.screen = GAME_SCREENS.TREASURE;
    }

    return this.getState();
  }

  /**
   * Joga uma carta durante o combate ativo.
   * @param {string} cardUid
   */
  playCardInCombat(cardUid) {
    if (this.screen !== GAME_SCREENS.COMBAT || !this.currentCombat) {
      throw new Error('Não há combate ativo no momento.');
    }

    const result = this.currentCombat.playCard(cardUid);
    this._checkCombatTermination();
    return result;
  }

  /**
   * Finaliza o turno do jogador e processa a ação do inimigo.
   */
  endCombatTurn() {
    if (this.screen !== GAME_SCREENS.COMBAT || !this.currentCombat) {
      throw new Error('Não há combate ativo no momento.');
    }

    this.currentCombat.endTurn();
    this._checkCombatTermination();
  }

  /**
   * Checa se o combate ativo terminou com vitória ou derrota.
   */
  _checkCombatTermination() {
    if (!this.currentCombat || !this.currentCombat.isFinished) return;

    if (this.currentCombat.combatResult === 'defeat') {
      this.screen = GAME_SCREENS.DEFEAT;
      this.clearSavedRun();
    } else if (this.currentCombat.combatResult === 'victory') {
      this.combatRewardGold = this.currentCombat.goldReward || 0;
      this.hero.gold = (this.hero.gold || 0) + this.combatRewardGold;

      if (this.currentNode && this.currentNode.type === NODE_TYPES.BOSS) {
        if (this.currentAct < this.totalActs) {
          // Conquistou o Chefe do Ato atual (Ato 1 ou 2) -> Transição de Ato com Recuperação de Fôlego!
          this.screen = GAME_SCREENS.ACT_TRANSITION;
        } else {
          // Derrotou o Grande Dragão Tirano no Ato Final (Ato 3) -> Fim de jogo e Vitória Suprema!
          this.screen = GAME_SCREENS.VICTORY;
          this.clearSavedRun();
        }
      } else {
        // Vitória em combate comum ou de elite
        const encounterType = this.currentNode?.type === NODE_TYPES.ELITE
          ? 'elite'
          : (this.currentNode?.type === NODE_TYPES.BOSS ? 'boss' : 'normal');
        this.combatRewardCards = getRandomRewardCards(3, this.rng, encounterType);

        if (this.currentNode && this.currentNode.type === NODE_TYPES.ELITE) {
          // Recompensa adicional de Relíquia por derrotar Elite!
          const ownedRelicIds = this.hero.relics.map(r => r.id);
          const dropRelic = getRandomRelic(ownedRelicIds, this.rng);
          if (dropRelic) {
            this.eliteRewardRelic = dropRelic;
            addRelicToHero(this.hero, dropRelic.id);
          }
        }

        // Drop de Poção (40% em comum, 100% em Elite)
        const isElite = this.currentNode && this.currentNode.type === NODE_TYPES.ELITE;
        const potionChance = isElite ? 1.0 : 0.40;
        this.combatRewardPotion = null;
        if (this.rng() < potionChance) {
          const dropPotion = getRandomPotion(this.rng);
          const addRes = this.addPotion(dropPotion.id);
          if (addRes.success) {
            this.combatRewardPotion = dropPotion;
          }
        }

        this.screen = GAME_SCREENS.COMBAT_REWARD;
      }
    }
  }

  /**
   * Avança a jornada para o próximo Ato da campanha, aplicando a Recuperação de Fôlego
   * (curando 35% da vida máxima do herói) e gerando proceduralmente o novo mapa de nós do próximo ambiente.
   * @returns {Object}
   */
  advanceAct() {
    if (this.currentAct >= this.totalActs) {
      this.screen = GAME_SCREENS.VICTORY;
      this.clearSavedRun();
      return { completed: true, victory: true };
    }

    this.currentAct += 1;

    // Recuperação de Fôlego: restaura 35% da Vida máxima
    const healAmount = Math.max(1, Math.round(this.hero.maxHp * 0.35));
    const prevHp = this.hero.hp;
    this.hero.hp = Math.min(this.hero.maxHp, this.hero.hp + healAmount);
    const actualHealed = this.hero.hp - prevHp;

    // Gera o mapa procedural do próximo Ato
    const mapGen = new MapGenerator({
      act: this.currentAct,
      totalFloors: 15,
      rng: this.rng
    });
    this.map = mapGen.generateMap();
    this.currentNode = null;
    this.currentCombat = null;
    this.combatRewardCards = [];
    this.combatRewardPotion = null;
    this.combatRewardGold = 0;
    this.eliteRewardRelic = null;
    this.shrineCardOptions = [];
    this.merchantInventories = {};
    this.currentMerchantInventory = null;
    this.narrativeEventInstances = {};
    this.currentNarrativeEvent = null;

    this.screen = GAME_SCREENS.MAP;
    this.saveRun();

    return {
      completed: false,
      act: this.currentAct,
      actTheme: this.map.actTheme,
      healAmount: actualHealed,
      newHp: this.hero.hp,
      maxHp: this.hero.maxHp
    };
  }

  /**
   * Coleta a recompensa de combate ou pula.
   * Suporta substituição tática caso o baralho ativo atinja o teto (padrão 15).
   * @param {string|null} cardUid UID da carta escolhida ou null para pular
   * @param {string|null} [replaceCardUid=null] UID da carta do deck ativo a substituir
   * @param {boolean} [sendToReserve=false] Se verdadeiro, envia a carta nova direto para a reserva
   */
  claimCombatReward(cardUid = null, replaceCardUid = null, sendToReserve = false) {
    const isRewardScreen = this.screen === GAME_SCREENS.COMBAT_REWARD;
    const hasRewardCards = Array.isArray(this.combatRewardCards) && this.combatRewardCards.length > 0;
    const hasRewardGold = (this.combatRewardGold || 0) > 0;

    if (!isRewardScreen && !hasRewardCards && !hasRewardGold) {
      throw new Error('Não está na tela de recompensa de combate.');
    }

    if (cardUid) {
      let chosen = this.combatRewardCards.find(c => c.uid === cardUid);
      if (!chosen) {
        chosen = this.combatRewardCards.find(c => c.id === cardUid);
      }
      if (!chosen && typeof CARDS !== 'undefined' && CARDS[cardUid]) {
        chosen = { id: cardUid };
      }

      if (chosen) {
        const newCard = createCardInstance(chosen.id);
        const maxDeck = this.hero.maxDeckSize || 15;
        this.hero.reserveDeck = this.hero.reserveDeck || [];

        if (sendToReserve) {
          // Envia diretamente para a reserva
          this.hero.reserveDeck.push(newCard);
        } else if (replaceCardUid) {
          // Substitui a carta selecionada do deck ativo, movendo a antiga para a reserva
          const replaceIdx = this.hero.deck.findIndex(c => c.uid === replaceCardUid || c.id === replaceCardUid);
          if (replaceIdx !== -1) {
            const removedCard = this.hero.deck.splice(replaceIdx, 1)[0];
            this.hero.reserveDeck.push(removedCard);
          }
          this.hero.deck.push(newCard);
        } else if (this.hero.deck.length < maxDeck) {
          this.hero.deck.push(newCard);
        } else {
          // Se já atingiu o teto e não foi especificada substituição, guarda na reserva
          this.hero.reserveDeck.push(newCard);
        }
      }
    } else {
      // Pular recompensa concede +15 de ouro como consolação estratégica
      this.hero.gold = (this.hero.gold || 0) + 15;
    }

    this.combatRewardCards = [];
    this.combatRewardPotion = null;
    this.combatRewardGold = 0;
    this.eliteRewardRelic = null;
    this.currentCombat = null;
    this.screen = GAME_SCREENS.MAP;

    // Auto-salva após concluir recompensas de combate
    this.saveRun();

    return this.getState();
  }

  /**
   * Move uma carta do Baralho de Combate para o Baú de Reserva.
   * Regra: O baralho ativo nunca pode ficar com menos de 10 cartas.
   * @param {string} cardUid
   * @returns {Object}
   */
  moveCardToReserve(cardUid) {
    if (!this.hero || !this.hero.deck) throw new Error('Herói não inicializado.');
    if (this.hero.deck.length <= 10) {
      throw new Error('O baralho ativo deve conter no mínimo 10 cartas para combater!');
    }
    const idx = this.hero.deck.findIndex(c => c.uid === cardUid);
    if (idx === -1) throw new Error('Carta não encontrada no baralho ativo.');

    const card = this.hero.deck.splice(idx, 1)[0];
    this.hero.reserveDeck = this.hero.reserveDeck || [];
    this.hero.reserveDeck.push(card);
    this.saveRun();
    return card;
  }

  /**
   * Move uma carta do Baú de Reserva para o Baralho de Combate Ativo.
   * Regra: Não pode ultrapassar o teto máximo (15 cartas).
   * @param {string} cardUid
   * @returns {Object}
   */
  moveCardToActiveDeck(cardUid) {
    if (!this.hero) throw new Error('Herói não inicializado.');
    const maxDeck = this.hero.maxDeckSize || 15;
    if (this.hero.deck.length >= maxDeck) {
      throw new Error(`O baralho ativo já atingiu o limite máximo de ${maxDeck} cartas!`);
    }
    this.hero.reserveDeck = this.hero.reserveDeck || [];
    const idx = this.hero.reserveDeck.findIndex(c => c.uid === cardUid);
    if (idx === -1) throw new Error('Carta não encontrada no baú de reserva.');

    const card = this.hero.reserveDeck.splice(idx, 1)[0];
    this.hero.deck.push(card);
    this.saveRun();
    return card;
  }

  /**
   * Troca diretamente uma carta do Deck Ativo por uma carta da Reserva.
   * @param {string} activeCardUid
   * @param {string} reserveCardUid
   * @returns {boolean}
   */
  swapActiveAndReserveCard(activeCardUid, reserveCardUid) {
    if (!this.hero || !this.hero.deck) throw new Error('Herói não inicializado.');
    const activeIdx = this.hero.deck.findIndex(c => c.uid === activeCardUid);
    if (activeIdx === -1) throw new Error('Carta ativa não encontrada.');

    this.hero.reserveDeck = this.hero.reserveDeck || [];
    const reserveIdx = this.hero.reserveDeck.findIndex(c => c.uid === reserveCardUid);
    if (reserveIdx === -1) throw new Error('Carta de reserva não encontrada.');

    const activeCard = this.hero.deck[activeIdx];
    const reserveCard = this.hero.reserveDeck[reserveIdx];

    this.hero.deck[activeIdx] = reserveCard;
    this.hero.reserveDeck[reserveIdx] = activeCard;
    this.saveRun();
    return true;
  }

  /**
   * Aplica a escolha realizada em um nó de Santuário / Acampamento.
   * @param {string} choiceType 'rest' | 'heal' | 'upgrade_card' | 'remove_card' | 'duplicate_card' | 'add_card'
   * @param {Object} [payload] Parâmetros como cardUid ou cardId
   */
  applyShrineChoice(choiceType, payload = {}) {
    if (this.screen !== GAME_SCREENS.SHRINE) {
      throw new Error('Não está em um nó de Santuário.');
    }

    let result;
    switch (choiceType) {
      case CAMPFIRE_ACTIONS.REST:
      case SHRINE_ACTIONS.HEAL:
        result = executeRest(this.hero, 0.30);
        break;
      case CAMPFIRE_ACTIONS.UPGRADE_CARD:
        result = executeUpgradeCard(this.hero.deck, payload.cardUid);
        break;
      case SHRINE_ACTIONS.REMOVE_CARD:
        result = executeRemoveCard(this.hero.deck, payload.cardUid);
        break;
      case SHRINE_ACTIONS.DUPLICATE_CARD:
        result = this.duplicateCardInDeck(payload.cardUid);
        break;
      case SHRINE_ACTIONS.ADD_CARD:
        result = executeAddCard(this.hero.deck, payload.cardId);
        break;
      default:
        throw new Error(`Escolha de santuário desconhecida: "${choiceType}"`);
    }

    this.shrineCardOptions = [];
    this.screen = GAME_SCREENS.MAP;

    // Auto-salva após escolha no santuário
    this.saveRun();

    return {
      choiceResult: result,
      gameState: this.getState()
    };
  }

  /**
   * Adiciona uma relíquia ao herói.
   * @param {string} relicId
   */
  addRelic(relicId) {
    return addRelicToHero(this.hero, relicId);
  }

  /**
   * Verifica se o herói possui uma determinada relíquia.
   * @param {string} relicId
   * @returns {boolean}
   */
  hasRelic(relicId) {
    return hasRelic(this.hero, relicId);
  }

  /**
   * Adiciona uma carta ao deck do herói.
   * @param {string} cardId
   */
  addCardToDeck(cardId) {
    const card = createCardInstance(cardId);
    this.hero.deck.push(card);
    return card;
  }

  /**
   * Remove uma carta do deck do herói.
   * @param {string} cardUid
   */
  removeCardFromDeck(cardUid) {
    return executeRemoveCard(this.hero.deck, cardUid);
  }

  /**
   * Verifica se uma carta pode ser duplicada respeitando o teto de 3 cópias no baralho.
   * @param {string} cardId
   * @returns {boolean}
   */
  canDuplicateCard(cardId) {
    if (!cardId || !this.hero || !this.hero.deck) return false;
    const count = this.hero.deck.filter(c => c.id === cardId).length;
    return count < 3;
  }

  /**
   * Duplica uma carta do deck do herói respeitando o teto de 3 cópias.
   * Lança erro caso a carta já possua 3 cópias no baralho.
   * @param {string} cardUid
   * @returns {Object}
   */
  duplicateCardInDeck(cardUid) {
    const card = this.hero.deck.find(c => c.uid === cardUid);
    if (!card) {
      throw new Error(`Carta não encontrada no baralho com uid: "${cardUid}"`);
    }
    if (!this.canDuplicateCard(card.id)) {
      throw new Error(`Limite máximo de 3 cópias por carta no baralho atingido para "${card.name}".`);
    }
    return executeDuplicateCard(this.hero.deck, cardUid);
  }

  /**
   * Duplica uma carta do deck do herói (alias compatível com teto de 3 cópias).
   * @param {string} cardUid
   */
  duplicateCard(cardUid) {
    return this.duplicateCardInDeck(cardUid);
  }

  /**
   * Aprimora (+) permanentemente uma carta do baralho do herói na forja da fogueira.
   * @param {string} cardUid
   * @returns {Object}
   */
  upgradeCardInDeck(cardUid) {
    const res = executeUpgradeCard(this.hero.deck, cardUid);
    return res.upgradedCard;
  }

  /**
   * Cura a vida do herói.
   * @param {number} amount
   */
  healHero(amount) {
    const prev = this.hero.hp;
    this.hero.hp = Math.min(this.hero.maxHp, this.hero.hp + amount);
    return this.hero.hp - prev;
  }

  /**
   * Compra uma carta do estoque do mercador ativo.
   * @param {string} cardId
   * @returns {Object}
   */
  buyMerchantCard(cardId) {
    if (!this.currentMerchantInventory) {
      throw new Error('Não há loja de mercador aberta no momento.');
    }
    const item = this.currentMerchantInventory.cards.find(c => c.id === cardId);
    if (!item) {
      throw new Error(`Carta não encontrada no estoque: ${cardId}`);
    }
    if (item.bought) {
      throw new Error('Esta carta já foi comprada.');
    }
    if (this.hero.gold < item.price) {
      return {
        success: false,
        message: `Ouro insuficiente! Custa ${item.price} ouro (você tem ${this.hero.gold}).`
      };
    }

    this.hero.gold -= item.price;
    item.bought = true;
    const newCard = createCardInstance(cardId);
    this.hero.deck.push(newCard);

    return {
      success: true,
      message: `Você comprou "${item.name}" por ${item.price} ouro!`,
      card: newCard,
      quote: getRandomPurchaseQuote(this.rng)
    };
  }

  /**
   * Compra uma relíquia do estoque do mercador ativo.
   * @param {string} relicId
   * @returns {Object}
   */
  buyMerchantRelic(relicId) {
    if (!this.currentMerchantInventory) {
      throw new Error('Não há loja de mercador aberta no momento.');
    }
    const item = this.currentMerchantInventory.relics.find(r => r.id === relicId);
    if (!item) {
      throw new Error(`Relíquia não encontrada no estoque: ${relicId}`);
    }
    if (item.bought) {
      throw new Error('Esta relíquia já foi comprada.');
    }
    if (this.hero.gold < item.price) {
      return {
        success: false,
        message: `Ouro insuficiente! Custa ${item.price} ouro (você tem ${this.hero.gold}).`
      };
    }

    this.hero.gold -= item.price;
    item.bought = true;
    const relicAdded = addRelicToHero(this.hero, relicId);

    return {
      success: true,
      message: `Você adquiriu "${item.name}" por ${item.price} ouro!`,
      relic: relicAdded,
      quote: getRandomPurchaseQuote(this.rng)
    };
  }

  /**
   * Paga o serviço de purificação do mercador para remover uma carta permanentemente.
   * @param {string} cardUid
   * @returns {Object}
   */
  buyMerchantCardRemoval(cardUid) {
    if (!this.currentMerchantInventory) {
      throw new Error('Não há loja de mercador aberta no momento.');
    }
    if (this.currentMerchantInventory.removalUsed) {
      throw new Error('O serviço de purificação desta loja já foi utilizado.');
    }
    const cost = this.currentMerchantInventory.removalCost;
    if (this.hero.gold < cost) {
      return {
        success: false,
        message: `Ouro insuficiente para purificação! Custa ${cost} ouro (você tem ${this.hero.gold}).`
      };
    }

    const cardIndex = this.hero.deck.findIndex(c => c.uid === cardUid);
    if (cardIndex === -1) {
      throw new Error(`Carta não encontrada no baralho com uid: ${cardUid}`);
    }

    const removedCard = this.hero.deck.splice(cardIndex, 1)[0];
    this.hero.gold -= cost;
    this.currentMerchantInventory.removalUsed = true;

    return {
      success: true,
      message: `A carta "${removedCard.name}" foi incinerada pelo mercador!`,
      removedCard,
      quote: 'Um baralho purificado corta como navalha nas trevas.'
    };
  }

  /**
   * Retorna do mercador para a visão do mapa.
   */
  leaveMerchant() {
    this.currentMerchantInventory = null;
    this.screen = GAME_SCREENS.MAP;
    return this.getState();
  }

  /**
   * Adiciona uma poção ao primeiro slot livre do herói (máx 3).
   * @param {string} potionId
   * @returns {Object}
   */
  addPotion(potionId) {
    if (!this.hero.potions) {
      this.hero.potions = [null, null, null];
    }
    const emptySlot = this.hero.potions.findIndex(slot => slot === null);
    if (emptySlot === -1) {
      return {
        success: false,
        message: 'Seus slots de poções estão cheios (máximo 3)!'
      };
    }
    const potionInstance = createPotionInstance(potionId);
    this.hero.potions[emptySlot] = potionInstance;
    return {
      success: true,
      slotIndex: emptySlot,
      potion: potionInstance,
      message: `Você obteve "${potionInstance.name}" no slot ${emptySlot + 1}!`
    };
  }

  /**
   * Consome uma poção de um slot do herói.
   * Em combate, delega ao CombatSystem.
   * Fora de combate, só é permitida se canUseOutOfCombat === true.
   * @param {number} slotIndex
   * @returns {Object}
   */
  usePotion(slotIndex) {
    if (this.screen === GAME_SCREENS.COMBAT && this.currentCombat) {
      const res = this.currentCombat.usePotion(slotIndex);
      this._checkCombatTermination();
      return res;
    }

    if (!this.hero.potions || !this.hero.potions[slotIndex]) {
      throw new Error(`Slot de poção ${slotIndex} está vazio.`);
    }

    const potion = this.hero.potions[slotIndex];
    if (potion.canUseOutOfCombat === false) {
      return {
        success: false,
        message: `A poção "${potion.name}" só pode ser usada durante o combate!`
      };
    }

    const res = potion.execute({ hero: this.hero });
    if (res.success) {
      this.hero.potions[slotIndex] = null;
    }
    return {
      ...res,
      potion
    };
  }

  /**
   * Descarta uma poção do cinto.
   * @param {number} slotIndex
   * @returns {Object}
   */
  discardPotion(slotIndex) {
    if (!this.hero.potions || !this.hero.potions[slotIndex]) {
      return { success: false, message: 'Slot já está vazio.' };
    }
    const discarded = this.hero.potions[slotIndex];
    this.hero.potions[slotIndex] = null;
    return {
      success: true,
      message: `Você descartou "${discarded.name}".`,
      discarded
    };
  }

  /**
   * Aplica a escolha realizada em um nó de Evento Narrativo Misterioso.
   * @param {string} choiceId
   * @param {Object} [payload={}] Parâmetros opcionais da escolha (ex: cardUid, costType)
   * @returns {Object}
   */
  applyEventChoice(choiceId, payload = {}) {
    if (this.screen !== GAME_SCREENS.EVENT || !this.currentNarrativeEvent) {
      throw new Error('Não há evento narrativo ativo no momento.');
    }

    const choice = this.currentNarrativeEvent.choices.find(c => c.id === choiceId);
    if (!choice) {
      throw new Error(`Escolha não encontrada: ${choiceId}`);
    }

    if (typeof choice.condition === 'function' && !choice.condition(this.hero)) {
      throw new Error(choice.unavailableText || 'Condição para esta escolha não satisfeita.');
    }

    const result = choice.execute(this, payload);
    if (this.currentNode) {
      this.currentNode.state = NODE_STATES.VISITED;
    }
    return result;
  }

  /**
   * Retorna do evento misterioso para a visão do mapa.
   */
  leaveEvent() {
    this.currentNarrativeEvent = null;
    this.screen = GAME_SCREENS.MAP;
    return this.getState();
  }

  /**
   * Reivindica uma dádiva na Sala do Tesouro Ancestral.
   * @param {string} choiceType 'relic' | 'gold' | 'potion'
   */
  claimTreasureChoice(choiceType) {
    if (this.screen !== GAME_SCREENS.TREASURE || !this.currentTreasure) {
      throw new Error('Não está em uma Sala do Tesouro ativa.');
    }
    if (this.currentTreasure.claimed) {
      throw new Error('O tesouro deste baú já foi recolhido.');
    }

    let result = {};
    if (choiceType === 'relic') {
      const added = this.addRelic(this.currentTreasure.relic.id);
      result = {
        type: 'relic',
        relic: added,
        message: `Você obteve a relíquia rara "${added.name}"!`
      };
    } else if (choiceType === 'gold') {
      const amount = this.currentTreasure.gold || 100;
      this.hero.gold = (this.hero.gold || 0) + amount;
      result = {
        type: 'gold',
        amount,
        message: `Você coletou ${amount} de Ouro do baú ancestral!`
      };
    } else if (choiceType === 'potion') {
      const healDone = executeRest(this.hero, 0.35);
      const potionRes = this.addPotion('potion_health');
      result = {
        type: 'potion',
        healDone,
        potion: potionRes.potion || null,
        message: `Você recuperou ${healDone} de Vida e recebeu uma Poção de Vitalidade!`
      };
    } else {
      throw new Error(`Tipo de escolha de tesouro desconhecido: ${choiceType}`);
    }

    this.currentTreasure.claimed = true;
    if (this.currentNode) {
      this.currentNode.state = NODE_STATES.VISITED;
    }
    this.screen = GAME_SCREENS.MAP;
    this.saveRun();
    return result;
  }

  /**
   * Retorna da Sala do Tesouro para a visão do mapa.
   */
  leaveTreasure() {
    this.currentTreasure = null;
    this.screen = GAME_SCREENS.MAP;
    this.saveRun();
    return this.getState();
  }

  /**
   * Retorna representação estruturada completa do estado atual.
   * @returns {Object}
   */
  getState() {
    return {
      screen: this.screen,
      currentAct: this.currentAct || 1,
      totalActs: this.totalActs || 3,
      elapsedTime: this.elapsedTime || 0,
      hero: {
        ...this.hero,
        deckSize: this.hero.deck.length,
        relicsCount: (this.hero.relics || []).length
      },
      map: this.map,
      currentNode: this.currentNode,
      combat: this.currentCombat ? this.currentCombat.getStateSnapshot() : null,
      combatRewardCards: this.combatRewardCards,
      combatRewardPotion: this.combatRewardPotion,
      combatRewardGold: this.combatRewardGold || 0,
      eliteRewardRelic: this.eliteRewardRelic,
      shrineCardOptions: this.shrineCardOptions,
      currentMerchantInventory: this.currentMerchantInventory,
      currentNarrativeEvent: this.currentNarrativeEvent
    };
  }

  /**
   * Salva o estado da run atual.
   * @param {string} [storageKey='cards_and_dungeons_run']
   * @returns {boolean}
   */
  saveRun(storageKey = 'cards_and_dungeons_run') {
    try {
      const data = {
        version: '1.4.0',
        savedAt: Date.now(),
        screen: this.screen,
        currentAct: this.currentAct || 1,
        totalActs: this.totalActs || 3,
        elapsedTime: this.elapsedTime || 0,
        hero: this.hero,
        map: this.map,
        currentNode: this.currentNode,
        combatRewardCards: this.combatRewardCards,
        combatRewardPotion: this.combatRewardPotion,
        combatRewardGold: this.combatRewardGold || 0,
        eliteRewardRelic: this.eliteRewardRelic,
        merchantInventories: this.merchantInventories,
        currentMerchantInventory: this.currentMerchantInventory,
        narrativeEventInstances: this.narrativeEventInstances,
        currentNarrativeEvent: this.currentNarrativeEvent,
        treasureRewards: this.treasureRewards,
        currentTreasure: this.currentTreasure
      };
      _setStorageItem(storageKey, JSON.stringify(data));
      return true;
    } catch (e) {
      console.warn('Falha ao salvar run:', e);
      return false;
    }
  }

  /**
   * Carrega uma run salva anteriormente.
   * @param {string} [storageKey='cards_and_dungeons_run']
   * @returns {boolean}
   */
  loadRun(storageKey = 'cards_and_dungeons_run') {
    try {
      const raw = _getStorageItem(storageKey);
      if (!raw) return false;
      const data = JSON.parse(raw);
      this.screen = data.screen;
      this.currentAct = data.currentAct || 1;
      this.totalActs = data.totalActs || 3;
      this.elapsedTime = data.elapsedTime || 0;
      this.hero = data.hero;
      if (this.hero) {
        this.hero.reserveDeck = this.hero.reserveDeck || [];
        this.hero.maxDeckSize = this.hero.maxDeckSize || 15;
      }
      this.map = data.map;
      this.currentNode = data.currentNode;
      this.combatRewardCards = data.combatRewardCards || [];
      this.combatRewardPotion = data.combatRewardPotion || null;
      this.combatRewardGold = data.combatRewardGold || 0;
      this.eliteRewardRelic = data.eliteRewardRelic || null;
      this.merchantInventories = data.merchantInventories || {};
      this.currentMerchantInventory = data.currentMerchantInventory || (
        (this.currentNode && this.currentNode.type === NODE_TYPES.MERCHANT)
          ? (this.merchantInventories[this.currentNode.id] || null)
          : null
      );
      this.narrativeEventInstances = data.narrativeEventInstances || {};
      this.currentNarrativeEvent = data.currentNarrativeEvent || null;
      this.treasureRewards = data.treasureRewards || {};
      this.currentTreasure = data.currentTreasure || (
        (this.currentNode && this.currentNode.type === NODE_TYPES.TREASURE)
          ? (this.treasureRewards[this.currentNode.id] || null)
          : null
      );
      this.currentCombat = null;
      return true;
    } catch (e) {
      console.warn('Falha ao carregar run:', e);
      return false;
    }
  }

  /**
   * Apaga a run salva (ao ser derrotado ou vencer).
   * @param {string} [storageKey='cards_and_dungeons_run']
   */
  clearSavedRun(storageKey = 'cards_and_dungeons_run') {
    _removeStorageItem(storageKey);
  }

  /**
   * Verifica se existe um salvamento ativo.
   * @param {string} [storageKey='cards_and_dungeons_run']
   * @returns {boolean}
   */
  hasSavedRun(storageKey = 'cards_and_dungeons_run') {
    return _getStorageItem(storageKey) !== null;
  }

  // Compatibilidade retroativa
  saveToLocalStorage(storageKey = 'cards_and_dungeons_save') {
    return this.saveRun(storageKey);
  }

  loadFromLocalStorage(storageKey = 'cards_and_dungeons_save') {
    return this.loadRun(storageKey);
  }
}
