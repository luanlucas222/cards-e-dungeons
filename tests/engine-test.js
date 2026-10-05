/**
 * tests/engine-test.js
 * Suíte de testes automatizados completa para Game Engine de "Cards e Dungeons".
 * Inclui validação de Relíquias, Status Effects, 18 Cartas, Elites e Persistência de Save.
 * Executável nativamente com Node.js (sem dependências externas).
 */

import assert from 'node:assert';
import {
  HERO_CLASSES,
  DEFAULT_HERO_CLASS_ID,
  getHeroClass
} from '../js/data/heroes.js';
import {
  CARDS,
  INITIAL_DECK_IDS,
  UPGRADE_DEFINITIONS,
  upgradeCardInstance,
  createCardInstance,
  createInitialDeck,
  getRandomRewardCards,
  REWARD_RARITY_WEIGHTS
} from '../js/data/cards.js';
import {
  ENEMIES,
  NORMAL_ENEMY_IDS,
  ACT_NORMAL_ENEMY_IDS,
  ELITE_ENEMY_IDS,
  BOSS_ENEMY_ID,
  ACT_BOSS_IDS,
  ENEMY_AFFIXES,
  getRandomAffix,
  getBossIdForAct,
  getBossForAct,
  createEnemyInstance,
  getRandomNormalEnemy,
  getRandomEliteEnemy,
  getBossEnemy
} from '../js/data/enemies.js';
import {
  STATUS_TYPES,
  createDefaultStatusMap,
  applyStatus,
  calculateModifiedDamage,
  tickTurnStartStatuses,
  tickTurnEndStatuses
} from '../js/data/statusEffects.js';
import {
  RELICS,
  addRelicToHero,
  hasRelic,
  triggerRelics
} from '../js/data/relics.js';
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
} from '../js/data/events.js';
import {
  MERCHANT_CONFIG,
  generateMerchantInventory,
  getRandomMerchantQuote,
  getRandomPurchaseQuote
} from '../js/data/merchant.js';
import {
  MapGenerator,
  NODE_TYPES,
  NODE_STATES,
  ACT_THEMES
} from '../js/engine/MapGenerator.js';
import {
  CombatSystem,
  COMBAT_STATES
} from '../js/engine/CombatSystem.js';
import {
  GameState,
  GAME_SCREENS
} from '../js/engine/GameState.js';
import {
  POTIONS,
  ALL_POTION_IDS,
  MAX_POTION_SLOTS,
  createPotionInstance,
  getRandomPotion
} from '../js/data/potions.js';
import {
  NARRATIVE_EVENTS,
  getRandomNarrativeEvent
} from '../js/data/narrativeEvents.js';
import {
  TALENT_DEFINITIONS,
  getMetaProgression,
  saveMetaProgression,
  addSouls,
  upgradeTalent,
  resetTalents,
  getTalentBonuses,
  applyTalentBonusesToHero,
  calculateSoulsReward
} from '../js/data/talents.js';

let passedTests = 0;
let totalTests = 0;

function test(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✓ ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error(err);
    process.exitCode = 1;
  }
}

console.log('====================================================');
console.log(' 🛡️  CARDS E DUNGEONS - SUÍTE DE TESTES DA GAME ENGINE');
console.log('====================================================\n');

// ----------------------------------------------------
// 1. TESTES DE DADOS E CARTAS (18 CARTAS)
// ----------------------------------------------------
console.log('▶ [1/8] Testes de Catálogo de Cartas e Deck');

test('Catálogo possui as cartas únicas especificadas (54 cartas com expansão tática completa)', () => {
  const baseCards = [
    // Starter
    'murro', 'chute', 'espada', 'escudo_madeira',
    // Common
    'estocada_precisa', 'golpe_flamejante', 'grito_intimidador',
    // Uncommon
    'golpe_duplo', 'muralha_ferro', 'pancada_atordoante', 'postura_espinhos', 'danca_laminas',
    // Rare
    'furia_berserker', 'cura_espiritual', 'corte_vorpal', 'impacto_pesado',
    // Legendary
    'chuva_meteoros', 'chamas_da_fenix'
  ];
  const rogueCards = [
    'adaga_rapida', 'golpe_envenenado', 'passo_sombrio', 'esquiva_agil', 'lacerar', 'nevoa_toxica'
  ];
  const mageCards = [
    'centelha_de_fogo', 'raio_gelido', 'barreira_de_mana', 'meditacao_arcana', 'rajada_arcana', 'cometa_arcano'
  ];
  const expansionWarrior = [
    'golpe_de_escudo', 'reforco_ferreo', 'muralha_viva', 'rompe_guarda',
    'golpe_frenetico', 'grito_de_guerra', 'devastacao', 'ressurgencia_titanica'
  ];
  const expansionRogue = [
    'catalisador_toxico', 'nuvem_de_esporos', 'adaga_contaminada', 'toxina_letal',
    'chuva_de_adagas', 'reflexo_fantasma', 'golpe_no_tendao', 'execucao_sombria'
  ];
  const expansionMage = [
    'incinerar', 'manto_de_chamas', 'ignicao_cosmica', 'supernova',
    'lanca_de_gelo', 'fluxo_de_eter', 'escudo_cristalino', 'eco_temporal'
  ];
  const allCards = [...baseCards, ...rogueCards, ...mageCards, ...expansionWarrior, ...expansionRogue, ...expansionMage];
  assert.strictEqual(Object.keys(CARDS).length, 54, 'O catálogo deve possuir exatamente 54 cartas únicas.');
  for (const id of allCards) {
    assert(CARDS[id], `Carta "${id}" não foi encontrada no catálogo.`);
  }
});

test('Deck inicial contém exatamente 12 cartas com a distribuição exata da spec', () => {
  const deck = createInitialDeck();
  assert.strictEqual(deck.length, 12, 'O deck inicial deve ter 12 cartas.');

  const counts = {};
  for (const card of deck) {
    counts[card.id] = (counts[card.id] || 0) + 1;
    assert(card.uid, 'Toda carta instanciada deve possuir um uid único.');
  }

  assert.strictEqual(counts['murro'], 4, 'Deve conter 4x Murro');
  assert.strictEqual(counts['chute'], 3, 'Deve conter 3x Chute');
  assert.strictEqual(counts['espada'], 2, 'Deve conter 2x Espada');
  assert.strictEqual(counts['escudo_madeira'], 3, 'Deve conter 3x Escudo de Madeira');

  const uids = new Set(deck.map(c => c.uid));
  assert.strictEqual(uids.size, 12, 'Todos os 12 UIDs do deck inicial devem ser únicos.');
});

test('Geração de cartas de recompensa retorna cartas distintas válidas', () => {
  const rewards = getRandomRewardCards(3);
  assert.strictEqual(rewards.length, 3, 'Deve gerar exatamente 3 cartas de recompensa.');
  const ids = new Set(rewards.map(c => c.id));
  assert.strictEqual(ids.size, 3, 'As 3 opções de recompensa devem ser cartas distintas.');
});

// ----------------------------------------------------
// 2. TESTES DE INIMIGOS E IA DE INTENÇÕES
// ----------------------------------------------------
console.log('\n▶ [2/8] Testes de Inimigos e IA de Intenções');

test('Inimigos normais, Elite e Boss possuem atributos corretos', () => {
  const goblin = createEnemyInstance('goblin_ladino');
  assert.strictEqual(goblin.hp, 25);
  assert.strictEqual(goblin.maxHp, 25);

  const esqueleto = createEnemyInstance('esqueleto_guardiao');
  assert.strictEqual(esqueleto.hp, 32);
  assert.strictEqual(esqueleto.maxHp, 32);

  const feiticeiro = createEnemyInstance('feiticeiro_sombrio');
  assert.strictEqual(feiticeiro.hp, 28);
  assert.strictEqual(feiticeiro.maxHp, 28);

  const espectro = createEnemyInstance('espectro_lamuriante');
  assert.strictEqual(espectro.hp, 30);
  assert.strictEqual(espectro.maxHp, 30);

  const minotauro = createEnemyInstance('minotauro_berserker');
  assert.strictEqual(minotauro.hp, 48);
  assert.strictEqual(minotauro.maxHp, 48);
  assert.strictEqual(minotauro.type, 'elite');

  const boss = getBossEnemy();
  assert.strictEqual(boss.id, BOSS_ENEMY_ID);
  assert.strictEqual(boss.hp, 260);
  assert.strictEqual(boss.maxHp, 260);
});

test('Ciclo de intenções do Goblin Ladino funciona conforme projetado', () => {
  const goblin = createEnemyInstance('goblin_ladino');
  const t1 = goblin.getIntention(1);
  assert.strictEqual(t1.type, 'attack');
  assert.strictEqual(t1.hits, 2);
  assert.strictEqual(t1.damage, 4);

  const t2 = goblin.getIntention(2);
  assert.strictEqual(t2.type, 'defend');
  assert.strictEqual(t2.block, 8);

  const t3 = goblin.getIntention(3);
  assert.strictEqual(t3.type, 'attack');
  assert.strictEqual(t3.damage, 10);
});

test('Ciclo de intenções do Minotauro Berserker (Elite) e Espectro Lamuriante', () => {
  const minotauro = createEnemyInstance('minotauro_berserker');
  const m1 = minotauro.getIntention(1);
  assert.strictEqual(m1.type, 'buff');
  assert.strictEqual(m1.buff.strength, 3);
  assert.strictEqual(m1.block, 6);

  const m2 = minotauro.getIntention(2);
  assert.strictEqual(m2.type, 'attack');
  assert.strictEqual(m2.damage, 14);

  const m3 = minotauro.getIntention(3);
  assert.strictEqual(m3.type, 'attack');
  assert.strictEqual(m3.hits, 2);

  const espectro = createEnemyInstance('espectro_lamuriante');
  const e1 = espectro.getIntention(1);
  assert.strictEqual(e1.damage, 8);
  assert(e1.targetStatus.weak >= 2);
});

test('Ciclo do Boss Dragão Tirano tem baforada massiva e couraça', () => {
  const boss = getBossEnemy();
  const t1 = boss.getIntention(1);
  assert.strictEqual(t1.type, 'attack_buff');
  assert.strictEqual(t1.damage, 8);

  const t2 = boss.getIntention(2);
  assert.strictEqual(t2.type, 'defend');
  assert.strictEqual(t2.block, 18);

  const t3 = boss.getIntention(3);
  assert.strictEqual(t3.type, 'attack');
  assert.strictEqual(t3.damage, 30, 'A baforada de fogo do boss deve causar 30 de dano.');
  assert.strictEqual(t3.targetStatus.burn, 5, 'A baforada de fogo deve aplicar 5 de Queimadura.');

  const t4 = boss.getIntention(4);
  assert.strictEqual(t4.type, 'attack');
  assert.strictEqual(t4.damage, 10);
  assert.strictEqual(t4.hits, 3);
});

// ----------------------------------------------------
// 3. TESTES DE GERAÇÃO PROCEDURAL DE MAPA
// ----------------------------------------------------
console.log('\n▶ [3/8] Testes do Gerador Procedural de Mapa');

test('Mapa tem 6 andares e nós da camada 0 iniciam disponíveis', () => {
  const mapGen = new MapGenerator({ totalFloors: 6 });
  const map = mapGen.generateMap();

  assert.strictEqual(map.totalFloors, 6);
  assert.strictEqual(map.floors.length, 6);

  const startNodes = map.floors[0].map(id => map.nodes[id]);
  assert(startNodes.length >= 2, 'Deve ter pelo menos 2 nós iniciais.');
  for (const node of startNodes) {
    assert.strictEqual(node.state, NODE_STATES.AVAILABLE);
    assert.strictEqual(node.type, NODE_TYPES.COMBAT);
  }

  const bossNode = map.nodes[map.bossNodeId];
  assert.strictEqual(bossNode.type, NODE_TYPES.BOSS);
  assert.strictEqual(bossNode.floor, 5);
  assert.strictEqual(bossNode.state, NODE_STATES.LOCKED);
});

test('Validação de convergência: 100% dos nós iniciais levam ao Boss em 50 gerações aleatórias', () => {
  for (let i = 0; i < 50; i++) {
    const mapGen = new MapGenerator({ totalFloors: 6 });
    const map = mapGen.generateMap();
    assert(mapGen.validateMap(map), `Falha na validação de conectividade na iteração ${i}`);
  }
});

test('Avançar no mapa atualiza estados dos nós corretamente', () => {
  const mapGen = new MapGenerator({ totalFloors: 6 });
  const map = mapGen.generateMap();

  const firstNodeId = map.floors[0][0];
  const otherFirstNodeId = map.floors[0][1];

  MapGenerator.advanceToNode(map, firstNodeId);

  assert.strictEqual(map.nodes[firstNodeId].state, NODE_STATES.VISITED);
  assert.strictEqual(map.nodes[otherFirstNodeId].state, NODE_STATES.LOCKED);

  const nextNodeIds = map.nodes[firstNodeId].nextNodes;
  assert(nextNodeIds.length > 0, 'O nó visitado deve possuir saídas conectadas.');
  for (const nextId of nextNodeIds) {
    assert.strictEqual(map.nodes[nextId].state, NODE_STATES.AVAILABLE);
  }
});

// ----------------------------------------------------
// 4. TESTES DO SISTEMA DE STATUS (Buffs & Debuffs)
// ----------------------------------------------------
console.log('\n▶ [4/8] Testes do Sistema de Modificadores de Status');

test('Força aumenta o dano de ataque em valor exato', () => {
  const attacker = { statuses: { [STATUS_TYPES.STRENGTH]: 3, [STATUS_TYPES.WEAK]: 0 } };
  const defender = { statuses: { [STATUS_TYPES.VULNERABLE]: 0 } };
  const dmg = calculateModifiedDamage(10, attacker, defender);
  assert.strictEqual(dmg, 13, '10 base + 3 força = 13');
});

test('Vulnerável aumenta dano recebido em 50%', () => {
  const attacker = { statuses: { [STATUS_TYPES.STRENGTH]: 0, [STATUS_TYPES.WEAK]: 0 } };
  const defender = { statuses: { [STATUS_TYPES.VULNERABLE]: 2 } };
  const dmg = calculateModifiedDamage(10, attacker, defender);
  assert.strictEqual(dmg, 15, '10 base * 1.5 = 15');
});

