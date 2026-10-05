/**
 * js/engine/CombatSystem.js
 * Máquina de estado do combate tático por turnos de "Cards e Dungeons",
 * integrada com modificadores de status (Força, Vulnerável, Fraco, Queimadura, Espinhos)
 * e gatilhos de relíquias passivas.
 */

import {
  STATUS_TYPES,
  createDefaultStatusMap,
  applyStatus,
  calculateModifiedDamage,
  tickTurnStartStatuses,
  tickTurnEndStatuses
} from '../data/statusEffects.js';
import { triggerRelics } from '../data/relics.js';

export const COMBAT_STATES = {
  HERO_TURN: 'hero_turn',
  ENEMY_TURN: 'enemy_turn',
  VICTORY: 'victory',
  DEFEAT: 'defeat'
};

export class CombatSystem {
  /**
   * @param {Object} params
   * @param {Object} params.hero Referência ao herói da run { hp, maxHp, maxEnergy, block, deck, relics, statuses }
   * @param {Object} params.enemy Instância do inimigo { id, name, hp, maxHp, block, statuses, buffs, getIntention }
   * @param {function} [params.rng=Math.random] Gerador pseudo-aleatório para embaralhar
   * @param {function} [params.onLog] Callback para notificações textuais na UI
   */
  constructor({ hero, enemy, rng = Math.random, onLog = null }) {
    this.hero = hero;
    this.enemy = enemy;
    this.rng = rng;
    this.onLogCallback = onLog;

    // Pilhas de cartas durante o combate
    this.drawPile = [];
    this.hand = [];
    this.discardPile = [];
    this.exhaustPile = [];

    this.turnCount = 1;
    this.state = COMBAT_STATES.HERO_TURN;
    this.isFinished = false;
    this.combatResult = null; // 'victory' | 'defeat'
    this.goldReward = 0;
    this.actionLogs = [];

    // Mecânicas táticas e combos expandidos (Etapa 3)
    this.cardsPlayedThisTurn = 0;
    this.echoNextCard = false;
    this.heroRetainBlock = 0;
    this.flameCloak = 0;
    this.lethalToxinActive = false;

    this._initCombat();
  }

  /**
   * Inicializa o combate, pilhas de cartas, relíquias e primeira intenção do monstro.
   */
  _initCombat() {
    this.hero.block = 0;
    this.hero.energy = this.hero.maxEnergy || 3;

    // Inicializa ou preserva mapas de status
    if (!this.hero.statuses) {
      this.hero.statuses = createDefaultStatusMap();
    } else {
      // Reseta status temporários entre combates, exceto se persistentes
      this.hero.statuses[STATUS_TYPES.VULNERABLE] = 0;
      this.hero.statuses[STATUS_TYPES.WEAK] = 0;
      this.hero.statuses[STATUS_TYPES.BURN] = 0;
      this.hero.statuses[STATUS_TYPES.THORNS] = 0;
      this.hero.statuses[STATUS_TYPES.STRENGTH] = 0;
    }

    if (!this.enemy.statuses) {
      this.enemy.statuses = createDefaultStatusMap();
    }
    this.enemy.block = this.enemy.block || 0;

    // Clona as cartas do baralho do herói para o monte de compra
    this.drawPile = this.hero.deck.map(card => ({ ...card }));
    this.discardPile = [];
    this.exhaustPile = [];
    this.hand = [];

    // Embaralha o monte de compra
    this._shuffle(this.drawPile);

    this._log(`Combate iniciado contra ${this.enemy.name}!`);

    // Efeito de afixo do inimigo: armored (Couraçado)
    if (this.enemy.affix?.id === 'armored') {
      const bonusArmor = this.enemy.affix.bonusArmor || 14;
      this.enemy.block += bonusArmor;
      this._log(`${this.enemy.name} possui o afixo [Couraçado] e inicia o combate com +${bonusArmor} de armadura!`);
    }

    // Dispara gatilhos de relíquias de início de combate (ex: Amuleto da Força, Orbe Ancião, Frasco Peçonhento)
    triggerRelics('onCombatStart', this.hero, {
      combat: this,
      enemy: this.enemy,
      log: (msg) => this._log(msg)
    });

    // Inimigo telegrafa sua intenção para o Turno 1
    this.enemy.currentIntent = this.enemy.getIntention(this.turnCount, this.enemy);
    this._log(`${this.enemy.name} prepara: ${this.enemy.currentIntent.name} (${this.enemy.currentIntent.description})`);

    // Inicia Turno 1 do herói
    this._startHeroTurn(true);
  }

