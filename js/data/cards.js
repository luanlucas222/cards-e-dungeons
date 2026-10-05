/**
 * js/data/cards.js
 * Catálogo expandido de 18 cartas únicas de "Cards e Dungeons",
 * incluindo raridades, efeitos de status (Queimadura, Vulnerável, Fraco, Espinhos) e utilitários.
 */

let _instanceCounter = 1;

/**
 * Catálogo completo com 18 cartas únicas.
 */
export const CARDS = {
  // ==========================================
  // --- CARTAS INICIAIS (Starter) ---
  // ==========================================
  murro: {
    id: 'murro',
    name: 'Murro',
    cost: 1,
    type: 'attack',
    damage: 6,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'starter',
    description: 'Causa 6 de dano físico.',
    icon: 'fist'
  },
  chute: {
    id: 'chute',
    name: 'Chute',
    cost: 1,
    type: 'attack',
    damage: 8,
    hits: 1,
    block: 0,
    armorBreak: 2,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'starter',
    description: 'Quebra 2 de armadura e causa 8 de dano.',
    icon: 'boot'
  },
  espada: {
    id: 'espada',
    name: 'Espada',
    cost: 2,
    type: 'attack',
    damage: 14,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'starter',
    description: 'Causa 14 de dano pesado.',
    icon: 'sword'
  },
  escudo_madeira: {
    id: 'escudo_madeira',
    name: 'Escudo de Madeira',
    cost: 1,
    type: 'defense',
    damage: 0,
    hits: 0,
    block: 6,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'starter',
    description: 'Ganha 6 de armadura neste turno.',
    icon: 'wood_shield'
  },

  // ==========================================
  // --- CARTAS COMUNS (Common) ---
  // ==========================================
  estocada_precisa: {
    id: 'estocada_precisa',
    name: 'Estocada Precisa',
    cost: 1,
    type: 'attack',
    damage: 10,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'common',
    description: 'Causa 10 de dano físico certeiro.',
    icon: 'thrust'
  },
  golpe_flamejante: {
    id: 'golpe_flamejante',
    name: 'Golpe Flamejante',
    cost: 1,
    type: 'attack',
    damage: 7,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 3,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'common',
    description: 'Causa 7 de dano e aplica 3 de Queimadura no alvo.',
    icon: 'flame_strike'
  },
  grito_intimidador: {
    id: 'grito_intimidador',
    name: 'Grito Intimidador',
    cost: 1,
    type: 'skill',
    damage: 0,
    hits: 0,
    block: 5,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 0,
    weak: 2,
    thorns: 0,
    exhaust: false,
    rarity: 'common',
    description: 'Ganha 5 de armadura e enfraquece o inimigo (aplica 2 Fraco).',
    icon: 'shout'
  },

  // ==========================================
  // --- CARTAS INCOMUNS (Uncommon) ---
  // ==========================================
  golpe_duplo: {
    id: 'golpe_duplo',
    name: 'Golpe Duplo',
    cost: 1,
    type: 'attack',
    damage: 5,
    hits: 2,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Desfere 2 golpes de 5 de dano (10 total).',
    icon: 'double_strike'
  },
  muralha_ferro: {
    id: 'muralha_ferro',
    name: 'Muralha de Ferro',
    cost: 2,
    type: 'defense',
    damage: 0,
    hits: 0,
    block: 14,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Ganha 14 de armadura fortificada.',
    icon: 'iron_wall'
  },
  pancada_atordoante: {
    id: 'pancada_atordoante',
    name: 'Pancada Atordoante',
    cost: 2,
    type: 'attack',
    damage: 12,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 2,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Causa 12 de dano pesado e aplica 2 de Vulnerável.',
    icon: 'stun_smash'
  },
  postura_espinhos: {
    id: 'postura_espinhos',
    name: 'Postura de Espinhos',
    cost: 1,
    type: 'skill',
    damage: 0,
    hits: 0,
    block: 8,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 3,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Ganha 8 de armadura e 3 de Retaliação por espinhos.',
    icon: 'spiky_shield'
  },
  danca_laminas: {
    id: 'danca_laminas',
    name: 'Dança das Lâminas',
    cost: 1,
    type: 'attack',
    damage: 4,
    hits: 3,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Desfere 3 golpes rápidos de 4 de dano (12 total).',
    icon: 'blade_dance'
  },

  // ==========================================
  // --- CARTAS RARAS (Rare) ---
  // ==========================================
  furia_berserker: {
    id: 'furia_berserker',
    name: 'Fúria Berserker',
    cost: 0,
    type: 'skill',
    damage: 0,
    hits: 0,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 2,
    hpCost: 3,
    burn: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'rare',
    description: 'Ganha 2 de energia ao custo de 3 de Vida.',
    icon: 'berserk'
  },
  cura_espiritual: {
    id: 'cura_espiritual',
    name: 'Cura Espiritual',
    cost: 1,
    type: 'skill',
    damage: 0,
    hits: 0,
    block: 0,
    armorBreak: 0,
    heal: 8,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: true,
    rarity: 'rare',
    description: 'Cura 8 de Vida. Exausta.',
    icon: 'heal'
  },
  corte_vorpal: {
    id: 'corte_vorpal',
    name: 'Corte Vorpal',
    cost: 3,
    type: 'attack',
    damage: 25,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'rare',
    description: 'Causa 25 de dano devastador.',
    icon: 'vorpal'
  },
  impacto_pesado: {
    id: 'impacto_pesado',
    name: 'Impacto Sísmico',
    cost: 2,
    type: 'attack',
    damage: 16,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 1,
    weak: 1,
    thorns: 0,
    exhaust: false,
    rarity: 'rare',
    description: 'Causa 16 de dano, aplica 1 Vulnerável e 1 Fraco no alvo.',
    icon: 'earthquake'
  },

  // ==========================================
  // --- CARTAS LENDÁRIAS (Legendary) ---
  // ==========================================
  chuva_meteoros: {
    id: 'chuva_meteoros',
    name: 'Chuva de Meteoros',
    cost: 3,
    type: 'attack',
    damage: 28,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 4,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'legendary',
    description: 'Carta Lendária: 28 de dano massivo e aplica 4 de Queimadura!',
    icon: 'meteor'
  },
  chamas_da_fenix: {
    id: 'chamas_da_fenix',
    name: 'Chamas da Fênix',
    cost: 2,
    type: 'skill',
    damage: 0,
    hits: 0,
    block: 10,
    armorBreak: 0,
    heal: 6,
    energyGain: 0,
    hpCost: 0,
    burn: 2,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: true,
    rarity: 'legendary',
    description: 'Carta Lendária: Ganha 10 de armadura, cura 6 HP e queima o inimigo em 2. Exausta.',
    icon: 'phoenix_flame'
  },

  // ==========================================
  // --- CARTAS DA LADINA DAS SOMBRAS (Rogue) ---
  // ==========================================
  adaga_rapida: {
    id: 'adaga_rapida',
    name: 'Adaga Rápida',
    cost: 1,
    type: 'attack',
    damage: 4,
    hits: 2,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'starter',
    description: 'Dois golpes rápidos de 4 de dano (8 total).',
    icon: 'sword'
  },
  golpe_envenenado: {
    id: 'golpe_envenenado',
    name: 'Golpe Envenenado',
    cost: 1,
    type: 'attack',
    damage: 5,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 3,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'starter',
    description: 'Causa 5 de dano e infecta com 3 de Veneno letal.',
    icon: 'sword'
  },
  passo_sombrio: {
    id: 'passo_sombrio',
    name: 'Passo Sombrio',
    cost: 1,
    type: 'defense',
    damage: 0,
    hits: 0,
    block: 6,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    drawCards: 1,
    exhaust: false,
    rarity: 'starter',
    description: 'Ganha 6 de armadura e compra 1 carta imediata.',
    icon: 'wood_shield'
  },
  esquiva_agil: {
    id: 'esquiva_agil',
    name: 'Esquiva Ágil',
    cost: 1,
    type: 'defense',
    damage: 0,
    hits: 0,
    block: 8,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'starter',
    description: 'Manobra evasiva: ganha 8 de armadura.',
    icon: 'wood_shield'
  },
  lacerar: {
    id: 'lacerar',
    name: 'Lacerar',
    cost: 2,
    type: 'attack',
    damage: 12,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 4,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Corte profundo: 12 de dano e aplica 4 de Veneno.',
    icon: 'sword'
  },
  nevoa_toxica: {
    id: 'nevoa_toxica',
    name: 'Névoa Tóxica',
    cost: 2,
    type: 'skill',
    damage: 0,
    hits: 0,
    block: 10,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 5,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'rare',
    description: 'Nuvem asfixiante: ganha 10 armadura e aplica 5 de Veneno.',
    icon: 'magic'
  },

  // ==========================================
  // --- CARTAS DO MAGO ELEMENTAL (Mage) ---
  // ==========================================
  centelha_de_fogo: {
    id: 'centelha_de_fogo',
    name: 'Centelha de Fogo',
    cost: 1,
    type: 'attack',
    damage: 6,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 2,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'starter',
    description: 'Faíscas arcanas: 6 de dano e 2 de Queimadura.',
    icon: 'flame'
  },
  raio_gelido: {
    id: 'raio_gelido',
    name: 'Raio Gélido',
    cost: 1,
    type: 'attack',
    damage: 7,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 1,
    thorns: 0,
    exhaust: false,
    rarity: 'starter',
    description: 'Feixe de gelo: 7 de dano e aplica 1 de Fraco.',
    icon: 'meteor_strike'
  },
  barreira_de_mana: {
    id: 'barreira_de_mana',
    name: 'Barreira de Mana',
    cost: 1,
    type: 'defense',
    damage: 0,
    hits: 0,
    block: 9,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'starter',
    description: 'Campo de força arcano: ganha 9 de armadura.',
    icon: 'wood_shield'
  },
  meditacao_arcana: {
    id: 'meditacao_arcana',
    name: 'Meditação Arcana',
    cost: 0,
    type: 'skill',
    damage: 0,
    hits: 0,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    drawCards: 2,
    exhaust: false,
    rarity: 'starter',
    description: 'Canalização cósmica: compra 2 cartas imediatamente.',
    icon: 'magic'
  },
  rajada_arcana: {
    id: 'rajada_arcana',
    name: 'Rajada Arcana',
    cost: 2,
    type: 'attack',
    damage: 15,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 1,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'starter',
    description: 'Explosão cósmica: 15 de dano e aplica 1 de Vulnerável.',
    icon: 'meteor_strike'
  },
  cometa_arcano: {
    id: 'cometa_arcano',
    name: 'Cometa Arcano',
    cost: 3,
    type: 'attack',
    damage: 26,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 3,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'rare',
    description: 'Invoca um meteoro cósmico: 26 de dano e 3 de Queimadura.',
    icon: 'meteor_strike'
  },

  // ==========================================
  // --- EXPANSÃO: GUERREIRO RÚNICO (+8) ---
  // ==========================================
  golpe_de_escudo: {
    id: 'golpe_de_escudo',
    name: 'Golpe de Escudo',
    cost: 1,
    type: 'attack',
    damage: 0,
    damageEqualsBlock: true,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Golpeia com o broquel: Causa dano igual à sua Armadura atual.',
    icon: 'shield'
  },
  reforco_ferreo: {
    id: 'reforco_ferreo',
    name: 'Reforço Férreo',
    cost: 2,
    type: 'defense',
    damage: 0,
    hits: 0,
    block: 14,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 2,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Armadura pesada: ganha 14 de armadura e +2 de Retaliação (Espinhos).',
    icon: 'wood_shield'
  },
  muralha_viva: {
    id: 'muralha_viva',
    name: 'Muralha Viva',
    cost: 2,
    type: 'skill',
    damage: 0,
    hits: 0,
    block: 8,
    retainBlock: 8,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'rare',
    description: 'Postura inabalável: ganha 8 de armadura e retém até 8 de armadura entre turnos.',
    icon: 'wood_shield'
  },
  rompe_guarda: {
    id: 'rompe_guarda',
    name: 'Rompe-Guarda',
    cost: 1,
    type: 'attack',
    damage: 10,
    hits: 1,
    armorBreakAll: true,
    block: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Destrói toda a armadura do alvo e causa 10 de dano.',
    icon: 'sword'
  },
  golpe_frenetico: {
    id: 'golpe_frenetico',
    name: 'Golpe Frenético',
    cost: 1,
    type: 'attack',
    damage: 10,
    hits: 1,
    lowHpBonusDamage: 8,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'common',
    description: 'Causa 10 de dano. Se estiver abaixo de 50% de HP, causa 18 de dano.',
    icon: 'sword'
  },
  grito_de_guerra: {
    id: 'grito_de_guerra',
    name: 'Grito de Guerra',
    cost: 0,
    type: 'skill',
    damage: 0,
    hits: 0,
    block: 0,
    buffStrength: 2,
    drawCards: 1,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Brado retumbante: ganha +2 de Força temporária e compra 1 carta.',
    icon: 'magic'
  },
  devastacao: {
    id: 'devastacao',
    name: 'Devastação',
    cost: 3,
    type: 'attack',
    damage: 26,
    hits: 1,
    vulnerable: 2,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'rare',
    description: 'Impacto cataclísmico: causa 26 de dano e aplica 2 de Vulnerável.',
    icon: 'sword'
  },
  ressurgencia_titanica: {
    id: 'ressurgencia_titanica',
    name: 'Ressurgência Titânica',
    cost: 1,
    type: 'skill',
    damage: 0,
    hits: 0,
    heal: 12,
    energyGain: 2,
    block: 0,
    armorBreak: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: true,
    rarity: 'rare',
    description: 'Regeneração suprema: cura 12 de Vida e concede 2 de Energia. Exausta.',
    icon: 'heal'
  },

  // ==========================================
  // --- EXPANSÃO: LADINA DAS SOMBRAS (+8) ---
  // ==========================================
  catalisador_toxico: {
    id: 'catalisador_toxico',
    name: 'Catalisador Tóxico',
    cost: 1,
    type: 'skill',
    damage: 0,
    hits: 0,
    doublePoison: true,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'rare',
    description: 'Reação bioquímica letal: dobra o Veneno ativo no alvo.',
    icon: 'magic'
  },
  nuvem_de_esporos: {
    id: 'nuvem_de_esporos',
    name: 'Nuvem de Esporos',
    cost: 2,
    type: 'skill',
    damage: 0,
    hits: 0,
    poison: 8,
    weak: 2,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Esporos venenosos: aplica 8 de Veneno e 2 de Fraco.',
    icon: 'magic'
  },
  adaga_contaminada: {
    id: 'adaga_contaminada',
    name: 'Adaga Contaminada',
    cost: 0,
    type: 'attack',
    damage: 4,
    hits: 1,
    energyIfPoison: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'common',
    description: 'Causa 4 de dano. Se o alvo estiver com Veneno, ganhe 1 de Energia.',
    icon: 'sword'
  },
  toxina_letal: {
    id: 'toxina_letal',
    name: 'Toxina Letal',
    cost: 2,
    type: 'skill',
    damage: 0,
    hits: 0,
    poison: 4,
    lethalToxinPower: true,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'rare',
    description: 'Veneno corrosivo: aplica 4 de Veneno e corrói 3 de armadura a cada dano de veneno.',
    icon: 'magic'
  },
  chuva_de_adagas: {
    id: 'chuva_de_adagas',
    name: 'Chuva de Adagas',
    cost: 1,
    type: 'attack',
    damage: 3,
    hits: 3,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'common',
    description: 'Saraivada veloz: desfere 3 ataques de 3 de dano (9 total).',
    icon: 'sword'
  },
  reflexo_fantasma: {
    id: 'reflexo_fantasma',
    name: 'Reflexo Fantasma',
    cost: 1,
    type: 'defense',
    damage: 0,
    hits: 0,
    block: 9,
    drawCards: 2,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Esquiva ilusória: ganha 9 de armadura e compra 2 cartas.',
    icon: 'wood_shield'
  },
  golpe_no_tendao: {
    id: 'golpe_no_tendao',
    name: 'Golpe no Tendão',
    cost: 1,
    type: 'attack',
    damage: 7,
    hits: 1,
    weak: 2,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'common',
    description: 'Ataque incapacitante: causa 7 de dano e aplica 2 de Fraco.',
    icon: 'sword'
  },
  execucao_sombria: {
    id: 'execucao_sombria',
    name: 'Execução Sombria',
    cost: 2,
    type: 'attack',
    damage: 8,
    damagePerCardPlayed: 4,
    hits: 1,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'rare',
    description: 'Golpe de finalização: causa 8 de dano + 4 para cada carta jogada neste turno.',
    icon: 'sword'
  },

  // ==========================================
  // --- EXPANSÃO: MAGO ELEMENTAL (+8) ---
  // ==========================================
  incinerar: {
    id: 'incinerar',
    name: 'Incinerar',
    cost: 1,
    type: 'attack',
    damage: 8,
    hits: 1,
    consumeBurnMultiplier: 2,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Consome toda a Queimadura do inimigo causando o dobro desse valor em dano direto além de 8 dano.',
    icon: 'flame'
  },
  manto_de_chamas: {
    id: 'manto_de_chamas',
    name: 'Manto de Chamas',
    cost: 1,
    type: 'skill',
    damage: 0,
    hits: 0,
    block: 6,
    flameCloak: 3,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Armadura ígnea: ganha 6 armadura e queima atacantes em 3 ao sofrer dano.',
    icon: 'flame'
  },
  ignicao_cosmica: {
    id: 'ignicao_cosmica',
    name: 'Ignição Cósmica',
    cost: 2,
    type: 'skill',
    damage: 0,
    hits: 0,
    burn: 8,
    vulnerable: 2,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    poison: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Chamas estelares: aplica 8 de Queimadura e 2 de Vulnerável.',
    icon: 'flame'
  },
  supernova: {
    id: 'supernova',
    name: 'Supernova',
    cost: 3,
    type: 'attack',
    damage: 30,
    hits: 1,
    burn: 6,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'rare',
    description: 'Cataclismo solar: 30 de dano devastador e aplica 6 de Queimadura.',
    icon: 'flame'
  },
  lanca_de_gelo: {
    id: 'lanca_de_gelo',
    name: 'Lança de Gelo',
    cost: 1,
    type: 'attack',
    damage: 9,
    hits: 1,
    weak: 1,
    reduceIntentDamage: 3,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'common',
    description: 'Estalactite perfurante: causa 9 de dano e enfraquece o ataque do monstro em 3.',
    icon: 'meteor_strike'
  },
  fluxo_de_eter: {
    id: 'fluxo_de_eter',
    name: 'Fluxo de Éter',
    cost: 0,
    type: 'skill',
    damage: 0,
    hits: 0,
    energyGain: 2,
    block: 0,
    armorBreak: 0,
    heal: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Convergência mágica: ganha 2 de Mana/Energia neste turno.',
    icon: 'magic'
  },
  escudo_cristalino: {
    id: 'escudo_cristalino',
    name: 'Escudo Cristalino',
    cost: 1,
    type: 'defense',
    damage: 0,
    hits: 0,
    block: 10,
    conditionalDraw: 1,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'uncommon',
    description: 'Cristal protetor: ganha 10 armadura e compra 1 carta se restar energia.',
    icon: 'wood_shield'
  },
  eco_temporal: {
    id: 'eco_temporal',
    name: 'Eco Temporal',
    cost: 2,
    type: 'skill',
    damage: 0,
    hits: 0,
    doubleNextCard: true,
    block: 0,
    armorBreak: 0,
    heal: 0,
    energyGain: 0,
    hpCost: 0,
    burn: 0,
    poison: 0,
    vulnerable: 0,
    weak: 0,
    thorns: 0,
    exhaust: false,
    rarity: 'rare',
    description: 'Distorção do tempo: A próxima carta jogada neste turno é conjurada duas vezes sem custo adicional.',
    icon: 'magic'
  }
};