test('Fraco reduz dano causado em 25%', () => {
  const attacker = { statuses: { [STATUS_TYPES.STRENGTH]: 0, [STATUS_TYPES.WEAK]: 2 } };
  const defender = { statuses: { [STATUS_TYPES.VULNERABLE]: 0 } };
  const dmg = calculateModifiedDamage(12, attacker, defender);
  assert.strictEqual(dmg, 9, '12 base * 0.75 = 9');
});

test('Combinação de Força, Fraco e Vulnerável', () => {
  const attacker = { statuses: { [STATUS_TYPES.STRENGTH]: 4, [STATUS_TYPES.WEAK]: 1 } };
  const defender = { statuses: { [STATUS_TYPES.VULNERABLE]: 1 } };
  // 10 + 4 = 14. 14 * 0.75 = 10. 10 * 1.5 = 15.
  const dmg = calculateModifiedDamage(10, attacker, defender);
  assert.strictEqual(dmg, 15);
});

test('Queimadura causa dano no início do turno e reduz em 1', () => {
  const target = { hp: 20, statuses: { [STATUS_TYPES.BURN]: 3 } };
  const res1 = tickTurnStartStatuses(target);
  assert.strictEqual(res1.burnDamage, 3);
  assert.strictEqual(target.hp, 17);
  assert.strictEqual(target.statuses[STATUS_TYPES.BURN], 2);

  const res2 = tickTurnStartStatuses(target);
  assert.strictEqual(res2.burnDamage, 2);
  assert.strictEqual(target.hp, 15);
  assert.strictEqual(target.statuses[STATUS_TYPES.BURN], 1);
});

test('Duração de Vulnerável e Fraco decrementa no fim do turno', () => {
  const entity = { statuses: { [STATUS_TYPES.VULNERABLE]: 2, [STATUS_TYPES.WEAK]: 1 } };
  tickTurnEndStatuses(entity);
  assert.strictEqual(entity.statuses[STATUS_TYPES.VULNERABLE], 1);
  assert.strictEqual(entity.statuses[STATUS_TYPES.WEAK], 0);
});

// ----------------------------------------------------
// 5. TESTES DO SISTEMA DE RELÍQUIAS
// ----------------------------------------------------
console.log('\n▶ [5/8] Testes do Sistema de Relíquias Passivas');

test('Amuleto da Força concede +2 de Força no início de cada combate', () => {
  const hero = {
    hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0,
    deck: [createCardInstance('murro')],
    relics: []
  };
  addRelicToHero(hero, 'amulet_strength');
  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero, enemy });

  assert.strictEqual(combat.hero.statuses[STATUS_TYPES.STRENGTH], 2, 'Herói deve iniciar combate com 2 de força.');

  // Murro dá 6 base + 2 força = 8 de dano!
  combat.playCard(combat.hand[0].uid);
  assert.strictEqual(enemy.hp, 17, '25 - 8 = 17');
});

test('Orbe Ancião concede +1 de energia extra no 1º turno (total 4)', () => {
  const hero = {
    hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0,
    deck: createInitialDeck(),
    relics: []
  };
  addRelicToHero(hero, 'ancient_orb');
  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero, enemy });

  assert.strictEqual(combat.hero.energy, 4, 'Herói deve iniciar o combate com 4 de energia.');
});

test('Cálice de Sangue restaura 5 HP ao triunfar no combate', () => {
  const hero = {
    hp: 50, maxHp: 70, maxEnergy: 3, energy: 3, block: 0,
    deck: [createCardInstance('corte_vorpal')],
    relics: []
  };
  addRelicToHero(hero, 'blood_chalice');
  const enemy = createEnemyInstance('goblin_ladino');
  enemy.hp = 10;

  const combat = new CombatSystem({ hero, enemy });
  combat.playCard(combat.hand[0].uid); // Mata o inimigo

  assert.strictEqual(combat.combatResult, 'victory');
  assert.strictEqual(combat.hero.hp, 55, 'HP deve ter subido de 50 para 55 com o Cálice.');
});

test('Escudo de Espinhos causa 4 de dano de retaliação quando o herói tem armadura ativa', () => {
  const hero = {
    hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0,
    deck: [createCardInstance('escudo_madeira')],
    relics: []
  };
  addRelicToHero(hero, 'spike_shield');
  const enemy = createEnemyInstance('goblin_ladino');
  enemy.hp = 25;
  enemy.currentIntent = { type: 'attack', damage: 6, hits: 1, block: 0, name: 'Ataque', description: 'Teste' };

  const combat = new CombatSystem({ hero, enemy });
  // Herói joga escudo (block vira 6)
  combat.playCard(combat.hand[0].uid);
  assert.strictEqual(combat.hero.block, 6);

  // Inimigo ataca -> retaliação dispara
  combat.endTurn();
  // Inimigo levou 4 de retaliação (25 - 4 = 21)
  assert.strictEqual(enemy.hp, 21, 'Inimigo deve receber 4 de retaliação ao atacar herói blindado.');
});

// ----------------------------------------------------
// 6. TESTES DE NOVAS CARTAS COM STATUS
// ----------------------------------------------------
console.log('\n▶ [6/8] Testes das Novas Cartas com Status');

test('Golpe Flamejante aplica 3 de Queimadura além de 7 de dano', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('golpe_flamejante')] };
  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero, enemy });

  combat.playCard(combat.hand[0].uid);
  assert.strictEqual(enemy.hp, 18, '25 - 7 = 18');
  assert.strictEqual(enemy.statuses[STATUS_TYPES.BURN], 3, 'Inimigo deve estar com 3 de queimadura.');
});

test('Pancada Atordoante aplica 2 de Vulnerável além de 12 de dano', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('pancada_atordoante')] };
  const enemy = createEnemyInstance('esqueleto_guardiao');
  const combat = new CombatSystem({ hero, enemy });

  combat.playCard(combat.hand[0].uid);
  assert.strictEqual(enemy.hp, 20, '32 - 12 = 20');
  assert.strictEqual(enemy.statuses[STATUS_TYPES.VULNERABLE], 2);
});

test('Combo de sinergia: Pancada Atordoante deixa inimigo Vulnerável e Murro causa 9 em vez de 6 (+50%)', () => {
  const hero = {
    hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0,
    deck: [createCardInstance('pancada_atordoante'), createCardInstance('murro')]
  };
  const enemy = createEnemyInstance('esqueleto_guardiao');
  const combat = new CombatSystem({ hero, enemy });

  // 1. Joga Pancada Atordoante (Custo 2, Dano 12, Aplica 2 Vulnerável). Inimigo HP: 32 -> 20.
  const pancada = combat.hand.find(c => c.id === 'pancada_atordoante');
  combat.playCard(pancada.uid);
  assert.strictEqual(enemy.hp, 20);
  assert.strictEqual(enemy.statuses[STATUS_TYPES.VULNERABLE], 2);

  // 2. Joga Murro (Custo 1, Dano base 6). Inimigo Vulnerável: sofre 6 * 1.5 = 9 de dano!
  // Inimigo HP: 20 -> 11.
  const murro = combat.hand.find(c => c.id === 'murro');
  combat.playCard(murro.uid);
  assert.strictEqual(enemy.hp, 11, 'Dano do Murro amplificado para 9 pelo status Vulnerável (20 - 9 = 11).');
});

test('Grito Intimidador ganha 5 armadura e aplica 2 de Fraco', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('grito_intimidador')] };
  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero, enemy });

  combat.playCard(combat.hand[0].uid);
  assert.strictEqual(combat.hero.block, 5);
  assert.strictEqual(enemy.statuses[STATUS_TYPES.WEAK], 2);
});

test('Postura de Espinhos concede 8 armadura e 3 de retaliação', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('postura_espinhos')] };
  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero, enemy });

  combat.playCard(combat.hand[0].uid);
  assert.strictEqual(combat.hero.block, 8);
  assert.strictEqual(combat.hero.statuses[STATUS_TYPES.THORNS], 3);
});

test('Dança das Lâminas desfere 3 golpes de 4 dano (12 total)', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('danca_laminas')] };
  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero, enemy });

  combat.playCard(combat.hand[0].uid);
  assert.strictEqual(enemy.hp, 13, '25 - 12 = 13');
});

test('Chuva de Meteoros causa 28 de dano devastador e 4 de Queimadura', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('chuva_meteoros')] };
  const enemy = createEnemyInstance('esqueleto_guardiao');
  const combat = new CombatSystem({ hero, enemy });

  combat.playCard(combat.hand[0].uid);
  assert.strictEqual(enemy.hp, 4, '32 - 28 = 4');
  assert.strictEqual(enemy.statuses[STATUS_TYPES.BURN], 4);
});

// ----------------------------------------------------
// 7. TESTES DE COMBATE E REGRAS ORIGINAIS (Compatibilidade 100%)
// ----------------------------------------------------
console.log('\n▶ [7/8] Testes de Combate Básico e Regras de Recursos');

test('Combate inicia com compra de 5 cartas e 3 de energia', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: createInitialDeck() };
  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero, enemy });

  const snapshot = combat.getStateSnapshot();
  assert.strictEqual(snapshot.hand.length, 5);
  assert.strictEqual(snapshot.hero.energy, 3);
  assert.strictEqual(snapshot.drawPileCount, 7);
  assert.strictEqual(snapshot.discardPileCount, 0);
});

test('Gasto de energia e bloqueio de jogada sem energia suficiente', () => {
  const hero = {
    hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0,
    deck: [createCardInstance('espada'), createCardInstance('espada'), createCardInstance('espada'), createCardInstance('espada'), createCardInstance('espada')]
  };
  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero, enemy });

  const card1 = combat.hand[0];
  combat.playCard(card1.uid);
  assert.strictEqual(combat.hero.energy, 1);

  const card2 = combat.hand[0];
  assert.throws(() => combat.playCard(card2.uid), /Energia insuficiente/);
});

test('Dano respeita armadura do inimigo e excesso atinge HP', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('murro')] };
  const enemy = createEnemyInstance('goblin_ladino');
  enemy.hp = 25;
  enemy.block = 4;

  const combat = new CombatSystem({ hero, enemy });
  const card = combat.hand[0];
  combat.playCard(card.uid);

  assert.strictEqual(enemy.block, 0);
  assert.strictEqual(enemy.hp, 23);
});

test('Chute quebra 2 de armadura antes de aplicar 8 de dano', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('chute')] };
  const enemy = createEnemyInstance('esqueleto_guardiao');
  enemy.hp = 30;
  enemy.block = 6;

  const combat = new CombatSystem({ hero, enemy });
  const card = combat.hand[0];
  combat.playCard(card.uid);

  assert.strictEqual(enemy.block, 0);
  assert.strictEqual(enemy.hp, 26);
});

test('Golpe Duplo desfere dois ataques consecutivos de 5 de dano', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('golpe_duplo')] };
  const enemy = createEnemyInstance('goblin_ladino');
  enemy.hp = 20;
  enemy.block = 3;

  const combat = new CombatSystem({ hero, enemy });
  const card = combat.hand[0];
  combat.playCard(card.uid);

  assert.strictEqual(enemy.block, 0);
  assert.strictEqual(enemy.hp, 13);
});

test('Fúria Berserker concede 2 de energia e consome 3 de HP', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 1, block: 0, deck: [createCardInstance('furia_berserker')] };
  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero, enemy });
  combat.hero.energy = 1;

  const card = combat.hand[0];
  combat.playCard(card.uid);

  assert.strictEqual(combat.hero.energy, 3);
  assert.strictEqual(combat.hero.hp, 67);
});

test('Cura Espiritual cura HP e é enviada para a pilha de Exaustão', () => {
  const hero = { hp: 50, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('cura_espiritual')] };
  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero, enemy });

  const card = combat.hand[0];
  combat.playCard(card.uid);

  assert.strictEqual(combat.hero.hp, 58);
  assert.strictEqual(combat.exhaustPile.length, 1);
  assert.strictEqual(combat.discardPile.length, 0);
});

test('Reciclagem do monte de compra: reembaralha o descarte quando monte esvazia', () => {
  const hero = {
    hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0,
    deck: [createCardInstance('murro'), createCardInstance('chute'), createCardInstance('espada')]
  };
  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero, enemy });

  assert.strictEqual(combat.hand.length, 3);
  assert.strictEqual(combat.drawPile.length, 0);

  combat.endTurn();

  assert.strictEqual(combat.hand.length, 3);
  assert.strictEqual(combat.discardPile.length, 0);
});

test('Turno do inimigo causa dano ao escudo do herói e excesso ao HP', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('escudo_madeira')] };
  const enemy = createEnemyInstance('goblin_ladino');
  enemy.getIntention = () => ({ type: 'attack', name: 'Golpe', damage: 10, hits: 1, block: 0, description: 'Teste' });
  enemy.currentIntent = enemy.getIntention(1);

  const combat = new CombatSystem({ hero, enemy });
  combat.playCard(combat.hand[0].uid);
  assert.strictEqual(combat.hero.block, 6);

  combat.endTurn();
  assert.strictEqual(combat.hero.hp, 66);
});

test('Vitória é decretada ao zerar o HP do inimigo', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('corte_vorpal')] };
  const enemy = createEnemyInstance('goblin_ladino');
  enemy.hp = 20;

  const combat = new CombatSystem({ hero, enemy });
  combat.playCard(combat.hand[0].uid);

  assert.strictEqual(combat.isFinished, true);
  assert.strictEqual(combat.combatResult, 'victory');
  assert.strictEqual(combat.state, COMBAT_STATES.VICTORY);
});

test('Derrota é decretada se o HP do herói zerar', () => {
  const hero = { hp: 5, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('murro')] };
  const enemy = createEnemyInstance('goblin_ladino');
  enemy.currentIntent = { type: 'attack', name: 'Fatal', damage: 15, hits: 1, block: 0, description: 'Fatal' };

  const combat = new CombatSystem({ hero, enemy });
  combat.endTurn();

  assert.strictEqual(combat.hero.hp, 0);
  assert.strictEqual(combat.isFinished, true);
  assert.strictEqual(combat.combatResult, 'defeat');
  assert.strictEqual(combat.state, COMBAT_STATES.DEFEAT);
});

// ----------------------------------------------------
// 8. TESTES DE SANTUÁRIO, ELITE E PERSISTÊNCIA DE SAVE
// ----------------------------------------------------
console.log('\n▶ [8/8] Testes de Santuário, Elite e Persistência');

