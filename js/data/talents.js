/**
 * js/data/talents.js
 * Sistema de Meta-Progressão Permanente & Árvore de Talentos Ancestrais.
 * Permite coletar Essências de Almas ao derrotar inimigos e chefes para
 * desbloquear bônus passivos permanentes que perduram entre partidas.
 */

export const TALENT_STORAGE_KEY = 'cards_dungeons_meta_progression_v1';

// Armazenamento em memória seguro para fallback em Node.js e testes
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

/**
 * Definições dos Talentos da Árvore de Meta-Progressão
 */
export const TALENT_DEFINITIONS = {
  vitality: {
    id: 'vitality',
    name: 'Vitalidade Ancestral',
    icon: '❤️',
    maxLevel: 5,
    costs: [10, 20, 35, 55, 80],
    bonusPerLevel: 5,
    unit: 'HP',
    description: 'Aumenta sua Vida Máxima inicial em +5 por nível permanente.',
    getBonusText: (lvl) => `+${lvl * 5} Vida Máxima inicial`
  },
  greed: {
    id: 'greed',
    name: 'Avareza dos Abismos',
    icon: '🪙',
    maxLevel: 5,
    costs: [10, 20, 35, 50, 70],
    bonusPerLevel: 1,
    unit: 'Ouro',
    description: 'Ganha +1 de Ouro adicional após cada combate vencido.',
    getBonusText: (lvl) => `+${lvl * 1} Ouro por vitória em combate`
  },
  wisdom: {
    id: 'wisdom',
    name: 'Mente Expandida',
    icon: '🃏',
    maxLevel: 2,
    costs: [25, 60],
    bonusPerLevel: 1,
    unit: 'Cartas',
    description: 'Compra +1 carta adicional no primeiro turno de cada combate.',
    getBonusText: (lvl) => `+${lvl * 1} carta(s) na mão inicial (Turno 1)`
  },
  ironclad: {
    id: 'ironclad',
    name: 'Bastião de Ferro',
    icon: '🛡️',
    maxLevel: 3,
    costs: [15, 30, 50],
    bonusPerLevel: 3,
    unit: 'Armadura',
    description: 'Inicia cada combate com +3 de Armadura protetora.',
    getBonusText: (lvl) => `+${lvl * 3} de Armadura inicial no combate`
  }
};

/**
 * Retorna o estado atual da meta-progressão salva.
 * @returns {{ souls: number, totalSoulsEarned: number, talents: Object }}
 */
export function getMetaProgression() {
  const raw = _getStorageItem(TALENT_STORAGE_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      return {
        souls: typeof parsed.souls === 'number' ? parsed.souls : 0,
        totalSoulsEarned: typeof parsed.totalSoulsEarned === 'number' ? parsed.totalSoulsEarned : (parsed.souls || 0),
        talents: {
          vitality: parsed.talents?.vitality || 0,
          greed: parsed.talents?.greed || 0,
          wisdom: parsed.talents?.wisdom || 0,
          ironclad: parsed.talents?.ironclad || 0,
          ...parsed.talents
        }
      };
    } catch (e) {
      // JSON corrompido, retorna padrão
    }
  }

  return {
    souls: 0,
    totalSoulsEarned: 0,
    talents: {
      vitality: 0,
      greed: 0,
      wisdom: 0,
      ironclad: 0
    }
  };
}

/**
 * Salva os dados de meta-progressão no storage.
 * @param {Object} meta
 */
export function saveMetaProgression(meta) {
  _setStorageItem(TALENT_STORAGE_KEY, JSON.stringify(meta));
}

/**
 * Adiciona Essências de Almas ganhas nas batalhas ou ao fim de uma jornada.
 * @param {number} amount
 * @returns {number} Novo total de almas disponíveis
 */
export function addSouls(amount) {
  if (amount <= 0) return getMetaProgression().souls;
  const meta = getMetaProgression();
  meta.souls = (meta.souls || 0) + amount;
  meta.totalSoulsEarned = (meta.totalSoulsEarned || 0) + amount;
  saveMetaProgression(meta);
  return meta.souls;
}

