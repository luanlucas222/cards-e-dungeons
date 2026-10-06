/**
 * js/ui/CardRenderer.js
 * Renderizador de elementos visuais de Cartas para "Cards e Dungeons".
 * Suporta 18 cartas únicas, 5 níveis de raridade (Starter, Common, Uncommon, Rare, Legendary),
 * efeitos de status coloridos e animações táteis.
 */

export class CardRenderer {
  /**
   * Mapeamento de identificadores de ícones para chaves de SVGs
   */
  static getIconSvg(iconKey) {
    const assets = (typeof window !== 'undefined' && window.GameAssets) || {};
    const svgs = assets.SVGS || {};

    switch (iconKey) {
      case 'fist':
      case 'shout':
      case 'stun_smash':
      case 'earthquake':
        return svgs.fist || svgs.sword || '';
      case 'boot':
      case 'kick':
        return svgs.kick || '';
      case 'sword':
      case 'double_strike':
      case 'thrust':
      case 'vorpal':
      case 'blade_dance':
        return svgs.sword || '';
      case 'wood_shield':
      case 'iron_wall':
      case 'shield':
      case 'spiky_shield':
        return svgs.shield || '';
      case 'berserk':
      case 'fire':
      case 'flame_strike':
      case 'meteor':
      case 'phoenix_flame':
        return svgs.fire || '';
      case 'heal':
        return svgs.heal || '';
      case 'magic':
        return svgs.magic || '';
      default:
        return svgs[iconKey] || svgs.sword || '';
    }
  }

  /**
   * Retorna o rótulo em português do tipo de carta
   */
  static getTypeLabel(type) {
    switch (type) {
      case 'attack':
        return 'Ataque';
      case 'defense':
        return 'Defesa';
      case 'skill':
        return 'Habilidade';
      case 'special':
        return 'Especial';
      default:
        return 'Carta';
    }
  }

  /**
   * Retorna o rótulo em português da raridade da carta
   */
  static getRarityLabel(rarity) {
    switch (rarity) {
      case 'starter':
        return 'Inicial';
      case 'common':
        return 'Comum';
      case 'uncommon':
        return 'Incomum';
      case 'rare':
        return 'Rara';
      case 'legendary':
        return 'Lendária';
      default:
        return '';
    }
  }

  /**
   * Formata a descrição da carta destacando valores numéricos e status com cores rúnicas
   * e tooltips explicativos universais
   */
  static formatDescription(description) {
    if (!description) return '';

    return description
      // Quebra de Armadura
      .replace(/Quebra\s+(?:(\d+)\s+de\s+armadura|de\s+armadura)/gi, (match, val) => {
        const label = val ? `Quebra ${val} Armadura💥` : 'Quebra de Armadura💥';
        return `<span class="stat-damage stat-val" data-tooltip="Quebra de Armadura: Destrói o escudo do inimigo antes de aplicar dano.">${label}</span>`;
      })
      // Dano, Armadura, Vida, Energia
      .replace(/(\d+)\s+de\s+dano/gi, '<span class="stat-damage stat-val">$1 de dano</span>')
      .replace(/(\d+)\s+de\s+armadura/gi, '<span class="stat-block stat-val">$1 de armadura</span>')
      .replace(/(\d+)\s+pontos?\s+de\s+vida|(\d+)\s+de\s+vida|cura\s+(\d+)\s+hp/gi, '<span class="stat-heal stat-val">+$1$2$3 Vida</span>')
      .replace(/(\d+)\s+de\s+energia/gi, '<span class="stat-special stat-val">+$1 Energia</span>')
      // Status e Palavras-chave com Tooltips Universais
      .replace(/(\d+)\s+de\s+Queimadura|(\d+)\s+Queimadura/gi, '<span class="stat-damage stat-val" data-tooltip="Queimadura: Causa dano de fogo no início do turno e reduz em 1.">$1$2 Queimadura🔥</span>')
      .replace(/queima o inimigo em (\d+)/gi, '<span class="stat-damage stat-val" data-tooltip="Queimadura: Causa dano de fogo no início do turno e reduz em 1.">queima em $1🔥</span>')
      .replace(/(\d+)\s+de\s+Vulnerável|(\d+)\s+Vulnerável/gi, '<span class="stat-val" style="color: #c084fc;" data-tooltip="Vulnerável: Alvo recebe 50% a mais de dano de ataques físicos.">$1$2 Vulnerável⚡</span>')
      .replace(/(\d+)\s+de\s+Fraco|(\d+)\s+Fraco/gi, '<span class="stat-val" style="color: #94a3b8;" data-tooltip="Fraco: Alvo causa 25% a menos de dano com seus ataques.">$1$2 Fraco🛡️</span>')
      .replace(/(\d+)\s+de\s+Veneno|(\d+)\s+Veneno/gi, '<span class="stat-poison stat-val" data-tooltip="Veneno: Causa dano letal direto na Vida no final do turno (ignora escudo) e decai em 1.">$1$2 Veneno☠️</span>')
      .replace(/(\d+)\s+de\s+Retaliação|(\d+)\s+de\s+Espinhos/gi, '<span class="stat-block stat-val" data-tooltip="Espinhos: Retalia dano direto ao atacante quando você sofrer um ataque.">$1$2 Espinhos🌵</span>')
      .replace(/\+(\d+)\s+de\s+Força|(\d+)\s+de\s+Força|\+(\d+)\s+Força/gi, (match, p1, p2, p3) => {
        const val = p1 || p2 || p3;
        return `<span class="stat-special stat-val" data-tooltip="Força: Aumenta o dano de todos os ataques físicos pelo valor da Força.">+${val} Força⚔️</span>`;
      })
      .replace(/Exausta\.?/gi, '<span class="stat-val" style="color: #fb7185;" data-tooltip="Exausta: Esta carta é removida do combate atual após ser jogada.">Exausta</span>')
      .replace(/Carta\s+Lendária:/gi, '<span class="stat-special stat-val">Lendária:</span>');
  }