/**
 * Lista dos IDs do Deck Inicial Padrão (Guerreiro Rúnico - 12 cartas).
 */
export const INITIAL_DECK_IDS = [
  'murro', 'murro', 'murro', 'murro',
  'chute', 'chute', 'chute',
  'espada', 'espada',
  'escudo_madeira', 'escudo_madeira', 'escudo_madeira'
];

/**
 * Decks Iniciais por classe de herói.
 */
export const HERO_INITIAL_DECKS = {
  warrior: [
    'murro', 'murro', 'murro', 'murro',
    'chute', 'chute', 'chute',
    'espada', 'espada',
    'escudo_madeira', 'escudo_madeira', 'escudo_madeira'
  ],
  rogue: [
    'adaga_rapida', 'adaga_rapida', 'adaga_rapida', 'adaga_rapida',
    'golpe_envenenado', 'golpe_envenenado',
    'passo_sombrio', 'passo_sombrio',
    'esquiva_agil', 'esquiva_agil', 'esquiva_agil', 'esquiva_agil'
  ],
  mage: [
    'centelha_de_fogo', 'centelha_de_fogo', 'centelha_de_fogo',
    'raio_gelido', 'raio_gelido',
    'barreira_de_mana', 'barreira_de_mana',
    'meditacao_arcana', 'meditacao_arcana', 'meditacao_arcana',
    'rajada_arcana', 'rajada_arcana'
  ]
};

