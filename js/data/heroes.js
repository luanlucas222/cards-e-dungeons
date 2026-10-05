/**
 * js/data/heroes.js
 * Catálogo e Definição das Classes de Heróis de "Cards e Dungeons".
 * Define os arquétipos selecionáveis, decks iniciais, vida, energia e relíquias nativas.
 */

export const HERO_CLASSES = {
  WARRIOR: {
    id: 'warrior',
    name: 'Guerreiro Rúnico',
    subtitle: 'Mestre em Força & Armadura',
    icon: 'hero',
    badge: '⚔️ Guerreiro',
    sprite: 'assets/sprites/hero.jpg',
    maxHp: 70,
    energy: 3,
    startingRelicId: 'amulet_strength',
    description: 'Especialista em combate corporal direto, desferindo golpes pesados e erguendo defesas inquebráveis.',
    deckSummary: '4x Murro, 2x Chute, 2x Espada, 4x Escudo de Madeira',
    initialDeckCards: [
      'murro', 'murro', 'murro', 'murro',
      'chute', 'chute',
      'espada', 'espada',
      'escudo_madeira', 'escudo_madeira', 'escudo_madeira', 'escudo_madeira'
    ]
  },

  ROGUE: {
    id: 'rogue',
    name: 'Ladina das Sombras',
    subtitle: 'Mestra em Agilidade & Veneno',
    icon: 'rogue',
    badge: '🗡️ Ladina',
    sprite: 'assets/sprites/goblin.jpg',
    maxHp: 58,
    energy: 3,
    startingRelicId: 'poison_vial',
    description: 'Ataques relâmpago com adagas duplas e toxinas letais que corroem a vida do inimigo ignorando escudos.',
    deckSummary: '4x Adaga Rápida, 2x Golpe Envenenado, 2x Passo Sombrio, 4x Esquiva Ágil',
    initialDeckCards: [
      'adaga_rapida', 'adaga_rapida', 'adaga_rapida', 'adaga_rapida',
      'golpe_envenenado', 'golpe_envenenado',
      'passo_sombrio', 'passo_sombrio',
      'esquiva_agil', 'esquiva_agil', 'esquiva_agil', 'esquiva_agil'
    ]
  },

  MAGE: {
    id: 'mage',
    name: 'Mago Elemental',
    subtitle: 'Mestre em Feitiços Cósmicos & Mana',
    icon: 'mage',
    badge: '🔮 Mago',
    sprite: 'assets/sprites/mage.jpg',
    maxHp: 52,
    energy: 4,
    startingRelicId: 'ancient_orb',
    description: 'Portador de 4 pontos de energia por turno, canalizando rajadas de fogo e gelo com compras aceleradas de cartas.',
    deckSummary: '3x Centelha de Fogo, 2x Raio Gélido, 2x Barreira de Mana, 3x Meditação Arcana, 2x Rajada Arcana',
    initialDeckCards: [
      'centelha_de_fogo', 'centelha_de_fogo', 'centelha_de_fogo',
      'raio_gelido', 'raio_gelido',
      'barreira_de_mana', 'barreira_de_mana',
      'meditacao_arcana', 'meditacao_arcana', 'meditacao_arcana',
      'rajada_arcana', 'rajada_arcana'
    ]
  }
};

export const DEFAULT_HERO_CLASS_ID = 'warrior';

/**
 * Obtém a definição de uma classe por id com fallback seguro.
 * @param {string} classId
 * @returns {Object}
 */
export function getHeroClass(classId) {
  const normalized = (classId || '').toUpperCase();
  return HERO_CLASSES[normalized] || HERO_CLASSES.WARRIOR;
}
