/**
 * js/data/merchant.js
 * Catálogo e Gerenciador de Estoque do Mercador Renegado para "Cards e Dungeons".
 * Suporta compra de cartas graduadas por raridade, relíquias e serviço de purificação/remoção de deck.
 */

import { CARDS, getRandomRewardCards } from './cards.js';
import { RELICS } from './relics.js';

export const MERCHANT_CONFIG = {
  CARDS_FOR_SALE_COUNT: 4,
  RELICS_FOR_SALE_COUNT: 2,
  BASE_REMOVAL_COST: 75,
  CARD_PRICES: {
    starter: 35,
    common: 45,
    uncommon: 75,
    rare: 120,
    legendary: 175
  },
  DEFAULT_CARD_PRICE: 60,
  REMOVAL_SERVICE_COST: 75,
  MERCHANT_RELIC_PRICES: {
    common: 100,
    uncommon: 140,
    rare: 180,
    legendary: 240
  },
  DEFAULT_RELIC_PRICE: 140,
  QUOTES: [
    'Moedas bem gastas compram mais uma respirada nestas catacumbas...',
    'Tome cuidado com o Dragão lá embaixo. Meu antigo sócio tentou enfrentá-lo...',
    'Apenas produtos da mais nobre forja e da mais pura magia sombria.',
    'Se não tem moedas suficientes, mantenha as mãos longe dos meus artefatos!',
    'Queime o que não presta. Um baralho enxuto é a diferença entre a glória e a cova.'
  ],
  PURCHASE_QUOTES: [
    'Excelente aquisição, aventureiro!',
    'Que este poder sirva bem à sua jornada.',
    'Trato selado. Suas moedas são muito bem-vindas nas trevas.'
  ]
};

/**
 * Retorna uma fala aleatória do mercador
 * @param {function} [rng=Math.random]
 * @returns {string}
 */
export function getRandomMerchantQuote(rng = Math.random) {
  const quotes = MERCHANT_CONFIG.QUOTES;
  return quotes[Math.floor(rng() * quotes.length)];
}

/**
 * Retorna uma fala de agradecimento ao realizar uma compra
 * @param {function} [rng=Math.random]
 * @returns {string}
 */
export function getRandomPurchaseQuote(rng = Math.random) {
  const quotes = MERCHANT_CONFIG.PURCHASE_QUOTES;
  return quotes[Math.floor(rng() * quotes.length)];
}

/**
 * Retorna o preço em moedas de uma carta com base em sua raridade
 * @param {Object} cardDef
 * @returns {number}
 */
export function getCardPrice(cardDef) {
  if (!cardDef) return MERCHANT_CONFIG.DEFAULT_CARD_PRICE;
  return MERCHANT_CONFIG.CARD_PRICES[cardDef.rarity] || MERCHANT_CONFIG.DEFAULT_CARD_PRICE;
}

/**
 * Retorna o preço em moedas de uma relíquia com base em sua raridade
 * @param {Object} relicDef
 * @returns {number}
 */
export function getRelicPrice(relicDef) {
  if (!relicDef) return MERCHANT_CONFIG.DEFAULT_RELIC_PRICE;
  return MERCHANT_CONFIG.MERCHANT_RELIC_PRICES[relicDef.rarity] || MERCHANT_CONFIG.DEFAULT_RELIC_PRICE;
}

/**
 * Gera um inventário balanceado e dinâmico para a loja do mercador.
 * @param {Object} [options={}]
 * @param {string} [options.heroClassId='warrior']
 * @param {Array<string>} [options.existingRelicIds=[]]
 * @param {function} [options.rng=Math.random]
 * @returns {Object}
 */
export function generateMerchantInventory({ heroClassId = 'warrior', existingRelicIds = [], rng = Math.random } = {}) {
  // 1. Gera cartas distintas para venda
  const cardPool = getRandomRewardCards(MERCHANT_CONFIG.CARDS_FOR_SALE_COUNT, rng);
  const cards = cardPool.map(cardDef => ({
    id: cardDef.id,
    name: cardDef.name,
    rarity: cardDef.rarity,
    type: cardDef.type,
    cost: cardDef.cost,
    description: cardDef.description,
    price: getCardPrice(cardDef),
    bought: false
  }));

  // 2. Seleciona relíquias não possuídas pelo herói
  const allRelicIds = Object.keys(RELICS);
  const availableRelicIds = allRelicIds.filter(id => !existingRelicIds.includes(id));

  // Embaralha relíquias disponíveis
  const shuffledRelics = [...availableRelicIds].sort(() => rng() - 0.5);
  const selectedRelicIds = shuffledRelics.slice(0, MERCHANT_CONFIG.RELICS_FOR_SALE_COUNT);

  const relics = selectedRelicIds.map(relicId => {
    const r = RELICS[relicId];
    return {
      id: r.id,
      name: r.name,
      rarity: r.rarity,
      description: r.description,
      icon: r.icon,
      price: getRelicPrice(r),
      bought: false
    };
  });

  return {
    cards,
    relics,
    removalCost: MERCHANT_CONFIG.BASE_REMOVAL_COST,
    removalUsed: false,
    quote: getRandomMerchantQuote(rng)
  };
}

if (typeof window !== 'undefined') {
  window.generateMerchantInventory = generateMerchantInventory;
}