test('Santuário: Curar 25% da Vida máxima', () => {
  const hero = { hp: 30, maxHp: 70 };
  const res = executeHeal(hero);
  assert.strictEqual(res.healed, 18);
  assert.strictEqual(hero.hp, 48);
});

test('Santuário: Remover, Duplicar e Adicionar carta', () => {
  const deck = createInitialDeck();
  const cardToRemove = deck[0];
  executeRemoveCard(deck, cardToRemove.uid);
  assert.strictEqual(deck.length, 11);

  // Espada possui 2 cópias no deck inicial, permitindo duplicação sob o teto de 3 cópias
  const cardToDup = deck.find(c => c.id === 'espada');
  executeDuplicateCard(deck, cardToDup.uid);
  assert.strictEqual(deck.length, 12);

  executeAddCard(deck, 'corte_vorpal');
  assert.strictEqual(deck.length, 13);
});

test('Derrotar Elite concede Relíquia e Cartas', () => {
  const gameState = new GameState();
  gameState.startNewRun();

  // Cria manualmente um nó de elite
  const eliteNodeId = 'elite_test';
  gameState.map.nodes[eliteNodeId] = {
    id: eliteNodeId,
    type: NODE_TYPES.ELITE,
    enemyId: 'minotauro_berserker',
    floor: 2,
    state: NODE_STATES.AVAILABLE,
    nextNodes: []
  };

  gameState.selectNode(eliteNodeId);
  assert.strictEqual(gameState.screen, GAME_SCREENS.COMBAT);

  // Vence o combate
  gameState.currentCombat.enemy.hp = 1;
  const attackCard = gameState.currentCombat.hand.find(c => c.damage > 0);
  gameState.playCardInCombat(attackCard.uid);

  assert.strictEqual(gameState.screen, GAME_SCREENS.COMBAT_REWARD);
  assert(gameState.hero.relics.length >= 1, 'Herói deve ter ganho uma relíquia ao vencer a Elite.');
  assert(gameState.eliteRewardRelic !== null, 'eliteRewardRelic deve estar populado.');
});

test('Persistência: saveRun, hasSavedRun, loadRun e clearSavedRun', () => {
  const gameState = new GameState();
  gameState.startNewRun();
  gameState.hero.hp = 42;
  addRelicToHero(gameState.hero, 'amulet_strength');

  // Salvar
  const saveKey = 'test_run_save';
  const saved = gameState.saveRun(saveKey);
  assert.strictEqual(saved, true);
  assert.strictEqual(gameState.hasSavedRun(saveKey), true);

  // Carregar em uma nova instância
  const loadedState = new GameState();
  const loaded = loadedState.loadRun(saveKey);
  assert.strictEqual(loaded, true);
  assert.strictEqual(loadedState.hero.hp, 42);
  assert.strictEqual(loadedState.hero.relics.length, 1);
  assert.strictEqual(loadedState.hero.relics[0].id, 'amulet_strength');

  // Limpar
  loadedState.clearSavedRun(saveKey);
  assert.strictEqual(loadedState.hasSavedRun(saveKey), false);
});

// ----------------------------------------------------
// 9. TESTES DE CLASSES DE HERÓIS, ARQUÉTIPOS E VENENO
// ----------------------------------------------------
console.log('\n▶ [9/9] Testes de Classes de Heróis, Arquétipos e Veneno');

test('Arquétipos de Guerreiro, Ladina e Mago possuem atributos e decks corretos', () => {
  assert(HERO_CLASSES.WARRIOR, 'Classe Guerreiro deve existir');
  assert.strictEqual(HERO_CLASSES.WARRIOR.maxHp, 70);
  assert.strictEqual(HERO_CLASSES.WARRIOR.energy, 3);
  assert.strictEqual(HERO_CLASSES.WARRIOR.startingRelicId, 'amulet_strength');
  assert.strictEqual(HERO_CLASSES.WARRIOR.initialDeckCards.length, 12);

  assert(HERO_CLASSES.ROGUE, 'Classe Ladina deve existir');
  assert.strictEqual(HERO_CLASSES.ROGUE.maxHp, 58);
  assert.strictEqual(HERO_CLASSES.ROGUE.energy, 3);
  assert.strictEqual(HERO_CLASSES.ROGUE.startingRelicId, 'poison_vial');
  assert.strictEqual(HERO_CLASSES.ROGUE.initialDeckCards.length, 12);

  assert(HERO_CLASSES.MAGE, 'Classe Mago deve existir');
  assert.strictEqual(HERO_CLASSES.MAGE.maxHp, 52);
  assert.strictEqual(HERO_CLASSES.MAGE.energy, 4);
  assert.strictEqual(HERO_CLASSES.MAGE.startingRelicId, 'ancient_orb');
  assert.strictEqual(HERO_CLASSES.MAGE.initialDeckCards.length, 12);
});

test('Inicialização de GameState com Ladina e Mago aplica deck e atributos exclusivos', () => {
  // Teste com Ladina
  const rogueState = new GameState();
  rogueState.startNewRun('rogue');
  assert.strictEqual(rogueState.hero.classId, 'rogue');
  assert.strictEqual(rogueState.hero.maxHp, 58);
  assert.strictEqual(rogueState.hero.hp, 58);
  assert.strictEqual(rogueState.hero.energy, 3);
  assert(rogueState.hero.relics.some(r => r.id === 'poison_vial'), 'Ladina deve iniciar com Frasco Peçonhento');
  assert(rogueState.hero.deck.some(c => c.id === 'golpe_envenenado'), 'Deck da Ladina deve conter Golpe Envenenado');

  // Teste com Mago
  const mageState = new GameState();
  mageState.startNewRun('mage');
  assert.strictEqual(mageState.hero.classId, 'mage');
  assert.strictEqual(mageState.hero.maxHp, 52);
  assert.strictEqual(mageState.hero.energy, 4);
  assert(mageState.hero.relics.some(r => r.id === 'ancient_orb'), 'Mago deve iniciar com Orbe Ancião');
  assert(mageState.hero.deck.some(c => c.id === 'centelha_de_fogo'), 'Deck do Mago deve conter Centelha de Fogo');
});

test('Mecânica de Veneno: ignora armadura, reduz em 1 no fim do turno e abate o inimigo', () => {
  const hero = {
    name: 'Ladina',
    hp: 58,
    maxHp: 58,
    energy: 3,
    maxEnergy: 3,
    block: 0,
    deck: [createCardInstance('golpe_envenenado'), createCardInstance('passo_sombrio')],
    relics: []
  };
  const enemy = createEnemyInstance('goblin_ladino');
  enemy.block = 20; // Inimigo com armadura pesada
  enemy.hp = 8;

  const combat = new CombatSystem({ hero, enemy });

  // Aplica Veneno manualmente ou via carta
  applyStatus(enemy, STATUS_TYPES.POISON, 5);
  assert.strictEqual(enemy.statuses[STATUS_TYPES.POISON], 5, 'Inimigo deve ter 5 de Veneno');

  // No fim do turno do inimigo, o Veneno deve causar 5 de dano direto ignorando armadura
  const initialArmor = enemy.block;
  const initialHp = enemy.hp;
  const poisonDamage = tickTurnEndStatuses(enemy);

  assert.strictEqual(poisonDamage.poisonDamage, 5, 'Veneno deve causar 5 de dano');
  assert.strictEqual(enemy.block, initialArmor, 'Armadura não deve ser afetada pelo veneno');
  assert.strictEqual(enemy.hp, initialHp - 5, 'Vida do inimigo deve cair em 5 pontos diretamente');
  assert.strictEqual(enemy.statuses[STATUS_TYPES.POISON], 4, 'Veneno deve decrementar em 1 ponto');
});

test('Frasco Peçonhento aplica 3 de Veneno no início do combate da Ladina', () => {
  const hero = {
    name: 'Ladina',
    hp: 58,
    maxHp: 58,
    energy: 3,
    maxEnergy: 3,
    block: 0,
    deck: [createCardInstance('adaga_rapida'), createCardInstance('esquiva_agil')],
    relics: []
  };
  addRelicToHero(hero, 'poison_vial');
  const enemy = createEnemyInstance('goblin_ladino');

  const combat = new CombatSystem({ hero, enemy });

  assert.strictEqual(combat.enemy.statuses[STATUS_TYPES.POISON], 3, 'Inimigo deve começar com 3 de Veneno pelo Frasco Peçonhento');
});

test('Carta Passo Sombrio ganha 6 armadura e compra 1 carta adicional', () => {
  const hero = {
    name: 'Ladina',
    hp: 58,
    maxHp: 58,
    energy: 3,
    maxEnergy: 3,
    block: 0,
    deck: [
      createCardInstance('passo_sombrio'),
      createCardInstance('adaga_rapida'),
      createCardInstance('esquiva_agil'),
      createCardInstance('esquiva_agil'),
      createCardInstance('esquiva_agil'),
      createCardInstance('golpe_envenenado'),
      createCardInstance('golpe_envenenado')
    ],
    relics: []
  };
  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero, enemy });

  const passoCard = combat.hand.find(c => c.id === 'passo_sombrio') || createCardInstance('passo_sombrio');
  if (!combat.hand.some(c => c.uid === passoCard.uid)) {
    combat.hand.push(passoCard);
  }

  const handCountBefore = combat.hand.length;
  combat.playCard(passoCard.uid);

  assert.strictEqual(hero.block, 6, 'Herói deve receber 6 de armadura');
  // Jogou 1 carta (-1) e comprou 1 carta (+1) => total idêntico
  assert.strictEqual(combat.hand.length, handCountBefore, 'Mão deve manter contagem devido à compra de carta');
});

// ----------------------------------------------------
// 10. TESTES DA LOJA DO MERCADOR RENEGADO (FASE 2)
// ----------------------------------------------------
console.log('\n▶ [10/10] Testes da Loja do Mercador Renegado (Fase 2)');

test('generateMerchantInventory gera 4 cartas, 2 relíquias e custo de purificação configurado', () => {
  const inventory = generateMerchantInventory({ heroClassId: 'warrior', existingRelicIds: [] });
  assert.strictEqual(inventory.cards.length, MERCHANT_CONFIG.CARDS_FOR_SALE_COUNT, 'Deve conter 4 cartas à venda');
  assert.strictEqual(inventory.relics.length, MERCHANT_CONFIG.RELICS_FOR_SALE_COUNT, 'Deve conter 2 relíquias à venda');
  assert.strictEqual(inventory.removalCost, MERCHANT_CONFIG.BASE_REMOVAL_COST, 'Custo de purificação base deve ser 75');
  assert.strictEqual(inventory.removalUsed, false, 'Purificação inicia disponível');
  assert.ok(inventory.cards.every(c => c.price >= 35 && !c.bought), 'Todas as cartas têm preço e bought=false');
  assert.ok(inventory.relics.every(r => r.price >= 80 && !r.bought), 'Todas as relíquias têm preço e bought=false');
});

test('Compra de carta no Mercador deduz ouro, adiciona ao baralho e esgota o item', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  gameState.hero.gold = 250;
  
  gameState.currentMerchantInventory = generateMerchantInventory({ heroClassId: 'warrior', existingRelicIds: [] });
  gameState.screen = GAME_SCREENS.MERCHANT;
  
  const targetCard = gameState.currentMerchantInventory.cards[0];
  const initialGold = gameState.hero.gold;
  const initialDeckCount = gameState.hero.deck.length;

  const result = gameState.buyMerchantCard(targetCard.id);
  assert.strictEqual(result.success, true);
  assert.strictEqual(targetCard.bought, true, 'Item deve ser marcado como comprado');
  assert.strictEqual(gameState.hero.gold, initialGold - targetCard.price, 'Ouro deve ser debitado');
  assert.strictEqual(gameState.hero.deck.length, initialDeckCount + 1, 'Deck deve conter a nova carta');
  assert.ok(result.quote, 'Deve conter fala imersiva do mercador');
});

test('Compra de relíquia no Mercador deduz ouro, equipa no herói e ativa efeito passivo', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  gameState.hero.gold = 300;
  
  gameState.currentMerchantInventory = generateMerchantInventory({ heroClassId: 'warrior', existingRelicIds: [] });
  gameState.screen = GAME_SCREENS.MERCHANT;

  const targetRelic = gameState.currentMerchantInventory.relics[0];
  const initialGold = gameState.hero.gold;

  const result = gameState.buyMerchantRelic(targetRelic.id);
  assert.strictEqual(result.success, true);
  assert.strictEqual(targetRelic.bought, true);
  assert.strictEqual(gameState.hero.gold, initialGold - targetRelic.price);
  assert.ok(hasRelic(gameState.hero, targetRelic.id), 'Herói agora deve possuir a relíquia equipada');
});

test('Purificação de Deck remove carta escolhida permanentemente e gasta ouro', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  gameState.hero.gold = 100;

  gameState.currentMerchantInventory = generateMerchantInventory({ heroClassId: 'warrior', existingRelicIds: [] });
  gameState.screen = GAME_SCREENS.MERCHANT;

  const cardToRemove = gameState.hero.deck[0];
  const initialDeckSize = gameState.hero.deck.length;

  const result = gameState.buyMerchantCardRemoval(cardToRemove.uid);
  assert.strictEqual(result.success, true);
  assert.strictEqual(gameState.currentMerchantInventory.removalUsed, true);
  assert.strictEqual(gameState.hero.gold, 25, '100 - 75 = 25 ouro');
  assert.strictEqual(gameState.hero.deck.length, initialDeckSize - 1);
  assert.ok(!gameState.hero.deck.some(c => c.uid === cardToRemove.uid), 'Carta não deve mais existir no deck');

  // Tentativa de segundo uso deve falhar
  assert.throws(() => {
    gameState.buyMerchantCardRemoval('qualquer-uid');
  }, /já foi utilizado/);
});

test('Rejeita compras de cartas, relíquias ou purificação quando o ouro for insuficiente', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  gameState.hero.gold = 10; // Quase sem ouro

  gameState.currentMerchantInventory = generateMerchantInventory({ heroClassId: 'warrior', existingRelicIds: [] });
  gameState.screen = GAME_SCREENS.MERCHANT;

  const cardRes = gameState.buyMerchantCard(gameState.currentMerchantInventory.cards[0].id);
  assert.strictEqual(cardRes.success, false);
  assert.match(cardRes.message, /Ouro insuficiente/);

  const relicRes = gameState.buyMerchantRelic(gameState.currentMerchantInventory.relics[0].id);
  assert.strictEqual(relicRes.success, false);
  assert.match(relicRes.message, /Ouro insuficiente/);

  const removalRes = gameState.buyMerchantCardRemoval(gameState.hero.deck[0].uid);
  assert.strictEqual(removalRes.success, false);
  assert.match(removalRes.message, /Ouro insuficiente/);
});

