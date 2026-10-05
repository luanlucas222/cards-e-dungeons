/**
 * js/data/events.js
 * Eventos e lógica dos nós de Santuário / Acampamento e Fogueira em "Cards e Dungeons".
 * Suporta descanso (30% max HP), forja de aprimoramento (+), remoção e duplicação controlada (máx 3 cópias).
 */

import { createCardInstance, getRandomRewardCards, upgradeCardInstance } from './cards.js';

export const CAMPFIRE_ACTIONS = {
  REST: 'rest',
  UPGRADE_CARD: 'upgrade_card'
};

export const SHRINE_ACTIONS = {
  REST: 'rest',
  HEAL: 'heal',
  UPGRADE_CARD: 'upgrade_card',
  REMOVE_CARD: 'remove_card',
  DUPLICATE_CARD: 'duplicate_card',
  ADD_CARD: 'add_card'
};

export const CAMPFIRE_OPTIONS = [
  {
    id: CAMPFIRE_ACTIONS.REST,
    title: 'Descanso Revigorante',
    description: 'Descansa junto à fogueira e recupera 30% da Vida máxima.',
    icon: 'campfire',
    calculateHealAmount: (maxHp) => Math.ceil(maxHp * 0.30)
  },
  {
    id: CAMPFIRE_ACTIONS.UPGRADE_CARD,
    title: 'Forjar & Aprimorar (+)',
    description: 'Aprimore permanentemente uma carta do seu baralho na bigorna da fogueira.',
    icon: 'forge'
  }
];

export const SHRINE_OPTIONS = [
  {
    id: CAMPFIRE_ACTIONS.REST,
    title: 'Descanso Revigorante',
    description: 'Descansa junto à fogueira e recupera 30% da Vida máxima.',
    icon: 'campfire',
    calculateHealAmount: (maxHp) => Math.ceil(maxHp * 0.30)
  },
  {
    id: CAMPFIRE_ACTIONS.UPGRADE_CARD,
    title: 'Forjar & Aprimorar (+)',
    description: 'Aprimore permanentemente uma carta do seu baralho na bigorna da fogueira.',
    icon: 'forge'
  },
  {
    id: SHRINE_ACTIONS.REMOVE_CARD,
    title: 'Purificação do Deck',
    description: 'Medite no altar e remova permanentemente uma carta indesejada do seu baralho.',
    icon: 'purge'
  },
  {
    id: SHRINE_ACTIONS.DUPLICATE_CARD,
    title: 'Espelho de Almas',
    description: 'Duplique uma de suas cartas mais valiosas (máximo de 3 cópias).',
    icon: 'mirror'
  },
  {
    id: SHRINE_ACTIONS.ADD_CARD,
    title: 'Bênção dos Ancestrais',
    description: 'Escolha 1 entre 3 cartas poderosas para adicionar à sua coleção.',
    icon: 'blessing'
  }
];

/**
 * Aplica o descanso junto à fogueira, recuperando porcentagem da Vida máxima (padrão 30%).
 * @param {Object} hero
 * @param {number} [percentage=0.30]
 * @returns {Object} Resultado do efeito
 */
export function executeRest(hero, percentage = 0.30) {
  const healAmount = Math.ceil(hero.maxHp * percentage);
  const previousHp = hero.hp;
  hero.hp = Math.min(hero.maxHp, hero.hp + healAmount);
  const actualHealed = hero.hp - previousHp;

  return {
    action: CAMPFIRE_ACTIONS.REST,
    healed: actualHealed,
    currentHp: hero.hp,
    maxHp: hero.maxHp,
    message: `Você descansou junto à fogueira e recuperou ${actualHealed} pontos de vida!`
  };
}

/**
 * Alias de compatibilidade para cura no santuário/acampamento.
 * @param {Object} hero
 * @param {number} [percentage=0.25]
 * @returns {Object}
 */
export function executeHeal(hero, percentage = 0.25) {
  const res = executeRest(hero, percentage);
  return {
    ...res,
    action: SHRINE_ACTIONS.HEAL
  };
}

/**
 * Aprimora permanentemente uma carta no baralho do herói por UID (+).
 * @param {Array<Object>} deck
 * @param {string} cardUid
 * @returns {Object}
 */
