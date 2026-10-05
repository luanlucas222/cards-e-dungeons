/**
 * js/engine/MapGenerator.js
 * Gerador procedural de árvore de caminhos convergentes (grafo acíclico direcionado)
 * para "Cards e Dungeons".
 */

import { NORMAL_ENEMY_IDS, ACT_NORMAL_ENEMY_IDS, ELITE_ENEMY_IDS, BOSS_ENEMY_ID, getBossIdForAct, getRandomAffix } from '../data/enemies.js';

export const NODE_TYPES = {
  COMBAT: 'combat',
  ELITE: 'elite',
  SHRINE: 'shrine',
  MERCHANT: 'merchant',
  EVENT: 'event',
  TREASURE: 'treasure',
  BOSS: 'boss'
};

export const NODE_STATES = {
  LOCKED: 'locked',
  AVAILABLE: 'available',
  VISITED: 'visited'
};

export const ACT_THEMES = {
  1: {
    act: 1,
    name: 'Ato I: As Catacumbas Esquecidas',
    shortTitle: 'As Catacumbas Esquecidas',
    description: 'Catacumbas subterrâneas repletas de mortos-vivos e vigiadas pelo colossal Golem Guardião.',
    bossId: 'golem_guardiao',
    bossName: 'Golem Guardião Rúnico',
    background: 'assets/backgrounds/catacombs.jpg'
  },
  2: {
    act: 2,
    name: 'Ato II: As Minas Profundas de Obsidiana',
    shortTitle: 'As Minas Profundas de Obsidiana',
    description: 'Minas abandonadas ricas em obsidiana negra e dominadas pelo necromante Lich Rei dos Ossos.',
    bossId: 'lich_rei',
    bossName: 'O Lich Rei dos Ossos',
    background: 'assets/backgrounds/mines.jpg'
  },
  3: {
    act: 3,
    name: 'Ato III: O Covil Vulcânico do Tirano',
    shortTitle: 'O Covil Vulcânico do Tirano',
    description: 'As câmaras magmáticas finais onde repousa o soberano supremo das chamas, o Grande Dragão Tirano.',
    bossId: 'dragao_tirano',
    bossName: 'O Grande Dragão Tirano',
    background: 'assets/backgrounds/dragon_lair.jpg'
  }
};

/**
 * Classe responsável por gerar e gerenciar o mapa procedural de nós.
 */
export class MapGenerator {
  /**
   * @param {Object} options
   * @param {number} [options.act=1] Ato atual da campanha (1, 2 ou 3)
   * @param {number} [options.totalFloors] Número de andares (padrão: 15 se act definido, 6 para legado)
   * @param {number} [options.minNodesPerFloor=3] Mínimo de bifurcações intermediárias
   * @param {number} [options.maxNodesPerFloor=5] Máximo de bifurcações intermediárias
   * @param {number} [options.shrineChance=0.35] Probabilidade de nós de santuário em andares intermediários
   * @param {number} [options.eliteChance=0.28] Probabilidade de nós de elite
   * @param {number} [options.merchantChance=0.35] Probabilidade de nós de mercador
   * @param {number} [options.eventChance=0.28] Probabilidade de nós de eventos narrativos misteriosos
   * @param {function} [options.rng=Math.random] Gerador pseudo-aleatório
   */
  constructor(options = {}) {
    this.act = options.act || (options.totalFloors ? 1 : null);
    // Se totalFloors não foi passado: se act foi explicitado usa 15, senão mantém 6 (retrocompatibilidade)
    this.totalFloors = options.totalFloors || (options.act ? 15 : 6);
    this.minNodesPerFloor = options.minNodesPerFloor || (this.totalFloors >= 10 ? 3 : 2);
    this.maxNodesPerFloor = options.maxNodesPerFloor || (this.totalFloors >= 10 ? 5 : 3);
    this.shrineChance = options.shrineChance ?? 0.35;
    this.eliteChance = options.eliteChance ?? 0.28;
    this.merchantChance = options.merchantChance ?? 0.35;
    this.eventChance = options.eventChance ?? 0.28;
    this.rng = options.rng || Math.random;
  }