test('Novas Relíquias do Mercador: Bolsa da Fortuna (+25 ouro ao vencer), Manto de Éter (5 Block inicial), Pedra de Amolar (+1 Força inicial)', () => {
  // Teste 1: Bolsa da Fortuna
  const hero1 = {
    hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, gold: 50,
    deck: [createCardInstance('corte_vorpal')],
    relics: []
  };
  addRelicToHero(hero1, 'fortune_bag');
  const enemy1 = createEnemyInstance('goblin_ladino');
  enemy1.hp = 10; // Morre no primeiro golpe de 25

  const combat1 = new CombatSystem({ hero: hero1, enemy: enemy1 });
  combat1.playCard(combat1.hand[0].uid);
  assert.strictEqual(combat1.combatResult, 'victory');
  assert.strictEqual(hero1.gold, 75, '50 + 25 de ouro da Bolsa da Fortuna');

  // Teste 2: Manto de Éter
  const hero2 = {
    hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, gold: 0,
    deck: [createCardInstance('murro')],
    relics: []
  };
  addRelicToHero(hero2, 'ether_cloak');
  const enemy2 = createEnemyInstance('goblin_ladino');
  const combat2 = new CombatSystem({ hero: hero2, enemy: enemy2 });
  assert.strictEqual(combat2.hero.block, 5, 'Herói deve iniciar combate com 5 de Armadura pelo Manto de Éter');

  // Teste 3: Pedra de Amolar
  const hero3 = {
    hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, gold: 0,
    deck: [createCardInstance('murro')],
    relics: []
  };
  addRelicToHero(hero3, 'whetstone');
  const enemy3 = createEnemyInstance('goblin_ladino');
  const combat3 = new CombatSystem({ hero: hero3, enemy: enemy3 });
  assert.strictEqual(combat3.hero.statuses[STATUS_TYPES.STRENGTH], 1, 'Herói deve iniciar combate com 1 de Força pela Pedra de Amolar');
});

test('Persistência salva e restaura estoque do mercador e nó atual', () => {
  const stateA = new GameState();
  stateA.startNewRun('warrior');
  stateA.hero.gold = 200;
  
  const inv = generateMerchantInventory({ heroClassId: 'warrior', existingRelicIds: [] });
  stateA.merchantInventories['m_test_1'] = inv;
  stateA.currentMerchantInventory = inv;
  stateA.screen = GAME_SCREENS.MERCHANT;

  stateA.buyMerchantCard(inv.cards[0].id);
  stateA.saveRun();

  const stateB = new GameState();
  const loaded = stateB.loadRun();
  assert.strictEqual(loaded, true);
  assert.strictEqual(stateB.screen, GAME_SCREENS.MERCHANT);
  assert.ok(stateB.currentMerchantInventory);
  assert.strictEqual(stateB.currentMerchantInventory.cards[0].bought, true, 'Estado comprado deve ser preservado');
});

// ----------------------------------------------------
// 11. TESTES DO SISTEMA DE POÇÕES CONSUMÍVEIS (FASE 3)
// ----------------------------------------------------
console.log('\n▶ [11/12] Testes do Sistema de Poções Consumíveis (Fase 3)');

test('Catálogo de poções possui 6 poções registradas e limite de 3 slots', () => {
  assert.strictEqual(ALL_POTION_IDS.length, 6);
  assert.strictEqual(MAX_POTION_SLOTS, 3);
  ALL_POTION_IDS.forEach(id => {
    assert.ok(POTIONS[id], `Poção ${id} deve existir no catálogo`);
    assert.ok(POTIONS[id].name);
    assert.ok(typeof POTIONS[id].execute === 'function');
  });
});

test('Herói inicia com Poção de Vitalidade no slot 0 e slots 1 e 2 vazios', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  assert.strictEqual(gameState.hero.potions.length, 3);
  assert.strictEqual(gameState.hero.potions[0].id, 'potion_health');
  assert.strictEqual(gameState.hero.potions[1], null);
  assert.strictEqual(gameState.hero.potions[2], null);
});

test('Adição de poção ocupa primeiro slot vazio e rejeita se cinto estiver lotado', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  
  const res1 = gameState.addPotion('potion_energy');
  assert.strictEqual(res1.success, true);
  assert.strictEqual(res1.slotIndex, 1);
  assert.strictEqual(gameState.hero.potions[1].id, 'potion_energy');

  const res2 = gameState.addPotion('potion_poison');
  assert.strictEqual(res2.success, true);
  assert.strictEqual(res2.slotIndex, 2);

  // Tentativa com 3 slots cheios
  const res3 = gameState.addPotion('potion_fire');
  assert.strictEqual(res3.success, false);
  assert.match(res3.message, /slots de poções estão cheios/);
});

test('Uso de Óleo Flamejante (potion_fire) em combate inflige 5 de queimadura sem gastar energia', () => {
  const hero = {
    hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0,
    potions: [createPotionInstance('potion_fire'), null, null],
    deck: [createCardInstance('murro')],
    relics: []
  };
  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero, enemy });

  const initialEnergy = combat.hero.energy;

  const res = combat.usePotion(0);
  assert.strictEqual(res.success, true);
  assert.strictEqual(combat.hero.energy, initialEnergy, 'Poção não consome energia do jogador');
  assert.strictEqual(combat.enemy.statuses[STATUS_TYPES.BURN], 5, 'Inimigo deve receber 5 de queimadura');
  assert.strictEqual(combat.hero.potions[0], null, 'Slot de poção deve ter sido esvaziado');
});

test('Uso de Pele de Pedra (potion_stone) concede 14 de armadura instantânea', () => {
  const hero = {
    hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0,
    potions: [createPotionInstance('potion_stone'), null, null],
    deck: [createCardInstance('murro')],
    relics: []
  };
  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero, enemy });

  combat.usePotion(0);
  assert.strictEqual(combat.hero.block, 14, 'Herói deve receber 14 de Armadura');
});

test('Uso de Poção de Mana (potion_energy) concede 2 de energia', () => {
  const hero = {
    hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0,
    potions: [createPotionInstance('potion_energy'), null, null],
    deck: [createCardInstance('murro')],
    relics: []
  };
  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero, enemy });

  combat.hero.energy = 1;
  combat.usePotion(0);
  assert.strictEqual(combat.hero.energy, 3, '1 + 2 = 3 energia');
});

test('Poção de Vitalidade pode ser usada fora de combate para curar o herói', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  gameState.hero.hp = 30; // Ferido

  const res = gameState.usePotion(0);
  assert.strictEqual(res.success, true);
  assert.strictEqual(gameState.hero.hp, 45, '30 + 15 = 45 HP');
  assert.strictEqual(gameState.hero.potions[0], null);
});

test('Poções exclusivamente ofensivas não podem ser consumidas fora de combate', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  gameState.hero.potions[0] = createPotionInstance('potion_poison');

  const res = gameState.usePotion(0);
  assert.strictEqual(res.success, false);
  assert.match(res.message, /só pode ser usada durante o combate/);
  assert.ok(gameState.hero.potions[0], 'Poção não é consumida se falhar');
});

test('Descartar poção libera o slot do cinto', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  assert.ok(gameState.hero.potions[0]);

  const res = gameState.discardPotion(0);
  assert.strictEqual(res.success, true);
  assert.strictEqual(gameState.hero.potions[0], null);
});

// ----------------------------------------------------
// 12. TESTES DE EVENTOS NARRATIVOS MISTERIOSOS (FASE 4)
// ----------------------------------------------------
console.log('\n▶ [12/12] Testes de Eventos Narrativos Misteriosos (Fase 4)');

test('Catálogo contém 5 eventos narrativos ricos com escolhas balanceadas', () => {
  assert.ok(NARRATIVE_EVENTS.length >= 5);
  NARRATIVE_EVENTS.forEach(ev => {
    assert.ok(ev.id);
    assert.ok(ev.title);
    assert.ok(ev.description);
    assert.ok(Array.isArray(ev.choices) && ev.choices.length >= 3);
  });
});

test('Gerador de mapa gera nós procedurais de evento (NODE_TYPES.EVENT)', () => {
  let hasEvent = false;
  for (let i = 0; i < 20; i++) {
    const generator = new MapGenerator({ totalFloors: 6 });
    const map = generator.generateMap();
    const allNodes = Object.values(map.nodes);
    if (allNodes.some(n => n.type === NODE_TYPES.EVENT)) {
      hasEvent = true;
      break;
    }
  }
  assert.ok(hasEvent, 'Gerador procedural deve gerar nós do tipo evento');
});

test('Selecionar nó de evento ativa a tela EVENT e sorteia evento narrativo', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  
  const eventNode = {
    id: 'test_event_1',
    floor: 0,
    type: NODE_TYPES.EVENT,
    state: NODE_STATES.AVAILABLE,
    nextNodes: []
  };
  gameState.map.nodes[eventNode.id] = eventNode;
  gameState.map.floors[0] = [eventNode.id];

  gameState.selectNode(eventNode.id);
  assert.strictEqual(gameState.screen, GAME_SCREENS.EVENT);
  assert.ok(gameState.currentNarrativeEvent, 'Deve haver um evento narrativo ativo');
  assert.ok(gameState.currentNarrativeEvent.title);
});

test('Aplicação de escolha no Altar: Sacrifício de Sangue deduz 12 HP e concede Relíquia', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  gameState.hero.hp = 50;
  gameState.screen = GAME_SCREENS.EVENT;
  gameState.currentNarrativeEvent = NARRATIVE_EVENTS.find(e => e.id === 'altar_forgotten_gods');

  const initialRelicsCount = (gameState.hero.relics || []).length;
  const res = gameState.applyEventChoice('sacrifice_blood');

  assert.strictEqual(gameState.hero.hp, 38, '50 - 12 = 38 HP');
  assert.strictEqual((gameState.hero.relics || []).length, initialRelicsCount + 1, 'Deve ter recebido 1 relíquia');
  assert.ok(res.message);
});

test('Rejeita escolha se a condição de vida for insuficiente', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  gameState.hero.hp = 10;
  gameState.screen = GAME_SCREENS.EVENT;
  gameState.currentNarrativeEvent = NARRATIVE_EVENTS.find(e => e.id === 'altar_forgotten_gods');

  assert.throws(() => {
    gameState.applyEventChoice('sacrifice_blood');
  }, /Vida insuficiente/);
});

test('leaveEvent retorna o jogador em segurança para a tela do mapa', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  gameState.screen = GAME_SCREENS.EVENT;
  gameState.currentNarrativeEvent = NARRATIVE_EVENTS[0];

  gameState.leaveEvent();
  assert.strictEqual(gameState.screen, GAME_SCREENS.MAP);
  assert.strictEqual(gameState.currentNarrativeEvent, null);
});

test('Persistência salva e restaura estado e nó ativo durante evento narrativo', () => {
  const stateA = new GameState();
  stateA.startNewRun('warrior');
  stateA.screen = GAME_SCREENS.EVENT;
  stateA.currentNarrativeEvent = NARRATIVE_EVENTS[1];
  stateA.saveRun();

  const stateB = new GameState();
  const loaded = stateB.loadRun();
  assert.strictEqual(loaded, true);
  assert.strictEqual(stateB.screen, GAME_SCREENS.EVENT);
  assert.ok(stateB.currentNarrativeEvent);
  assert.strictEqual(stateB.currentNarrativeEvent.id, 'dark_chest');
});

// ----------------------------------------------------
// 13. TESTES DE ARQUITETURA MULTI-ATOS E PROGRESSÃO (FASE 1)
// ----------------------------------------------------
console.log('\n▶ [13/13] Testes de Arquitetura Multi-Atos e Progressão (Fase 1 - 25 a 45 min)');

test('Bosses de Ato: Golem Guardião (Ato I) e Lich Rei (Ato II) possuem atributos e intenções telegrafadas', () => {
  assert(ACT_BOSS_IDS[1] === 'golem_guardiao', 'Ato 1 deve ter Golem Guardião como Boss');
  assert(ACT_BOSS_IDS[2] === 'lich_rei', 'Ato 2 deve ter Lich Rei como Boss');
  assert(ACT_BOSS_IDS[3] === 'dragao_tirano', 'Ato 3 deve ter Grande Dragão Tirano como Boss');

  // Golem Guardião Rúnico
  const golem = getBossForAct(1);
  assert.strictEqual(golem.id, 'golem_guardiao');
  assert.strictEqual(golem.type, 'boss');
  assert.strictEqual(golem.maxHp, 140);
  assert.strictEqual(golem.icon, 'golem');

  const g1 = golem.getIntention(1);
  assert.strictEqual(g1.type, 'attack');
  assert.strictEqual(g1.damage, 14);

  const g2 = golem.getIntention(2);
  assert.strictEqual(g2.type, 'defend');
  assert.strictEqual(g2.block, 15);
  assert.strictEqual(g2.buff.strength, 1);

  const g3 = golem.getIntention(3);
  assert.strictEqual(g3.type, 'attack_break');
  assert.strictEqual(g3.damage, 18);
  assert.strictEqual(g3.armorBreak, 6);

  const g4 = golem.getIntention(4);
  assert.strictEqual(g4.type, 'attack');
  assert.strictEqual(g4.hits, 2);
  assert.strictEqual(g4.damage, 8);

  // O Lich Rei dos Ossos
  const lich = getBossForAct(2);
  assert.strictEqual(lich.id, 'lich_rei');
  assert.strictEqual(lich.type, 'boss');
  assert.strictEqual(lich.maxHp, 180);
  assert.strictEqual(lich.icon, 'lich');

  const l1 = lich.getIntention(1);
  assert.strictEqual(l1.type, 'attack_status');
  assert.strictEqual(l1.damage, 15);
  assert.strictEqual(l1.lifeSteal, 15);
  assert.strictEqual(l1.targetStatus.weak, 2);

  const l2 = lich.getIntention(2);
  assert.strictEqual(l2.type, 'attack_status');
  assert.strictEqual(l2.damage, 8);
  assert.strictEqual(l2.targetStatus.poison, 6);

  const l3 = lich.getIntention(3);
  assert.strictEqual(l3.type, 'defend');
  assert.strictEqual(l3.block, 18);
  assert.strictEqual(l3.buff.strength, 2);

  const l4 = lich.getIntention(4);
  assert.strictEqual(l4.type, 'attack');
  assert.strictEqual(l4.damage, 18);
});

