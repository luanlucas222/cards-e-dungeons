/**
 * js/ui/MapRenderer.js
 * Renderizador da Árvore de Caminhos Procedural Convergente (Mapa de Nós) de "Cards e Dungeons".
 * Traça nós clicáveis com estados (disponível, visitado, bloqueado) e conexões dinâmicas SVG.
 */

import { NODE_TYPES, NODE_STATES } from '../engine/MapGenerator.js';

export class MapRenderer {
  /**
   * @param {Object} options
   * @param {HTMLElement} options.container Container da tela do mapa (#screen-map)
   * @param {Object} options.gameState Instância de GameState
   * @param {function} options.onNodeSelect Callback disparado ao clicar em um nó disponível
   */
  constructor({ container, gameState, onNodeSelect }) {
    this.container = container;
    this.gameState = gameState;
    this.onNodeSelect = onNodeSelect;

    this.treeContainer = this.container.querySelector('#map-tree');
    this.svgConnections = this.container.querySelector('#map-connections-svg');
    this.floorIndicatorEl = this.container.querySelector('#map-floor-indicator');

    // Atualiza linhas em redimensionamentos de tela
    window.addEventListener('resize', () => {
      if (this.container.classList.contains('active')) {
        this.drawConnections();
      }
    });
  }

  /**
   * Renderiza a árvore de nós completa
   */
  render() {
    const map = this.gameState.map;
    if (!map || !this.treeContainer) return;

    this.treeContainer.innerHTML = '';

    // Garante que o SVG de conexões permaneça ativo e anexado
    this.svgConnections = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svgConnections.id = 'map-connections-svg';
    this.svgConnections.setAttribute('class', 'map-connections-svg');
    this.treeContainer.appendChild(this.svgConnections);

    // Atualiza indicador do andar atual no topo do mapa e títulos
    if (this.floorIndicatorEl) {
      const currentFloor = this.gameState.currentNode ? this.gameState.currentNode.floor + 1 : 1;
      const act = this.gameState.currentAct || map.act || 1;
      this.floorIndicatorEl.textContent = `Ato ${act} • Andar ${currentFloor} de ${map.totalFloors}`;
    }

    const mapTitleEl = this.container.querySelector('.map-title');
    const mapSubtitleEl = this.container.querySelector('.map-subtitle');
    if (map.actTheme) {
      if (mapTitleEl) mapTitleEl.textContent = map.actTheme.name.toUpperCase();
      if (mapSubtitleEl) mapSubtitleEl.textContent = map.actTheme.description;
    }

    // Renderiza cada andar (camada de nós)
    // O container CSS usa column-reverse, portanto o andar 0 fica na base e o Boss no topo
    map.floors.forEach((floorNodeIds, floorIndex) => {
      const rowEl = document.createElement('div');
      rowEl.className = 'map-floor-row';
      rowEl.dataset.floor = floorIndex;

      // Rótulo do Andar
      const isBossFloor = floorIndex === map.totalFloors - 1;
      const floorLabelEl = document.createElement('div');
      floorLabelEl.className = 'floor-label';
      floorLabelEl.textContent = isBossFloor ? 'Boss' : `F${floorIndex + 1}`;
      rowEl.appendChild(floorLabelEl);

      // Nós do Andar
      floorNodeIds.forEach(nodeId => {
        const node = map.nodes[nodeId];
        const nodeEl = this._createNodeElement(node);
        rowEl.appendChild(nodeEl);
      });

      this.treeContainer.appendChild(rowEl);
    });

    // Rola para o andar do jogador e desenha conexões
    this.scrollToCurrentFloor();

    setTimeout(() => {
      this.drawConnections();
      if (typeof window !== 'undefined' && window.GamepadManager && window.GamepadManager.isGamepadMode) {
        window.GamepadManager.updateContextAndFocus();
      }
    }, 80);
  }