  /**
   * Gera um mapa completo e validado que culmina no Boss.
   * @returns {Object} Mapa contendo nós indexados por ID, andares e metadados
   */
  generateMap() {
    const nodes = {};
    const floors = [];

    // Determina o Boss do mapa de acordo com o Ato
    const actNumber = this.act || 1;
    const actTheme = ACT_THEMES[actNumber] || ACT_THEMES[1];
    const bossId = this.act ? (actTheme.bossId || getBossIdForAct(actNumber)) : BOSS_ENEMY_ID;

    // Planejamento de fogueiras (NODE_TYPES.SHRINE):
    // - Para mapas de 15 andares (this.totalFloors >= 14):
    //   1 fogueira intermediária (andar 4 ou 5) e 1 fogueira garantida no andar 13 (pré-boss).
    // - Para mapas de 10 andares: andares 4/5 e pré-boss.
    // - Para mapas de 6 andares (legado): no máximo 1 fogueira em andar intermediário.
    const shrineNodeByFloor = {};
    if (this.shrineChance > 0) {
      if (this.totalFloors >= 14) {
        const midFloor = this.rng() < 0.5 ? 4 : 5;
        shrineNodeByFloor[midFloor] = true;
        shrineNodeByFloor[this.totalFloors - 2] = true;
      } else if (this.totalFloors > 6) {
        const midFloor = this.rng() < 0.5 ? 4 : 5;
        shrineNodeByFloor[midFloor] = true;
        if (this.rng() < 0.5) {
          shrineNodeByFloor[this.totalFloors - 2] = true;
        }
      } else {
        const midFloor = Math.floor(this.totalFloors / 2);
        shrineNodeByFloor[midFloor] = true;
      }
    }

    // 1. Criar nós para cada andar
    for (let floor = 0; floor < this.totalFloors; floor++) {
      floors[floor] = [];
      const isFirstFloor = floor === 0;
      const isLastFloor = floor === this.totalFloors - 1;
      const isPreBossFloor = floor === this.totalFloors - 2;

      let nodeCount;
      if (isLastFloor) {
        nodeCount = 1; // Nó único do Chefe Final do Ato
      } else if (isFirstFloor) {
        nodeCount = (this.totalFloors >= 10) ? 3 : 2; // Começo com 3 opções de entrada
      } else if (isPreBossFloor) {
        nodeCount = (this.totalFloors >= 10) ? 3 : 2; // Convergência suave antes do Boss
      } else if (this.totalFloors >= 14 && floor === 7) {
        nodeCount = 3; // Andar 7: Sala do Tesouro Ancestral
      } else {
        nodeCount = Math.floor(this.rng() * (this.maxNodesPerFloor - this.minNodesPerFloor + 1)) + this.minNodesPerFloor;
      }

      // Se este andar foi selecionado para fogueira, sorteia exatamente 1 coluna única para ser santuário
      let shrineCol = -1;
      if (shrineNodeByFloor[floor]) {
        shrineCol = Math.floor(this.rng() * nodeCount);
      }

      for (let col = 0; col < nodeCount; col++) {
        const nodeId = `f${floor}_n${col}`;
        let type;
        let enemyId = null;

        if (isLastFloor) {
          type = NODE_TYPES.BOSS;
          enemyId = bossId;
        } else if (isFirstFloor) {
          type = NODE_TYPES.COMBAT;
          enemyId = this._pickRandomEnemy();
        } else if (this.totalFloors >= 14 && floor === 7) {
          type = NODE_TYPES.TREASURE;
        } else {
          // Andares intermediários calibrados com escassez de cura
          const isShrine = (col === shrineCol);
          const isEligibleForElite = this.totalFloors >= 14
            ? (floor === 5 || floor === 6 || floor === 9 || floor === 10 || floor === 11 || floor === 12)
            : (this.totalFloors > 6
                ? (floor === 3 || floor === 4 || floor === 6 || floor === 7)
                : (floor === 2 || floor === 3));
          const isElite = !isShrine && isEligibleForElite && this.rng() < this.eliteChance;

          const isEligibleForMerchant = this.totalFloors >= 14
            ? (floor === 3 || floor === 6 || floor === 8 || floor === 11)
            : (this.totalFloors > 6
                ? (floor === 2 || floor === 4 || floor === 7)
                : (floor === 2 || floor === 3 || floor === 4));
          const isMerchant = !isShrine && !isElite && isEligibleForMerchant && this.rng() < this.merchantChance;

          const isEligibleForEvent = this.totalFloors >= 14
            ? (floor >= 1 && floor <= this.totalFloors - 2 && floor !== 7)
            : (this.totalFloors > 6
                ? (floor >= 1 && floor <= this.totalFloors - 2)
                : (floor >= 1 && floor <= 4));
          const isEvent = !isShrine && !isElite && !isMerchant && isEligibleForEvent && this.rng() < this.eventChance;

          if (isShrine) {
            type = NODE_TYPES.SHRINE;
          } else if (isElite) {
            type = NODE_TYPES.ELITE;
            enemyId = this._pickEliteEnemy();
          } else if (isMerchant) {
            type = NODE_TYPES.MERCHANT;
          } else if (isEvent) {
            type = NODE_TYPES.EVENT;
          } else {
            type = NODE_TYPES.COMBAT;
            enemyId = this._pickRandomEnemy();
          }
        }

        const node = {
          id: nodeId,
          floor,
          colIndex: col,
          totalColsInFloor: nodeCount,
          type,
          enemyId,
          affix: (type === NODE_TYPES.ELITE) ? getRandomAffix(this.rng) : null,
          nextNodes: [],
          parentNodes: [],
          state: isFirstFloor ? NODE_STATES.AVAILABLE : NODE_STATES.LOCKED,
          // Coordenadas normalizadas (0 a 100) para facilitar renderização da UI
          x: ((col + 1) / (nodeCount + 1)) * 100,
          y: (floor / (this.totalFloors - 1)) * 100
        };

        nodes[nodeId] = node;
        floors[floor].push(nodeId);
      }
    }

    // 2. Estabelecer conexões de arestas entre andares consecutivos
    for (let floor = 0; floor < this.totalFloors - 1; floor++) {
      const currentFloorNodes = floors[floor].map(id => nodes[id]);
      const nextFloorNodes = floors[floor + 1].map(id => nodes[id]);

      // Se o próximo andar for o Boss (1 nó), todos conectam nele
      if (nextFloorNodes.length === 1) {
        const bossNode = nextFloorNodes[0];
        for (const node of currentFloorNodes) {
          node.nextNodes.push(bossNode.id);
          bossNode.parentNodes.push(node.id);
        }
        continue;
      }

      // Conexões direcionadas com alinhamento de colunas para evitar cruzamento desordenado
      for (const curr of currentFloorNodes) {
        // Conecta com nós cuja coluna seja próxima
        const validNext = nextFloorNodes.filter(next => {
          const ratioCurr = curr.colIndex / Math.max(1, currentFloorNodes.length - 1);
          const ratioNext = next.colIndex / Math.max(1, nextFloorNodes.length - 1);
          return Math.abs(ratioCurr - ratioNext) <= 0.65;
        });

        // Garantir ao menos 1 conexão de saída
        const targets = validNext.length > 0 ? validNext : [nextFloorNodes[0]];
        for (const target of targets) {
          if (!curr.nextNodes.includes(target.id)) {
            curr.nextNodes.push(target.id);
          }
          if (!target.parentNodes.includes(curr.id)) {
            target.parentNodes.push(curr.id);
          }
        }
      }

      // Garantir que cada nó do próximo andar tenha ao menos 1 pai
      for (const next of nextFloorNodes) {
        if (next.parentNodes.length === 0) {
          // Conecta o nó atual mais próximo em coluna
          let closest = currentFloorNodes[0];
          let minDiff = 999;
          for (const curr of currentFloorNodes) {
            const diff = Math.abs(curr.colIndex - next.colIndex);
            if (diff < minDiff) {
              minDiff = diff;
              closest = curr;
            }
          }
          if (!closest.nextNodes.includes(next.id)) {
            closest.nextNodes.push(next.id);
          }
          next.parentNodes.push(closest.id);
        }
      }
    }

    const mapData = {
      act: actNumber,
      actTheme,
      totalFloors: this.totalFloors,
      nodes,
      floors,
      bossNodeId: floors[this.totalFloors - 1][0],
      currentNodeId: null
    };

    // Validar integridade
    this.validateMap(mapData);

    return mapData;
  }