/**
 * Pool de cartas para recompensas normais e santuário.
 */
export const REWARD_POOL_IDS = [
  'estocada_precisa',
  'golpe_flamejante',
  'grito_intimidador',
  'golpe_duplo',
  'muralha_ferro',
  'pancada_atordoante',
  'postura_espinhos',
  'danca_laminas',
  'furia_berserker',
  'cura_espiritual',
  'corte_vorpal',
  'impacto_pesado',
  'chuva_meteoros',
  'chamas_da_fenix',
  'lacerar',
  'nevoa_toxica',
  'cometa_arcano',
  'espada',
  'escudo_madeira',
  // Novas cartas do Guerreiro Rúnico (+8)
  'golpe_de_escudo',
  'reforco_ferreo',
  'muralha_viva',
  'rompe_guarda',
  'golpe_frenetico',
  'grito_de_guerra',
  'devastacao',
  'ressurgencia_titanica',
  // Novas cartas da Ladina das Sombras (+8)
  'catalisador_toxico',
  'nuvem_de_esporos',
  'adaga_contaminada',
  'toxina_letal',
  'chuva_de_adagas',
  'reflexo_fantasma',
  'golpe_no_tendao',
  'execucao_sombria',
  // Novas cartas do Mago Elemental (+8)
  'incinerar',
  'manto_de_chamas',
  'ignicao_cosmica',
  'supernova',
  'lanca_de_gelo',
  'fluxo_de_eter',
  'escudo_cristalino',
  'eco_temporal'
];