  /**
   * Rola a visão do mapa para centralizar o andar ativo
   */
  scrollToCurrentFloor() {
    const viewport = this.container.querySelector('.map-viewport');
    if (!viewport) return;

    const performScroll = () => {
      const currentFloor = this.gameState.currentNode ? this.gameState.currentNode.floor : 0;
      if (currentFloor === 0) {
        viewport.scrollTop = viewport.scrollHeight;
      } else {
        const activeNode = this.treeContainer.querySelector('.map-node.node-available, .map-node.node-current');
        if (activeNode) {
          activeNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };

    performScroll();
    requestAnimationFrame(() => {
      performScroll();
      setTimeout(performScroll, 60);
    });
  }

  /**
   * Cria o elemento HTML de um nó
   */
  _createNodeElement(node) {
    const nodeEl = document.createElement('div');
    nodeEl.id = `map-node-${node.id}`;
    nodeEl.dataset.id = node.id;

    // Classes de tipo e estado
    const typeClass = `node-${node.type}`;
    const stateClass = `node-${node.state}`;
    nodeEl.className = `map-node ${typeClass} ${stateClass}`;

    const nodeImgMap = {
      [NODE_TYPES.COMBAT]: 'assets/ui/node_combat.png',
      [NODE_TYPES.ELITE]: 'assets/ui/node_elite.png',
      [NODE_TYPES.SHRINE]: 'assets/ui/node_shrine.png',
      [NODE_TYPES.MERCHANT]: 'assets/ui/node_merchant.png',
      [NODE_TYPES.EVENT]: 'assets/ui/node_event.png',
      [NODE_TYPES.TREASURE]: 'assets/ui/node_treasure.png',
      [NODE_TYPES.BOSS]: 'assets/ui/node_boss.png'
    };

    let label = 'Combate';
    let tooltip = 'Combate Comum - Derrote monstros para escolher novas cartas.';
    let tokenImg = nodeImgMap[node.type] || 'assets/ui/node_combat.png';

    if (node.type === NODE_TYPES.BOSS) {
      tokenImg = 'assets/ui/node_boss.png';
      if (node.enemyId === 'golem_guardiao') {
        label = 'Golem';
        tooltip = 'Chefe do Ato I: Golem Guardião Rúnico!';
      } else if (node.enemyId === 'lich_rei') {
        label = 'Lich Rei';
        tooltip = 'Chefe do Ato II: O Lich Rei dos Ossos!';
      } else {
        label = 'Dragão';
        tooltip = 'Chefe Final: O Grande Dragão Tirano!';
      }
    } else if (node.type === NODE_TYPES.ELITE || node.type === 'elite') {
      tokenImg = 'assets/ui/node_elite.png';
      label = 'Elite';
      tooltip = 'Inimigo de Elite (Minotauro Berserker) - Espólio: Relíquia Passiva e Cartas Raras!';
    } else if (node.type === NODE_TYPES.SHRINE) {
      tokenImg = 'assets/ui/node_shrine.png';
      label = 'Santuário';
      tooltip = 'Santuário Místico - Descanse para curar vida ou aprimore cartas na forja.';
    } else if (node.type === NODE_TYPES.MERCHANT || node.type === 'merchant') {
      tokenImg = 'assets/ui/node_merchant.png';
      label = 'Mercador';
      tooltip = 'O Mercador Renegado - Compre cartas raras, relíquias passivas e purifique seu deck.';
    } else if (node.type === NODE_TYPES.EVENT || node.type === 'event') {
      tokenImg = 'assets/ui/node_event.png';
      label = 'Mistério';
      tooltip = 'Evento Misterioso - Encontros arcanos com escolhas táticas de risco e recompensa.';
    } else if (node.type === NODE_TYPES.TREASURE || node.type === 'treasure') {
      tokenImg = 'assets/ui/node_treasure.png';
      label = 'Tesouro';
      tooltip = 'Sala do Tesouro Ancestral - Abra o baú dourado para obter relíquias raras, grande quantia de ouro ou cura!';
    }

    nodeEl.setAttribute('data-tooltip', tooltip);

    nodeEl.innerHTML = `
      <div class="node-icon-wrapper">
        <img src="${tokenImg}" alt="${label}" class="node-token-img" />
      </div>
      <div class="node-type-label">${label}</div>
    `;

    // Interação de Clique se o nó estiver disponível
    if (node.state === NODE_STATES.AVAILABLE) {
      nodeEl.addEventListener('click', () => {
        this._handleNodeClick(node);
      });
    }

    return nodeEl;
  }

  /**
   * Trata o clique no nó
   */
  _handleNodeClick(node) {
    if (node.state !== NODE_STATES.AVAILABLE) return;

    if (typeof window !== 'undefined' && window.SoundFX) {
      window.SoundFX.playButtonClick();
    }

    if (this.onNodeSelect) {
      this.onNodeSelect(node.id);
    }
  }

  /**
   * Traça as linhas conectoras no SVG medindo com precisão matemática as posições dos nós
   */
  drawConnections() {
    const map = this.gameState.map;
    if (!map || !this.svgConnections || !this.treeContainer) return;

    this.svgConnections.innerHTML = '';
    const containerRect = this.treeContainer.getBoundingClientRect();
    this.svgConnections.setAttribute('width', containerRect.width);
    this.svgConnections.setAttribute('height', containerRect.height);
    this.svgConnections.style.width = `${containerRect.width}px`;
    this.svgConnections.style.height = `${containerRect.height}px`;

    // Itera por todos os nós e desenha linhas para seus nextNodes
    Object.values(map.nodes).forEach(node => {
      const sourceEl = document.getElementById(`map-node-${node.id}`);
      if (!sourceEl) return;

      const sourceRect = sourceEl.getBoundingClientRect();
      const sourceX = sourceRect.left - containerRect.left + sourceRect.width / 2;
      const sourceY = sourceRect.top - containerRect.top + sourceRect.height / 2;

      node.nextNodes.forEach(targetId => {
        const targetNode = map.nodes[targetId];
        const targetEl = document.getElementById(`map-node-${targetId}`);
        if (!targetEl || !targetNode) return;

        const targetRect = targetEl.getBoundingClientRect();
        const targetX = targetRect.left - containerRect.left + targetRect.width / 2;
        const targetY = targetRect.top - containerRect.top + targetRect.height / 2;

        // Determina classe visual da linha
        let lineClass = 'map-path-line';
        if (node.state === NODE_STATES.VISITED && targetNode.state === NODE_STATES.VISITED) {
          lineClass += ' path-active';
        } else if (node.state === NODE_STATES.VISITED && targetNode.state === NODE_STATES.AVAILABLE) {
          lineClass += ' path-available';
        } else if (node.state === NODE_STATES.AVAILABLE) {
          lineClass += ' path-connecting-available';
        }

        // Cria o elemento SVG <line>
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', sourceX);
        line.setAttribute('y1', sourceY);
        line.setAttribute('x2', targetX);
        line.setAttribute('y2', targetY);
        line.setAttribute('class', lineClass);

        this.svgConnections.appendChild(line);
      });
    });
  }
}