  /**
   * Inicia o turno do herói.
   * @param {boolean} [isFirstTurn=false]
   */
  _startHeroTurn(isFirstTurn = false) {
    if (this.isFinished) return;

    this.state = COMBAT_STATES.HERO_TURN;
    this.cardsPlayedThisTurn = 0;
    this.echoNextCard = false;
    this.flameCloak = 0;

    if (!isFirstTurn) {
      // Preserva armadura protegida por Muralha Viva
      const retained = Math.min(this.hero.block, this.heroRetainBlock || 0);
      this.hero.block = retained;
      this.heroRetainBlock = 0;
      this.hero.energy = this.hero.maxEnergy || 3;
    }

    if (!isFirstTurn) {
      this._log(`--- Turno ${this.turnCount}: Sua vez! ---`);
    }

    // Processa Queimadura no Herói no início do turno
    const { burnDamage } = tickTurnStartStatuses(this.hero, (msg) => this._log(msg));
    if (this.hero.hp <= 0) {
      this._handleDefeat();
      return;
    }

    // Compra 5 cartas
    this.drawCards(5);
  }

  /**
   * Compra um determinado número de cartas da pilha de compra.
   * Recicla a pilha de descarte caso necessário.
   * @param {number} count
   * @returns {Array<Object>} Cartas compradas
   */
  drawCards(count) {
    const drawn = [];

    for (let i = 0; i < count; i++) {
      if (this.drawPile.length === 0) {
        if (this.discardPile.length === 0) {
          break;
        }
        this._recycleDiscardPile();
      }

      const card = this.drawPile.pop();
      this.hand.push(card);
      drawn.push(card);
    }

    return drawn;
  }

  /**
   * Recicla o monte de descarte para o monte de compra e o embaralha.
   */
  _recycleDiscardPile() {
    this._log(`O monte de compra esgotou! As cartas descartadas foram reembaralhadas.`);
    this.drawPile = [...this.discardPile];
    this.discardPile = [];
    this._shuffle(this.drawPile);
  }

  /**
   * Joga uma carta da mão do herói contra o inimigo.
   * @param {string} cardUid UID da carta na mão
   * @returns {Object} Resumo da ação executada
   */
  /**
   * Verifica transição de fase de Chefes Épicos ao atingir 50% de HP.
   */
  _checkBossPhaseTransition() {
    if (this.enemy.type === 'boss' && !this.enemy.phase2Triggered && this.enemy.hp > 0 && this.enemy.hp <= Math.floor(this.enemy.maxHp * 0.5)) {
      this.enemy.phase2Triggered = true;
      let phaseMessage = `⚡ ATENÇÃO: ${this.enemy.name} atinge 50% de Vida e entra na FASE 2!`;
      if (this.enemy.id === 'golem_guardiao') {
        phaseMessage = `⚡ O Núcleo do Golem Guardião Rachou! Ele entra na FASE 2: [Núcleo Sobreaquecido] (+4 Força e ataques ígneos)!`;
        applyStatus(this.enemy, STATUS_TYPES.STRENGTH, 4);
      } else if (this.enemy.id === 'lich_rei') {
        phaseMessage = `⚡ O Lich Rei assume a FASE 2: [Forma Espectral dos Condenados]! Dreno de vida ampliado e maldições debilitantes (+3 Força)!`;
        applyStatus(this.enemy, STATUS_TYPES.STRENGTH, 3);
      } else if (this.enemy.id === 'dragao_tirano') {
        phaseMessage = `⚡ RUGIDO DO APOCALIPSE! O Dragão Tirano entra na FASE 2: [Ira Vulcânica Incontrolável] (+3 Força permanente adicional)!`;
        applyStatus(this.enemy, STATUS_TYPES.STRENGTH, 3);
      }
      this._log(phaseMessage);
      // Atualiza a intenção telegrafada para a nova fase
      this.enemy.currentIntent = this.enemy.getIntention(this.turnCount, this.enemy);
      this._log(`${this.enemy.name} prepara nova ação: ${this.enemy.currentIntent.name} (${this.enemy.currentIntent.description})`);
    }
  }

