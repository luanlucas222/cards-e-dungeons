/**
 * js/data/enemies.js
 * Definições e IA de intenções dos monstros (Comuns, Elites e Chefe) de "Cards e Dungeons".
 */

import { createDefaultStatusMap, STATUS_TYPES } from './statusEffects.js';

export const ENEMIES = {
  // ==========================================
  // --- INIMIGOS COMUNS ---
  // ==========================================
  goblin_ladino: {
    id: 'goblin_ladino',
    name: 'Goblin Ladino',
    type: 'normal',
    maxHp: 25,
    description: 'Um ladino ágil das sombras que alterna entre punhaladas e esquivas rápidas.',
    icon: 'goblin',
    getIntention: (turn, enemyState) => {
      const cycleStep = (turn - 1) % 3;
      const strength = enemyState?.statuses?.[STATUS_TYPES.STRENGTH] || enemyState?.buffs?.strength || 0;

      if (cycleStep === 0) {
        const dmg = 4 + strength;
        return {
          type: 'attack',
          name: 'Ataque Rápido',
          damage: dmg,
          hits: 2,
          block: 0,
          description: `Atacará 2 vezes causando ${dmg} de dano (${dmg * 2} total).`,
          icon: 'attack'
        };
      } else if (cycleStep === 1) {
        return {
          type: 'defend',
          name: 'Esquiva Sagaz',
          damage: 0,
          hits: 0,
          block: 8,
          description: 'Ganhará 8 de armadura.',
          icon: 'shield'
        };
      } else {
        const dmg = 10 + strength;
        return {
          type: 'attack',
          name: 'Punhalada Traiçoeira',
          damage: dmg,
          hits: 1,
          block: 0,
          description: `Atacará causando ${dmg} de dano letal.`,
          icon: 'attack'
        };
      }
    }
  },

  esqueleto_guardiao: {
    id: 'esqueleto_guardiao',
    name: 'Esqueleto Guardião',
    type: 'normal',
    maxHp: 32,
    description: 'Guerreiro esquelético que se protege com um escudo pesado antes de golpear com força.',
    icon: 'skeleton',
    getIntention: (turn, enemyState) => {
      const cycleStep = (turn - 1) % 3;
      const strength = enemyState?.statuses?.[STATUS_TYPES.STRENGTH] || enemyState?.buffs?.strength || 0;

      if (cycleStep === 0) {
        return {
          type: 'defend',
          name: 'Erguer Escudo de Ossos',
          damage: 0,
          hits: 0,
          block: 10,
          description: 'Ganhará 10 de armadura.',
          icon: 'shield'
        };
      } else if (cycleStep === 1) {
        const dmg = 9 + strength;
        return {
          type: 'attack',
          name: 'Golpe com Clava',
          damage: dmg,
          hits: 1,
          block: 0,
          description: `Desferirá um golpe causando ${dmg} de dano.`,
          icon: 'attack'
        };
      } else {
        const dmg = 6 + strength;
        return {
          type: 'attack_defend',
          name: 'Investida com Escudo',
          damage: dmg,
          hits: 1,
          block: 6,
          description: `Atacará causando ${dmg} de dano e ganhará 6 de armadura.`,
          icon: 'shield_attack'
        };
      }
    }
  },

  feiticeiro_sombrio: {
    id: 'feiticeiro_sombrio',
    name: 'Feiticeiro Sombrio',
    type: 'normal',
    maxHp: 28,
    description: 'Mago necromante que canaliza energia profana para desferir feitiços cada vez mais mortais.',
    icon: 'wizard',
    getIntention: (turn, enemyState) => {
      const cycleStep = (turn - 1) % 3;
      const strength = enemyState?.statuses?.[STATUS_TYPES.STRENGTH] || enemyState?.buffs?.strength || 0;

      if (cycleStep === 0) {
        const dmg = 6 + strength;
        return {
          type: 'attack',
          name: 'Raio Sombrio',
          damage: dmg,
          hits: 1,
          block: 0,
          description: `Lançará raio mágico causando ${dmg} de dano.`,
          icon: 'magic'
        };
      } else if (cycleStep === 1) {
        return {
          type: 'buff',
          name: 'Canalizar Trevas',
          damage: 0,
          hits: 0,
          block: 4,
          buff: { strength: 2 },
          status: { [STATUS_TYPES.STRENGTH]: 2 },
          description: 'Canalizará trevas (+2 de Força contínua) e ganhará 4 de armadura.',
          icon: 'buff'
        };
      } else {
        const dmg = 12 + strength;
        return {
          type: 'attack',
          name: 'Orbe da Ruína',
          damage: dmg,
          hits: 1,
          block: 0,
          description: `Explodirá uma orbe devastadora de ${dmg} de dano!`,
          icon: 'magic_blast'
        };
      }
    }
  },

  espectro_lamuriante: {
    id: 'espectro_lamuriante',
    name: 'Espectro Lamuriante',
    type: 'normal',
    maxHp: 30,
    description: 'Fantasma etéreo que drena a força vital e enfraquece os heróis com lamentos angustiantes.',
    icon: 'specter',
    getIntention: (turn, enemyState) => {
      const cycleStep = (turn - 1) % 3;
      const strength = enemyState?.statuses?.[STATUS_TYPES.STRENGTH] || 0;

      if (cycleStep === 0) {
        const dmg = 8 + strength;
        return {
          type: 'attack_status',
          name: 'Toque Gélido',
          damage: dmg,
          hits: 1,
          block: 0,
          targetStatus: { [STATUS_TYPES.WEAK]: 2 },
          description: `Atacará causando ${dmg} de dano e aplicará 2 de Fraco em você.`,
          icon: 'ghost_touch'
        };
      } else if (cycleStep === 1) {
        const dmg = 6 + strength;
        return {
          type: 'attack_break',
          name: 'Lamento Ensurdecedor',
          damage: dmg,
          hits: 1,
          block: 0,
          armorBreak: 4,
          description: `Gritará causando ${dmg} de dano e quebrando 4 de armadura.`,
          icon: 'wail'
        };
      } else {
        return {
          type: 'defend_status',
          name: 'Manto Espectral',
          damage: 0,
          hits: 0,
          block: 10,
          targetStatus: { [STATUS_TYPES.WEAK]: 1 },
          description: 'Ganhará 10 de armadura e aplicará 1 de Fraco.',
          icon: 'specter_shield'
        };
      }
    }
  },

  rato_peste: {
    id: 'rato_peste',
    name: 'Rato da Peste',
    type: 'normal',
    maxHp: 24,
    description: 'Roedor infecto e veloz que propaga pragas venenosas e morde com ferocidade.',
    icon: 'rat',
    getIntention: (turn, enemyState) => {
      const cycleStep = (turn - 1) % 3;
      const strength = enemyState?.statuses?.[STATUS_TYPES.STRENGTH] || 0;

      if (cycleStep === 0) {
        const dmg = 4 + strength;
        return {
          type: 'attack_status',
          name: 'Mordida Pestilenta',
          damage: dmg,
          hits: 1,
          block: 0,
          targetStatus: { [STATUS_TYPES.POISON]: 2 },
          description: `Morderá causando ${dmg} de dano e transmitindo 2 de Veneno.`,
          icon: 'rat'
        };
      } else if (cycleStep === 1) {
        const dmg = 5 + strength;
        return {
          type: 'attack_break',
          name: 'Roer Armadura',
          damage: dmg,
          hits: 1,
          block: 0,
          armorBreak: 4,
          description: `Roerá suas proteções causando ${dmg} de dano e quebrando 4 de armadura.`,
          icon: 'attack'
        };
      } else {
        const dmg = 3 + strength;
        return {
          type: 'attack_buff',
          name: 'Fúria Roedora',
          damage: dmg,
          hits: 2,
          block: 0,
          buff: { strength: 1 },
          status: { [STATUS_TYPES.STRENGTH]: 1 },
          description: `Atacará em fúria 2 vezes causando ${dmg} de dano (${dmg * 2} total) e ganhando +1 de Força!`,
          icon: 'attack'
        };
      }
    }
  },

  gargula_granito: {
    id: 'gargula_granito',
    name: 'Gárgula de Granito',
    type: 'normal',
    maxHp: 38,
    description: 'Monstruosidade esculpida em pedra que endurece o corpo e mergulha dos tetos da masmorra.',
    icon: 'gargoyle',
    getIntention: (turn, enemyState) => {
      const cycleStep = (turn - 1) % 3;
      const strength = enemyState?.statuses?.[STATUS_TYPES.STRENGTH] || 0;

      if (cycleStep === 0) {
        return {
          type: 'defend',
          name: 'Postura de Granito',
          damage: 0,
          hits: 0,
          block: 12,
          description: 'Endurecerá sua pele de pedra ganhando 12 de armadura.',
          icon: 'shield'
        };
      } else if (cycleStep === 1) {
        const dmg = 9 + strength;
        return {
          type: 'attack_status',
          name: 'Mergulho Aéreo Esmagador',
          damage: dmg,
          hits: 1,
          block: 0,
          targetStatus: { [STATUS_TYPES.WEAK]: 2 },
          description: `Despencará sobre você causando ${dmg} de dano e aplicando 2 de Fraco.`,
          icon: 'hammer'
        };
      } else {
        const dmg = 7 + strength;
        return {
          type: 'attack_defend',
          name: 'Pancada com Garras Pétreas',
          damage: dmg,
          hits: 1,
          block: 6,
          description: `Golpeará com garras de rocha causando ${dmg} de dano e ganhando 6 de armadura.`,
          icon: 'shield_attack'
        };
      }
    }
  },

  escavador_obsidiana: {
    id: 'escavador_obsidiana',
    name: 'Escavador de Obsidiana',
    type: 'normal',
    maxHp: 44,
    description: 'Besta blindada de escamas de obsidiana cortante que perfura rochas e provoca tremores.',
    icon: 'burrower',
    getIntention: (turn, enemyState) => {
      const cycleStep = (turn - 1) % 3;
      const strength = enemyState?.statuses?.[STATUS_TYPES.STRENGTH] || 0;

      if (cycleStep === 0) {
        const dmg = 8 + strength;
        return {
          type: 'attack_break',
          name: 'Perfurar Rochas',
          damage: dmg,
          hits: 1,
          block: 6,
          armorBreak: 5,
          description: `Perfurará o solo causando ${dmg} de dano, quebrando 5 de armadura e ganhando 6 de defesa.`,
          icon: 'attack'
        };
      } else if (cycleStep === 1) {
        const dmg = 12 + strength;
        return {
          type: 'attack_status',
          name: 'Terremoto Subterrâneo',
          damage: dmg,
          hits: 1,
          block: 0,
          targetStatus: { [STATUS_TYPES.VULNERABLE]: 1 },
          description: `Sacudirá as profundezas causando ${dmg} de dano e aplicando 1 de Vulnerável.`,
          icon: 'magic_blast'
        };
      } else {
        const dmg = 15 + strength;
        return {
          type: 'attack',
          name: 'Impacto Sísmico Brutal',
          damage: dmg,
          hits: 1,
          block: 0,
          description: `Desferirá uma marretada sísmica devastadora de ${dmg} de dano!`,
          icon: 'hammer'
        };
      }
    }
  },

  xama_ossos: {
    id: 'xama_ossos',
    name: 'Xamã dos Ossos',
    type: 'normal',
    maxHp: 36,
    description: 'Conjurador tribal que manipula restos mortais para amaldiçoar os invasores e infundir veneno.',
    icon: 'shaman',
    getIntention: (turn, enemyState) => {
      const cycleStep = (turn - 1) % 3;
      const strength = enemyState?.statuses?.[STATUS_TYPES.STRENGTH] || 0;

      if (cycleStep === 0) {
        return {
          type: 'buff',
          name: 'Rito dos Ossos',
          damage: 0,
          hits: 0,
          block: 6,
          buff: { strength: 2 },
          status: { [STATUS_TYPES.STRENGTH]: 2 },
          description: 'Canalizará espíritos ancestrais ganhando +2 de Força e 6 de armadura.',
          icon: 'buff'
        };
      } else if (cycleStep === 1) {
        const dmg = 7 + strength;
        return {
          type: 'attack_status',
          name: 'Dardo Envenenado',
          damage: dmg,
          hits: 1,
          block: 0,
          targetStatus: { [STATUS_TYPES.POISON]: 3 },
          description: `Disparará dardo envenenado causando ${dmg} de dano e 3 de Veneno.`,
          icon: 'magic'
        };
      } else {
        const dmg = 8 + strength;
        return {
          type: 'attack_status',
          name: 'Maldição Debilitante',
          damage: dmg,
          hits: 1,
          block: 0,
          targetStatus: { [STATUS_TYPES.WEAK]: 2 },
          description: `Lançará maldição debilitante causando ${dmg} de dano e 2 de Fraco.`,
          icon: 'ghost_touch'
        };
      }
    }
  },

  elemental_igneo: {
    id: 'elemental_igneo',
    name: 'Elemental Ígneo',
    type: 'normal',
    maxHp: 48,
    description: 'Espírito vulcânico que emana calor insuportável e queima constantemente tudo ao alcance.',
    icon: 'fire_elemental',
    getIntention: (turn, enemyState) => {
      const cycleStep = (turn - 1) % 3;
      const strength = enemyState?.statuses?.[STATUS_TYPES.STRENGTH] || 0;

      if (cycleStep === 0) {
        const dmg = 8 + strength;
        return {
          type: 'attack_status',
          name: 'Toque Calcinante',
          damage: dmg,
          hits: 1,
          block: 0,
          targetStatus: { [STATUS_TYPES.BURN]: 3 },
          description: `Queimará você causando ${dmg} de dano e aplicando 3 de Queimadura.`,
          icon: 'magic'
        };
      } else if (cycleStep === 1) {
        return {
          type: 'defend_status',
          name: 'Onda de Calor Sufocante',
          damage: 0,
          hits: 0,
          block: 10,
          targetStatus: { [STATUS_TYPES.BURN]: 2 },
          description: 'Erguerá escudo térmico de 10 de armadura e aplicará 2 de Queimadura.',
          icon: 'shield'
        };
      } else {
        const dmg = 17 + strength;
        return {
          type: 'attack_status',
          name: 'Explosão de Magma',
          damage: dmg,
          hits: 1,
          block: 0,
          targetStatus: { [STATUS_TYPES.BURN]: 2 },
          description: `Explodirá magma fervente causando ${dmg} de dano brutal e 2 de Queimadura!`,
          icon: 'magic_blast'
        };
      }
    }
  },

  cultista_draconico: {
    id: 'cultista_draconico',
    name: 'Cultista Dracônico',
    type: 'normal',
    maxHp: 42,
    description: 'Devoto fanático do Tirano que empunha adagas em chamas e realiza sacrifícios de sangue.',
    icon: 'cultist',
    getIntention: (turn, enemyState) => {
      const cycleStep = (turn - 1) % 3;
      const strength = enemyState?.statuses?.[STATUS_TYPES.STRENGTH] || 0;

      if (cycleStep === 0) {
        const dmg = 9 + strength;
        return {
          type: 'attack_status',
          name: 'Lâmina Flamejante',
          damage: dmg,
          hits: 1,
          block: 0,
          targetStatus: { [STATUS_TYPES.BURN]: 2 },
          description: `Golpeará com adaga em chamas causando ${dmg} de dano e 2 de Queimadura.`,
          icon: 'attack'
        };
      } else if (cycleStep === 1) {
        return {
          type: 'buff',
          name: 'Sacrifício Rúnico',
          damage: 0,
          hits: 0,
          block: 8,
          buff: { strength: 2 },
          status: { [STATUS_TYPES.STRENGTH]: 2 },
          description: 'Oferecerá sangue ao dragão ganhando +2 de Força e 8 de armadura.',
          icon: 'buff'
        };
      } else {
        const dmg = 7 + strength;
        return {
          type: 'attack_status',
          name: 'Fúria Dracônica',
          damage: dmg,
          hits: 2,
          block: 0,
          targetStatus: { [STATUS_TYPES.VULNERABLE]: 1 },
          description: `Desferirá 2 golpes draconianos de ${dmg} (${dmg * 2} total) e deixará Vulnerável!`,
          icon: 'attack'
        };
      }
    }
  },

  // ==========================================
  // --- INIMIGOS DE ELITE ---
  // ==========================================
  minotauro_berserker: {
    id: 'minotauro_berserker',
    name: 'Minotauro Berserker',
    type: 'elite',
    maxHp: 48,
    description: 'Besta colossal empunhando uma marreta titânica. Sua fúria cresce a cada golpe desferido.',
    icon: 'minotaur',
    getIntention: (turn, enemyState) => {
      const cycleStep = (turn - 1) % 3;
      const strength = enemyState?.statuses?.[STATUS_TYPES.STRENGTH] || 0;

      if (cycleStep === 0) {
        return {
          type: 'buff',
          name: 'Rugido Selvagem',
          damage: 0,
          hits: 0,
          block: 6,
          buff: { strength: 3 },
          status: { [STATUS_TYPES.STRENGTH]: 3 },
          description: 'Rugirá enraivecido ganhando +3 de Força e 6 de armadura!',
          icon: 'bull_roar'
        };
      } else if (cycleStep === 1) {
        const dmg = 14 + strength;
        return {
          type: 'attack',
          name: 'Marretada Esmagadora',
          damage: dmg,
          hits: 1,
          block: 0,
          description: `Desferirá marretada brutal causando ${dmg} de dano!`,
          icon: 'hammer'
        };
      } else {
        const dmg = 8 + strength;
        return {
          type: 'attack',
          name: 'Investida Brutal',
          damage: dmg,
          hits: 2,
          block: 0,
          description: `Investirá desferindo 2 golpes de ${dmg} (${dmg * 2} de dano total)!`,
          icon: 'charge'
        };
      }
    }
  },

  // ==========================================
  // --- CHEFES DE ATO (Bosses Multiatos) ---
  // ==========================================

  // Ato I: Boss das Catacumbas Esquecidas
  golem_guardiao: {
    id: 'golem_guardiao',
    name: 'Golem Guardião Rúnico',
    type: 'boss',
    maxHp: 140,
    description: 'Antigo construto colossal de granito e runas esquecidas. Sua carcaça de rocha pura é impenetrável e seus punhos sísmicos esmagam armaduras com força titânica.',
    icon: 'golem',
    getIntention: (turn, enemyState) => {
      const cycleStep = (turn - 1) % 4;
      const strength = enemyState?.statuses?.[STATUS_TYPES.STRENGTH] || enemyState?.buffs?.strength || 0;
      const isPhase2 = enemyState && enemyState.hp <= Math.floor((enemyState.maxHp || 140) * 0.5);

      if (isPhase2) {
        // FASE 2: Núcleo Rachado (Superaquecido)
        if (cycleStep === 0) {
          const dmg = 20 + strength;
          return {
            type: 'attack_status',
            name: 'Terremoto Ígneo',
            damage: dmg,
            hits: 1,
            block: 0,
            targetStatus: { [STATUS_TYPES.BURN]: 2 },
            description: `Golpeará a terra com o núcleo em chamas causando ${dmg} de dano e 2 de Queimadura!`,
            icon: 'earthquake'
          };
        } else if (cycleStep === 1) {
          return {
            type: 'buff',
            name: 'Superaquecimento do Núcleo',
            damage: 0,
            hits: 0,
            block: 16,
            buff: { strength: 2 },
            status: { [STATUS_TYPES.STRENGTH]: 2 },
            description: 'Canalizará chamas internas ganhando 16 de armadura e +2 de Força contínua!',
            icon: 'buff'
          };
        } else if (cycleStep === 2) {
          const dmg = 22 + strength;
          return {
            type: 'attack_break',
            name: 'Ruptura Vulcânica',
            damage: dmg,
            hits: 1,
            block: 0,
            armorBreak: 8,
            description: `Rachará a terra causando ${dmg} de dano e quebrando 8 de armadura!`,
            icon: 'attack'
          };
        } else {
          const dmg = 11 + strength;
          return {
            type: 'attack',
            name: 'Martelada Sísmica Dupla',
            damage: dmg,
            hits: 2,
            block: 0,
            description: `Descarregará 2 marteladas brutais de ${dmg} (${dmg * 2} de dano total)!`,
            icon: 'fist'
          };
        }
      }

      // FASE 1: Carcaça Impenetrável
      if (cycleStep === 0) {
        const dmg = 14 + strength;
        return {
          type: 'attack',
          name: 'Pancada Sísmica',
          damage: dmg,
          hits: 1,
          block: 0,
          description: `Desferirá uma pancada sísmica brutal causando ${dmg} de dano!`,
          icon: 'hammer'
        };
      } else if (cycleStep === 1) {
        return {
          type: 'defend',
          name: 'Erguer Barreira de Rocha',
          damage: 0,
          hits: 0,
          block: 15,
          buff: { strength: 1 },
          status: { [STATUS_TYPES.STRENGTH]: 1 },
          description: 'Erguerá 15 de armadura de rocha e canalizará +1 de Força!',
          icon: 'shield'
        };
      } else if (cycleStep === 2) {
        const dmg = 18 + strength;
        return {
          type: 'attack_break',
          name: 'Esmagamento Rúnico',
          damage: dmg,
          hits: 1,
          block: 0,
          armorBreak: 6,
          description: `Esmagará causando ${dmg} de dano e quebrando 6 de armadura!`,
          icon: 'attack'
        };
      } else {
        const dmg = 8 + strength;
        return {
          type: 'attack',
          name: 'Sobrecarga de Pedra',
          damage: dmg,
          hits: 2,
          block: 0,
          description: `Descarregará 2 golpes pesados de ${dmg} (${dmg * 2} de dano total)!`,
          icon: 'fist'
        };
      }
    }
  },

  // Ato II: Boss das Minas Profundas de Obsidiana
  lich_rei: {
    id: 'lich_rei',
    name: 'O Lich Rei dos Ossos',
    type: 'boss',
    maxHp: 180,
    description: 'Soberano profano das minas profundas. Conjurador milenar que suga a força vital dos vivos e propaga pragas necromânticas.',
    icon: 'lich',
    getIntention: (turn, enemyState) => {
      const cycleStep = (turn - 1) % 4;
      const strength = enemyState?.statuses?.[STATUS_TYPES.STRENGTH] || enemyState?.buffs?.strength || 0;
      const isPhase2 = enemyState && enemyState.hp <= Math.floor((enemyState.maxHp || 180) * 0.5);

      if (isPhase2) {
        // FASE 2: Forma Espectral dos Condenados
        if (cycleStep === 0) {
          const dmg = 20 + strength;
          return {
            type: 'attack_status',
            name: 'Drenar Vida Profano',
            damage: dmg,
            hits: 1,
            block: 0,
            lifeSteal: 20,
            targetStatus: { [STATUS_TYPES.WEAK]: 2, [STATUS_TYPES.VULNERABLE]: 1 },
            description: `Drenará sua essência vital causando ${dmg} de dano, curando 20 HP, aplicando 2 de Fraco e 1 de Vulnerável!`,
            icon: 'ghost_touch'
          };
        } else if (cycleStep === 1) {
          const dmg = 10 + strength;
          return {
            type: 'attack_status',
            name: 'Peste Cadavérica Fulminante',
            damage: dmg,
            hits: 1,
            block: 0,
            targetStatus: { [STATUS_TYPES.POISON]: 8 },
            description: `Espalhará névoa púrpura causando ${dmg} de dano e 8 de Veneno!`,
            icon: 'magic'
          };
        } else if (cycleStep === 2) {
          return {
            type: 'defend',
            name: 'Vórtice dos Condenados',
            damage: 0,
            hits: 0,
            block: 22,
            buff: { strength: 2 },
            status: { [STATUS_TYPES.STRENGTH]: 2 },
            description: 'Conjura vórtice de 22 de armadura e ganha +2 de Força profana!',
            icon: 'specter_shield'
          };
        } else {
          const dmg = 24 + strength;
          return {
            type: 'attack',
            name: 'Cataclismo Necrótico Final',
            damage: dmg,
            hits: 1,
            block: 0,
            description: `Disparará cataclismo necromântico causando ${dmg} de dano devastador!`,
            icon: 'magic_blast'
          };
        }
      }

      // FASE 1: Conjurador Secular
      if (cycleStep === 0) {
        const dmg = 15 + strength;
        return {
          type: 'attack_status',
          name: 'Drenar Alma',
          damage: dmg,
          hits: 1,
          block: 0,
          lifeSteal: 15,
          targetStatus: { [STATUS_TYPES.WEAK]: 2 },
          description: `Drenará sua alma causando ${dmg} de dano, curando 15 de vida e aplicando 2 de Fraco!`,
          icon: 'ghost_touch'
        };
      } else if (cycleStep === 1) {
        const dmg = 8 + strength;
        return {
          type: 'attack_status',
          name: 'Praga Espectral',
          damage: dmg,
          hits: 1,
          block: 0,
          targetStatus: { [STATUS_TYPES.POISON]: 6 },
          description: `Dispersará miasma púrpura causando ${dmg} de dano e 6 de Veneno!`,
          icon: 'magic'
        };
      } else if (cycleStep === 2) {
        return {
          type: 'defend',
          name: 'Muralha de Almas Penadas',
          damage: 0,
          hits: 0,
          block: 18,
          buff: { strength: 2 },
          status: { [STATUS_TYPES.STRENGTH]: 2 },
          description: 'Conjura barreira espiritual de 18 de armadura e ganha +2 de Força profana!',
          icon: 'specter_shield'
        };
      } else {
        const dmg = 18 + strength;
        return {
          type: 'attack',
          name: 'Onda Necrótica Devastadora',
          damage: dmg,
          hits: 1,
          block: 0,
          description: `Explodirá onda necromântica devastadora causando ${dmg} de dano!`,
          icon: 'magic_blast'
        };
      }
    }
  },

  // Ato III: Clímax Final no Covil Vulcânico
  dragao_tirano: {
    id: 'dragao_tirano',
    name: 'O Grande Dragão Tirano',
    type: 'boss',
    maxHp: 260,
    description: 'O temido governante supremo das profundezas do calabouço. Suas escamas são intransponíveis e seu fogo incinera qualquer invasor.',
    icon: 'dragon',
    getIntention: (turn, enemyState) => {
      const cycleStep = (turn - 1) % 4;
      const strength = enemyState?.statuses?.[STATUS_TYPES.STRENGTH] || enemyState?.buffs?.strength || 0;
      const isPhase2 = enemyState && enemyState.hp <= Math.floor((enemyState.maxHp || 260) * 0.5);

      if (isPhase2) {
        // FASE 2: Ira Vulcânica Incontrolável
        if (cycleStep === 0) {
          const dmg = 12 + strength;
          return {
            type: 'attack_buff',
            name: 'Rugido do Fim dos Tempos',
            damage: dmg,
            hits: 1,
            block: 0,
            buff: { strength: 3 },
            status: { [STATUS_TYPES.STRENGTH]: 3 },
            description: `Rugirá enfurecido causando ${dmg} de dano e ganhando +3 de Força!`,
            icon: 'roar'
          };
        } else if (cycleStep === 1) {
          return {
            type: 'defend',
            name: 'Muralha de Chamas Magmáticas',
            damage: 0,
            hits: 0,
            block: 22,
            targetStatus: { [STATUS_TYPES.BURN]: 3 },
            description: 'Ergue barreira térmica de 22 de armadura e queima você em 3!',
            icon: 'shield_dragon'
          };
        } else if (cycleStep === 2) {
          const dmg = 36 + strength;
          return {
            type: 'attack',
            name: 'Baforada do Apocalipse Vulcânico',
            damage: dmg,
            hits: 1,
            block: 0,
            targetStatus: { [STATUS_TYPES.BURN]: 8 },
            description: `Incinerará tudo com Baforada do Apocalipse causando ${dmg} de dano e 8 de Queimadura!`,
            icon: 'fire_breath'
          };
        } else {
          const dmg = 10 + strength;
          return {
            type: 'attack',
            name: 'Chacina Dracônica Quadrúpla',
            damage: dmg,
            hits: 4,
            block: 0,
            description: `Desferirá múltiplos golpes cortantes: 4 ataques de ${dmg} (${dmg * 4} de dano total)!`,
            icon: 'dragon_claws'
          };
        }
      }

      // FASE 1: Tirano Supremo
      if (cycleStep === 0) {
        const dmg = 8 + strength;
        return {
          type: 'attack_buff',
          name: 'Rugido Aterrador',
          damage: dmg,
          hits: 1,
          block: 0,
          buff: { strength: 2 },
          status: { [STATUS_TYPES.STRENGTH]: 2 },
          description: `Rugirá causando ${dmg} de dano e ganhando +2 de Força!`,
          icon: 'roar'
        };
      } else if (cycleStep === 1) {
        return {
          type: 'defend',
          name: 'Couraça de Escamas',
          damage: 0,
          hits: 0,
          block: 18,
          description: 'Endurecerá suas escamas ancestrais, ganhando 18 de armadura!',
          icon: 'shield_dragon'
        };
      } else if (cycleStep === 2) {
        const dmg = 30 + strength;
        return {
          type: 'attack',
          name: 'Baforada Devastadora de Fogo',
          damage: dmg,
          hits: 1,
          block: 0,
          targetStatus: { [STATUS_TYPES.BURN]: 5 },
          description: `Incinerará a arena com Baforada Devastadora causando ${dmg} de dano e 5 de Queimadura!`,
          icon: 'fire_breath'
        };
      } else {
        const dmg = 10 + strength;
        return {
          type: 'attack',
          name: 'Fúria Dracônica de Garras',
          damage: dmg,
          hits: 3,
          block: 0,
          description: `Desferirá múltiplos golpes cortantes: 3 ataques de ${dmg} (${dmg * 3} de dano total)!`,
          icon: 'dragon_claws'
        };
      }
    }
  }
};

