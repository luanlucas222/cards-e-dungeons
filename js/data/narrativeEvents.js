/**
 * js/data/narrativeEvents.js
 * Catálogo e Motor de Eventos Narrativos Misteriosos para "Cards e Dungeons" (Nó [ ❓ Evento ]).
 * Oferece escolhas morais no estilo RPG de mesa com risco e recompensa táticos.
 */

import { getRandomRelic, addRelicToHero } from './relics.js';
import { getRandomRewardCards } from './cards.js';
import { getRandomPotion, createPotionInstance } from './potions.js';

export const NARRATIVE_EVENTS = [
  {
    id: 'altar_forgotten_gods',
    title: 'O Altar dos Deuses Esquecidos',
    icon: 'altar',
    description: 'Um monólito de obsidiana ancestral emana uma névoa púrpura gélida. Entalhes sangrentos exigem tributo dos viajantes que ousam cruzar este templo soterrado.',
    choices: [
      {
        id: 'sacrifice_blood',
        text: 'Sacrifício de Sangue',
        detail: 'Perca 12 de Vida em troca de uma Relíquia Sagrada.',
        condition: (hero) => hero.hp > 12,
        unavailableText: 'Vida insuficiente para o sacrifício!',
        execute: (gameState) => {
          const hero = gameState.hero;
          hero.hp -= 12;
          const existingIds = (hero.relics || []).map(r => r.id);
          const relic = getRandomRelic(existingIds, gameState.rng);
          if (relic) {
            addRelicToHero(hero, relic.id);
          }
          return {
            title: 'Bênção Concedida!',
            message: `O altar bebeu seu sangue (-12 HP). Das cinzas sagradas emergiu "${relic ? relic.name : 'um artefato'}"!`
          };
        }
      },
      {
        id: 'desecrate',
        text: 'Profanar o Altar',
        detail: 'Saqueie as oferendas douradas (+65 Ouro), mas sofra a maldição das brasas (-6 HP).',
        condition: (hero) => hero.hp > 6,
        unavailableText: 'Vida muito baixa para resistir às chamas!',
        execute: (gameState) => {
          const hero = gameState.hero;
          hero.gold = (hero.gold || 0) + 65;
          hero.hp -= 6;
          return {
            title: 'Altar Profanado!',
            message: 'Você arrancou as gemas e moedas (+65 Ouro), mas brasas amaldiçoadas queimaram suas mãos (-6 HP)!'
          };
        }
      },
      {
        id: 'pray_leave',
        text: 'Orar em Silêncio e Partir',
        detail: 'Uma prece humilde restaura 8 de Vida.',
        condition: () => true,
        execute: (gameState) => {
          const hero = gameState.hero;
          const healed = Math.min(8, hero.maxHp - hero.hp);
          hero.hp = Math.min(hero.maxHp, hero.hp + 8);
          return {
            title: 'Paz Interior',
            message: `Você fez uma oração aos ancestrais e sentiu as feridas fecharem ligeiramente (+${healed} HP).`
          };
        }
      }
    ]
  },

  {
    id: 'dark_chest',
    title: 'O Baú das Trevas',
    icon: 'chest',
    description: 'Nas sombras de uma arcada desabada, um pesado baú de ferro negro reforçado por runas atrai seu olhar. Uma aura de ouro e armadilhas permeia o ar.',
    choices: [
      {
        id: 'force_lock',
        text: 'Forçar o Cadeado Rúnico',
        detail: '70% de chance de 85 Ouro e 1 Carta Rara; 30% de chance de armadilha venenosa (-10 HP).',
        condition: () => true,
        execute: (gameState) => {
          const hero = gameState.hero;
          const roll = gameState.rng();
          if (roll < 0.70) {
            hero.gold = (hero.gold || 0) + 85;
            const rewardCards = getRandomRewardCards(1, gameState.rng);
            if (rewardCards.length > 0) {
              hero.deck.push(rewardCards[0]);
            }
            return {
              title: 'Fortuna nas Trevas!',
              message: `O cadeado cedeu! Você encontrou 85 moedas de ouro e a poderosa carta "${rewardCards[0]?.name || 'Rara'}"!`
            };
          } else {
            hero.hp = Math.max(1, hero.hp - 10);
            return {
              title: 'Armadilha Disparada!',
              message: 'Lâminas envenenadas saltaram da fechadura! Você sofreu 10 de dano, mas conseguiu escapar com vida.'
            };
          }
        }
      },
      {
        id: 'loot_surroundings',
        text: 'Buscar nos Arredores',
        detail: 'Encontra 1 Poção de combate abandonada junto aos restos de um aventureiro.',
        condition: () => true,
        execute: (gameState) => {
          const potion = getRandomPotion(gameState.rng);
          const added = gameState.addPotion(potion.id);
          return {
            title: 'Frasco Encontrado!',
            message: added.success 
              ? `Você encontrou um frasco intacto de "${potion.name}" nos escombros!`
              : `Você achou "${potion.name}", mas seus 3 slots de poção já estão cheios!`
          };
        }
      },
      {
        id: 'leave_chest',
        text: 'Ignorar e Seguir em Frente',
        detail: 'Melhor não arriscar a vida com relíquias suspeitas.',
        condition: () => true,
        execute: () => ({
          title: 'Prudência',
          message: 'Você se afastou cautelosamente do baú sombrio e continuou sua descida pela masmorra.'
        })
      }
    ]
  },

  {
    id: 'blood_fountain',
    title: 'A Fonte Carmesim',
    icon: 'altar',
    description: 'Águas rubras borbulham de uma bacia de pedra antiga. O vapor que sobe da água tem cheiro de ferro puro e revigora os sentidos com poder proibido.',
    choices: [
      {
        id: 'drink_deep',
        text: 'Beber da Água Carmesim',
        detail: 'Recupere 40% da Vida máxima, mas sacrifique 1 carta aleatória do deck.',
        condition: (hero) => hero.deck.length > 6,
        unavailableText: 'Seu baralho está enxuto demais para o sacrifício!',
        execute: (gameState) => {
          const hero = gameState.hero;
          const healAmount = Math.round(hero.maxHp * 0.40);
          hero.hp = Math.min(hero.maxHp, hero.hp + healAmount);
          // Remove uma carta aleatória que não seja a única do tipo
          const rmIndex = Math.floor(gameState.rng() * hero.deck.length);
          const removed = hero.deck.splice(rmIndex, 1)[0];
          return {
            title: 'Vitalidade Sombria!',
            message: `A água carmesim fecha suas feridas (+${healAmount} HP), mas consome a carta "${removed.name}" como oferenda!`
          };
        }
      },
      {
        id: 'wash_wounds',
        text: 'Lavar Apenas o Rosto',
        detail: 'Cura segura de 12 de Vida sem efeitos colaterais.',
        condition: () => true,
        execute: (gameState) => {
          const hero = gameState.hero;
          const healed = Math.min(12, hero.maxHp - hero.hp);
          hero.hp = Math.min(hero.maxHp, hero.hp + 12);
          return {
            title: 'Alívio Refrescante',
            message: `O frescor místico estanca seus sangramentos (+${healed} de Vida).`
          };
        }
      },
      {
        id: 'toss_coin',
        text: 'Jogar Moedas na Fonte',
        detail: 'Paga 35 de Ouro para receber uma Poção de Vitalidade.',
        condition: (hero) => (hero.gold || 0) >= 35,
        unavailableText: 'Ouro insuficiente (custa 35 ouro)!',
        execute: (gameState) => {
          const hero = gameState.hero;
          hero.gold -= 35;
          const added = gameState.addPotion('potion_health');
          return {
            title: 'Oferenda Aceita',
            message: added.success 
              ? 'As águas brilharam e emergiram com um Elixir da Vitalidade!'
              : 'O espírito da fonte agradece suas moedas, mas seus slots de poção estão cheios!'
          };
        }
      }
    ]
  },

  {
    id: 'wandering_blacksmith',
    title: 'O Ferreiro Renegado',
    icon: 'blacksmith',
    description: 'O retinir de martelo em bigorna ecoa em uma caverna aquecida por brasas. Um anão musculoso com marcas rúnicas oferece aprimorar seu aço por algumas moedas.',
    choices: [
      {
        id: 'hone_blade',
        text: 'Afiar as Lâminas',
        detail: 'Pague 50 Ouro para receber a relíquia "Pedra de Amolar Rúnica" (+1 Força inicial).',
        condition: (hero) => (hero.gold || 0) >= 50,
        unavailableText: 'Ouro insuficiente (custa 50 ouro)!',
        execute: (gameState) => {
          const hero = gameState.hero;
          hero.gold -= 50;
          addRelicToHero(hero, 'whetstone');
          return {
            title: 'Aço Rúnico!',
            message: 'O ferreiro afiou suas armas até o ponto de navalha (+1 Força no início dos combates)!'
          };
        }
      },
      {
        id: 'reinforce_armor',
        text: 'Reforçar Armadura',
        detail: 'Pague 50 Ouro para receber a relíquia "Manto de Éter" (+5 Armadura no 1º turno).',
        condition: (hero) => (hero.gold || 0) >= 50,
        unavailableText: 'Ouro insuficiente (custa 50 ouro)!',
        execute: (gameState) => {
          const hero = gameState.hero;
          hero.gold -= 50;
          addRelicToHero(hero, 'ether_cloak');
          return {
            title: 'Couraça Enegrecida!',
            message: 'O ferreiro teceu placas etéreas em sua vestimenta (+5 de Armadura inicial em combates)!'
          };
        }
      },
      {
        id: 'leave_smith',
        text: 'Apenas Cumprimentar e Partir',
        detail: 'O ferreiro admira sua coragem e lhe presenteia com 15 de Ouro.',
        condition: () => true,
        execute: (gameState) => {
          const hero = gameState.hero;
          hero.gold = (hero.gold || 0) + 15;
          return {
            title: 'Respeito de Guerreiro',
            message: '"Tome estas moedas para sua jornada, aventureiro. O Dragão é impiedoso." (+15 Ouro)!'
          };
        }
      }
    ]
  },

  {
    id: 'altar_espelho_runico',
    title: 'O Altar do Espelho Rúnico',
    icon: 'mirror',
    description: 'Um espelho oval de mercúrio puro e moldura de ossos dracônicos reflete não sua aparência física, mas o núcleo de sua alma e de seus feitiços. A superfície líquida ondula convidando a um pacto.',
    choices: [
      {
        id: 'reflect_soul',
        text: 'Refletir a Alma',
        detail: 'Duplica 1 carta do seu baralho (respeitando o limite de 3 cópias), ao custo de 10 HP ou 35 Ouro.',
        condition: (hero) => hero.hp > 10 || (hero.gold || 0) >= 35,
        unavailableText: 'Você não tem Vida (>10 HP) nem Ouro (>=35) suficientes para o pacto!',
        execute: (gameState, payload = {}) => {
          const hero = gameState.hero;

          // Filtra cartas com menos de 3 cópias no baralho
          const eligibleCards = hero.deck.filter(c => gameState.canDuplicateCard(c.id));
          if (eligibleCards.length === 0) {
            return {
              title: 'Reflexo Imutável',
              message: 'Todas as suas cartas já atingiram a ressonância máxima (limite de 3 cópias por carta). Nenhuma carta pôde ser duplicada.'
            };
          }

          // Escolhe a carta alvo (especificada por UID ou a primeira elegível)
          let targetCard = null;
          if (payload && payload.cardUid) {
            targetCard = hero.deck.find(c => c.uid === payload.cardUid);
            if (!targetCard || !gameState.canDuplicateCard(targetCard.id)) {
              targetCard = eligibleCards[0];
            }
          } else {
            targetCard = eligibleCards[0];
          }

          // Resolução do custo: prioriza ouro se solicitado ou se possuir >= 35, senão vida
          let costDescription = '';
          if (payload && payload.costType === 'hp' && hero.hp > 10) {
            hero.hp -= 10;
            costDescription = '-10 HP';
          } else if (payload && payload.costType === 'gold' && (hero.gold || 0) >= 35) {
            hero.gold -= 35;
            costDescription = '-35 Ouro';
          } else if ((hero.gold || 0) >= 35) {
            hero.gold -= 35;
            costDescription = '-35 Ouro';
          } else {
            hero.hp -= 10;
            costDescription = '-10 HP';
          }

          const dupResult = gameState.duplicateCardInDeck(targetCard.uid);
          const dupName = dupResult?.duplicatedCard?.name || targetCard.name;

          return {
            title: 'Alma Refletida!',
            message: `O espelho de mercúrio ondulou (${costDescription}) e materializou uma réplica de "${dupName}" em seu baralho!`
          };
        }
      },
      {
        id: 'bathe_mercury',
        text: 'Banhar-se no Mercúrio',
        detail: 'Mergulhe suas mãos nas águas prateadas e restaure 15 pontos de Vida.',
        condition: () => true,
        execute: (gameState) => {
          const hero = gameState.hero;
          const healed = Math.min(15, hero.maxHp - hero.hp);
          hero.hp = Math.min(hero.maxHp, hero.hp + 15);
          return {
            title: 'Vigor Prateado',
            message: `O mercúrio rúnico purificou suas feridas e aliviou sua dor (+${healed} HP).`
          };
        }
      },
      {
        id: 'retreat_prudence',
        text: 'Recuar com Prudência',
        detail: 'Não mexa com forças que refletem o abismo da mente.',
        condition: () => true,
        execute: () => ({
          title: 'Prudência',
          message: 'Você decide não perturbar os reflexos arcanos do espelho e segue em frente.'
        })
      }
    ]
  }
];

/**
 * Retorna um evento narrativo aleatório
 * @param {Array<string>} [excludeIds=[]]
 * @param {function} [rng=Math.random]
 * @returns {Object}
 */
export function getRandomNarrativeEvent(excludeIds = [], rng = Math.random) {
  const pool = NARRATIVE_EVENTS.filter(e => !excludeIds.includes(e.id));
  if (pool.length === 0) return NARRATIVE_EVENTS[0];
  const idx = Math.floor(rng() * pool.length);
  return pool[idx];
}

if (typeof window !== 'undefined') {
  window.NARRATIVE_EVENTS = NARRATIVE_EVENTS;
  window.getRandomNarrativeEvent = getRandomNarrativeEvent;
}