  /**
   * Executa a resolução lógica dos efeitos de uma carta.
   * @param {Object} card Definição da carta
   * @param {Object} actionResult Objeto acumulador de resultados da jogada
   */
  _resolveCardEffect(card, actionResult) {
    if (this.isFinished) return;

    // 1. Efeitos de Armadura / Escudo
    if (card.block > 0) {
      this.hero.block += card.block;
      actionResult.blockGained = (actionResult.blockGained || 0) + card.block;
      this._log(`Você ergueu guarda e ganhou ${card.block} de armadura.`);
    }

    // 2. Retenção de Armadura entre turnos (Muralha Viva)
    if (card.retainBlock > 0) {
      this.heroRetainBlock = Math.max(this.heroRetainBlock || 0, card.retainBlock);
      this._log(`Postura inabalável: você reterá até ${this.heroRetainBlock} de armadura para o próximo turno.`);
    }

    // 3. Manto de Chamas (Mago)
    if (card.flameCloak > 0) {
      this.flameCloak = (this.flameCloak || 0) + card.flameCloak;
      this._log(`Manto de Chamas ativado (+${card.flameCloak} de Queimadura reativa ao sofrer ataques)!`);
    }

    // 4. Quebra de Armadura do Inimigo (ex: Rompe-Guarda ou Chute)
    if (card.armorBreakAll && this.enemy.block > 0) {
      const broken = this.enemy.block;
      this.enemy.block = 0;
      actionResult.armorBroken = (actionResult.armorBroken || 0) + broken;
      this._log(`O golpe quebrou totalmente a armadura de ${this.enemy.name} (${broken} pontos destruídos)!`);
    } else if (card.armorBreak > 0 && this.enemy.block > 0) {
      const broken = Math.min(this.enemy.block, card.armorBreak);
      this.enemy.block -= broken;
      actionResult.armorBroken = (actionResult.armorBroken || 0) + broken;
      this._log(`A armadura de ${this.enemy.name} foi quebrada em ${broken} pontos!`);
    }

    // 5. Cálculo do Dano Base Dinâmico
    let baseDamage = card.damage || 0;

    // Golpe de Escudo: causa dano igual à armadura atual (+ bônus)
    if (card.damageEqualsBlock) {
      baseDamage = this.hero.block + (card.blockBonusDamage || 0);
      this._log(`Golpe de Escudo converteu ${this.hero.block} de armadura em ataque (Dano base: ${baseDamage})!`);
    }

    // Golpe Frenético: dano bônus com HP < 50%
    if (card.lowHpBonusDamage && this.hero.hp < (this.hero.maxHp * 0.5)) {
      baseDamage += card.lowHpBonusDamage;
      this._log(`Ataque desesperado! +${card.lowHpBonusDamage} de dano adicional!`);
    }

    // Execução Sombria: dano cresce com cartas jogadas no turno
    if (card.damagePerCardPlayed) {
      const comboBonus = this.cardsPlayedThisTurn * card.damagePerCardPlayed;
      baseDamage += comboBonus;
      this._log(`Execução Sombria: +${comboBonus} de dano bônus (${this.cardsPlayedThisTurn} cartas jogadas anteriormente)!`);
    }

    // Incinerar: consome queimadura do inimigo e causa dano multiplicado
    if (card.consumeBurnMultiplier) {
      const curBurn = this.enemy.statuses?.[STATUS_TYPES.BURN] || 0;
      if (curBurn > 0) {
        const burnBonus = curBurn * card.consumeBurnMultiplier;
        this.enemy.statuses[STATUS_TYPES.BURN] = 0;
        baseDamage += burnBonus;
        this._log(`Incinerar consumiu ${curBurn} de Queimadura causando +${burnBonus} de dano bônus massivo!`);
      }
    }

    // Aplicação do Dano Físico Modificado
    if (baseDamage > 0) {
      const hits = card.hits || 1;
      let totalDmg = 0;

      for (let h = 0; h < hits; h++) {
        if (this.enemy.hp <= 0) break;

        const hitDamage = calculateModifiedDamage(baseDamage, this.hero, this.enemy);
        const absorbed = Math.min(this.enemy.block, hitDamage);
        this.enemy.block -= absorbed;
        const pierceDmg = hitDamage - absorbed;
        this.enemy.hp = Math.max(0, this.enemy.hp - pierceDmg);
        totalDmg += hitDamage;

        if (absorbed > 0 && pierceDmg > 0) {
          this._log(`Ataque causou ${absorbed} dano ao escudo e ${pierceDmg} de dano direto a ${this.enemy.name}.`);
        } else if (absorbed > 0) {
          this._log(`O escudo de ${this.enemy.name} absorveu totalmente os ${absorbed} de dano.`);
        } else {
          this._log(`Ataque atingiu ${this.enemy.name} diretamente causando ${pierceDmg} de dano!`);
        }

        this._checkBossPhaseTransition();

        // Afixo do inimigo: thorns (Espinhoso)
        if (pierceDmg > 0 && this.enemy.affix?.id === 'thorns') {
          const retaliation = this.enemy.affix.retaliation || 3;
          this.hero.hp = Math.max(0, this.hero.hp - retaliation);
          this._log(`O afixo [Espinhoso] de ${this.enemy.name} retaliou ${retaliation} de dano direto em você!`);
          if (this.hero.hp <= 0) {
            this._handleDefeat();
            return;
          }
        }
      }

      actionResult.damageDealt = (actionResult.damageDealt || 0) + totalDmg;
    }

    // 6. Redução do Ataque Telegrafado do Monstro (Lança de Gelo)
    if (card.reduceIntentDamage > 0 && this.enemy.currentIntent && this.enemy.currentIntent.damage > 0) {
      const red = Math.min(this.enemy.currentIntent.damage, card.reduceIntentDamage);
      this.enemy.currentIntent.damage -= red;
      this._log(`Golpe congelante reduziu o próximo ataque de ${this.enemy.name} em ${red} (Novo dano: ${this.enemy.currentIntent.damage})!`);
    }

    // 7. Mecânicas de Veneno Especiais (Catalisador Tóxico, Adaga Contaminada, Toxina Letal)
    if (card.doublePoison) {
      const curPoison = this.enemy.statuses?.[STATUS_TYPES.POISON] || 0;
      if (curPoison > 0) {
        applyStatus(this.enemy, STATUS_TYPES.POISON, curPoison);
        this._log(`Catalisador Tóxico dobrou o veneno em ${this.enemy.name} para ${this.enemy.statuses[STATUS_TYPES.POISON]}!`);
      }
      if (card.bonusPoison > 0) {
        applyStatus(this.enemy, STATUS_TYPES.POISON, card.bonusPoison);
        this._log(`+${card.bonusPoison} de Veneno adicional aplicado!`);
      }
    }
    if (card.energyIfPoison) {
      if ((this.enemy.statuses?.[STATUS_TYPES.POISON] || 0) > 0) {
        this.hero.energy += card.energyIfPoison;
        actionResult.energyGained = (actionResult.energyGained || 0) + card.energyIfPoison;
        this._log(`Golpe em ferida envenenada concedeu +${card.energyIfPoison} de Energia!`);
      }
    }
    if (card.lethalToxinPower) {
      this.lethalToxinActive = true;
      this._log(`Toxina Letal ativada: todo dano de veneno corroerá armadura de ${this.enemy.name}!`);
    }

    // 8. Aplicação de Status no Inimigo
    if (card.poison > 0) {
      applyStatus(this.enemy, STATUS_TYPES.POISON, card.poison);
      actionResult.statusesApplied.poison = (actionResult.statusesApplied.poison || 0) + card.poison;
      this._log(`Você envenenou ${this.enemy.name} com ${card.poison} toxinas letais!`);
    }
    if (card.burn > 0) {
      applyStatus(this.enemy, STATUS_TYPES.BURN, card.burn);
      actionResult.statusesApplied.burn = (actionResult.statusesApplied.burn || 0) + card.burn;
      this._log(`Você aplicou ${card.burn} de Queimadura em ${this.enemy.name}!`);
    }
    if (card.vulnerable > 0) {
      applyStatus(this.enemy, STATUS_TYPES.VULNERABLE, card.vulnerable);
      actionResult.statusesApplied.vulnerable = (actionResult.statusesApplied.vulnerable || 0) + card.vulnerable;
      this._log(`Você deixou ${this.enemy.name} Vulnerável por ${card.vulnerable} turnos (+50% de dano recebido)!`);
    }
    if (card.weak > 0) {
      applyStatus(this.enemy, STATUS_TYPES.WEAK, card.weak);
      actionResult.statusesApplied.weak = (actionResult.statusesApplied.weak || 0) + card.weak;
      this._log(`Você enfraqueceu ${this.enemy.name} por ${card.weak} turnos (-25% de dano causado)!`);
    }

    // 9. Status no Herói (Espinhos e Força)
    if (card.thorns > 0) {
      applyStatus(this.hero, STATUS_TYPES.THORNS, card.thorns);
      actionResult.statusesApplied.thorns = (actionResult.statusesApplied.thorns || 0) + card.thorns;
      this._log(`Você assumiu postura de espinhos (+${card.thorns} de Retaliação)!`);
    }
    if (card.buffStrength > 0) {
      applyStatus(this.hero, STATUS_TYPES.STRENGTH, card.buffStrength);
      actionResult.statusesApplied.strength = (actionResult.statusesApplied.strength || 0) + card.buffStrength;
      this._log(`Você fortaleceu seus músculos e ganhou +${card.buffStrength} de Força!`);
    }

    // 10. Compra de Cartas e Compra Condicional
    if (card.drawCards > 0) {
      const drawn = this.drawCards(card.drawCards);
      actionResult.cardsDrawn = (actionResult.cardsDrawn || 0) + drawn.length;
      this._log(`Você comprou ${drawn.length} carta(s) adicional(is)!`);
    }
    if (card.conditionalDraw > 0 && this.hero.energy >= 1) {
      const drawn = this.drawCards(card.conditionalDraw);
      actionResult.cardsDrawn = (actionResult.cardsDrawn || 0) + drawn.length;
      this._log(`Energia remanescente ativou ressonância: +${drawn.length} carta comprada!`);
    }

    // 11. Cura de Vida
    if (card.heal > 0) {
      const prevHp = this.hero.hp;
      this.hero.hp = Math.min(this.hero.maxHp, this.hero.hp + card.heal);
      const healed = this.hero.hp - prevHp;
      actionResult.healed = (actionResult.healed || 0) + healed;
      this._log(`Você recuperou ${healed} pontos de vida!`);
    }

    // 12. Ganho de Energia e Custo de Vida
    if (card.energyGain > 0) {
      this.hero.energy += card.energyGain;
      actionResult.energyGained = (actionResult.energyGained || 0) + card.energyGain;
      this._log(`Você canalizou energia e ganhou +${card.energyGain} de Energia!`);
    }
    if (card.hpCost > 0) {
      this.hero.hp = Math.max(0, this.hero.hp - card.hpCost);
      actionResult.hpLost = (actionResult.hpLost || 0) + card.hpCost;
      this._log(`Você sacrificou ${card.hpCost} de Vida.`);
      if (this.hero.hp <= 0) {
        this._handleDefeat();
        return;
      }
    }

    // 13. Eco Temporal
    if (card.doubleNextCard) {
      this.echoNextCard = true;
      this._log(`Eco Temporal preparado! A próxima carta jogada neste turno será duplicada sem custo!`);
    }
  }