  /**
  /**
   * Mapeia ilustrações Dark Fantasy HD das cartas
   */
  static getCardIllustrationUrl(card) {
    if (!card) return null;
    const cardImgMap = {
      // Iniciais do Guerreiro Rúnico
      'murro': 'assets/cards/murro.jpg',
      'chute': 'assets/cards/chute.jpg',
      'espada': 'assets/cards/sword.jpg',
      'escudo_madeira': 'assets/cards/escudo_madeira.jpg',

      // Cartas Comuns
      'estocada_precisa': 'assets/cards/estocada_precisa.jpg',
      'golpe_flamejante': 'assets/cards/flame.jpg',
      'grito_intimidador': 'assets/cards/grito_intimidador.jpg',

      // Cartas Incomuns
      'golpe_duplo': 'assets/cards/golpe_duplo.jpg',
      'muralha_ferro': 'assets/cards/muralha_ferro.jpg',
      'pancada_atordoante': 'assets/cards/pancada_atordoante.jpg',
      'postura_espinhos': 'assets/cards/postura_espinhos.jpg',
      'danca_laminas': 'assets/cards/danca_laminas.jpg',

      // Cartas Raras
      'furia_berserker': 'assets/cards/furia_berserker.jpg',
      'cura_espiritual': 'assets/cards/cura_espiritual.jpg',
      'corte_vorpal': 'assets/cards/corte_vorpal.jpg',
      'impacto_pesado': 'assets/cards/impacto_pesado.jpg',

      // Cartas Lendárias
      'chuva_meteoros': 'assets/cards/meteor.jpg',
      'chamas_da_fenix': 'assets/cards/phoenix.jpg',

      // Cartas da Ladina das Sombras
      'adaga_rapida': 'assets/cards/adaga_rapida.jpg',
      'golpe_envenenado': 'assets/cards/golpe_envenenado.jpg',
      'passo_sombrio': 'assets/cards/passo_sombrio.jpg',
      'esquiva_agil': 'assets/cards/esquiva_agil.jpg',
      'lacerar': 'assets/cards/lacerar.jpg',
      'nevoa_toxica': 'assets/cards/nevoa_toxica.jpg',

      // Cartas do Mago Elemental
      'centelha_de_fogo': 'assets/cards/centelha_de_fogo.jpg',
      'raio_gelido': 'assets/cards/raio_gelido.jpg',
      'barreira_de_mana': 'assets/cards/barreira_de_mana.jpg',
      'meditacao_arcana': 'assets/cards/meditacao_arcana.jpg',
      'rajada_arcana': 'assets/cards/rajada_arcana.jpg',
      'cometa_arcano': 'assets/cards/cometa_arcano.jpg',

      // Expansão: Guerreiro Rúnico (+8)
      'golpe_de_escudo': 'assets/cards/shield.jpg',
      'reforco_ferreo': 'assets/cards/muralha_ferro.jpg',
      'muralha_viva': 'assets/cards/postura_espinhos.jpg',
      'rompe_guarda': 'assets/cards/chute.jpg',
      'golpe_frenetico': 'assets/cards/furia_berserker.jpg',
      'grito_de_guerra': 'assets/cards/grito_intimidador.jpg',
      'devastacao': 'assets/cards/impacto_pesado.jpg',
      'ressurgencia_titanica': 'assets/cards/cura_espiritual.jpg',

      // Expansão: Ladina das Sombras (+8)
      'catalisador_toxico': 'assets/cards/nevoa_toxica.jpg',
      'nuvem_de_esporos': 'assets/cards/nevoa_toxica.jpg',
      'adaga_contaminada': 'assets/cards/golpe_envenenado.jpg',
      'toxina_letal': 'assets/cards/golpe_envenenado.jpg',
      'chuva_de_adagas': 'assets/cards/danca_laminas.jpg',
      'reflexo_fantasma': 'assets/cards/passo_sombrio.jpg',
      'golpe_no_tendao': 'assets/cards/lacerar.jpg',
      'execucao_sombria': 'assets/cards/corte_vorpal.jpg',

      // Expansão: Mago Elemental (+8)
      'incinerar': 'assets/cards/flame.jpg',
      'manto_de_chamas': 'assets/cards/phoenix.jpg',
      'ignicao_cosmica': 'assets/cards/centelha_de_fogo.jpg',
      'supernova': 'assets/cards/meteor.jpg',
      'lanca_de_gelo': 'assets/cards/raio_gelido.jpg',
      'fluxo_de_eter': 'assets/cards/barreira_de_mana.jpg',
      'escudo_cristalino': 'assets/cards/barreira_de_mana.jpg',
      'eco_temporal': 'assets/cards/meditacao_arcana.jpg'
    };
    return cardImgMap[card.id] || null;
  }