  /**
   * Valida se todos os caminhos iniciados em nós disponíveis levam ao nó do Boss.
   * @param {Object} mapData
   * @returns {boolean}
   */
  validateMap(mapData) {
    const { nodes, bossNodeId, floors } = mapData;
    const startNodes = floors[0];

    // Checar conectividade de cada nó inicial até o boss
    for (const startId of startNodes) {
      const visited = new Set();
      const queue = [startId];
      let reachedBoss = false;

      while (queue.length > 0) {
        const currId = queue.shift();
        if (currId === bossNodeId) {
          reachedBoss = true;
          break;
        }
        if (!visited.has(currId)) {
          visited.add(currId);
          const curr = nodes[currId];
          if (!curr) {
            throw new Error(`Nó inválido encontrado: ${currId}`);
          }
          for (const nextId of curr.nextNodes) {
            queue.push(nextId);
          }
        }
      }

      if (!reachedBoss) {
        throw new Error(`Caminho órfão detectado: nó inicial "${startId}" não alcança o boss "${bossNodeId}"`);
      }
    }

    // Validação extra: garantir que nunca apareçam duas fogueiras consecutivas no mesmo caminho
    for (const nodeId in nodes) {
      const node = nodes[nodeId];
      if (node.type === NODE_TYPES.SHRINE) {
        for (const nextId of node.nextNodes) {
          if (nodes[nextId] && nodes[nextId].type === NODE_TYPES.SHRINE) {
            throw new Error(`Fogueiras consecutivas detectadas entre nó "${nodeId}" e "${nextId}"`);
          }
        }
      }
    }

    return true;
  }