  /**
   * Joga uma carta da mão do herói contra o inimigo.
   * @param {string} cardUid UID da carta na mão
   * @returns {Object} Resumo da ação executada
   */
  playCard(cardUid) {
    if (this.isFinished) {
      throw new Error('O combate já terminou.');
    }

    if (this.state !== COMBAT_STATES.HERO_TURN) {
      throw new Error('Não é o turno do jogador.');
    }

    const cardIndex = this.hand.findIndex(c => c.uid === cardUid);
    if (cardIndex === -1) {
      throw new Error(`Carta não encontrada na mão: "${cardUid}"`);
    }

    const card = this.hand[cardIndex];

    if (this.hero.energy < card.cost) {
      throw new Error(`Energia insuficiente para jogar "${card.name}". Custo: ${card.cost}, Atual: ${this.hero.energy}`);
    }

    // 1. Gasta energia
    this.hero.energy -= card.cost;

    // 2. Remove da mão
    this.hand.splice(cardIndex, 1);

    const actionResult = {
      card,
      damageDealt: 0,
      blockGained: 0,
      armorBroken: 0,
      healed: 0,
      energyGained: 0,
      hpLost: 0,
      statusesApplied: {},
      cardsDrawn: 0,
      exhausted: !!card.exhaust
    };

    // Eco Temporal: duplica a próxima carta
    const shouldEcho = this.echoNextCard && !card.doubleNextCard;
    if (shouldEcho) {
      this.echoNextCard = false;
    }

    this._resolveCardEffect(card, actionResult);

    if (shouldEcho && !this.isFinished && this.enemy.hp > 0) {
      this._log(`🌀 [Eco Temporal] A carta "${card.name}" ecoa uma segunda vez sem custo!`);
      this._resolveCardEffect(card, actionResult);
    }

    // Registra que mais uma carta foi jogada neste turno
    this.cardsPlayedThisTurn++;

    // Descarte ou Exaustão
    if (card.exhaust) {
      this.exhaustPile.push(card);
      this._log(`A carta "${card.name}" foi exausta e removida deste combate.`);
    } else {
      this.discardPile.push(card);
    }

    // Verificar se inimigo foi derrotado
    if (this.enemy.hp <= 0) {
      this._handleVictory();
    }

    return actionResult;
  }