export function executeUpgradeCard(deck, cardUid) {
  const cardIndex = deck.findIndex(c => c.uid === cardUid);
  if (cardIndex === -1) {
    throw new Error(`Carta não encontrada no baralho com uid: "${cardUid}"`);
  }

  const originalCard = deck[cardIndex];
  if (originalCard.isUpgraded) {
    throw new Error(`A carta "${originalCard.name}" já está aprimorada (+).`);
  }

  const upgradedCard = upgradeCardInstance(originalCard);
  Object.assign(originalCard, upgradedCard);
  deck[cardIndex] = originalCard;

  return {
    action: CAMPFIRE_ACTIONS.UPGRADE_CARD,
    originalCard,
    upgradedCard: originalCard,
    message: `A carta "${originalCard.name}" foi aprimorada!`
  };
}

/**
 * Remove uma carta específica do baralho do herói por UID.
 * @param {Array<Object>} deck
 * @param {string} cardUid
 * @returns {Object}
 */
export function executeRemoveCard(deck, cardUid) {
  const cardIndex = deck.findIndex(c => c.uid === cardUid);
  if (cardIndex === -1) {
    throw new Error(`Carta não encontrada no baralho com uid: "${cardUid}"`);
  }

  const [removedCard] = deck.splice(cardIndex, 1);
  return {
    action: SHRINE_ACTIONS.REMOVE_CARD,
    removedCard,
    remainingDeckSize: deck.length,
    message: `A carta "${removedCard.name}" foi purificada e removida do seu deck.`
  };
}

/**
 * Duplica uma carta existente no baralho por UID, respeitando o teto de 3 cópias.
 * Preserva o estado aprimorado (+) se a carta original estiver aprimorada.
 * @param {Array<Object>} deck
 * @param {string} cardUid
 * @param {number} [maxCopies=3]
 * @returns {Object}
 */
export function executeDuplicateCard(deck, cardUid, maxCopies = 3) {
  const originalCard = deck.find(c => c.uid === cardUid);
  if (!originalCard) {
    throw new Error(`Carta não encontrada no baralho com uid: "${cardUid}"`);
  }

  const existingCopies = deck.filter(c => c.id === originalCard.id).length;
  if (maxCopies !== null && existingCopies >= maxCopies) {
    throw new Error(`Limite de ${maxCopies} cópias por carta atingido para "${originalCard.name}".`);
  }

  let duplicatedCard = createCardInstance(originalCard.id);
  if (originalCard.isUpgraded) {
    duplicatedCard = upgradeCardInstance(duplicatedCard);
  }
  deck.push(duplicatedCard);

  return {
    action: SHRINE_ACTIONS.DUPLICATE_CARD,
    originalCard,
    duplicatedCard,
    newDeckSize: deck.length,
    message: `Uma cópia de "${duplicatedCard.name}" foi adicionada ao seu deck.`
  };
}

/**
 * Adiciona uma nova carta ao deck por ID de definição ou objeto de carta.
 * @param {Array<Object>} deck
 * @param {string|Object} cardOrId
 * @returns {Object}
 */
export function executeAddCard(deck, cardOrId) {
  const newCard = typeof cardOrId === 'string'
    ? createCardInstance(cardOrId)
    : cardOrId;

  deck.push(newCard);

  return {
    action: SHRINE_ACTIONS.ADD_CARD,
    addedCard: newCard,
    newDeckSize: deck.length,
    message: `"${newCard.name}" foi adicionada com sucesso ao seu deck.`
  };
}

/**
 * Gera as 3 opções de cartas oferecidas para o evento de Bênção / Recompensa.
 * @param {function} [rng=Math.random]
 * @returns {Array<Object>}
 */
export function generateShrineCardOptions(rng = Math.random) {
  return getRandomRewardCards(3, rng);
}

if (typeof window !== 'undefined') {
  window.CAMPFIRE_ACTIONS = CAMPFIRE_ACTIONS;
  window.CAMPFIRE_OPTIONS = CAMPFIRE_OPTIONS;
  window.SHRINE_ACTIONS = SHRINE_ACTIONS;
  window.SHRINE_OPTIONS = SHRINE_OPTIONS;
  window.executeRest = executeRest;
  window.executeHeal = executeHeal;
  window.executeUpgradeCard = executeUpgradeCard;
  window.executeRemoveCard = executeRemoveCard;
  window.executeDuplicateCard = executeDuplicateCard;
  window.executeAddCard = executeAddCard;
  window.generateShrineCardOptions = generateShrineCardOptions;
}