/**
 * Cria uma nova instância de carta a partir do ID da definição.
 * @param {string} cardId
 * @param {string} [customUid]
 * @returns {Object}
 */
export function createCardInstance(cardId, customUid = null) {
  const def = CARDS[cardId];
  if (!def) {
    throw new Error(`Carta não encontrada com id: "${cardId}"`);
  }
  const uid = customUid || `card_${cardId}_${_instanceCounter++}_${Date.now().toString(36)}`;
  return {
    ...def,
    uid,
    isUpgraded: false
  };
}

/**
 * Catálogo de Aprimoramentos (+) para todas as 30 cartas de "Cards e Dungeons".
 */
export const UPGRADE_DEFINITIONS = {
  // Guerreiro / Iniciais
  murro: {
    damage: 9,
    description: 'Causa 9 de dano físico.'
  },
  chute: {
    damage: 11,
    armorBreak: 3,
    description: 'Quebra 3 de armadura e causa 11 de dano.'
  },
  espada: {
    damage: 19,
    description: 'Causa 19 de dano pesado.'
  },
  escudo_madeira: {
    block: 9,
    description: 'Ganha 9 de armadura neste turno.'
  },

  // Recompensas Neutras / Guerreiro
  estocada_precisa: {
    damage: 14,
    description: 'Causa 14 de dano físico certeiro.'
  },
  golpe_flamejante: {
    damage: 10,
    burn: 4,
    description: 'Causa 10 de dano e aplica 4 de Queimadura no alvo.'
  },
  grito_intimidador: {
    block: 8,
    weak: 3,
    description: 'Ganha 8 de armadura e enfraquece o inimigo (aplica 3 Fraco).'
  },
  golpe_duplo: {
    damage: 7,
    description: 'Desfere 2 golpes de 7 de dano (14 total).'
  },
  muralha_ferro: {
    block: 19,
    description: 'Ganha 19 de armadura fortificada.'
  },
  pancada_atordoante: {
    damage: 16,
    vulnerable: 3,
    description: 'Causa 16 de dano pesado e aplica 3 de Vulnerável.'
  },
  postura_espinhos: {
    block: 11,
    thorns: 5,
    description: 'Ganha 11 de armadura e 5 de Retaliação por espinhos.'
  },
  danca_laminas: {
    damage: 6,
    description: 'Desfere 3 golpes rápidos de 6 de dano (18 total).'
  },
  furia_berserker: {
    energyGain: 3,
    hpCost: 3,
    description: 'Ganha 3 de energia ao custo de 3 de Vida.'
  },
  cura_espiritual: {
    heal: 12,
    description: 'Cura 12 de Vida. Exausta.'
  },
  corte_vorpal: {
    damage: 32,
    description: 'Causa 32 de dano devastador.'
  },
  impacto_pesado: {
    damage: 21,
    vulnerable: 2,
    weak: 2,
    description: 'Causa 21 de dano, aplica 2 Vulnerável e 2 Fraco no alvo.'
  },
  chuva_meteoros: {
    damage: 36,
    burn: 6,
    description: 'Carta Lendária: 36 de dano massivo e aplica 6 de Queimadura!'
  },
  chamas_da_fenix: {
    block: 14,
    heal: 9,
    burn: 3,
    description: 'Carta Lendária: Ganha 14 de armadura, cura 9 HP e queima o inimigo em 3. Exausta.'
  },

  // Ladina
  adaga_rapida: {
    damage: 6,
    description: 'Dois golpes rápidos de 6 de dano (12 total).'
  },
  golpe_envenenado: {
    damage: 7,
    poison: 5,
    description: 'Causa 7 de dano e infecta com 5 de Veneno letal.'
  },
  passo_sombrio: {
    block: 9,
    drawCards: 2,
    description: 'Ganha 9 de armadura e compra 2 cartas imediatas.'
  },
  esquiva_agil: {
    block: 11,
    description: 'Manobra evasiva: ganha 11 de armadura.'
  },
  lacerar: {
    damage: 16,
    poison: 6,
    description: 'Corte profundo: 16 de dano e aplica 6 de Veneno.'
  },
  nevoa_toxica: {
    block: 14,
    poison: 7,
    description: 'Nuvem asfixiante: ganha 14 armadura e aplica 7 de Veneno.'
  },

  // Mago
  centelha_de_fogo: {
    damage: 9,
    burn: 3,
    description: 'Faíscas arcanas: 9 de dano e 3 de Queimadura.'
  },
  raio_gelido: {
    damage: 10,
    weak: 2,
    description: 'Feixe de gelo: 10 de dano e aplica 2 de Fraco.'
  },
  barreira_de_mana: {
    block: 13,
    description: 'Campo de força arcano: ganha 13 de armadura.'
  },
  meditacao_arcana: {
    drawCards: 3,
    description: 'Canalização cósmica: compra 3 cartas imediatamente.'
  },
  rajada_arcana: {
    damage: 20,
    vulnerable: 2,
    description: 'Explosão cósmica: 20 de dano e aplica 2 de Vulnerável.'
  },
  cometa_arcano: {
    damage: 34,
    burn: 5,
    description: 'Invoca um meteoro cósmico: 34 de dano e 5 de Queimadura.'
  },

  // Expansão: Guerreiro Rúnico (+8)
  golpe_de_escudo: {
    blockBonusDamage: 4,
    description: 'Golpeia com o broquel: Causa dano igual à sua Armadura atual + 4 de bônus.'
  },
  reforco_ferreo: {
    block: 18,
    thorns: 3,
    description: 'Armadura pesada: ganha 18 de armadura e +3 de Retaliação (Espinhos).'
  },
  muralha_viva: {
    block: 12,
    retainBlock: 12,
    description: 'Postura inabalável: ganha 12 de armadura e retém até 12 de armadura entre turnos.'
  },
  rompe_guarda: {
    damage: 14,
    description: 'Destrói toda a armadura do alvo e causa 14 de dano.'
  },
  golpe_frenetico: {
    damage: 14,
    lowHpBonusDamage: 10,
    description: 'Causa 14 de dano. Se estiver abaixo de 50% de HP, causa 24 de dano.'
  },
  grito_de_guerra: {
    buffStrength: 3,
    drawCards: 1,
    description: 'Brado retumbante: ganha +3 de Força temporária e compra 1 carta.'
  },
  devastacao: {
    damage: 34,
    vulnerable: 3,
    description: 'Impacto cataclísmico: causa 34 de dano e aplica 3 de Vulnerável.'
  },
  ressurgencia_titanica: {
    heal: 16,
    energyGain: 2,
    description: 'Regeneração suprema: cura 16 de Vida e concede 2 de Energia. Exausta.'
  },

  // Expansão: Ladina das Sombras (+8)
  catalisador_toxico: {
    bonusPoison: 3,
    description: 'Reação bioquímica letal: dobra o Veneno ativo no alvo e aplica +3 de Veneno extra.'
  },
  nuvem_de_esporos: {
    poison: 11,
    weak: 3,
    description: 'Esporos venenosos: aplica 11 de Veneno e 3 de Fraco.'
  },
  adaga_contaminada: {
    damage: 6,
    description: 'Causa 6 de dano. Se o alvo estiver com Veneno, ganhe 1 de Energia.'
  },
  toxina_letal: {
    poison: 7,
    description: 'Veneno corrosivo: aplica 7 de Veneno e corrói 3 de armadura a cada dano de veneno.'
  },
  chuva_de_adagas: {
    damage: 4,
    hits: 3,
    description: 'Saraivada veloz: desfere 3 ataques de 4 de dano (12 total).'
  },
  reflexo_fantasma: {
    block: 13,
    drawCards: 2,
    description: 'Esquiva ilusória: ganha 13 de armadura e compra 2 cartas.'
  },
  golpe_no_tendao: {
    damage: 10,
    weak: 3,
    description: 'Ataque incapacitante: causa 10 de dano e aplica 3 de Fraco.'
  },
  execucao_sombria: {
    damage: 12,
    damagePerCardPlayed: 5,
    description: 'Golpe de finalização: causa 12 de dano + 5 para cada carta jogada neste turno.'
  },

  // Expansão: Mago Elemental (+8)
  incinerar: {
    damage: 11,
    consumeBurnMultiplier: 3,
    description: 'Consome toda a Queimadura do inimigo causando o triplo desse valor em dano direto além de 11 dano.'
  },
  manto_de_chamas: {
    block: 9,
    flameCloak: 4,
    description: 'Armadura ígnea: ganha 9 armadura e queima atacantes em 4 ao sofrer dano.'
  },
  ignicao_cosmica: {
    burn: 12,
    vulnerable: 2,
    description: 'Chamas estelares: aplica 12 de Queimadura e 2 de Vulnerável.'
  },
  supernova: {
    damage: 38,
    burn: 8,
    description: 'Cataclismo solar: 38 de dano devastador e aplica 8 de Queimadura.'
  },
  lanca_de_gelo: {
    damage: 13,
    weak: 2,
    description: 'Estalactite perfurante: causa 13 de dano e enfraquece o ataque do monstro.'
  },
  fluxo_de_eter: {
    energyGain: 3,
    description: 'Convergência mágica: ganha 3 de Mana/Energia neste turno.'
  },
  escudo_cristalino: {
    block: 14,
    conditionalDraw: 1,
    description: 'Cristal protetor: ganha 14 armadura e compra 1 carta se restar energia.'
  },
  eco_temporal: {
    cost: 1,
    description: 'Distorção do tempo (Custo 1): A próxima carta jogada neste turno é conjurada duas vezes sem custo adicional.'
  }
};

