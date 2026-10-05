/**
 * js/data/potions.js
 * Catálogo e Sistema de Poções Consumíveis para "Cards e Dungeons".
 * Poções são itens táticos de uso imediato em combate sem consumo de energia.
 */

import { STATUS_TYPES, applyStatus } from './statusEffects.js';

export const POTIONS = {
  potion_health: {
    id: 'potion_health',
    name: 'Elixir da Vitalidade',
    color: '#ef4444',
    rarity: 'common',
    description: 'Restaura imediatamente 15 pontos de Vida.',
    price: 45,
    canUseInCombat: true,
    canUseOutOfCombat: true,
    execute: (context) => {
      const hero = context.hero;
      if (!hero) return { success: false, message: 'Herói não encontrado.' };
      const healAmount = Math.min(15, hero.maxHp - hero.hp);
      hero.hp = Math.min(hero.maxHp, hero.hp + 15);
      return {
        success: true,
        type: 'heal',
        amount: healAmount,
        message: `Você bebeu o Elixir da Vitalidade e recuperou ${healAmount} de Vida!`
      };
    }
  },

  potion_energy: {
    id: 'potion_energy',
    name: 'Poção de Mana Pura',
    color: '#3b82f6',
    rarity: 'uncommon',
    description: 'Concede +2 de Energia instantaneamente no turno atual de combate.',
    price: 60,
    canUseInCombat: true,
    canUseOutOfCombat: false,
    execute: (context) => {
      const hero = context.hero;
      if (!hero) return { success: false, message: 'Herói não encontrado.' };
      hero.energy = (hero.energy || 0) + 2;
      return {
        success: true,
        type: 'energy',
        amount: 2,
        message: 'A Poção de Mana Pura restaura +2 de Energia instantânea!'
      };
    }
  },

  potion_poison: {
    id: 'potion_poison',
    name: 'Frasco de Veneno Noturno',
    color: '#a855f7',
    rarity: 'uncommon',
    description: 'Arremessa uma toxina que aplica 6 de Veneno imediato no inimigo.',
    price: 65,
    canUseInCombat: true,
    canUseOutOfCombat: false,
    execute: (context) => {
      const enemy = context.enemy;
      if (!enemy) return { success: false, message: 'Nenhum inimigo presente para alvejar.' };
      applyStatus(enemy, STATUS_TYPES.POISON, 6);
      return {
        success: true,
        type: 'status',
        statusType: STATUS_TYPES.POISON,
        amount: 6,
        message: `O Veneno Noturno atinge ${enemy.name}, aplicando 6 de Veneno!`
      };
    }
  },

  potion_fire: {
    id: 'potion_fire',
    name: 'Óleo Flamejante Alquímico',
    color: '#f97316',
    rarity: 'common',
    description: 'Frasco volátil que incendeia o alvo com 5 de Queimadura imediata.',
    price: 50,
    canUseInCombat: true,
    canUseOutOfCombat: false,
    execute: (context) => {
      const enemy = context.enemy;
      if (!enemy) return { success: false, message: 'Nenhum inimigo presente para alvejar.' };
      applyStatus(enemy, STATUS_TYPES.BURN, 5);
      return {
        success: true,
        type: 'status',
        statusType: STATUS_TYPES.BURN,
        amount: 5,
        message: `Chamas alquímicas envolvem ${enemy.name} (+5 de Queimadura)!`
      };
    }
  },

  potion_stone: {
    id: 'potion_stone',
    name: 'Elixir de Pele de Pedra',
    color: '#94a3b8',
    rarity: 'common',
    description: 'Endurece a pele como granito, concedendo 14 de Armadura imediata.',
    price: 45,
    canUseInCombat: true,
    canUseOutOfCombat: false,
    execute: (context) => {
      const hero = context.hero;
      if (!hero) return { success: false, message: 'Herói não encontrado.' };
      hero.block = (hero.block || 0) + 14;
      return {
        success: true,
        type: 'block',
        amount: 14,
        message: 'O Elixir de Pele de Pedra reveste seu corpo com 14 de Armadura!'
      };
    }
  },

  potion_strength: {
    id: 'potion_strength',
    name: 'Extrato do Berserker',
    color: '#dc2626',
    rarity: 'rare',
    description: 'Estimulante bárbaro: concede +2 de Força para o restante do combate.',
    price: 80,
    canUseInCombat: true,
    canUseOutOfCombat: false,
    execute: (context) => {
      const hero = context.hero;
      if (!hero) return { success: false, message: 'Herói não encontrado.' };
      applyStatus(hero, STATUS_TYPES.STRENGTH, 2);
      return {
        success: true,
        type: 'status',
        statusType: STATUS_TYPES.STRENGTH,
        amount: 2,
        message: 'Fúria ancestral corre em suas veias (+2 de Força permanente no combate)!'
      };
    }
  }
};

export const ALL_POTION_IDS = Object.keys(POTIONS);
export const MAX_POTION_SLOTS = 3;

/**
 * Retorna uma poção aleatória ponderada para drops ou lojas
 * @param {function} [rng=Math.random]
 * @returns {Object}
 */
export function getRandomPotion(rng = Math.random) {
  const ids = ALL_POTION_IDS;
  const chosenId = ids[Math.floor(rng() * ids.length)];
  return { ...POTIONS[chosenId] };
}

/**
 * Cria uma cópia de poção pronta para inserção em slot
 * @param {string} potionId
 * @returns {Object}
 */
export function createPotionInstance(potionId) {
  const def = POTIONS[potionId];
  if (!def) throw new Error(`Poção inexistente: ${potionId}`);
  return {
    ...def,
    uid: `pot_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`
  };
}

if (typeof window !== 'undefined') {
  window.POTIONS = POTIONS;
  window.getRandomPotion = getRandomPotion;
  window.createPotionInstance = createPotionInstance;
}