  /**
   * Atualiza os estados dos nós após o jogador visitar um nó.
   * @param {Object} mapData
   * @param {string} visitedNodeId
   */
  static advanceToNode(mapData, visitedNodeId) {
    const node = mapData.nodes[visitedNodeId];
    if (!node) {
      throw new Error(`Nó não encontrado: ${visitedNodeId}`);
    }

    if (node.state !== NODE_STATES.AVAILABLE && node.state !== NODE_STATES.VISITED) {
      throw new Error(`Nó ${visitedNodeId} não está disponível para visita (estado: ${node.state})`);
    }

    // 1. Marca o nó atual como visitado
    node.state = NODE_STATES.VISITED;
    mapData.currentNodeId = visitedNodeId;

    // 2. Bloqueia todos os nós da mesma camada ou anteriores que ainda estavam available
    for (const id of mapData.floors[node.floor]) {
      if (id !== visitedNodeId && mapData.nodes[id].state === NODE_STATES.AVAILABLE) {
        mapData.nodes[id].state = NODE_STATES.LOCKED;
      }
    }

    // 3. Libera os nós conectados (próxima camada) tornando-os 'available'
    const nextFloor = node.floor + 1;
    if (nextFloor < mapData.totalFloors) {
      // Bloqueia todos do próximo andar primeiro
      for (const id of mapData.floors[nextFloor]) {
        mapData.nodes[id].state = NODE_STATES.LOCKED;
      }
      // Disponibiliza apenas os filhos conectados diretamente
      for (const nextId of node.nextNodes) {
        mapData.nodes[nextId].state = NODE_STATES.AVAILABLE;
      }
    }
  }

  _pickRandomEnemy() {
    if (this.act && ACT_NORMAL_ENEMY_IDS && ACT_NORMAL_ENEMY_IDS[this.act]) {
      const actEnemies = ACT_NORMAL_ENEMY_IDS[this.act];
      const idx = Math.floor(this.rng() * actEnemies.length);
      return actEnemies[idx];
    }
    const idx = Math.floor(this.rng() * NORMAL_ENEMY_IDS.length);
    return NORMAL_ENEMY_IDS[idx];
  }

  _pickEliteEnemy() {
    const idx = Math.floor(this.rng() * ELITE_ENEMY_IDS.length);
    return ELITE_ENEMY_IDS[idx];
  }
}