export const ACT_NORMAL_ENEMY_IDS = {
  1: ['goblin_ladino', 'esqueleto_guardiao', 'rato_peste', 'gargula_granito'],
  2: ['feiticeiro_sombrio', 'espectro_lamuriante', 'escavador_obsidiana', 'xama_ossos'],
  3: ['elemental_igneo', 'cultista_draconico']
};

export const NORMAL_ENEMY_IDS = [
  'goblin_ladino',
  'esqueleto_guardiao',
  'rato_peste',
  'gargula_granito',
  'feiticeiro_sombrio',
  'espectro_lamuriante',
  'escavador_obsidiana',
  'xama_ossos',
  'elemental_igneo',
  'cultista_draconico'
];

export const ELITE_ENEMY_IDS = [
  'minotauro_berserker'
];

export const BOSS_ENEMY_ID = 'dragao_tirano';

export const ACT_BOSS_IDS = {
  1: 'golem_guardiao',
  2: 'lich_rei',
  3: 'dragao_tirano'
};

export const ENEMY_AFFIXES = {
  armored: {
    id: 'armored',
    name: 'Couraçado',
    icon: 'armor_affix',
    bonusArmor: 14,
    description: '+14 de armadura no início do combate.'
  },
  vampiric: {
    id: 'vampiric',
    name: 'Vampírico',
    icon: 'vampire_affix',
    healRatio: 0.5,
    description: 'Cura 50% do dano não bloqueado causado à vida do herói.'
  },
  thorns: {
    id: 'thorns',
    name: 'Espinhoso',
    icon: 'thorns_affix',
    retaliation: 3,
    description: 'Retalia 3 de dano ao herói quando sofrer dano direto de ataque.'
  },
  enraged: {
    id: 'enraged',
    name: 'Frenético',
    icon: 'enrage_affix',
    strengthGain: 1,
    interval: 2,
    description: 'A cada 2 turnos ganha +1 de Força permanente.'
  }
};

