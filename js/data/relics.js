/**
 * js/data/relics.js
 * Sistema de Relíquias e Artefatos Passivos de "Cards e Dungeons".
 */

import { applyStatus, STATUS_TYPES } from './statusEffects.js';

export const RELICS = {
  amulet_strength: {
    id: 'amulet_strength',
    name: 'Amuleto da Força',
    rarity: 'rare',
    icon: 'strength_amulet',
    description: 'Inicia todos os combates com +2 de Força concedidos pelo poder primordial do amuleto.',
    onCombatStart: (context) => {
      applyStatus(context.hero, STATUS_TYPES.STRENGTH, 2);
      context.log?.('O Amuleto da Força ressoa, concedendo +2 de Força!');
    }
  },

  blood_chalice: {
    id: 'blood_chalice',
    name: 'Cálice de Sangue',
    rarity: 'rare',
    icon: 'blood_chalice',
    description: 'Recupera 5 pontos de Vida ao triunfar sobre qualquer oponente no calabouço.',
    onCombatEnd: (context) => {
      if (context.result === 'victory') {
        const prevHp = context.hero.hp;
        context.hero.hp = Math.min(context.hero.maxHp, context.hero.hp + 5);
        const healed = context.hero.hp - prevHp;
        if (healed > 0) {
          context.log?.(`O Cálice de Sangue saciou sua sede de vitória, restaurando ${healed} de HP!`);
        }
      }
    }
  },

  spike_shield: {
    id: 'spike_shield',
    name: 'Escudo de Espinhos',
    rarity: 'uncommon',
    icon: 'spike_shield',
    description: 'Enquanto o herói possuir armadura ativa, qualquer ataque inimigo sofre 4 de dano de retaliação imediata.',
    onTakeAttack: (context) => {
      // Dispara se o herói tiver armadura ativa antes ou durante o impacto
      if (context.hero.block > 0 && context.attacker) {
        const retaliation = 4;
        context.attacker.hp = Math.max(0, context.attacker.hp - retaliation);
        context.log?.(`Os espinhos do seu escudo retaliaram o golpe causando ${retaliation} de dano direto a ${context.attacker.name}!`);
        return retaliation;
      }
      return 0;
    }
  },

  ancient_orb: {
    id: 'ancient_orb',
    name: 'Orbe de Mana Ancião',
    rarity: 'rare',
    icon: 'ancient_orb',
    description: 'Canaliza mana primordial, concedendo +1 de energia extra no 1º turno de cada combate (totalizando 4).',
    onCombatStart: (context) => {
      context.hero.energy += 1;
      context.log?.('O Orbe Ancião pulsa com energia arcana (+1 de energia no 1º turno)!');
    }
  },

  poison_vial: {
    id: 'poison_vial',
    name: 'Frasco Peçonhento',
    rarity: 'rare',
    icon: 'poison_vial',
    description: 'No início de cada combate, quebra um frasco nos pés do oponente, aplicando 3 de Veneno inicial.',
    onCombatStart: (context) => {
      if (context.enemy) {
        applyStatus(context.enemy, STATUS_TYPES.POISON, 3);
        context.log?.('O Frasco Peçonhento exala vapores tóxicos (+3 de Veneno no inimigo)!');
      }
    }
  },

  fortune_bag: {
    id: 'fortune_bag',
    name: 'Bolsa da Fortuna',
    rarity: 'uncommon',
    icon: 'fortune_bag',
    description: 'Bolsa mágica de veludo encantada por gnomos: concede +25 de ouro adicional ao vencer qualquer batalha.',
    onCombatEnd: (context) => {
      if (context.result === 'victory' && context.hero) {
        context.hero.gold = (context.hero.gold || 0) + 25;
        context.log?.('A Bolsa da Fortuna transborda (+25 ouro extra da vitória)!');
      }
    }
  },

  ether_cloak: {
    id: 'ether_cloak',
    name: 'Manto de Éter',
    rarity: 'rare',
    icon: 'ether_cloak',
    description: 'Tecido com fibras fantasmagóricas protetoras: inicia todos os combates com 5 de Armadura instantânea.',
    onCombatStart: (context) => {
      if (context.hero) {
        context.hero.block = (context.hero.block || 0) + 5;
        context.log?.('O Manto de Éter se solidifica concedendo 5 de armadura inicial!');
      }
    }
  },

  whetstone: {
    id: 'whetstone',
    name: 'Pedra de Amolar Rúnica',
    rarity: 'uncommon',
    icon: 'whetstone',
    description: 'Inscrições anãs afiam seu aço: concede +1 de Força passiva no início de cada combate.',
    onCombatStart: (context) => {
      if (context.hero) {
        applyStatus(context.hero, STATUS_TYPES.STRENGTH, 1);
        context.log?.('A Pedra de Amolar Rúnica potencializa seus golpes (+1 de Força)!');
      }
    }
  }
};

export const ALL_RELIC_IDS = Object.keys(RELICS);

/**
 * Adiciona uma relíquia ao inventário passivo do herói.
 * @param {Object} hero
 * @param {string} relicId
 * @returns {Object} A relíquia adicionada
 */
export function addRelicToHero(hero, relicId) {
  if (!hero.relics) {
    hero.relics = [];
  }
  const relicDef = RELICS[relicId];
  if (!relicDef) {
    throw new Error(`Relíquia não encontrada com id: "${relicId}"`);
  }

  // Evita duplicatas se já possuir
  if (!hero.relics.some(r => r.id === relicId)) {
    hero.relics.push({ ...relicDef });
  }

  return relicDef;
}

/**
 * Verifica se o herói possui uma determinada relíquia.
 * @param {Object} hero
 * @param {string} relicId
 * @returns {boolean}
 */
export function hasRelic(hero, relicId) {
  if (!hero || !hero.relics) return false;
  return hero.relics.some(r => r.id === relicId);
}

/**
 * Dispara os gatilhos passivos das relíquias equipadas.
 * @param {string} triggerName 'onCombatStart' | 'onCombatEnd' | 'onTakeAttack'
 * @param {Object} hero
 * @param {Object} context Contexto adicional (combat, attacker, result, log)
 */
export function triggerRelics(triggerName, hero, context = {}) {
  if (!hero || !hero.relics || hero.relics.length === 0) return;

  const fullContext = {
    hero,
    ...context
  };

  for (const relic of hero.relics) {
    const handler = RELICS[relic.id]?.[triggerName];
    if (typeof handler === 'function') {
      handler(fullContext);
    }
  }
}

/**
 * Retorna uma relíquia aleatória para recompensas de nós de Elite ou Baús.
 * @param {Array<string>} excludeIds
 * @param {function} [rng=Math.random]
 * @returns {Object|null}
 */
export function getRandomRelic(excludeIds = [], rng = Math.random) {
  const available = ALL_RELIC_IDS.filter(id => !excludeIds.includes(id));
  if (available.length === 0) return null;
  const idx = Math.floor(rng() * available.length);
  return { ...RELICS[available[idx]] };
}