/**
 * Aprimora um talento em 1 nível gastando Essências de Almas.
 * @param {string} talentId
 * @returns {{ success: boolean, message: string, newLevel?: number, remainingSouls?: number }}
 */
export function upgradeTalent(talentId) {
  const def = TALENT_DEFINITIONS[talentId];
  if (!def) {
    return { success: false, message: `Talento desconhecido: ${talentId}` };
  }

  const meta = getMetaProgression();
  const currentLevel = meta.talents[talentId] || 0;

  if (currentLevel >= def.maxLevel) {
    return { success: false, message: `Talento [${def.name}] já atingiu o nível máximo (${def.maxLevel})!` };
  }

  const cost = def.costs[currentLevel];
  if (meta.souls < cost) {
    return {
      success: false,
      message: `Almas insuficientes! Requer 🔮 ${cost} Essências de Almas (você tem 🔮 ${meta.souls}).`
    };
  }

  meta.souls -= cost;
  meta.talents[talentId] = currentLevel + 1;
  saveMetaProgression(meta);

  return {
    success: true,
    message: `Talento [${def.name}] aprimorado para Nível ${meta.talents[talentId]}!`,
    newLevel: meta.talents[talentId],
    remainingSouls: meta.souls
  };
}

/**
 * Redefine todos os talentos comprados e reembolsa 100% das Essências de Almas investidas.
 * @returns {{ refundedSouls: number, totalSouls: number }}
 */
export function resetTalents() {
  const meta = getMetaProgression();
  let refunded = 0;

  for (const [id, def] of Object.entries(TALENT_DEFINITIONS)) {
    const lvl = meta.talents[id] || 0;
    for (let i = 0; i < lvl; i++) {
      refunded += def.costs[i] || 0;
    }
    meta.talents[id] = 0;
  }

  meta.souls = (meta.souls || 0) + refunded;
  saveMetaProgression(meta);

  return {
    refundedSouls: refunded,
    totalSouls: meta.souls
  };
}

/**
 * Calcula todos os bônus numéricos concedidos pelos talentos atuais.
 * @returns {{ maxHpBonus: number, goldBonus: number, initialCardsBonus: number, startingBlockBonus: number }}
 */
export function getTalentBonuses() {
  const meta = getMetaProgression();
  const talents = meta.talents;

  const vitLvl = talents.vitality || 0;
  const greedLvl = talents.greed || 0;
  const wisLvl = talents.wisdom || 0;
  const ironLvl = talents.ironclad || 0;

  return {
    maxHpBonus: vitLvl * TALENT_DEFINITIONS.vitality.bonusPerLevel,
    goldBonus: greedLvl * TALENT_DEFINITIONS.greed.bonusPerLevel,
    initialCardsBonus: wisLvl * TALENT_DEFINITIONS.wisdom.bonusPerLevel,
    startingBlockBonus: ironLvl * TALENT_DEFINITIONS.ironclad.bonusPerLevel
  };
}

/**
 * Aplica os bônus da árvore de talentos ao objeto herói no início de uma nova jornada.
 * @param {Object} hero
 */
export function applyTalentBonusesToHero(hero) {
  if (!hero) return;
  const bonuses = getTalentBonuses();

  // Bônus de Vida Máxima inicial
  if (bonuses.maxHpBonus > 0) {
    hero.maxHp = (hero.maxHp || 70) + bonuses.maxHpBonus;
    hero.hp = hero.maxHp;
  }

  // Registra bônus passivos para uso no combate
  hero.talentGoldBonus = bonuses.goldBonus || 0;
  hero.talentInitialCards = bonuses.initialCardsBonus || 0;
  hero.talentStartingBlock = bonuses.startingBlockBonus || 0;
  hero.talentBonuses = bonuses;
}

/**
 * Calcula a quantidade de Essências de Almas concedidas pela vitória contra um inimigo.
 * @param {string} enemyType 'normal' | 'elite' | 'boss'
 * @returns {number}
 */
export function calculateSoulsReward(enemyType = 'normal') {
  if (enemyType === 'boss') return 15;
  if (enemyType === 'elite') return 5;
  return 2;
}