export const ALL_AFFIX_IDS = Object.keys(ENEMY_AFFIXES);

/**
 * Retorna um afixo aleatório da lista de afixos para Elites.
 * @param {function} [rng=Math.random]
 * @returns {Object}
 */
export function getRandomAffix(rng = Math.random) {
  const idx = Math.floor(rng() * ALL_AFFIX_IDS.length);
  return { ...ENEMY_AFFIXES[ALL_AFFIX_IDS[idx]] };
}

/**
 * Retorna o ID do Boss para um determinado Ato.
 * @param {number} act 1, 2 ou 3
 * @returns {string}
 */
export function getBossIdForAct(act = 1) {
  return ACT_BOSS_IDS[act] || ACT_BOSS_IDS[3] || BOSS_ENEMY_ID;
}

/**
 * Retorna uma instância do Boss correspondente ao Ato informado.
 * @param {number} [act=1]
 * @returns {Object}
 */
export function getBossForAct(act = 1) {
  const bossId = getBossIdForAct(act);
  return createEnemyInstance(bossId);
}

/**
 * Cria uma instância dinâmica do inimigo para combate.
 * @param {string} enemyId
 * @param {Object|string} [options={}] Opções adicionais como affix ({ affix: 'armored' }) ou com afixo sorteado
 * @returns {Object}
 */