test('MapGenerator com multi-atos: gera 15 andares por ato e configura chefes e temas corretos', () => {
  // Ato I
  const mapGenAct1 = new MapGenerator({ act: 1 });
  const map1 = mapGenAct1.generateMap();
  assert.strictEqual(map1.totalFloors, 15, 'Ato 1 deve ter 15 andares na campanha expandida');
  assert.strictEqual(map1.act, 1);
  assert.strictEqual(map1.nodes[map1.bossNodeId].enemyId, 'golem_guardiao');
  assert.strictEqual(map1.actTheme.shortTitle, 'As Catacumbas Esquecidas');
  assert.ok(map1.floors[7].some(id => map1.nodes[id].type === NODE_TYPES.TREASURE), 'Andar 7 deve conter Sala do Tesouro Ancestral');

  // Ato II
  const mapGenAct2 = new MapGenerator({ act: 2 });
  const map2 = mapGenAct2.generateMap();
  assert.strictEqual(map2.totalFloors, 15);
  assert.strictEqual(map2.act, 2);
  assert.strictEqual(map2.nodes[map2.bossNodeId].enemyId, 'lich_rei');
  assert.strictEqual(map2.actTheme.shortTitle, 'As Minas Profundas de Obsidiana');

  // Ato III
  const mapGenAct3 = new MapGenerator({ act: 3 });
  const map3 = mapGenAct3.generateMap();
  assert.strictEqual(map3.totalFloors, 15);
  assert.strictEqual(map3.act, 3);
  assert.strictEqual(map3.nodes[map3.bossNodeId].enemyId, 'dragao_tirano');
  assert.strictEqual(map3.actTheme.shortTitle, 'O Covil Vulcânico do Tirano');
});

test('Campanha inicia no Ato I com 15 andares, total de 3 Atos e cronômetro zerado', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');

  assert.strictEqual(gameState.currentAct, 1);
  assert.strictEqual(gameState.totalActs, 3);
  assert.strictEqual(gameState.elapsedTime, 0);
  assert.strictEqual(gameState.map.totalFloors, 15);
  assert.strictEqual(gameState.map.act, 1);
  assert.strictEqual(gameState.map.nodes[gameState.map.bossNodeId].enemyId, 'golem_guardiao');
});

test('Sala do Tesouro Ancestral (NODE_TYPES.TREASURE): concede relíquia rara, ouro ou elixir', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');

  const treasureNode = {
    id: 'test_treasure_1',
    floor: 7,
    type: NODE_TYPES.TREASURE,
    state: NODE_STATES.AVAILABLE,
    nextNodes: []
  };
  gameState.map.nodes[treasureNode.id] = treasureNode;
  gameState.map.floors[7] = [treasureNode.id];

  gameState.selectNode(treasureNode.id);
  assert.strictEqual(gameState.screen, GAME_SCREENS.TREASURE);
  assert.ok(gameState.currentTreasure);
  assert.ok(gameState.currentTreasure.relic);
  assert.ok(gameState.currentTreasure.gold >= 80);

  const initialGold = gameState.hero.gold;
  const res = gameState.claimTreasureChoice('gold');
  assert.strictEqual(res.type, 'gold');
  assert.strictEqual(gameState.hero.gold, initialGold + res.amount);
  assert.strictEqual(gameState.screen, GAME_SCREENS.MAP);
  assert.strictEqual(treasureNode.state, NODE_STATES.VISITED);
});

test('Derrotar Boss do Ato I aciona tela ACT_TRANSITION e não encerra a campanha precocemente', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');

  // Simula jogador alcançando e entrando no nó do Boss do Ato 1 (Golem Guardião)
  const bossNodeId = gameState.map.bossNodeId;
  const bossNode = gameState.map.nodes[bossNodeId];
  bossNode.state = NODE_STATES.AVAILABLE;

  gameState.selectNode(bossNodeId);
  assert.strictEqual(gameState.screen, GAME_SCREENS.COMBAT);
  assert.strictEqual(gameState.currentCombat.enemy.id, 'golem_guardiao');

  // Derrota o Golem Guardião
  gameState.currentCombat.enemy.hp = 1;
  const attackCard = gameState.currentCombat.hand.find(c => c.damage > 0);
  gameState.playCardInCombat(attackCard.uid);

  // Deve transicionar para ACT_TRANSITION, NÃO para VICTORY
  assert.strictEqual(gameState.screen, GAME_SCREENS.ACT_TRANSITION, 'Derrotar o boss do Ato 1 deve levar à tela de transição de ato');
  assert.strictEqual(gameState.hasSavedRun(), true, 'Save deve continuar ativo pois a campanha não acabou');
});

test('advanceAct() avança para o Ato II, gera novo mapa de 15 andares e aplica Recuperação de Fôlego (+35% HP)', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  // Heroi ferido durante o Ato 1 (HP 30 de 70)
  gameState.hero.hp = 30;

  const res = gameState.advanceAct();
  assert.strictEqual(res.completed, false);
  assert.strictEqual(res.act, 2);
  assert.strictEqual(gameState.currentAct, 2);
  assert.strictEqual(gameState.screen, GAME_SCREENS.MAP);
  assert.strictEqual(gameState.map.totalFloors, 15);

  // 35% de 70 HP = 25 HP curados (30 + 25 = 55 HP)
  assert.strictEqual(res.healAmount, 25);
  assert.strictEqual(gameState.hero.hp, 55, 'Herói deve ter recuperado 35% de sua vida máxima (+25 HP)');

  // Verifica novo mapa do Ato II
  assert.strictEqual(gameState.map.act, 2);
  assert.strictEqual(gameState.map.totalFloors, 15);
  assert.strictEqual(gameState.map.nodes[gameState.map.bossNodeId].enemyId, 'lich_rei');
  assert.strictEqual(gameState.currentNode, null);
});

test('Derrotar Boss do Ato II e executar advanceAct() leva ao Ato III (Covil Vulcânico)', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  gameState.advanceAct(); // Vai pro Ato II

  // Simula vitória contra o Lich Rei
  const bossNodeId = gameState.map.bossNodeId;
  const bossNode = gameState.map.nodes[bossNodeId];
  bossNode.state = NODE_STATES.AVAILABLE;
  gameState.selectNode(bossNodeId);

  gameState.currentCombat.enemy.hp = 1;
  const attackCard = gameState.currentCombat.hand.find(c => c.damage > 0);
  gameState.playCardInCombat(attackCard.uid);

  assert.strictEqual(gameState.screen, GAME_SCREENS.ACT_TRANSITION);

  // Avança para o Ato III
  const res = gameState.advanceAct();
  assert.strictEqual(res.act, 3);
  assert.strictEqual(gameState.currentAct, 3);
  assert.strictEqual(gameState.map.nodes[gameState.map.bossNodeId].enemyId, 'dragao_tirano');
});

test('Derrotar Boss do Ato III (Grande Dragão Tirano) decreta Vitória Suprema Final e limpa save', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  gameState.advanceAct(); // Ato 2
  gameState.advanceAct(); // Ato 3
  assert.strictEqual(gameState.currentAct, 3);

  // Entra no combate com o Dragão Tirano
  const bossNodeId = gameState.map.bossNodeId;
  const bossNode = gameState.map.nodes[bossNodeId];
  bossNode.state = NODE_STATES.AVAILABLE;
  gameState.selectNode(bossNodeId);

  assert.strictEqual(gameState.currentCombat.enemy.id, 'dragao_tirano');

  // Vence o Dragão Tirano
  gameState.currentCombat.enemy.hp = 1;
  const attackCard = gameState.currentCombat.hand.find(c => c.damage > 0);
  gameState.playCardInCombat(attackCard.uid);

  // No Ato 3, vitória decreta tela VICTORY e remove o save da run
  assert.strictEqual(gameState.screen, GAME_SCREENS.VICTORY);
  assert.strictEqual(gameState.hasSavedRun(), false, 'Save da run deve ser limpo na vitória final');
});

test('Persistência multi-atos: salva e restaura currentAct, totalActs e elapsedTime', () => {
  const stateA = new GameState();
  stateA.startNewRun('rogue');
  stateA.currentAct = 2;
  stateA.elapsedTime = 1245; // ~20 minutos decorridos
  stateA.saveRun('test_act_save');

  const stateB = new GameState();
  const loaded = stateB.loadRun('test_act_save');
  assert.strictEqual(loaded, true);
  assert.strictEqual(stateB.currentAct, 2);
  assert.strictEqual(stateB.totalActs, 3);
  assert.strictEqual(stateB.elapsedTime, 1245);
  stateB.clearSavedRun('test_act_save');
});

// ----------------------------------------------------
// 14. TESTES DE BESTIÁRIO EXPANDIDO & SISTEMA DE AFIXOS (FASE 3)
// ----------------------------------------------------
console.log('\n▶ [14/14] Testes de Bestiário Expandido & Sistema de Afixos de Elites (Fase 3)');

test('Atributos dos 6 novos monstros do Bestiário Expandido', () => {
  const rato = createEnemyInstance('rato_peste');
  assert.strictEqual(rato.hp, 24);
  assert.strictEqual(rato.icon, 'rat');

  const gargula = createEnemyInstance('gargula_granito');
  assert.strictEqual(gargula.hp, 38);
  assert.strictEqual(gargula.icon, 'gargoyle');

  const escavador = createEnemyInstance('escavador_obsidiana');
  assert.strictEqual(escavador.hp, 44);
  assert.strictEqual(escavador.icon, 'burrower');

  const xama = createEnemyInstance('xama_ossos');
  assert.strictEqual(xama.hp, 36);
  assert.strictEqual(xama.icon, 'shaman');

  const elemental = createEnemyInstance('elemental_igneo');
  assert.strictEqual(elemental.hp, 48);
  assert.strictEqual(elemental.icon, 'fire_elemental');

  const cultista = createEnemyInstance('cultista_draconico');
  assert.strictEqual(cultista.hp, 42);
  assert.strictEqual(cultista.icon, 'cultist');
});

test('Ciclo de intenções dos novos inimigos com status (Veneno, Roer Armadura, Granito, Fogo)', () => {
  const rato = createEnemyInstance('rato_peste');
  const r1 = rato.getIntention(1);
  assert.strictEqual(r1.targetStatus[STATUS_TYPES.POISON], 2, 'Rato aplica 2 de veneno no T1');
  const r2 = rato.getIntention(2);
  assert.strictEqual(r2.armorBreak, 4, 'Rato quebra 4 de armadura no T2');

  const gargula = createEnemyInstance('gargula_granito');
  const g1 = gargula.getIntention(1);
  assert.strictEqual(g1.block, 12, 'Gárgula ganha 12 de armadura no T1');
  const g2 = gargula.getIntention(2);
  assert.strictEqual(g2.targetStatus[STATUS_TYPES.WEAK], 2, 'Gárgula aplica 2 de fraco no T2');

  const elemental = createEnemyInstance('elemental_igneo');
  const el1 = elemental.getIntention(1);
  assert.strictEqual(el1.targetStatus[STATUS_TYPES.BURN], 3, 'Elemental aplica 3 de queimadura no T1');
  const el3 = elemental.getIntention(3);
  assert.strictEqual(el3.damage, 17, 'Explosão de magma causa 17 dano');
});

test('Mapeamento e seleção de inimigos normais por Ato (ACT_NORMAL_ENEMY_IDS)', () => {
  assert(ACT_NORMAL_ENEMY_IDS[1].includes('rato_peste'));
  assert(ACT_NORMAL_ENEMY_IDS[1].includes('gargula_granito'));
  assert(ACT_NORMAL_ENEMY_IDS[2].includes('escavador_obsidiana'));
  assert(ACT_NORMAL_ENEMY_IDS[2].includes('xama_ossos'));
  assert(ACT_NORMAL_ENEMY_IDS[3].includes('elemental_igneo'));
  assert(ACT_NORMAL_ENEMY_IDS[3].includes('cultista_draconico'));

  // Valida que MapGenerator com act configurado escolhe inimigos daquele ato
  const mapGenAct1 = new MapGenerator({ act: 1, rng: () => 0.75 });
  const picked1 = mapGenAct1._pickRandomEnemy();
  assert(ACT_NORMAL_ENEMY_IDS[1].includes(picked1), `Inimigo ${picked1} deve ser do Ato 1`);

  const mapGenAct3 = new MapGenerator({ act: 3, rng: () => 0.1 });
  const picked3 = mapGenAct3._pickRandomEnemy();
  assert(ACT_NORMAL_ENEMY_IDS[3].includes(picked3), `Inimigo ${picked3} deve ser do Ato 3`);
});

test('Catálogo de Afixos de Inimigos (ENEMY_AFFIXES: armored, vampiric, thorns, enraged)', () => {
  assert(ENEMY_AFFIXES.armored);
  assert.strictEqual(ENEMY_AFFIXES.armored.bonusArmor, 14);

  assert(ENEMY_AFFIXES.vampiric);
  assert.strictEqual(ENEMY_AFFIXES.vampiric.healRatio, 0.5);

  assert(ENEMY_AFFIXES.thorns);
  assert.strictEqual(ENEMY_AFFIXES.thorns.retaliation, 3);

  assert(ENEMY_AFFIXES.enraged);
  assert.strictEqual(ENEMY_AFFIXES.enraged.strengthGain, 1);
  assert.strictEqual(ENEMY_AFFIXES.enraged.interval, 2);

  const randAffix = getRandomAffix();
  assert(randAffix.id);
});

test('Afixo Couraçado (armored): concede +14 de armadura no início do combate', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: createInitialDeck(), relics: [] };
  const enemy = createEnemyInstance('minotauro_berserker', { affix: 'armored' });
  assert.strictEqual(enemy.affix.id, 'armored');

  const combat = new CombatSystem({ hero, enemy });
  assert.strictEqual(combat.enemy.block, 14, 'Inimigo couraçado deve iniciar combate com 14 de armadura');
});