/**
 * Retorna uma cópia da carta aprimorada (+), aumentando seus valores de combate
 * e marcando `isUpgraded: true`. Se a carta já estiver aprimorada, retorna a mesma.
 * @param {Object} card
 * @returns {Object}
 */
export function upgradeCardInstance(card) {
  if (!card) return null;
  if (card.isUpgraded) return card;

  const upgradeDef = UPGRADE_DEFINITIONS[card.id] || {};
  const baseName = card.name.endsWith('+') ? card.name : `${card.name}+`;

  return {
    ...card,
    ...upgradeDef,
    name: baseName,
    isUpgraded: true
  };
}

/**
 * Gera o deck inicial completo para uma determinada classe de herói (ou padrão).
 * @param {string} [heroClassId='warrior'] 'warrior' | 'rogue' | 'mage'
 * @returns {Array<Object>}
 */
export function createInitialDeck(heroClassId = 'warrior') {
  const normalized = (heroClassId || 'warrior').toLowerCase();
  const list = HERO_INITIAL_DECKS[normalized] || INITIAL_DECK_IDS;
  return list.map(id => createCardInstance(id));
}

/**
 * Tabelas de probabilidade de raridade por tipo de encontro pós-combate.
 */
export const REWARD_RARITY_WEIGHTS = {
  normal: { common: 0.75, uncommon: 0.22, rare: 0.03, legendary: 0.00 },
  elite:  { common: 0.40, uncommon: 0.45, rare: 0.14, legendary: 0.01 },
  boss:   { common: 0.00, uncommon: 0.00, rare: 0.70, legendary: 0.30 }
};