  /**
   * Cria o elemento DOM representando uma carta de jogo
   * @param {Object} card Objeto de dados da carta
   * @param {Object} [options] Opções de renderização
   * @param {boolean} [options.playable=true] Se a carta pode ser clicada para jogar
   * @param {boolean} [options.disabled=false] Se a carta deve aparecer desabilitada
   * @param {function} [options.onClick] Callback ao clicar na carta
   * @param {function} [options.onHover] Callback ao passar mouse
   * @returns {HTMLElement} Elemento DOM .game-card
   */
  static renderCard(card, options = {}) {
    const {
      playable = true,
      disabled = false,
      onClick = null,
      onHover = null,
      customClass = ''
    } = options;

    let cardEl;
    if (typeof document !== 'undefined') {
      cardEl = document.createElement('div');
    } else {
      cardEl = {
        className: '',
        dataset: {},
        classList: {
          contains: (cls) => (cardEl.className || '').split(/\s+/).includes(cls)
        },
        setAttribute: () => {},
        removeAttribute: () => {},
        addEventListener: () => {},
        style: {}
      };
    }
    const typeClass = `card-${card.type || 'attack'}`;
    const rarityClass = `card-${card.rarity || 'starter'}`;
    const isUpgraded = Boolean(card.isUpgraded);
    const upgradedClass = isUpgraded ? 'is-upgraded' : '';
    cardEl.className = `game-card ${typeClass} ${rarityClass} ${upgradedClass} ${disabled ? 'disabled' : ''} ${customClass}`.trim();
    cardEl.dataset.uid = card.uid || '';
    cardEl.dataset.id = card.id || '';
    cardEl.dataset.cost = card.cost ?? 0;
    cardEl.dataset.rarity = card.rarity || 'starter';
    if (isUpgraded) {
      cardEl.dataset.upgraded = 'true';
    }

    const iconSvg = CardRenderer.getIconSvg(card.icon);
    const typeLabel = CardRenderer.getTypeLabel(card.type);
    const rarityLabel = CardRenderer.getRarityLabel(card.rarity);
    const formattedDesc = CardRenderer.formatDescription(card.description);
    const imgUrl = CardRenderer.getCardIllustrationUrl(card);

    const artHtml = imgUrl
      ? `<img src="${imgUrl}" class="card-art-img" alt="${card.name}" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='block';">
         <div class="card-art-svg-fallback" style="display:none; width:100%; height:100%;">${iconSvg}</div>`
      : iconSvg;

    const cleanTitle = isUpgraded && card.name.endsWith('+') ? card.name.slice(0, -1) : card.name;
    const upgradeBadgeHtml = isUpgraded ? '<span class="upgraded-badge">+</span>' : '';

    cardEl.innerHTML = `
      <div class="card-glare"></div>
      <div class="card-cost" title="Custo de Energia">${card.cost}</div>
      <div class="card-header">
        <span class="card-title">${cleanTitle}${upgradeBadgeHtml}</span>
      </div>
      <div class="card-art-frame">
        ${artHtml}
      </div>
      <div class="card-type-badge">${typeLabel}${rarityLabel && card.rarity !== 'starter' ? ` • ${rarityLabel}` : ''}</div>
      <div class="card-body">
        <p class="card-description">${formattedDesc}</p>
      </div>
    `;

    // Ativa inclinação tátil 3D e reflexo dinâmico de luz
    CardRenderer.setupCardTilt(cardEl);

    // Interações de Mouse e Toque
    if (onHover) {
      cardEl.addEventListener('mouseenter', (e) => {
        if (!cardEl.classList.contains('disabled')) {
          onHover(card, cardEl, e);
        }
      });
    }

    if (onClick && playable) {
      cardEl.addEventListener('click', (e) => {
        onClick(card, cardEl, e);
      });
    }

    return cardEl;
  }