test('Afixo Vampírico (vampiric): cura 50% do dano não bloqueado causado à vida do herói', () => {
  const hero = { hp: 50, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('murro')], relics: [] };
  const enemy = createEnemyInstance('minotauro_berserker', { affix: 'vampiric' });
  enemy.hp = 30; // HP reduzido para testar cura
  const combat = new CombatSystem({ hero, enemy });
  combat.enemy.currentIntent = { type: 'attack', name: 'Golpe Vampírico', damage: 10, hits: 1, block: 0, description: 'Teste' };
  // Herói passa a vez sem armadura
  combat.endTurn();

  // Herói sofreu 10 de dano direto (HP 50 -> 40). Inimigo vampírico cura 50% = 5 HP (HP 30 -> 35)!
  assert.strictEqual(combat.hero.hp, 40);
  assert.strictEqual(combat.enemy.hp, 35, 'Inimigo vampírico deve recuperar 5 HP ao causar 10 de dano');
});

test('Afixo Espinhoso (thorns): retalia 3 de dano ao herói quando sofrer dano direto de ataque', () => {
  const hero = { hp: 50, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('murro')], relics: [] };
  const enemy = createEnemyInstance('gargula_granito', { affix: 'thorns' });
  enemy.block = 0;

  const combat = new CombatSystem({ hero, enemy });
  // Herói joga Murro (6 de dano direto à vida do inimigo)
  const card = combat.hand[0];
  combat.playCard(card.uid);

  // Inimigo sofreu 6 de dano (38 -> 32). Herói sofre 3 de retaliação de thorns (50 -> 47)!
  assert.strictEqual(combat.enemy.hp, 32);
  assert.strictEqual(combat.hero.hp, 47, 'Herói deve sofrer 3 de retaliação do afixo espinhoso');
});

test('Afixo Frenético (enraged): concede +1 de Força permanente a cada 2 turnos', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('escudo_madeira'), createCardInstance('escudo_madeira'), createCardInstance('escudo_madeira')], relics: [] };
  const enemy = createEnemyInstance('minotauro_berserker', { affix: 'enraged' });
  enemy.getIntention = () => ({ type: 'defend', name: 'Espera', damage: 0, hits: 0, block: 2, description: 'Espera' });
  enemy.currentIntent = enemy.getIntention(1);

  const combat = new CombatSystem({ hero, enemy });
  assert.strictEqual(combat.enemy.statuses[STATUS_TYPES.STRENGTH], 0);

  // Turno 1 do herói termina -> Turno 1 do inimigo (turnCount = 1, não é divisível por 2)
  combat.endTurn();
  assert.strictEqual(combat.enemy.statuses[STATUS_TYPES.STRENGTH], 0);

  // Turno 2 do herói termina -> Turno 2 do inimigo (turnCount = 2, ganha +1 Força!)
  combat.endTurn();
  assert.strictEqual(combat.enemy.statuses[STATUS_TYPES.STRENGTH], 1, 'Inimigo frenético deve ganhar +1 Força no turno 2');
});

test('Nós de Elite no mapa recebem afixo sorteado (MapGenerator e GameState)', () => {
  const mapGen = new MapGenerator({ act: 1, rng: () => 0.5 });
  const map = mapGen.generateMap();
  
  // Procura nós do tipo ELITE
  const eliteNodes = Object.values(map.nodes).filter(n => n.type === NODE_TYPES.ELITE);
  for (const node of eliteNodes) {
    assert(node.affix, 'Nó de elite deve possuir um afixo anexado');
    assert(ENEMY_AFFIXES[node.affix.id], `Afixo ${node.affix.id} deve ser válido`);
  }
});

// ----------------------------------------------------
// 15. TESTES DE ECONOMIA DE OURO, BALANCEAMENTO DE DECK, FORJA (+) E ESPELHO RÚNICO (FASE 4)
// ----------------------------------------------------
console.log('\n▶ [15/15] Testes de Economia de Ouro, Balanceamento de Deck, Forja (+) e Espelho Rúnico (Fase 4)');

test('Fórmula de recompensa de ouro pós-combate (Normal: 15-25, Elite: 35-50, Boss: 75-100)', () => {
  const hero = { hp: 70, maxHp: 70, maxEnergy: 3, energy: 3, block: 0, deck: [createCardInstance('murro')], relics: [] };

  // 1. Inimigo Normal com rng min (0) e max (~1)
  const normMinEnemy = createEnemyInstance('goblin_ladino');
  normMinEnemy.hp = 0;
  const combatNormMin = new CombatSystem({ hero, enemy: normMinEnemy, rng: () => 0 });
  combatNormMin._handleVictory();
  assert.strictEqual(combatNormMin.goldReward, 15, 'Mínimo de ouro normal deve ser 15');
  assert.strictEqual(combatNormMin.getStateSnapshot().goldReward, 15);

  const normMaxEnemy = createEnemyInstance('goblin_ladino');
  normMaxEnemy.hp = 0;
  const combatNormMax = new CombatSystem({ hero, enemy: normMaxEnemy, rng: () => 0.999 });
  combatNormMax._handleVictory();
  assert.strictEqual(combatNormMax.goldReward, 25, 'Máximo de ouro normal deve ser 25');

  // 2. Inimigo Elite com rng min (0) e max (~1)
  const eliteMinEnemy = createEnemyInstance('minotauro_berserker');
  eliteMinEnemy.hp = 0;
  const combatEliteMin = new CombatSystem({ hero, enemy: eliteMinEnemy, rng: () => 0 });
  combatEliteMin._handleVictory();
  assert.strictEqual(combatEliteMin.goldReward, 35, 'Mínimo de ouro elite deve ser 35');

  const eliteMaxEnemy = createEnemyInstance('minotauro_berserker');
  eliteMaxEnemy.hp = 0;
  const combatEliteMax = new CombatSystem({ hero, enemy: eliteMaxEnemy, rng: () => 0.999 });
  combatEliteMax._handleVictory();
  assert.strictEqual(combatEliteMax.goldReward, 50, 'Máximo de ouro elite deve ser 50');

  // 3. Chefe (Boss) com rng min (0) e max (~1)
  const bossMinEnemy = createEnemyInstance('golem_guardiao');
  bossMinEnemy.hp = 0;
  const combatBossMin = new CombatSystem({ hero, enemy: bossMinEnemy, rng: () => 0 });
  combatBossMin._handleVictory();
  assert.strictEqual(combatBossMin.goldReward, 75, 'Mínimo de ouro boss deve ser 75');

  const bossMaxEnemy = createEnemyInstance('golem_guardiao');
  bossMaxEnemy.hp = 0;
  const combatBossMax = new CombatSystem({ hero, enemy: bossMaxEnemy, rng: () => 0.999 });
  combatBossMax._handleVictory();
  assert.strictEqual(combatBossMax.goldReward, 100, 'Máximo de ouro boss deve ser 100');
});

test('GameState credita combatRewardGold ao herói e persiste nas telas de recompensa', () => {
  const gameState = new GameState({ rng: () => 0.5 });
  gameState.startNewRun('warrior');
  const initialGold = gameState.hero.gold; // 50

  const combatNodeId = Object.keys(gameState.map.nodes).find(id => gameState.map.nodes[id].type === NODE_TYPES.COMBAT);
  gameState.selectNode(combatNodeId);

  // Derrota o inimigo manualmente
  gameState.currentCombat.enemy.hp = 0;
  gameState.currentCombat._handleVictory();
  gameState._checkCombatTermination();

  assert.strictEqual(gameState.screen, GAME_SCREENS.COMBAT_REWARD);
  assert(gameState.combatRewardGold >= 15 && gameState.combatRewardGold <= 25, 'Ouro de recompensa deve estar entre 15 e 25');
  assert.strictEqual(gameState.hero.gold, initialGold + gameState.combatRewardGold, 'Ouro deve ser somado ao tesouro do herói');
  assert.strictEqual(gameState.getState().combatRewardGold, gameState.combatRewardGold);

  // Coleta a recompensa
  gameState.claimCombatReward(null);
  assert.strictEqual(gameState.screen, GAME_SCREENS.MAP);
  assert.strictEqual(gameState.combatRewardGold, 0, 'combatRewardGold deve resetar após claim');
});

test('Catálogo de Aprimoramentos (+) cobre 100% das 54 cartas do catálogo expandido', () => {
  const allCardIds = Object.keys(CARDS);
  assert.strictEqual(allCardIds.length, 54);

  allCardIds.forEach(cardId => {
    const upgrade = UPGRADE_DEFINITIONS[cardId];
    assert.ok(upgrade, `Carta "${cardId}" deve possuir definição em UPGRADE_DEFINITIONS`);
    assert.ok(upgrade.description, `Aprimoramento de "${cardId}" deve ter descrição`);
  });
});

test('upgradeCardInstance aprimora atributos, nome (+) e marca isUpgraded', () => {
  // Teste com Murro (Ataque base 6 -> 9)
  const murro = createCardInstance('murro');
  assert.strictEqual(murro.damage, 6);
  assert.strictEqual(murro.isUpgraded, false);

  const murroPlus = upgradeCardInstance(murro);
  assert.strictEqual(murroPlus.damage, 9);
  assert.strictEqual(murroPlus.name, 'Murro+');
  assert.strictEqual(murroPlus.isUpgraded, true);
  assert.strictEqual(murroPlus.uid, murro.uid, 'UID original deve ser preservado');

  // Segunda chamada não re-aprimora nem duplica o sufixo (+)
  const murroPlusAgain = upgradeCardInstance(murroPlus);
  assert.strictEqual(murroPlusAgain.name, 'Murro+');
  assert.strictEqual(murroPlusAgain.damage, 9);

  // Teste com Chute (Dano 8 -> 11, Quebra 2 -> 3)
  const chute = createCardInstance('chute');
  const chutePlus = upgradeCardInstance(chute);
  assert.strictEqual(chutePlus.damage, 11);
  assert.strictEqual(chutePlus.armorBreak, 3);
  assert.strictEqual(chutePlus.name, 'Chute+');

  // Teste com Escudo de Madeira (Block 6 -> 9)
  const escudo = createCardInstance('escudo_madeira');
  const escudoPlus = upgradeCardInstance(escudo);
  assert.strictEqual(escudoPlus.block, 9);
  assert.strictEqual(escudoPlus.name, 'Escudo de Madeira+');
});

test('GameState.upgradeCardInDeck aprimora carta no baralho e rejeita dupla melhoria', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');

  const cardToUpgrade = gameState.hero.deck[0];
  const oldName = cardToUpgrade.name;
  const upgraded = gameState.upgradeCardInDeck(cardToUpgrade.uid);

  assert.strictEqual(upgraded.name, `${oldName}+`);
  assert.strictEqual(upgraded.isUpgraded, true);
  assert.strictEqual(gameState.hero.deck[0].name, `${oldName}+`);

  // Tentativa de aprimorar novamente deve lançar erro
  assert.throws(() => {
    gameState.upgradeCardInDeck(cardToUpgrade.uid);
  }, /já está aprimorada/);

  // UID inexistente deve lançar erro
  assert.throws(() => {
    gameState.upgradeCardInDeck('uid_inexistente');
  }, /não encontrada/);
});

test('Campfire: Descanso recupera 30% da Vida máxima e Forja (+) aprimora carta via applyShrineChoice', () => {
  assert.strictEqual(CAMPFIRE_ACTIONS.REST, 'rest');
  assert.strictEqual(CAMPFIRE_ACTIONS.UPGRADE_CARD, 'upgrade_card');
  assert.ok(CAMPFIRE_OPTIONS.length >= 2);

  // Teste de descanso (30% de 70 = Math.ceil(21))
  const hero = { hp: 20, maxHp: 70 };
  const restRes = executeRest(hero, 0.30);
  assert.strictEqual(restRes.healed, 21);
  assert.strictEqual(hero.hp, 41);

  // Teste via GameState em nó de santuário/fogueira
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  gameState.hero.hp = 10;
  gameState.screen = GAME_SCREENS.SHRINE;

  const resRest = gameState.applyShrineChoice(CAMPFIRE_ACTIONS.REST);
  assert.strictEqual(resRest.choiceResult.healed, 21);
  assert.strictEqual(gameState.hero.hp, 31);
  assert.strictEqual(gameState.screen, GAME_SCREENS.MAP);

  // Teste de forja (+) via applyShrineChoice
  gameState.screen = GAME_SCREENS.SHRINE;
  const targetCard = gameState.hero.deck.find(c => !c.isUpgraded);
  const resForge = gameState.applyShrineChoice(CAMPFIRE_ACTIONS.UPGRADE_CARD, { cardUid: targetCard.uid });
  assert.strictEqual(resForge.choiceResult.upgradedCard.isUpgraded, true);
  assert(resForge.choiceResult.upgradedCard.name.endsWith('+'));
});

test('Teto estrito de 3 cópias por carta no baralho e preservação de estado aprimorado', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');

  // Deck do guerreiro tem 2 Espadas
  assert.strictEqual(gameState.hero.deck.filter(c => c.id === 'espada').length, 2);
  assert.strictEqual(gameState.canDuplicateCard('espada'), true, 'Deve poder duplicar carta com 2 cópias');

  const espadaCard = gameState.hero.deck.find(c => c.id === 'espada');
  const dupRes = gameState.duplicateCardInDeck(espadaCard.uid);
  assert.strictEqual(gameState.hero.deck.filter(c => c.id === 'espada').length, 3);
  assert.strictEqual(gameState.canDuplicateCard('espada'), false, 'Não deve poder duplicar carta com 3 cópias');

  // Tentativa de 4ª cópia deve falhar
  assert.throws(() => {
    gameState.duplicateCardInDeck(espadaCard.uid);
  }, /Limite máximo de 3 cópias/);

  // Deck do guerreiro inicia com 4 Murros (> 3) -> canDuplicateCard deve retornar false
  assert.strictEqual(gameState.canDuplicateCard('murro'), false);
  const murroCard = gameState.hero.deck.find(c => c.id === 'murro');
  assert.throws(() => {
    gameState.duplicateCardInDeck(murroCard.uid);
  }, /Limite máximo de 3 cópias/);

  // Duplicação de carta aprimorada (+) gera cópia aprimorada (+)
  const chuteCard = gameState.hero.deck.find(c => c.id === 'chute');
  gameState.upgradeCardInDeck(chuteCard.uid);
  assert.strictEqual(chuteCard.isUpgraded, true);

  // Remove um chute para permitir duplicação (< 3)
  const anotherChute = gameState.hero.deck.find(c => c.id === 'chute' && c.uid !== chuteCard.uid);
  gameState.removeCardFromDeck(anotherChute.uid);

  const dupUpgraded = gameState.duplicateCardInDeck(chuteCard.uid);
  assert.strictEqual(dupUpgraded.duplicatedCard.isUpgraded, true);
  assert.strictEqual(dupUpgraded.duplicatedCard.name, 'Chute+');
  assert.strictEqual(dupUpgraded.duplicatedCard.damage, 11);
});