  /**
   * Consome uma poção do inventário do herói durante o combate.
   * Não consome energia do jogador.
   * @param {number} slotIndex Índice do slot (0, 1 ou 2)
   * @returns {Object} Resultado da ação
   */
  usePotion(slotIndex) {
    if (this.isFinished) {
      throw new Error('Não é possível usar poções com o combate finalizado.');
    }
    if (this.state !== COMBAT_STATES.HERO_TURN) {
      throw new Error('Você só pode usar poções durante o seu turno.');
    }
    if (!this.hero.potions || !this.hero.potions[slotIndex]) {
      throw new Error(`Slot de poção ${slotIndex} está vazio.`);
    }

    const potion = this.hero.potions[slotIndex];
    if (potion.canUseInCombat === false) {
      throw new Error(`A poção "${potion.name}" não pode ser usada em combate.`);
    }

    const result = potion.execute({
      hero: this.hero,
      enemy: this.enemy,
      combat: this
    });

    if (result.success) {
      this.hero.potions[slotIndex] = null;
      this._log(result.message);

      // Se a poção derrotou o inimigo
      if (this.enemy.hp <= 0) {
        this.enemy.hp = 0;
        this._handleVictory();
      }
    }

    return {
      ...result,
      potion
    };
  }

  /**
   * Finaliza o turno do herói e executa o turno do inimigo.
   */
  endTurn() {
    if (this.isFinished) return;
    if (this.state !== COMBAT_STATES.HERO_TURN) return;

    // Descarta cartas restantes da mão
    while (this.hand.length > 0) {
      this.discardPile.push(this.hand.pop());
    }

    // Decrementa status do herói no fim do seu turno (Vulnerável, Fraco e Veneno)
    tickTurnEndStatuses(this.hero, (msg) => this._log(msg));

    if (this.hero.hp <= 0) {
      this._handleDefeat();
      return;
    }

    // Reseta espinhos temporários concedidos por cartas no turno
    if (this.hero.statuses[STATUS_TYPES.THORNS] > 0) {
      this.hero.statuses[STATUS_TYPES.THORNS] = 0;
    }

    this._executeEnemyTurn();
  }