const RARITY_HIERARCHY = ['common', 'uncommon', 'rare', 'legendary'];

/**
 * Seleciona N cartas aleatórias distintas para oferta de recompensa,
 * utilizando curva ponderada de raridade de acordo com o tipo de encontro.
 * @param {number} [count=3]
 * @param {function} [rng=Math.random]
 * @param {string} [encounterType='normal'] 'normal' | 'elite' | 'boss'
 * @returns {Array<Object>}
 */
export function getRandomRewardCards(count = 3, rng = Math.random, encounterType = 'normal') {
  const encKey = (encounterType || 'normal').toLowerCase();
  const weights = REWARD_RARITY_WEIGHTS[encKey] || REWARD_RARITY_WEIGHTS.normal;

  // Agrupa as cartas de REWARD_POOL_IDS por suas raridades em CARDS
  // Cartas com raridade 'starter' que estejam no pool (ex: espada, escudo_madeira) são categorizadas como 'common'
  const poolByRarity = {
    common: [],
    uncommon: [],
    rare: [],
    legendary: []
  };

  for (const cardId of REWARD_POOL_IDS) {
    const cardDef = CARDS[cardId];
    if (!cardDef) continue;
    let r = cardDef.rarity;
    if (r === 'starter' || !poolByRarity[r]) {
      r = 'common';
    }
    poolByRarity[r].push(cardId);
  }

  // Clona os pools locais para garantir cartas únicas no lote ofertado
  const availablePools = {
    common: [...poolByRarity.common],
    uncommon: [...poolByRarity.uncommon],
    rare: [...poolByRarity.rare],
    legendary: [...poolByRarity.legendary]
  };

  const selectedCards = [];
  const totalAvailable = Object.values(availablePools).reduce((sum, arr) => sum + arr.length, 0);
  const totalToPick = Math.min(count, totalAvailable);

  function rollRarity() {
    const roll = rng();
    let cumulative = 0;
    for (const rarity of RARITY_HIERARCHY) {
      cumulative += (weights[rarity] || 0);
      if (roll < cumulative) {
        return rarity;
      }
    }
    return RARITY_HIERARCHY[RARITY_HIERARCHY.length - 1];
  }

  function getBestAvailableRarity(targetRarity) {
    if (availablePools[targetRarity] && availablePools[targetRarity].length > 0) {
      return targetRarity;
    }
    // Fallback gracioso para a categoria adjacente mais próxima
    const targetIdx = RARITY_HIERARCHY.indexOf(targetRarity);
    const validRarities = RARITY_HIERARCHY.filter(r => availablePools[r] && availablePools[r].length > 0);
    if (validRarities.length === 0) return null;

    validRarities.sort((a, b) => {
      const distA = Math.abs(RARITY_HIERARCHY.indexOf(a) - targetIdx);
      const distB = Math.abs(RARITY_HIERARCHY.indexOf(b) - targetIdx);
      if (distA !== distB) return distA - distB;
      return RARITY_HIERARCHY.indexOf(a) - RARITY_HIERARCHY.indexOf(b);
    });

    return validRarities[0];
  }

  for (let i = 0; i < totalToPick; i++) {
    const rolledRarity = rollRarity();
    const finalRarity = getBestAvailableRarity(rolledRarity);
    if (!finalRarity) break;

    const list = availablePools[finalRarity];
    const pickIndex = Math.floor(rng() * list.length);
    const [cardId] = list.splice(pickIndex, 1);
    selectedCards.push(createCardInstance(cardId));
  }

  return selectedCards;
}

if (typeof window !== 'undefined') {
  window.CARDS = CARDS;
  window.UPGRADE_DEFINITIONS = UPGRADE_DEFINITIONS;
  window.upgradeCardInstance = upgradeCardInstance;
  window.createCardInstance = createCardInstance;
  window.createInitialDeck = createInitialDeck;
  window.getRandomRewardCards = getRandomRewardCards;
  window.REWARD_RARITY_WEIGHTS = REWARD_RARITY_WEIGHTS;
}