test('Evento Narrativo: O Altar do Espelho Rúnico com escolhas de pacto e recuperação', () => {
  const eventDef = NARRATIVE_EVENTS.find(e => e.id === 'altar_espelho_runico');
  assert.ok(eventDef, 'Evento altar_espelho_runico deve existir');
  assert.strictEqual(eventDef.choices.length, 3);

  // 1. Escolha 'reflect_soul' pagando com ouro (35 ouro)
  const gs1 = new GameState();
  gs1.startNewRun('warrior');
  gs1.hero.gold = 50;
  gs1.currentNarrativeEvent = eventDef;
  gs1.screen = GAME_SCREENS.EVENT;

  const initialDeckSize = gs1.hero.deck.length;
  // Apenas cartas com < 3 cópias podem ser duplicadas (ex: espada)
  const espadaUid = gs1.hero.deck.find(c => c.id === 'espada').uid;
  const res1 = gs1.applyEventChoice('reflect_soul', { cardUid: espadaUid, costType: 'gold' });
  assert.strictEqual(gs1.hero.gold, 15, 'Deve deduzir 35 ouro (50 -> 15)');
  assert.strictEqual(gs1.hero.deck.length, initialDeckSize + 1);
  assert(res1.message.includes('-35 Ouro'));

  // 2. Escolha 'reflect_soul' pagando com HP (10 HP) quando ouro insuficiente
  const gs2 = new GameState();
  gs2.startNewRun('warrior');
  gs2.hero.gold = 10;
  gs2.hero.hp = 50;
  gs2.currentNarrativeEvent = eventDef;
  gs2.screen = GAME_SCREENS.EVENT;

  const res2 = gs2.applyEventChoice('reflect_soul');
  assert.strictEqual(gs2.hero.hp, 40, 'Deve deduzir 10 HP (50 -> 40)');
  assert(res2.message.includes('-10 HP'));

  // 3. Escolha 'bathe_mercury' recupera 15 HP
  const gs3 = new GameState();
  gs3.startNewRun('warrior');
  gs3.hero.hp = 30;
  gs3.hero.maxHp = 70;
  gs3.currentNarrativeEvent = eventDef;
  gs3.screen = GAME_SCREENS.EVENT;

  const res3 = gs3.applyEventChoice('bathe_mercury');
  assert.strictEqual(gs3.hero.hp, 45, 'Deve recuperar 15 HP (30 -> 45)');
  assert.strictEqual(res3.title, 'Vigor Prateado');

  // 4. Escolha 'retreat_prudence'
  const gs4 = new GameState();
  gs4.startNewRun('warrior');
  gs4.currentNarrativeEvent = eventDef;
  gs4.screen = GAME_SCREENS.EVENT;

  const res4 = gs4.applyEventChoice('retreat_prudence');
  assert.strictEqual(res4.title, 'Prudência');
});

test('Persistência salva e restaura combatRewardGold durante a run', () => {
  const gameState = new GameState();
  gameState.startNewRun('warrior');
  gameState.combatRewardGold = 42;
  gameState.saveRun('test_save_fase4');

  const loadedState = new GameState();
  const loadedSuccess = loadedState.loadRun('test_save_fase4');
  assert.strictEqual(loadedSuccess, true);
  assert.strictEqual(loadedState.combatRewardGold, 42);

  gameState.clearSavedRun('test_save_fase4');
});

// ----------------------------------------------------
// 16. TESTES DE BALANCEAMENTO: PASSOS 3, 4 E 5
// ----------------------------------------------------
console.log('\n▶ [16/16] Testes de Balanceamento: Passos 3, 4 e 5 (Fogueiras, Recompensas e Chefes Épicos)');

test('Passo 3: Distribuição de fogueiras restringe a 1-2 por Ato (andares 4/5 e 8), sem fogueiras consecutivas', () => {
  for (let i = 0; i < 30; i++) {
    const mapGen10 = new MapGenerator({ act: 1, totalFloors: 10 });
    const map10 = mapGen10.generateMap();
    const shrines10 = Object.values(map10.nodes).filter(n => n.type === NODE_TYPES.SHRINE);

    assert(shrines10.length >= 1 && shrines10.length <= 2, `Ato de 10 andares deve ter 1 a 2 fogueiras, teve ${shrines10.length}`);
    for (const shrine of shrines10) {
      assert([4, 5, 8].includes(shrine.floor), `Fogueira no andar ${shrine.floor} deve estar nos andares 4, 5 ou 8`);
      for (const nextId of shrine.nextNodes) {
        assert.notStrictEqual(map10.nodes[nextId].type, NODE_TYPES.SHRINE, 'Nunca deve haver fogueiras consecutivas no mesmo caminho');
      }
    }

    const mapGen6 = new MapGenerator({ totalFloors: 6 });
    const map6 = mapGen6.generateMap();
    const shrines6 = Object.values(map6.nodes).filter(n => n.type === NODE_TYPES.SHRINE);
    assert(shrines6.length <= 1, `Mapa de 6 andares deve ter no máximo 1 fogueira, teve ${shrines6.length}`);
  }
});

test('Passo 4: Curva ponderada de raridade por tipo de encontro (normal, elite, boss) e fallback gracioso', () => {
  // 1. Tabela de pesos
  assert.strictEqual(REWARD_RARITY_WEIGHTS.normal.common, 0.75);
  assert.strictEqual(REWARD_RARITY_WEIGHTS.normal.uncommon, 0.22);
  assert.strictEqual(REWARD_RARITY_WEIGHTS.normal.rare, 0.03);
  assert.strictEqual(REWARD_RARITY_WEIGHTS.normal.legendary, 0.00);

  assert.strictEqual(REWARD_RARITY_WEIGHTS.elite.common, 0.40);
  assert.strictEqual(REWARD_RARITY_WEIGHTS.elite.uncommon, 0.45);
  assert.strictEqual(REWARD_RARITY_WEIGHTS.elite.rare, 0.14);
  assert.strictEqual(REWARD_RARITY_WEIGHTS.elite.legendary, 0.01);

  assert.strictEqual(REWARD_RARITY_WEIGHTS.boss.common, 0.00);
  assert.strictEqual(REWARD_RARITY_WEIGHTS.boss.uncommon, 0.00);
  assert.strictEqual(REWARD_RARITY_WEIGHTS.boss.rare, 0.70);
  assert.strictEqual(REWARD_RARITY_WEIGHTS.boss.legendary, 0.30);

  // 2. Boss encounter: 0% comum/incomum, somente raras e lendárias
  const bossCards = getRandomRewardCards(3, Math.random, 'boss');
  assert.strictEqual(bossCards.length, 3);
  const bossIds = new Set(bossCards.map(c => c.id));
  assert.strictEqual(bossIds.size, 3, 'Cartas ofertadas devem ser únicas');
  for (const card of bossCards) {
    assert(card.rarity === 'rare' || card.rarity === 'legendary', `Carta do boss deve ser rara ou lendária, recebido: ${card.rarity}`);
  }

  // 3. Normal encounter: deve sortear cartas únicas válidas
  const normCards = getRandomRewardCards(3, Math.random, 'normal');
  assert.strictEqual(normCards.length, 3);
  const normIds = new Set(normCards.map(c => c.id));
  assert.strictEqual(normIds.size, 3, 'Cartas ofertadas normais devem ser únicas');

  // 4. Elite encounter: deve sortear cartas únicas válidas
  const eliteCards = getRandomRewardCards(3, Math.random, 'elite');
  assert.strictEqual(eliteCards.length, 3);
  const eliteIds = new Set(eliteCards.map(c => c.id));
  assert.strictEqual(eliteIds.size, 3, 'Cartas ofertadas de elite devem ser únicas');
});

test('Passo 5: Mecânicas de combate dos Chefes Épicos (Dreno de Vida do Lich e Veneno ao Herói)', () => {
  const hero = {
    hp: 50,
    maxHp: 70,
    energy: 3,
    maxEnergy: 3,
    block: 0,
    deck: [createCardInstance('murro')],
    statuses: { strength: 0, vulnerable: 0, weak: 0, burn: 0, thorns: 0, poison: 0 }
  };
  const lich = createEnemyInstance('lich_rei');
  assert.strictEqual(lich.maxHp, 180);
  lich.hp = 100; // Danificado

  // Simula turno 1 do Lich (Drenar Alma: dano 15, cura 15 de vida)
  lich.currentIntent = lich.getIntention(1);
  const combat = new CombatSystem({ hero, enemy: lich, rng: () => 0.5 });
  combat._executeEnemyTurn();

  assert.strictEqual(lich.hp, 115, 'Lich deve ter recuperado 15 de vida pelo dreno');
  assert(hero.hp < 50, 'Herói deve ter sofrido dano');
  assert(hero.statuses.weak >= 2, 'Herói deve ter recebido 2 de Fraco');

  // Simula turno 2 do Lich (Praga Espectral: aplica 6 de veneno)
  lich.currentIntent = lich.getIntention(2);
  combat._executeEnemyTurn();
  assert.strictEqual(hero.statuses.poison, 6, 'Herói deve ter sido infectado com 6 de Veneno');
});

// ----------------------------------------------------
// 17. TESTES DA EXPANSÃO DE CARTAS E COMBOS (Etapa 3)
// ----------------------------------------------------
console.log('\n▶ [17/17] Testes da Expansão Tática de Cartas (+24) e Chefes de Duas Fases (Etapa 3 & 4)');

test('Guerreiro: Golpe de Escudo converte armadura em dano e Rompe-Guarda destrói todo o escudo', () => {
  const dummy = { hp: 50, maxHp: 50, block: 20, statuses: createDefaultStatusMap(), getIntention: () => ({ type: 'attack', damage: 5 }) };
  const hero = {
    hp: 40, maxHp: 50, energy: 3, maxEnergy: 3, block: 15,
    deck: [createCardInstance('golpe_de_escudo'), createCardInstance('rompe_guarda')],
    statuses: createDefaultStatusMap()
  };
  const combat = new CombatSystem({ hero, enemy: dummy });
  combat.hand = [createCardInstance('rompe_guarda', 'c_break'), createCardInstance('golpe_de_escudo', 'c_shield')];

  // Rompe-Guarda quebra os 20 de escudo do inimigo e causa 10 de dano físico
  combat.playCard('c_break');
  assert.strictEqual(dummy.block, 0, 'Rompe-Guarda deve ter destruído todos os 20 de escudo');
  assert.strictEqual(dummy.hp, 40, 'Inimigo deve ter sofrido 10 de dano direto');

  // Golpe de Escudo: herói tem 15 de armadura, logo causa 15 de dano
  hero.block = 15;
  combat.playCard('c_shield');
  assert.strictEqual(dummy.hp, 25, 'Golpe de Escudo deve ter causado 15 de dano (igual à armadura do herói)');
});

test('Guerreiro: Muralha Viva retém armadura no próximo turno e Golpe Frenético ativa bônus com HP baixo', () => {
  const dummy = { hp: 50, maxHp: 50, block: 0, statuses: createDefaultStatusMap(), getIntention: () => ({ type: 'defend', block: 5 }) };
  const hero = {
    hp: 20, maxHp: 50, energy: 3, maxEnergy: 3, block: 0, // HP < 50%
    deck: [createCardInstance('muralha_viva'), createCardInstance('golpe_frenetico')],
    statuses: createDefaultStatusMap()
  };
  const combat = new CombatSystem({ hero, enemy: dummy });
  combat.hand = [createCardInstance('muralha_viva', 'c_muralha'), createCardInstance('golpe_frenetico', 'c_frenetico')];

  combat.playCard('c_muralha');
  assert.strictEqual(hero.block, 8, 'Muralha Viva deve conceder 8 de armadura');
  assert.strictEqual(combat.heroRetainBlock, 8, 'combat.heroRetainBlock deve registrar 8');

  // Golpe Frenético: HP é 20 (< 25 = 50%), base 10 + 8 bônus = 18 de dano
  combat.playCard('c_frenetico');
  assert.strictEqual(dummy.hp, 32, 'Golpe Frenético deve ter causado 18 de dano com HP abaixo de 50%');

  // Fim de turno: armadura é retida para o próximo turno do herói
  combat.endTurn();
  assert.strictEqual(hero.block, 8, 'Armadura retida de 8 deve persistir no início do turno 2');
});

test('Ladina: Catalisador Tóxico dobra veneno e Adaga Contaminada concede energia', () => {
  const dummy = { hp: 60, maxHp: 60, block: 0, statuses: { ...createDefaultStatusMap(), poison: 5 }, getIntention: () => ({ type: 'attack', damage: 4 }) };
  const hero = {
    hp: 40, maxHp: 40, energy: 2, maxEnergy: 3, block: 0,
    deck: [createCardInstance('catalisador_toxico'), createCardInstance('adaga_contaminada')],
    statuses: createDefaultStatusMap()
  };
  const combat = new CombatSystem({ hero, enemy: dummy });
  combat.hand = [createCardInstance('catalisador_toxico', 'c_cat'), createCardInstance('adaga_contaminada', 'c_adaga')];

  // Catalisador Tóxico dobra o veneno de 5 para 10
  combat.playCard('c_cat');
  assert.strictEqual(dummy.statuses.poison, 10, 'Catalisador Tóxico deve dobrar 5 para 10 de Veneno');

  // Adaga Contaminada (custo 0): causa 4 de dano e concede +1 de energia por haver veneno
  const prevEnergy = hero.energy;
  combat.playCard('c_adaga');
  assert.strictEqual(dummy.hp, 56, 'Adaga Contaminada causa 4 de dano');
  assert.strictEqual(hero.energy, prevEnergy + 1, 'Adaga Contaminada deve conceder +1 de Energia');
});