export function createEnemyInstance(enemyId, options = {}) {
  const def = ENEMIES[enemyId];
  if (!def) {
    throw new Error(`Inimigo não encontrado com id: "${enemyId}"`);
  }

  const statuses = createDefaultStatusMap();

  let affix = null;
  if (typeof options === 'string' && ENEMY_AFFIXES[options]) {
    affix = { ...ENEMY_AFFIXES[options] };
  } else if (options && typeof options === 'object') {
    if (options.affix) {
      if (typeof options.affix === 'string' && ENEMY_AFFIXES[options.affix]) {
        affix = { ...ENEMY_AFFIXES[options.affix] };
      } else if (typeof options.affix === 'object') {
        affix = { ...options.affix };
      }
    } else if (options.withAffix || options.autoAffix) {
      affix = getRandomAffix(options.rng || Math.random);
    }
  }

  const enemyInstance = {
    id: def.id,
    name: def.name,
    type: def.type,
    maxHp: def.maxHp,
    hp: def.maxHp,
    block: 0,
    statuses,
    affix,
    // Compatibilidade com código existente
    get buffs() {
      return { strength: statuses[STATUS_TYPES.STRENGTH] };
    },
    set buffs(val) {
      if (val && typeof val.strength === 'number') {
        statuses[STATUS_TYPES.STRENGTH] = val.strength;
      }
    },
    icon: def.icon,
    description: def.description,
    currentIntent: null,
    getIntention: (turn) => def.getIntention(turn, enemyInstance)
  };

  return enemyInstance;
}

/**
 * Retorna um inimigo normal aleatório para combates padrão.
 * @param {function} [rng=Math.random]
 * @returns {Object}
 */
export function getRandomNormalEnemy(rng = Math.random) {
  const idx = Math.floor(rng() * NORMAL_ENEMY_IDS.length);
  return createEnemyInstance(NORMAL_ENEMY_IDS[idx]);
}

/**
 * Retorna um inimigo de elite aleatório.
 * @param {function} [rng=Math.random]
 * @param {Object} [options={}]
 * @returns {Object}
 */
export function getRandomEliteEnemy(rng = Math.random, options = {}) {
  const idx = Math.floor(rng() * ELITE_ENEMY_IDS.length);
  return createEnemyInstance(ELITE_ENEMY_IDS[idx], { withAffix: true, ...options });
}

/**
 * Retorna a instância do Chefe Final.
 * @returns {Object}
 */
export function getBossEnemy() {
  return createEnemyInstance(BOSS_ENEMY_ID);
}
