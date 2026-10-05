/**
 * js/data/statusEffects.js
 * Sistema de Buffs, Debuffs e Modificadores de Combate de "Cards e Dungeons".
 */

export const STATUS_TYPES = {
  STRENGTH: 'strength',
  VULNERABLE: 'vulnerable',
  WEAK: 'weak',
  BURN: 'burn',
  THORNS: 'thorns',
  POISON: 'poison'
};

export const STATUS_DEFINITIONS = {
  [STATUS_TYPES.STRENGTH]: {
    id: STATUS_TYPES.STRENGTH,
    name: 'Força',
    isBuff: true,
    description: 'Aumenta o dano de cada ataque em X pontos durante todo o combate.',
    icon: 'muscle'
  },
  [STATUS_TYPES.VULNERABLE]: {
    id: STATUS_TYPES.VULNERABLE,
    name: 'Vulnerável',
    isBuff: false,
    description: 'Recebe 50% a mais de dano de ataques físicos.',
    icon: 'broken_shield'
  },
  [STATUS_TYPES.WEAK]: {
    id: STATUS_TYPES.WEAK,
    name: 'Fraco',
    isBuff: false,
    description: 'Causa 25% a menos de dano em todos os ataques.',
    icon: 'broken_sword'
  },
  [STATUS_TYPES.BURN]: {
    id: STATUS_TYPES.BURN,
    name: 'Queimadura',
    isBuff: false,
    description: 'Sofre dano de fogo no início do turno igual ao valor atual, reduzindo em 1.',
    icon: 'flame'
  },
  [STATUS_TYPES.THORNS]: {
    id: STATUS_TYPES.THORNS,
    name: 'Espinhos / Retaliação',
    isBuff: true,
    description: 'Causa dano direto de retorno a qualquer inimigo que atacar.',
    icon: 'spikes'
  },
  [STATUS_TYPES.POISON]: {
    id: STATUS_TYPES.POISON,
    name: 'Veneno',
    isBuff: false,
    description: 'Sofre dano letal direto à Vida no fim do turno (ignora armadura), reduzindo em 1.',
    icon: 'poison'
  }
};

/**
 * Cria o mapa inicial de status zerados para uma entidade.
 * @returns {Object}
 */
export function createDefaultStatusMap() {
  return {
    [STATUS_TYPES.STRENGTH]: 0,
    [STATUS_TYPES.VULNERABLE]: 0,
    [STATUS_TYPES.WEAK]: 0,
    [STATUS_TYPES.BURN]: 0,
    [STATUS_TYPES.THORNS]: 0,
    [STATUS_TYPES.POISON]: 0
  };
}

/**
 * Aplica um status a uma entidade (herói ou inimigo).
 * @param {Object} entity
 * @param {string} statusKey
 * @param {number} amount
 */
export function applyStatus(entity, statusKey, amount) {
  if (!entity.statuses) {
    entity.statuses = createDefaultStatusMap();
  }
  entity.statuses[statusKey] = (entity.statuses[statusKey] || 0) + amount;
  return entity.statuses[statusKey];
}

/**
 * Calcula o dano final de um golpe considerando Força, Fraco e Vulnerável.
 * @param {number} baseDamage Dano base do ataque
 * @param {Object} attacker Entidade atacante
 * @param {Object} defender Entidade defensora
 * @returns {number} Dano final inteiro
 */
export function calculateModifiedDamage(baseDamage, attacker, defender) {
  if (baseDamage <= 0) return 0;

  let damage = baseDamage;

  // 1. Modificador de Força do atacante
  const attackerStrength = attacker?.statuses?.[STATUS_TYPES.STRENGTH] || 0;
  damage += attackerStrength;

  // 2. Modificador de Fraco do atacante (-25% de dano)
  const isAttackerWeak = (attacker?.statuses?.[STATUS_TYPES.WEAK] || 0) > 0;
  if (isAttackerWeak) {
    damage = Math.floor(damage * 0.75);
  }

  // 3. Modificador de Vulnerável do defensor (+50% de dano sofrido)
  const isDefenderVulnerable = (defender?.statuses?.[STATUS_TYPES.VULNERABLE] || 0) > 0;
  if (isDefenderVulnerable) {
    damage = Math.floor(damage * 1.5);
  }

  return Math.max(1, damage);
}

/**
 * Processa status no início do turno da entidade (ex: Queimadura).
 * @param {Object} entity
 * @param {function} [logFn]
 * @returns {Object} { burnDamage }
 */
export function tickTurnStartStatuses(entity, logFn = null) {
  if (!entity.statuses) return { burnDamage: 0 };

  let burnDamage = 0;
  if (entity.statuses[STATUS_TYPES.BURN] > 0) {
    burnDamage = entity.statuses[STATUS_TYPES.BURN];
    entity.hp = Math.max(0, entity.hp - burnDamage);
    entity.statuses[STATUS_TYPES.BURN] = Math.max(0, entity.statuses[STATUS_TYPES.BURN] - 1);

    if (logFn) {
      logFn(`${entity.name || 'Alvo'} sofreu ${burnDamage} de dano de Queimadura! (Restante: ${entity.statuses[STATUS_TYPES.BURN]})`);
    }
  }

  return { burnDamage };
}

/**
 * Processa status no fim do turno da entidade (decrementa Vulnerável, Fraco e aplica Veneno).
 * @param {Object} entity
 * @param {function} [logFn]
 * @returns {Object} { poisonDamage }
 */
export function tickTurnEndStatuses(entity, logFn = null) {
  if (!entity.statuses) return { poisonDamage: 0 };

  let poisonDamage = 0;
  if (entity.statuses[STATUS_TYPES.POISON] > 0) {
    poisonDamage = entity.statuses[STATUS_TYPES.POISON];
    entity.hp = Math.max(0, entity.hp - poisonDamage);
    entity.statuses[STATUS_TYPES.POISON] = Math.max(0, entity.statuses[STATUS_TYPES.POISON] - 1);
    if (logFn) {
      logFn(`${entity.name || 'Alvo'} sofreu ${poisonDamage} de dano letal de Veneno! (Restante: ${entity.statuses[STATUS_TYPES.POISON]})`);
    }
  }

  if (entity.statuses[STATUS_TYPES.VULNERABLE] > 0) {
    entity.statuses[STATUS_TYPES.VULNERABLE] -= 1;
    if (logFn && entity.statuses[STATUS_TYPES.VULNERABLE] === 0) {
      logFn(`${entity.name || 'Alvo'} não está mais Vulnerável.`);
    }
  }

  if (entity.statuses[STATUS_TYPES.WEAK] > 0) {
    entity.statuses[STATUS_TYPES.WEAK] -= 1;
    if (logFn && entity.statuses[STATUS_TYPES.WEAK] === 0) {
      logFn(`${entity.name || 'Alvo'} recuperou sua força normal (não está mais Fraco).`);
    }
  }

  return { poisonDamage };
}