  /**
   * Executa a ação telegrafada do inimigo.
   */
  _executeEnemyTurn() {
    this.state = COMBAT_STATES.ENEMY_TURN;
    this._log(`--- Turno de ${this.enemy.name} ---`);

    // 1. Processa Queimadura no Inimigo no início de seu turno
    tickTurnStartStatuses(this.enemy, (msg) => this._log(msg));
    if (this.enemy.hp <= 0) {
      this._handleVictory();
      return;
    }

    // Inimigo reseta armadura no início do seu turno
    this.enemy.block = 0;

    const intent = this.enemy.currentIntent;
    if (intent) {
      // 2. Ganho de Armadura
      if (intent.block > 0) {
        this.enemy.block += intent.block;
        this._log(`${this.enemy.name} ganhou ${intent.block} de armadura.`);
      }

      // 3. Quebra de armadura do herói
      if (intent.armorBreak > 0 && this.hero.block > 0) {
        const broken = Math.min(this.hero.block, intent.armorBreak);
        this.hero.block -= broken;
        this._log(`${this.enemy.name} quebrou ${broken} da sua armadura!`);
      }

      // 4. Ataque
      if (intent.damage > 0) {
        const hits = intent.hits || 1;

        // Dispara retaliação de relíquias (ex: Escudo de Espinhos), espinhos temporários ou Manto de Chamas
        if (this.hero.block > 0 || (this.hero.statuses?.[STATUS_TYPES.THORNS] || 0) > 0 || this.flameCloak > 0) {
          triggerRelics('onTakeAttack', this.hero, {
            combat: this,
            attacker: this.enemy,
            log: (msg) => this._log(msg)
          });

          // Espinhos de cartas
          const heroThorns = this.hero.statuses?.[STATUS_TYPES.THORNS] || 0;
          if (heroThorns > 0) {
            this.enemy.hp = Math.max(0, this.enemy.hp - heroThorns);
            this._log(`Seus espinhos retaliaram causando ${heroThorns} de dano a ${this.enemy.name}!`);
          }

          // Manto de Chamas (retaliação ígnea)
          if (this.flameCloak > 0) {
            applyStatus(this.enemy, STATUS_TYPES.BURN, this.flameCloak);
            this._log(`O Manto de Chamas incendiou ${this.enemy.name} com ${this.flameCloak} de Queimadura!`);
          }

          this._checkBossPhaseTransition();

          if (this.enemy.hp <= 0) {
            this._handleVictory();
            return;
          }
        }

        // Executa os hits do ataque do inimigo
        for (let h = 0; h < hits; h++) {
          if (this.hero.hp <= 0) break;

          const rawDamage = calculateModifiedDamage(intent.damage, this.enemy, this.hero);
          const absorbed = Math.min(this.hero.block, rawDamage);
          this.hero.block -= absorbed;
          const pierce = rawDamage - absorbed;
          this.hero.hp = Math.max(0, this.hero.hp - pierce);

          if (absorbed > 0 && pierce > 0) {
            this._log(`${this.enemy.name} atacou! Seu escudo absorveu ${absorbed}, mas você sofreu ${pierce} de dano!`);
          } else if (absorbed > 0) {
            this._log(`Seu escudo absorveu completamente os ${absorbed} de dano do golpe de ${this.enemy.name}!`);
          } else {
            this._log(`${this.enemy.name} desferiu um golpe devastador causando ${pierce} de dano em você!`);
          }

          // Afixo do inimigo: vampiric (Vampírico - cura 50% do dano não bloqueado causado à vida do herói)
          if (pierce > 0 && this.enemy.affix?.id === 'vampiric') {
            const ratio = this.enemy.affix.healRatio || 0.5;
            const healAmount = Math.max(1, Math.floor(pierce * ratio));
            const prevHp = this.enemy.hp;
            this.enemy.hp = Math.min(this.enemy.maxHp, this.enemy.hp + healAmount);
            const actualHealed = this.enemy.hp - prevHp;
            if (actualHealed > 0) {
              this._log(`${this.enemy.name} drenou seu sangue com o afixo [Vampírico] e recuperou ${actualHealed} HP!`);
            }
          }
        }

        // Dreno de vida nativo da intenção (ex: Lich Rei - Drenar Alma)
        if (intent.lifeSteal > 0) {
          const prevHp = this.enemy.hp;
          this.enemy.hp = Math.min(this.enemy.maxHp, this.enemy.hp + intent.lifeSteal);
          const actualHealed = this.enemy.hp - prevHp;
          if (actualHealed > 0) {
            this._log(`${this.enemy.name} drenou sua essência vital e recuperou ${actualHealed} HP!`);
          }
        }
      }

      // 5. Aplicação de Buffs (Força)
      if (intent.buff && intent.buff.strength) {
        applyStatus(this.enemy, STATUS_TYPES.STRENGTH, intent.buff.strength);
        this._log(`${this.enemy.name} fortaleceu seu poder! (+${intent.buff.strength} Força)`);
      }

      // 6. Aplicação de Debuffs no Herói
      if (intent.targetStatus) {
        if (intent.targetStatus[STATUS_TYPES.WEAK]) {
          applyStatus(this.hero, STATUS_TYPES.WEAK, intent.targetStatus[STATUS_TYPES.WEAK]);
          this._log(`${this.enemy.name} aplicou ${intent.targetStatus[STATUS_TYPES.WEAK]} de Fraco em você!`);
        }
        if (intent.targetStatus[STATUS_TYPES.BURN]) {
          applyStatus(this.hero, STATUS_TYPES.BURN, intent.targetStatus[STATUS_TYPES.BURN]);
          this._log(`${this.enemy.name} incendiou você com ${intent.targetStatus[STATUS_TYPES.BURN]} de Queimadura!`);
        }
        if (intent.targetStatus[STATUS_TYPES.VULNERABLE]) {
          applyStatus(this.hero, STATUS_TYPES.VULNERABLE, intent.targetStatus[STATUS_TYPES.VULNERABLE]);
          this._log(`${this.enemy.name} deixou você Vulnerável!`);
        }
        if (intent.targetStatus[STATUS_TYPES.POISON]) {
          applyStatus(this.hero, STATUS_TYPES.POISON, intent.targetStatus[STATUS_TYPES.POISON]);
          this._log(`${this.enemy.name} infectou você com ${intent.targetStatus[STATUS_TYPES.POISON]} de Veneno!`);
        }
      }
    }

    // Verificar se o herói tombou
    if (this.hero.hp <= 0) {
      this._handleDefeat();
      return;
    }

    // Decrementa status do inimigo no fim do seu turno (Vulnerável, Fraco e Veneno)
    const { poisonDamage } = tickTurnEndStatuses(this.enemy, (msg) => this._log(msg));

    // Efeito da Toxina Letal: dano de veneno corrói armadura
    if (poisonDamage > 0 && this.lethalToxinActive && this.enemy.block > 0) {
      const corroded = Math.min(this.enemy.block, 3);
      this.enemy.block -= corroded;
      this._log(`A Toxina Letal corroeu ${corroded} de armadura de ${this.enemy.name}!`);
    }

    this._checkBossPhaseTransition();

    if (this.enemy.hp <= 0) {
      this._handleVictory();
      return;
    }

    // Afixo do inimigo: enraged (Frenético - a cada 2 turnos ganha +1 de Força permanente)
    if (this.enemy.affix?.id === 'enraged') {
      const interval = this.enemy.affix.interval || 2;
      if (this.turnCount % interval === 0) {
        const gain = this.enemy.affix.strengthGain || 1;
        applyStatus(this.enemy, STATUS_TYPES.STRENGTH, gain);
        this._log(`${this.enemy.name} enfurece com o afixo [Frenético] e ganha +${gain} de Força permanente!`);
      }
    }

    // Prepara o próximo turno
    this.turnCount++;
    this.enemy.currentIntent = this.enemy.getIntention(this.turnCount, this.enemy);
    this._log(`${this.enemy.name} prepara: ${this.enemy.currentIntent.name} (${this.enemy.currentIntent.description})`);

    // Inicia o próximo turno do herói
    this._startHeroTurn();
  }