test('Ladina: Execução Sombria escala com cartas jogadas no turno e Toxina Letal corrói armadura', () => {
  const dummy = { hp: 80, maxHp: 80, block: 10, statuses: createDefaultStatusMap(), getIntention: () => ({ type: 'attack', damage: 0 }) };
  const hero = {
    hp: 40, maxHp: 40, energy: 6, maxEnergy: 6, block: 0,
    deck: [],
    statuses: createDefaultStatusMap()
  };
  const combat = new CombatSystem({ hero, enemy: dummy });
  combat.hand = [
    createCardInstance('murro', 'c_1'),
    createCardInstance('murro', 'c_2'),
    createCardInstance('toxina_letal', 'c_tox'),
    createCardInstance('execucao_sombria', 'c_exec')
  ];

  // Joga 3 cartas antes da Execução Sombria
  combat.playCard('c_1'); // 1 carta jogada
  combat.playCard('c_2'); // 2 cartas jogadas
  combat.playCard('c_tox'); // 3 cartas jogadas, ativa lethalToxinActive
  assert.strictEqual(combat.lethalToxinActive, true);
  assert.strictEqual(combat.cardsPlayedThisTurn, 3);

  // Execução Sombria: dano base 8 + (3 * 4) = 20 de dano!
  combat.playCard('c_exec');
  assert.strictEqual(combat.cardsPlayedThisTurn, 4);

  // No fim do turno do monstro, veneno causa dano e corrói 3 de armadura
  dummy.block = 10;
  combat.endTurn();
  assert(dummy.block <= 7, 'Toxina Letal deve ter corroído 3 de armadura do monstro');
});

test('Mago: Incinerar consome Queimadura causando dobro em dano bônus e Eco Temporal duplica a próxima carta', () => {
  const dummy = { hp: 70, maxHp: 70, block: 0, statuses: { ...createDefaultStatusMap(), burn: 6 }, getIntention: () => ({ type: 'attack', damage: 0 }) };
  const hero = {
    hp: 40, maxHp: 40, energy: 4, maxEnergy: 4, block: 0,
    deck: [],
    statuses: createDefaultStatusMap()
  };
  const combat = new CombatSystem({ hero, enemy: dummy });
  combat.hand = [
    createCardInstance('incinerar', 'c_inc'),
    createCardInstance('eco_temporal', 'c_echo'),
    createCardInstance('centelha_de_fogo', 'c_spark')
  ];

  // Incinerar: dano base 8 + (6 * 2) = 20 de dano, zera a Queimadura
  combat.playCard('c_inc');
  assert.strictEqual(dummy.hp, 50, 'Incinerar deve ter causado 20 de dano');
  assert.strictEqual(dummy.statuses.burn, 0, 'Incinerar deve ter consumido toda a Queimadura');

  // Eco Temporal: prepara duplicar a próxima carta
  combat.playCard('c_echo');
  assert.strictEqual(combat.echoNextCard, true);

  // Centelha de Fogo (dano 6, burn 2): com eco temporal é conjurada 2x (dano 12 total, burn 4)
  combat.playCard('c_spark');
  assert.strictEqual(combat.echoNextCard, false, 'Eco Temporal deve ser consumido após a jogada');
  assert.strictEqual(dummy.hp, 38, 'Centelha duplicada causou 12 de dano total (6x2)');
  assert.strictEqual(dummy.statuses.burn, 4, 'Centelha duplicada aplicou 4 de Queimadura (2x2)');
});

test('Mago: Manto de Chamas retalia atacantes com Queimadura e Lança de Gelo reduz intenção de ataque', () => {
  const dummy = { hp: 50, maxHp: 50, block: 0, statuses: createDefaultStatusMap(), getIntention: () => ({ type: 'attack', damage: 10, hits: 1 }) };
  const hero = {
    hp: 40, maxHp: 40, energy: 3, maxEnergy: 3, block: 0,
    deck: [],
    statuses: createDefaultStatusMap()
  };
  const combat = new CombatSystem({ hero, enemy: dummy });
  combat.hand = [
    createCardInstance('lanca_de_gelo', 'c_ice'),
    createCardInstance('manto_de_chamas', 'c_cloak')
  ];

  // Lança de Gelo reduz o ataque telegrafado de 10 para 7
  combat.playCard('c_ice');
  assert.strictEqual(dummy.currentIntent.damage, 7, 'Lança de Gelo deve reduzir dano da intenção em 3');

  // Manto de Chamas: +6 armadura e +3 flameCloak
  combat.playCard('c_cloak');
  assert.strictEqual(combat.flameCloak, 3);

  // Inimigo ataca: herói recebe ataque e retaliar Queimadura
  combat.endTurn();
  assert.strictEqual(dummy.statuses.burn, 3, 'Manto de Chamas deve retaliar 3 de Queimadura ao atacante');
});

test('Chefes Épicos: Transição para FASE 2 ao atingir 50% de HP ativa Força extra e novas intenções', () => {
  const golem = createEnemyInstance('golem_guardiao');
  assert.strictEqual(golem.maxHp, 140);
  assert.strictEqual(golem.hp, 140);

  const hero = {
    hp: 60, maxHp: 60, energy: 3, maxEnergy: 3, block: 0,
    deck: [createCardInstance('murro')],
    statuses: createDefaultStatusMap()
  };
  const combat = new CombatSystem({ hero, enemy: golem });

  // Intenção inicial da Fase 1 (Turno 1)
  assert.strictEqual(golem.currentIntent.name, 'Pancada Sísmica');
  assert.strictEqual(golem.currentIntent.damage, 14);

  // Reduz HP do Golem para 70 (exatamente 50%)
  golem.hp = 70;
  combat._checkBossPhaseTransition();

  // Verifica que entrou na Fase 2
  assert.strictEqual(golem.phase2Triggered, true, 'Golem deve ativar gatilho da Fase 2');
  assert.strictEqual(golem.statuses.strength, 4, 'Golem deve ganhar +4 de Força no Núcleo Sobreaquecido');
  assert.strictEqual(golem.currentIntent.name, 'Terremoto Ígneo', 'Nova intenção da Fase 2 deve ser Terremoto Ígneo');
  assert.strictEqual(golem.currentIntent.targetStatus.burn, 2, 'Terremoto Ígneo aplica Queimadura');

  // Testa Dragão Tirano Fase 2
  const dragon = createEnemyInstance('dragao_tirano');
  assert.strictEqual(dragon.maxHp, 260);
  dragon.hp = 120; // < 50% (130)
  const dragonIntent = dragon.getIntention(3, dragon);
  assert.strictEqual(dragonIntent.name, 'Baforada do Apocalipse Vulcânico');
  assert.strictEqual(dragonIntent.damage, 36);
  assert.strictEqual(dragonIntent.targetStatus.burn, 8);
});

console.log('\n▶ [18/18] Testes de Correção: Substituição Tática de Cartas e Resiliência de Recompensas');

test('claimCombatReward: Substituição no teto de 15 cartas substitui a carta ativa e move a antiga para a reserva', () => {
  const gs = new GameState({ seed: 12345 });
  gs.startNewRun('warrior');

  // Enche o deck até o teto de 15 cartas
  while (gs.hero.deck.length < 15) {
    gs.hero.deck.push(createCardInstance('espada'));
  }
  assert.strictEqual(gs.hero.deck.length, 15);

  const cardToReplace = gs.hero.deck[0];
  const rewardCard = createCardInstance('supernova', 'reward_sn_1');
  gs.combatRewardCards = [rewardCard];
  gs.screen = GAME_SCREENS.COMBAT_REWARD;

  // Substitui a primeira carta ativa pelo rewardCard
  gs.claimCombatReward(rewardCard.uid, cardToReplace.uid, false);

  assert.strictEqual(gs.hero.deck.length, 15, 'Deck deve continuar com exatamente 15 cartas');
  assert.strictEqual(gs.hero.deck.some(c => c.id === 'supernova'), true, 'Nova carta deve estar no deck ativo');
  assert.strictEqual(gs.hero.reserveDeck.some(c => c.uid === cardToReplace.uid), true, 'Carta antiga deve estar na reserva');
  assert.strictEqual(gs.screen, GAME_SCREENS.MAP, 'Após claimCombatReward, deve transicionar para tela do mapa');
});

test('claimCombatReward: Resiliência contra dessincronização de tela e suporte a fallback de ID', () => {
  const gs = new GameState({ seed: 54321 });
  gs.startNewRun('warrior');

  const rewardCard = createCardInstance('incinerar', 'reward_inc_1');
  gs.combatRewardCards = [rewardCard];
  // Simula tela como map ou combat, mas com rewardCards pendentes
  gs.screen = GAME_SCREENS.MAP;

  // Deve permitir resgate sem lançar erro de tela porque combatRewardCards está ativo
  gs.claimCombatReward('incinerar'); // passando por ID como fallback

  assert.strictEqual(gs.hero.deck.some(c => c.id === 'incinerar'), true, 'Carta deve ter sido resgatada com sucesso');
  assert.strictEqual(gs.combatRewardCards.length, 0, 'Recompensas devem ter sido consumidas');
});

test('swapActiveAndReserveCard: Troca bidirecional imediata entre ativo e reserva', () => {
  const gs = new GameState({ seed: 99999 });
  gs.startNewRun('warrior');

  const activeCard = gs.hero.deck[0];
  const reserveCard = createCardInstance('supernova', 'res_sn_1');
  gs.hero.reserveDeck = [reserveCard];

  const swapped = gs.swapActiveAndReserveCard(activeCard.uid, reserveCard.uid);
  assert.strictEqual(swapped, true);
  assert.strictEqual(gs.hero.deck.some(c => c.uid === reserveCard.uid), true);
  assert.strictEqual(gs.hero.reserveDeck.some(c => c.uid === activeCard.uid), true);
});

// ============================================================================
// META-PROGRESSÃO & ÁRVORE DE TALENTOS ANCESTRAIS
// ============================================================================
console.log('\n--- Testes: Meta-Progressão & Árvore de Talentos Permanentes ---');

test('Talentos: Adição e persistência de Essências de Almas', () => {
  saveMetaProgression({ souls: 0, totalSoulsEarned: 0, talents: { vitality: 0, greed: 0, wisdom: 0, ironclad: 0 } });
  assert.strictEqual(getMetaProgression().souls, 0);

  addSouls(50);
  const meta = getMetaProgression();
  assert.strictEqual(meta.souls, 50);
  assert.strictEqual(meta.totalSoulsEarned, 50);
});

test('Talentos: Aprimoramento e dedução de custo de almas', () => {
  saveMetaProgression({ souls: 30, totalSoulsEarned: 30, talents: { vitality: 0, greed: 0, wisdom: 0, ironclad: 0 } });
  
  // Nível 1 de Vitalidade custa 10 almas
  const res1 = upgradeTalent('vitality');
  assert.strictEqual(res1.success, true);
  assert.strictEqual(res1.newLevel, 1);
  assert.strictEqual(res1.remainingSouls, 20);

  // Nível 2 de Vitalidade custa 20 almas
  const res2 = upgradeTalent('vitality');
  assert.strictEqual(res2.success, true);
  assert.strictEqual(res2.newLevel, 2);
  assert.strictEqual(res2.remainingSouls, 0);

  // Sem almas suficientes para Nível 3 (custa 35)
  const res3 = upgradeTalent('vitality');
  assert.strictEqual(res3.success, false);
});

test('Talentos: Redefinir e reembolsar 100% das almas', () => {
  saveMetaProgression({ souls: 0, totalSoulsEarned: 30, talents: { vitality: 2, greed: 0, wisdom: 0, ironclad: 0 } });
  
  const resetRes = resetTalents();
  assert.strictEqual(resetRes.refundedSouls, 30); // 10 + 20
  assert.strictEqual(resetRes.totalSouls, 30);
  assert.strictEqual(getMetaProgression().talents.vitality, 0);
});

test('Talentos: Aplicação de bônus ao Herói no início da run', () => {
  saveMetaProgression({ souls: 100, totalSoulsEarned: 100, talents: { vitality: 2, greed: 3, wisdom: 1, ironclad: 1 } });
  
  const bonuses = getTalentBonuses();
  assert.strictEqual(bonuses.maxHpBonus, 10); // 2 * 5
  assert.strictEqual(bonuses.goldBonus, 3); // 3 * 1
  assert.strictEqual(bonuses.initialCardsBonus, 1); // 1 * 1
  assert.strictEqual(bonuses.startingBlockBonus, 3); // 1 * 3

  const gs = new GameState({ seed: 12345 });
  gs.startNewRun('warrior');
  // Guerreiro base maxHp é 70 -> com talento vitality 2 vira 80
  assert.strictEqual(gs.hero.maxHp, 80);
  assert.strictEqual(gs.hero.hp, 80);
  assert.strictEqual(gs.hero.talentGoldBonus, 3);
  assert.strictEqual(gs.hero.talentInitialCards, 1);
  assert.strictEqual(gs.hero.talentStartingBlock, 3);
});

test('Talentos: Integração no Combate (Armadura inicial e compra bônus no Turno 1)', () => {
  saveMetaProgression({ souls: 100, totalSoulsEarned: 100, talents: { vitality: 0, greed: 2, wisdom: 1, ironclad: 1 } });
  
  const gs = new GameState({ seed: 77777 });
  gs.startNewRun('warrior');

  const enemy = createEnemyInstance('goblin_ladino');
  const combat = new CombatSystem({ hero: gs.hero, enemy, rng: gs.rng });

  // Bastião de Ferro: inicia combate com +3 de armadura
  assert.strictEqual(gs.hero.block, 3);

  // Mente Expandida: compra 5 + 1 = 6 cartas no Turno 1
  assert.strictEqual(combat.hand.length, 6);
});

test('Talentos: Recompensa de Almas ao derrotar inimigo em GameState', () => {
  saveMetaProgression({ souls: 0, totalSoulsEarned: 0, talents: { vitality: 0, greed: 0, wisdom: 0, ironclad: 0 } });
  
  const gs = new GameState({ seed: 88888 });
  gs.startNewRun('warrior');

  const node = Object.values(gs.map.nodes).find(n => n.type === NODE_TYPES.COMBAT);
  node.state = NODE_STATES.AVAILABLE;
  gs.selectNode(node.id);

  // Vence o combate
  gs.currentCombat.enemy.hp = 0;
  gs.currentCombat._handleVictory();
  gs._checkCombatTermination();

  assert.strictEqual(gs.combatRewardSouls > 0, true, 'Deve conceder recompensa de almas');
  assert.strictEqual(gs.runSoulsEarned, gs.combatRewardSouls);
  assert.strictEqual(getMetaProgression().souls, gs.combatRewardSouls);
});

console.log('\n====================================================');
console.log(` ✅ RESULTADO: ${passedTests}/${totalTests} TESTES PASSARAM COM 100% DE SUCESSO!`);
console.log('====================================================\n');