  /**
   * Configura inclinação 3D tátil (3D Tilt) e reflexo dinâmico de luz
   */
  static setupCardTilt(cardEl) {
    if (!cardEl || typeof cardEl.addEventListener !== 'function') return;

    let isHovered = false;
    let rafId = null;

    const handleMove = (clientX, clientY) => {
      if (!isHovered || (cardEl.classList && cardEl.classList.contains('disabled'))) return;
      if (typeof cardEl.getBoundingClientRect !== 'function') return;
      const rect = cardEl.getBoundingClientRect();
      if (!rect || rect.width === 0 || rect.height === 0) return;

      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = Math.max(-9, Math.min(9, ((y - centerY) / centerY) * -9));
      const rotateY = Math.max(-9, Math.min(9, ((x - centerX) / centerX) * 9));
      const glareX = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const glareY = Math.max(0, Math.min(100, (y / rect.height) * 100));

      if (cardEl.style) {
        cardEl.style.setProperty('--glare-x', `${glareX.toFixed(1)}%`);
        cardEl.style.setProperty('--glare-y', `${glareY.toFixed(1)}%`);
        cardEl.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-10px) scale(1.05)`;
      }
    };

    cardEl.addEventListener('mouseenter', () => {
      isHovered = true;
    });

    cardEl.addEventListener('mousemove', (e) => {
      if (typeof requestAnimationFrame === 'function') {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => handleMove(e.clientX, e.clientY));
      } else {
        handleMove(e.clientX, e.clientY);
      }
    });

    cardEl.addEventListener('mouseleave', () => {
      isHovered = false;
      if (rafId && typeof cancelAnimationFrame === 'function') cancelAnimationFrame(rafId);
      if (cardEl.style) {
        cardEl.style.transform = '';
        cardEl.style.removeProperty('--glare-x');
        cardEl.style.removeProperty('--glare-y');
      }
    });
  }

  /**
   * Renderiza o verso colecionável da carta (pedra rúnica e dragão em relevo)
   */
  static renderCardBack(customClass = '') {
    let backEl;
    if (typeof document !== 'undefined') {
      backEl = document.createElement('div');
    } else {
      backEl = { className: '', setAttribute: () => {}, innerHTML: '' };
    }
    backEl.className = `game-card card-back ${customClass}`.trim();
    const assets = (typeof window !== 'undefined' && window.GameAssets) || {};
    const dragonSvg = (assets.SVGS && assets.SVGS.dragon) || '<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>';
    backEl.innerHTML = `
      <div class="card-glare"></div>
      <div class="card-back-emblem">
        ${dragonSvg}
      </div>
    `;
    return backEl;
  }

  /**
   * Renderiza uma lista/grid de cartas em um container
   * @param {HTMLElement} container
   * @param {Array<Object>} cards
   * @param {Object} options
   */
  static renderCardGrid(container, cards, options = {}) {
    if (!container) return;
    container.innerHTML = '';

    cards.forEach(card => {
      const cardEl = CardRenderer.renderCard(card, options);
      container.appendChild(cardEl);
    });
  }
}