  _handleVictory() {
    this.isFinished = true;
    this.state = COMBAT_STATES.VICTORY;
    this.combatResult = 'victory';

    // Cálculo da recompensa de ouro por tipo de monstro:
    // Boss: 75–100 ouro
    // Elite: 35–50 ouro
    // Inimigo normal: 15–25 ouro
    const enemyType = this.enemy.type || 'normal';
    if (enemyType === 'boss') {
      this.goldReward = 75 + Math.floor(this.rng() * 26);
    } else if (enemyType === 'elite') {
      this.goldReward = 35 + Math.floor(this.rng() * 16);
    } else {
      this.goldReward = 15 + Math.floor(this.rng() * 11);
    }

    this._log(`Vitória gloriosa! Você derrotou ${this.enemy.name}! (+${this.goldReward} ouro)`);

    // Dispara gatilho de fim de combate das relíquias (ex: Cálice de Sangue cura 5 HP)
    triggerRelics('onCombatEnd', this.hero, {
      result: 'victory',
      combat: this,
      log: (msg) => this._log(msg)
    });
  }

  _handleDefeat() {
    this.isFinished = true;
    this.state = COMBAT_STATES.DEFEAT;
    this.combatResult = 'defeat';
    this._log(`Você foi derrotado em combate por ${this.enemy.name}...`);

    triggerRelics('onCombatEnd', this.hero, {
      result: 'defeat',
      combat: this,
      log: (msg) => this._log(msg)
    });
  }

  _shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(this.rng() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  _log(message) {
    this.actionLogs.push({
      turn: this.turnCount,
      state: this.state,
      message,
      timestamp: Date.now()
    });

    if (typeof this.onLogCallback === 'function') {
      this.onLogCallback(message);
    }
  }

  /**
   * Retorna um instantâneo do estado completo do combate para renderização na UI.
   * @returns {Object}
   */
  getStateSnapshot() {
    return {
      state: this.state,
      isFinished: this.isFinished,
      combatResult: this.combatResult,
      goldReward: this.goldReward,
      turnCount: this.turnCount,
      hero: {
        hp: this.hero.hp,
        maxHp: this.hero.maxHp,
        block: this.hero.block,
        energy: this.hero.energy,
        maxEnergy: this.hero.maxEnergy || 3,
        statuses: { ...(this.hero.statuses || {}) },
        relics: (this.hero.relics || []).map(r => ({ id: r.id, name: r.name, icon: r.icon }))
      },
      enemy: {
        id: this.enemy.id,
        name: this.enemy.name,
        type: this.enemy.type,
        affix: this.enemy.affix ? { ...this.enemy.affix } : null,
        hp: this.enemy.hp,
        maxHp: this.enemy.maxHp,
        block: this.enemy.block,
        statuses: { ...(this.enemy.statuses || {}) },
        buffs: { ...(this.enemy.buffs || {}) },
        currentIntent: this.enemy.currentIntent ? { ...this.enemy.currentIntent } : null
      },
      hand: [...this.hand],
      drawPileCount: this.drawPile.length,
      discardPileCount: this.discardPile.length,
      exhaustPileCount: this.exhaustPile.length,
      recentLogs: this.actionLogs.slice(-6)
    };
  }
}
