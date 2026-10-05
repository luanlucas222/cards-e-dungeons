/**
 * CARDS E DUNGEONS - Standalone Universal Game Bundle (v1.0)
 * Gerado para execução instantânea tanto via protocolo file:/// quanto via servidor HTTP.
 * Zero dependências externas e Zero bloqueios de CORS.
 */
(function() {
  'use strict';

/* --- MÓDULO: js/assets.js --- */
/**
 * CARDS E DUNGEONS - Vector SVG Game Assets (assets.js)
 * Ilustrações e Ícones Vetoriais embutidos de alta fidelidade
 * Compatível com Browser (window.GameAssets) e Node.js (module.exports / globalThis)
 */

const SVGS = {
    // =======================================================================
    // 1. ILUSTRAÇÕES DE PERSONAGENS & MONSTROS
    // =======================================================================

    /**
     * O Herói Cavaleiro Rúnico
     */
    hero: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-hero">
        <circle cx="50" cy="50" r="48" fill="#131622" stroke="#3a91fc" stroke-width="2"/>
        <!-- Capa Traseira -->
        <path d="M22 68 Q50 96 78 68 L70 95 L30 95 Z" fill="#1c3d73"/>
        <!-- Ombreiras de Aço -->
        <path d="M18 52 C22 42 35 44 38 56 C32 64 22 62 18 52 Z" fill="#4a5568" stroke="#718096" stroke-width="1.5"/>
        <path d="M82 52 C78 42 65 44 62 56 C68 64 78 62 82 52 Z" fill="#4a5568" stroke="#718096" stroke-width="1.5"/>
        <!-- Peitoral de Armadura -->
        <path d="M35 52 L65 52 L58 84 L50 88 L42 84 Z" fill="#2d3748" stroke="#a0aec0" stroke-width="1.5"/>
        <path d="M46 54 L54 54 L50 78 Z" fill="#3a91fc"/>
        <circle cx="50" cy="62" r="3" fill="#fae48c"/>
        <!-- Elmo de Cavaleiro -->
        <path d="M36 28 C36 16 64 16 64 28 L66 48 C66 54 60 58 50 58 C40 58 34 54 34 48 Z" fill="#4a5568" stroke="#cbd5e0" stroke-width="1.5"/>
        <!-- Plumas / Crista do Elmo -->
        <path d="M50 12 C52 18 54 26 50 28 C46 26 48 18 50 12 Z" fill="#e74c3c"/>
        <path d="M48 14 C40 18 43 28 47 28" stroke="#c0392b" stroke-width="2" stroke-linecap="round"/>
        <path d="M52 14 C60 18 57 28 53 28" stroke="#c0392b" stroke-width="2" stroke-linecap="round"/>
        <!-- Visor Fendido com Brilho Celeste -->
        <path d="M40 38 L60 38 L58 43 L42 43 Z" fill="#0d1117" stroke="#1a202c" stroke-width="1"/>
        <line x1="42" y1="40.5" x2="58" y2="40.5" stroke="#60a5fa" stroke-width="2" stroke-linecap="round"/>
        <circle cx="47" cy="40.5" r="1.5" fill="#ffffff"/>
        <circle cx="53" cy="40.5" r="1.5" fill="#ffffff"/>
        <!-- Protetor de Queixo / Gola -->
        <path d="M42 47 L58 47 L54 55 L46 55 Z" fill="#2d3748" stroke="#718096" stroke-width="1"/>
      </svg>
    `,

    /**
     * Ladina das Sombras
     */
    rogue: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-rogue">
        <circle cx="50" cy="50" r="48" fill="#0d0e15" stroke="#10b981" stroke-width="2"/>
        <!-- Capuz das Sombras -->
        <path d="M22 65 C24 30 35 15 50 15 C65 15 76 30 78 65 L82 85 L18 85 Z" fill="#1e1b2e" stroke="#6d28d9" stroke-width="1.5"/>
        <!-- Rosto na Penumbra com Máscara Ninja/Ladino -->
        <path d="M32 45 C32 60 40 68 50 68 C60 68 68 60 68 45 Z" fill="#090a10"/>
        <!-- Olhos Esmeralda Brilhantes -->
        <ellipse cx="41" cy="46" rx="4.5" ry="2.5" fill="#10b981" transform="rotate(-5 41 46)"/>
        <circle cx="41" cy="46" r="1.5" fill="#ffffff"/>
        <ellipse cx="59" cy="46" rx="4.5" ry="2.5" fill="#10b981" transform="rotate(5 59 46)"/>
        <circle cx="59" cy="46" r="1.5" fill="#ffffff"/>
        <!-- Máscara de Tecido Preto -->
        <path d="M34 52 Q50 64 66 52 L64 72 Q50 78 36 72 Z" fill="#171822" stroke="#10b981" stroke-width="1"/>
        <!-- Adagas Cruzadas na Base -->
        <path d="M28 85 L44 70 M25 82 L31 88" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/>
        <path d="M72 85 L56 70 M75 82 L69 88" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/>
        <circle cx="50" cy="74" r="2.5" fill="#10b981"/>
      </svg>
    `,

    /**
     * Goblin Ladino
     */
    goblin: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-goblin">
        <circle cx="50" cy="50" r="48" fill="#151a14" stroke="#48bb78" stroke-width="2"/>
        <!-- Capuz / Bandana Desfiada -->
        <path d="M26 34 C30 18 70 18 74 34 L78 54 L22 54 Z" fill="#2d3748"/>
        <!-- Orelhas Pontudas Longas -->
        <path d="M30 42 C16 35 10 24 12 38 C14 46 26 48 30 50 Z" fill="#38a169" stroke="#276749" stroke-width="1.2"/>
        <path d="M70 42 C84 35 90 24 88 38 C86 46 74 48 70 50 Z" fill="#38a169" stroke="#276749" stroke-width="1.2"/>
        <!-- Rosto Verde -->
        <path d="M28 44 C28 62 40 70 50 70 C60 70 72 62 72 44 Z" fill="#48bb78"/>
        <!-- Nariz Pontudo -->
        <path d="M47 50 L50 60 L54 50 Z" fill="#2f855a"/>
        <!-- Olhos Dourados e Sinistros -->
        <ellipse cx="40" cy="46" rx="5" ry="3.5" fill="#ecc94b"/>
        <ellipse cx="60" cy="46" rx="5" ry="3.5" fill="#ecc94b"/>
        <circle cx="41" cy="46" r="2" fill="#000000"/>
        <circle cx="59" cy="46" r="2" fill="#000000"/>
        <!-- Boca com Presas Afiadas -->
        <path d="M38 62 Q50 67 62 62" stroke="#1c4532" stroke-width="2" stroke-linecap="round"/>
        <polygon points="42,62 44,58 46,62" fill="#ffffff"/>
        <polygon points="54,62 56,58 58,62" fill="#ffffff"/>
        <!-- Corpo / Colete de Couro -->
        <path d="M30 70 L70 70 L74 96 L26 96 Z" fill="#744210" stroke="#975a16" stroke-width="1.5"/>
        <line x1="50" y1="70" x2="50" y2="96" stroke="#975a16" stroke-width="2"/>
      </svg>
    `,

    /**
     * Esqueleto Guardião
     */
    skeleton: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-skeleton">
        <circle cx="50" cy="50" r="48" fill="#121319" stroke="#a0aec0" stroke-width="2"/>
        <!-- Capacete Antigo Rachado -->
        <path d="M30 32 C30 18 70 18 70 32 L72 38 L28 38 Z" fill="#4a5568" stroke="#718096" stroke-width="1.5"/>
        <path d="M42 22 L46 28 L44 32" stroke="#1a202c" stroke-width="1.5"/>
        <!-- Crânio Ósseo -->
        <path d="M32 36 C32 28 68 28 68 36 C68 46 64 54 62 58 L58 58 L58 64 L42 64 L42 58 L38 58 C36 54 32 46 32 36 Z" fill="#e2e8f0" stroke="#cbd5e0" stroke-width="1.2"/>
        <!-- Órbitas Oculares com Fogo Azul Místico -->
        <ellipse cx="43" cy="44" rx="5" ry="6" fill="#0f172a"/>
        <ellipse cx="57" cy="44" rx="5" ry="6" fill="#0f172a"/>
        <circle cx="43" cy="44" r="2.5" fill="#38bdf8"/>
        <circle cx="57" cy="44" r="2.5" fill="#38bdf8"/>
        <!-- Cavidade Nasal Triangular -->
        <polygon points="50,50 47,55 53,55" fill="#0f172a"/>
        <!-- Mandíbula e Dentes -->
        <rect x="44" y="58" width="12" height="6" fill="#cbd5e0" rx="1"/>
        <line x1="47" y1="58" x2="47" y2="64" stroke="#475569" stroke-width="1"/>
        <line x1="50" y1="58" x2="50" y2="64" stroke="#475569" stroke-width="1"/>
        <line x1="53" y1="58" x2="53" y2="64" stroke="#475569" stroke-width="1"/>
        <!-- Costelas e Coluna -->
        <line x1="50" y1="65" x2="50" y2="92" stroke="#e2e8f0" stroke-width="4"/>
        <path d="M34 72 Q50 68 66 72" stroke="#e2e8f0" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M36 80 Q50 76 64 80" stroke="#e2e8f0" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M40 88 Q50 84 60 88" stroke="#e2e8f0" stroke-width="3" fill="none" stroke-linecap="round"/>
      </svg>
    `,

    /**
     * Feiticeiro Sombrio
     */
    mage: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-mage">
        <circle cx="50" cy="50" r="48" fill="#140f1f" stroke="#9f7aea" stroke-width="2"/>
        <!-- Capuz Profundo de Mago -->
        <path d="M22 66 C20 40 32 16 50 12 C68 16 80 40 78 66 L82 95 L18 95 Z" fill="#2d1b4e" stroke="#44337a" stroke-width="1.5"/>
        <!-- Escuridão Abissal do Rosto -->
        <path d="M34 38 C34 30 66 30 66 38 C66 54 58 60 50 60 C42 60 34 54 34 38 Z" fill="#09060f"/>
        <!-- Olhos Místicos Violetas Brilhantes -->
        <ellipse cx="44" cy="42" rx="4" ry="2.5" fill="#d6bcfa"/>
        <ellipse cx="56" cy="42" rx="4" ry="2.5" fill="#d6bcfa"/>
        <ellipse cx="44" cy="42" rx="1.5" ry="1.5" fill="#ffffff"/>
        <ellipse cx="56" cy="42" rx="1.5" ry="1.5" fill="#ffffff"/>
        <!-- Runa Mística na Testa -->
        <path d="M50 28 L52 32 L48 32 Z" fill="#b794f4"/>
        <!-- Colar com Amuleto Rúnico -->
        <path d="M40 68 Q50 78 60 68" stroke="#d69e2e" stroke-width="2" fill="none"/>
        <polygon points="50,75 55,83 50,91 45,83" fill="#805ad5" stroke="#d69e2e" stroke-width="1.5"/>
        <circle cx="50" cy="83" r="2" fill="#faf089"/>
      </svg>
    `,

    /**
     * O Grande Dragão Tirano (Boss Épico do Calabouço)
     */
    dragon: `
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-dragon">
        <circle cx="60" cy="60" r="58" fill="#1a0a0c" stroke="#e53e3e" stroke-width="3"/>
        <!-- Asas de Morcego / Dragão ao Fundo -->
        <path d="M12 55 Q35 15 60 30 Q85 15 108 55 C90 70 80 50 60 65 C40 50 30 70 12 55 Z" fill="#4a0e17" stroke="#742a2a" stroke-width="1.5"/>
        <!-- Chifres Demoníacos Curvados -->
        <path d="M44 32 C38 12 24 10 18 18 C28 26 36 34 40 40 Z" fill="#2d3748" stroke="#1a202c" stroke-width="1.5"/>
        <path d="M76 32 C82 12 96 10 102 18 C92 26 84 34 80 40 Z" fill="#2d3748" stroke="#1a202c" stroke-width="1.5"/>
        <!-- Chifres Menores da Crista -->
        <polygon points="52,24 60,14 68,24 60,20" fill="#9b2c2c"/>
        <polygon points="60,28 60,18 64,24" fill="#e53e3e"/>
        <!-- Cabeça Draconiana Escamosa -->
        <path d="M38 38 C38 28 82 28 82 38 C86 52 84 66 76 76 L70 96 L50 96 L44 76 C36 66 34 52 38 38 Z" fill="#9b2c2c" stroke="#e53e3e" stroke-width="2"/>
        <!-- Escamas Centrais do Focinho -->
        <path d="M50 44 L60 40 L70 44 L60 52 Z" fill="#742a2a"/>
        <path d="M52 54 L60 50 L68 54 L60 62 Z" fill="#742a2a"/>
        <!-- Narinas Verticais com Fumaça de Magma -->
        <ellipse cx="54" cy="74" rx="2" ry="3.5" fill="#1a202c"/>
        <ellipse cx="66" cy="74" rx="2" ry="3.5" fill="#1a202c"/>
        <!-- Olhos de Fogo Vulcânico -->
        <polygon points="42,48 52,52 44,56" fill="#f6e05e"/>
        <polygon points="78,48 68,52 76,56" fill="#f6e05e"/>
        <line x1="47" y1="48" x2="47" y2="56" stroke="#9b2c2c" stroke-width="2"/>
        <line x1="73" y1="48" x2="73" y2="56" stroke="#9b2c2c" stroke-width="2"/>
        <!-- Mandíbula e Dentes Ferozes com Brilho de Fogo -->
        <path d="M44 80 C52 90 68 90 76 80 L72 96 C64 100 56 100 48 96 Z" fill="#4a0e17" stroke="#9b2c2c" stroke-width="1.5"/>
        <polygon points="48,80 50,86 52,80" fill="#ffffff"/>
        <polygon points="56,81 58,87 60,81" fill="#ffffff"/>
        <polygon points="64,81 66,87 68,81" fill="#ffffff"/>
        <polygon points="70,80 72,86 74,80" fill="#ffffff"/>
        <!-- Brilho de Magma Incandescente na Garganta -->
        <circle cx="60" cy="85" r="4" fill="#ff8b3d"/>
        <circle cx="60" cy="85" r="2" fill="#fff566"/>
      </svg>
    `,

    /**
     * Minotauro Berserker (Feroz, chifres maciços, argola dourada e fúria)
     */
    minotaur: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-minotaur">
        <circle cx="50" cy="50" r="48" fill="#1b120c" stroke="#c05621" stroke-width="2.5"/>
        <!-- Chifres Colossais Curvados para Cima -->
        <path d="M30 42 C16 38 6 18 18 10 C26 20 28 30 36 38 Z" fill="#e2e8f0" stroke="#718096" stroke-width="1.5"/>
        <path d="M70 42 C84 38 94 18 82 10 C74 20 72 30 64 38 Z" fill="#e2e8f0" stroke="#718096" stroke-width="1.5"/>
        <!-- Pontas Escuras dos Chifres -->
        <path d="M18 10 C14 12 10 16 12 20 C16 16 20 12 18 10 Z" fill="#2d3748"/>
        <path d="M82 10 C86 12 90 16 88 20 C84 16 80 12 82 10 Z" fill="#2d3748"/>
        <!-- Cabeça Muscular Marrom-Avermelhada -->
        <path d="M32 32 C32 24 68 24 68 32 C74 44 76 64 68 76 L62 90 L38 90 L32 76 C24 64 26 44 32 32 Z" fill="#5a2a18" stroke="#7b341e" stroke-width="2"/>
        <!-- Pelagem / Topete da Testa -->
        <path d="M40 22 C46 16 54 16 60 22 C56 26 52 24 50 28 C48 24 44 26 40 22 Z" fill="#2d150b"/>
        <!-- Tatuagem de Guerra / Cicatriz Vermelha -->
        <path d="M44 34 L56 46 M56 34 L44 46" stroke="#e53e3e" stroke-width="2" stroke-linecap="round"/>
        <!-- Olhos de Fúria em Brasa -->
        <polygon points="36,46 46,48 40,52" fill="#ff4757"/>
        <polygon points="64,46 54,48 60,52" fill="#ff4757"/>
        <circle cx="41" cy="49" r="1.5" fill="#ffffff"/>
        <circle cx="59" cy="49" r="1.5" fill="#ffffff"/>
        <!-- Focinho Maciço -->
        <path d="M36 60 C36 56 64 56 64 60 C66 74 62 82 50 82 C38 82 34 74 36 60 Z" fill="#7b341e" stroke="#9c4221" stroke-width="1.5"/>
        <!-- Narinas com Fumaça de Ódio -->
        <ellipse cx="43" cy="68" rx="3" ry="4" fill="#1b120c"/>
        <ellipse cx="57" cy="68" rx="3" ry="4" fill="#1b120c"/>
        <!-- Argola de Ouro no Nariz -->
        <ellipse cx="50" cy="78" rx="9" ry="8" fill="none" stroke="#d4af37" stroke-width="2.5"/>
        <ellipse cx="50" cy="78" rx="9" ry="8" fill="none" stroke="#fae48c" stroke-width="1" stroke-dasharray="8 12"/>
        <!-- Boca Rosnando -->
        <path d="M42 76 Q50 80 58 76" stroke="#2d150b" stroke-width="2" fill="none"/>
      </svg>
    `,

    /**
     * Espectro Lamuriante (Etéreo, flutuante, manto gélido e olhos espectrais)
     */
    specter: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-specter">
        <circle cx="50" cy="50" r="48" fill="#061219" stroke="#06b6d4" stroke-width="2"/>
        <!-- Névoa Espectral de Fundo -->
        <path d="M20 75 Q35 88 50 78 Q65 92 80 75 Q75 96 50 95 Q25 96 20 75 Z" fill="#083344" opacity="0.6"/>
        <!-- Manto Desfiado Flutuante -->
        <path d="M26 42 C24 24 38 14 50 14 C62 14 76 24 74 42 C76 64 82 82 72 92 C62 78 58 86 50 76 C42 86 38 78 28 92 C18 82 24 64 26 42 Z" fill="#0e3a4f" stroke="#22d3ee" stroke-width="1.5"/>
        <!-- Dobras Interiores do Manto Abissal -->
        <path d="M34 44 C32 30 68 30 66 44 C68 62 62 74 50 74 C38 74 32 62 34 44 Z" fill="#021520"/>
        <!-- Olhos Espectrais Gélidos -->
        <ellipse cx="43" cy="46" rx="4.5" ry="3.5" fill="#67e8f9"/>
        <ellipse cx="57" cy="46" rx="4.5" ry="3.5" fill="#67e8f9"/>
        <circle cx="43" cy="46" r="2" fill="#ffffff"/>
        <circle cx="57" cy="46" r="2" fill="#ffffff"/>
        <!-- Boca com Lamúria Abissal -->
        <ellipse cx="50" cy="58" rx="3.5" ry="5.5" fill="#000000" stroke="#0891b2" stroke-width="1"/>
        <!-- Faixas de Luz Fantasmagórica -->
        <path d="M38 70 Q50 64 62 70" stroke="#67e8f9" stroke-width="1.5" stroke-dasharray="3 3" fill="none"/>
        <circle cx="50" cy="24" r="2" fill="#a5f3fc" opacity="0.8"/>
      </svg>
    `,

    /**
     * Golem Guardião Rúnico (Boss do Ato I)
     */
    golem: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-golem">
        <circle cx="50" cy="50" r="48" fill="#111827" stroke="#38bdf8" stroke-width="2.5"/>
        <!-- Placas de Rocha dos Ombros -->
        <path d="M10 52 L26 38 L32 58 L16 68 Z" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
        <path d="M90 52 L74 38 L68 58 L84 68 Z" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
        <!-- Cabeça Monolítica de Granito -->
        <polygon points="32,24 68,24 76,46 64,74 36,74 24,46" fill="#1e293b" stroke="#475569" stroke-width="2"/>
        <!-- Placas Rúnicas Faciais -->
        <polygon points="40,28 60,28 64,40 50,44 36,40" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
        <!-- Olhos de Cristal Celeste / Éter -->
        <polygon points="36,46 45,46 42,52 34,50" fill="#0284c7"/>
        <polygon points="36,46 45,46 42,52 34,50" stroke="#38bdf8" stroke-width="1"/>
        <circle cx="40" cy="48" r="1.5" fill="#e0f2fe"/>
        <polygon points="64,46 55,46 58,52 66,50" fill="#0284c7"/>
        <polygon points="64,46 55,46 58,52 66,50" stroke="#38bdf8" stroke-width="1"/>
        <circle cx="60" cy="48" r="1.5" fill="#e0f2fe"/>
        <!-- Runa Mística Central da Testa -->
        <path d="M50 28 L53 34 L50 38 L47 34 Z" fill="#38bdf8"/>
        <circle cx="50" cy="33" r="1" fill="#ffffff"/>
        <!-- Mandíbula e Queixo de Rocha Maciça -->
        <path d="M38 60 L62 60 L58 72 L42 72 Z" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
        <!-- Sulcos Rúnicos Iluminados de Azul -->
        <path d="M42 63 L44 69 M50 62 L50 70 M58 63 L56 69" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round"/>
        <!-- Peitoral de Pedra com Núcleo Arcano -->
        <path d="M30 75 L70 75 L65 96 L35 96 Z" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
        <circle cx="50" cy="85" r="5" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
        <circle cx="50" cy="85" r="2" fill="#ffffff"/>
      </svg>
    `,

    /**
     * O Lich Rei dos Ossos (Boss do Ato II)
     */
    lich: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-lich">
        <circle cx="50" cy="50" r="48" fill="#090514" stroke="#a855f7" stroke-width="2.5"/>
        <!-- Manto Real Rasgado de Veludo Púrpura -->
        <path d="M18 92 C16 60 22 40 50 18 C78 40 84 60 82 92 Z" fill="#2e1065" stroke="#581c87" stroke-width="2"/>
        <!-- Coroa Ancestral de Obsidiana e Ouro Negro -->
        <polygon points="30,30 35,16 43,26 50,12 57,26 65,16 70,30" fill="#1e1b4b" stroke="#d4af37" stroke-width="1.5"/>
        <circle cx="50" cy="20" r="2.5" fill="#10b981" stroke="#34d399" stroke-width="1"/>
        <!-- Crânio Seco Mumificado -->
        <path d="M34 32 C34 24 66 24 66 32 C68 46 64 54 62 58 L58 58 L58 66 L42 66 L42 58 L38 58 C36 54 32 46 34 32 Z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.2"/>
        <!-- Órbitas Oculares com Fogo Necromântico Verde Esmeralda -->
        <ellipse cx="43" cy="42" rx="5" ry="6" fill="#022c22"/>
        <ellipse cx="57" cy="42" rx="5" ry="6" fill="#022c22"/>
        <circle cx="43" cy="42" r="3" fill="#10b981"/>
        <circle cx="43" cy="42" r="1.2" fill="#f0fdf4"/>
        <circle cx="57" cy="42" r="3" fill="#10b981"/>
        <circle cx="57" cy="42" r="1.2" fill="#f0fdf4"/>
        <!-- Cavidade Nasal em Fenda Tripla -->
        <polygon points="50,48 48,53 52,53" fill="#0f172a"/>
        <!-- Dentes e Mandíbula Sinistra -->
        <rect x="44" y="58" width="12" height="6" fill="#f8fafc" rx="1"/>
        <line x1="47" y1="58" x2="47" y2="64" stroke="#475569" stroke-width="1"/>
        <line x1="50" y1="58" x2="50" y2="64" stroke="#475569" stroke-width="1"/>
        <line x1="53" y1="58" x2="53" y2="64" stroke="#475569" stroke-width="1"/>
        <!-- Colar com Amuleto da Filactéria da Alma -->
        <path d="M38 72 Q50 82 62 72" stroke="#d4af37" stroke-width="2" fill="none"/>
        <polygon points="50,78 56,86 50,94 44,86" fill="#0f766e" stroke="#2dd4bf" stroke-width="1.5"/>
        <circle cx="50" cy="86" r="2" fill="#6ee7b7"/>
      </svg>
    `,

    /**
     * O Mercador Renegado (Encapuzado misterioso, olhos dourados e moedas)
     */
    merchant: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-merchant">
        <circle cx="50" cy="50" r="48" fill="#140f07" stroke="#d4af37" stroke-width="2.5"/>
        <!-- Capuz Escuro do Mercador -->
        <path d="M22 88 C20 62 24 32 50 14 C76 32 80 62 78 88 Z" fill="#1f182c" stroke="#581c87" stroke-width="2"/>
        <!-- Dobras Profundas do Capuz -->
        <path d="M30 42 C30 26 42 22 50 22 C58 22 70 26 70 42 C64 62 58 72 50 72 C42 72 36 62 30 42 Z" fill="#0a0512"/>
        <!-- Olhos Dourados Astutos -->
        <ellipse cx="42" cy="46" rx="4" ry="2" fill="#fbbf24"/>
        <ellipse cx="58" cy="46" rx="4" ry="2" fill="#fbbf24"/>
        <circle cx="42" cy="46" r="1.5" fill="#ffffff"/>
        <circle cx="58" cy="46" r="1.5" fill="#ffffff"/>
        <!-- Lenço/Mascara Cobrindo a Boca -->
        <path d="M36 54 Q50 62 64 54 L62 74 Q50 78 38 74 Z" fill="#2e1065" stroke="#7e22ce" stroke-width="1"/>
        <!-- Broche de Ouro no Pescoço -->
        <circle cx="50" cy="78" r="5" fill="#eab308" stroke="#fef08a" stroke-width="1.5"/>
        <polygon points="50,75 52,78 50,81 48,78" fill="#ef4444"/>
      </svg>
    `,

    /**
     * Rato da Peste (Ato I)
     */
    rat: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-rat">
        <circle cx="50" cy="50" r="48" fill="#141811" stroke="#22c55e" stroke-width="2.5"/>
        <ellipse cx="50" cy="58" rx="28" ry="24" fill="#3f3f46"/>
        <path d="M26 32 C18 18 34 14 38 28 Z" fill="#71717a" stroke="#22c55e" stroke-width="1.5"/>
        <path d="M74 32 C82 18 66 14 62 28 Z" fill="#71717a" stroke="#22c55e" stroke-width="1.5"/>
        <polygon points="50,68 38,44 62,44" fill="#52525b"/>
        <circle cx="42" cy="48" r="3" fill="#ef4444"/>
        <circle cx="58" cy="48" r="3" fill="#ef4444"/>
        <polygon points="50,66 46,74 49,74 50,71 51,74 54,74" fill="#f8fafc"/>
        <circle cx="34" cy="56" r="3" fill="#22c55e" opacity="0.8"/>
        <circle cx="64" cy="60" r="2.5" fill="#22c55e" opacity="0.8"/>
      </svg>
    `,

    /**
     * Gárgula de Granito (Ato I)
     */
    gargoyle: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-gargoyle">
        <circle cx="50" cy="50" r="48" fill="#18181b" stroke="#eab308" stroke-width="2.5"/>
        <path d="M24 38 C10 18 16 54 26 62 Z" fill="#3f3f46" stroke="#71717a" stroke-width="1.5"/>
        <path d="M76 38 C90 18 84 54 74 62 Z" fill="#3f3f46" stroke="#71717a" stroke-width="1.5"/>
        <polygon points="34,28 42,12 46,26 50,22 54,26 58,12 66,28 62,60 38,60" fill="#52525b" stroke="#a1a1aa" stroke-width="1.5"/>
        <circle cx="44" cy="42" r="3.5" fill="#eab308"/>
        <circle cx="56" cy="42" r="3.5" fill="#eab308"/>
        <polygon points="46,54 50,60 54,54" fill="#f43f5e"/>
      </svg>
    `,

    /**
     * Escavador de Obsidiana (Ato II)
     */
    burrower: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-burrower">
        <circle cx="50" cy="50" r="48" fill="#1e102a" stroke="#c084fc" stroke-width="2.5"/>
        <ellipse cx="50" cy="52" rx="30" ry="26" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
        <path d="M30 46 C20 40 22 68 34 62 Z" fill="#581c87"/>
        <path d="M70 46 C80 40 78 68 66 62 Z" fill="#581c87"/>
        <polygon points="40,32 50,20 60,32 56,46 44,46" fill="#3b0764" stroke="#d8b4fe" stroke-width="1.5"/>
        <circle cx="46" cy="40" r="2.5" fill="#e879f9"/>
        <circle cx="54" cy="40" r="2.5" fill="#e879f9"/>
        <path d="M38 58 Q50 68 62 58 L58 72 Q50 78 42 72 Z" fill="#18022e" stroke="#c084fc" stroke-width="1.5"/>
      </svg>
    `,

    /**
     * Xamã dos Ossos (Ato II)
     */
    shaman: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-shaman">
        <circle cx="50" cy="50" r="48" fill="#111827" stroke="#8b5cf6" stroke-width="2.5"/>
        <path d="M28 88 C26 62 30 36 50 20 C70 36 74 62 72 88 Z" fill="#312e81"/>
        <path d="M34 26 L22 14 M66 26 L78 14" stroke="#d4d4d8" stroke-width="2.5" stroke-linecap="round"/>
        <polygon points="40,24 50,16 60,24 64,48 50,62 36,48" fill="#e4e4e7" stroke="#a1a1aa" stroke-width="1.5"/>
        <ellipse cx="45" cy="38" rx="3.5" ry="5" fill="#1e1b4b"/>
        <ellipse cx="55" cy="38" rx="3.5" ry="5" fill="#1e1b4b"/>
        <circle cx="45" cy="38" r="1.5" fill="#a78bfa"/>
        <circle cx="55" cy="38" r="1.5" fill="#a78bfa"/>
      </svg>
    `,

    /**
     * Elemental Ígneo (Ato III)
     */
    fire_elemental: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-fire-elemental">
        <circle cx="50" cy="50" r="48" fill="#1c0a00" stroke="#f97316" stroke-width="2.5"/>
        <path d="M50 14 C65 30 76 45 68 70 C60 84 40 84 32 70 C24 45 35 30 50 14 Z" fill="#ea580c"/>
        <path d="M50 28 C60 40 68 50 60 70 C54 78 46 78 40 70 C32 50 40 40 50 28 Z" fill="#facc15"/>
        <ellipse cx="44" cy="52" rx="3" ry="4" fill="#450a0a"/>
        <ellipse cx="56" cy="52" rx="3" ry="4" fill="#450a0a"/>
        <circle cx="44" cy="52" r="1.5" fill="#ffffff"/>
        <circle cx="56" cy="52" r="1.5" fill="#ffffff"/>
      </svg>
    `,

    /**
     * Cultista Dracônico (Ato III)
     */
    cultist: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-avatar svg-cultist">
        <circle cx="50" cy="50" r="48" fill="#1a0505" stroke="#ef4444" stroke-width="2.5"/>
        <path d="M26 88 C24 64 28 36 50 18 C72 36 76 64 74 88 Z" fill="#7f1d1d"/>
        <polygon points="36,32 50,14 64,32 68,54 50,68 32,54" fill="#991b1b" stroke="#f87171" stroke-width="1.5"/>
        <polygon points="40,24 32,12 44,20" fill="#f59e0b"/>
        <polygon points="60,24 68,12 56,20" fill="#f59e0b"/>
        <circle cx="43" cy="42" r="3" fill="#fbbf24"/>
        <circle cx="57" cy="42" r="3" fill="#fbbf24"/>
      </svg>
    `,

    // =======================================================================
    // 2. ÍCONES DE AÇÕES, CARTAS & COMBATE
    // =======================================================================

    /**
     * Espada / Ataque Físico
     */
    sword: `
      <svg viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <path d="M14.5 17.5L3 6V3h3l11.5 11.5"/>
        <path d="M13 19l2 2 4-4-2-2"/>
        <path d="M19 13l2 2"/>
        <path d="M16 8l3-3"/>
      </svg>
    `,

    /**
     * Murro / Soco
     */
    fist: `
      <svg viewBox="0 0 24 24" fill="none" stroke="#ff7675" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <path d="M11 4h2a2 2 0 0 1 2 2v2a2 2 0 0 1 2 2v2a2 2 0 0 1 2 2v3a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5v-6a2 2 0 0 1 2-2v-3a2 2 0 0 1 2-2z"/>
        <line x1="8" y1="10" x2="16" y2="10"/>
      </svg>
    `,

    /**
     * Chute / Bota
     */
    kick: `
      <svg viewBox="0 0 24 24" fill="none" stroke="#fab1a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <path d="M4 17l5-12h5l-2 8h5l3 4v3h-7l-4-3H4z"/>
        <line x1="18" y1="5" x2="21" y2="8"/>
        <line x1="19" y1="2" x2="22" y2="5"/>
      </svg>
    `,

    /**
     * Escudo / Bloqueio
     */
    shield: `
      <svg viewBox="0 0 24 24" fill="none" stroke="#74b9ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M12 7v8"/>
        <path d="M9 10h6"/>
      </svg>
    `,

    /**
     * Fogo / Baforada / Explosão
     */
    fire: `
      <svg viewBox="0 0 24 24" fill="none" stroke="#ff9f43" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
      </svg>
    `,

    /**
     * Magia Arcana / Habilidade
     */
    magic: `
      <svg viewBox="0 0 24 24" fill="none" stroke="#a29bfe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="3" fill="#6c5ce7"/>
      </svg>
    `,

    /**
     * Cura / Santuário
     */
    heal: `
      <svg viewBox="0 0 24 24" fill="none" stroke="#55efc4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        <line x1="12" y1="8" x2="12" y2="14"/>
        <line x1="9" y1="11" x2="15" y2="11"/>
      </svg>
    `,

    /**
     * Fogueira do Santuário / Acampamento
     */
    campfire: `
      <svg viewBox="0 0 24 24" fill="none" stroke="#fdcb6e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <path d="M4 21l16-4M20 21L4 17"/>
        <path d="M12 3c-2 4-5 6-2 11 1 1 2 2 2 3 0-1 1-2 2-3 3-5 0-7-2-11z" fill="#ff7675"/>
      </svg>
    `,

    /**
     * Coroa do Chefe / Boss
     */
    crown: `
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffeaa7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" fill="rgba(253, 203, 110, 0.3)"/>
        <circle cx="12" cy="19" r="1.5" fill="#d63031"/>
      </svg>
    `,

    /**
     * Caveira / Derrota
     */
    skull: `
      <svg viewBox="0 0 24 24" fill="none" stroke="#ff7675" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <path d="M9 10h.01M15 10h.01"/>
        <path d="M4 11a8 8 0 0 1 16 0c0 3-1 6-3 8v3h-10v-3c-2-2-3-5-3-8z"/>
        <line x1="10" y1="19" x2="10" y2="22"/>
        <line x1="14" y1="19" x2="14" y2="22"/>
      </svg>
    `,

    /**
     * Troféu / Vitória
     */
    trophy: `
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffd700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2"/>
        <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2"/>
        <path d="M4 3h16v6a8 8 0 0 1-16 0V3z" fill="rgba(255, 215, 0, 0.25)"/>
        <path d="M12 17v4M8 21h8"/>
      </svg>
    `,

    /**
     * Volume Ativo
     */
    volumeOn: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
      </svg>
    `,

    /**
     * Volume Mudo
     */
    volumeMute: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <line x1="23" y1="9" x2="17" y2="15"/>
        <line x1="17" y1="9" x2="23" y2="15"/>
      </svg>
    `,

    /**
     * Pilha de Cartas / Baralho
     */
    deck: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <rect x="5" y="2" width="14" height="18" rx="2"/>
        <path d="M3 6h2M3 10h2M3 14h2"/>
      </svg>
    `,

    // =======================================================================
    // 3. RELÍQUIAS & ARTEFATOS MÍSTICOS (SPRINT 1)
    // =======================================================================

    /**
     * Relíquia da Força (Amuleto de Ouro com Rubi Flamejante)
     */
    relic_strength: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-relic">
        <!-- Corrente do Amuleto -->
        <path d="M10 4 Q16 10 22 4" stroke="#d4af37" stroke-width="2" stroke-linecap="round" fill="none"/>
        <!-- Moldura Dourada do Medalhão -->
        <polygon points="16,8 24,14 24,24 16,29 8,24 8,14" fill="#2d1c07" stroke="#f59e0b" stroke-width="2"/>
        <polygon points="16,10 22,15 22,23 16,27 10,23 10,15" fill="#78350f"/>
        <!-- Rubi Central Flamejante -->
        <polygon points="16,12 20,16 20,22 16,25 12,22 12,16" fill="#ef4444" stroke="#f87171" stroke-width="1"/>
        <polygon points="16,14 18,17 16,21 14,17" fill="#fca5a5"/>
        <circle cx="16" cy="18" r="2" fill="#ffffff" opacity="0.9"/>
      </svg>
    `,

    /**
     * Cálice de Sangue (Cálice de Ouro com Sangue Carmesim)
     */
    relic_blood: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-relic">
        <!-- Base e Haste do Cálice -->
        <path d="M10 28 L22 28 M16 28 L16 20" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Taça de Ouro -->
        <path d="M8 8 C8 17 13 20 16 20 C19 20 24 17 24 8 Z" fill="#d97706" stroke="#fbbf24" stroke-width="2"/>
        <!-- Sangue Carmesim Borbulhante -->
        <ellipse cx="16" cy="9" rx="6.5" ry="3.5" fill="#991b1b"/>
        <path d="M9.5 9 C11 12 21 12 22.5 9 Z" fill="#dc2626"/>
        <!-- Gotas de Sangue / Brilho -->
        <circle cx="16" cy="13" r="1.5" fill="#f87171"/>
        <path d="M16 4 Q14 7 16 8 Q18 7 16 4 Z" fill="#ef4444"/>
      </svg>
    `,

    /**
     * Escudo de Espinhos (Escudo de Ferro com Espinhos Afiados)
     */
    relic_spikes: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-relic">
        <!-- Espinhos Exteriores -->
        <polygon points="16,2 14,7 18,7" fill="#94a3b8"/>
        <polygon points="30,16 25,14 25,18" fill="#94a3b8"/>
        <polygon points="16,30 14,25 18,25" fill="#94a3b8"/>
        <polygon points="2,16 7,14 7,18" fill="#94a3b8"/>
        <polygon points="26,6 22,8 24,12" fill="#94a3b8"/>
        <polygon points="26,26 24,20 22,24" fill="#94a3b8"/>
        <polygon points="6,26 8,20 10,24" fill="#94a3b8"/>
        <polygon points="6,6 10,8 8,12" fill="#94a3b8"/>
        <!-- Escudo Central de Ferro -->
        <circle cx="16" cy="16" r="10" fill="#334155" stroke="#64748b" stroke-width="2"/>
        <!-- Ponta Central / Umbo com Espinho -->
        <circle cx="16" cy="16" r="5" fill="#1e293b" stroke="#cbd5e1" stroke-width="1.5"/>
        <circle cx="16" cy="16" r="2" fill="#ef4444"/>
      </svg>
    `,

    /**
     * Orbe Arcano de Mana (Cristal Místico com Runas Azuis)
     */
    relic_mana: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-relic">
        <!-- Pedestal / Suporte de Bronze -->
        <path d="M10 26 C12 23 20 23 22 26 L24 28 L8 28 Z" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M12 23 C14 20 18 20 20 23" stroke="#0ea5e9" stroke-width="2"/>
        <!-- Anéis Místicos Orbitais -->
        <ellipse cx="16" cy="14" rx="14" ry="5" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 4" transform="rotate(-25 16 14)"/>
        <!-- Orbe Mágico Central -->
        <circle cx="16" cy="14" r="8" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
        <!-- Núcleo de Pura Mana -->
        <circle cx="16" cy="14" r="5" fill="#0284c7"/>
        <circle cx="14.5" cy="12.5" r="2.5" fill="#e0f2fe"/>
      </svg>
    `,

    /**
     * Frasco Peçonhento (Relíquia de Veneno)
     */
    relic_poison: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-relic">
        <!-- Rolha de Cortiça -->
        <rect x="13" y="4" width="6" height="4" rx="1" fill="#78350f" stroke="#b45309" stroke-width="1"/>
        <!-- Gargalo do Frasco -->
        <rect x="12" y="8" width="8" height="4" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <!-- Bojo de Vidro Redondo -->
        <circle cx="16" cy="19" r="9" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
        <!-- Líquido Venenoso Borbulhante -->
        <circle cx="16" cy="19" r="6.5" fill="#059669"/>
        <!-- Bolhas Tóxicas -->
        <circle cx="14" cy="17" r="1.5" fill="#a7f3d0"/>
        <circle cx="18" cy="21" r="2" fill="#34d399"/>
        <circle cx="18" cy="15" r="1" fill="#ffffff"/>
        <!-- Brilho de Reflexo no Vidro -->
        <path d="M10 16 A 7 7 0 0 1 15 11" stroke="#a7f3d0" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    `,

    /**
     * Bolsa da Fortuna (Bolsa de Veludo com Moedas de Ouro)
     */
    relic_fortune: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-relic">
        <!-- Cordão de Ouro Amarrado -->
        <ellipse cx="16" cy="11" rx="6" ry="2" fill="#d97706" stroke="#fbbf24" stroke-width="1"/>
        <path d="M13 11 L10 14 M19 11 L22 14" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round"/>
        <!-- Bojo da Bolsa de Veludo Púrpura -->
        <path d="M11 11 C8 15 6 22 9 27 C12 30 20 30 23 27 C26 22 24 15 21 11 Z" fill="#4c1d95" stroke="#7c3aed" stroke-width="2"/>
        <!-- Dobras e Volume da Bolsa -->
        <path d="M13 16 Q16 26 19 16" stroke="#6d28d9" stroke-width="1.5" fill="none"/>
        <!-- Moedas de Ouro Transbordando -->
        <circle cx="16" cy="7" r="4" fill="#f59e0b" stroke="#fde047" stroke-width="1.5"/>
        <circle cx="12" cy="9" r="3" fill="#d97706" stroke="#fde047" stroke-width="1"/>
        <circle cx="20" cy="9" r="3" fill="#d97706" stroke="#fde047" stroke-width="1"/>
        <circle cx="16" cy="7" r="2" fill="#fde047"/>
      </svg>
    `,

    /**
     * Manto de Éter (Tecido Místico Translúcido com Brilho Espectral)
     */
    relic_cloak: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-relic">
        <!-- Broche Prateado no Colarinho -->
        <circle cx="16" cy="8" r="3" fill="#38bdf8" stroke="#e0f2fe" stroke-width="1.5"/>
        <!-- Manto Flutuante -->
        <path d="M14 9 C10 12 7 19 6 28 C11 26 16 28 16 25 C16 28 21 26 26 28 C25 19 22 12 18 9 Z" fill="#0369a1" stroke="#38bdf8" stroke-width="1.8"/>
        <!-- Brilho Etéreo Interior -->
        <path d="M11 14 Q16 23 21 14" stroke="#7dd3fc" stroke-width="1.2" stroke-dasharray="3 2" fill="none"/>
        <circle cx="16" cy="18" r="2" fill="#e0f2fe" opacity="0.8"/>
      </svg>
    `,

    /**
     * Pedra de Amolar Rúnica (Pedra Cinzenta com Runa Incandescente)
     */
    relic_whetstone: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-relic">
        <!-- Bloco de Pedra Afiadora Inclinado -->
        <polygon points="6,22 14,8 26,10 18,24" fill="#334155" stroke="#64748b" stroke-width="2"/>
        <polygon points="18,24 26,10 27,15 19,27" fill="#1e293b"/>
        <!-- Runa de Fúria em Brasa -->
        <path d="M14 14 L18 18 M18 14 L14 18 M16 12 L16 20" stroke="#f97316" stroke-width="1.8" stroke-linecap="round"/>
        <!-- Faíscas Metálicas -->
        <circle cx="21" cy="9" r="1" fill="#fde047"/>
        <circle cx="10" cy="19" r="1" fill="#fde047"/>
      </svg>
    `,

    /**
     * Moedas de Ouro (Ícone de Moeda/Loja)
     */
    coins: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon">
        <circle cx="9" cy="13" r="6" fill="#d97706" stroke="#fbbf24" stroke-width="1.5"/>
        <circle cx="9" cy="13" r="3.5" stroke="#fde047" stroke-width="1" stroke-dasharray="2 2"/>
        <circle cx="15" cy="10" r="6" fill="#f59e0b" stroke="#fef08a" stroke-width="1.5"/>
        <circle cx="15" cy="10" r="3.5" stroke="#fef08a" stroke-width="1" stroke-dasharray="2 2"/>
      </svg>
    `,

    // =======================================================================
    // 4. ÍCONES DE STATUS / BUFFS & DEBUFFS (SPRINT 1)
    // =======================================================================

    /**
     * Status: Força (Espada em Chamas)
     */
    status_strength: `
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-status">
        <!-- Chamas ao redor -->
        <path d="M6 13 C4 10 7 7 8 5 C9 7 9 9 11 8 C11 11 9 12 10 14 C8 15 6 15 6 13 Z" fill="#f97316"/>
        <path d="M11 13 C10 10 12 7 13 5 C14 7 14 9 15 8 C15 11 14 13 13 14 C12 15 11 15 11 13 Z" fill="#f59e0b"/>
        <!-- Lâmina da Espada -->
        <line x1="10" y1="2" x2="10" y2="15" stroke="#f1f5f9" stroke-width="2" stroke-linecap="round"/>
        <line x1="7" y1="13" x2="13" y2="13" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/>
        <line x1="10" y1="15" x2="10" y2="18" stroke="#94a3b8" stroke-width="2"/>
        <circle cx="10" cy="18" r="1" fill="#f59e0b"/>
      </svg>
    `,

    /**
     * Status: Vulnerável (Escudo Rachado)
     */
    status_vulnerable: `
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-status">
        <!-- Silhueta do Escudo -->
        <path d="M10 2 L17 5 V11 C17 15 10 18 10 18 C10 18 3 15 3 11 V5 L10 2 Z" fill="#3b0764" stroke="#a855f7" stroke-width="1.5"/>
        <!-- Fissura / Rachadura Central Violenta -->
        <path d="M10 3 L8 8 L12 11 L9 14 L10 17" stroke="#f43f5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="8" y1="8" x2="5" y2="9" stroke="#f43f5e" stroke-width="1.5"/>
        <line x1="12" y1="11" x2="15" y2="12" stroke="#f43f5e" stroke-width="1.5"/>
      </svg>
    `,

    /**
     * Status: Fraco (Braço Quebrado / Corrente Partida)
     */
    status_weak: `
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-status">
        <!-- Braço Quebrado com Ângulo Torcido -->
        <path d="M3 14 L8 9 L12 12 L16 7" stroke="#64748b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Fratura Vermelha -->
        <circle cx="8" cy="9" r="2" fill="#ef4444"/>
        <circle cx="12" cy="12" r="2" fill="#ef4444"/>
        <!-- Elo de Corrente Rompido -->
        <ellipse cx="14" cy="8" rx="3" ry="2" fill="none" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="3 3"/>
      </svg>
    `,

    /**
     * Status: Queimadura (Fogo Ardente)
     */
    status_burn: `
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-status">
        <!-- Labareda de Fogo Principal -->
        <path d="M10 2 C11 5 13 6 14 9 C15 12 13 17 10 18 C7 17 5 12 6 9 C7 6 9 5 10 2 Z" fill="#ea580c"/>
        <!-- Núcleo Incandescente -->
        <path d="M10 7 C11 9 12 10 12 12 C12 14 11 16 10 16 C9 16 8 14 8 12 C8 10 9 9 10 7 Z" fill="#facc15"/>
        <!-- Faíscas de Brasas -->
        <circle cx="15" cy="5" r="1" fill="#f97316"/>
        <circle cx="5" cy="7" r="1" fill="#f97316"/>
        <circle cx="14" cy="14" r="0.8" fill="#facc15"/>
      </svg>
    `,

    /**
     * Status: Veneno (Gotas Tóxicas Verdes)
     */
    status_poison: `
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-status">
        <!-- Gota de Veneno Principal -->
        <path d="M10 3 C10 3 15 9 15 13 C15 16 13 18 10 18 C7 18 5 16 5 13 C5 9 10 3 10 3 Z" fill="#059669" stroke="#34d399" stroke-width="1.2"/>
        <ellipse cx="10" cy="13" rx="3.5" ry="3" fill="#10b981"/>
        <circle cx="9" cy="11" r="1.2" fill="#ffffff" opacity="0.8"/>
        <!-- Gotículas Satélites -->
        <circle cx="15.5" cy="8" r="1.5" fill="#34d399"/>
        <circle cx="4.5" cy="14" r="1.2" fill="#34d399"/>
      </svg>
    `,

    /**
     * Fechar / Cancelar (X)
     */
    close: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    `,

    /**
     * Poção: Elixir da Vitalidade (Vida / Vermelho)
     */
    potion_health: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-potion svg-potion-health">
        <!-- Rolha de Cortiça -->
        <rect x="13" y="2" width="6" height="4" rx="1" fill="#b45309" stroke="#78350f" stroke-width="1"/>
        <!-- Gargalo -->
        <rect x="12" y="6" width="8" height="4" rx="0.5" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1" opacity="0.8"/>
        <!-- Frasco Bojudo -->
        <path d="M12 9 C8 12 5 18 5 24 C5 28 8 30 16 30 C24 30 27 28 27 24 C27 18 24 12 20 9 Z" fill="#991b1b" stroke="#f87171" stroke-width="1.5"/>
        <!-- Líquido Vermelho Brilhante -->
        <path d="M7 23 C7 20 10 14 16 14 C22 14 25 20 25 23 C25 27 22 28.5 16 28.5 C10 28.5 7 27 7 23 Z" fill="#ef4444"/>
        <!-- Brilho no Vidro -->
        <path d="M9 19 Q11 16 14 15" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" opacity="0.8"/>
        <!-- Bolha e Cruz de Cura -->
        <circle cx="18" cy="21" r="1.5" fill="#ffffff" opacity="0.7"/>
        <path d="M16 19 V25 M13 22 H19" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `,

    /**
     * Poção: Mana Pura (Azul)
     */
    potion_energy: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-potion svg-potion-energy">
        <rect x="13" y="2" width="6" height="4" rx="1" fill="#b45309" stroke="#78350f" stroke-width="1"/>
        <rect x="12" y="6" width="8" height="4" rx="0.5" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1" opacity="0.8"/>
        <path d="M12 9 C8 12 5 18 5 24 C5 28 8 30 16 30 C24 30 27 28 27 24 C27 18 24 12 20 9 Z" fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5"/>
        <path d="M7 23 C7 20 10 14 16 14 C22 14 25 20 25 23 C25 27 22 28.5 16 28.5 C10 28.5 7 27 7 23 Z" fill="#3b82f6"/>
        <path d="M9 19 Q11 16 14 15" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" opacity="0.8"/>
        <!-- Raio de Mana -->
        <polygon points="17,16 13,22 16,22 15,27 20,20 17,20" fill="#ffffff"/>
      </svg>
    `,

    /**
     * Poção: Veneno Noturno (Púrpura / Verde)
     */
    potion_poison: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-potion svg-potion-poison">
        <rect x="13" y="2" width="6" height="4" rx="1" fill="#1e293b" stroke="#0f172a" stroke-width="1"/>
        <rect x="12" y="6" width="8" height="4" rx="0.5" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1" opacity="0.8"/>
        <!-- Frasco Triangular Alquímico -->
        <polygon points="16,8 5,28 27,28" fill="#581c87" stroke="#c084fc" stroke-width="1.5"/>
        <polygon points="16,13 7,27 25,27" fill="#10b981"/>
        <!-- Bolhas Venenosas -->
        <circle cx="16" cy="20" r="2" fill="#34d399"/>
        <circle cx="12" cy="24" r="1.5" fill="#a7f3d0"/>
        <circle cx="20" cy="23" r="1.8" fill="#34d399"/>
      </svg>
    `,

    /**
     * Poção: Óleo Flamejante (Laranja / Fogo)
     */
    potion_fire: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-potion svg-potion-fire">
        <rect x="13" y="2" width="6" height="4" rx="1" fill="#b45309" stroke="#78350f" stroke-width="1"/>
        <rect x="12" y="6" width="8" height="4" rx="0.5" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1" opacity="0.8"/>
        <path d="M12 9 C8 12 5 18 5 24 C5 28 8 30 16 30 C24 30 27 28 27 24 C27 18 24 12 20 9 Z" fill="#9a3412" stroke="#fb923c" stroke-width="1.5"/>
        <path d="M7 23 C7 20 10 14 16 14 C22 14 25 20 25 23 C25 27 22 28.5 16 28.5 C10 28.5 7 27 7 23 Z" fill="#f97316"/>
        <!-- Labareda Interna -->
        <path d="M16 17 C16 17 19 20 19 23 C19 25 17.5 26.5 16 26.5 C14.5 26.5 13 25 13 23 C13 20 16 17 16 17 Z" fill="#fef08a"/>
      </svg>
    `,

    /**
     * Poção: Pele de Pedra (Cinza / Escudo)
     */
    potion_stone: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-potion svg-potion-stone">
        <rect x="13" y="2" width="6" height="4" rx="1" fill="#475569" stroke="#1e293b" stroke-width="1"/>
        <rect x="12" y="6" width="8" height="4" rx="0.5" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1" opacity="0.8"/>
        <rect x="8" y="10" width="16" height="19" rx="3" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="10" y="14" width="12" height="13" rx="2" fill="#64748b"/>
        <!-- Runa de Escudo de Rocha -->
        <polygon points="16,16 20,18 20,23 16,25 12,23 12,18" fill="#e2e8f0"/>
      </svg>
    `,

    /**
     * Poção: Extrato do Berserker (Carmim / Força)
     */
    potion_strength: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-potion svg-potion-strength">
        <rect x="13" y="2" width="6" height="4" rx="1" fill="#7f1d1d" stroke="#450a0a" stroke-width="1"/>
        <rect x="12" y="6" width="8" height="4" rx="0.5" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1" opacity="0.8"/>
        <path d="M12 9 C8 12 5 18 5 24 C5 28 8 30 16 30 C24 30 27 28 27 24 C27 18 24 12 20 9 Z" fill="#7f1d1d" stroke="#f87171" stroke-width="1.5"/>
        <path d="M7 23 C7 20 10 14 16 14 C22 14 25 20 25 23 C25 27 22 28.5 16 28.5 C10 28.5 7 27 7 23 Z" fill="#b91c1c"/>
        <!-- Espada Rúnica Branca -->
        <path d="M16 16 V26 M14 19 H18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `,

    /**
     * Poção: Slot Vazio
     */
    potion_empty: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-potion svg-potion-empty">
        <circle cx="16" cy="16" r="14" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/>
        <path d="M16 11 V21 M11 16 H21" stroke="#64748b" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
      </svg>
    `,

    /**
     * Ícone de Evento Narrativo Misterioso (Interrogação Rúnica Púrpura)
     */
    event_icon: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon svg-event-icon">
        <circle cx="12" cy="12" r="10" fill="#2e1065" stroke="#c084fc" stroke-width="2"/>
        <path d="M9.5 9 C9.5 7.5 10.5 6.5 12 6.5 C13.5 6.5 14.5 7.5 14.5 9 C14.5 10.5 12 11.5 12 13" stroke="#f3e8ff" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="16.5" r="1.2" fill="#f3e8ff"/>
      </svg>
    `,

    /**
     * Ícone de Altar Ancestral
     */
    altar: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-event-art">
        <rect x="4" y="24" width="24" height="6" rx="1" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
        <rect x="7" y="14" width="18" height="10" fill="#1e293b" stroke="#475569" stroke-width="1"/>
        <rect x="2" y="8" width="28" height="6" rx="2" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- Fogo Sagrado -->
        <path d="M16 2 C16 2 20 6 20 9 C20 11 18 12 16 12 C14 12 12 11 12 9 C12 6 16 2 16 2 Z" fill="#f59e0b"/>
        <circle cx="16" cy="8" r="1.5" fill="#fef08a"/>
      </svg>
    `,

    /**
     * Ícone de Baú de Tesouro / Masmorra
     */
    chest: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-event-art">
        <!-- Base do Baú -->
        <rect x="4" y="14" width="24" height="14" rx="2" fill="#78350f" stroke="#d97706" stroke-width="1.5"/>
        <!-- Tampa Curva -->
        <path d="M4 14 C4 8 8 5 16 5 C24 5 28 8 28 14 Z" fill="#92400e" stroke="#f59e0b" stroke-width="1.5"/>
        <!-- Fechadura Dourada -->
        <rect x="13" y="12" width="6" height="6" rx="1" fill="#ffd700" stroke="#b45309" stroke-width="1"/>
        <circle cx="16" cy="15" r="1" fill="#000000"/>
      </svg>
    `,

    /**
     * Ícone de Ferreiro / Bigorna
     */
    blacksmith: `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-event-art">
        <!-- Bigorna -->
        <path d="M6 18 H26 L22 14 H10 L6 18 Z M11 18 V24 H21 V18 M8 24 H24 V28 H8 Z" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- Martelo Cruzado -->
        <rect x="18" y="4" width="8" height="4" rx="1" fill="#d97706"/>
        <line x1="22" y1="8" x2="16" y2="16" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
        <!-- Faíscas -->
        <circle cx="14" cy="13" r="1" fill="#f59e0b"/>
        <circle cx="18" cy="12" r="1" fill="#fef08a"/>
      </svg>
    `
  };

  /**
   * Helper para obter string SVG segura ou ícone padrão
   */
  function getSvg(key, fallback = '') {
    return SVGS[key] || fallback || SVGS.sword;
  }

  const GameAssets = {
    SVGS,
    getSvg
  };

  if (typeof window !== 'undefined') {
    window.GameAssets = GameAssets;
    window.SVGS = SVGS;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.GameAssets = GameAssets;
    globalThis.SVGS = SVGS;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GameAssets;
  }



/* --- MÓDULO: js/audio.js --- */
/**
 * CARDS E DUNGEONS - Procedural Web Audio API Synthesizer (audio.js)
 * Sintetizador sonoro 100% nativo em JavaScript.
 * Inclui Efeitos Sonoros (SFX) e Música Ambiente Procedural (Dungeon Drone).
 * Zero arquivos de áudio externos (.mp3/.wav) necessários!
 */

class SoundSynthesizer {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.musicGain = null;
    this.muted = false;
    this.volume = 0.5; // Volume SFX padrão 50%
    
    // Configurações da música ambiente
    this.musicVolume = 0.28;
    this.musicMuted = false;
    this.isMusicPlaying = false;
    this.musicNodes = [];
    this.musicTimeouts = [];
    this.musicInterval = null;
    
    // Tentar carregar preferências salvas
    try {
      if (typeof localStorage !== 'undefined') {
        const savedMute = localStorage.getItem('cards_dungeons_muted');
        if (savedMute !== null) {
          this.muted = savedMute === 'true';
        }
        const savedMusicMute = localStorage.getItem('cards_dungeons_music_muted');
        if (savedMusicMute !== null) {
          this.musicMuted = savedMusicMute === 'true';
        }
      }
    } catch (e) {
      // Ignora falhas de localStorage (ex: iframe sandboxed)
    }

    // Inicialização atrasada no primeiro clique para respeitar a política de autoplay
    this.boundUnlock = this.unlockAudio.bind(this);
    if (typeof window !== 'undefined') {
      window.addEventListener('click', this.boundUnlock, { once: false });
      window.addEventListener('keydown', this.boundUnlock, { once: false });
      window.addEventListener('touchstart', this.boundUnlock, { once: false });
    }
  }

  /**
   * Inicializa ou desbloqueia o AudioContext após interação do usuário
   */
  unlockAudio() {
    if (!this.ctx) {
      const AudioContextClass = typeof window !== 'undefined' ? (window.AudioContext || window.webkitAudioContext) : null;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
        
        // Master Gain
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.muted ? 0 : this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        // Music Gain dedicado
        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.setValueAtTime(this.musicMuted ? 0 : this.musicVolume, this.ctx.currentTime);
        this.musicGain.connect(this.masterGain);
      }
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Retorna o AudioContext garantindo que está ativo
   */
  getContext() {
    this.unlockAudio();
    return this.ctx;
  }

  // =========================================================================
  // CONTROLES DE VOLUME & MUDO
  // =========================================================================

  /**
   * Alterna mudo de todos os efeitos sonoros e música
   */
  toggleMute() {
    this.muted = !this.muted;
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('cards_dungeons_muted', this.muted);
      }
    } catch (e) {}

    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.muted ? 0 : this.volume, this.ctx.currentTime, 0.03);
    }
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx && !this.muted) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.03);
    }
  }

  /**
   * Alterna mudo especificamente da Música Ambiente
   */
  toggleMusic() {
    this.musicMuted = !this.musicMuted;
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('cards_dungeons_music_muted', this.musicMuted);
      }
    } catch (e) {}

    if (this.musicGain && this.ctx) {
      this.musicGain.gain.setTargetAtTime(this.musicMuted ? 0 : this.musicVolume, this.ctx.currentTime, 0.05);
    }
    return this.musicMuted;
  }

  isMusicMuted() {
    return this.musicMuted;
  }

  setMusicVolume(val) {
    this.musicVolume = Math.max(0, Math.min(1, val));
    if (this.musicGain && this.ctx && !this.musicMuted) {
      this.musicGain.gain.setTargetAtTime(this.musicVolume, this.ctx.currentTime, 0.05);
    }
  }

  /**
   * Utilitário para criar buffer de ruído branco (White Noise)
   */
  createNoiseBuffer(duration = 0.5) {
    if (!this.ctx) return null;
    const bufferSize = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  // =========================================================================
  // MÚSICA AMBIENTE PROCEDURAL (DUNGEON DRONE & AMBIENT CHORDS)
  // =========================================================================

  /**
   * Inicia a trilha sonora medieval procedural de concentração (Dorian Drone, Alaúde Acústico & Pulso Tático)
   */
  startDungeonMusic() {
    const ctx = this.getContext();
    if (!ctx || this.isMusicPlaying) return;

    this.isMusicPlaying = true;
    this.musicNodes = [];
    this.musicTimeouts = [];
    const t = ctx.currentTime;

    // =========================================================================
    // CAMADA 1: BORDÃO DE CATEDRAL & DRONE ANALÓGICO COM RESPIRAÇÃO (D2 + A2 + Sub D1)
    // =========================================================================
    
    // 1. Oscilador Raiz Fundamental D2 (73.42 Hz) - Leve detune -3 cents para calor analógico
    const oscRootA = ctx.createOscillator();
    oscRootA.type = 'triangle';
    oscRootA.frequency.setValueAtTime(73.42, t);
    oscRootA.detune.setValueAtTime(-3, t);

    // 2. Oscilador Raiz Secundário D2 (73.42 Hz) - Leve detune +3 cents (abertura acústica estéreo-like)
    const oscRootB = ctx.createOscillator();
    oscRootB.type = 'sine';
    oscRootB.frequency.setValueAtTime(73.42, t);
    oscRootB.detune.setValueAtTime(3, t);

    // 3. Quinta Justa Medieval A2 (110.00 Hz) - Harmonia nobre
    const oscFifth = ctx.createOscillator();
    oscFifth.type = 'triangle';
    oscFifth.frequency.setValueAtTime(110.00, t);

    // 4. Sub-Grave Profundo D1 (36.71 Hz) - Peso cavernoso / fundações de pedra
    const oscSub = ctx.createOscillator();
    oscSub.type = 'sine';
    oscSub.frequency.setValueAtTime(36.71, t);

    // LFO de Respiração Orgânica da Masmorra (ciclo ultra lento de ~22s a 0.045 Hz)
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.045, t);

    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(85, t); // Modula o filtro em +/- 85 Hz suavemente

    // Filtro Passa-Baixo Aveludado com Ressonância Suave
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(220, t);
    filter.Q.setValueAtTime(2.2, t);

    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    // Ganho Master do Drone com Fade-in Cinematográfico
    const droneGain = ctx.createGain();
    droneGain.gain.setValueAtTime(0.001, t);
    droneGain.gain.linearRampToValueAtTime(0.35, t + 3.5);

    oscRootA.connect(filter);
    oscRootB.connect(filter);
    oscFifth.connect(filter);
    oscSub.connect(filter);

    filter.connect(droneGain);
    droneGain.connect(this.musicGain);

    oscRootA.start(t);
    oscRootB.start(t);
    oscFifth.start(t);
    oscSub.start(t);
    lfo.start(t);

    this.musicNodes.push(oscRootA, oscRootB, oscFifth, oscSub, lfo, lfoGain, filter, droneGain);

    // =========================================================================
    // CAMADA 2: DEDILHADO PROCEDURAL DE ALAÚDE & HARPA MEDIEVAL (DORIAN FOCUS)
    // =========================================================================
    
    // Repertório de Motivos Modais Medievais em D Dorian / D Phrygian
    // Notas: D3(146.83), E3(164.81), F3(174.61), G3(196.00), A3(220.00), B3(246.94), C4(261.63), D4(293.66), E4(329.63), F4(349.23), A4(440.00)
    const medievalMotifs = [
      // Motivo I: Ecos das Criptas Ancestrais (Tristram/Diablo inspiration)
      [146.83, 220.00, 261.63, 293.66],
      // Motivo II: A Vigília do Bardo
      [110.00, 146.83, 174.61, 220.00, 196.00],
      // Motivo III: Luz nas Profundezas
      [174.61, 220.00, 293.66, 261.63, 220.00, 174.61],
      // Motivo IV: Balada do Peregrino
      [146.83, 196.00, 220.00, 261.63, 329.63, 293.66],
      // Motivo V: Concentração Heroica e Serenidade
      [146.83, 174.61, 220.00, 196.00, 146.83],
      // Motivo VI: Altar dos Antigos
      [220.00, 261.63, 293.66, 349.23, 329.63, 293.66]
    ];

    /**
     * Toca uma nota individual de alaúde com física acústica:
     * - Ataque de palheta/unha (mini transiente de ruído filtrado de 10ms)
     * - Corpo da corda esticada (oscilador triangle filtrado em passa-banda de alta ressonância Q=6.0)
     * - Decaimento harmônico natural e aveludado (1.8s a 3.0s)
     */
    const playLuteString = (freq, startTime, velocity = 1.0) => {
      if (!this.isMusicPlaying || !this.ctx) return;
      const c = this.ctx;
      const noteTime = startTime || c.currentTime;

      // 1. Transiente de impacto da unha/palheta na corda de tripa
      const pluckNoise = c.createBufferSource();
      pluckNoise.buffer = this.createNoiseBuffer(0.012);
      const pluckFilter = c.createBiquadFilter();
      pluckFilter.type = 'bandpass';
      pluckFilter.frequency.setValueAtTime(2400, noteTime);
      pluckFilter.Q.setValueAtTime(3.0, noteTime);

      const pluckGain = c.createGain();
      pluckGain.gain.setValueAtTime(0.05 * velocity, noteTime);
      pluckGain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.012);

      pluckNoise.connect(pluckFilter);
      pluckFilter.connect(pluckGain);
      pluckGain.connect(this.musicGain);

      pluckNoise.start(noteTime);
      pluckNoise.stop(noteTime + 0.014);

      // 2. Ressonância fundamental do corpo da corda
      const stringOsc = c.createOscillator();
      stringOsc.type = 'triangle';
      stringOsc.frequency.setValueAtTime(freq, noteTime);

      // 3. Harmônico sutil oitavado
      const overtoneOsc = c.createOscillator();
      overtoneOsc.type = 'sine';
      overtoneOsc.frequency.setValueAtTime(freq * 2, noteTime);

      // Filtro de caixa de ressonância de madeira do alaúde
      const bodyFilter = c.createBiquadFilter();
      bodyFilter.type = 'bandpass';
      bodyFilter.frequency.setValueAtTime(freq, noteTime);
      bodyFilter.Q.setValueAtTime(6.0, noteTime);

      const decayTime = Math.min(3.2, Math.max(1.8, 380 / freq));
      const stringGain = c.createGain();
      stringGain.gain.setValueAtTime(0.001, noteTime);
      stringGain.gain.linearRampToValueAtTime(0.24 * velocity, noteTime + 0.005);
      stringGain.gain.exponentialRampToValueAtTime(0.14 * velocity, noteTime + 0.06);
      stringGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + decayTime);

      const overtoneGain = c.createGain();
      overtoneGain.gain.setValueAtTime(0.001, noteTime);
      overtoneGain.gain.linearRampToValueAtTime(0.06 * velocity, noteTime + 0.005);
      overtoneGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + decayTime * 0.6);

      stringOsc.connect(bodyFilter);
      overtoneOsc.connect(bodyFilter);
      bodyFilter.connect(stringGain);
      stringGain.connect(this.musicGain);

      stringOsc.start(noteTime);
      overtoneOsc.start(noteTime);
      stringOsc.stop(noteTime + decayTime + 0.05);
      overtoneOsc.stop(noteTime + decayTime + 0.05);
    };

    // Agendador de Frases Medievais Humanizadas (Relaxamento & Concentração)
    let phraseIdx = 0;
    const scheduleNextPhrase = () => {
      if (!this.isMusicPlaying || !this.ctx) return;
      const motif = medievalMotifs[phraseIdx % medievalMotifs.length];
      phraseIdx++;

      const c = this.ctx;
      const baseT = c.currentTime + 0.1;

      // Executa o arpejo com cadência humana (320ms - 420ms por nota)
      motif.forEach((freq, idx) => {
        const humanDelay = idx * 0.36 + (Math.random() * 0.04 - 0.02);
        const velocity = 0.82 + Math.random() * 0.28;
        playLuteString(freq, baseT + humanDelay, velocity);
      });

      // Intervalo de silêncio reflexivo após a frase (4.5 a 6.5 segundos para foco profundo)
      const silenceDuration = 4500 + Math.random() * 2000;
      const timeoutId = setTimeout(scheduleNextPhrase, motif.length * 360 + silenceDuration);
      this.musicTimeouts.push(timeoutId);
    };

    // Primeiro dedilhado após 1.8 segundos
    const firstPhraseTimeout = setTimeout(scheduleNextPhrase, 1800);
    this.musicTimeouts.push(firstPhraseTimeout);

    // =========================================================================
    // CAMADA 3: PULSO RÍTMICO DE TAMBOR DE GUERRA TÁTICO / BODHRÁN
    // =========================================================================
    
    const playWarDrumPulse = () => {
      if (!this.isMusicPlaying || !this.ctx) return;
      const c = this.ctx;
      const drumT = c.currentTime;

      // Descida de pitch suave de tambor de couro (72Hz -> 34Hz)
      const drumOsc = c.createOscillator();
      drumOsc.type = 'sine';
      drumOsc.frequency.setValueAtTime(72, drumT);
      drumOsc.frequency.exponentialRampToValueAtTime(34, drumT + 0.32);

      const drumFilter = c.createBiquadFilter();
      drumFilter.type = 'lowpass';
      drumFilter.frequency.setValueAtTime(105, drumT);

      const drumGain = c.createGain();
      drumGain.gain.setValueAtTime(0.001, drumT);
      drumGain.gain.linearRampToValueAtTime(0.18, drumT + 0.015);
      drumGain.gain.exponentialRampToValueAtTime(0.0001, drumT + 0.65);

      drumOsc.connect(drumFilter);
      drumFilter.connect(drumGain);
      drumGain.connect(this.musicGain);

      drumOsc.start(drumT);
      drumOsc.stop(drumT + 0.7);
    };

    // Pulso a cada 3.8 segundos para ancorar foco tático de turnos
    const drumInterval = setInterval(playWarDrumPulse, 3800);
    this.musicTimeouts.push(drumInterval);
    this.musicInterval = drumInterval;
  }

  /**
   * Para a música ambiente procedural limpando todos os nós e timers
   */
  stopDungeonMusic() {
    if (!this.isMusicPlaying) return;
    this.isMusicPlaying = false;

    // Cancela todos os timers e intervalos agendados
    if (this.musicTimeouts && this.musicTimeouts.length > 0) {
      this.musicTimeouts.forEach(tId => {
        clearTimeout(tId);
        clearInterval(tId);
      });
      this.musicTimeouts = [];
    }
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }

    if (this.musicNodes && this.musicNodes.length > 0) {
      const ctx = this.ctx;
      const now = ctx ? ctx.currentTime : 0;
      this.musicNodes.forEach(node => {
        try {
          if (node.gain && node.gain.linearRampToValueAtTime) {
            node.gain.setValueAtTime(node.gain.value, now);
            node.gain.linearRampToValueAtTime(0.0001, now + 0.25);
          }
          if (node.stop) {
            node.stop(now + 0.3);
          }
        } catch (e) {}
      });
      this.musicNodes = [];
    }
  }

  // =========================================================================
  // EFEITOS SONOROS PROCEDURAIS (SFX)
  // =========================================================================

  /**
   * 1. Som de Comprar Carta (Swoosh de papel / deslizar tátil)
   */
  playCardDraw() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;
    
    // Ruído filtrado simulando atrito de papel
    const noise = ctx.createBufferSource();
    noise.buffer = this.createNoiseBuffer(0.18);

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, t);
    filter.frequency.exponentialRampToValueAtTime(2400, t + 0.15);
    filter.Q.value = 3.0;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.3, t + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(t);
    noise.stop(t + 0.18);
  }

  /**
   * 2. Som de Ataque Físico Normal com Crunch e Peso Tátil (playAttack)
   * Tripla Camada:
   * A) Sub Body Thump (155Hz -> 48Hz) - Dá a massa e peso físico do impacto.
   * B) Mid Crunch (Ruído filtrado em 850Hz Q=2.5) - Som crocante de fratura/couro/armadura.
   * C) Steel Bite (Oscilador metálico 1150Hz -> 420Hz + passa-banda) - Estalo cortante do aço.
   */
  playAttack() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Camada A: Massa e peso físico do impacto (Sub-thump encorpado)
    const bodyOsc = ctx.createOscillator();
    bodyOsc.type = 'triangle';
    bodyOsc.frequency.setValueAtTime(155, t);
    bodyOsc.frequency.exponentialRampToValueAtTime(46, t + 0.14);

    const bodyGain = ctx.createGain();
    bodyGain.gain.setValueAtTime(0.55, t);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);

    bodyOsc.connect(bodyGain);
    bodyGain.connect(this.masterGain);
    bodyOsc.start(t);
    bodyOsc.stop(t + 0.18);

    // Camada B: Crunch tátil visceral (Impacto de matéria/armadura)
    const crunchNoise = ctx.createBufferSource();
    crunchNoise.buffer = this.createNoiseBuffer(0.06);

    const crunchFilter = ctx.createBiquadFilter();
    crunchFilter.type = 'bandpass';
    crunchFilter.frequency.setValueAtTime(850, t);
    crunchFilter.frequency.exponentialRampToValueAtTime(320, t + 0.05);
    crunchFilter.Q.setValueAtTime(2.5, t);

    const crunchGain = ctx.createGain();
    crunchGain.gain.setValueAtTime(0.01, t);
    crunchGain.gain.linearRampToValueAtTime(0.42, t + 0.005);
    crunchGain.gain.exponentialRampToValueAtTime(0.001, t + 0.055);

    crunchNoise.connect(crunchFilter);
    crunchFilter.connect(crunchGain);
    crunchGain.connect(this.masterGain);
    crunchNoise.start(t);
    crunchNoise.stop(t + 0.065);

    // Camada C: Estalido de lâmina afiada mordendo o alvo
    const steelOsc = ctx.createOscillator();
    steelOsc.type = 'sawtooth';
    steelOsc.frequency.setValueAtTime(1150, t);
    steelOsc.frequency.exponentialRampToValueAtTime(420, t + 0.07);

    const steelFilter = ctx.createBiquadFilter();
    steelFilter.type = 'bandpass';
    steelFilter.frequency.setValueAtTime(1800, t);
    steelFilter.Q.setValueAtTime(3.0, t);

    const steelGain = ctx.createGain();
    steelGain.gain.setValueAtTime(0.28, t);
    steelGain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

    steelOsc.connect(steelFilter);
    steelFilter.connect(steelGain);
    steelGain.connect(this.masterGain);
    steelOsc.start(t);
    steelOsc.stop(t + 0.09);
  }

  /**
   * 3. Som de Ataque Pesado Titânico / Golpe Crítico Devastador (playHeavyAttack)
   * Tripla Camada:
   * A) Onda de Choque Sísmica (Sub 95Hz -> 26Hz em 0.5s) - Tremor visceral de chão.
   * B) Explosão de Crunch & Impacto Cavernoso (Sawtooth saturado 260Hz -> 52Hz + ruído).
   * C) Tensão de Aço e Ressonância de Bigorna (Harmônicos metálicos 440Hz / 880Hz).
   */
  playHeavyAttack() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Camada A: Onda de Choque Sísmica (Sub-grave profundo e poderoso)
    const subOsc = ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(95, t);
    subOsc.frequency.exponentialRampToValueAtTime(26, t + 0.5);

    const subFilter = ctx.createBiquadFilter();
    subFilter.type = 'lowpass';
    subFilter.frequency.setValueAtTime(140, t);

    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.9, t);
    subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.52);

    subOsc.connect(subFilter);
    subFilter.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start(t);
    subOsc.stop(t + 0.55);

    // Camada B: Esmagamento de armadura e corpo (Crunch visceral e estrondo)
    const crunchOsc = ctx.createOscillator();
    crunchOsc.type = 'sawtooth';
    crunchOsc.frequency.setValueAtTime(260, t);
    crunchOsc.frequency.exponentialRampToValueAtTime(52, t + 0.32);

    const crunchFilter = ctx.createBiquadFilter();
    crunchFilter.type = 'lowpass';
    crunchFilter.frequency.setValueAtTime(450, t);
    crunchFilter.frequency.exponentialRampToValueAtTime(80, t + 0.35);

    const crunchGain = ctx.createGain();
    crunchGain.gain.setValueAtTime(0.75, t);
    crunchGain.gain.exponentialRampToValueAtTime(0.001, t + 0.36);

    crunchOsc.connect(crunchFilter);
    crunchFilter.connect(crunchGain);
    crunchGain.connect(this.masterGain);
    crunchOsc.start(t);
    crunchOsc.stop(t + 0.38);

    // Ruído de impacto cavernoso
    const blastNoise = ctx.createBufferSource();
    blastNoise.buffer = this.createNoiseBuffer(0.38);

    const blastFilter = ctx.createBiquadFilter();
    blastFilter.type = 'lowpass';
    blastFilter.frequency.setValueAtTime(750, t);
    blastFilter.frequency.exponentialRampToValueAtTime(140, t + 0.35);

    const blastGain = ctx.createGain();
    blastGain.gain.setValueAtTime(0.65, t);
    blastGain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);

    blastNoise.connect(blastFilter);
    blastFilter.connect(blastGain);
    blastGain.connect(this.masterGain);
    blastNoise.start(t);
    blastNoise.stop(t + 0.4);

    // Camada C: Ressonância Metálica de Bigorna / Choque de armas pesadas
    [440, 880].forEach((freq, idx) => {
      const ringOsc = ctx.createOscillator();
      ringOsc.type = 'sine';
      ringOsc.frequency.setValueAtTime(freq, t);

      const ringGain = ctx.createGain();
      ringGain.gain.setValueAtTime(0.22 / (idx + 1), t);
      ringGain.gain.exponentialRampToValueAtTime(0.001, t + 0.32);

      ringOsc.connect(ringGain);
      ringGain.connect(this.masterGain);
      ringOsc.start(t);
      ringOsc.stop(t + 0.34);
    });
  }

  /**
   * 4. Som de Escudo / Bloqueio com Broquel de Carvalho e Umbo de Ferro (playShield)
   * Tripla Camada:
   * A) Baque oco de madeira maciça (185Hz -> 58Hz).
   * B) Ressonância de umbo de ferro abafado (390Hz).
   * C) Deflexão de lâmina / atrito de aço (passa-banda 1250Hz).
   */
  playShield() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Camada A: Baque de carvalho maciço absorvendo o impacto
    const woodOsc = ctx.createOscillator();
    woodOsc.type = 'triangle';
    woodOsc.frequency.setValueAtTime(185, t);
    woodOsc.frequency.exponentialRampToValueAtTime(58, t + 0.16);

    const woodGain = ctx.createGain();
    woodGain.gain.setValueAtTime(0.55, t);
    woodGain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

    woodOsc.connect(woodGain);
    woodGain.connect(this.masterGain);
    woodOsc.start(t);
    woodOsc.stop(t + 0.2);

    // Camada B: Ressonância firme do umbo de ferro (sem agudos estridentes)
    const ironOsc = ctx.createOscillator();
    ironOsc.type = 'sine';
    ironOsc.frequency.setValueAtTime(390, t);
    ironOsc.frequency.exponentialRampToValueAtTime(180, t + 0.14);

    const ironFilter = ctx.createBiquadFilter();
    ironFilter.type = 'bandpass';
    ironFilter.frequency.setValueAtTime(390, t);
    ironFilter.Q.setValueAtTime(3.5, t);

    const ironGain = ctx.createGain();
    ironGain.gain.setValueAtTime(0.35, t);
    ironGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

    ironOsc.connect(ironFilter);
    ironFilter.connect(ironGain);
    ironGain.connect(this.masterGain);
    ironOsc.start(t);
    ironOsc.stop(t + 0.17);

    // Camada C: Ruído de atrito e deflexão de lâmina
    const deflectNoise = ctx.createBufferSource();
    deflectNoise.buffer = this.createNoiseBuffer(0.05);

    const deflectFilter = ctx.createBiquadFilter();
    deflectFilter.type = 'bandpass';
    deflectFilter.frequency.setValueAtTime(1250, t);
    deflectFilter.Q.setValueAtTime(2.8, t);

    const deflectGain = ctx.createGain();
    deflectGain.gain.setValueAtTime(0.25, t);
    deflectGain.gain.exponentialRampToValueAtTime(0.001, t + 0.045);

    deflectNoise.connect(deflectFilter);
    deflectFilter.connect(deflectGain);
    deflectGain.connect(this.masterGain);
    deflectNoise.start(t);
    deflectNoise.stop(t + 0.055);
  }

  /**
   * 5. Som de Dano Recebido / Impacto no Herói (playDamage)
   * Impacto visceral no peito com compressão acústica e baque de armadura amassando.
   */
  playDamage() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Baque físico no corpo (145Hz -> 38Hz)
    const bodyOsc = ctx.createOscillator();
    bodyOsc.type = 'sawtooth';
    bodyOsc.frequency.setValueAtTime(145, t);
    bodyOsc.frequency.exponentialRampToValueAtTime(38, t + 0.22);

    const bodyFilter = ctx.createBiquadFilter();
    bodyFilter.type = 'lowpass';
    bodyFilter.frequency.setValueAtTime(360, t);

    const bodyGain = ctx.createGain();
    bodyGain.gain.setValueAtTime(0.72, t);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, t + 0.24);

    bodyOsc.connect(bodyFilter);
    bodyFilter.connect(bodyGain);
    bodyGain.connect(this.masterGain);
    bodyOsc.start(t);
    bodyOsc.stop(t + 0.26);

    // Crunch abafado de armadura
    const crunchNoise = ctx.createBufferSource();
    crunchNoise.buffer = this.createNoiseBuffer(0.08);

    const crunchFilter = ctx.createBiquadFilter();
    crunchFilter.type = 'bandpass';
    crunchFilter.frequency.setValueAtTime(520, t);
    crunchFilter.Q.setValueAtTime(2.2, t);

    const crunchGain = ctx.createGain();
    crunchGain.gain.setValueAtTime(0.35, t);
    crunchGain.gain.exponentialRampToValueAtTime(0.001, t + 0.075);

    crunchNoise.connect(crunchFilter);
    crunchFilter.connect(crunchGain);
    crunchGain.connect(this.masterGain);
    crunchNoise.start(t);
    crunchNoise.stop(t + 0.085);
  }

  /**
   * 6. Som de Cura / Santuário (Ascensão mágica celestial)
   */
  playHeal() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const notes = [261.63, 329.63, 392.00, 523.25, 659.25]; // C4, E4, G4, C5, E5
    const baseTime = ctx.currentTime;

    notes.forEach((freq, index) => {
      const t = baseTime + index * 0.08;
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.25, t + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.4);
    });
  }

  /**
   * 7. Som de Clique Rúnico / Botão de Interface
   */
  playButtonClick() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(700, t);
    osc.frequency.exponentialRampToValueAtTime(350, t + 0.06);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.07);
  }

  /**
   * 8. Som de Vitória Gloriosa (Fanfarra heroica sintetizada)
   */
  playVictory() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const fanfareNotes = [
      { freq: 196.00, delay: 0.00, dur: 0.22 }, // G3
      { freq: 261.63, delay: 0.18, dur: 0.22 }, // C4
      { freq: 329.63, delay: 0.36, dur: 0.22 }, // E4
      { freq: 392.00, delay: 0.54, dur: 0.45 }, // G4
      { freq: 523.25, delay: 0.90, dur: 0.85 }  // C5 (Sustentado)
    ];

    const baseTime = ctx.currentTime;

    fanfareNotes.forEach(({ freq, delay, dur }) => {
      const t = baseTime + delay;

      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      if (dur > 0.5) {
        const vibrato = ctx.createOscillator();
        const vibratoGain = ctx.createGain();
        vibrato.frequency.value = 5;
        vibratoGain.gain.value = 4;
        vibrato.connect(vibratoGain);
        vibratoGain.connect(osc.frequency);
        vibrato.start(t + 0.2);
        vibrato.stop(t + dur);
      }

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, t);
      gain.gain.linearRampToValueAtTime(0.35, t + 0.05);
      gain.gain.setValueAtTime(0.32, t + dur * 0.7);
      gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + dur + 0.05);
    });
  }

  /**
   * 9. Som de Derrota (Acorde menor sombrio e descida fúnebre)
   */
  playDefeat() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const defeatNotes = [
      { freq: 220.00, delay: 0.00, dur: 0.45 },
      { freq: 196.00, delay: 0.35, dur: 0.45 },
      { freq: 174.61, delay: 0.70, dur: 0.55 },
      { freq: 130.81, delay: 1.15, dur: 1.20 } // C3 grave ressonante
    ];

    const baseTime = ctx.currentTime;

    defeatNotes.forEach(({ freq, delay, dur }) => {
      const t = baseTime + delay;

      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, t);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, t);
      filter.frequency.exponentialRampToValueAtTime(150, t + dur);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, t);
      gain.gain.linearRampToValueAtTime(0.3, t + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + dur + 0.05);
    });
  }

  // =========================================================================
  // NOVOS EFEITOS SONOROS (SPRINT 1)
  // =========================================================================

  /**
   * 10. Som de Queimadura / Fogo Crepitante (playBurn)
   */
  playBurn() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Ruído de fogo crepitante
    const noise = ctx.createBufferSource();
    noise.buffer = this.createNoiseBuffer(0.35);

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, t);
    filter.frequency.exponentialRampToValueAtTime(450, t + 0.3);
    filter.Q.setValueAtTime(4.0, t);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.4, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.32);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(t);
    noise.stop(t + 0.35);

    // Mini-estalidos crepitantes adicionais (estalos de brasas)
    for (let i = 0; i < 3; i++) {
      const popTime = t + 0.05 + i * 0.08;
      const popOsc = ctx.createOscillator();
      popOsc.type = 'sawtooth';
      popOsc.frequency.setValueAtTime(800 + Math.random() * 600, popTime);
      popOsc.frequency.exponentialRampToValueAtTime(200, popTime + 0.03);

      const popGain = ctx.createGain();
      popGain.gain.setValueAtTime(0.2, popTime);
      popGain.gain.exponentialRampToValueAtTime(0.001, popTime + 0.03);

      popOsc.connect(popGain);
      popGain.connect(this.masterGain);

      popOsc.start(popTime);
      popOsc.stop(popTime + 0.04);
    }
  }

  /**
   * 11. Som de Debuff / Fraqueza / Vulnerável (playDebuff)
   */
  playDebuff() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Glissando etéreo descendente
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(440, t);
    osc.frequency.exponentialRampToValueAtTime(95, t + 0.35);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(650, t);
    filter.frequency.exponentialRampToValueAtTime(180, t + 0.35);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.35, t + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.4);
  }

  /**
   * 12. Som de Buff / Aumento de Força (playBuff)
   */
  playBuff() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Ressonância ascendente e triunfante
    const osc1 = ctx.createOscillator();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(180, t);
    osc1.frequency.exponentialRampToValueAtTime(520, t + 0.3);

    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(270, t);
    osc2.frequency.exponentialRampToValueAtTime(780, t + 0.3);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.4, t + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.36);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + 0.38);
    osc2.stop(t + 0.38);
  }

  /**
   * 13. Som de Relíquia Obtida (playRelicObtained)
   */
  playRelicObtained() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Arpejo místico brilhante: C5 -> E5 -> G5 -> C6
    const relicNotes = [523.25, 659.25, 783.99, 1046.50];

    relicNotes.forEach((freq, idx) => {
      const noteTime = t + idx * 0.09;

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, noteTime);
      gain.gain.linearRampToValueAtTime(0.35, noteTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.55);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(noteTime);
      osc.stop(noteTime + 0.6);
    });

    // Shimmer de sinos em alta frequência
    const chimeOsc = ctx.createOscillator();
    chimeOsc.type = 'triangle';
    chimeOsc.frequency.setValueAtTime(1567.98, t + 0.28); // G6
    chimeOsc.frequency.exponentialRampToValueAtTime(1318.51, t + 0.7);

    const chimeGain = ctx.createGain();
    chimeGain.gain.setValueAtTime(0.01, t + 0.28);
    chimeGain.gain.linearRampToValueAtTime(0.2, t + 0.32);
    chimeGain.gain.exponentialRampToValueAtTime(0.001, t + 0.75);

    chimeOsc.connect(chimeGain);
    chimeGain.connect(this.masterGain);

    chimeOsc.start(t + 0.28);
    chimeOsc.stop(t + 0.8);
  }

  /**
   * 14. Som de Moedas de Ouro Tilintando no Comércio (playCoins)
   */
  playCoins() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;
    const coinFrequencies = [2400, 3100, 2750, 3500];

    coinFrequencies.forEach((freq, idx) => {
      const dropTime = t + idx * 0.055;
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, dropTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.82, dropTime + 0.1);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, dropTime);
      gain.gain.linearRampToValueAtTime(0.25, dropTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, dropTime + 0.14);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(dropTime);
      osc.stop(dropTime + 0.15);
    });
  }

  /**
   * 15. Som de Consumir Poção Mágica (playPotion)
   * Sintetiza o destampar da rolha seguido de borbulhas mágicas ascendentes.
   */
  playPotion() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Pop de rolha (curto e ressonante)
    const popOsc = ctx.createOscillator();
    popOsc.type = 'sine';
    popOsc.frequency.setValueAtTime(450, t);
    popOsc.frequency.exponentialRampToValueAtTime(180, t + 0.06);

    const popGain = ctx.createGain();
    popGain.gain.setValueAtTime(0.3, t);
    popGain.gain.exponentialRampToValueAtTime(0.01, t + 0.06);

    popOsc.connect(popGain);
    popGain.connect(this.masterGain);
    popOsc.start(t);
    popOsc.stop(t + 0.07);

    // Borbulhas líquidas ascendentes
    const bubblePitches = [320, 480, 640, 880, 1100];
    bubblePitches.forEach((freq, i) => {
      const bTime = t + 0.05 + i * 0.045;
      const bOsc = ctx.createOscillator();
      bOsc.type = 'sine';
      bOsc.frequency.setValueAtTime(freq, bTime);
      bOsc.frequency.exponentialRampToValueAtTime(freq * 1.35, bTime + 0.06);

      const bGain = ctx.createGain();
      bGain.gain.setValueAtTime(0.01, bTime);
      bGain.gain.linearRampToValueAtTime(0.2, bTime + 0.02);
      bGain.gain.exponentialRampToValueAtTime(0.001, bTime + 0.07);

      bOsc.connect(bGain);
      bGain.connect(this.masterGain);
      bOsc.start(bTime);
      bOsc.stop(bTime + 0.08);
    });
  }

  /**
   * 16. Som de Evento Narrativo Misterioso (playMysteryEvent)
   * Acorde misterioso de gongo/carrilhão místico com ressonância profunda.
   */
  playMysteryEvent() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;
    const mysteryNotes = [220, 277.18, 329.63, 415.3]; // A - C# - E - G# (Lírico místico)

    mysteryNotes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, t);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, t);
      gain.gain.linearRampToValueAtTime(0.18 / (idx + 1), t + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 1.8);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 1.9);
    });
  }

  // =========================================================================
  // COMBAT FX & JUICE AUDIO (FASE 5)
  // =========================================================================

  /**
   * 17. Som de Corte de Lâmina Afiada (playSlash)
   * Voo rápido de aço no ar com estalido metálico cortante e deslocamento supersônico.
   */
  playSlash() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Sopro cortante do ar (White noise varrendo de 1500Hz -> 4200Hz -> 850Hz)
    const noise = ctx.createBufferSource();
    noise.buffer = this.createNoiseBuffer(0.14);

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1500, t);
    filter.frequency.exponentialRampToValueAtTime(4200, t + 0.05);
    filter.frequency.exponentialRampToValueAtTime(850, t + 0.13);
    filter.Q.setValueAtTime(4.0, t);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.01, t);
    noiseGain.gain.linearRampToValueAtTime(0.42, t + 0.02);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.135);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(t);
    noise.stop(t + 0.15);

    // Zunido metálico da lâmina afiada
    const ringOsc = ctx.createOscillator();
    ringOsc.type = 'triangle';
    ringOsc.frequency.setValueAtTime(1600, t);
    ringOsc.frequency.exponentialRampToValueAtTime(820, t + 0.11);

    const ringGain = ctx.createGain();
    ringGain.gain.setValueAtTime(0.26, t);
    ringGain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

    ringOsc.connect(ringGain);
    ringGain.connect(this.masterGain);
    ringOsc.start(t);
    ringOsc.stop(t + 0.14);

    // Micro-baque de corte
    const snapOsc = ctx.createOscillator();
    snapOsc.type = 'sine';
    snapOsc.frequency.setValueAtTime(240, t);
    snapOsc.frequency.exponentialRampToValueAtTime(75, t + 0.05);

    const snapGain = ctx.createGain();
    snapGain.gain.setValueAtTime(0.3, t);
    snapGain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

    snapOsc.connect(snapGain);
    snapGain.connect(this.masterGain);
    snapOsc.start(t);
    snapOsc.stop(t + 0.06);
  }

  /**
   * 18. Som de Corte Pesado / Clivagem Titânica (playHeavySlash)
   * Impacto de grande arma de duas mãos com deslocamento violento de ar e vibração de aço.
   */
  playHeavySlash() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Vórtice cortante de ar denso
    const noise = ctx.createBufferSource();
    noise.buffer = this.createNoiseBuffer(0.26);

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(700, t);
    filter.frequency.exponentialRampToValueAtTime(2900, t + 0.08);
    filter.frequency.exponentialRampToValueAtTime(320, t + 0.24);
    filter.Q.setValueAtTime(3.0, t);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.01, t);
    noiseGain.gain.linearRampToValueAtTime(0.48, t + 0.03);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(t);
    noise.stop(t + 0.27);

    // Massa de impacto sub-grave
    const subOsc = ctx.createOscillator();
    subOsc.type = 'sawtooth';
    subOsc.frequency.setValueAtTime(135, t);
    subOsc.frequency.exponentialRampToValueAtTime(36, t + 0.3);

    const subFilter = ctx.createBiquadFilter();
    subFilter.type = 'lowpass';
    subFilter.frequency.setValueAtTime(260, t);

    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.65, t);
    subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.32);

    subOsc.connect(subFilter);
    subFilter.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start(t);
    subOsc.stop(t + 0.34);

    // Vibração oscilante de lâmina pesada de duas mãos (detuned)
    [520, 534].forEach(freq => {
      const ringOsc = ctx.createOscillator();
      ringOsc.type = 'sine';
      ringOsc.frequency.setValueAtTime(freq, t);

      const ringGain = ctx.createGain();
      ringGain.gain.setValueAtTime(0.2, t);
      ringGain.gain.exponentialRampToValueAtTime(0.001, t + 0.24);

      ringOsc.connect(ringGain);
      ringGain.connect(this.masterGain);
      ringOsc.start(t);
      ringOsc.stop(t + 0.26);
    });
  }

  /**
   * 19. Som de Onda de Choque de Escudo / Barreira Rúnica (playShieldWave)
   * Ressonância límpida de cristal protetor e gongo rúnico ancestral.
   */
  playShieldWave() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;
    // Acorde nobre rúnico: D3, A3, D4, F#4
    const chordFreqs = [146.83, 220.00, 293.66, 369.99];

    chordFreqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.32 / (idx + 1), t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.58);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.62);
    });

    // Pulso sub-grave de barreira protetora
    const subOsc = ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(82, t);
    subOsc.frequency.exponentialRampToValueAtTime(40, t + 0.4);

    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.4, t);
    subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.42);

    subOsc.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start(t);
    subOsc.stop(t + 0.45);
  }

  /**
   * 20. Som de Borbulhas & Gotículas de Veneno (playPoisonBubble)
   * Estalidos líquidos orgânicos e efervescência ácida.
   */
  playPoisonBubble() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // 4 micro-borbulhas em rápida sucessão
    for (let i = 0; i < 4; i++) {
      const bTime = t + i * 0.05;
      const startFreq = 280 + Math.random() * 200;
      const endFreq = startFreq + 240 + Math.random() * 150;

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(startFreq, bTime);
      osc.frequency.exponentialRampToValueAtTime(endFreq, bTime + 0.04);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, bTime);
      gain.gain.linearRampToValueAtTime(0.2, bTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, bTime + 0.045);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(bTime);
      osc.stop(bTime + 0.05);
    }
  }

  /**
   * 21. Som de Rajada de Fogo & Brasas (playFireBurst)
   * Labareda flamejante com rugido de calor e estalos.
   */
  playFireBurst() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    this.playBurn();

    const t = ctx.currentTime;
    const roarOsc = ctx.createOscillator();
    roarOsc.type = 'triangle';
    roarOsc.frequency.setValueAtTime(180, t);
    roarOsc.frequency.exponentialRampToValueAtTime(65, t + 0.35);

    const roarFilter = ctx.createBiquadFilter();
    roarFilter.type = 'lowpass';
    roarFilter.frequency.setValueAtTime(350, t);

    const roarGain = ctx.createGain();
    roarGain.gain.setValueAtTime(0.3, t);
    roarGain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);

    roarOsc.connect(roarFilter);
    roarFilter.connect(roarGain);
    roarGain.connect(this.masterGain);

    roarOsc.start(t);
    roarOsc.stop(t + 0.4);
  }
}

// Instância Singleton Global
const soundInstance = new SoundSynthesizer();
if (typeof window !== 'undefined') {
  window.SoundFX = soundInstance;
  window.AudioManager = soundInstance;
}
if (typeof globalThis !== 'undefined') {
  globalThis.SoundFX = soundInstance;
  globalThis.AudioManager = soundInstance;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = soundInstance;
}
soundInstance;



/* --- MÓDULO: js/data/statusEffects.js --- */
/**
 * js/data/statusEffects.js
 * Sistema de Buffs, Debuffs e Modificadores de Combate de "Cards e Dungeons".
 */

const STATUS_TYPES = {
  STRENGTH: 'strength',
  VULNERABLE: 'vulnerable',
  WEAK: 'weak',
  BURN: 'burn',
  THORNS: 'thorns',
  POISON: 'poison'
};

const STATUS_DEFINITIONS = {
  [STATUS_TYPES.STRENGTH]: {
    id: STATUS_TYPES.STRENGTH,
    name: 'Força',
    isBuff: true,
    description: 'Aumenta o dano de cada ataque em X pontos durante todo o combate.',
    icon: 'muscle'
  },
  [STATUS_TYPES.VULNERABLE]: {
    id: STATUS_TYPES.VULNERABLE,
    name: 'Vulnerável',
    isBuff: false,
    description: 'Recebe 50% a mais de dano de ataques físicos.',
    icon: 'broken_shield'
  },
  [STATUS_TYPES.WEAK]: {
    id: STATUS_TYPES.WEAK,
    name: 'Fraco',
    isBuff: false,
    description: 'Causa 25% a menos de dano em todos os ataques.',
    icon: 'broken_sword'
  },
  [STATUS_TYPES.BURN]: {
    id: STATUS_TYPES.BURN,
    name: 'Queimadura',
    isBuff: false,
    description: 'Sofre dano de fogo no início do turno igual ao valor atual, reduzindo em 1.',
    icon: 'flame'
  },
  [STATUS_TYPES.THORNS]: {
    id: STATUS_TYPES.THORNS,
    name: 'Espinhos / Retaliação',
    isBuff: true,
    description: 'Causa dano direto de retorno a qualquer inimigo que atacar.',
    icon: 'spikes'
  },
  [STATUS_TYPES.POISON]: {
    id: STATUS_TYPES.POISON,
    name: 'Veneno',
    isBuff: false,
    description: 'Sofre dano letal direto à Vida no fim do turno (ignora armadura), reduzindo em 1.',
    icon: 'poison'
  }
};

/**
 * Cria o mapa inicial de status zerados para uma entidade.
 * @returns {Object}
 */
function createDefaultStatusMap() {
  return {
    [STATUS_TYPES.STRENGTH]: 0,
    [STATUS_TYPES.VULNERABLE]: 0,
    [STATUS_TYPES.WEAK]: 0,
    [STATUS_TYPES.BURN]: 0,
    [STATUS_TYPES.THORNS]: 0,
    [STATUS_TYPES.POISON]: 0
  };
}

/**
 * Aplica um status a uma entidade (herói ou inimigo).
 * @param {Object} entity
 * @param {string} statusKey
 * @param {number} amount
 */
function applyStatus(entity, statusKey, amount) {
  if (!entity.statuses) {
    entity.statuses = createDefaultStatusMap();
  }
  entity.statuses[statusKey] = (entity.statuses[statusKey] || 0) + amount;
  return entity.statuses[statusKey];
}

/**
 * Calcula o dano final de um golpe considerando Força, Fraco e Vulnerável.
 * @param {number} baseDamage Dano base do ataque
 * @param {Object} attacker Entidade atacante
 * @param {Object} defender Entidade defensora
 * @returns {number} Dano final inteiro
 */
function calculateModifiedDamage(baseDamage, attacker, defender) {
  if (baseDamage <= 0) return 0;

  let damage = baseDamage;

  // 1. Modificador de Força do atacante
  const attackerStrength = attacker?.statuses?.[STATUS_TYPES.STRENGTH] || 0;
  damage += attackerStrength;

  // 2. Modificador de Fraco do atacante (-25% de dano)
  const isAttackerWeak = (attacker?.statuses?.[STATUS_TYPES.WEAK] || 0) > 0;
  if (isAttackerWeak) {
    damage = Math.floor(damage * 0.75);
  }

  // 3. Modificador de Vulnerável do defensor (+50% de dano sofrido)
  const isDefenderVulnerable = (defender?.statuses?.[STATUS_TYPES.VULNERABLE] || 0) > 0;
  if (isDefenderVulnerable) {
    damage = Math.floor(damage * 1.5);
  }

  return Math.max(1, damage);
}

/**
 * Processa status no início do turno da entidade (ex: Queimadura).
 * @param {Object} entity
 * @param {function} [logFn]
 * @returns {Object} { burnDamage }
 */
function tickTurnStartStatuses(entity, logFn = null) {
  if (!entity.statuses) return { burnDamage: 0 };

  let burnDamage = 0;
  if (entity.statuses[STATUS_TYPES.BURN] > 0) {
    burnDamage = entity.statuses[STATUS_TYPES.BURN];
    entity.hp = Math.max(0, entity.hp - burnDamage);
    entity.statuses[STATUS_TYPES.BURN] = Math.max(0, entity.statuses[STATUS_TYPES.BURN] - 1);

    if (logFn) {
      logFn(`${entity.name || 'Alvo'} sofreu ${burnDamage} de dano de Queimadura! (Restante: ${entity.statuses[STATUS_TYPES.BURN]})`);
    }
  }

  return { burnDamage };
}

/**
 * Processa status no fim do turno da entidade (decrementa Vulnerável, Fraco e aplica Veneno).
 * @param {Object} entity
 * @param {function} [logFn]
 * @returns {Object} { poisonDamage }
 */
function tickTurnEndStatuses(entity, logFn = null) {
  if (!entity.statuses) return { poisonDamage: 0 };

  let poisonDamage = 0;
  if (entity.statuses[STATUS_TYPES.POISON] > 0) {
    poisonDamage = entity.statuses[STATUS_TYPES.POISON];
    entity.hp = Math.max(0, entity.hp - poisonDamage);
    entity.statuses[STATUS_TYPES.POISON] = Math.max(0, entity.statuses[STATUS_TYPES.POISON] - 1);
    if (logFn) {
      logFn(`${entity.name || 'Alvo'} sofreu ${poisonDamage} de dano letal de Veneno! (Restante: ${entity.statuses[STATUS_TYPES.POISON]})`);
    }
  }

  if (entity.statuses[STATUS_TYPES.VULNERABLE] > 0) {
    entity.statuses[STATUS_TYPES.VULNERABLE] -= 1;
    if (logFn && entity.statuses[STATUS_TYPES.VULNERABLE] === 0) {
      logFn(`${entity.name || 'Alvo'} não está mais Vulnerável.`);
    }
  }

  if (entity.statuses[STATUS_TYPES.WEAK] > 0) {
    entity.statuses[STATUS_TYPES.WEAK] -= 1;
    if (logFn && entity.statuses[STATUS_TYPES.WEAK] === 0) {
      logFn(`${entity.name || 'Alvo'} recuperou sua força normal (não está mais Fraco).`);
    }
  }

  return { poisonDamage };
}


/* --- MÓDULO: js/data/relics.js --- */
/**
 * js/data/relics.js
 * Sistema de Relíquias e Artefatos Passivos de "Cards e Dungeons".
 */



const RELICS = {
  amulet_strength: {
    id: 'amulet_strength',
    name: 'Amuleto da Força',
    rarity: 'rare',
    icon: 'strength_amulet',
    description: 'Inicia todos os combates com +2 de Força concedidos pelo poder primordial do amuleto.',
    onCombatStart: (context) => {
      applyStatus(context.hero, STATUS_TYPES.STRENGTH, 2);
      context.log?.('O Amuleto da Força ressoa, concedendo +2 de Força!');
    }
  },

  blood_chalice: {
    id: 'blood_chalice',
    name: 'Cálice de Sangue',
    rarity: 'rare',
    icon: 'blood_chalice',
    description: 'Recupera 5 pontos de Vida ao triunfar sobre qualquer oponente no calabouço.',
    onCombatEnd: (context) => {
      if (context.result === 'victory') {
        const prevHp = context.hero.hp;
        context.hero.hp = Math.min(context.hero.maxHp, context.hero.hp + 5);
        const healed = context.hero.hp - prevHp;
        if (healed > 0) {
          context.log?.(`O Cálice de Sangue saciou sua sede de vitória, restaurando ${healed} de HP!`);
        }
      }
    }
  },

  spike_shield: {
    id: 'spike_shield',
    name: 'Escudo de Espinhos',
    rarity: 'uncommon',
    icon: 'spike_shield',
    description: 'Enquanto o herói possuir armadura ativa, qualquer ataque inimigo sofre 4 de dano de retaliação imediata.',
    onTakeAttack: (context) => {
      // Dispara se o herói tiver armadura ativa antes ou durante o impacto
      if (context.hero.block > 0 && context.attacker) {
        const retaliation = 4;
        context.attacker.hp = Math.max(0, context.attacker.hp - retaliation);
        context.log?.(`Os espinhos do seu escudo retaliaram o golpe causando ${retaliation} de dano direto a ${context.attacker.name}!`);
        return retaliation;
      }
      return 0;
    }
  },

  ancient_orb: {
    id: 'ancient_orb',
    name: 'Orbe de Mana Ancião',
    rarity: 'rare',
    icon: 'ancient_orb',
    description: 'Canaliza mana primordial, concedendo +1 de energia extra no 1º turno de cada combate (totalizando 4).',
    onCombatStart: (context) => {
      context.hero.energy += 1;
      context.log?.('O Orbe Ancião pulsa com energia arcana (+1 de energia no 1º turno)!');
    }
  },

  poison_vial: {
    id: 'poison_vial',
    name: 'Frasco Peçonhento',
    rarity: 'rare',
    icon: 'poison_vial',
    description: 'No início de cada combate, quebra um frasco nos pés do oponente, aplicando 3 de Veneno inicial.',
    onCombatStart: (context) => {
      if (context.enemy) {
        applyStatus(context.enemy, STATUS_TYPES.POISON, 3);
        context.log?.('O Frasco Peçonhento exala vapores tóxicos (+3 de Veneno no inimigo)!');
      }
    }
  },

  fortune_bag: {
    id: 'fortune_bag',
    name: 'Bolsa da Fortuna',
    rarity: 'uncommon',
    icon: 'fortune_bag',
    description: 'Bolsa mágica de veludo encantada por gnomos: concede +25 de ouro adicional ao vencer qualquer batalha.',
    onCombatEnd: (context) => {
      if (context.result === 'victory' && context.hero) {
        context.hero.gold = (context.hero.gold || 0) + 25;
        context.log?.('A Bolsa da Fortuna transborda (+25 ouro extra da vitória)!');
      }
    }
  },

  ether_cloak: {
    id: 'ether_cloak',
    name: 'Manto de Éter',
    rarity: 'rare',
    icon: 'ether_cloak',
    description: 'Tecido com fibras fantasmagóricas protetoras: inicia todos os combates com 5 de Armadura instantânea.',
    onCombatStart: (context) => {
      if (context.hero) {
        context.hero.block = (context.hero.block || 0) + 5;
        context.log?.('O Manto de Éter se solidifica concedendo 5 de armadura inicial!');
      }
    }
  },

  whetstone: {
    id: 'whetstone',
    name: 'Pedra de Amolar Rúnica',
    rarity: 'uncommon',
    icon: 'whetstone',
    description: 'Inscrições anãs afiam seu aço: concede +1 de Força passiva no início de cada combate.',
    onCombatStart: (context) => {
      if (context.hero) {
        applyStatus(context.hero, STATUS_TYPES.STRENGTH, 1);
        context.log?.('A Pedra de Amolar Rúnica potencializa seus golpes (+1 de Força)!');
      }
    }
  }
};

const ALL_RELIC_IDS = Object.keys(RELICS);

/**
 * Adiciona uma relíquia ao inventário passivo do herói.
 * @param {Object} hero
 * @param {string} relicId
 * @returns {Object} A relíquia adicionada
 */
function addRelicToHero(hero, relicId) {
  if (!hero.relics) {
    hero.relics = [];
  }
  const relicDef = RELICS[relicId];
  if (!relicDef) {
    throw new Error(`Relíquia não encontrada com id: "${relicId}"`);
  }

  // Evita duplicatas se já possuir
  if (!hero.relics.some(r => r.id === relicId)) {
    hero.relics.push({ ...relicDef });
  }

  return relicDef;
}

/**
 * Verifica se o herói possui uma determinada relíquia.
 * @param {Object} hero
 * @param {string} relicId
 * @returns {boolean}
 */
function hasRelic(hero, relicId) {
  if (!hero || !hero.relics) return false;
  return hero.relics.some(r => r.id === relicId);
}

/**
 * Dispara os gatilhos passivos das relíquias equipadas.
 * @param {string} triggerName 'onCombatStart' | 'onCombatEnd' | 'onTakeAttack'
 * @param {Object} hero
 * @param {Object} context Contexto adicional (combat, attacker, result, log)
 */
function triggerRelics(triggerName, hero, context = {}) {
  if (!hero || !hero.relics || hero.relics.length === 0) return;

  const fullContext = {
    hero,
    ...context
  };

  for (const relic of hero.relics) {
    const handler = RELICS[relic.id]?.[triggerName];
    if (typeof handler === 'function') {
      handler(fullContext);
    }
  }
}

/**
 * Retorna uma relíquia aleatória para recompensas de nós de Elite ou Baús.
 * @param {Array<string>} excludeIds
 * @param {function} [rng=Math.random]
 * @returns {Object|null}
 */
function getRandomRelic(excludeIds = [], rng = Math.random) {
  const available = ALL_RELIC_IDS.filter(id => !excludeIds.includes(id));
  if (available.length === 0) return null;
  const idx = Math.floor(rng() * available.length);
  return { ...RELICS[available[idx]] };
}


/* --- MÓDULO: js/data/heroes.js --- */
/**
 * js/data/heroes.js
 * Catálogo e Definição das Classes de Heróis de "Cards e Dungeons".
 * Define os arquétipos selecionáveis, decks iniciais, vida, energia e relíquias nativas.
 */

const HERO_CLASSES = {
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

const DEFAULT_HERO_CLASS_ID = 'warrior';

/**
 * Obtém a definição de uma classe por id com fallback seguro.
 * @param {string} classId
 * @returns {Object}
 */
function getHeroClass(classId) {
  const normalized = (classId || '').toUpperCase();
  return HERO_CLASSES[normalized] || HERO_CLASSES.WARRIOR;
}


/* --- MÓDULO: js/data/cards.js --- */
/**
 * js/data/cards.js
 * Catálogo expandido de 18 cartas únicas de "Cards e Dungeons",
 * incluindo raridades, efeitos de status (Queimadura, Vulnerável, Fraco, Espinhos) e utilitários.
 */

let _instanceCounter = 1;

/**
 * Catálogo completo com 18 cartas únicas.
 */
const CARDS = {
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
const INITIAL_DECK_IDS = [
  'murro', 'murro', 'murro', 'murro',
  'chute', 'chute', 'chute',
  'espada', 'espada',
  'escudo_madeira', 'escudo_madeira', 'escudo_madeira'
];

/**
 * Decks Iniciais por classe de herói.
 */
const HERO_INITIAL_DECKS = {
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
const REWARD_POOL_IDS = [
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
function createCardInstance(cardId, customUid = null) {
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
const UPGRADE_DEFINITIONS = {
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
function upgradeCardInstance(card) {
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
function createInitialDeck(heroClassId = 'warrior') {
  const normalized = (heroClassId || 'warrior').toLowerCase();
  const list = HERO_INITIAL_DECKS[normalized] || INITIAL_DECK_IDS;
  return list.map(id => createCardInstance(id));
}

/**
 * Tabelas de probabilidade de raridade por tipo de encontro pós-combate.
 */
const REWARD_RARITY_WEIGHTS = {
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
function getRandomRewardCards(count = 3, rng = Math.random, encounterType = 'normal') {
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


/* --- MÓDULO: js/data/enemies.js --- */
/**
 * js/data/enemies.js
 * Definições e IA de intenções dos monstros (Comuns, Elites e Chefe) de "Cards e Dungeons".
 */



const ENEMIES = {
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

const ACT_NORMAL_ENEMY_IDS = {
  1: ['goblin_ladino', 'esqueleto_guardiao', 'rato_peste', 'gargula_granito'],
  2: ['feiticeiro_sombrio', 'espectro_lamuriante', 'escavador_obsidiana', 'xama_ossos'],
  3: ['elemental_igneo', 'cultista_draconico']
};

const NORMAL_ENEMY_IDS = [
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

const ELITE_ENEMY_IDS = [
  'minotauro_berserker'
];

const BOSS_ENEMY_ID = 'dragao_tirano';

const ACT_BOSS_IDS = {
  1: 'golem_guardiao',
  2: 'lich_rei',
  3: 'dragao_tirano'
};

const ENEMY_AFFIXES = {
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

const ALL_AFFIX_IDS = Object.keys(ENEMY_AFFIXES);

/**
 * Retorna um afixo aleatório da lista de afixos para Elites.
 * @param {function} [rng=Math.random]
 * @returns {Object}
 */
function getRandomAffix(rng = Math.random) {
  const idx = Math.floor(rng() * ALL_AFFIX_IDS.length);
  return { ...ENEMY_AFFIXES[ALL_AFFIX_IDS[idx]] };
}

/**
 * Retorna o ID do Boss para um determinado Ato.
 * @param {number} act 1, 2 ou 3
 * @returns {string}
 */
function getBossIdForAct(act = 1) {
  return ACT_BOSS_IDS[act] || ACT_BOSS_IDS[3] || BOSS_ENEMY_ID;
}

/**
 * Retorna uma instância do Boss correspondente ao Ato informado.
 * @param {number} [act=1]
 * @returns {Object}
 */
function getBossForAct(act = 1) {
  const bossId = getBossIdForAct(act);
  return createEnemyInstance(bossId);
}

/**
 * Cria uma instância dinâmica do inimigo para combate.
 * @param {string} enemyId
 * @param {Object|string} [options={}] Opções adicionais como affix ({ affix: 'armored' }) ou com afixo sorteado
 * @returns {Object}
 */
function createEnemyInstance(enemyId, options = {}) {
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
function getRandomNormalEnemy(rng = Math.random) {
  const idx = Math.floor(rng() * NORMAL_ENEMY_IDS.length);
  return createEnemyInstance(NORMAL_ENEMY_IDS[idx]);
}

/**
 * Retorna um inimigo de elite aleatório.
 * @param {function} [rng=Math.random]
 * @param {Object} [options={}]
 * @returns {Object}
 */
function getRandomEliteEnemy(rng = Math.random, options = {}) {
  const idx = Math.floor(rng() * ELITE_ENEMY_IDS.length);
  return createEnemyInstance(ELITE_ENEMY_IDS[idx], { withAffix: true, ...options });
}

/**
 * Retorna a instância do Chefe Final.
 * @returns {Object}
 */
function getBossEnemy() {
  return createEnemyInstance(BOSS_ENEMY_ID);
}


/* --- MÓDULO: js/data/events.js --- */
/**
 * js/data/events.js
 * Eventos e lógica dos nós de Santuário / Acampamento e Fogueira em "Cards e Dungeons".
 * Suporta descanso (30% max HP), forja de aprimoramento (+), remoção e duplicação controlada (máx 3 cópias).
 */



const CAMPFIRE_ACTIONS = {
  REST: 'rest',
  UPGRADE_CARD: 'upgrade_card'
};

const SHRINE_ACTIONS = {
  REST: 'rest',
  HEAL: 'heal',
  UPGRADE_CARD: 'upgrade_card',
  REMOVE_CARD: 'remove_card',
  DUPLICATE_CARD: 'duplicate_card',
  ADD_CARD: 'add_card'
};

const CAMPFIRE_OPTIONS = [
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

const SHRINE_OPTIONS = [
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
function executeRest(hero, percentage = 0.30) {
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
function executeHeal(hero, percentage = 0.25) {
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
function executeUpgradeCard(deck, cardUid) {
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
function executeRemoveCard(deck, cardUid) {
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
function executeDuplicateCard(deck, cardUid, maxCopies = 3) {
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
function executeAddCard(deck, cardOrId) {
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
function generateShrineCardOptions(rng = Math.random) {
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


/* --- MÓDULO: js/data/merchant.js --- */
/**
 * js/data/merchant.js
 * Catálogo e Gerenciador de Estoque do Mercador Renegado para "Cards e Dungeons".
 * Suporta compra de cartas graduadas por raridade, relíquias e serviço de purificação/remoção de deck.
 */




const MERCHANT_CONFIG = {
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
function getRandomMerchantQuote(rng = Math.random) {
  const quotes = MERCHANT_CONFIG.QUOTES;
  return quotes[Math.floor(rng() * quotes.length)];
}

/**
 * Retorna uma fala de agradecimento ao realizar uma compra
 * @param {function} [rng=Math.random]
 * @returns {string}
 */
function getRandomPurchaseQuote(rng = Math.random) {
  const quotes = MERCHANT_CONFIG.PURCHASE_QUOTES;
  return quotes[Math.floor(rng() * quotes.length)];
}

/**
 * Retorna o preço em moedas de uma carta com base em sua raridade
 * @param {Object} cardDef
 * @returns {number}
 */
function getCardPrice(cardDef) {
  if (!cardDef) return MERCHANT_CONFIG.DEFAULT_CARD_PRICE;
  return MERCHANT_CONFIG.CARD_PRICES[cardDef.rarity] || MERCHANT_CONFIG.DEFAULT_CARD_PRICE;
}

/**
 * Retorna o preço em moedas de uma relíquia com base em sua raridade
 * @param {Object} relicDef
 * @returns {number}
 */
function getRelicPrice(relicDef) {
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
function generateMerchantInventory({ heroClassId = 'warrior', existingRelicIds = [], rng = Math.random } = {}) {
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


/* --- MÓDULO: js/data/potions.js --- */
/**
 * js/data/potions.js
 * Catálogo e Sistema de Poções Consumíveis para "Cards e Dungeons".
 * Poções são itens táticos de uso imediato em combate sem consumo de energia.
 */



const POTIONS = {
  potion_health: {
    id: 'potion_health',
    name: 'Elixir da Vitalidade',
    color: '#ef4444',
    rarity: 'common',
    description: 'Restaura imediatamente 15 pontos de Vida.',
    price: 45,
    canUseInCombat: true,
    canUseOutOfCombat: true,
    execute: (context) => {
      const hero = context.hero;
      if (!hero) return { success: false, message: 'Herói não encontrado.' };
      const healAmount = Math.min(15, hero.maxHp - hero.hp);
      hero.hp = Math.min(hero.maxHp, hero.hp + 15);
      return {
        success: true,
        type: 'heal',
        amount: healAmount,
        message: `Você bebeu o Elixir da Vitalidade e recuperou ${healAmount} de Vida!`
      };
    }
  },

  potion_energy: {
    id: 'potion_energy',
    name: 'Poção de Mana Pura',
    color: '#3b82f6',
    rarity: 'uncommon',
    description: 'Concede +2 de Energia instantaneamente no turno atual de combate.',
    price: 60,
    canUseInCombat: true,
    canUseOutOfCombat: false,
    execute: (context) => {
      const hero = context.hero;
      if (!hero) return { success: false, message: 'Herói não encontrado.' };
      hero.energy = (hero.energy || 0) + 2;
      return {
        success: true,
        type: 'energy',
        amount: 2,
        message: 'A Poção de Mana Pura restaura +2 de Energia instantânea!'
      };
    }
  },

  potion_poison: {
    id: 'potion_poison',
    name: 'Frasco de Veneno Noturno',
    color: '#a855f7',
    rarity: 'uncommon',
    description: 'Arremessa uma toxina que aplica 6 de Veneno imediato no inimigo.',
    price: 65,
    canUseInCombat: true,
    canUseOutOfCombat: false,
    execute: (context) => {
      const enemy = context.enemy;
      if (!enemy) return { success: false, message: 'Nenhum inimigo presente para alvejar.' };
      applyStatus(enemy, STATUS_TYPES.POISON, 6);
      return {
        success: true,
        type: 'status',
        statusType: STATUS_TYPES.POISON,
        amount: 6,
        message: `O Veneno Noturno atinge ${enemy.name}, aplicando 6 de Veneno!`
      };
    }
  },

  potion_fire: {
    id: 'potion_fire',
    name: 'Óleo Flamejante Alquímico',
    color: '#f97316',
    rarity: 'common',
    description: 'Frasco volátil que incendeia o alvo com 5 de Queimadura imediata.',
    price: 50,
    canUseInCombat: true,
    canUseOutOfCombat: false,
    execute: (context) => {
      const enemy = context.enemy;
      if (!enemy) return { success: false, message: 'Nenhum inimigo presente para alvejar.' };
      applyStatus(enemy, STATUS_TYPES.BURN, 5);
      return {
        success: true,
        type: 'status',
        statusType: STATUS_TYPES.BURN,
        amount: 5,
        message: `Chamas alquímicas envolvem ${enemy.name} (+5 de Queimadura)!`
      };
    }
  },

  potion_stone: {
    id: 'potion_stone',
    name: 'Elixir de Pele de Pedra',
    color: '#94a3b8',
    rarity: 'common',
    description: 'Endurece a pele como granito, concedendo 14 de Armadura imediata.',
    price: 45,
    canUseInCombat: true,
    canUseOutOfCombat: false,
    execute: (context) => {
      const hero = context.hero;
      if (!hero) return { success: false, message: 'Herói não encontrado.' };
      hero.block = (hero.block || 0) + 14;
      return {
        success: true,
        type: 'block',
        amount: 14,
        message: 'O Elixir de Pele de Pedra reveste seu corpo com 14 de Armadura!'
      };
    }
  },

  potion_strength: {
    id: 'potion_strength',
    name: 'Extrato do Berserker',
    color: '#dc2626',
    rarity: 'rare',
    description: 'Estimulante bárbaro: concede +2 de Força para o restante do combate.',
    price: 80,
    canUseInCombat: true,
    canUseOutOfCombat: false,
    execute: (context) => {
      const hero = context.hero;
      if (!hero) return { success: false, message: 'Herói não encontrado.' };
      applyStatus(hero, STATUS_TYPES.STRENGTH, 2);
      return {
        success: true,
        type: 'status',
        statusType: STATUS_TYPES.STRENGTH,
        amount: 2,
        message: 'Fúria ancestral corre em suas veias (+2 de Força permanente no combate)!'
      };
    }
  }
};

const ALL_POTION_IDS = Object.keys(POTIONS);
const MAX_POTION_SLOTS = 3;

/**
 * Retorna uma poção aleatória ponderada para drops ou lojas
 * @param {function} [rng=Math.random]
 * @returns {Object}
 */
function getRandomPotion(rng = Math.random) {
  const ids = ALL_POTION_IDS;
  const chosenId = ids[Math.floor(rng() * ids.length)];
  return { ...POTIONS[chosenId] };
}

/**
 * Cria uma cópia de poção pronta para inserção em slot
 * @param {string} potionId
 * @returns {Object}
 */
function createPotionInstance(potionId) {
  const def = POTIONS[potionId];
  if (!def) throw new Error(`Poção inexistente: ${potionId}`);
  return {
    ...def,
    uid: `pot_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`
  };
}

if (typeof window !== 'undefined') {
  window.POTIONS = POTIONS;
  window.getRandomPotion = getRandomPotion;
  window.createPotionInstance = createPotionInstance;
}


/* --- MÓDULO: js/data/narrativeEvents.js --- */
/**
 * js/data/narrativeEvents.js
 * Catálogo e Motor de Eventos Narrativos Misteriosos para "Cards e Dungeons" (Nó [ ❓ Evento ]).
 * Oferece escolhas morais no estilo RPG de mesa com risco e recompensa táticos.
 */





const NARRATIVE_EVENTS = [
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
function getRandomNarrativeEvent(excludeIds = [], rng = Math.random) {
  const pool = NARRATIVE_EVENTS.filter(e => !excludeIds.includes(e.id));
  if (pool.length === 0) return NARRATIVE_EVENTS[0];
  const idx = Math.floor(rng() * pool.length);
  return pool[idx];
}

if (typeof window !== 'undefined') {
  window.NARRATIVE_EVENTS = NARRATIVE_EVENTS;
  window.getRandomNarrativeEvent = getRandomNarrativeEvent;
}


/* --- MÓDULO: js/data/talents.js --- */
/**
 * js/data/talents.js
 * Sistema de Meta-Progressão Permanente & Árvore de Talentos Ancestrais.
 * Permite coletar Essências de Almas ao derrotar inimigos e chefes para
 * desbloquear bônus passivos permanentes que perduram entre partidas.
 */

const TALENT_STORAGE_KEY = 'cards_dungeons_meta_progression_v1';

// Armazenamento em memória seguro para fallback em Node.js e testes
const _memoryStorage = new Map();

function _getStorageItem(key) {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(key);
  }
  return _memoryStorage.get(key) || null;
}

function _setStorageItem(key, value) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(key, value);
  }
  _memoryStorage.set(key, value);
}

/**
 * Definições dos Talentos da Árvore de Meta-Progressão
 */
const TALENT_DEFINITIONS = {
  vitality: {
    id: 'vitality',
    name: 'Vitalidade Ancestral',
    icon: '❤️',
    maxLevel: 5,
    costs: [10, 20, 35, 55, 80],
    bonusPerLevel: 5,
    unit: 'HP',
    description: 'Aumenta sua Vida Máxima inicial em +5 por nível permanente.',
    getBonusText: (lvl) => `+${lvl * 5} Vida Máxima inicial`
  },
  greed: {
    id: 'greed',
    name: 'Avareza dos Abismos',
    icon: '🪙',
    maxLevel: 5,
    costs: [10, 20, 35, 50, 70],
    bonusPerLevel: 1,
    unit: 'Ouro',
    description: 'Ganha +1 de Ouro adicional após cada combate vencido.',
    getBonusText: (lvl) => `+${lvl * 1} Ouro por vitória em combate`
  },
  wisdom: {
    id: 'wisdom',
    name: 'Mente Expandida',
    icon: '🃏',
    maxLevel: 2,
    costs: [25, 60],
    bonusPerLevel: 1,
    unit: 'Cartas',
    description: 'Compra +1 carta adicional no primeiro turno de cada combate.',
    getBonusText: (lvl) => `+${lvl * 1} carta(s) na mão inicial (Turno 1)`
  },
  ironclad: {
    id: 'ironclad',
    name: 'Bastião de Ferro',
    icon: '🛡️',
    maxLevel: 3,
    costs: [15, 30, 50],
    bonusPerLevel: 3,
    unit: 'Armadura',
    description: 'Inicia cada combate com +3 de Armadura protetora.',
    getBonusText: (lvl) => `+${lvl * 3} de Armadura inicial no combate`
  }
};

/**
 * Retorna o estado atual da meta-progressão salva.
 * @returns {{ souls: number, totalSoulsEarned: number, talents: Object }}
 */
function getMetaProgression() {
  const raw = _getStorageItem(TALENT_STORAGE_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      return {
        souls: typeof parsed.souls === 'number' ? parsed.souls : 0,
        totalSoulsEarned: typeof parsed.totalSoulsEarned === 'number' ? parsed.totalSoulsEarned : (parsed.souls || 0),
        talents: {
          vitality: parsed.talents?.vitality || 0,
          greed: parsed.talents?.greed || 0,
          wisdom: parsed.talents?.wisdom || 0,
          ironclad: parsed.talents?.ironclad || 0,
          ...parsed.talents
        }
      };
    } catch (e) {
      // JSON corrompido, retorna padrão
    }
  }

  return {
    souls: 0,
    totalSoulsEarned: 0,
    talents: {
      vitality: 0,
      greed: 0,
      wisdom: 0,
      ironclad: 0
    }
  };
}

/**
 * Salva os dados de meta-progressão no storage.
 * @param {Object} meta
 */
function saveMetaProgression(meta) {
  _setStorageItem(TALENT_STORAGE_KEY, JSON.stringify(meta));
}

/**
 * Adiciona Essências de Almas ganhas nas batalhas ou ao fim de uma jornada.
 * @param {number} amount
 * @returns {number} Novo total de almas disponíveis
 */
function addSouls(amount) {
  if (amount <= 0) return getMetaProgression().souls;
  const meta = getMetaProgression();
  meta.souls = (meta.souls || 0) + amount;
  meta.totalSoulsEarned = (meta.totalSoulsEarned || 0) + amount;
  saveMetaProgression(meta);
  return meta.souls;
}

/**
 * Aprimora um talento em 1 nível gastando Essências de Almas.
 * @param {string} talentId
 * @returns {{ success: boolean, message: string, newLevel?: number, remainingSouls?: number }}
 */
function upgradeTalent(talentId) {
  const def = TALENT_DEFINITIONS[talentId];
  if (!def) {
    return { success: false, message: `Talento desconhecido: ${talentId}` };
  }

  const meta = getMetaProgression();
  const currentLevel = meta.talents[talentId] || 0;

  if (currentLevel >= def.maxLevel) {
    return { success: false, message: `Talento [${def.name}] já atingiu o nível máximo (${def.maxLevel})!` };
  }

  const cost = def.costs[currentLevel];
  if (meta.souls < cost) {
    return {
      success: false,
      message: `Almas insuficientes! Requer 🔮 ${cost} Essências de Almas (você tem 🔮 ${meta.souls}).`
    };
  }

  meta.souls -= cost;
  meta.talents[talentId] = currentLevel + 1;
  saveMetaProgression(meta);

  return {
    success: true,
    message: `Talento [${def.name}] aprimorado para Nível ${meta.talents[talentId]}!`,
    newLevel: meta.talents[talentId],
    remainingSouls: meta.souls
  };
}

/**
 * Redefine todos os talentos comprados e reembolsa 100% das Essências de Almas investidas.
 * @returns {{ refundedSouls: number, totalSouls: number }}
 */
function resetTalents() {
  const meta = getMetaProgression();
  let refunded = 0;

  for (const [id, def] of Object.entries(TALENT_DEFINITIONS)) {
    const lvl = meta.talents[id] || 0;
    for (let i = 0; i < lvl; i++) {
      refunded += def.costs[i] || 0;
    }
    meta.talents[id] = 0;
  }

  meta.souls = (meta.souls || 0) + refunded;
  saveMetaProgression(meta);

  return {
    refundedSouls: refunded,
    totalSouls: meta.souls
  };
}

/**
 * Calcula todos os bônus numéricos concedidos pelos talentos atuais.
 * @returns {{ maxHpBonus: number, goldBonus: number, initialCardsBonus: number, startingBlockBonus: number }}
 */
function getTalentBonuses() {
  const meta = getMetaProgression();
  const talents = meta.talents;

  const vitLvl = talents.vitality || 0;
  const greedLvl = talents.greed || 0;
  const wisLvl = talents.wisdom || 0;
  const ironLvl = talents.ironclad || 0;

  return {
    maxHpBonus: vitLvl * TALENT_DEFINITIONS.vitality.bonusPerLevel,
    goldBonus: greedLvl * TALENT_DEFINITIONS.greed.bonusPerLevel,
    initialCardsBonus: wisLvl * TALENT_DEFINITIONS.wisdom.bonusPerLevel,
    startingBlockBonus: ironLvl * TALENT_DEFINITIONS.ironclad.bonusPerLevel
  };
}

/**
 * Aplica os bônus da árvore de talentos ao objeto herói no início de uma nova jornada.
 * @param {Object} hero
 */
function applyTalentBonusesToHero(hero) {
  if (!hero) return;
  const bonuses = getTalentBonuses();

  // Bônus de Vida Máxima inicial
  if (bonuses.maxHpBonus > 0) {
    hero.maxHp = (hero.maxHp || 70) + bonuses.maxHpBonus;
    hero.hp = hero.maxHp;
  }

  // Registra bônus passivos para uso no combate
  hero.talentGoldBonus = bonuses.goldBonus || 0;
  hero.talentInitialCards = bonuses.initialCardsBonus || 0;
  hero.talentStartingBlock = bonuses.startingBlockBonus || 0;
  hero.talentBonuses = bonuses;
}

/**
 * Calcula a quantidade de Essências de Almas concedidas pela vitória contra um inimigo.
 * @param {string} enemyType 'normal' | 'elite' | 'boss'
 * @returns {number}
 */
function calculateSoulsReward(enemyType = 'normal') {
  if (enemyType === 'boss') return 15;
  if (enemyType === 'elite') return 5;
  return 2;
}


/* --- MÓDULO: js/engine/MapGenerator.js --- */
/**
 * js/engine/MapGenerator.js
 * Gerador procedural de árvore de caminhos convergentes (grafo acíclico direcionado)
 * para "Cards e Dungeons".
 */



const NODE_TYPES = {
  COMBAT: 'combat',
  ELITE: 'elite',
  SHRINE: 'shrine',
  MERCHANT: 'merchant',
  EVENT: 'event',
  TREASURE: 'treasure',
  BOSS: 'boss'
};

const NODE_STATES = {
  LOCKED: 'locked',
  AVAILABLE: 'available',
  VISITED: 'visited'
};

const ACT_THEMES = {
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
class MapGenerator {
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


/* --- MÓDULO: js/engine/CombatSystem.js --- */
/**
 * js/engine/CombatSystem.js
 * Máquina de estado do combate tático por turnos de "Cards e Dungeons",
 * integrada com modificadores de status (Força, Vulnerável, Fraco, Queimadura, Espinhos)
 * e gatilhos de relíquias passivas.
 */




const COMBAT_STATES = {
  HERO_TURN: 'hero_turn',
  ENEMY_TURN: 'enemy_turn',
  VICTORY: 'victory',
  DEFEAT: 'defeat'
};

class CombatSystem {
  /**
   * @param {Object} params
   * @param {Object} params.hero Referência ao herói da run { hp, maxHp, maxEnergy, block, deck, relics, statuses }
   * @param {Object} params.enemy Instância do inimigo { id, name, hp, maxHp, block, statuses, buffs, getIntention }
   * @param {function} [params.rng=Math.random] Gerador pseudo-aleatório para embaralhar
   * @param {function} [params.onLog] Callback para notificações textuais na UI
   */
  constructor({ hero, enemy, rng = Math.random, onLog = null }) {
    this.hero = hero;
    this.enemy = enemy;
    this.rng = rng;
    this.onLogCallback = onLog;

    // Pilhas de cartas durante o combate
    this.drawPile = [];
    this.hand = [];
    this.discardPile = [];
    this.exhaustPile = [];

    this.turnCount = 1;
    this.state = COMBAT_STATES.HERO_TURN;
    this.isFinished = false;
    this.combatResult = null; // 'victory' | 'defeat'
    this.goldReward = 0;
    this.actionLogs = [];

    // Mecânicas táticas e combos expandidos (Etapa 3)
    this.cardsPlayedThisTurn = 0;
    this.echoNextCard = false;
    this.heroRetainBlock = 0;
    this.flameCloak = 0;
    this.lethalToxinActive = false;

    this._initCombat();
  }

  /**
   * Inicializa o combate, pilhas de cartas, relíquias e primeira intenção do monstro.
   */
  _initCombat() {
    this.hero.block = 0;
    if (this.hero.talentStartingBlock > 0) {
      this.hero.block += this.hero.talentStartingBlock;
    }
    this.hero.energy = this.hero.maxEnergy || 3;

    // Inicializa ou preserva mapas de status
    if (!this.hero.statuses) {
      this.hero.statuses = createDefaultStatusMap();
    } else {
      // Reseta status temporários entre combates, exceto se persistentes
      this.hero.statuses[STATUS_TYPES.VULNERABLE] = 0;
      this.hero.statuses[STATUS_TYPES.WEAK] = 0;
      this.hero.statuses[STATUS_TYPES.BURN] = 0;
      this.hero.statuses[STATUS_TYPES.THORNS] = 0;
      this.hero.statuses[STATUS_TYPES.STRENGTH] = 0;
    }

    if (!this.enemy.statuses) {
      this.enemy.statuses = createDefaultStatusMap();
    }
    this.enemy.block = this.enemy.block || 0;

    // Clona as cartas do baralho do herói para o monte de compra
    this.drawPile = this.hero.deck.map(card => ({ ...card }));
    this.discardPile = [];
    this.exhaustPile = [];
    this.hand = [];

    // Embaralha o monte de compra
    this._shuffle(this.drawPile);

    this._log(`Combate iniciado contra ${this.enemy.name}!`);

    // Efeito de afixo do inimigo: armored (Couraçado)
    if (this.enemy.affix?.id === 'armored') {
      const bonusArmor = this.enemy.affix.bonusArmor || 14;
      this.enemy.block += bonusArmor;
      this._log(`${this.enemy.name} possui o afixo [Couraçado] e inicia o combate com +${bonusArmor} de armadura!`);
    }

    // Dispara gatilhos de relíquias de início de combate (ex: Amuleto da Força, Orbe Ancião, Frasco Peçonhento)
    triggerRelics('onCombatStart', this.hero, {
      combat: this,
      enemy: this.enemy,
      log: (msg) => this._log(msg)
    });

    // Inimigo telegrafa sua intenção para o Turno 1
    this.enemy.currentIntent = this.enemy.getIntention(this.turnCount, this.enemy);
    this._log(`${this.enemy.name} prepara: ${this.enemy.currentIntent.name} (${this.enemy.currentIntent.description})`);

    // Inicia Turno 1 do herói
    this._startHeroTurn(true);
  }

  /**
   * Inicia o turno do herói.
   * @param {boolean} [isFirstTurn=false]
   */
  _startHeroTurn(isFirstTurn = false) {
    if (this.isFinished) return;

    this.state = COMBAT_STATES.HERO_TURN;
    this.cardsPlayedThisTurn = 0;
    this.echoNextCard = false;
    this.flameCloak = 0;

    if (!isFirstTurn) {
      // Preserva armadura protegida por Muralha Viva
      const retained = Math.min(this.hero.block, this.heroRetainBlock || 0);
      this.hero.block = retained;
      this.heroRetainBlock = 0;
      this.hero.energy = this.hero.maxEnergy || 3;
    }

    if (!isFirstTurn) {
      this._log(`--- Turno ${this.turnCount}: Sua vez! ---`);
    }

    // Processa Queimadura no Herói no início do turno
    const { burnDamage } = tickTurnStartStatuses(this.hero, (msg) => this._log(msg));
    if (this.hero.hp <= 0) {
      this._handleDefeat();
      return;
    }

    // Compra 5 cartas (ou mais se houver bônus de Mente Expandida no Turno 1)
    const initialBonus = (isFirstTurn && this.hero.talentInitialCards > 0) ? this.hero.talentInitialCards : 0;
    if (initialBonus > 0) {
      this._log(`O talento [Mente Expandida] concede +${initialBonus} carta(s) no Turno 1!`);
    }
    this.drawCards(5 + initialBonus);
  }

  /**
   * Compra um determinado número de cartas da pilha de compra.
   * Recicla a pilha de descarte caso necessário.
   * @param {number} count
   * @returns {Array<Object>} Cartas compradas
   */
  drawCards(count) {
    const drawn = [];

    for (let i = 0; i < count; i++) {
      if (this.drawPile.length === 0) {
        if (this.discardPile.length === 0) {
          break;
        }
        this._recycleDiscardPile();
      }

      const card = this.drawPile.pop();
      this.hand.push(card);
      drawn.push(card);
    }

    return drawn;
  }

  /**
   * Recicla o monte de descarte para o monte de compra e o embaralha.
   */
  _recycleDiscardPile() {
    this._log(`O monte de compra esgotou! As cartas descartadas foram reembaralhadas.`);
    this.drawPile = [...this.discardPile];
    this.discardPile = [];
    this._shuffle(this.drawPile);
  }

  /**
   * Joga uma carta da mão do herói contra o inimigo.
   * @param {string} cardUid UID da carta na mão
   * @returns {Object} Resumo da ação executada
   */
  /**
   * Verifica transição de fase de Chefes Épicos ao atingir 50% de HP.
   */
  _checkBossPhaseTransition() {
    if (this.enemy.type === 'boss' && !this.enemy.phase2Triggered && this.enemy.hp > 0 && this.enemy.hp <= Math.floor(this.enemy.maxHp * 0.5)) {
      this.enemy.phase2Triggered = true;
      let phaseMessage = `⚡ ATENÇÃO: ${this.enemy.name} atinge 50% de Vida e entra na FASE 2!`;
      if (this.enemy.id === 'golem_guardiao') {
        phaseMessage = `⚡ O Núcleo do Golem Guardião Rachou! Ele entra na FASE 2: [Núcleo Sobreaquecido] (+4 Força e ataques ígneos)!`;
        applyStatus(this.enemy, STATUS_TYPES.STRENGTH, 4);
      } else if (this.enemy.id === 'lich_rei') {
        phaseMessage = `⚡ O Lich Rei assume a FASE 2: [Forma Espectral dos Condenados]! Dreno de vida ampliado e maldições debilitantes (+3 Força)!`;
        applyStatus(this.enemy, STATUS_TYPES.STRENGTH, 3);
      } else if (this.enemy.id === 'dragao_tirano') {
        phaseMessage = `⚡ RUGIDO DO APOCALIPSE! O Dragão Tirano entra na FASE 2: [Ira Vulcânica Incontrolável] (+3 Força permanente adicional)!`;
        applyStatus(this.enemy, STATUS_TYPES.STRENGTH, 3);
      }
      this._log(phaseMessage);
      // Atualiza a intenção telegrafada para a nova fase
      this.enemy.currentIntent = this.enemy.getIntention(this.turnCount, this.enemy);
      this._log(`${this.enemy.name} prepara nova ação: ${this.enemy.currentIntent.name} (${this.enemy.currentIntent.description})`);
    }
  }

  /**
   * Executa a resolução lógica dos efeitos de uma carta.
   * @param {Object} card Definição da carta
   * @param {Object} actionResult Objeto acumulador de resultados da jogada
   */
  _resolveCardEffect(card, actionResult) {
    if (this.isFinished) return;

    // 1. Efeitos de Armadura / Escudo
    if (card.block > 0) {
      this.hero.block += card.block;
      actionResult.blockGained = (actionResult.blockGained || 0) + card.block;
      this._log(`Você ergueu guarda e ganhou ${card.block} de armadura.`);
    }

    // 2. Retenção de Armadura entre turnos (Muralha Viva)
    if (card.retainBlock > 0) {
      this.heroRetainBlock = Math.max(this.heroRetainBlock || 0, card.retainBlock);
      this._log(`Postura inabalável: você reterá até ${this.heroRetainBlock} de armadura para o próximo turno.`);
    }

    // 3. Manto de Chamas (Mago)
    if (card.flameCloak > 0) {
      this.flameCloak = (this.flameCloak || 0) + card.flameCloak;
      this._log(`Manto de Chamas ativado (+${card.flameCloak} de Queimadura reativa ao sofrer ataques)!`);
    }

    // 4. Quebra de Armadura do Inimigo (ex: Rompe-Guarda ou Chute)
    if (card.armorBreakAll && this.enemy.block > 0) {
      const broken = this.enemy.block;
      this.enemy.block = 0;
      actionResult.armorBroken = (actionResult.armorBroken || 0) + broken;
      this._log(`O golpe quebrou totalmente a armadura de ${this.enemy.name} (${broken} pontos destruídos)!`);
    } else if (card.armorBreak > 0 && this.enemy.block > 0) {
      const broken = Math.min(this.enemy.block, card.armorBreak);
      this.enemy.block -= broken;
      actionResult.armorBroken = (actionResult.armorBroken || 0) + broken;
      this._log(`A armadura de ${this.enemy.name} foi quebrada em ${broken} pontos!`);
    }

    // 5. Cálculo do Dano Base Dinâmico
    let baseDamage = card.damage || 0;

    // Golpe de Escudo: causa dano igual à armadura atual (+ bônus)
    if (card.damageEqualsBlock) {
      baseDamage = this.hero.block + (card.blockBonusDamage || 0);
      this._log(`Golpe de Escudo converteu ${this.hero.block} de armadura em ataque (Dano base: ${baseDamage})!`);
    }

    // Golpe Frenético: dano bônus com HP < 50%
    if (card.lowHpBonusDamage && this.hero.hp < (this.hero.maxHp * 0.5)) {
      baseDamage += card.lowHpBonusDamage;
      this._log(`Ataque desesperado! +${card.lowHpBonusDamage} de dano adicional!`);
    }

    // Execução Sombria: dano cresce com cartas jogadas no turno
    if (card.damagePerCardPlayed) {
      const comboBonus = this.cardsPlayedThisTurn * card.damagePerCardPlayed;
      baseDamage += comboBonus;
      this._log(`Execução Sombria: +${comboBonus} de dano bônus (${this.cardsPlayedThisTurn} cartas jogadas anteriormente)!`);
    }

    // Incinerar: consome queimadura do inimigo e causa dano multiplicado
    if (card.consumeBurnMultiplier) {
      const curBurn = this.enemy.statuses?.[STATUS_TYPES.BURN] || 0;
      if (curBurn > 0) {
        const burnBonus = curBurn * card.consumeBurnMultiplier;
        this.enemy.statuses[STATUS_TYPES.BURN] = 0;
        baseDamage += burnBonus;
        this._log(`Incinerar consumiu ${curBurn} de Queimadura causando +${burnBonus} de dano bônus massivo!`);
      }
    }

    // Aplicação do Dano Físico Modificado
    if (baseDamage > 0) {
      const hits = card.hits || 1;
      let totalDmg = 0;

      for (let h = 0; h < hits; h++) {
        if (this.enemy.hp <= 0) break;

        const hitDamage = calculateModifiedDamage(baseDamage, this.hero, this.enemy);
        const absorbed = Math.min(this.enemy.block, hitDamage);
        this.enemy.block -= absorbed;
        const pierceDmg = hitDamage - absorbed;
        this.enemy.hp = Math.max(0, this.enemy.hp - pierceDmg);
        totalDmg += hitDamage;

        if (absorbed > 0 && pierceDmg > 0) {
          this._log(`Ataque causou ${absorbed} dano ao escudo e ${pierceDmg} de dano direto a ${this.enemy.name}.`);
        } else if (absorbed > 0) {
          this._log(`O escudo de ${this.enemy.name} absorveu totalmente os ${absorbed} de dano.`);
        } else {
          this._log(`Ataque atingiu ${this.enemy.name} diretamente causando ${pierceDmg} de dano!`);
        }

        this._checkBossPhaseTransition();

        // Afixo do inimigo: thorns (Espinhoso)
        if (pierceDmg > 0 && this.enemy.affix?.id === 'thorns') {
          const retaliation = this.enemy.affix.retaliation || 3;
          this.hero.hp = Math.max(0, this.hero.hp - retaliation);
          this._log(`O afixo [Espinhoso] de ${this.enemy.name} retaliou ${retaliation} de dano direto em você!`);
          if (this.hero.hp <= 0) {
            this._handleDefeat();
            return;
          }
        }
      }

      actionResult.damageDealt = (actionResult.damageDealt || 0) + totalDmg;
    }

    // 6. Redução do Ataque Telegrafado do Monstro (Lança de Gelo)
    if (card.reduceIntentDamage > 0 && this.enemy.currentIntent && this.enemy.currentIntent.damage > 0) {
      const red = Math.min(this.enemy.currentIntent.damage, card.reduceIntentDamage);
      this.enemy.currentIntent.damage -= red;
      this._log(`Golpe congelante reduziu o próximo ataque de ${this.enemy.name} em ${red} (Novo dano: ${this.enemy.currentIntent.damage})!`);
    }

    // 7. Mecânicas de Veneno Especiais (Catalisador Tóxico, Adaga Contaminada, Toxina Letal)
    if (card.doublePoison) {
      const curPoison = this.enemy.statuses?.[STATUS_TYPES.POISON] || 0;
      if (curPoison > 0) {
        applyStatus(this.enemy, STATUS_TYPES.POISON, curPoison);
        this._log(`Catalisador Tóxico dobrou o veneno em ${this.enemy.name} para ${this.enemy.statuses[STATUS_TYPES.POISON]}!`);
      }
      if (card.bonusPoison > 0) {
        applyStatus(this.enemy, STATUS_TYPES.POISON, card.bonusPoison);
        this._log(`+${card.bonusPoison} de Veneno adicional aplicado!`);
      }
    }
    if (card.energyIfPoison) {
      if ((this.enemy.statuses?.[STATUS_TYPES.POISON] || 0) > 0) {
        this.hero.energy += card.energyIfPoison;
        actionResult.energyGained = (actionResult.energyGained || 0) + card.energyIfPoison;
        this._log(`Golpe em ferida envenenada concedeu +${card.energyIfPoison} de Energia!`);
      }
    }
    if (card.lethalToxinPower) {
      this.lethalToxinActive = true;
      this._log(`Toxina Letal ativada: todo dano de veneno corroerá armadura de ${this.enemy.name}!`);
    }

    // 8. Aplicação de Status no Inimigo
    if (card.poison > 0) {
      applyStatus(this.enemy, STATUS_TYPES.POISON, card.poison);
      actionResult.statusesApplied.poison = (actionResult.statusesApplied.poison || 0) + card.poison;
      this._log(`Você envenenou ${this.enemy.name} com ${card.poison} toxinas letais!`);
    }
    if (card.burn > 0) {
      applyStatus(this.enemy, STATUS_TYPES.BURN, card.burn);
      actionResult.statusesApplied.burn = (actionResult.statusesApplied.burn || 0) + card.burn;
      this._log(`Você aplicou ${card.burn} de Queimadura em ${this.enemy.name}!`);
    }
    if (card.vulnerable > 0) {
      applyStatus(this.enemy, STATUS_TYPES.VULNERABLE, card.vulnerable);
      actionResult.statusesApplied.vulnerable = (actionResult.statusesApplied.vulnerable || 0) + card.vulnerable;
      this._log(`Você deixou ${this.enemy.name} Vulnerável por ${card.vulnerable} turnos (+50% de dano recebido)!`);
    }
    if (card.weak > 0) {
      applyStatus(this.enemy, STATUS_TYPES.WEAK, card.weak);
      actionResult.statusesApplied.weak = (actionResult.statusesApplied.weak || 0) + card.weak;
      this._log(`Você enfraqueceu ${this.enemy.name} por ${card.weak} turnos (-25% de dano causado)!`);
    }

    // 9. Status no Herói (Espinhos e Força)
    if (card.thorns > 0) {
      applyStatus(this.hero, STATUS_TYPES.THORNS, card.thorns);
      actionResult.statusesApplied.thorns = (actionResult.statusesApplied.thorns || 0) + card.thorns;
      this._log(`Você assumiu postura de espinhos (+${card.thorns} de Retaliação)!`);
    }
    if (card.buffStrength > 0) {
      applyStatus(this.hero, STATUS_TYPES.STRENGTH, card.buffStrength);
      actionResult.statusesApplied.strength = (actionResult.statusesApplied.strength || 0) + card.buffStrength;
      this._log(`Você fortaleceu seus músculos e ganhou +${card.buffStrength} de Força!`);
    }

    // 10. Compra de Cartas e Compra Condicional
    if (card.drawCards > 0) {
      const drawn = this.drawCards(card.drawCards);
      actionResult.cardsDrawn = (actionResult.cardsDrawn || 0) + drawn.length;
      this._log(`Você comprou ${drawn.length} carta(s) adicional(is)!`);
    }
    if (card.conditionalDraw > 0 && this.hero.energy >= 1) {
      const drawn = this.drawCards(card.conditionalDraw);
      actionResult.cardsDrawn = (actionResult.cardsDrawn || 0) + drawn.length;
      this._log(`Energia remanescente ativou ressonância: +${drawn.length} carta comprada!`);
    }

    // 11. Cura de Vida
    if (card.heal > 0) {
      const prevHp = this.hero.hp;
      this.hero.hp = Math.min(this.hero.maxHp, this.hero.hp + card.heal);
      const healed = this.hero.hp - prevHp;
      actionResult.healed = (actionResult.healed || 0) + healed;
      this._log(`Você recuperou ${healed} pontos de vida!`);
    }

    // 12. Ganho de Energia e Custo de Vida
    if (card.energyGain > 0) {
      this.hero.energy += card.energyGain;
      actionResult.energyGained = (actionResult.energyGained || 0) + card.energyGain;
      this._log(`Você canalizou energia e ganhou +${card.energyGain} de Energia!`);
    }
    if (card.hpCost > 0) {
      this.hero.hp = Math.max(0, this.hero.hp - card.hpCost);
      actionResult.hpLost = (actionResult.hpLost || 0) + card.hpCost;
      this._log(`Você sacrificou ${card.hpCost} de Vida.`);
      if (this.hero.hp <= 0) {
        this._handleDefeat();
        return;
      }
    }

    // 13. Eco Temporal
    if (card.doubleNextCard) {
      this.echoNextCard = true;
      this._log(`Eco Temporal preparado! A próxima carta jogada neste turno será duplicada sem custo!`);
    }
  }

  /**
   * Joga uma carta da mão do herói contra o inimigo.
   * @param {string} cardUid UID da carta na mão
   * @returns {Object} Resumo da ação executada
   */
  playCard(cardUid) {
    if (this.isFinished) {
      throw new Error('O combate já terminou.');
    }

    if (this.state !== COMBAT_STATES.HERO_TURN) {
      throw new Error('Não é o turno do jogador.');
    }

    const cardIndex = this.hand.findIndex(c => c.uid === cardUid);
    if (cardIndex === -1) {
      throw new Error(`Carta não encontrada na mão: "${cardUid}"`);
    }

    const card = this.hand[cardIndex];

    if (this.hero.energy < card.cost) {
      throw new Error(`Energia insuficiente para jogar "${card.name}". Custo: ${card.cost}, Atual: ${this.hero.energy}`);
    }

    // 1. Gasta energia
    this.hero.energy -= card.cost;

    // 2. Remove da mão
    this.hand.splice(cardIndex, 1);

    const actionResult = {
      card,
      damageDealt: 0,
      blockGained: 0,
      armorBroken: 0,
      healed: 0,
      energyGained: 0,
      hpLost: 0,
      statusesApplied: {},
      cardsDrawn: 0,
      exhausted: !!card.exhaust
    };

    // Eco Temporal: duplica a próxima carta
    const shouldEcho = this.echoNextCard && !card.doubleNextCard;
    if (shouldEcho) {
      this.echoNextCard = false;
    }

    this._resolveCardEffect(card, actionResult);

    if (shouldEcho && !this.isFinished && this.enemy.hp > 0) {
      this._log(`🌀 [Eco Temporal] A carta "${card.name}" ecoa uma segunda vez sem custo!`);
      this._resolveCardEffect(card, actionResult);
    }

    // Registra que mais uma carta foi jogada neste turno
    this.cardsPlayedThisTurn++;

    // Descarte ou Exaustão
    if (card.exhaust) {
      this.exhaustPile.push(card);
      this._log(`A carta "${card.name}" foi exausta e removida deste combate.`);
    } else {
      this.discardPile.push(card);
    }

    // Verificar se inimigo foi derrotado
    if (this.enemy.hp <= 0) {
      this._handleVictory();
    }

    return actionResult;
  }

  /**
   * Consome uma poção do inventário do herói durante o combate.
   * Não consome energia do jogador.
   * @param {number} slotIndex Índice do slot (0, 1 ou 2)
   * @returns {Object} Resultado da ação
   */
  usePotion(slotIndex) {
    if (this.isFinished) {
      throw new Error('Não é possível usar poções com o combate finalizado.');
    }
    if (this.state !== COMBAT_STATES.HERO_TURN) {
      throw new Error('Você só pode usar poções durante o seu turno.');
    }
    if (!this.hero.potions || !this.hero.potions[slotIndex]) {
      throw new Error(`Slot de poção ${slotIndex} está vazio.`);
    }

    const potion = this.hero.potions[slotIndex];
    if (potion.canUseInCombat === false) {
      throw new Error(`A poção "${potion.name}" não pode ser usada em combate.`);
    }

    const result = potion.execute({
      hero: this.hero,
      enemy: this.enemy,
      combat: this
    });

    if (result.success) {
      this.hero.potions[slotIndex] = null;
      this._log(result.message);

      // Se a poção derrotou o inimigo
      if (this.enemy.hp <= 0) {
        this.enemy.hp = 0;
        this._handleVictory();
      }
    }

    return {
      ...result,
      potion
    };
  }

  /**
   * Finaliza o turno do herói e executa o turno do inimigo.
   */
  endTurn() {
    if (this.isFinished) return;
    if (this.state !== COMBAT_STATES.HERO_TURN) return;

    // Descarta cartas restantes da mão
    while (this.hand.length > 0) {
      this.discardPile.push(this.hand.pop());
    }

    // Decrementa status do herói no fim do seu turno (Vulnerável, Fraco e Veneno)
    tickTurnEndStatuses(this.hero, (msg) => this._log(msg));

    if (this.hero.hp <= 0) {
      this._handleDefeat();
      return;
    }

    // Reseta espinhos temporários concedidos por cartas no turno
    if (this.hero.statuses[STATUS_TYPES.THORNS] > 0) {
      this.hero.statuses[STATUS_TYPES.THORNS] = 0;
    }

    this._executeEnemyTurn();
  }

  /**
   * Executa a ação telegrafada do inimigo.
   */
  _executeEnemyTurn() {
    this.state = COMBAT_STATES.ENEMY_TURN;
    this._log(`--- Turno de ${this.enemy.name} ---`);

    // 1. Processa Queimadura no Inimigo no início de seu turno
    tickTurnStartStatuses(this.enemy, (msg) => this._log(msg));
    if (this.enemy.hp <= 0) {
      this._handleVictory();
      return;
    }

    // Inimigo reseta armadura no início do seu turno
    this.enemy.block = 0;

    const intent = this.enemy.currentIntent;
    if (intent) {
      // 2. Ganho de Armadura
      if (intent.block > 0) {
        this.enemy.block += intent.block;
        this._log(`${this.enemy.name} ganhou ${intent.block} de armadura.`);
      }

      // 3. Quebra de armadura do herói
      if (intent.armorBreak > 0 && this.hero.block > 0) {
        const broken = Math.min(this.hero.block, intent.armorBreak);
        this.hero.block -= broken;
        this._log(`${this.enemy.name} quebrou ${broken} da sua armadura!`);
      }

      // 4. Ataque
      if (intent.damage > 0) {
        const hits = intent.hits || 1;

        // Dispara retaliação de relíquias (ex: Escudo de Espinhos), espinhos temporários ou Manto de Chamas
        if (this.hero.block > 0 || (this.hero.statuses?.[STATUS_TYPES.THORNS] || 0) > 0 || this.flameCloak > 0) {
          triggerRelics('onTakeAttack', this.hero, {
            combat: this,
            attacker: this.enemy,
            log: (msg) => this._log(msg)
          });

          // Espinhos de cartas
          const heroThorns = this.hero.statuses?.[STATUS_TYPES.THORNS] || 0;
          if (heroThorns > 0) {
            this.enemy.hp = Math.max(0, this.enemy.hp - heroThorns);
            this._log(`Seus espinhos retaliaram causando ${heroThorns} de dano a ${this.enemy.name}!`);
          }

          // Manto de Chamas (retaliação ígnea)
          if (this.flameCloak > 0) {
            applyStatus(this.enemy, STATUS_TYPES.BURN, this.flameCloak);
            this._log(`O Manto de Chamas incendiou ${this.enemy.name} com ${this.flameCloak} de Queimadura!`);
          }

          this._checkBossPhaseTransition();

          if (this.enemy.hp <= 0) {
            this._handleVictory();
            return;
          }
        }

        // Executa os hits do ataque do inimigo
        for (let h = 0; h < hits; h++) {
          if (this.hero.hp <= 0) break;

          const rawDamage = calculateModifiedDamage(intent.damage, this.enemy, this.hero);
          const absorbed = Math.min(this.hero.block, rawDamage);
          this.hero.block -= absorbed;
          const pierce = rawDamage - absorbed;
          this.hero.hp = Math.max(0, this.hero.hp - pierce);

          if (absorbed > 0 && pierce > 0) {
            this._log(`${this.enemy.name} atacou! Seu escudo absorveu ${absorbed}, mas você sofreu ${pierce} de dano!`);
          } else if (absorbed > 0) {
            this._log(`Seu escudo absorveu completamente os ${absorbed} de dano do golpe de ${this.enemy.name}!`);
          } else {
            this._log(`${this.enemy.name} desferiu um golpe devastador causando ${pierce} de dano em você!`);
          }

          // Afixo do inimigo: vampiric (Vampírico - cura 50% do dano não bloqueado causado à vida do herói)
          if (pierce > 0 && this.enemy.affix?.id === 'vampiric') {
            const ratio = this.enemy.affix.healRatio || 0.5;
            const healAmount = Math.max(1, Math.floor(pierce * ratio));
            const prevHp = this.enemy.hp;
            this.enemy.hp = Math.min(this.enemy.maxHp, this.enemy.hp + healAmount);
            const actualHealed = this.enemy.hp - prevHp;
            if (actualHealed > 0) {
              this._log(`${this.enemy.name} drenou seu sangue com o afixo [Vampírico] e recuperou ${actualHealed} HP!`);
            }
          }
        }

        // Dreno de vida nativo da intenção (ex: Lich Rei - Drenar Alma)
        if (intent.lifeSteal > 0) {
          const prevHp = this.enemy.hp;
          this.enemy.hp = Math.min(this.enemy.maxHp, this.enemy.hp + intent.lifeSteal);
          const actualHealed = this.enemy.hp - prevHp;
          if (actualHealed > 0) {
            this._log(`${this.enemy.name} drenou sua essência vital e recuperou ${actualHealed} HP!`);
          }
        }
      }

      // 5. Aplicação de Buffs (Força)
      if (intent.buff && intent.buff.strength) {
        applyStatus(this.enemy, STATUS_TYPES.STRENGTH, intent.buff.strength);
        this._log(`${this.enemy.name} fortaleceu seu poder! (+${intent.buff.strength} Força)`);
      }

      // 6. Aplicação de Debuffs no Herói
      if (intent.targetStatus) {
        if (intent.targetStatus[STATUS_TYPES.WEAK]) {
          applyStatus(this.hero, STATUS_TYPES.WEAK, intent.targetStatus[STATUS_TYPES.WEAK]);
          this._log(`${this.enemy.name} aplicou ${intent.targetStatus[STATUS_TYPES.WEAK]} de Fraco em você!`);
        }
        if (intent.targetStatus[STATUS_TYPES.BURN]) {
          applyStatus(this.hero, STATUS_TYPES.BURN, intent.targetStatus[STATUS_TYPES.BURN]);
          this._log(`${this.enemy.name} incendiou você com ${intent.targetStatus[STATUS_TYPES.BURN]} de Queimadura!`);
        }
        if (intent.targetStatus[STATUS_TYPES.VULNERABLE]) {
          applyStatus(this.hero, STATUS_TYPES.VULNERABLE, intent.targetStatus[STATUS_TYPES.VULNERABLE]);
          this._log(`${this.enemy.name} deixou você Vulnerável!`);
        }
        if (intent.targetStatus[STATUS_TYPES.POISON]) {
          applyStatus(this.hero, STATUS_TYPES.POISON, intent.targetStatus[STATUS_TYPES.POISON]);
          this._log(`${this.enemy.name} infectou você com ${intent.targetStatus[STATUS_TYPES.POISON]} de Veneno!`);
        }
      }
    }

    // Verificar se o herói tombou
    if (this.hero.hp <= 0) {
      this._handleDefeat();
      return;
    }

    // Decrementa status do inimigo no fim do seu turno (Vulnerável, Fraco e Veneno)
    const { poisonDamage } = tickTurnEndStatuses(this.enemy, (msg) => this._log(msg));

    // Efeito da Toxina Letal: dano de veneno corrói armadura
    if (poisonDamage > 0 && this.lethalToxinActive && this.enemy.block > 0) {
      const corroded = Math.min(this.enemy.block, 3);
      this.enemy.block -= corroded;
      this._log(`A Toxina Letal corroeu ${corroded} de armadura de ${this.enemy.name}!`);
    }

    this._checkBossPhaseTransition();

    if (this.enemy.hp <= 0) {
      this._handleVictory();
      return;
    }

    // Afixo do inimigo: enraged (Frenético - a cada 2 turnos ganha +1 de Força permanente)
    if (this.enemy.affix?.id === 'enraged') {
      const interval = this.enemy.affix.interval || 2;
      if (this.turnCount % interval === 0) {
        const gain = this.enemy.affix.strengthGain || 1;
        applyStatus(this.enemy, STATUS_TYPES.STRENGTH, gain);
        this._log(`${this.enemy.name} enfurece com o afixo [Frenético] e ganha +${gain} de Força permanente!`);
      }
    }

    // Prepara o próximo turno
    this.turnCount++;
    this.enemy.currentIntent = this.enemy.getIntention(this.turnCount, this.enemy);
    this._log(`${this.enemy.name} prepara: ${this.enemy.currentIntent.name} (${this.enemy.currentIntent.description})`);

    // Inicia o próximo turno do herói
    this._startHeroTurn();
  }

  _handleVictory() {
    this.isFinished = true;
    this.state = COMBAT_STATES.VICTORY;
    this.combatResult = 'victory';

    // Cálculo da recompensa de ouro por tipo de monstro:
    // Boss: 75–100 ouro
    // Elite: 35–50 ouro
    // Inimigo normal: 15–25 ouro
    const enemyType = this.enemy.type || 'normal';
    if (enemyType === 'boss') {
      this.goldReward = 75 + Math.floor(this.rng() * 26);
    } else if (enemyType === 'elite') {
      this.goldReward = 35 + Math.floor(this.rng() * 16);
    } else {
      this.goldReward = 15 + Math.floor(this.rng() * 11);
    }

    if (this.hero.talentGoldBonus > 0) {
      this.goldReward += this.hero.talentGoldBonus;
      this._log(`O talento [Avareza dos Abismos] concedeu +${this.hero.talentGoldBonus} de ouro bônus!`);
    }

    this._log(`Vitória gloriosa! Você derrotou ${this.enemy.name}! (+${this.goldReward} ouro)`);

    // Dispara gatilho de fim de combate das relíquias (ex: Cálice de Sangue cura 5 HP)
    triggerRelics('onCombatEnd', this.hero, {
      result: 'victory',
      combat: this,
      log: (msg) => this._log(msg)
    });
  }

  _handleDefeat() {
    this.isFinished = true;
    this.state = COMBAT_STATES.DEFEAT;
    this.combatResult = 'defeat';
    this._log(`Você foi derrotado em combate por ${this.enemy.name}...`);

    triggerRelics('onCombatEnd', this.hero, {
      result: 'defeat',
      combat: this,
      log: (msg) => this._log(msg)
    });
  }

  _shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(this.rng() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  _log(message) {
    this.actionLogs.push({
      turn: this.turnCount,
      state: this.state,
      message,
      timestamp: Date.now()
    });

    if (typeof this.onLogCallback === 'function') {
      this.onLogCallback(message);
    }
  }

  /**
   * Retorna um instantâneo do estado completo do combate para renderização na UI.
   * @returns {Object}
   */
  getStateSnapshot() {
    return {
      state: this.state,
      isFinished: this.isFinished,
      combatResult: this.combatResult,
      goldReward: this.goldReward,
      turnCount: this.turnCount,
      hero: {
        hp: this.hero.hp,
        maxHp: this.hero.maxHp,
        block: this.hero.block,
        energy: this.hero.energy,
        maxEnergy: this.hero.maxEnergy || 3,
        statuses: { ...(this.hero.statuses || {}) },
        relics: (this.hero.relics || []).map(r => ({ id: r.id, name: r.name, icon: r.icon }))
      },
      enemy: {
        id: this.enemy.id,
        name: this.enemy.name,
        type: this.enemy.type,
        affix: this.enemy.affix ? { ...this.enemy.affix } : null,
        hp: this.enemy.hp,
        maxHp: this.enemy.maxHp,
        block: this.enemy.block,
        statuses: { ...(this.enemy.statuses || {}) },
        buffs: { ...(this.enemy.buffs || {}) },
        currentIntent: this.enemy.currentIntent ? { ...this.enemy.currentIntent } : null
      },
      hand: [...this.hand],
      drawPileCount: this.drawPile.length,
      discardPileCount: this.discardPile.length,
      exhaustPileCount: this.exhaustPile.length,
      recentLogs: this.actionLogs.slice(-6)
    };
  }
}


/* --- MÓDULO: js/engine/GameState.js --- */
/**
 * js/engine/GameState.js
 * Gerenciador de estado global da sessão/run de "Cards e Dungeons",
 * incluindo persistência (save/load), relíquias passivas e nós de Elite.
 */













const GAME_SCREENS = {
  TITLE: 'title',
  MAP: 'map',
  COMBAT: 'combat',
  COMBAT_REWARD: 'combat_reward',
  SHRINE: 'shrine',
  MERCHANT: 'merchant',
  EVENT: 'event',
  TREASURE: 'treasure',
  ACT_TRANSITION: 'act_transition',
  VICTORY: 'victory',
  DEFEAT: 'defeat'
};

// Armazenamento em memória seguro para fallback em ambientes como Node.js
const _memoryStorage = new Map();

function _getStorageItem(key) {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(key);
  }
  return _memoryStorage.get(key) || null;
}

function _setStorageItem(key, value) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(key, value);
  }
  _memoryStorage.set(key, value);
}

function _removeStorageItem(key) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(key);
  }
  _memoryStorage.delete(key);
}

class GameState {
  constructor(options = {}) {
    this.rng = options.rng || Math.random;
    this.screen = GAME_SCREENS.TITLE;

    this.currentAct = 1;
    this.totalActs = 3;
    this.elapsedTime = 0; // Tempo em segundos decorrido na run

    this.hero = {
      name: 'Guerreiro Rúnico',
      classId: 'warrior',
      hp: 70,
      maxHp: 70,
      energy: 3,
      maxEnergy: 3,
      block: 0,
      gold: 50,
      deck: [],
      reserveDeck: [],
      maxDeckSize: 15,
      relics: []
    };

    this.map = null;
    this.currentNode = null;
    this.currentCombat = null;
    this.combatRewardCards = [];
    this.combatRewardPotion = null;
    this.combatRewardGold = 0;
    this.combatRewardSouls = 0;
    this.runSoulsEarned = 0;
    this.shrineCardOptions = [];
    this.eliteRewardRelic = null;
    this.runHistory = [];
  }

  /**
   * Inicia uma nova Jornada (Run) com a classe de herói escolhida.
   * @param {string} [heroClassId='warrior'] 'warrior' | 'rogue' | 'mage'
   * @param {Object} [options={}] Opções de configuração da campanha (act, totalFloors)
   */
  startNewRun(heroClassId = DEFAULT_HERO_CLASS_ID, options = {}) {
    const heroClass = getHeroClass(heroClassId);

    this.currentAct = options.act || options.startAct || 1;
    this.totalActs = options.totalActs || 3;
    this.elapsedTime = 0;

    this.hero = {
      name: heroClass.name,
      classId: heroClass.id,
      heroClass: heroClass.id,
      subtitle: heroClass.subtitle,
      icon: heroClass.icon,
      sprite: heroClass.sprite,
      hp: heroClass.maxHp,
      maxHp: heroClass.maxHp,
      energy: heroClass.energy,
      maxEnergy: heroClass.energy,
      block: 0,
      gold: 50,
      deck: createInitialDeck(heroClass.id),
      reserveDeck: [],
      maxDeckSize: 15,
      relics: [],
      potions: [createPotionInstance('potion_health'), null, null]
    };

    // Equipa a relíquia inicial nativa da classe
    if (heroClass.startingRelicId) {
      addRelicToHero(this.hero, heroClass.startingRelicId);
    }

    // Aplica bônus permanentes da Árvore de Talentos
    applyTalentBonusesToHero(this.hero);

    const mapGen = new MapGenerator({
      act: this.currentAct,
      totalFloors: options.totalFloors || 15,
      rng: this.rng
    });
    this.map = mapGen.generateMap();
    this.currentNode = null;
    this.currentCombat = null;
    this.combatRewardCards = [];
    this.combatRewardPotion = null;
    this.combatRewardGold = 0;
    this.combatRewardSouls = 0;
    this.runSoulsEarned = 0;
    this.shrineCardOptions = [];
    this.eliteRewardRelic = null;
    this.merchantInventories = {};
    this.currentMerchantInventory = null;
    this.narrativeEventInstances = {};
    this.currentNarrativeEvent = null;
    this.runHistory = [];

    this.screen = GAME_SCREENS.MAP;
    return this.getState();
  }

  /**
   * Navega para um nó disponível no mapa.
   * @param {string} nodeId
   */
  selectNode(nodeId) {
    if (this.screen !== GAME_SCREENS.MAP) {
      throw new Error(`Não é possível selecionar nó fora da tela de mapa. Tela atual: ${this.screen}`);
    }

    const node = this.map.nodes[nodeId];
    if (!node) {
      throw new Error(`Nó inválido: ${nodeId}`);
    }

    if (node.state !== NODE_STATES.AVAILABLE && node.state !== NODE_STATES.VISITED) {
      throw new Error(`O nó ${nodeId} não está disponível para visita.`);
    }

    MapGenerator.advanceToNode(this.map, nodeId);
    this.currentNode = node;
    this.eliteRewardRelic = null;
    this.combatRewardPotion = null;
    this.combatRewardGold = 0;

    if (node.type === NODE_TYPES.COMBAT || node.type === NODE_TYPES.ELITE || node.type === NODE_TYPES.BOSS) {
      const enemy = createEnemyInstance(node.enemyId, { affix: node.affix });
      this.currentCombat = new CombatSystem({
        hero: this.hero,
        enemy,
        rng: this.rng
      });
      this.screen = GAME_SCREENS.COMBAT;
    } else if (node.type === NODE_TYPES.SHRINE) {
      this.shrineCardOptions = generateShrineCardOptions(this.rng);
      this.screen = GAME_SCREENS.SHRINE;
    } else if (node.type === NODE_TYPES.MERCHANT) {
      if (!this.merchantInventories) this.merchantInventories = {};
      if (!this.merchantInventories[nodeId]) {
        const existingRelicIds = (this.hero.relics || []).map(r => r.id);
        this.merchantInventories[nodeId] = generateMerchantInventory({
          heroClassId: this.hero.classId,
          existingRelicIds,
          rng: this.rng
        });
      }
      this.currentMerchantInventory = this.merchantInventories[nodeId];
      this.screen = GAME_SCREENS.MERCHANT;
    } else if (node.type === NODE_TYPES.EVENT) {
      if (!this.narrativeEventInstances) this.narrativeEventInstances = {};
      if (!this.narrativeEventInstances[nodeId]) {
        this.narrativeEventInstances[nodeId] = getRandomNarrativeEvent([], this.rng);
      }
      this.currentNarrativeEvent = this.narrativeEventInstances[nodeId];
      this.screen = GAME_SCREENS.EVENT;
    } else if (node.type === NODE_TYPES.TREASURE) {
      if (!this.treasureRewards) this.treasureRewards = {};
      if (!this.treasureRewards[nodeId]) {
        const existingRelicIds = (this.hero.relics || []).map(r => r.id);
        const relic = getRandomRelic(existingRelicIds, this.rng);
        const gold = Math.floor(this.rng() * 41) + 80; // 80 a 120 de ouro
        this.treasureRewards[nodeId] = {
          relic,
          gold,
          claimed: false
        };
      }
      this.currentTreasure = this.treasureRewards[nodeId];
      this.screen = GAME_SCREENS.TREASURE;
    }

    return this.getState();
  }

  /**
   * Joga uma carta durante o combate ativo.
   * @param {string} cardUid
   */
  playCardInCombat(cardUid) {
    if (this.screen !== GAME_SCREENS.COMBAT || !this.currentCombat) {
      throw new Error('Não há combate ativo no momento.');
    }

    const result = this.currentCombat.playCard(cardUid);
    this._checkCombatTermination();
    return result;
  }

  /**
   * Finaliza o turno do jogador e processa a ação do inimigo.
   */
  endCombatTurn() {
    if (this.screen !== GAME_SCREENS.COMBAT || !this.currentCombat) {
      throw new Error('Não há combate ativo no momento.');
    }

    this.currentCombat.endTurn();
    this._checkCombatTermination();
  }

  /**
   * Checa se o combate ativo terminou com vitória ou derrota.
   */
  _checkCombatTermination() {
    if (!this.currentCombat || !this.currentCombat.isFinished) return;

    if (this.currentCombat.combatResult === 'defeat') {
      this.screen = GAME_SCREENS.DEFEAT;
      this.clearSavedRun();
    } else if (this.currentCombat.combatResult === 'victory') {
      this.combatRewardGold = this.currentCombat.goldReward || 0;
      this.hero.gold = (this.hero.gold || 0) + this.combatRewardGold;

      // Recompensa de Essências de Almas (Meta-Progressão Permanente)
      const soulsEarned = calculateSoulsReward(this.currentNode?.type);
      this.combatRewardSouls = soulsEarned;
      this.runSoulsEarned = (this.runSoulsEarned || 0) + soulsEarned;
      addSouls(soulsEarned);

      if (this.currentNode && this.currentNode.type === NODE_TYPES.BOSS) {
        if (this.currentAct < this.totalActs) {
          // Conquistou o Chefe do Ato atual (Ato 1 ou 2) -> Transição de Ato com Recuperação de Fôlego!
          this.screen = GAME_SCREENS.ACT_TRANSITION;
        } else {
          // Derrotou o Grande Dragão Tirano no Ato Final (Ato 3) -> Fim de jogo e Vitória Suprema!
          const victoryBonusSouls = 30;
          this.runSoulsEarned = (this.runSoulsEarned || 0) + victoryBonusSouls;
          addSouls(victoryBonusSouls);
          this.screen = GAME_SCREENS.VICTORY;
          this.clearSavedRun();
        }
      } else {
        // Vitória em combate comum ou de elite
        const encounterType = this.currentNode?.type === NODE_TYPES.ELITE
          ? 'elite'
          : (this.currentNode?.type === NODE_TYPES.BOSS ? 'boss' : 'normal');
        this.combatRewardCards = getRandomRewardCards(3, this.rng, encounterType);

        if (this.currentNode && this.currentNode.type === NODE_TYPES.ELITE) {
          // Recompensa adicional de Relíquia por derrotar Elite!
          const ownedRelicIds = this.hero.relics.map(r => r.id);
          const dropRelic = getRandomRelic(ownedRelicIds, this.rng);
          if (dropRelic) {
            this.eliteRewardRelic = dropRelic;
            addRelicToHero(this.hero, dropRelic.id);
          }
        }

        // Drop de Poção (40% em comum, 100% em Elite)
        const isElite = this.currentNode && this.currentNode.type === NODE_TYPES.ELITE;
        const potionChance = isElite ? 1.0 : 0.40;
        this.combatRewardPotion = null;
        if (this.rng() < potionChance) {
          const dropPotion = getRandomPotion(this.rng);
          const addRes = this.addPotion(dropPotion.id);
          if (addRes.success) {
            this.combatRewardPotion = dropPotion;
          }
        }

        this.screen = GAME_SCREENS.COMBAT_REWARD;
      }
    }
  }

  /**
   * Avança a jornada para o próximo Ato da campanha, aplicando a Recuperação de Fôlego
   * (curando 35% da vida máxima do herói) e gerando proceduralmente o novo mapa de nós do próximo ambiente.
   * @returns {Object}
   */
  advanceAct() {
    if (this.currentAct >= this.totalActs) {
      this.screen = GAME_SCREENS.VICTORY;
      this.clearSavedRun();
      return { completed: true, victory: true };
    }

    this.currentAct += 1;

    // Recuperação de Fôlego: restaura 35% da Vida máxima
    const healAmount = Math.max(1, Math.round(this.hero.maxHp * 0.35));
    const prevHp = this.hero.hp;
    this.hero.hp = Math.min(this.hero.maxHp, this.hero.hp + healAmount);
    const actualHealed = this.hero.hp - prevHp;

    // Gera o mapa procedural do próximo Ato
    const mapGen = new MapGenerator({
      act: this.currentAct,
      totalFloors: 15,
      rng: this.rng
    });
    this.map = mapGen.generateMap();
    this.currentNode = null;
    this.currentCombat = null;
    this.combatRewardCards = [];
    this.combatRewardPotion = null;
    this.combatRewardGold = 0;
    this.eliteRewardRelic = null;
    this.shrineCardOptions = [];
    this.merchantInventories = {};
    this.currentMerchantInventory = null;
    this.narrativeEventInstances = {};
    this.currentNarrativeEvent = null;

    this.screen = GAME_SCREENS.MAP;
    this.saveRun();

    return {
      completed: false,
      act: this.currentAct,
      actTheme: this.map.actTheme,
      healAmount: actualHealed,
      newHp: this.hero.hp,
      maxHp: this.hero.maxHp
    };
  }

  /**
   * Coleta a recompensa de combate ou pula.
   * Suporta substituição tática caso o baralho ativo atinja o teto (padrão 15).
   * @param {string|null} cardUid UID da carta escolhida ou null para pular
   * @param {string|null} [replaceCardUid=null] UID da carta do deck ativo a substituir
   * @param {boolean} [sendToReserve=false] Se verdadeiro, envia a carta nova direto para a reserva
   */
  claimCombatReward(cardUid = null, replaceCardUid = null, sendToReserve = false) {
    const isRewardScreen = this.screen === GAME_SCREENS.COMBAT_REWARD;
    const hasRewardCards = Array.isArray(this.combatRewardCards) && this.combatRewardCards.length > 0;
    const hasRewardGold = (this.combatRewardGold || 0) > 0;

    if (!isRewardScreen && !hasRewardCards && !hasRewardGold) {
      throw new Error('Não está na tela de recompensa de combate.');
    }

    if (cardUid) {
      let chosen = this.combatRewardCards.find(c => c.uid === cardUid);
      if (!chosen) {
        chosen = this.combatRewardCards.find(c => c.id === cardUid);
      }
      if (!chosen && typeof CARDS !== 'undefined' && CARDS[cardUid]) {
        chosen = { id: cardUid };
      }

      if (chosen) {
        const newCard = createCardInstance(chosen.id);
        const maxDeck = this.hero.maxDeckSize || 15;
        this.hero.reserveDeck = this.hero.reserveDeck || [];

        if (sendToReserve) {
          // Envia diretamente para a reserva
          this.hero.reserveDeck.push(newCard);
        } else if (replaceCardUid) {
          // Substitui a carta selecionada do deck ativo, movendo a antiga para a reserva
          const replaceIdx = this.hero.deck.findIndex(c => c.uid === replaceCardUid || c.id === replaceCardUid);
          if (replaceIdx !== -1) {
            const removedCard = this.hero.deck.splice(replaceIdx, 1)[0];
            this.hero.reserveDeck.push(removedCard);
          }
          this.hero.deck.push(newCard);
        } else if (this.hero.deck.length < maxDeck) {
          this.hero.deck.push(newCard);
        } else {
          // Se já atingiu o teto e não foi especificada substituição, guarda na reserva
          this.hero.reserveDeck.push(newCard);
        }
      }
    } else {
      // Pular recompensa concede +15 de ouro como consolação estratégica
      this.hero.gold = (this.hero.gold || 0) + 15;
    }

    this.combatRewardCards = [];
    this.combatRewardPotion = null;
    this.combatRewardGold = 0;
    this.eliteRewardRelic = null;
    this.currentCombat = null;
    this.screen = GAME_SCREENS.MAP;

    // Auto-salva após concluir recompensas de combate
    this.saveRun();

    return this.getState();
  }

  /**
   * Move uma carta do Baralho de Combate para o Baú de Reserva.
   * Regra: O baralho ativo nunca pode ficar com menos de 10 cartas.
   * @param {string} cardUid
   * @returns {Object}
   */
  moveCardToReserve(cardUid) {
    if (!this.hero || !this.hero.deck) throw new Error('Herói não inicializado.');
    if (this.hero.deck.length <= 10) {
      throw new Error('O baralho ativo deve conter no mínimo 10 cartas para combater!');
    }
    const idx = this.hero.deck.findIndex(c => c.uid === cardUid);
    if (idx === -1) throw new Error('Carta não encontrada no baralho ativo.');

    const card = this.hero.deck.splice(idx, 1)[0];
    this.hero.reserveDeck = this.hero.reserveDeck || [];
    this.hero.reserveDeck.push(card);
    this.saveRun();
    return card;
  }

  /**
   * Move uma carta do Baú de Reserva para o Baralho de Combate Ativo.
   * Regra: Não pode ultrapassar o teto máximo (15 cartas).
   * @param {string} cardUid
   * @returns {Object}
   */
  moveCardToActiveDeck(cardUid) {
    if (!this.hero) throw new Error('Herói não inicializado.');
    const maxDeck = this.hero.maxDeckSize || 15;
    if (this.hero.deck.length >= maxDeck) {
      throw new Error(`O baralho ativo já atingiu o limite máximo de ${maxDeck} cartas!`);
    }
    this.hero.reserveDeck = this.hero.reserveDeck || [];
    const idx = this.hero.reserveDeck.findIndex(c => c.uid === cardUid);
    if (idx === -1) throw new Error('Carta não encontrada no baú de reserva.');

    const card = this.hero.reserveDeck.splice(idx, 1)[0];
    this.hero.deck.push(card);
    this.saveRun();
    return card;
  }

  /**
   * Troca diretamente uma carta do Deck Ativo por uma carta da Reserva.
   * @param {string} activeCardUid
   * @param {string} reserveCardUid
   * @returns {boolean}
   */
  swapActiveAndReserveCard(activeCardUid, reserveCardUid) {
    if (!this.hero || !this.hero.deck) throw new Error('Herói não inicializado.');
    const activeIdx = this.hero.deck.findIndex(c => c.uid === activeCardUid);
    if (activeIdx === -1) throw new Error('Carta ativa não encontrada.');

    this.hero.reserveDeck = this.hero.reserveDeck || [];
    const reserveIdx = this.hero.reserveDeck.findIndex(c => c.uid === reserveCardUid);
    if (reserveIdx === -1) throw new Error('Carta de reserva não encontrada.');

    const activeCard = this.hero.deck[activeIdx];
    const reserveCard = this.hero.reserveDeck[reserveIdx];

    this.hero.deck[activeIdx] = reserveCard;
    this.hero.reserveDeck[reserveIdx] = activeCard;
    this.saveRun();
    return true;
  }

  /**
   * Aplica a escolha realizada em um nó de Santuário / Acampamento.
   * @param {string} choiceType 'rest' | 'heal' | 'upgrade_card' | 'remove_card' | 'duplicate_card' | 'add_card'
   * @param {Object} [payload] Parâmetros como cardUid ou cardId
   */
  applyShrineChoice(choiceType, payload = {}) {
    if (this.screen !== GAME_SCREENS.SHRINE) {
      throw new Error('Não está em um nó de Santuário.');
    }

    let result;
    switch (choiceType) {
      case CAMPFIRE_ACTIONS.REST:
      case SHRINE_ACTIONS.HEAL:
        result = executeRest(this.hero, 0.30);
        break;
      case CAMPFIRE_ACTIONS.UPGRADE_CARD:
        result = executeUpgradeCard(this.hero.deck, payload.cardUid);
        break;
      case SHRINE_ACTIONS.REMOVE_CARD:
        result = executeRemoveCard(this.hero.deck, payload.cardUid);
        break;
      case SHRINE_ACTIONS.DUPLICATE_CARD:
        result = this.duplicateCardInDeck(payload.cardUid);
        break;
      case SHRINE_ACTIONS.ADD_CARD:
        result = executeAddCard(this.hero.deck, payload.cardId);
        break;
      default:
        throw new Error(`Escolha de santuário desconhecida: "${choiceType}"`);
    }

    this.shrineCardOptions = [];
    this.screen = GAME_SCREENS.MAP;

    // Auto-salva após escolha no santuário
    this.saveRun();

    return {
      choiceResult: result,
      gameState: this.getState()
    };
  }

  /**
   * Adiciona uma relíquia ao herói.
   * @param {string} relicId
   */
  addRelic(relicId) {
    return addRelicToHero(this.hero, relicId);
  }

  /**
   * Verifica se o herói possui uma determinada relíquia.
   * @param {string} relicId
   * @returns {boolean}
   */
  hasRelic(relicId) {
    return hasRelic(this.hero, relicId);
  }

  /**
   * Adiciona uma carta ao deck do herói.
   * @param {string} cardId
   */
  addCardToDeck(cardId) {
    const card = createCardInstance(cardId);
    this.hero.deck.push(card);
    return card;
  }

  /**
   * Remove uma carta do deck do herói.
   * @param {string} cardUid
   */
  removeCardFromDeck(cardUid) {
    return executeRemoveCard(this.hero.deck, cardUid);
  }

  /**
   * Verifica se uma carta pode ser duplicada respeitando o teto de 3 cópias no baralho.
   * @param {string} cardId
   * @returns {boolean}
   */
  canDuplicateCard(cardId) {
    if (!cardId || !this.hero || !this.hero.deck) return false;
    const count = this.hero.deck.filter(c => c.id === cardId).length;
    return count < 3;
  }

  /**
   * Duplica uma carta do deck do herói respeitando o teto de 3 cópias.
   * Lança erro caso a carta já possua 3 cópias no baralho.
   * @param {string} cardUid
   * @returns {Object}
   */
  duplicateCardInDeck(cardUid) {
    const card = this.hero.deck.find(c => c.uid === cardUid);
    if (!card) {
      throw new Error(`Carta não encontrada no baralho com uid: "${cardUid}"`);
    }
    if (!this.canDuplicateCard(card.id)) {
      throw new Error(`Limite máximo de 3 cópias por carta no baralho atingido para "${card.name}".`);
    }
    return executeDuplicateCard(this.hero.deck, cardUid);
  }

  /**
   * Duplica uma carta do deck do herói (alias compatível com teto de 3 cópias).
   * @param {string} cardUid
   */
  duplicateCard(cardUid) {
    return this.duplicateCardInDeck(cardUid);
  }

  /**
   * Aprimora (+) permanentemente uma carta do baralho do herói na forja da fogueira.
   * @param {string} cardUid
   * @returns {Object}
   */
  upgradeCardInDeck(cardUid) {
    const res = executeUpgradeCard(this.hero.deck, cardUid);
    return res.upgradedCard;
  }

  /**
   * Cura a vida do herói.
   * @param {number} amount
   */
  healHero(amount) {
    const prev = this.hero.hp;
    this.hero.hp = Math.min(this.hero.maxHp, this.hero.hp + amount);
    return this.hero.hp - prev;
  }

  /**
   * Compra uma carta do estoque do mercador ativo.
   * @param {string} cardId
   * @returns {Object}
   */
  buyMerchantCard(cardId) {
    if (!this.currentMerchantInventory) {
      throw new Error('Não há loja de mercador aberta no momento.');
    }
    const item = this.currentMerchantInventory.cards.find(c => c.id === cardId);
    if (!item) {
      throw new Error(`Carta não encontrada no estoque: ${cardId}`);
    }
    if (item.bought) {
      throw new Error('Esta carta já foi comprada.');
    }
    if (this.hero.gold < item.price) {
      return {
        success: false,
        message: `Ouro insuficiente! Custa ${item.price} ouro (você tem ${this.hero.gold}).`
      };
    }

    this.hero.gold -= item.price;
    item.bought = true;
    const newCard = createCardInstance(cardId);
    this.hero.deck.push(newCard);

    return {
      success: true,
      message: `Você comprou "${item.name}" por ${item.price} ouro!`,
      card: newCard,
      quote: getRandomPurchaseQuote(this.rng)
    };
  }

  /**
   * Compra uma relíquia do estoque do mercador ativo.
   * @param {string} relicId
   * @returns {Object}
   */
  buyMerchantRelic(relicId) {
    if (!this.currentMerchantInventory) {
      throw new Error('Não há loja de mercador aberta no momento.');
    }
    const item = this.currentMerchantInventory.relics.find(r => r.id === relicId);
    if (!item) {
      throw new Error(`Relíquia não encontrada no estoque: ${relicId}`);
    }
    if (item.bought) {
      throw new Error('Esta relíquia já foi comprada.');
    }
    if (this.hero.gold < item.price) {
      return {
        success: false,
        message: `Ouro insuficiente! Custa ${item.price} ouro (você tem ${this.hero.gold}).`
      };
    }

    this.hero.gold -= item.price;
    item.bought = true;
    const relicAdded = addRelicToHero(this.hero, relicId);

    return {
      success: true,
      message: `Você adquiriu "${item.name}" por ${item.price} ouro!`,
      relic: relicAdded,
      quote: getRandomPurchaseQuote(this.rng)
    };
  }

  /**
   * Paga o serviço de purificação do mercador para remover uma carta permanentemente.
   * @param {string} cardUid
   * @returns {Object}
   */
  buyMerchantCardRemoval(cardUid) {
    if (!this.currentMerchantInventory) {
      throw new Error('Não há loja de mercador aberta no momento.');
    }
    if (this.currentMerchantInventory.removalUsed) {
      throw new Error('O serviço de purificação desta loja já foi utilizado.');
    }
    const cost = this.currentMerchantInventory.removalCost;
    if (this.hero.gold < cost) {
      return {
        success: false,
        message: `Ouro insuficiente para purificação! Custa ${cost} ouro (você tem ${this.hero.gold}).`
      };
    }

    const cardIndex = this.hero.deck.findIndex(c => c.uid === cardUid);
    if (cardIndex === -1) {
      throw new Error(`Carta não encontrada no baralho com uid: ${cardUid}`);
    }

    const removedCard = this.hero.deck.splice(cardIndex, 1)[0];
    this.hero.gold -= cost;
    this.currentMerchantInventory.removalUsed = true;

    return {
      success: true,
      message: `A carta "${removedCard.name}" foi incinerada pelo mercador!`,
      removedCard,
      quote: 'Um baralho purificado corta como navalha nas trevas.'
    };
  }

  /**
   * Retorna do mercador para a visão do mapa.
   */
  leaveMerchant() {
    this.currentMerchantInventory = null;
    this.screen = GAME_SCREENS.MAP;
    return this.getState();
  }

  /**
   * Adiciona uma poção ao primeiro slot livre do herói (máx 3).
   * @param {string} potionId
   * @returns {Object}
   */
  addPotion(potionId) {
    if (!this.hero.potions) {
      this.hero.potions = [null, null, null];
    }
    const emptySlot = this.hero.potions.findIndex(slot => slot === null);
    if (emptySlot === -1) {
      return {
        success: false,
        message: 'Seus slots de poções estão cheios (máximo 3)!'
      };
    }
    const potionInstance = createPotionInstance(potionId);
    this.hero.potions[emptySlot] = potionInstance;
    return {
      success: true,
      slotIndex: emptySlot,
      potion: potionInstance,
      message: `Você obteve "${potionInstance.name}" no slot ${emptySlot + 1}!`
    };
  }

  /**
   * Consome uma poção de um slot do herói.
   * Em combate, delega ao CombatSystem.
   * Fora de combate, só é permitida se canUseOutOfCombat === true.
   * @param {number} slotIndex
   * @returns {Object}
   */
  usePotion(slotIndex) {
    if (this.screen === GAME_SCREENS.COMBAT && this.currentCombat) {
      const res = this.currentCombat.usePotion(slotIndex);
      this._checkCombatTermination();
      return res;
    }

    if (!this.hero.potions || !this.hero.potions[slotIndex]) {
      throw new Error(`Slot de poção ${slotIndex} está vazio.`);
    }

    const potion = this.hero.potions[slotIndex];
    if (potion.canUseOutOfCombat === false) {
      return {
        success: false,
        message: `A poção "${potion.name}" só pode ser usada durante o combate!`
      };
    }

    const res = potion.execute({ hero: this.hero });
    if (res.success) {
      this.hero.potions[slotIndex] = null;
    }
    return {
      ...res,
      potion
    };
  }

  /**
   * Descarta uma poção do cinto.
   * @param {number} slotIndex
   * @returns {Object}
   */
  discardPotion(slotIndex) {
    if (!this.hero.potions || !this.hero.potions[slotIndex]) {
      return { success: false, message: 'Slot já está vazio.' };
    }
    const discarded = this.hero.potions[slotIndex];
    this.hero.potions[slotIndex] = null;
    return {
      success: true,
      message: `Você descartou "${discarded.name}".`,
      discarded
    };
  }

  /**
   * Aplica a escolha realizada em um nó de Evento Narrativo Misterioso.
   * @param {string} choiceId
   * @param {Object} [payload={}] Parâmetros opcionais da escolha (ex: cardUid, costType)
   * @returns {Object}
   */
  applyEventChoice(choiceId, payload = {}) {
    if (this.screen !== GAME_SCREENS.EVENT || !this.currentNarrativeEvent) {
      throw new Error('Não há evento narrativo ativo no momento.');
    }

    const choice = this.currentNarrativeEvent.choices.find(c => c.id === choiceId);
    if (!choice) {
      throw new Error(`Escolha não encontrada: ${choiceId}`);
    }

    if (typeof choice.condition === 'function' && !choice.condition(this.hero)) {
      throw new Error(choice.unavailableText || 'Condição para esta escolha não satisfeita.');
    }

    const result = choice.execute(this, payload);
    if (this.currentNode) {
      this.currentNode.state = NODE_STATES.VISITED;
    }
    return result;
  }

  /**
   * Retorna do evento misterioso para a visão do mapa.
   */
  leaveEvent() {
    this.currentNarrativeEvent = null;
    this.screen = GAME_SCREENS.MAP;
    return this.getState();
  }

  /**
   * Reivindica uma dádiva na Sala do Tesouro Ancestral.
   * @param {string} choiceType 'relic' | 'gold' | 'potion'
   */
  claimTreasureChoice(choiceType) {
    if (this.screen !== GAME_SCREENS.TREASURE || !this.currentTreasure) {
      throw new Error('Não está em uma Sala do Tesouro ativa.');
    }
    if (this.currentTreasure.claimed) {
      throw new Error('O tesouro deste baú já foi recolhido.');
    }

    let result = {};
    if (choiceType === 'relic') {
      const added = this.addRelic(this.currentTreasure.relic.id);
      result = {
        type: 'relic',
        relic: added,
        message: `Você obteve a relíquia rara "${added.name}"!`
      };
    } else if (choiceType === 'gold') {
      const amount = this.currentTreasure.gold || 100;
      this.hero.gold = (this.hero.gold || 0) + amount;
      result = {
        type: 'gold',
        amount,
        message: `Você coletou ${amount} de Ouro do baú ancestral!`
      };
    } else if (choiceType === 'potion') {
      const healDone = executeRest(this.hero, 0.35);
      const potionRes = this.addPotion('potion_health');
      result = {
        type: 'potion',
        healDone,
        potion: potionRes.potion || null,
        message: `Você recuperou ${healDone} de Vida e recebeu uma Poção de Vitalidade!`
      };
    } else {
      throw new Error(`Tipo de escolha de tesouro desconhecido: ${choiceType}`);
    }

    this.currentTreasure.claimed = true;
    if (this.currentNode) {
      this.currentNode.state = NODE_STATES.VISITED;
    }
    this.screen = GAME_SCREENS.MAP;
    this.saveRun();
    return result;
  }

  /**
   * Retorna da Sala do Tesouro para a visão do mapa.
   */
  leaveTreasure() {
    this.currentTreasure = null;
    this.screen = GAME_SCREENS.MAP;
    this.saveRun();
    return this.getState();
  }

  /**
   * Retorna representação estruturada completa do estado atual.
   * @returns {Object}
   */
  getState() {
    return {
      screen: this.screen,
      currentAct: this.currentAct || 1,
      totalActs: this.totalActs || 3,
      elapsedTime: this.elapsedTime || 0,
      hero: {
        ...this.hero,
        deckSize: this.hero.deck.length,
        relicsCount: (this.hero.relics || []).length
      },
      map: this.map,
      currentNode: this.currentNode,
      combat: this.currentCombat ? this.currentCombat.getStateSnapshot() : null,
      combatRewardCards: this.combatRewardCards,
      combatRewardPotion: this.combatRewardPotion,
      combatRewardGold: this.combatRewardGold || 0,
      eliteRewardRelic: this.eliteRewardRelic,
      shrineCardOptions: this.shrineCardOptions,
      currentMerchantInventory: this.currentMerchantInventory,
      currentNarrativeEvent: this.currentNarrativeEvent
    };
  }

  /**
   * Salva o estado da run atual.
   * @param {string} [storageKey='cards_and_dungeons_run']
   * @returns {boolean}
   */
  saveRun(storageKey = 'cards_and_dungeons_run') {
    try {
      const data = {
        version: '1.4.0',
        savedAt: Date.now(),
        screen: this.screen,
        currentAct: this.currentAct || 1,
        totalActs: this.totalActs || 3,
        elapsedTime: this.elapsedTime || 0,
        hero: this.hero,
        map: this.map,
        currentNode: this.currentNode,
        combatRewardCards: this.combatRewardCards,
        combatRewardPotion: this.combatRewardPotion,
        combatRewardGold: this.combatRewardGold || 0,
        eliteRewardRelic: this.eliteRewardRelic,
        merchantInventories: this.merchantInventories,
        currentMerchantInventory: this.currentMerchantInventory,
        narrativeEventInstances: this.narrativeEventInstances,
        currentNarrativeEvent: this.currentNarrativeEvent,
        treasureRewards: this.treasureRewards,
        currentTreasure: this.currentTreasure
      };
      _setStorageItem(storageKey, JSON.stringify(data));
      return true;
    } catch (e) {
      console.warn('Falha ao salvar run:', e);
      return false;
    }
  }

  /**
   * Carrega uma run salva anteriormente.
   * @param {string} [storageKey='cards_and_dungeons_run']
   * @returns {boolean}
   */
  loadRun(storageKey = 'cards_and_dungeons_run') {
    try {
      const raw = _getStorageItem(storageKey);
      if (!raw) return false;
      const data = JSON.parse(raw);
      this.screen = data.screen;
      this.currentAct = data.currentAct || 1;
      this.totalActs = data.totalActs || 3;
      this.elapsedTime = data.elapsedTime || 0;
      this.hero = data.hero;
      if (this.hero) {
        this.hero.reserveDeck = this.hero.reserveDeck || [];
        this.hero.maxDeckSize = this.hero.maxDeckSize || 15;
      }
      this.map = data.map;
      this.currentNode = data.currentNode;
      this.combatRewardCards = data.combatRewardCards || [];
      this.combatRewardPotion = data.combatRewardPotion || null;
      this.combatRewardGold = data.combatRewardGold || 0;
      this.eliteRewardRelic = data.eliteRewardRelic || null;
      this.merchantInventories = data.merchantInventories || {};
      this.currentMerchantInventory = data.currentMerchantInventory || (
        (this.currentNode && this.currentNode.type === NODE_TYPES.MERCHANT)
          ? (this.merchantInventories[this.currentNode.id] || null)
          : null
      );
      this.narrativeEventInstances = data.narrativeEventInstances || {};
      this.currentNarrativeEvent = data.currentNarrativeEvent || null;
      this.treasureRewards = data.treasureRewards || {};
      this.currentTreasure = data.currentTreasure || (
        (this.currentNode && this.currentNode.type === NODE_TYPES.TREASURE)
          ? (this.treasureRewards[this.currentNode.id] || null)
          : null
      );
      this.currentCombat = null;
      return true;
    } catch (e) {
      console.warn('Falha ao carregar run:', e);
      return false;
    }
  }

  /**
   * Apaga a run salva (ao ser derrotado ou vencer).
   * @param {string} [storageKey='cards_and_dungeons_run']
   */
  clearSavedRun(storageKey = 'cards_and_dungeons_run') {
    _removeStorageItem(storageKey);
  }

  /**
   * Verifica se existe um salvamento ativo.
   * @param {string} [storageKey='cards_and_dungeons_run']
   * @returns {boolean}
   */
  hasSavedRun(storageKey = 'cards_and_dungeons_run') {
    return _getStorageItem(storageKey) !== null;
  }

  // Compatibilidade retroativa
  saveToLocalStorage(storageKey = 'cards_and_dungeons_save') {
    return this.saveRun(storageKey);
  }

  loadFromLocalStorage(storageKey = 'cards_and_dungeons_save') {
    return this.loadRun(storageKey);
  }
}


/* --- MÓDULO: js/ui/CardRenderer.js --- */
/**
 * js/ui/CardRenderer.js
 * Renderizador de elementos visuais de Cartas para "Cards e Dungeons".
 * Suporta 18 cartas únicas, 5 níveis de raridade (Starter, Common, Uncommon, Rare, Legendary),
 * efeitos de status coloridos e animações táteis.
 */

class CardRenderer {
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


/* --- MÓDULO: js/ui/MapRenderer.js --- */
/**
 * js/ui/MapRenderer.js
 * Renderizador da Árvore de Caminhos Procedural Convergente (Mapa de Nós) de "Cards e Dungeons".
 * Traça nós clicáveis com estados (disponível, visitado, bloqueado) e conexões dinâmicas SVG.
 */



class MapRenderer {
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


/* --- MÓDULO: js/ui/CombatFx.js --- */
/**
 * js/ui/CombatFx.js
 * Motor de Efeitos Visuais de Combate (Combat FX) em Canvas 2D a 60fps.
 * Renderiza cortes de espada com feixes e faíscas, explosões de chamas,
 * ondas de choque de escudo, borbulhas de veneno ácido e estrelas de cura.
 */

class CombatFx {
  /**
   * @param {Object} options
   * @param {HTMLCanvasElement} options.canvas
   * @param {HTMLElement} options.stageContainer
   */
  constructor({ canvas, stageContainer }) {
    this.canvas = canvas;
    this.stage = stageContainer;
    this.ctx = canvas ? canvas.getContext('2d') : null;

    this.particles = [];
    this.slashes = [];
    this.shockwaves = [];
    this.isRunning = false;
    this.rafId = null;

    this._resizeHandler = () => this.resize();
    window.addEventListener('resize', this._resizeHandler);
    this.resize();
  }

  resize() {
    if (!this.canvas || !this.stage) return;
    const rect = this.stage.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2.0);
      this.dpr = dpr;
      this.width = rect.width;
      this.height = rect.height;
      this.canvas.width = Math.round(rect.width * dpr);
      this.canvas.height = Math.round(rect.height * dpr);
      this.canvas.style.width = `${rect.width}px`;
      this.canvas.style.height = `${rect.height}px`;
      if (this.ctx) {
        if (typeof this.ctx.resetTransform === 'function') {
          this.ctx.resetTransform();
        } else {
          this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
        this.ctx.scale(dpr, dpr);
      }
    }
  }

  /**
   * Retorna as coordenadas centrais de um elemento relativas ao canvas
   */
  getTargetCenter(targetEl) {
    if (!targetEl || !this.canvas) {
      return { x: (this.width || 600) * 0.5, y: (this.height || 400) * 0.5 };
    }
    const targetRect = targetEl.getBoundingClientRect();
    const stageRect = this.canvas.getBoundingClientRect();
    return {
      x: targetRect.left - stageRect.left + targetRect.width * 0.5,
      y: targetRect.top - stageRect.top + targetRect.height * 0.5
    };
  }

  /**
   * 1. ARCO DE CORTE DE LÂMINA (Slash Arc FX)
   * @param {HTMLElement} targetEl
   * @param {Object} [options]
   */
  triggerSlash(targetEl, options = {}) {
    const center = this.getTargetCenter(targetEl);
    const multi = options.multi || 1;
    const isHeavy = options.heavy || false;
    const baseColor = options.color || (isHeavy ? '#f87171' : '#fef08a');
    const glowColor = options.glow || (isHeavy ? '#dc2626' : '#eab308');

    for (let i = 0; i < multi; i++) {
      setTimeout(() => {
        const angle = options.angle !== undefined
          ? options.angle
          : (i % 2 === 0 ? -35 + (Math.random() * 10 - 5) : 40 + (Math.random() * 10 - 5));

        const length = isHeavy ? 180 : 130;
        const rad = (angle * Math.PI) / 180;
        const perpRad = rad + Math.PI / 2;

        const startX = center.x - Math.cos(rad) * (length * 0.5);
        const startY = center.y - Math.sin(rad) * (length * 0.5);
        const endX = center.x + Math.cos(rad) * (length * 0.5);
        const endY = center.y + Math.sin(rad) * (length * 0.5);
        const curveOffset = (Math.random() > 0.5 ? 1 : -1) * (isHeavy ? 35 : 24);

        const ctrlX = center.x + Math.cos(perpRad) * curveOffset;
        const ctrlY = center.y + Math.sin(perpRad) * curveOffset;

        this.slashes.push({
          startX,
          startY,
          endX,
          endY,
          ctrlX,
          ctrlY,
          progress: 0,
          speed: isHeavy ? 0.08 : 0.12,
          life: 1.0,
          fadeSpeed: isHeavy ? 0.045 : 0.065,
          color: baseColor,
          glow: glowColor,
          lineWidth: isHeavy ? 9 : 6
        });

        // Faíscas metálicas de impacto
        const sparkCount = isHeavy ? 24 : 14;
        for (let s = 0; s < sparkCount; s++) {
          const spAngle = rad + (Math.random() * 1.8 - 0.9);
          const spSpeed = 3 + Math.random() * (isHeavy ? 9 : 6);
          this.particles.push({
            type: 'spark',
            x: center.x + (Math.random() * 20 - 10),
            y: center.y + (Math.random() * 20 - 10),
            vx: Math.cos(spAngle) * spSpeed,
            vy: Math.sin(spAngle) * spSpeed,
            life: 1.0,
            fadeSpeed: 0.035 + Math.random() * 0.04,
            size: 2 + Math.random() * 3,
            color: Math.random() > 0.3 ? baseColor : '#ffffff'
          });
        }

        this._startLoop();
      }, i * 90);
    }
  }

  /**
   * 2. EXPLOSÃO DE FOGO & BRASAS (Flame Burst FX)
   * @param {HTMLElement} targetEl
   * @param {Object} [options]
   */
  triggerFlame(targetEl, options = {}) {
    const center = this.getTargetCenter(targetEl);
    const count = options.count || 32;

    // Núcleo de flash de calor inicial
    this.shockwaves.push({
      x: center.x,
      y: center.y,
      radius: 10,
      maxRadius: 75,
      speed: 5,
      lineWidth: 8,
      color: 'rgba(255, 120, 0, ',
      life: 1.0,
      fadeSpeed: 0.06
    });

    const fireColors = ['#ffffff', '#ffea00', '#ff9100', '#ff3d00', '#dd2c00'];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 7;
      this.particles.push({
        type: 'flame',
        x: center.x + (Math.random() * 24 - 12),
        y: center.y + (Math.random() * 24 - 12),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.2, // Levitação ascendente
        life: 1.0,
        fadeSpeed: 0.025 + Math.random() * 0.035,
        size: 5 + Math.random() * 9,
        colorIndex: 0,
        colors: fireColors,
        decay: 0.94
      });
    }

    this._startLoop();
  }

  /**
   * 3. ONDA DE CHOQUE DE ESCUDO / ARMADURA (Shield Shockwave FX)
   * @param {HTMLElement} targetEl
   * @param {Object} [options]
   */
  triggerShield(targetEl, options = {}) {
    const center = this.getTargetCenter(targetEl);
    const color = options.color || 'rgba(56, 189, 248, '; // Ciano safira luminoso

    // Duas ondas concêntricas
    this.shockwaves.push({
      x: center.x,
      y: center.y,
      radius: 20,
      maxRadius: 110,
      speed: 4.8,
      lineWidth: 5,
      color: color,
      life: 1.0,
      fadeSpeed: 0.04
    });

    setTimeout(() => {
      this.shockwaves.push({
        x: center.x,
        y: center.y,
        radius: 15,
        maxRadius: 90,
        speed: 3.8,
        lineWidth: 3.5,
        color: 'rgba(255, 255, 255, ',
        life: 0.9,
        fadeSpeed: 0.045
      });
    }, 80);

    // Partículas místicas de runas defensivas
    for (let i = 0; i < 18; i++) {
      const angle = (i / 18) * Math.PI * 2;
      const dist = 40 + Math.random() * 20;
      this.particles.push({
        type: 'rune_shard',
        x: center.x + Math.cos(angle) * dist,
        y: center.y + Math.sin(angle) * dist,
        vx: Math.cos(angle) * 1.5,
        vy: Math.sin(angle) * 1.5 - 1.0,
        life: 1.0,
        fadeSpeed: 0.03 + Math.random() * 0.02,
        size: 3 + Math.random() * 3,
        color: '#67e8f9'
      });
    }

    this._startLoop();
  }

  /**
   * 4. GOTÍCULAS & BORBULHAS DE VENENO ÁCIDO (Poison Bubbles FX)
   * @param {HTMLElement} targetEl
   * @param {Object} [options]
   */
  triggerPoison(targetEl, options = {}) {
    const center = this.getTargetCenter(targetEl);
    const count = options.count || 22;
    const poisonColors = ['#10b981', '#34d399', '#a3e635', '#a855f7'];

    for (let i = 0; i < count; i++) {
      const offsetX = (Math.random() - 0.5) * 70;
      const offsetY = 30 + Math.random() * 30; // Começa da base
      const col = poisonColors[Math.floor(Math.random() * poisonColors.length)];

      this.particles.push({
        type: 'bubble',
        x: center.x + offsetX,
        y: center.y + offsetY,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -(2.0 + Math.random() * 3.5), // Sobe rápido
        wobbleSpeed: 0.1 + Math.random() * 0.15,
        wobblePhase: Math.random() * Math.PI * 2,
        life: 1.0,
        fadeSpeed: 0.025 + Math.random() * 0.02,
        size: 4 + Math.random() * 6,
        color: col
      });
    }

    this._startLoop();
  }

  /**
   * 5. ESTRELAS E BRILHOS DE CURA (Heal Sparks FX)
   * @param {HTMLElement} targetEl
   */
  triggerHeal(targetEl) {
    const center = this.getTargetCenter(targetEl);
    const count = 20;

    for (let i = 0; i < count; i++) {
      const offsetX = (Math.random() - 0.5) * 60;
      const offsetY = 20 + Math.random() * 30;
      this.particles.push({
        type: 'cross',
        x: center.x + offsetX,
        y: center.y + offsetY,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -(1.5 + Math.random() * 2.8),
        life: 1.0,
        fadeSpeed: 0.025 + Math.random() * 0.02,
        size: 5 + Math.random() * 5,
        color: Math.random() > 0.4 ? '#4ade80' : '#fef08a'
      });
    }

    this._startLoop();
  }

  _startLoop() {
    if (this.isRunning) return;
    this.isRunning = true;
    this._loop();
  }

  _loop() {
    if (!this.isRunning) return;

    this._update();
    this._render();

    const hasSlashes = this.slashes.length > 0;
    const hasShockwaves = this.shockwaves.length > 0;
    const hasParticles = this.particles.length > 0;

    if (!hasSlashes && !hasShockwaves && !hasParticles) {
      this.isRunning = false;
      if (this.ctx) {
        this.ctx.clearRect(0, 0, this.width, this.height);
      }
      return;
    }

    this.rafId = requestAnimationFrame(() => this._loop());
  }

  _update() {
    // Limita máximo de partículas e efeitos simultâneos para evitar engasgos no mobile
    if (this.particles.length > 50) {
      this.particles.splice(0, this.particles.length - 50);
    }
    if (this.slashes.length > 8) {
      this.slashes.splice(0, this.slashes.length - 8);
    }

    // 1. Atualiza cortes
    for (let i = this.slashes.length - 1; i >= 0; i--) {
      const sl = this.slashes[i];
      if (sl.progress < 1.0) {
        sl.progress = Math.min(1.0, sl.progress + sl.speed);
      } else {
        sl.life -= sl.fadeSpeed;
        if (sl.life <= 0) {
          this.slashes.splice(i, 1);
        }
      }
    }

    // 2. Atualiza ondas de choque
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const sw = this.shockwaves[i];
      sw.radius += sw.speed;
      sw.life -= sw.fadeSpeed;
      if (sw.life <= 0 || sw.radius >= sw.maxRadius) {
        this.shockwaves.splice(i, 1);
      }
    }

    // 3. Atualiza partículas
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.type === 'flame') {
        p.vx *= p.decay;
        p.vy *= p.decay;
        p.size *= 0.96;
        // Altera cor gradualmente (do branco ao rubro)
        const cIdx = Math.min(p.colors.length - 1, Math.floor((1.0 - p.life) * p.colors.length));
        p.color = p.colors[cIdx];
      } else if (p.type === 'bubble') {
        p.wobblePhase += p.wobbleSpeed;
        p.x += Math.sin(p.wobblePhase) * 1.2;
      } else if (p.type === 'spark') {
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.vy += 0.2; // Leve gravidade
      }

      p.life -= p.fadeSpeed;
      if (p.life <= 0 || p.size <= 0.5) {
        this.particles.splice(i, 1);
      }
    }
  }

  _render() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Renderiza ondas de choque (Shield Wave - Zero Blur Dual Stroke)
    this.ctx.save();
    for (const sw of this.shockwaves) {
      // Halo externo translúcido
      this.ctx.beginPath();
      this.ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = `${sw.color}${(sw.life * 0.35).toFixed(3)})`;
      this.ctx.lineWidth = sw.lineWidth * 2.2 * sw.life;
      this.ctx.stroke();

      // Anel nítido brilhante
      this.ctx.beginPath();
      this.ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = `${sw.color}${sw.life.toFixed(3)})`;
      this.ctx.lineWidth = sw.lineWidth * sw.life;
      this.ctx.stroke();
    }
    this.ctx.restore();

    // 2. Renderiza arcos de corte de lâmina (Slash Arcs - Zero Blur Dual Beam)
    this.ctx.save();
    for (const sl of this.slashes) {
      if (sl.progress <= 0) continue;

      const currentEndT = sl.progress;
      const currentCtrlX = sl.startX + (sl.ctrlX - sl.startX) * currentEndT;
      const currentCtrlY = sl.startY + (sl.ctrlY - sl.startY) * currentEndT;
      const currentEndX = sl.startX + (sl.endX - sl.startX) * currentEndT;
      const currentEndY = sl.startY + (sl.endY - sl.startY) * currentEndT;

      // Feixe externo colorido (brilho translúcido largo acelerado por hardware)
      this.ctx.beginPath();
      this.ctx.moveTo(sl.startX, sl.startY);
      this.ctx.quadraticCurveTo(currentCtrlX, currentCtrlY, currentEndX, currentEndY);
      this.ctx.strokeStyle = sl.glow;
      this.ctx.lineWidth = sl.lineWidth * 1.8 * sl.life;
      this.ctx.lineCap = 'round';
      this.ctx.globalAlpha = Math.max(0, sl.life * 0.5);
      this.ctx.stroke();

      // Feixe do corpo da lâmina
      this.ctx.beginPath();
      this.ctx.moveTo(sl.startX, sl.startY);
      this.ctx.quadraticCurveTo(currentCtrlX, currentCtrlY, currentEndX, currentEndY);
      this.ctx.strokeStyle = sl.color;
      this.ctx.lineWidth = sl.lineWidth * sl.life;
      this.ctx.globalAlpha = Math.max(0, sl.life);
      this.ctx.stroke();

      // Feixe central hiper-brilhante branco
      this.ctx.beginPath();
      this.ctx.moveTo(sl.startX, sl.startY);
      this.ctx.quadraticCurveTo(currentCtrlX, currentCtrlY, currentEndX, currentEndY);
      this.ctx.strokeStyle = '#ffffff';
      this.ctx.lineWidth = Math.max(1, (sl.lineWidth * 0.45) * sl.life);
      this.ctx.globalAlpha = Math.max(0, sl.life);
      this.ctx.stroke();
    }
    this.ctx.restore();

    // 3. Renderiza partículas (Chamas, Bolhas, Estrelas e Faíscas)
    this.ctx.save();
    for (const p of this.particles) {
      this.ctx.globalAlpha = Math.max(0, p.life);

      if (p.type === 'flame') {
        // Halo sutil leve
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size * 1.3, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = Math.max(0, p.life * 0.35);
        this.ctx.fill();

        // Núcleo da chama
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = Math.max(0, p.life);
        this.ctx.fill();
      } else if (p.type === 'bubble') {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.strokeStyle = p.color;
        this.ctx.lineWidth = 1.5;
        this.ctx.fillStyle = 'rgba(16, 185, 129, 0.25)';
        this.ctx.fill();
        this.ctx.stroke();

        // Ponto de luz da bolha
        this.ctx.beginPath();
        this.ctx.arc(p.x - p.size * 0.3, p.y - p.size * 0.3, p.size * 0.25, 0, Math.PI * 2);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fill();
      } else if (p.type === 'cross') {
        // Estrela de cura
        const s = p.size;
        this.ctx.strokeStyle = p.color;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y - s);
        this.ctx.lineTo(p.x, p.y + s);
        this.ctx.moveTo(p.x - s, p.y);
        this.ctx.lineTo(p.x + s, p.y);
        this.ctx.stroke();
      } else {
        // Faísca metálica ou fragmento rúnico
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.fill();
      }
    }
    this.ctx.restore();
  }

  destroy() {
    window.removeEventListener('resize', this._resizeHandler);
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}


/* --- MÓDULO: js/ui/CombatRenderer.js --- */
/**
 * js/ui/CombatRenderer.js
 * Renderizador da Arena de Combate de "Cards e Dungeons".
 * Controla animações, mão em leque, números flutuantes, screenshake, IA telegrafada,
 * badges de status (Buffs & Debuffs) e suporte a Elites (Minotauro Berserker) e Espectro.
 */





class CombatRenderer {
  /**
   * @param {Object} options
   * @param {HTMLElement} options.container Elemento raiz da tela de combate (#screen-combat)
   * @param {Object} options.gameState Referência à instância de GameState
   * @param {function} options.onCombatEnd Callback disparado quando o combate termina
   */
  constructor({ container, gameState, onCombatEnd }) {
    this.container = container;
    this.gameState = gameState;
    this.onCombatEnd = onCombatEnd;
    this.isProcessingEnemyTurn = false;

    this._cacheDomElements();
    this._bindEvents();
  }

  _cacheDomElements() {
    // Top Bar
    this.encounterTitleEl = this.container.querySelector('#combat-encounter-title');
    this.turnCounterEl = this.container.querySelector('#combat-turn-counter');

    // Herói
    this.heroAvatarEl = this.container.querySelector('#hero-avatar-box');
    this.heroNameEl = this.container.querySelector('#hero-name') || this.container.querySelector('.hero-combatant .combatant-name');
    this.heroHpBarFill = this.container.querySelector('#hero-hp-bar-fill');
    this.heroHpText = this.container.querySelector('#hero-hp-text');
    this.heroArmorBadge = this.container.querySelector('#hero-armor-badge');
    this.heroEnergyOrbs = this.container.querySelector('#hero-energy-orbs');
    this.heroEnergyText = this.container.querySelector('#hero-energy-text');
    this.heroStatusBadgesEl = this.container.querySelector('#hero-status-badges');

    // Inimigo
    this.enemyCombatantEl = this.container.querySelector('#enemy-combatant');
    this.enemyAvatarEl = this.container.querySelector('#enemy-avatar-box');
    this.enemyNameEl = this.container.querySelector('#enemy-name');
    this.enemyHpBarFill = this.container.querySelector('#enemy-hp-bar-fill');
    this.enemyHpText = this.container.querySelector('#enemy-hp-text');
    this.enemyArmorBadge = this.container.querySelector('#enemy-armor-badge');
    this.enemyIntentEl = this.container.querySelector('#enemy-intent-bubble');
    this.enemyStatusBadgesEl = this.container.querySelector('#enemy-status-badges');

    // Área de Ação e Efeitos
    this.combatStageEl = this.container.querySelector('.combat-stage');
    this.actionNotificationEl = this.container.querySelector('#combat-action-notification');
    this.screenFlashEl = this.container.querySelector('#combat-screen-flash');
    this.fxCanvasEl = this.container.querySelector('#combat-fx-canvas');

    if (this.fxCanvasEl && this.combatStageEl) {
      this.combatFx = new CombatFx({
        canvas: this.fxCanvasEl,
        stageContainer: this.combatStageEl
      });
    }

    // Bottom Bar
    this.playerHandEl = this.container.querySelector('#player-hand');
    this.drawPileCountEl = this.container.querySelector('#draw-pile-count');
    this.discardPileCountEl = this.container.querySelector('#discard-pile-count');
    this.btnEndTurn = this.container.querySelector('#btn-end-turn');
  }

  _bindEvents() {
    if (this.btnEndTurn) {
      this.btnEndTurn.addEventListener('click', () => {
        this.handleEndTurnClick();
      });
    }
  }

  /**
   * Helper para tocar áudio com segurança se disponível
   */
  _playSound(soundMethod) {
    if (typeof window !== 'undefined' && window.SoundFX && typeof window.SoundFX[soundMethod] === 'function') {
      window.SoundFX[soundMethod]();
    }
  }

  /**
   * Inicia e renderiza uma sessão de combate
   */
  startCombat() {
    this.isProcessingEnemyTurn = false;
    this.hasHandledCombatEnd = false;
    if (this.combatFx) {
      this.combatFx.resize();
    }
    this.renderCombatState();
    this._playSound('playCardDraw');
  }

  /**
   * Renderiza a visualização completa do combate ativo
   */
  renderCombatState() {
    const combat = this.gameState.currentCombat;
    if (!combat) return;

    const snap = combat.getStateSnapshot();
    const hero = snap.hero;
    const enemy = snap.enemy;

    // Atualiza Cenário de Fundo da Masmorra Conforme o Ato
    const act = this.gameState.currentAct || 1;
    const bgMap = {
      1: 'assets/backgrounds/catacombs.jpg',
      2: 'assets/backgrounds/mines.jpg',
      3: 'assets/backgrounds/dragon_lair.jpg'
    };
    const bgUrl = bgMap[act] || bgMap[1];

    this.container.style.backgroundImage = `
      radial-gradient(ellipse at 50% 36%, rgba(10, 12, 18, 0.25) 0%, rgba(6, 7, 10, 0.78) 100%),
      url('${bgUrl}')
    `;
    this.container.style.backgroundSize = 'cover';
    this.container.style.backgroundPosition = 'center';
    this.container.style.filter = 'contrast(1.1) brightness(0.96) saturate(1.05)';

    if (this.combatStageEl) {
      this.combatStageEl.style.backgroundImage = 'none';
      this.combatStageEl.style.background = 'transparent';
    }

    // 1. Top Bar
    if (this.encounterTitleEl) {
      if (enemy.type === 'boss') {
        this.encounterTitleEl.textContent = '👑 Batalha Decisiva: ' + enemy.name;
      } else if (enemy.type === 'elite') {
        this.encounterTitleEl.textContent = '🐂 Batalha de Elite: ' + enemy.name;
      } else {
        this.encounterTitleEl.textContent = '⚔️ Combate: ' + enemy.name;
      }
    }
    if (this.turnCounterEl) {
      this.turnCounterEl.textContent = `Turno ${snap.turnCount}`;
    }

    // 2. Lado do Herói
    const assets = (typeof window !== 'undefined' && window.GameAssets) || {};
    const svgs = assets.SVGS || {};

    const heroDef = this.gameState.hero || {};
    const heroSprite = heroDef.sprite || 'assets/sprites/hero.jpg';
    const heroIcon = heroDef.icon || 'hero';
    const heroSvg = svgs[heroIcon] || svgs.hero || '';
    const heroName = heroDef.name || 'Guerreiro Rúnico';

    if (this.heroNameEl) {
      this.heroNameEl.textContent = heroName;
    }

    if (this.heroAvatarEl) {
      this.heroAvatarEl.innerHTML = `
        <img src="${heroSprite}" class="avatar-portrait-img" alt="${heroName}" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='block';">
        <div class="avatar-svg-fallback" style="display:none; width:100%; height:100%;">${heroSvg}</div>
      `;
    }

    // Vida do Herói
    const heroHpPct = Math.max(0, Math.min(100, (hero.hp / hero.maxHp) * 100));
    if (this.heroHpBarFill) {
      this.heroHpBarFill.style.width = `${heroHpPct}%`;
    }
    if (this.heroHpText) {
      this.heroHpText.textContent = `${hero.hp} / ${hero.maxHp}`;
    }

    // Armadura do Herói
    if (this.heroArmorBadge) {
      if (hero.block > 0) {
        this.heroArmorBadge.textContent = hero.block;
        this.heroArmorBadge.classList.add('active');
      } else {
        this.heroArmorBadge.textContent = '0';
        this.heroArmorBadge.classList.remove('active');
      }
    }

    // Orbes de Energia
    if (this.heroEnergyOrbs) {
      this.heroEnergyOrbs.innerHTML = '';
      for (let i = 0; i < hero.maxEnergy; i++) {
        const orb = document.createElement('div');
        orb.className = `energy-orb ${i < hero.energy ? '' : 'spent'}`;
        this.heroEnergyOrbs.appendChild(orb);
      }
    }
    if (this.heroEnergyText) {
      this.heroEnergyText.textContent = `${hero.energy}/${hero.maxEnergy}`;
    }

    // Badges de Status do Herói
    this._renderStatusBadges(this.heroStatusBadgesEl, hero.statuses);

    // 3. Lado do Inimigo
    if (this.enemyCombatantEl) {
      this.enemyCombatantEl.classList.remove('is-boss', 'is-elite');
      if (enemy.type === 'boss') {
        this.enemyCombatantEl.classList.add('is-boss');
      } else if (enemy.type === 'elite') {
        this.enemyCombatantEl.classList.add('is-elite');
      }
    }

    if (this.enemyAvatarEl) {
      const spriteMap = {
        golem_guardiao: 'assets/sprites/golem.jpg',
        lich_rei: 'assets/sprites/lich.jpg',
        dragao_tirano: 'assets/sprites/dragon.jpg',
        minotauro_berserker: 'assets/sprites/minotaur.jpg',
        espectro_lamuriante: 'assets/sprites/specter.jpg',
        esqueleto_guardiao: 'assets/sprites/skeleton.jpg',
        feiticeiro_sombrio: 'assets/sprites/mage.jpg',
        goblin_ladino: 'assets/sprites/goblin.jpg',
        rato_peste: 'assets/sprites/rat.jpg',
        gargula_granito: 'assets/sprites/gargoyle.jpg',
        escavador_obsidiana: 'assets/sprites/burrower.jpg',
        xama_ossos: 'assets/sprites/shaman.jpg',
        elemental_igneo: 'assets/sprites/fire_elemental.jpg',
        cultista_draconico: 'assets/sprites/cultist.jpg'
      };

      const enemyImg = spriteMap[enemy.id] || (enemy.icon ? `assets/sprites/${enemy.icon}.jpg` : 'assets/sprites/goblin.jpg');
      const enemySvg = svgs[enemy.id] || svgs[enemy.icon] || svgs.goblin || '';

      this.enemyAvatarEl.innerHTML = `
        <img src="${enemyImg}" class="avatar-portrait-img" alt="${enemy.name}" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='block';">
        <div class="avatar-svg-fallback" style="display:none; width:100%; height:100%;">${enemySvg}</div>
      `;
    }

    if (this.enemyNameEl) {
      if (enemy.affix) {
        this.enemyNameEl.innerHTML = `
          <span>${enemy.name}</span>
          <div class="enemy-affix-badge" data-tooltip="${enemy.affix.description || ''}">⚡ ${enemy.affix.name}</div>
        `;
      } else {
        this.enemyNameEl.textContent = enemy.name;
      }
    }

    // Vida do Inimigo
    const enemyHpPct = Math.max(0, Math.min(100, (enemy.hp / enemy.maxHp) * 100));
    if (this.enemyHpBarFill) {
      this.enemyHpBarFill.style.width = `${enemyHpPct}%`;
    }
    if (this.enemyHpText) {
      this.enemyHpText.textContent = `${enemy.hp} / ${enemy.maxHp}`;
    }

    // Armadura do Inimigo
    if (this.enemyArmorBadge) {
      if (enemy.block > 0) {
        this.enemyArmorBadge.textContent = enemy.block;
        this.enemyArmorBadge.classList.add('active');
      } else {
        this.enemyArmorBadge.textContent = '0';
        this.enemyArmorBadge.classList.remove('active');
      }
    }

    // Badges de Status do Inimigo
    this._renderStatusBadges(this.enemyStatusBadgesEl, enemy.statuses);

    // Placa de Intenção do Inimigo
    this._renderEnemyIntent(enemy.currentIntent);

    // 4. Mão do Jogador
    this._renderPlayerHand(snap.hand, hero.energy);

    // 5. Pilhas de Compra e Descarte
    if (this.drawPileCountEl) {
      this.drawPileCountEl.textContent = snap.drawPileCount;
    }
    if (this.discardPileCountEl) {
      this.discardPileCountEl.textContent = snap.discardPileCount;
    }

    // 6. Botão Finalizar Turno
    if (this.btnEndTurn) {
      this.btnEndTurn.disabled = this.isProcessingEnemyTurn || snap.state !== COMBAT_STATES.HERO_TURN || snap.isFinished;
    }

    // Checagem de Fim de Combate
    if (snap.isFinished) {
      this.handleCombatEnd(snap.combatResult);
    }
  }

  /**
   * Renderiza os badges de status ativos (Buffs & Debuffs)
   * @param {HTMLElement} containerEl
   * @param {Object} statuses
   */
  _renderStatusBadges(containerEl, statuses) {
    if (!containerEl) return;
    containerEl.innerHTML = '';

    if (!statuses) return;

    const assets = (typeof window !== 'undefined' && window.GameAssets) || {};
    const svgs = assets.SVGS || {};

    const statusConfig = {
      strength: {
        label: 'Força',
        icon: svgs.status_strength || svgs.sword,
        cssClass: 'badge-strength',
        tooltip: (v) => `Força (+${v}): Aumenta o dano de cada ataque físico em ${v}.`
      },
      vulnerable: {
        label: 'Vulnerável',
        icon: svgs.status_vulnerable || svgs.shield,
        cssClass: 'badge-vulnerable',
        tooltip: (v) => `Vulnerável (${v} turnos): Sofre 50% mais dano de ataques físicos.`
      },
      weak: {
        label: 'Fraco',
        icon: svgs.status_weak || svgs.fist,
        cssClass: 'badge-weak',
        tooltip: (v) => `Fraco (${v} turnos): Causa 25% a menos de dano em ataques.`
      },
      burn: {
        label: 'Queimadura',
        icon: svgs.status_burn || svgs.fire,
        cssClass: 'badge-burn',
        tooltip: (v) => `Queimadura (${v}): Sofre ${v} de dano de fogo no início do turno.`
      },
      thorns: {
        label: 'Espinhos',
        icon: svgs.shield || svgs.sword,
        cssClass: 'badge-strength',
        tooltip: (v) => `Espinhos (${v}): Retalia com ${v} de dano direto a quem atacar.`
      },
      poison: {
        label: 'Veneno',
        icon: svgs.status_poison || svgs.magic,
        cssClass: 'badge-poison',
        tooltip: (v) => `Veneno (${v}): Sofre ${v} de dano letal direto na Vida no fim do turno (ignora armadura).`
      }
    };

    Object.entries(statuses).forEach(([key, value]) => {
      if (value > 0 && statusConfig[key]) {
        const config = statusConfig[key];
        const badge = document.createElement('div');
        badge.className = `status-badge ${config.cssClass}`;
        badge.setAttribute('data-tooltip', config.tooltip(value));
        badge.innerHTML = `
          ${config.icon}
          <span class="status-count">${value}</span>
        `;
        containerEl.appendChild(badge);
      }
    });
  }

  /**
   * Renderiza a intenção telegrafada do inimigo
   */
  _renderEnemyIntent(intent) {
    if (!this.enemyIntentEl) return;

    if (!intent) {
      this.enemyIntentEl.style.display = 'none';
      return;
    }

    this.enemyIntentEl.style.display = 'flex';
    const assets = (typeof window !== 'undefined' && window.GameAssets) || {};
    const svgs = assets.SVGS || {};

    let iconSvg = svgs.sword;
    let valueText = '';
    let labelText = intent.name;

    if (intent.damage > 0) {
      iconSvg = intent.damage >= 15 ? svgs.fire : svgs.sword;
      const hits = intent.hits || 1;
      valueText = hits > 1 ? `${intent.damage}x${hits}` : `${intent.damage}`;
    } else if (intent.block > 0) {
      iconSvg = svgs.shield;
      valueText = `+${intent.block}`;
    } else if (intent.buff) {
      iconSvg = svgs.fire || svgs.magic;
      valueText = `+${intent.buff.strength || 2}⚡`;
    }

    this.enemyIntentEl.innerHTML = `
      <div class="intent-icon">${iconSvg}</div>
      ${valueText ? `<span class="intent-value">${valueText}</span>` : ''}
      <span class="intent-label">${labelText}</span>
    `;

    this.enemyIntentEl.setAttribute('data-tooltip', intent.description || '');
  }

  /**
   * Renderiza as cartas da mão do jogador em leque dinâmico e tátil
   */
  _renderPlayerHand(handCards, currentEnergy) {
    if (!this.playerHandEl) return;
    this.playerHandEl.innerHTML = '';

    const totalCards = handCards.length;

    handCards.forEach((card, index) => {
      const isDisabled = card.cost > currentEnergy || this.isProcessingEnemyTurn;

      const cardEl = CardRenderer.renderCard(card, {
        playable: !this.isProcessingEnemyTurn,
        disabled: isDisabled,
        onClick: (c, el) => this.handleCardClick(c, el),
        onHover: () => {
          this._playSound('playCardDraw');
        }
      });

      // Cálculo de leque com curvatura suave e empilhamento limpo
      if (totalCards > 1) {
        const midPoint = (totalCards - 1) / 2;
        const normalizedPos = index - midPoint;
        const angleStep = Math.min(3.5, 20 / totalCards);
        const offsetStep = Math.min(5, 24 / totalCards);
        const rotationDeg = (normalizedPos * angleStep).toFixed(2);
        const offsetY = (Math.abs(normalizedPos) * offsetStep).toFixed(1);
        cardEl.style.transform = `rotate(${rotationDeg}deg) translateY(${offsetY}px)`;
        cardEl.style.zIndex = index + 1;
      } else {
        cardEl.style.zIndex = 1;
      }

      this.playerHandEl.appendChild(cardEl);
    });

    if (typeof window !== 'undefined' && window.GamepadManager && window.GamepadManager.isGamepadMode) {
      setTimeout(() => window.GamepadManager.updateContextAndFocus(), 50);
    }
  }

  /**
   * Manipula o clique do jogador em uma carta da mão
   */
  handleCardClick(card, cardEl) {
    const combat = this.gameState.currentCombat;
    if (!combat || this.isProcessingEnemyTurn || combat.isFinished) return;

    if (combat.hero.energy < card.cost) {
      this._playSound('playDamage');
      this.showToast('Energia insuficiente para jogar esta carta!', 'warning');
      cardEl.classList.add('shake-screen');
      setTimeout(() => cardEl.classList.remove('shake-screen'), 350);
      return;
    }

    try {
      cardEl.classList.add('anim-play');

      // Disparo de Combat FX dinâmico no Canvas e Sons Procedurais Especializados (Fase 5)
      if (card.burn > 0 || card.id === 'chuva_meteoros' || card.id === 'golpe_flamejante') {
        if (this.combatFx && this.enemyAvatarEl) this.combatFx.triggerFlame(this.enemyAvatarEl);
        this._playSound('playFireBurst');
      } else if (card.poison > 0 || card.id === 'adaga_envenenada' || card.id === 'chuva_toxica') {
        if (this.combatFx && this.enemyAvatarEl) this.combatFx.triggerPoison(this.enemyAvatarEl);
        this._playSound('playPoisonBubble');
      } else if (card.block > 0) {
        if (this.combatFx && this.heroAvatarEl) this.combatFx.triggerShield(this.heroAvatarEl);
        this._playSound('playShieldWave');
      } else if (card.damage > 0) {
        if (this.combatFx && this.enemyAvatarEl) {
          if (card.id === 'corte_vorpal') {
            this.combatFx.triggerSlash(this.enemyAvatarEl, { multi: 3, heavy: true });
          } else if (card.id === 'danca_das_laminas' || card.id === 'golpe_duplo') {
            this.combatFx.triggerSlash(this.enemyAvatarEl, { multi: card.hits || 2 });
          } else {
            this.combatFx.triggerSlash(this.enemyAvatarEl, { heavy: card.damage >= 14 });
          }
        }
        if (card.damage >= 14 || card.id === 'corte_vorpal') {
          this._playSound('playHeavySlash');
        } else {
          this._playSound('playSlash');
        }
      } else if (card.heal > 0) {
        if (this.combatFx && this.heroAvatarEl) this.combatFx.triggerHeal(this.heroAvatarEl);
        this._playSound('playHeal');
      } else if (card.vulnerable > 0 || card.weak > 0) {
        this._playSound('playDebuff');
      } else if (card.energyGain > 0 || card.id === 'furia_berserker') {
        this._playSound('playBuff');
      } else {
        this._playSound('playButtonClick');
      }

      const result = this.gameState.playCardInCombat(card.uid);

      // Feedback visual flutuante
      if (result.damageDealt > 0) {
        this.showFloatingNumber(this.enemyAvatarEl, `-${result.damageDealt}`, 'damage');
        this.triggerHitFlash(this.enemyAvatarEl);
        if (result.damageDealt >= 14) {
          this.triggerScreenShake();
        }
      }

      if (result.blockGained > 0) {
        this.showFloatingNumber(this.heroAvatarEl, `+${result.blockGained}`, 'block');
      }

      if (result.healed > 0) {
        this.showFloatingNumber(this.heroAvatarEl, `+${result.healed}`, 'heal');
      }

      if (card.burn > 0) {
        this.showFloatingNumber(this.enemyAvatarEl, `Queimadura +${card.burn}🔥`, 'damage');
      }
      if (card.vulnerable > 0) {
        this.showFloatingNumber(this.enemyAvatarEl, `Vulnerável +${card.vulnerable}⚡`, 'damage');
      }
      if (card.weak > 0) {
        this.showFloatingNumber(this.enemyAvatarEl, `Fraco +${card.weak}🛡️`, 'block');
      }
      if (card.thorns > 0) {
        this.showFloatingNumber(this.heroAvatarEl, `Espinhos +${card.thorns}🌵`, 'block');
      }

      setTimeout(() => {
        this.renderCombatState();
      }, 160);

    } catch (err) {
      console.error('Erro ao jogar carta:', err);
      this.showToast(err.message, 'error');
    }
  }

  /**
   * Finaliza o turno do jogador e processa a resposta do monstro
   */
  handleEndTurnClick() {
    const combat = this.gameState.currentCombat;
    if (!combat || this.isProcessingEnemyTurn || combat.isFinished) return;

    this.isProcessingEnemyTurn = true;
    this._playSound('playButtonClick');
    if (this.btnEndTurn) {
      this.btnEndTurn.disabled = true;
      this.btnEndTurn.textContent = 'Vez do Inimigo...';
    }

    this.showActionNotification(`Turno de ${combat.enemy.name}!`);

    setTimeout(() => {
      this._processEnemyAction();
    }, 650);
  }

  /**
   * Executa os impactos visuais da ação do inimigo
   */
  _processEnemyAction() {
    const combat = this.gameState.currentCombat;
    if (!combat) return;

    if (combat.isFinished) {
      this.isProcessingEnemyTurn = false;
      this.renderCombatState();
      return;
    }

    const intent = combat.enemy.currentIntent;
    const previousHeroHp = combat.hero.hp;
    const previousHeroBlock = combat.hero.block;

    // Executa a lógica de fim de turno no engine
    this.gameState.endCombatTurn();

    if (combat.isFinished) {
      this.isProcessingEnemyTurn = false;
      this.renderCombatState();
      return;
    }

    const heroDamageTaken = Math.max(0, previousHeroHp - combat.hero.hp);
    const heroBlockAbsorbed = Math.max(0, previousHeroBlock - combat.hero.block);

    if (intent && intent.damage > 0) {
      if (combat.enemy.type === 'boss') {
        if (this.combatFx && this.heroAvatarEl) this.combatFx.triggerFlame(this.heroAvatarEl);
        this._playSound('playFireBurst');
      } else {
        if (this.combatFx && this.heroAvatarEl) {
          this.combatFx.triggerSlash(this.heroAvatarEl, { color: '#f87171', glow: '#dc2626', heavy: intent.damage >= 15 });
        }
        if (intent.damage >= 15 || combat.enemy.type === 'elite') {
          this._playSound('playHeavySlash');
        } else {
          this._playSound('playSlash');
        }
      }

      this.triggerHitFlash(this.heroAvatarEl);
      if (intent.damage >= 15 || combat.enemy.type === 'boss' || combat.enemy.type === 'elite') {
        this.triggerScreenShake();
        this.triggerScreenFlash();
      }

      if (heroDamageTaken > 0) {
        this.showFloatingNumber(this.heroAvatarEl, `-${heroDamageTaken}`, 'damage');
      }
      if (heroBlockAbsorbed > 0 && heroDamageTaken === 0) {
        this.showFloatingNumber(this.heroAvatarEl, `Escudo!`, 'block');
      }
    } else if (intent && intent.block > 0) {
      if (this.combatFx && this.enemyAvatarEl) {
        this.combatFx.triggerShield(this.enemyAvatarEl, { color: 'rgba(148, 163, 184, ' });
      }
      this._playSound('playShieldWave');
      this.showFloatingNumber(this.enemyAvatarEl, `+${intent.block}`, 'block');
    } else if (intent && intent.buff) {
      this._playSound('playBuff');
      this.showFloatingNumber(this.enemyAvatarEl, `Força +${intent.buff.strength || 2}!`, 'heal');
    }

    // Se o inimigo aplicou debuff no herói
    if (intent && intent.targetStatus) {
      this._playSound('playDebuff');
      if (intent.targetStatus.weak) {
        this.showFloatingNumber(this.heroAvatarEl, `Fraco +${intent.targetStatus.weak}!`, 'damage');
      }
      if (intent.targetStatus.vulnerable) {
        this.showFloatingNumber(this.heroAvatarEl, `Vulnerável +${intent.targetStatus.vulnerable}!`, 'damage');
      }
    }

    setTimeout(() => {
      this.isProcessingEnemyTurn = false;
      if (this.btnEndTurn) {
        this.btnEndTurn.textContent = 'Finalizar Turno';
      }
      this.renderCombatState();
      this._playSound('playCardDraw');
    }, 600);
  }

  /**
   * Trata a finalização do combate (vitória ou derrota)
   */
  handleCombatEnd(result) {
    if (this.hasHandledCombatEnd) return;
    this.hasHandledCombatEnd = true;
    if (this.onCombatEnd) {
      this.onCombatEnd(result);
    }
  }

  /**
   * Exibe números flutuantes animados de dano, armadura ou cura
   */
  showFloatingNumber(targetEl, text, type = 'damage') {
    if (!targetEl) return;

    const numEl = document.createElement('div');
    numEl.className = `floating-number floating-${type}`;
    numEl.textContent = text;

    const rect = targetEl.getBoundingClientRect();
    const stageRect = this.combatStageEl.getBoundingClientRect();

    const posX = rect.left - stageRect.left + rect.width / 2 - 25;
    const posY = rect.top - stageRect.top + rect.height / 3;

    numEl.style.left = `${posX}px`;
    numEl.style.top = `${posY}px`;

    this.combatStageEl.appendChild(numEl);

    setTimeout(() => {
      numEl.remove();
    }, 900);
  }

  /**
   * Efeito de tremor de tela (Screenshake)
   */
  triggerScreenShake() {
    const appEl = document.getElementById('app') || document.body;
    appEl.classList.remove('shake-screen');
    void appEl.offsetWidth;
    appEl.classList.add('shake-screen');

    setTimeout(() => {
      appEl.classList.remove('shake-screen');
    }, 380);
  }

  /**
   * Efeito de flash avermelhado no avatar atingido
   */
  triggerHitFlash(targetEl) {
    if (!targetEl) return;
    targetEl.classList.add('hit-flash');
    setTimeout(() => {
      targetEl.classList.remove('hit-flash');
    }, 180);
  }

  /**
   * Flash de luz na arena inteira (para golpes pesados)
   */
  triggerScreenFlash() {
    if (!this.screenFlashEl) return;
    this.screenFlashEl.classList.add('active');
    setTimeout(() => {
      this.screenFlashEl.classList.remove('active');
    }, 150);
  }

  /**
   * Notificação rápida central de ação
   */
  showActionNotification(text) {
    if (!this.actionNotificationEl) return;
    this.actionNotificationEl.textContent = text;
    this.actionNotificationEl.style.opacity = '1';
    setTimeout(() => {
      if (this.actionNotificationEl) {
        this.actionNotificationEl.style.opacity = '0';
      }
    }, 1200);
  }

  /**
   * Toast flutuante rápido
   */
  showToast(text, type = 'info') {
    if (typeof window !== 'undefined' && window.ViewManager && typeof window.ViewManager.showToast === 'function') {
      window.ViewManager.showToast(text, type);
    }
  }
}


/* --- MÓDULO: js/ui/CinematicManager.js --- */
/**
 * js/ui/CinematicManager.js
 * Gerenciador de Cinemáticas e Cutscenes Remotion-Style de "Cards e Dungeons".
 * Renderiza sequências com movimentação de câmera (Ken Burns), partículas de brasas incandescentes
 * e transições rúnicas antes do início da jornada e no confronto contra o Chefe Final.
 */

class CinematicManager {
  /**
   * @param {Object} options
   * @param {HTMLElement} options.container Container da tela cinematográfica (#screen-cinematic)
   * @param {function} options.onComplete Callback executado ao terminar a cinemática
   */
  constructor({ container, onComplete }) {
    this.container = container;
    this.onComplete = onComplete;

    this.backdropEl = this.container.querySelector('.cinematic-backdrop');
    this.chapterTagEl = this.container.querySelector('.cinematic-chapter-tag');
    this.headlineEl = this.container.querySelector('.cinematic-headline');
    this.paragraphEl = this.container.querySelector('.cinematic-paragraph');
    this.btnSkip = this.container.querySelector('.btn-cinematic-skip');
    this.btnNext = this.container.querySelector('.btn-cinematic-next');
    this.canvas = this.container.querySelector('.cinematic-particles-canvas');

    this.particles = [];
    this.animFrameId = null;
    this.currentStep = 0;
    this.activeSequence = [];

    this._initCanvas();
    this._bindControls();
  }

  _initCanvas() {
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    const resize = () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Gera 45 partículas de brasas incandescentes
    for (let i = 0; i < 45; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 2.5 + 0.8,
        speedY: Math.random() * 1.2 + 0.4,
        speedX: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.7 + 0.3,
        fadeSpeed: Math.random() * 0.01 + 0.005
      });
    }
  }

  _startParticles() {
    if (!this.ctx) return;

    const render = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity += p.fadeSpeed;
        if (p.opacity > 0.95 || p.opacity < 0.2) p.fadeSpeed = -p.fadeSpeed;

        if (p.y < -10) {
          p.y = this.canvas.height + 10;
          p.x = Math.random() * this.canvas.width;
        }

        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(255, ${Math.floor(130 + p.opacity * 90)}, 30, ${p.opacity})`;
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = '#f39c12';
        this.ctx.fill();
      });

      this.animFrameId = requestAnimationFrame(render);
    };

    if (!this.animFrameId) {
      render();
    }
  }

  _stopParticles() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  _bindControls() {
    if (this.btnSkip) {
      this.btnSkip.addEventListener('click', () => {
        this.finish();
      });
    }

    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => {
        this.nextStep();
      });
    }
  }

  /**
   * Toca a Cinemática de Abertura da Jornada
   * @param {function} onDone Callback ao concluir
   */
  playIntro(onDone) {
    this.onComplete = onDone;
    this.activeSequence = [
      {
        backdrop: 'assets/backgrounds/catacombs.jpg',
        chapter: 'PRÓLOGO • AS PROFUNDEZAS ESQUECIDAS',
        headline: 'O CALABOUÇO DAS TREVAS',
        paragraph: 'Nas entranhas da terra, além dos salões dos reis esquecidos, repousa um labirinto forjado em sangue e magia ancestral. Nenhuma alma viva jamais retornou intacta.'
      },
      {
        backdrop: 'assets/backgrounds/dragon_lair.jpg',
        chapter: 'O DESPERTAR DO TIRANO',
        headline: 'A LENDA DO DRAGÃO',
        paragraph: 'Em seu trono de cinzas e ouro maldito, o Grande Dragão Tirano vigia as profundezas. Munido de suas cartas rúnicas e determinação inabalável, seu destino é desafiar as chamas!'
      }
    ];

    this.currentStep = 0;
    this.container.classList.add('active');
    this._startParticles();
    this._renderCurrentStep();
  }

  /**
   * Toca a Cinemática de Encontro com o Chefe do Ato
   * @param {function} onDone Callback ao concluir
   * @param {Object} [context] Contexto do chefe { enemy, act }
   */
  playBossEncounter(onDone, context = {}) {
    this.onComplete = onDone;
    const enemy = context.enemy || {};
    const act = context.act || (enemy.id === 'golem_guardiao' ? 1 : enemy.id === 'lich_rei' ? 2 : 3);

    let backdrop = 'assets/backgrounds/dragon_lair.jpg';
    let chapter = 'COVIL FINAL • ANDAR 10';
    let headline = 'O DRAGÃO TIRANO DESPERTA!';
    let paragraph = 'O chão treme com o rugido primal da fera de obsidiana. O ar se torna incandescente e as escamas do Dragão irradiam magma puro. Esta é a sua batalha definitiva!';

    if (enemy.id === 'golem_guardiao' || act === 1) {
      backdrop = 'assets/backgrounds/catacombs.jpg';
      chapter = 'ATO I • O DESPERTAR DO TITÃ';
      headline = 'O GOLEM GUARDIÃO SE ERGUE!';
      paragraph = 'O chão das catacumbas ancestrais estremece. Antigas runas azuis acendem no corpo de pedra sólida do titã guardião. Prepare-se para o teste decisivo!';
    } else if (enemy.id === 'lich_rei' || act === 2) {
      backdrop = 'assets/backgrounds/mines.jpg';
      chapter = 'ATO II • MINAS DA NECRÓPOLE';
      headline = 'O LICH REI REIVINDICA SUA ALMA!';
      paragraph = 'O ar congela instantaneamente. Esferas de fogo espectral e névoa da morte orbitam o cetro do Rei dos Mortos. Sua filactéria queima com poder sombrio!';
    }

    this.activeSequence = [
      {
        backdrop,
        chapter,
        headline,
        paragraph
      }
    ];

    this.currentStep = 0;
    this.container.classList.add('active');
    this._startParticles();

    if (typeof window !== 'undefined' && window.SoundFX) {
      window.SoundFX.playHeavyAttack();
    }

    this._renderCurrentStep();
  }

  _renderCurrentStep() {
    const data = this.activeSequence[this.currentStep];
    if (!data) {
      this.finish();
      return;
    }

    if (this.backdropEl) {
      this.backdropEl.style.backgroundImage = `url('${data.backdrop}')`;
    }
    if (this.chapterTagEl) this.chapterTagEl.textContent = data.chapter;
    if (this.headlineEl) this.headlineEl.textContent = data.headline;
    if (this.paragraphEl) this.paragraphEl.textContent = data.paragraph;

    if (this.btnNext) {
      const isLast = this.currentStep === this.activeSequence.length - 1;
      this.btnNext.textContent = isLast ? 'Adentrar o Calabouço ⚔️' : 'Continuar ➔';
    }
  }

  nextStep() {
    this.currentStep++;
    if (this.currentStep >= this.activeSequence.length) {
      this.finish();
    } else {
      this._renderCurrentStep();
    }
  }

  finish() {
    this._stopParticles();
    this.container.classList.remove('active');
    if (typeof window !== 'undefined' && window.SoundFX) {
      window.SoundFX.playButtonClick();
    }
    if (this.onComplete) {
      this.onComplete();
    }
  }
}


/* --- MÓDULO: js/ui/ViewManager.js --- */
/**
 * js/ui/ViewManager.js
 * Orquestrador de Visualização, Transição de Telas, Modais, HUD e Barra de Relíquias de "Cards e Dungeons".
 */





class ViewManager {
  /**
   * @param {Object} options
   * @param {Object} options.gameState Referência ao GameState
   */
  constructor({ gameState }) {
    this.gameState = gameState;

    this._cacheElements();
    this._bindGlobalEvents();
  }

  _cacheElements() {
    // HUD Header
    this.hudHpFill = document.getElementById('hud-hp-bar-fill');
    this.hudHpText = document.getElementById('hud-hp-text');
    this.hudGoldText = document.getElementById('hud-gold-text');
    this.hudDeckCount = document.getElementById('hud-deck-count');
    this.hudActText = document.getElementById('hud-act-text');
    this.hudTimerText = document.getElementById('hud-timer-text');
    this.relicsBar = document.getElementById('relics-bar');
    this.btnViewDeck = document.getElementById('btn-hud-deck');
    this.btnMusic = document.getElementById('btn-music');
    this.btnToggleMute = document.getElementById('btn-hud-audio');
    this.btnOpenGuide = document.getElementById('btn-hud-guide');

    // Menu Controls
    this.btnContinue = document.getElementById('btn-continue');

    // Telas
    this.screens = {
      menu: document.getElementById('screen-menu'),
      cinematic: document.getElementById('screen-cinematic'),
      map: document.getElementById('screen-map'),
      combat: document.getElementById('screen-combat'),
      victory: document.getElementById('screen-victory'),
      defeat: document.getElementById('screen-defeat')
    };

    // Modais
    this.modals = {
      deck: document.getElementById('modal-deck'),
      deckSelector: document.getElementById('modal-deck-selector'),
      shrine: document.getElementById('modal-shrine'),
      reward: document.getElementById('modal-reward'),
      guide: document.getElementById('modal-guide'),
      classSelect: document.getElementById('modal-class-select'),
      merchant: document.getElementById('modal-merchant'),
      event: document.getElementById('modal-event'),
      actTransition: document.getElementById('modal-act-transition'),
      cardSwap: document.getElementById('modal-card-swap'),
      treasure: document.getElementById('modal-treasure'),
      talents: document.getElementById('modal-talents')
    };

    // Barra de Poções (Fase 3)
    this.hudPotionsContainer = document.getElementById('hud-potions-container');

    // Toast Container
    this.toastContainer = document.getElementById('toast-container');

    // Aplica cenários de alta definição nas telas principais
    this.applyScreenBackgrounds();
  }

  _bindGlobalEvents() {
    // Botão Ver Baralho do HUD
    if (this.btnViewDeck) {
      this.btnViewDeck.addEventListener('click', () => {
        this.openDeckInspection();
      });
    }

    // Botão de Música Ambiente
    if (this.btnMusic) {
      this.btnMusic.addEventListener('click', () => {
        this.toggleMusic();
      });
    }

    // Botão de Áudio Som / Mudo
    if (this.btnToggleMute) {
      this.btnToggleMute.addEventListener('click', () => {
        this.toggleAudioMute();
      });
    }

    // Botão de Ajuda / Guia
    if (this.btnOpenGuide) {
      this.btnOpenGuide.addEventListener('click', () => {
        this.openGuideModal();
      });
    }

    // Fechar modais ao clicar no botão fechar ou fora
    Object.values(this.modals).forEach(modalEl => {
      if (!modalEl) return;
      const closeBtn = modalEl.querySelector('.modal-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          this.closeModal(modalEl);
        });
      }
      modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) {
          // Modais críticos de progressão que NUNCA devem ser fechados acidentalmente clicando no fundo
          const nonDismissible = [
            'modal-reward',
            'modal-shrine',
            'modal-act-transition',
            'modal-class-select',
            'modal-deck-selector',
            'modal-card-swap',
            'modal-treasure'
          ];
          if (!nonDismissible.includes(modalEl.id)) {
            this.closeModal(modalEl);
          }
        }
      });
    });
  }

  /**
   * Atualiza a barra de topo (HUD) e controles de persistência
   */
  updateHud() {
    const hero = this.gameState.hero;
    if (!hero) return;

    if (this.hudHpFill) {
      const pct = Math.max(0, Math.min(100, (hero.hp / hero.maxHp) * 100));
      this.hudHpFill.style.width = `${pct}%`;
    }
    if (this.hudHpText) {
      this.hudHpText.textContent = `${hero.hp} / ${hero.maxHp}`;
    }
    if (this.hudGoldText) {
      this.hudGoldText.textContent = `${hero.gold || 50} Ouro`;
    }
    if (this.hudDeckCount) {
      this.hudDeckCount.textContent = `${hero.deck ? hero.deck.length : 0}`;
    }

    // Atualiza Indicador do Ato
    if (this.hudActText) {
      const act = this.gameState.currentAct || 1;
      const actNames = { 1: 'Ato I', 2: 'Ato II', 3: 'Ato III' };
      this.hudActText.textContent = actNames[act] || `Ato ${act}`;
    }

    // Atualiza Display do Cronômetro
    this.updateRunTimerDisplay();

    // Atualiza Barra de Relíquias
    this.updateRelicsBar();

    // Atualiza Barra de Poções (Fase 3)
    this.updatePotionsBar();

    // Atualiza Botão Continuar Jornada no Menu
    if (this.btnContinue) {
      const hasSave = this.gameState.hasSavedRun();
      this.btnContinue.style.display = hasSave ? 'inline-flex' : 'none';
    }

    // Atualiza Botão de Música
    this.updateMusicButton();
  }

  /**
   * Inicia o cronômetro em tempo real da jornada (1 tick por segundo)
   */
  startRunTimer() {
    this.stopRunTimer();
    this._runTimerInterval = setInterval(() => {
      if (this.gameState && this.screens.menu && !this.screens.menu.classList.contains('active')) {
        this.gameState.elapsedTime = (this.gameState.elapsedTime || 0) + 1;
        this.updateRunTimerDisplay();
      }
    }, 1000);
  }

  /**
   * Para o cronômetro em tempo real
   */
  stopRunTimer() {
    if (this._runTimerInterval) {
      clearInterval(this._runTimerInterval);
      this._runTimerInterval = null;
    }
  }

  /**
   * Formata segundos no formato MM:SS ou HH:MM:SS
   * @param {number} seconds
   * @returns {string}
   */
  formatRunTime(seconds = 0) {
    const s = Math.max(0, Math.floor(seconds));
    const hours = Math.floor(s / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;
    const pad = (n) => String(n).padStart(2, '0');
    if (hours > 0) {
      return `${pad(hours)}:${pad(mins)}:${pad(secs)}`;
    }
    return `${pad(mins)}:${pad(secs)}`;
  }

  /**
   * Atualiza o elemento de texto do timer no HUD
   */
  updateRunTimerDisplay() {
    if (this.hudTimerText) {
      this.hudTimerText.textContent = this.formatRunTime(this.gameState.elapsedTime || 0);
    }
  }

  /**
   * Atualiza o fundo da masmorra no mapa e combate de acordo com o Ato
   * @param {number} [act=1]
   */
  updateDungeonBackground(act = 1) {
    const bgMap = {
      1: 'assets/backgrounds/catacombs.jpg',
      2: 'assets/backgrounds/mines.jpg',
      3: 'assets/backgrounds/dragon_lair.jpg'
    };
    const bgUrl = bgMap[act] || bgMap[1];
    const mapScreen = document.getElementById('screen-map');
    const combatScreen = document.getElementById('screen-combat');
    if (mapScreen) {
      mapScreen.style.backgroundImage = `radial-gradient(circle at 50% 50%, rgba(10, 11, 16, 0.72) 0%, rgba(6, 7, 10, 0.94) 100%), url('${bgUrl}')`;
      mapScreen.style.backgroundSize = 'cover';
      mapScreen.style.backgroundPosition = 'center';
    }
    if (combatScreen) {
      combatScreen.style.backgroundImage = `radial-gradient(ellipse at 50% 36%, rgba(10, 12, 18, 0.25) 0%, rgba(6, 7, 10, 0.78) 100%), url('${bgUrl}')`;
      combatScreen.style.backgroundSize = 'cover';
      combatScreen.style.backgroundPosition = 'center';
      combatScreen.style.filter = 'contrast(1.1) brightness(0.96) saturate(1.05)';
      const combatStage = combatScreen.querySelector('.combat-stage');
      if (combatStage) {
        combatStage.style.backgroundImage = 'none';
        combatStage.style.background = 'transparent';
      }
    }
  }

  /**
   * Aplica cenários de alta definição nas telas de Menu, Vitória e Derrota
   */
  applyScreenBackgrounds() {
    if (this.screens && this.screens.menu) {
      this.screens.menu.style.backgroundImage = `radial-gradient(circle at 50% 45%, rgba(10, 11, 16, 0.45) 0%, rgba(6, 7, 10, 0.88) 100%), url('assets/backgrounds/main_menu_bg.jpg')`;
      this.screens.menu.style.backgroundSize = 'cover';
      this.screens.menu.style.backgroundPosition = 'center';
    }
    if (this.screens && this.screens.victory) {
      this.screens.victory.style.backgroundImage = `radial-gradient(circle at 50% 50%, rgba(10, 11, 16, 0.45) 0%, rgba(6, 7, 10, 0.9) 100%), url('assets/backgrounds/victory_bg.jpg')`;
      this.screens.victory.style.backgroundSize = 'cover';
      this.screens.victory.style.backgroundPosition = 'center';
    }
    if (this.screens && this.screens.defeat) {
      this.screens.defeat.style.backgroundImage = `radial-gradient(circle at 50% 50%, rgba(20, 8, 10, 0.5) 0%, rgba(8, 6, 8, 0.92) 100%), url('assets/backgrounds/defeat_bg.jpg')`;
      this.screens.defeat.style.backgroundSize = 'cover';
      this.screens.defeat.style.backgroundPosition = 'center';
    }
  }

  /**
   * Renderiza a barra de relíquias passivas equipadas
   */
  updateRelicsBar() {
    if (!this.relicsBar) return;

    const hero = this.gameState.hero;
    const relics = hero?.relics || [];

    if (relics.length === 0) {
      this.relicsBar.style.display = 'none';
      return;
    }

    this.relicsBar.style.display = 'flex';
    this.relicsBar.innerHTML = '';

    const relicImgMap = {
      amulet_strength: 'assets/relics/relic_strength.jpg',
      blood_chalice: 'assets/relics/relic_blood.jpg',
      spike_shield: 'assets/relics/relic_spikes.jpg',
      ancient_orb: 'assets/relics/relic_mana.jpg',
      poison_vial: 'assets/relics/relic_poison.jpg',
      fortune_bag: 'assets/relics/relic_fortune.jpg',
      ether_cloak: 'assets/relics/relic_cloak.jpg',
      whetstone: 'assets/relics/relic_whetstone.jpg'
    };

    relics.forEach(relic => {
      const slot = document.createElement('div');
      slot.className = 'relic-slot';
      slot.setAttribute('data-tooltip', `${relic.name}: ${relic.description}`);

      const relicImg = relicImgMap[relic.id] || 'assets/relics/relic_strength.jpg';
      slot.innerHTML = `<img src="${relicImg}" alt="${relic.name}" class="relic-slot-img" />`;

      slot.addEventListener('click', () => {
        if (typeof window !== 'undefined' && window.SoundFX) {
          window.SoundFX.playButtonClick();
        }
        this.showToast(`✨ ${relic.name}: ${relic.description}`, 'info');
      });

      this.relicsBar.appendChild(slot);
    });
  }

  /**
   * Renderiza os 3 slots de poções consumíveis no HUD com assets HD
   */
  updatePotionsBar() {
    const container = document.getElementById('hud-potions-container');
    if (!container) return;

    const slots = container.querySelectorAll('.potion-slot');
    if (!slots || slots.length === 0) return;

    const hero = this.gameState.hero;
    const potions = hero?.potions || [null, null, null];

    const potionImgMap = {
      potion_health: 'assets/potions/potion_health.jpg',
      potion_energy: 'assets/potions/potion_energy.jpg',
      potion_poison: 'assets/potions/potion_poison.jpg',
      potion_fire: 'assets/potions/potion_fire.jpg',
      potion_stone: 'assets/potions/potion_stone.jpg',
      potion_strength: 'assets/potions/potion_strength.jpg'
    };

    slots.forEach((slot, index) => {
      const pot = potions[index];
      const newSlot = slot.cloneNode(false);
      slot.parentNode.replaceChild(newSlot, slot);

      if (pot) {
        newSlot.className = 'potion-slot has-potion';
        newSlot.setAttribute('data-slot-index', index);
        newSlot.setAttribute('data-tooltip', `${pot.name}: ${pot.description} (Clique para Usar)`);
        const potImg = potionImgMap[pot.id] || 'assets/potions/potion_health.jpg';
        newSlot.innerHTML = `<img src="${potImg}" alt="${pot.name}" class="potion-slot-img" />`;

        newSlot.addEventListener('click', () => {
          if (this.onPotionClicked) {
            this.onPotionClicked(index, pot);
            return;
          }

          if (this.gameState.currentCombat && !this.gameState.currentCombat.isFinished) {
            try {
              const res = this.gameState.currentCombat.usePotion(index);
              if (res.success) {
                if (typeof window !== 'undefined' && window.SoundFX && window.SoundFX.playPotion) {
                  window.SoundFX.playPotion();
                }
                const pName = res.potion?.name || pot.name;
                const pDesc = res.potion?.description || pot.description;
                this.showToast(`🧪 ${pName}: ${pDesc}`, 'success');
                this.updateHud();

                if (window.GameApp && window.GameApp.combatRenderer) {
                  const cr = window.GameApp.combatRenderer;
                  if (cr.combatFx) {
                    if (pot.id === 'potion_fire') cr.combatFx.triggerFlame(cr.enemyAvatarEl);
                    else if (pot.id === 'potion_poison') cr.combatFx.triggerPoison(cr.enemyAvatarEl);
                    else if (pot.id === 'potion_stone') cr.combatFx.triggerShield(cr.heroAvatarEl);
                    else if (pot.id === 'potion_health') cr.combatFx.triggerHeal(cr.heroAvatarEl);
                  }
                  if (res.damageDealt > 0 && cr.enemyAvatarEl) {
                    cr.showFloatingNumber(cr.enemyAvatarEl, `-${res.damageDealt}`, 'damage');
                    cr.triggerHitFlash(cr.enemyAvatarEl);
                  }
                  if (res.blockGained > 0 && cr.heroAvatarEl) {
                    cr.showFloatingNumber(cr.heroAvatarEl, `+${res.blockGained}`, 'block');
                  }
                  if (res.healDone > 0 && cr.heroAvatarEl) {
                    cr.showFloatingNumber(cr.heroAvatarEl, `+${res.healDone}`, 'heal');
                  }
                  cr.renderCombatState();
                }
              } else {
                this.showToast(res.message, 'warning');
              }
            } catch (err) {
              this.showToast(err.message, 'error');
            }
          } else {
            if (pot.canUseOutOfCombat) {
              try {
                const res = this.gameState.usePotion(index);
                if (res.success) {
                  if (typeof window !== 'undefined' && window.SoundFX && window.SoundFX.playPotion) {
                    window.SoundFX.playPotion();
                  }
                  const pName = res.potion?.name || pot.name;
                  const pDesc = res.potion?.description || pot.description;
                  this.showToast(`🧪 ${pName}: ${pDesc}`, 'success');
                  this.updateHud();
                } else {
                  this.showToast(res.message, 'warning');
                }
              } catch (err) {
                this.showToast(err.message, 'error');
              }
            } else {
              this.showToast('Esta poção só pode ser usada durante o combate!', 'warning');
            }
          }
        });
      } else {
        newSlot.className = 'potion-slot is-empty';
        newSlot.removeAttribute('data-slot-index');
        newSlot.setAttribute('data-tooltip', 'Slot de Poção Vazio');
        newSlot.innerHTML = '<img src="assets/potions/potion_slot_empty.jpg" alt="Vazio" class="potion-slot-img empty" />';
      }
    });
  }

  /**
   * Alterna a música ambiente da masmorra
   */
  toggleMusic() {
    if (typeof window === 'undefined' || !window.SoundFX) return;

    if (window.SoundFX.isMusicPlaying) {
      window.SoundFX.stopDungeonMusic();
      this.showToast('Música ambiente pausada.', 'info');
    } else {
      window.SoundFX.startDungeonMusic();
      this.showToast('Música ambiente de masmorra ativada.', 'info');
    }

    this.updateMusicButton();
  }

  /**
   * Atualiza o estado visual do botão de música
   */
  updateMusicButton() {
    if (!this.btnMusic) return;

    const isPlaying = typeof window !== 'undefined' && window.SoundFX && window.SoundFX.isMusicPlaying;
    if (isPlaying) {
      this.btnMusic.classList.add('music-active');
      this.btnMusic.innerHTML = '🎵';
      this.btnMusic.setAttribute('data-tooltip', 'Música Ambiente (Ativada - Clique para Pausar)');
    } else {
      this.btnMusic.classList.remove('music-active');
      this.btnMusic.innerHTML = '🔇';
      this.btnMusic.setAttribute('data-tooltip', 'Música Ambiente (Desativada - Clique para Tocar)');
    }
  }

  /**
   * Alterna a tela ativa
   * @param {string} screenKey 'menu' | 'map' | 'combat' | 'victory' | 'defeat'
   */
  showScreen(screenKey) {
    if (this.toastContainer) {
      this.toastContainer.innerHTML = '';
    }

    Object.entries(this.screens).forEach(([key, el]) => {
      if (!el) return;
      if (key === screenKey) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    this.updateHud();

    // Oculta a barra de topo no Menu Principal e na Cinemática
    const headerEl = document.querySelector('.game-header');
    if (headerEl) {
      if (screenKey === 'menu' || screenKey === 'cinematic') {
        headerEl.style.display = 'none';
      } else {
        headerEl.style.display = 'flex';
      }
    }

    if (screenKey === 'menu') {
      this.updateMenuSoulsBadge();
    }

    if (typeof window !== 'undefined' && window.GamepadManager) {
      setTimeout(() => window.GamepadManager.updateContextAndFocus(), 60);
    }
  }

  /**
   * Abre um modal específico
   */
  openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
    if (typeof window !== 'undefined' && window.SoundFX) {
      window.SoundFX.playButtonClick();
    }
    if (typeof window !== 'undefined' && window.GamepadManager) {
      setTimeout(() => window.GamepadManager.updateContextAndFocus(), 60);
    }
  }

  /**
   * Fecha um modal específico
   */
  closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    if (typeof window !== 'undefined' && window.SoundFX) {
      window.SoundFX.playButtonClick();
    }
    if (typeof window !== 'undefined' && window.GamepadManager) {
      setTimeout(() => window.GamepadManager.updateContextAndFocus(), 60);
    }
  }

  /**
   * Abre modal de inspeção e gestão do Deck do jogador (Baralho Ativo vs Baú de Reserva)
   */
  openDeckInspection() {
    this.deckTab = 'active';
    this.pendingSwapReserveCard = null;
    this._renderDeckInspectionView();
    this.openModal(this.modals.deck);
  }

  /**
   * Renderiza a visualização com abas do Modal de Baralho (Ativo vs Reserva)
   */
  _renderDeckInspectionView() {
    const modal = this.modals.deck;
    if (!modal) return;

    const tabsContainer = modal.querySelector('.deck-modal-tabs');
    if (tabsContainer) tabsContainer.style.display = 'flex';

    const btnTabActive = modal.querySelector('#btn-tab-active-deck');
    const btnTabReserve = modal.querySelector('#btn-tab-reserve-deck');
    const tabActiveCount = modal.querySelector('#tab-active-count');
    const tabReserveCount = modal.querySelector('#tab-reserve-count');
    const titleEl = modal.querySelector('#deck-modal-title');
    const countEl = modal.querySelector('#deck-modal-count');
    const hintEl = modal.querySelector('#deck-tab-hint');
    const gridEl = modal.querySelector('#deck-modal-grid');

    const hero = this.gameState.hero || {};
    const deck = hero.deck || [];
    const reserve = hero.reserveDeck || [];
    const maxDeck = hero.maxDeckSize || 15;

    if (tabActiveCount) tabActiveCount.textContent = `${deck.length}/${maxDeck}`;
    if (tabReserveCount) tabReserveCount.textContent = `${reserve.length}`;

    if (btnTabActive) {
      btnTabActive.classList.toggle('active', this.deckTab === 'active');
      btnTabActive.onclick = () => {
        this.deckTab = 'active';
        this.pendingSwapReserveCard = null;
        this._renderDeckInspectionView();
      };
    }

    if (btnTabReserve) {
      btnTabReserve.classList.toggle('active', this.deckTab === 'reserve');
      btnTabReserve.onclick = () => {
        this.deckTab = 'reserve';
        this.pendingSwapReserveCard = null;
        this._renderDeckInspectionView();
      };
    }

    if (hintEl) hintEl.style.display = 'block';

    if (this.deckTab === 'active') {
      if (this.pendingSwapReserveCard) {
        if (titleEl) titleEl.textContent = `Trocar por "${this.pendingSwapReserveCard.name}"`;
        if (countEl) countEl.textContent = `Selecione a carta ativa para trocar`;
        if (hintEl) {
          hintEl.textContent = `Clique na carta do baralho ativo que você deseja mover para a reserva para equipar "${this.pendingSwapReserveCard.name}".`;
        }
      } else {
        if (titleEl) titleEl.textContent = 'Baralho de Combate Ativo';
        if (countEl) countEl.textContent = `${deck.length}/${maxDeck} Cartas`;
        if (hintEl) {
          hintEl.textContent = 'Cartas ativas que serão compradas durante o combate (mínimo 10, máximo 15). Clique em uma carta para movê-la para o Baú de Reserva.';
        }
      }

      if (gridEl) {
        gridEl.innerHTML = '';
        deck.forEach(card => {
          const cardEl = CardRenderer.renderCard(card, {
            playable: this.pendingSwapReserveCard ? true : deck.length > 10,
            onClick: () => {
              if (this.pendingSwapReserveCard) {
                try {
                  this.gameState.swapActiveAndReserveCard(card.uid, this.pendingSwapReserveCard.uid);
                  if (window.SoundFX && typeof window.SoundFX.playCardDraw === 'function') {
                    window.SoundFX.playCardDraw();
                  }
                  this.showToast(`"${card.name}" movida para reserva. "${this.pendingSwapReserveCard.name}" equipada no baralho!`, 'success');
                  this.pendingSwapReserveCard = null;
                  this.updateHud();
                  this._renderDeckInspectionView();
                } catch (err) {
                  this.showToast(err.message, 'error');
                }
                return;
              }
              if (deck.length <= 10) {
                this.showToast('O baralho ativo deve conter no mínimo 10 cartas para combater!', 'warning');
                return;
              }
              try {
                this.gameState.moveCardToReserve(card.uid);
                if (window.SoundFX && typeof window.SoundFX.playCardDraw === 'function') {
                  window.SoundFX.playCardDraw();
                }
                this.showToast(`"${card.name}" guardada no Baú de Reserva.`, 'info');
                this.updateHud();
                this._renderDeckInspectionView();
              } catch (err) {
                this.showToast(err.message, 'error');
              }
            }
          });
          gridEl.appendChild(cardEl);
        });
      }
    } else {
      // Aba Reserva
      if (titleEl) titleEl.textContent = 'Baú de Reserva';
      if (countEl) countEl.textContent = `${reserve.length} Cartas na Reserva`;
      if (hintEl) {
        hintEl.textContent = 'Cartas guardadas no baú. Clique em uma carta para equipá-la ou substituí-la no Baralho de Combate Ativo.';
      }

      if (gridEl) {
        gridEl.innerHTML = '';
        if (reserve.length === 0) {
          gridEl.innerHTML = `
            <div class="empty-reserve-box" style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; color: var(--gold-light); opacity: 0.85;">
              <div style="font-size: 2.2rem; margin-bottom: 8px;">📦</div>
              <strong style="font-size: 1.1rem; display: block; margin-bottom: 6px;">Seu Baú de Reserva está vazio</strong>
              <p style="font-size: 0.9rem; color: #a0aec0; margin: 0 auto; max-width: 420px;">
                Cartas excedentes (quando atingir o teto de 15) ou cartas retiradas do combate ficarão guardadas aqui para quando você quiser adaptá-las.
              </p>
            </div>
          `;
        } else {
          reserve.forEach(card => {
            const cardEl = CardRenderer.renderCard(card, {
              playable: true,
              onClick: () => {
                if (deck.length >= maxDeck) {
                  // Inicia troca direta no baralho cheio
                  this.pendingSwapReserveCard = card;
                  this.deckTab = 'active';
                  this.showToast(`Baralho cheio (${maxDeck}/${maxDeck})! Selecione qual carta ativa substituir por "${card.name}".`, 'info');
                  this._renderDeckInspectionView();
                  return;
                }
                try {
                  this.gameState.moveCardToActiveDeck(card.uid);
                  if (window.SoundFX && typeof window.SoundFX.playCardDraw === 'function') {
                    window.SoundFX.playCardDraw();
                  }
                  this.showToast(`"${card.name}" equipada no Baralho de Combate!`, 'success');
                  this.updateHud();
                  this._renderDeckInspectionView();
                } catch (err) {
                  this.showToast(err.message, 'error');
                }
              }
            });
            gridEl.appendChild(cardEl);
          });
        }
      }
    }
  }

  /**
   * Abre modal genérico de exibição/seleção de cartas do Deck (usado por Mercador/Eventos)
   * @param {Array<Object>} deckCards
   * @param {Object} options
   */
  openDeckModal(deckCards, options = {}) {
    const {
      title = 'Seu Baralho',
      subtitle = `${deckCards.length} cartas`,
      selectable = false,
      onSelect = null
    } = options;

    const modal = this.modals.deck;
    if (!modal) return;

    const tabsContainer = modal.querySelector('.deck-modal-tabs');
    if (tabsContainer) tabsContainer.style.display = 'none';

    const hintEl = modal.querySelector('#deck-tab-hint');
    if (hintEl) hintEl.style.display = 'none';

    const titleEl = modal.querySelector('#deck-modal-title');
    const countEl = modal.querySelector('#deck-modal-count');
    const gridEl = modal.querySelector('#deck-modal-grid');

    if (titleEl) titleEl.textContent = title;
    if (countEl) countEl.textContent = subtitle;

    if (gridEl) {
      gridEl.innerHTML = '';
      deckCards.forEach(card => {
        const cardEl = CardRenderer.renderCard(card, {
          playable: selectable,
          onClick: (c) => {
            if (selectable && onSelect) {
              onSelect(c);
              this.closeModal(modal);
            }
          }
        });
        gridEl.appendChild(cardEl);
      });
    }

    this.openModal(modal);
  }

  /**
   * Abre modal de Substituição Tática de Cartas quando o baralho de combate está cheio (15/15)
   * @param {Object} newCard A nova carta recebida como recompensa
   * @param {function} [onComplete] Callback após substituição ou escolha
   */
  openCardSwapModal(newCard, onComplete = null) {
    const modal = this.modals.cardSwap;
    if (!modal) return;

    // Garante que o GameState esteja explicitamente na tela de recompensa de combate
    if (this.gameState) {
      this.gameState.screen = 'combat_reward';
    }

    const newSlot = modal.querySelector('#card-swap-new-slot');
    const deckGrid = modal.querySelector('#card-swap-deck-grid');
    const btnToReserve = modal.querySelector('#btn-swap-to-reserve');
    const btnToGold = modal.querySelector('#btn-swap-to-gold');
    const maxDeck = this.gameState.hero?.maxDeckSize || 15;
    const badgeEl = modal.querySelector('#swap-modal-badge');
    if (badgeEl) badgeEl.textContent = `Limite: ${this.gameState.hero?.deck?.length || 0}/${maxDeck} Cartas`;

    if (newSlot) {
      newSlot.innerHTML = '';
      const renderedNew = CardRenderer.renderCard(newCard, { playable: false });
      newSlot.appendChild(renderedNew);
    }

    if (btnToReserve) {
      btnToReserve.onclick = () => {
        try {
          if (this.gameState) this.gameState.screen = 'combat_reward';
          const cardTarget = newCard.uid || newCard.id;
          this.gameState.claimCombatReward(cardTarget, null, true);
          if (window.SoundFX && typeof window.SoundFX.playCardDraw === 'function') {
            window.SoundFX.playCardDraw();
          }
          this.closeModal(modal);
          if (this.modals.reward) this.closeModal(this.modals.reward);
          this.showToast(`Carta "${newCard.name}" guardada no Baú de Reserva!`, 'info');
          this.updateHud();
          if (typeof onComplete === 'function') onComplete();
        } catch (err) {
          console.error('Erro ao guardar na reserva:', err);
          this.showToast(err.message, 'error');
        }
      };
    }

    if (btnToGold) {
      btnToGold.onclick = () => {
        try {
          if (this.gameState) this.gameState.screen = 'combat_reward';
          this.gameState.claimCombatReward(null);
          if (window.SoundFX && typeof window.SoundFX.playCoins === 'function') {
            window.SoundFX.playCoins();
          }
          this.closeModal(modal);
          if (this.modals.reward) this.closeModal(this.modals.reward);
          this.showToast('Recompensa convertida em +15 de Ouro!', 'gold');
          this.updateHud();
          if (typeof onComplete === 'function') onComplete();
        } catch (err) {
          console.error('Erro ao converter em ouro:', err);
          this.showToast(err.message, 'error');
        }
      };
    }

    if (deckGrid) {
      deckGrid.innerHTML = '';
      const currentDeck = this.gameState.hero?.deck || [];
      currentDeck.forEach(deckCard => {
        const cardEl = CardRenderer.renderCard(deckCard, {
          playable: true,
          onClick: () => {
            try {
              if (this.gameState) this.gameState.screen = 'combat_reward';
              const cardTarget = newCard.uid || newCard.id;
              const replaceTarget = deckCard.uid || deckCard.id;
              this.gameState.claimCombatReward(cardTarget, replaceTarget, false);
              if (window.SoundFX && typeof window.SoundFX.playCardDraw === 'function') {
                window.SoundFX.playCardDraw();
              }
              this.closeModal(modal);
              if (this.modals.reward) this.closeModal(this.modals.reward);
              this.showToast(`"${deckCard.name}" movida para reserva. "${newCard.name}" equipada no baralho ativo!`, 'success');
              this.updateHud();
              if (typeof onComplete === 'function') onComplete();
            } catch (err) {
              console.error('Erro na substituição de carta:', err);
              this.showToast(err.message, 'error');
            }
          }
        });
        deckGrid.appendChild(cardEl);
      });
    }

    this.openModal(modal);
  }

  /**
   * Abre o Modal da Sala do Tesouro Ancestral com 3 escolhas estratégicas
   * @param {Object} treasureData Dados do tesouro ({ relic, gold, claimed })
   * @param {function} onChoice Callback com a escolha do jogador ('relic' | 'gold' | 'potion')
   */
  openTreasureModal(treasureData, onChoice) {
    const modal = this.modals.treasure;
    if (!modal) return;

    const relicTitleEl = modal.querySelector('#treasure-relic-title');
    const relicDescEl = modal.querySelector('#treasure-relic-desc');
    const goldTitleEl = modal.querySelector('#treasure-gold-title');
    const btnRelic = modal.querySelector('#btn-treasure-relic');
    const btnGold = modal.querySelector('#btn-treasure-gold');
    const btnPotion = modal.querySelector('#btn-treasure-potion');
    const cardRelic = modal.querySelector('#treasure-opt-relic');
    const cardGold = modal.querySelector('#treasure-opt-gold');
    const cardPotion = modal.querySelector('#treasure-opt-potion');

    if (treasureData?.relic) {
      if (relicTitleEl) relicTitleEl.textContent = `👑 ${treasureData.relic.name}`;
      if (relicDescEl) relicDescEl.textContent = treasureData.relic.description;
    }

    if (goldTitleEl) {
      const amount = treasureData?.gold || 100;
      goldTitleEl.textContent = `Baú de Ouro (+${amount} 🪙)`;
    }

    const selectChoice = (type) => {
      this.closeModal(modal);
      if (typeof onChoice === 'function') {
        onChoice(type);
      }
    };

    if (btnRelic) btnRelic.onclick = (e) => { e.stopPropagation(); selectChoice('relic'); };
    if (btnGold) btnGold.onclick = (e) => { e.stopPropagation(); selectChoice('gold'); };
    if (btnPotion) btnPotion.onclick = (e) => { e.stopPropagation(); selectChoice('potion'); };

    if (cardRelic) cardRelic.onclick = () => selectChoice('relic');
    if (cardGold) cardGold.onclick = () => selectChoice('gold');
    if (cardPotion) cardPotion.onclick = () => selectChoice('potion');

    this.openModal(modal);
  }

  /**
   * Abre a tela/modal de Recompensa de Combate pós-vitória (Fase 4 - Ouro, Relíquias e Cartas)
   * @param {Object} [options]
   */
  openCombatReward(options = {}) {
    const rewardModal = this.modals.reward;
    if (!rewardModal) return;

    // 1. Atualiza e exibe o banner de ouro coletado (Fase 4)
    const goldBox = rewardModal.querySelector('#reward-gold-box');
    const goldAmountEl = rewardModal.querySelector('#reward-gold-amount');
    const goldValue = options.gold ?? this.gameState?.combatRewardGold ?? 20;

    if (goldAmountEl) {
      goldAmountEl.textContent = goldValue;
    }
    if (goldBox) {
      goldBox.style.display = 'flex';
    }

    // 2. Toca o efeito sonoro de moedas
    if (typeof window !== 'undefined' && window.SoundFX && typeof window.SoundFX.playCoins === 'function') {
      try {
        window.SoundFX.playCoins();
      } catch (e) {
        console.warn('Erro ao reproduzir som de moedas:', e);
      }
    }

    // 3. Atualiza imediatamente o HUD
    this.updateHud();

    // 4. Abre o modal de recompensa
    this.openModal(rewardModal);
  }

  /**
   * Abre o seletor visual de cartas do baralho para forja/aprimoramento (+) (Fase 4)
   * @param {function} onCardSelect Callback com (cardUid, card) ao selecionar
   */
  openForgeModal(onCardSelect) {
    const modalEl = this.modals.deckSelector || document.getElementById('modal-deck-selector');
    if (!modalEl) return;

    const gridEl = modalEl.querySelector('#deck-selector-grid');
    const subtitleEl = modalEl.querySelector('#deck-selector-subtitle');
    const titleEl = modalEl.querySelector('#deck-selector-title');

    if (titleEl) titleEl.textContent = 'Forjar & Aprimorar Carta (+)';
    if (subtitleEl) subtitleEl.textContent = 'Escolha uma carta do seu baralho para forjar sua versão aprimorada (+):';

    if (gridEl) {
      gridEl.innerHTML = '';
      const deck = this.gameState.hero?.deck || [];

      deck.forEach(card => {
        const isAlreadyUpgraded = Boolean(card.isUpgraded);
        const cardEl = CardRenderer.renderCard(card, {
          playable: !isAlreadyUpgraded,
          disabled: isAlreadyUpgraded,
          customClass: isAlreadyUpgraded ? 'already-upgraded' : 'can-forge',
          onClick: (c) => {
            if (isAlreadyUpgraded) {
              this.showToast(`A carta "${card.name}" já está aprimorada (+)`, 'warning');
              return;
            }
            if (typeof onCardSelect === 'function') {
              onCardSelect(c.uid, c);
            }
            this.closeModal(modalEl);
          }
        });

        if (isAlreadyUpgraded) {
          cardEl.setAttribute('data-tooltip', 'Esta carta já foi aprimorada (+)');
        } else {
          cardEl.setAttribute('data-tooltip', 'Clique para forjar e aprimorar esta carta (+)');
        }

        gridEl.appendChild(cardEl);
      });
    }

    this.openModal(modalEl);
  }

  /**
   * Executa animação visual e sonora de forja
   */
  triggerForgeFx() {
    const flashEl = document.getElementById('combat-screen-flash');
    if (flashEl) {
      flashEl.classList.add('active');
      setTimeout(() => flashEl.classList.remove('active'), 250);
    }
  }

  /**
   * Abre o Modal de Seleção de Classe de Herói
   * @param {function} onSelectClass Callback com a classe escolhida ('warrior' | 'rogue' | 'mage')
   */
  openClassSelectModal(onSelectClass) {
    const modalEl = this.modals.classSelect;
    if (!modalEl) {
      if (typeof onSelectClass === 'function') onSelectClass('warrior');
      return;
    }

    const classCards = modalEl.querySelectorAll('.hero-class-card');
    classCards.forEach(cardEl => {
      const classId = cardEl.getAttribute('data-class') || 'warrior';
      const selectBtn = cardEl.querySelector('.btn-select-class');

      const triggerSelect = (e) => {
        if (e) e.stopPropagation();
        this.closeModal(modalEl);
        if (typeof onSelectClass === 'function') {
          onSelectClass(classId);
        }
      };

      if (selectBtn) selectBtn.onclick = triggerSelect;
      cardEl.onclick = triggerSelect;
    });

    this.openModal(modalEl);
  }

  /**
   * Abre o Modal de Como Jogar / Guia
   */
  openGuideModal() {
    this.openModal(this.modals.guide);
  }

  /**
   * Alterna som ligado/mudo e atualiza visual do botão HUD
   */
  toggleAudioMute() {
    if (typeof window === 'undefined' || !window.SoundFX) return;

    const isMuted = window.SoundFX.toggleMute();
    const assets = window.GameAssets || {};
    const svgs = assets.SVGS || {};

    if (this.btnToggleMute) {
      if (isMuted) {
        this.btnToggleMute.classList.add('muted');
        this.btnToggleMute.innerHTML = svgs.volumeMute || '🔇';
        this.btnToggleMute.setAttribute('data-tooltip', 'Som Desativado');
      } else {
        this.btnToggleMute.classList.remove('muted');
        this.btnToggleMute.innerHTML = svgs.volumeOn || '🔊';
        this.btnToggleMute.setAttribute('data-tooltip', 'Som Ativado');
      }
    }
  }

  /**
   * Exibe notificação temporária Toast no canto da tela
   */
  showToast(message, type = 'info') {
    if (!this.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  /**
   * Abre o Modal da Loja do Mercador Renegado com catálogo interativo
   * @param {Object} params
   * @param {Object} params.merchantData Dados do estoque { cards, relics, removalCost, removalUsed, quote }
   * @param {function} params.onBuyCard Callback ao comprar carta (cardId)
   * @param {function} params.onBuyRelic Callback ao comprar relíquia (relicId)
   * @param {function} params.onBuyRemoval Callback ao pagar serviço de remoção (cardUid)
   * @param {function} params.onLeave Callback ao sair do mercador
   */
  openMerchantModal({ merchantData, onBuyCard, onBuyRelic, onBuyRemoval, onLeave }) {
    const modalEl = this.modals.merchant;
    if (!modalEl || !merchantData) return;

    const goldEl = modalEl.querySelector('#merchant-player-gold');
    const speechEl = modalEl.querySelector('#merchant-speech-bubble');
    const cardsGrid = modalEl.querySelector('#merchant-cards-grid');
    const relicsGrid = modalEl.querySelector('#merchant-relics-grid');
    const btnRemoveCard = modalEl.querySelector('#btn-merchant-remove-card');
    const purificationCard = modalEl.querySelector('.purification-card');
    const btnLeave = modalEl.querySelector('#btn-leave-merchant');

    const assets = (typeof window !== 'undefined' && window.GameAssets) || {};
    const svgs = assets.SVGS || {};

    const relicSvgMap = {
      amulet_strength: svgs.relic_strength || svgs.sword,
      blood_chalice: svgs.relic_blood || svgs.heal,
      spike_shield: svgs.relic_spikes || svgs.shield,
      ancient_orb: svgs.relic_mana || svgs.magic,
      poison_vial: svgs.relic_poison || svgs.relic_blood || svgs.magic,
      fortune_bag: svgs.relic_fortune || svgs.coins || svgs.crown,
      ether_cloak: svgs.relic_cloak || svgs.shield,
      whetstone: svgs.relic_whetstone || svgs.sword
    };

    const updateMerchantView = () => {
      if (goldEl) {
        goldEl.textContent = this.gameState.hero.gold || 0;
      }
      this.updateHud();

      // 1. Renderiza Cartas à Venda
      if (cardsGrid) {
        cardsGrid.innerHTML = '';
        merchantData.cards.forEach(cardItem => {
          const cardDef = CARDS[cardItem.id] || cardItem;
          const wrapper = document.createElement('div');
          wrapper.className = `merchant-card-wrapper ${cardItem.bought ? 'is-sold' : ''}`;

          const cardDom = CardRenderer.renderCard(cardDef, {
            selectable: false
          });
          wrapper.appendChild(cardDom);

          const buyBtn = document.createElement('button');
          buyBtn.className = 'btn btn-primary-gold btn-buy-card';
          buyBtn.innerHTML = `<span>Comprar</span> <span>🪙 ${cardItem.price}</span>`;
          if (cardItem.bought) {
            buyBtn.disabled = true;
            buyBtn.textContent = 'Esgotado';
          } else if (this.gameState.hero.gold < cardItem.price) {
            buyBtn.classList.add('btn-disabled');
            buyBtn.title = 'Ouro insuficiente';
          }

          buyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (onBuyCard) {
              const res = onBuyCard(cardItem.id);
              if (res.success) {
                if (typeof window !== 'undefined' && window.SoundFX && window.SoundFX.playCoins) {
                  window.SoundFX.playCoins();
                }
                if (speechEl && res.quote) speechEl.textContent = `"${res.quote}"`;
                this.showToast(res.message, 'success');
                updateMerchantView();
              } else {
                this.showToast(res.message, 'error');
              }
            }
          });

          wrapper.appendChild(buyBtn);
          cardsGrid.appendChild(wrapper);
        });
      }

      // 2. Renderiza Relíquias à Venda
      if (relicsGrid) {
        relicsGrid.innerHTML = '';
        merchantData.relics.forEach(relicItem => {
          const card = document.createElement('div');
          card.className = `merchant-relic-card ${relicItem.bought ? 'is-sold' : ''}`;

          const iconBox = document.createElement('div');
          iconBox.className = 'merchant-relic-icon-box';
          const rSvg = relicSvgMap[relicItem.id] || svgs.relic_strength || svgs.shield;
          iconBox.innerHTML = rSvg;

          const info = document.createElement('div');
          info.className = 'merchant-relic-info';
          info.innerHTML = `
            <div class="merchant-relic-name">${relicItem.name}</div>
            <div class="merchant-relic-desc">${relicItem.description}</div>
          `;

          const action = document.createElement('div');
          action.className = 'merchant-relic-action';
          const buyBtn = document.createElement('button');
          buyBtn.className = 'btn btn-primary-gold btn-buy-relic';
          buyBtn.innerHTML = `<span>Comprar</span> <span>🪙 ${relicItem.price}</span>`;
          if (relicItem.bought) {
            buyBtn.disabled = true;
            buyBtn.textContent = 'Comprado';
          } else if (this.gameState.hero.gold < relicItem.price) {
            buyBtn.classList.add('btn-disabled');
            buyBtn.title = 'Ouro insuficiente';
          }

          buyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (onBuyRelic) {
              const res = onBuyRelic(relicItem.id);
              if (res.success) {
                if (typeof window !== 'undefined' && window.SoundFX && window.SoundFX.playCoins) {
                  window.SoundFX.playCoins();
                }
                if (speechEl && res.quote) speechEl.textContent = `"${res.quote}"`;
                this.showToast(res.message, 'success');
                updateMerchantView();
              } else {
                this.showToast(res.message, 'error');
              }
            }
          });

          action.appendChild(buyBtn);
          card.appendChild(iconBox);
          card.appendChild(info);
          card.appendChild(action);
          relicsGrid.appendChild(card);
        });
      }

      // 3. Purificação de Deck
      if (btnRemoveCard && purificationCard) {
        if (merchantData.removalUsed) {
          purificationCard.classList.add('is-used');
          btnRemoveCard.disabled = true;
          btnRemoveCard.innerHTML = '<span>Purificado</span>';
        } else {
          purificationCard.classList.remove('is-used');
          btnRemoveCard.disabled = false;
          btnRemoveCard.innerHTML = `<span>Purificar Carta</span><span class="service-price">🪙 ${merchantData.removalCost} Ouro</span>`;
        }
      }
    };

    if (speechEl && merchantData.quote) {
      speechEl.textContent = `"${merchantData.quote}"`;
    }

    if (btnRemoveCard) {
      btnRemoveCard.onclick = () => {
        if (merchantData.removalUsed) return;
        if (this.gameState.hero.gold < merchantData.removalCost) {
          this.showToast(`Ouro insuficiente! Necessário ${merchantData.removalCost} ouro.`, 'error');
          return;
        }

        // Abre modal para o jogador escolher qual carta quer remover
        this.openDeckModal(this.gameState.hero.deck, {
          title: '🔥 Altar de Incineração',
          subtitle: 'Selecione uma carta para ser permanentemente queimada',
          selectable: true,
          onSelect: (selectedCard) => {
            this.closeModal(this.modals.deck);
            if (onBuyRemoval) {
              const res = onBuyRemoval(selectedCard.uid);
              if (res.success) {
                if (typeof window !== 'undefined' && window.SoundFX && window.SoundFX.playCoins) {
                  window.SoundFX.playCoins();
                }
                if (speechEl && res.quote) speechEl.textContent = `"${res.quote}"`;
                this.showToast(res.message, 'success');
                updateMerchantView();
              } else {
                this.showToast(res.message, 'error');
              }
            }
          }
        });
      };
    }

    if (btnLeave) {
      btnLeave.onclick = () => {
        this.closeModal(modalEl);
        if (onLeave) onLeave();
      };
    }

    updateMerchantView();
    this.openModal(modalEl);
  }

  /**
   * Abre o Modal de Evento Narrativo Misterioso com escolhas dinâmicas (Fase 4)
   * @param {Object} params
   * @param {Object} params.eventData Dados do evento narrativo ativo
   * @param {function} params.onChoice Callback executado com o choiceId
   * @param {function} params.onLeave Callback executado ao prosseguir
   */
  openEventModal({ eventData, onChoice, onLeave }) {
    const modalEl = this.modals.event;
    if (!modalEl || !eventData) return;

    const titleEl = modalEl.querySelector('#event-title');
    const headerIconEl = modalEl.querySelector('#event-header-icon');
    const illustrationBox = modalEl.querySelector('#event-illustration-box');
    const storyTextEl = modalEl.querySelector('#event-story-text');
    const choicesContainer = modalEl.querySelector('#event-choices-container');
    const resolutionBox = modalEl.querySelector('#event-resolution-box');
    const resolutionTitle = modalEl.querySelector('#event-resolution-title');
    const resolutionText = modalEl.querySelector('#event-resolution-text');
    const footerEl = modalEl.querySelector('#event-modal-footer');
    const btnLeave = modalEl.querySelector('#btn-leave-event');

    const assets = (typeof window !== 'undefined' && window.GameAssets) || {};
    const svgs = assets.SVGS || {};

    if (titleEl) titleEl.textContent = eventData.title;
    if (headerIconEl) headerIconEl.textContent = '❓';
    if (storyTextEl) storyTextEl.textContent = eventData.description;

    if (illustrationBox) {
      const eventSvg = svgs[eventData.icon] || svgs.event_icon || svgs.altar || '❓';
      illustrationBox.innerHTML = typeof eventSvg === 'string' && eventSvg.startsWith('<svg') ? eventSvg : '❓';
    }

    // Reset estado de resolução
    if (resolutionBox) resolutionBox.style.display = 'none';
    if (footerEl) footerEl.style.display = 'none';
    if (choicesContainer) {
      choicesContainer.style.display = 'flex';
      choicesContainer.innerHTML = '';
    }

    const hero = this.gameState.hero;

    // Toca som de evento misterioso
    if (typeof window !== 'undefined' && window.SoundFX && window.SoundFX.playMysteryEvent) {
      window.SoundFX.playMysteryEvent();
    }

    if (choicesContainer && Array.isArray(eventData.choices)) {
      eventData.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'event-choice-btn';

        const isAvailable = typeof choice.condition === 'function' ? choice.condition(hero) : true;
        if (!isAvailable) {
          btn.classList.add('is-disabled');
          btn.disabled = true;
        }

        const titleDiv = document.createElement('div');
        titleDiv.className = 'event-choice-title';
        titleDiv.innerHTML = `<span>🔹</span> <span>${choice.text}</span>`;

        const detailDiv = document.createElement('div');
        detailDiv.className = 'event-choice-detail';
        detailDiv.textContent = isAvailable ? choice.detail : (choice.unavailableText || 'Indisponível no momento.');

        btn.appendChild(titleDiv);
        btn.appendChild(detailDiv);

        btn.addEventListener('click', () => {
          if (!isAvailable) return;

          // Desativa todas as escolhas para evitar cliques duplos
          const allBtns = choicesContainer.querySelectorAll('.event-choice-btn');
          allBtns.forEach(b => {
            b.disabled = true;
            b.style.pointerEvents = 'none';
          });

          if (onChoice) {
            try {
              const res = onChoice(choice.id);
              if (res) {
                if (resolutionBox) {
                  resolutionBox.style.display = 'block';
                  if (resolutionTitle) resolutionTitle.textContent = res.title || 'Destino Selado';
                  if (resolutionText) resolutionText.textContent = res.message || res.detail || '';
                }
                if (footerEl) {
                  footerEl.style.display = 'flex';
                }
                this.updateHud();
                this.showToast(res.title || 'Evento concluído!', 'success');
              }
            } catch (err) {
              this.showToast(err.message, 'error');
            }
          }
        });

        choicesContainer.appendChild(btn);
      });
    }

    if (btnLeave) {
      btnLeave.onclick = () => {
        this.closeModal(modalEl);
        if (onLeave) onLeave();
      };
    }

    this.openModal(modalEl);
  }

  /**
   * Abre o modal de transição de ato épico com celebração de vitória e recuperação de fôlego (+35% HP)
   * @param {Object} params
   * @param {Object} params.transitionData
   * @param {function} params.onProceed Callback disparado ao clicar em descer para o próximo ato
   */
  openActTransitionModal({ transitionData, onProceed }) {
    const modal = this.modals.actTransition;
    if (!modal) return;

    const titleEl = modal.querySelector('#act-transition-title');
    const badgeEl = modal.querySelector('#act-transition-badge');
    const trophyBox = modal.querySelector('#act-trophy-box');
    const headlineEl = modal.querySelector('#act-transition-headline');
    const loreEl = modal.querySelector('#act-transition-lore');
    const recoveryValueEl = modal.querySelector('#act-recovery-value');
    const recoveryTextEl = modal.querySelector('#act-recovery-text');
    const nextNameEl = modal.querySelector('#act-next-name');
    const nextBossEl = modal.querySelector('#act-next-boss');
    const btnProceed = modal.querySelector('#btn-proceed-act');
    const btnTextEl = modal.querySelector('#btn-proceed-act-text');

    const completedAct = (transitionData.act || 2) - 1;
    const nextAct = transitionData.act || 2;
    const theme = transitionData.actTheme;

    if (titleEl) titleEl.textContent = `ATO ${completedAct} CONQUISTADO!`;
    if (badgeEl) badgeEl.textContent = `VITÓRIA DO ATO ${completedAct}`;

    if (trophyBox) {
      trophyBox.innerHTML = completedAct === 1 ? '🗿' : '💀';
    }

    if (headlineEl) {
      headlineEl.textContent = completedAct === 1
        ? 'O Golem Guardião Rúnico Foi Reduzido a Escombros!'
        : 'O Lich Rei dos Ossos Teve Sua Filactéria Destruída!';
    }

    if (loreEl) {
      loreEl.textContent = completedAct === 1
        ? 'As catacumbas ancestrais estremecem em silêncio. Um caminho secreto de obsidiana se abre, descendo para as minas profundas...'
        : 'A névoa necromântica se dissipa das minas. O calor sufocante e o cheiro de enxofre revelam a entrada do Covil Vulcânico do Tirano!';
    }

    if (recoveryValueEl) recoveryValueEl.textContent = `+${transitionData.healAmount} HP`;
    if (recoveryTextEl) {
      recoveryTextEl.textContent = `Você descansa brevemente e recupera +${transitionData.healAmount} HP (${transitionData.newHp}/${transitionData.maxHp} HP). Suas forças foram restauradas!`;
    }

    if (nextNameEl && theme) nextNameEl.textContent = theme.name;
    if (nextBossEl && theme) nextBossEl.textContent = `Chefe Iminente: ${theme.bossName}`;

    if (btnTextEl) btnTextEl.textContent = `Descer para o Ato ${nextAct} ➔`;

    let proceedTriggered = false;
    const safeProceed = () => {
      if (proceedTriggered) return;
      proceedTriggered = true;
      this.closeModal(modal);
      if (typeof onProceed === 'function') {
        onProceed();
      }
    };

    if (btnProceed) {
      const newBtn = btnProceed.cloneNode(true);
      btnProceed.parentNode.replaceChild(newBtn, btnProceed);
      newBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (window.SoundFX) window.SoundFX.playButtonClick();
        safeProceed();
      });
    }

    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      const newClose = closeBtn.cloneNode(true);
      closeBtn.parentNode.replaceChild(newClose, closeBtn);
      newClose.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        safeProceed();
      });
    }

    this.openModal(modal);
  }

  /**
   * Atualiza o contador de almas no botão do menu principal
   */
  updateMenuSoulsBadge() {
    const meta = getMetaProgression();
    const countEl = document.getElementById('menu-souls-count');
    if (countEl) {
      countEl.textContent = `${meta.souls} Almas`;
    }
  }

  /**
   * Abre o Modal do Santuário de Talentos Ancestrais
   */
  openTalentsModal() {
    const modal = this.modals.talents;
    if (!modal) return;

    this.renderTalentsModal();

    // Bind botões do modal se ainda não vinculados
    const btnClose = modal.querySelector('#btn-close-talents');
    if (btnClose && !btnClose.dataset.bound) {
      btnClose.dataset.bound = 'true';
      btnClose.addEventListener('click', () => this.closeModal(modal));
    }

    const btnCloseHeader = modal.querySelector('#btn-close-talents-header');
    if (btnCloseHeader && !btnCloseHeader.dataset.bound) {
      btnCloseHeader.dataset.bound = 'true';
      btnCloseHeader.addEventListener('click', () => this.closeModal(modal));
    }

    const btnReset = modal.querySelector('#btn-reset-talents');
    if (btnReset && !btnReset.dataset.bound) {
      btnReset.dataset.bound = 'true';
      btnReset.addEventListener('click', () => this.resetTalentsFromModal());
    }

    this.openModal(modal);
  }

  /**
   * Renderiza a grade de cartas de talentos e saldo de almas no modal
   */
  renderTalentsModal() {
    const modal = this.modals.talents;
    if (!modal) return;

    const meta = getMetaProgression();
    const soulsBalanceEl = modal.querySelector('#modal-souls-balance');
    if (soulsBalanceEl) {
      soulsBalanceEl.textContent = `${meta.souls} Almas`;
    }
    this.updateMenuSoulsBadge();

    const gridEl = modal.querySelector('#talents-grid');
    if (!gridEl) return;
    gridEl.innerHTML = '';

    Object.values(TALENT_DEFINITIONS).forEach(def => {
      const currentLevel = meta.talents[def.id] || 0;
      const isMax = currentLevel >= def.maxLevel;
      const nextCost = isMax ? null : def.costs[currentLevel];
      const canAfford = !isMax && meta.souls >= nextCost;

      const card = document.createElement('div');
      card.className = 'talent-card';

      // Pips de nível
      let pipsHtml = '<div class="talent-pips-row">';
      for (let i = 1; i <= def.maxLevel; i++) {
        pipsHtml += `<div class="talent-pip ${i <= currentLevel ? 'active' : ''}"></div>`;
      }
      pipsHtml += '</div>';

      const currentBonusText = currentLevel > 0
        ? def.getBonusText(currentLevel)
        : 'Nenhum bônus ativo';

      const nextPreviewText = isMax
        ? '✦ Poder Ancestral Pleno Atingido!'
        : `Próximo nível: ${def.getBonusText(currentLevel + 1)}`;

      card.innerHTML = `
        <div class="talent-card-header">
          <div class="talent-title-group">
            <span class="talent-icon">${def.icon}</span>
            <div>
              <div class="talent-name">${def.name}</div>
              <div class="talent-level-badge">Nv. ${currentLevel} / ${def.maxLevel}</div>
            </div>
          </div>
        </div>
        ${pipsHtml}
        <div class="talent-desc">${def.description}</div>
        <div class="talent-bonus-preview">
          <div><strong>Atual:</strong> ${currentBonusText}</div>
          <div style="color: ${isMax ? '#fae48c' : '#c4b5fd'}; margin-top: 2px;">${nextPreviewText}</div>
        </div>
        <div class="talent-footer">
          ${isMax ? `
            <button class="btn btn-talent-upgrade btn-talent-max" disabled>
              <span>⭐ NÍVEL MÁXIMO</span>
            </button>
          ` : `
            <button class="btn btn-talent-upgrade btn-upgrade-node" ${canAfford ? '' : 'disabled'}>
              <span>Aprimorar</span>
              <span>🔮 ${nextCost}</span>
            </button>
          `}
        </div>
      `;

      if (!isMax) {
        const upgradeBtn = card.querySelector('.btn-upgrade-node');
        if (upgradeBtn) {
          upgradeBtn.addEventListener('click', () => {
            const res = upgradeTalent(def.id);
            if (res.success) {
              if (typeof window !== 'undefined' && window.SoundFX && window.SoundFX.playBuff) {
                window.SoundFX.playBuff();
              }
              this.showToast(res.message, 'success');
              this.renderTalentsModal();
            } else {
              this.showToast(res.message, 'error');
            }
          });
        }
      }

      gridEl.appendChild(card);
    });
  }

  /**
   * Reseta todos os talentos e devolve todas as Essências de Almas
   */
  resetTalentsFromModal() {
    const meta = getMetaProgression();
    const hasAny = Object.values(meta.talents).some(lvl => lvl > 0);
    if (!hasAny) {
      this.showToast('Nenhum talento foi adquirido para redefinir.', 'info');
      return;
    }

    if (confirm('Deseja redefinir todos os talentos e reembolsar 100% das Essências de Almas investidas?')) {
      const res = resetTalents();
      if (typeof window !== 'undefined' && window.SoundFX && window.SoundFX.playCoins) {
        window.SoundFX.playCoins();
      }
      this.showToast(`✨ Talentos redefinidos! +🔮 ${res.refundedSouls} Almas reembolsadas.`, 'success');
      this.renderTalentsModal();
    }
  }
}


/* --- MÓDULO: js/ui/GamepadManager.js --- */
/**
 * js/ui/GamepadManager.js
 * Gerenciador Completo de Controle de Videogame (Gamepad / Joystick) para "Cards e Dungeons".
 * Suporte nativo a controles Xbox (XInput), PlayStation (DualShock / DualSense) e genéricos.
 * Implementa navegação 2D, seleção tátil de cartas, atalhos de combate, travessia de mapa e HUD de dicas.
 */

class GamepadManager {
  /**
   * @param {Object} options
   * @param {Object} options.app Instância principal de GameApp
   * @param {Object} options.gameState Instância de GameState
   * @param {Object} options.viewManager Instância de ViewManager
   * @param {Object} options.combatRenderer Instância de CombatRenderer
   * @param {Object} options.mapRenderer Instância de MapRenderer
   */
  constructor({ app, gameState, viewManager, combatRenderer, mapRenderer }) {
    this.app = app;
    this.gameState = gameState;
    this.viewManager = viewManager;
    this.combatRenderer = combatRenderer;
    this.mapRenderer = mapRenderer;

    // Estado do Gamepad
    this.connectedGamepadIndex = null;
    this.gamepadType = 'xbox'; // 'xbox', 'playstation', 'nintendo', 'generic'
    this.isGamepadMode = false;
    this.focusedElement = null;

    // Estado dos Botões e Eixos (para detecção de justPressed e repetição)
    this.prevButtons = [];
    this.prevAxes = [0, 0, 0, 0];

    // Temporizadores de repetição de navegação direcional
    this.repeatTimers = {
      up: { active: false, timer: 0 },
      down: { active: false, timer: 0 },
      left: { active: false, timer: 0 },
      right: { active: false, timer: 0 }
    };
    this.INITIAL_REPEAT_DELAY = 280; // ms antes do primeiro repeat
    this.REPEAT_INTERVAL = 130;      // ms entre repeats contínuos
    this.lastFrameTime = performance.now();

    // Contexto e HUD
    this.currentContext = null;
    this.hudBarEl = null;

    this._initHudBar();
    this._bindEvents();
    this._startLoop();
  }

  /* ==========================================================================
     INICIALIZAÇÃO & EVENTOS DE CONEXÃO
     ========================================================================== */

  _initHudBar() {
    let bar = document.getElementById('gamepad-hud-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'gamepad-hud-bar';
      bar.className = 'gamepad-hud-bar';
      bar.innerHTML = '<div class="gamepad-hud-content" id="gamepad-hud-content"></div>';
      const appContainer = document.getElementById('app') || document.body;
      appContainer.appendChild(bar);
    }
    this.hudBarEl = bar;
  }

  _bindEvents() {
    // Eventos nativos de conexão da HTML5 Gamepad API
    window.addEventListener('gamepadconnected', (e) => {
      this._onGamepadConnected(e.gamepad);
    });

    window.addEventListener('gamepaddisconnected', (e) => {
      this._onGamepadDisconnected(e.gamepad);
    });

    // Detecção de mouse para alternância transparente Gamepad <-> Mouse
    window.addEventListener('mousemove', (e) => {
      // Ignora pequenos ruídos
      if (Math.abs(e.movementX) > 2 || Math.abs(e.movementY) > 2) {
        this.disableGamepadMode();
      }
    });

    window.addEventListener('mousedown', () => {
      this.disableGamepadMode();
    });

    // Tecla F3 ou Select para teste rápido de alternância
    window.addEventListener('keydown', (e) => {
      if (e.key === 'F3') {
        this.enableGamepadMode();
      }
    });
  }

  _onGamepadConnected(gamepad) {
    this.connectedGamepadIndex = gamepad.index;
    this.gamepadType = this._detectGamepadType(gamepad.id);
    
    const typeNames = {
      xbox: 'Xbox',
      playstation: 'PlayStation',
      nintendo: 'Nintendo',
      generic: 'Genérico'
    };
    const friendlyName = typeNames[this.gamepadType] || 'Gamepad';

    if (this.viewManager && typeof this.viewManager.showToast === 'function') {
      this.viewManager.showToast(`🎮 Controle Conectado: ${friendlyName} (${gamepad.id.slice(0, 24)}...)`, 'info');
    }

    this.enableGamepadMode();
  }

  _onGamepadDisconnected(gamepad) {
    if (this.connectedGamepadIndex === gamepad.index) {
      this.connectedGamepadIndex = null;
      if (this.viewManager && typeof this.viewManager.showToast === 'function') {
        this.viewManager.showToast('Controle desconectado. Usando mouse.', 'warning');
      }
      this.disableGamepadMode();
    }
  }

  _detectGamepadType(idString) {
    const s = (idString || '').toLowerCase();
    if (s.includes('playstation') || s.includes('dualshock') || s.includes('dualsense') || s.includes('054c') || s.includes('sony')) {
      return 'playstation';
    }
    if (s.includes('nintendo') || s.includes('pro controller') || s.includes('joy-con')) {
      return 'nintendo';
    }
    if (s.includes('xbox') || s.includes('xinput') || s.includes('045e') || s.includes('microsoft')) {
      return 'xbox';
    }
    return 'xbox'; // Padrão recomendado
  }

  enableGamepadMode() {
    this.isGamepadMode = true;
    document.body.classList.add('gamepad-mode');
    if (this.hudBarEl) {
      this.hudBarEl.style.display = 'flex';
    }
    this.updateContextAndFocus();
    this.updateHudHints();
  }

  disableGamepadMode() {
    if (!this.isGamepadMode) return;
    this.isGamepadMode = false;
    document.body.classList.remove('gamepad-mode');
    this._clearFocusHighlights();
    if (this.hudBarEl) {
      this.hudBarEl.style.display = 'none';
    }
  }

  /* ==========================================================================
     LOOP PRINCIPAL DE POLLING (requestAnimationFrame)
     ========================================================================== */

  _startLoop() {
    const raf = typeof requestAnimationFrame !== 'undefined' 
      ? requestAnimationFrame 
      : (typeof window !== 'undefined' && window.requestAnimationFrame) 
        ? window.requestAnimationFrame 
        : (cb) => setTimeout(() => cb((typeof performance !== 'undefined' ? performance.now() : Date.now())), 16);

    const loop = (currentTime) => {
      if (this.destroyed) return;
      const now = currentTime || (typeof performance !== 'undefined' ? performance.now() : Date.now());
      const dt = now - this.lastFrameTime;
      this.lastFrameTime = now;

      this._pollGamepads(dt);
      raf(loop);
    };
    raf(loop);
  }

  destroy() {
    this.destroyed = true;
    this.disableGamepadMode();
  }

  _pollGamepads(dt) {
    const gamepads = typeof navigator.getGamepads === 'function' ? navigator.getGamepads() : [];
    let activePad = null;

    // Busca o controle ativo conectado
    if (this.connectedGamepadIndex !== null && gamepads[this.connectedGamepadIndex]) {
      activePad = gamepads[this.connectedGamepadIndex];
    } else {
      for (let i = 0; i < gamepads.length; i++) {
        if (gamepads[i]) {
          activePad = gamepads[i];
          if (this.connectedGamepadIndex === null) {
            this._onGamepadConnected(activePad);
          }
          break;
        }
      }
    }

    if (!activePad) {
      return;
    }

    // Leitura dos botões e eixos
    const buttons = activePad.buttons || [];
    const axes = activePad.axes || [];

    // Detecção de ativação por input (se o usuário mexer no controle, ativa modo gamepad)
    let anyInputActive = false;
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i]?.pressed) anyInputActive = true;
    }
    if (Math.abs(axes[0] || 0) > 0.35 || Math.abs(axes[1] || 0) > 0.35) {
      anyInputActive = true;
    }

    if (anyInputActive && !this.isGamepadMode) {
      this.enableGamepadMode();
    }

    if (!this.isGamepadMode) {
      this.prevButtons = buttons.map(b => !!b?.pressed);
      this.prevAxes = [...axes];
      return;
    }

    // Processa entradas se o modo Gamepad estiver ativo
    this._processInputs(buttons, axes, dt);

    this.prevButtons = buttons.map(b => !!b?.pressed);
    this.prevAxes = [...axes];
  }

  _isJustPressed(btnIndex, buttons) {
    const isNow = !!buttons[btnIndex]?.pressed;
    const wasThen = !!this.prevButtons[btnIndex];
    return isNow && !wasThen;
  }

  /* ==========================================================================
     PROCESSAMENTO DE BOTÕES E NAVEGAÇÃO
     ========================================================================== */

  _processInputs(buttons, axes, dt) {
    // 1. Mapeamento Direcional (D-Pad + Analógico Esquerdo)
    const axisX = axes[0] || 0;
    const axisY = axes[1] || 0;
    const DEADZONE = 0.40;

    const rawUp = !!buttons[12]?.pressed || axisY < -DEADZONE;
    const rawDown = !!buttons[13]?.pressed || axisY > DEADZONE;
    const rawLeft = !!buttons[14]?.pressed || axisX < -DEADZONE;
    const rawRight = !!buttons[15]?.pressed || axisX > DEADZONE;

    // Processa navegações com suporte a auto-repeat
    if (this._updateDirectionTimer('up', rawUp, dt)) this.navigate('up');
    if (this._updateDirectionTimer('down', rawDown, dt)) this.navigate('down');
    if (this._updateDirectionTimer('left', rawLeft, dt)) this.navigate('left');
    if (this._updateDirectionTimer('right', rawRight, dt)) this.navigate('right');

    // 2. Botão A / ✕ (Cross) -> Confirmar / Jogar Carta / Selecionar Nó
    if (this._isJustPressed(0, buttons)) {
      this.handleAction('confirm');
    }

    // 3. Botão B / ◯ (Circle) -> Voltar / Cancelar / Pular / Fechar Modal
    if (this._isJustPressed(1, buttons)) {
      this.handleAction('cancel');
    }

    // 4. Botão X / ▢ (Square) -> Ação Rápida de Combate (Finalizar Turno) / Pular Recompensa
    if (this._isJustPressed(2, buttons)) {
      this.handleAction('actionX');
    }

    // 5. Botão Y / △ (Triangle) -> Inspecionar Baralho / Informações
    if (this._isJustPressed(3, buttons)) {
      this.handleAction('actionY');
    }

    // 6. Bumpers (LB / RB) -> Navegação rápida de cartas / Abas
    if (this._isJustPressed(4, buttons)) {
      this.handleAction('bumperLeft');
    }
    if (this._isJustPressed(5, buttons)) {
      this.handleAction('bumperRight');
    }

    // 7. Triggers (LT / RT) -> Cinto de Poções / Zoom
    if (this._isJustPressed(6, buttons) || (axes[2] > 0.5 && this.prevAxes[2] <= 0.5)) {
      this.handleAction('triggerLeft');
    }
    if (this._isJustPressed(7, buttons) || (axes[3] > 0.5 && this.prevAxes[3] <= 0.5)) {
      this.handleAction('triggerRight');
    }

    // 8. Start / Options (botão 9) -> Atalho para Baralho ou Tela Cheia (F11)
    if (this._isJustPressed(9, buttons)) {
      this.handleAction('start');
    }

    // 9. Back / Select / Share (botão 8) -> Como Jogar / Guia de Regras
    if (this._isJustPressed(8, buttons)) {
      this.handleAction('select');
    }

    // 10. Analógico Direito Vertical (axes[3]) -> Scroll livre de telas longas (Mapa, Modais)
    const rightAxisY = axes[3] || 0;
    if (Math.abs(rightAxisY) > 0.25) {
      this._handleRightStickScroll(rightAxisY);
    }
  }

  _updateDirectionTimer(dir, isPressed, dt) {
    const state = this.repeatTimers[dir];
    if (!isPressed) {
      state.active = false;
      state.timer = 0;
      return false;
    }

    if (!state.active) {
      // Primeiro clique imediato
      state.active = true;
      state.timer = this.INITIAL_REPEAT_DELAY;
      return true;
    }

    // Repetição contínua após delay inicial
    state.timer -= dt;
    if (state.timer <= 0) {
      state.timer = this.REPEAT_INTERVAL;
      return true;
    }

    return false;
  }

  _handleRightStickScroll(amount) {
    const context = this.getActiveContext();
    const scrollSpeed = amount * 14;

    if (context === 'SCREEN_MAP') {
      const mapViewport = document.querySelector('#screen-map .map-viewport');
      if (mapViewport) mapViewport.scrollTop += scrollSpeed;
    } else {
      const activeModalBody = document.querySelector('.modal-backdrop.active .modal-body');
      if (activeModalBody) activeModalBody.scrollTop += scrollSpeed;
    }
  }

  /* ==========================================================================
     RESOLUÇÃO DE CONTEXTO & ELEMENTOS INTERATIVOS
     ========================================================================== */

  getActiveContext() {
    // 1. Modais Ativos (Prioridade máxima sobre telas de fundo)
    const activeModals = [
      { id: 'modal-card-swap', ctx: 'MODAL_CARD_SWAP' },
      { id: 'modal-treasure', ctx: 'MODAL_TREASURE' },
      { id: 'modal-class-select', ctx: 'MODAL_CLASS_SELECT' },
      { id: 'modal-reward', ctx: 'MODAL_REWARD' },
      { id: 'modal-shrine', ctx: 'MODAL_SHRINE' },
      { id: 'modal-deck-selector', ctx: 'MODAL_DECK_SELECTOR' },
      { id: 'modal-merchant', ctx: 'MODAL_MERCHANT' },
      { id: 'modal-event', ctx: 'MODAL_EVENT' },
      { id: 'modal-act-transition', ctx: 'MODAL_ACT_TRANSITION' },
      { id: 'modal-deck', ctx: 'MODAL_DECK' },
      { id: 'modal-guide', ctx: 'MODAL_GUIDE' }
    ];

    for (const m of activeModals) {
      const el = document.getElementById(m.id);
      if (el && el.classList.contains('active')) {
        return m.ctx;
      }
    }

    // 2. Telas Ativas
    const screens = [
      { id: 'screen-cinematic', ctx: 'SCREEN_CINEMATIC' },
      { id: 'screen-combat', ctx: 'SCREEN_COMBAT' },
      { id: 'screen-map', ctx: 'SCREEN_MAP' },
      { id: 'screen-victory', ctx: 'SCREEN_VICTORY' },
      { id: 'screen-defeat', ctx: 'SCREEN_DEFEAT' },
      { id: 'screen-menu', ctx: 'SCREEN_MENU' }
    ];

    for (const s of screens) {
      const el = document.getElementById(s.id);
      if (el && el.classList.contains('active')) {
        return s.ctx;
      }
    }

    return 'UNKNOWN';
  }

  getFocusableElements(context) {
    switch (context) {
      case 'SCREEN_MENU': {
        const menuButtons = Array.from(
          document.querySelectorAll('#screen-menu .menu-buttons-list button')
        ).filter(btn => btn.offsetParent !== null && window.getComputedStyle(btn).display !== 'none');
        return menuButtons;
      }

      case 'MODAL_CLASS_SELECT': {
        return Array.from(document.querySelectorAll('#modal-class-select .hero-class-card'));
      }

      case 'SCREEN_CINEMATIC': {
        const btns = Array.from(document.querySelectorAll('#screen-cinematic .cinematic-controls button'))
          .filter(b => b.offsetParent !== null);
        return btns;
      }

      case 'SCREEN_MAP': {
        // Apenas nós disponíveis para interação no momento
        const availableNodes = Array.from(document.querySelectorAll('#map-tree .map-node.node-available'));
        return availableNodes;
      }

      case 'SCREEN_COMBAT': {
        // Cartas na mão do jogador
        const cards = Array.from(document.querySelectorAll('#player-hand .game-card'));
        return cards;
      }

      case 'MODAL_REWARD': {
        const cards = Array.from(document.querySelectorAll('#reward-cards-container .game-card'));
        const skipBtn = document.getElementById('btn-skip-reward');
        if (skipBtn && skipBtn.offsetParent !== null) {
          return [...cards, skipBtn];
        }
        return cards;
      }

      case 'MODAL_SHRINE': {
        const options = Array.from(document.querySelectorAll('#modal-shrine .sanctuary-option-card'))
          .filter(opt => opt.offsetParent !== null && window.getComputedStyle(opt).display !== 'none');
        return options;
      }

      case 'MODAL_DECK_SELECTOR': {
        return Array.from(document.querySelectorAll('#deck-selector-grid .game-card'));
      }

      case 'MODAL_MERCHANT': {
        const cards = Array.from(document.querySelectorAll('#merchant-cards-grid .game-card'));
        const relics = Array.from(document.querySelectorAll('#merchant-relics-grid .merchant-relic-card'));
        const purgeBtn = document.getElementById('btn-merchant-remove-card');
        const leaveBtn = document.getElementById('btn-leave-merchant');
        const items = [...cards, ...relics];
        if (purgeBtn && purgeBtn.offsetParent !== null) items.push(purgeBtn);
        if (leaveBtn && leaveBtn.offsetParent !== null) items.push(leaveBtn);
        return items;
      }

      case 'MODAL_EVENT': {
        const choices = Array.from(document.querySelectorAll('#event-choices-container .event-choice-btn, #event-choices-container .event-choice-card'));
        const leaveBtn = document.getElementById('btn-leave-event');
        const leaveFooter = document.getElementById('event-modal-footer');
        if (leaveFooter && window.getComputedStyle(leaveFooter).display !== 'none' && leaveBtn) {
          return [leaveBtn];
        }
        return choices;
      }

      case 'MODAL_ACT_TRANSITION': {
        const btn = document.getElementById('btn-proceed-act');
        return btn ? [btn] : [];
      }

      case 'SCREEN_VICTORY': {
        const restart = document.getElementById('btn-victory-restart');
        const menu = document.getElementById('btn-victory-menu');
        return [restart, menu].filter(Boolean);
      }

      case 'SCREEN_DEFEAT': {
        const restart = document.getElementById('btn-defeat-restart');
        const menu = document.getElementById('btn-defeat-menu');
        return [restart, menu].filter(Boolean);
      }

      case 'MODAL_CARD_SWAP': {
        const btnReserve = document.getElementById('btn-swap-to-reserve');
        const btnGold = document.getElementById('btn-swap-to-gold');
        const deckCards = Array.from(document.querySelectorAll('#card-swap-deck-grid .game-card'));
        const closeBtn = document.querySelector('#modal-card-swap .modal-close-btn');
        const items = [];
        if (btnReserve && btnReserve.offsetParent !== null) items.push(btnReserve);
        if (btnGold && btnGold.offsetParent !== null) items.push(btnGold);
        items.push(...deckCards);
        if (closeBtn && closeBtn.offsetParent !== null) items.push(closeBtn);
        return items;
      }

      case 'MODAL_DECK': {
        const tabActive = document.getElementById('btn-tab-active-deck');
        const tabReserve = document.getElementById('btn-tab-reserve-deck');
        const cards = Array.from(document.querySelectorAll('#deck-modal-grid .game-card'));
        const closeBtn = document.querySelector('#modal-deck .modal-close-btn');
        const items = [];
        if (tabActive && tabActive.offsetParent !== null && window.getComputedStyle(tabActive).display !== 'none') items.push(tabActive);
        if (tabReserve && tabReserve.offsetParent !== null && window.getComputedStyle(tabReserve).display !== 'none') items.push(tabReserve);
        items.push(...cards);
        if (closeBtn && closeBtn.offsetParent !== null) items.push(closeBtn);
        return items;
      }

      case 'MODAL_TREASURE': {
        const btnRelic = document.getElementById('btn-treasure-relic');
        const btnGold = document.getElementById('btn-treasure-gold');
        const btnPotion = document.getElementById('btn-treasure-potion');
        return [btnRelic, btnGold, btnPotion].filter(Boolean);
      }

      case 'MODAL_GUIDE': {
        const closeBtn = document.querySelector('.modal-backdrop.active .modal-close-btn');
        return closeBtn ? [closeBtn] : [];
      }

      default:
        return [];
    }
  }

  /* ==========================================================================
     FOCO VISUAL & NAVEGAÇÃO
     ========================================================================== */

  updateContextAndFocus() {
    const newContext = this.getActiveContext();
    if (newContext !== this.currentContext || !this.focusedElement || !document.contains(this.focusedElement)) {
      this.currentContext = newContext;
      const elements = this.getFocusableElements(newContext);
      if (elements.length > 0) {
        this.setFocus(elements[0], false);
      } else {
        this._clearFocusHighlights();
      }
      this.updateHudHints();
    }
  }

  setFocus(el, playSound = true) {
    if (!el) return;
    this._clearFocusHighlights();
    this.focusedElement = el;
    el.classList.add('gamepad-selected');

    // Assegura visibilidade na tela
    if (typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }

    if (playSound && window.SoundFX && typeof window.SoundFX.playButtonClick === 'function') {
      window.SoundFX.playButtonClick();
    }
  }

  _clearFocusHighlights() {
    const prevs = document.querySelectorAll('.gamepad-selected');
    prevs.forEach(el => el.classList.remove('gamepad-selected'));
    this.focusedElement = null;
  }

  navigate(direction) {
    const context = this.getActiveContext();
    this.updateContextAndFocus();

    const elements = this.getFocusableElements(context);
    if (!elements || elements.length === 0) return;

    let currentIndex = elements.indexOf(this.focusedElement);
    if (currentIndex === -1) currentIndex = 0;

    let nextIndex = currentIndex;

    // Tratamento especial para combate (mão de cartas vs poções)
    if (context === 'SCREEN_COMBAT') {
      if (direction === 'up') {
        // Tenta focar o primeiro slot de poção disponível
        const potionSlots = Array.from(document.querySelectorAll('#hud-potions-container .potion-slot'));
        const availablePotion = potionSlots.find(p => p.querySelector('img') || p.innerHTML.includes('<svg'));
        if (availablePotion) {
          this.setFocus(availablePotion);
          return;
        }
      } else if (direction === 'down' && this.focusedElement?.classList.contains('potion-slot')) {
        // Se estava nas poções, desce de volta para a primeira carta da mão
        if (elements.length > 0) {
          this.setFocus(elements[0]);
          return;
        }
      }
    }

    // Se estiver navegando em slots de poções no combate
    if (this.focusedElement && this.focusedElement.classList.contains('potion-slot')) {
      const potionSlots = Array.from(document.querySelectorAll('#hud-potions-container .potion-slot'));
      const pIdx = potionSlots.indexOf(this.focusedElement);
      if (direction === 'left' && pIdx > 0) {
        this.setFocus(potionSlots[pIdx - 1]);
        return;
      } else if (direction === 'right' && pIdx < potionSlots.length - 1) {
        this.setFocus(potionSlots[pIdx + 1]);
        return;
      } else if (direction === 'down') {
        if (elements.length > 0) this.setFocus(elements[0]);
        return;
      }
    }

    // Grid 2D de Cartas do Seletor de Deck
    if (context === 'MODAL_DECK_SELECTOR' || context === 'MODAL_DECK') {
      const COLS = 4;
      if (direction === 'right') nextIndex = (currentIndex + 1) % elements.length;
      else if (direction === 'left') nextIndex = (currentIndex - 1 + elements.length) % elements.length;
      else if (direction === 'down') nextIndex = Math.min(elements.length - 1, currentIndex + COLS);
      else if (direction === 'up') nextIndex = Math.max(0, currentIndex - COLS);
    } else {
      // Navegação sequencial padrão
      if (direction === 'right' || direction === 'down') {
        nextIndex = (currentIndex + 1) % elements.length;
      } else if (direction === 'left' || direction === 'up') {
        nextIndex = (currentIndex - 1 + elements.length) % elements.length;
      }
    }

    if (elements[nextIndex]) {
      this.setFocus(elements[nextIndex]);
    }
  }

  /* ==========================================================================
     EXECUÇÃO DE AÇÕES DO JOGADOR
     ========================================================================== */

  handleAction(action) {
    const context = this.getActiveContext();
    this.updateContextAndFocus();

    switch (action) {
      case 'confirm': {
        // Ação Primária: Confirma / Clica no elemento focado
        if (this.focusedElement) {
          this._simulateClick(this.focusedElement);
          // Atualiza o foco após a mudança de estado
          setTimeout(() => this.updateContextAndFocus(), 120);
        }
        break;
      }

      case 'cancel': {
        // Ação Secundária: Voltar / Fechar Modal / Pular
        this._handleCancelAction(context);
        break;
      }

      case 'actionX': {
        // Botão X / ▢ (Square): Finalizar Turno em Combate / Pular Recompensa
        if (context === 'SCREEN_COMBAT') {
          const btnEndTurn = document.getElementById('btn-end-turn');
          if (btnEndTurn && !btnEndTurn.disabled) {
            btnEndTurn.click();
          }
        } else if (context === 'MODAL_REWARD') {
          const skipBtn = document.getElementById('btn-skip-reward');
          if (skipBtn) skipBtn.click();
        }
        break;
      }

      case 'actionY': {
        // Botão Y / △ (Triangle): Abrir Baralho em qualquer tela do jogo
        const btnDeck = document.getElementById('btn-hud-deck');
        if (btnDeck && context !== 'SCREEN_MENU') {
          btnDeck.click();
        }
        break;
      }

      case 'bumperLeft': {
        // LB / L1: Navega para a carta anterior na mão ou aba anterior
        if (context === 'SCREEN_COMBAT') {
          this.navigate('left');
        } else if (context === 'SCREEN_MAP') {
          // Rola mapa para cima
          const mapViewport = document.querySelector('#screen-map .map-viewport');
          if (mapViewport) mapViewport.scrollTop -= 180;
        } else if (context === 'MODAL_DECK') {
          const tabActive = document.getElementById('btn-tab-active-deck');
          if (tabActive) {
            tabActive.click();
            setTimeout(() => this.updateContextAndFocus(), 80);
          }
        }
        break;
      }

      case 'bumperRight': {
        // RB / R1: Navega para a próxima carta na mão ou próxima aba
        if (context === 'SCREEN_COMBAT') {
          this.navigate('right');
        } else if (context === 'SCREEN_MAP') {
          // Rola mapa para baixo
          const mapViewport = document.querySelector('#screen-map .map-viewport');
          if (mapViewport) mapViewport.scrollTop += 180;
        } else if (context === 'MODAL_DECK') {
          const tabReserve = document.getElementById('btn-tab-reserve-deck');
          if (tabReserve) {
            tabReserve.click();
            setTimeout(() => this.updateContextAndFocus(), 80);
          }
        }
        break;
      }

      case 'triggerLeft': {
        // LT: Seleciona e usa Poção 1 rápida
        this._usePotionSlot(0);
        break;
      }

      case 'triggerRight': {
        // RT: Seleciona e usa Poção 2 rápida
        this._usePotionSlot(1);
        break;
      }

      case 'select': {
        // Select / Share: Abre Guia de Regras
        const guideBtn = document.getElementById('btn-hud-guide') || document.getElementById('btn-menu-guide');
        if (guideBtn) guideBtn.click();
        break;
      }

      case 'start': {
        // Start / Options: Alterna Tela Cheia (Fullscreen) nativa
        this._toggleFullscreen();
        break;
      }
    }
  }

  _simulateClick(element) {
    if (!element) return;
    
    // Se for uma carta na mão do combate
    if (element.classList.contains('game-card') && element.closest('#player-hand')) {
      element.click();
      return;
    }

    // Se for uma opção de classe ou santuário
    if (element.classList.contains('hero-class-card')) {
      const selectBtn = element.querySelector('.btn-select-class');
      if (selectBtn) {
        selectBtn.click();
        return;
      }
    }

    // Disparo de clique padrão
    element.click();
  }

  _handleCancelAction(context) {
    // 1. Fecha modais abertos
    const activeModal = document.querySelector('.modal-backdrop.active');
    if (activeModal) {
      const closeBtn = activeModal.querySelector('.modal-close-btn');
      if (closeBtn) {
        closeBtn.click();
        setTimeout(() => this.updateContextAndFocus(), 100);
        return;
      }
      // Se for a loja do mercador, clica em sair
      if (activeModal.id === 'modal-merchant') {
        const leaveBtn = document.getElementById('btn-leave-merchant');
        if (leaveBtn) leaveBtn.click();
        return;
      }
      // Se for recompensa, clica em pular
      if (activeModal.id === 'modal-reward') {
        const skipBtn = document.getElementById('btn-skip-reward');
        if (skipBtn) skipBtn.click();
        return;
      }
    }

    // 2. Cinemática: Pular
    if (context === 'SCREEN_CINEMATIC') {
      const skipBtn = document.querySelector('#screen-cinematic .btn-cinematic-skip');
      if (skipBtn) skipBtn.click();
      return;
    }

    // 3. Telas de Fim de Jogo: Retornar ao Menu
    if (context === 'SCREEN_VICTORY') {
      const menuBtn = document.getElementById('btn-victory-menu');
      if (menuBtn) menuBtn.click();
      return;
    }
    if (context === 'SCREEN_DEFEAT') {
      const menuBtn = document.getElementById('btn-defeat-menu');
      if (menuBtn) menuBtn.click();
      return;
    }

    // 4. Se estiver em combate focando poção, volta para as cartas
    if (context === 'SCREEN_COMBAT' && this.focusedElement?.classList.contains('potion-slot')) {
      const cards = this.getFocusableElements(context);
      if (cards.length > 0) this.setFocus(cards[0]);
    }
  }

  _usePotionSlot(slotIndex) {
    if (this.getActiveContext() !== 'SCREEN_COMBAT') return;
    const slot = document.getElementById(`potion-slot-${slotIndex}`);
    if (slot) {
      slot.click();
    }
  }

  _toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  /* ==========================================================================
     HUD VISUAL DE DICAS DE BOTÕES (OVERLAY)
     ========================================================================== */

  updateHudHints() {
    if (!this.hudBarEl || !this.isGamepadMode) return;

    const contentEl = document.getElementById('gamepad-hud-content');
    if (!contentEl) return;

    const context = this.getActiveContext();
    const isPs = this.gamepadType === 'playstation';

    // Rótulos dos botões com estilo dinâmico Xbox / PlayStation
    const btnA = isPs ? '✕' : 'A';
    const btnB = isPs ? '◯' : 'B';
    const btnX = isPs ? '▢' : 'X';
    const btnY = isPs ? '△' : 'Y';
    const btnLb = isPs ? 'L1' : 'LB';
    const btnRb = isPs ? 'R1' : 'RB';

    let hintsHtml = '';

    const badge = (key, label, colorClass = '') => `
      <div class="gamepad-hint-item">
        <span class="gamepad-btn-badge ${colorClass}">${key}</span>
        <span class="gamepad-hint-text">${label}</span>
      </div>
    `;

    switch (context) {
      case 'SCREEN_COMBAT':
        hintsHtml = `
          ${badge('D-Pad', 'Cartas')}
          ${badge(btnA, 'Jogar Carta', 'btn-green')}
          ${badge(btnX, 'Finalizar Turno', 'btn-blue')}
          ${badge('Cima / LT', 'Poções')}
          ${badge(btnY, 'Baralho', 'btn-yellow')}
        `;
        break;

      case 'SCREEN_MAP':
        hintsHtml = `
          ${badge('D-Pad', 'Escolher Rota')}
          ${badge(btnA, 'Viajar', 'btn-green')}
          ${badge(`${btnLb}/${btnRb}`, 'Rolar Mapa')}
          ${badge(btnY, 'Baralho', 'btn-yellow')}
        `;
        break;

      case 'SCREEN_MENU':
        hintsHtml = `
          ${badge('D-Pad', 'Navegar')}
          ${badge(btnA, 'Confirmar', 'btn-green')}
          ${badge('Start', 'Tela Cheia')}
        `;
        break;

      case 'MODAL_CLASS_SELECT':
        hintsHtml = `
          ${badge('D-Pad', 'Escolher Classe')}
          ${badge(btnA, 'Iniciar Jornada', 'btn-green')}
          ${badge(btnB, 'Voltar ao Menu', 'btn-red')}
        `;
        break;

      case 'SCREEN_CINEMATIC':
        hintsHtml = `
          ${badge(btnA, 'Continuar', 'btn-green')}
          ${badge(btnB, 'Pular Cutscene', 'btn-red')}
        `;
        break;

      case 'MODAL_REWARD':
        hintsHtml = `
          ${badge('D-Pad', 'Selecionar Carta')}
          ${badge(btnA, 'Coletar Recompensa', 'btn-green')}
          ${badge(btnX, 'Pular', 'btn-blue')}
        `;
        break;

      case 'MODAL_MERCHANT':
        hintsHtml = `
          ${badge('D-Pad', 'Navegar Itens')}
          ${badge(btnA, 'Comprar', 'btn-green')}
          ${badge(btnB, 'Sair da Loja', 'btn-red')}
        `;
        break;

      case 'MODAL_SHRINE':
        hintsHtml = `
          ${badge('D-Pad', 'Escolher Bênção')}
          ${badge(btnA, 'Confirmar Escolha', 'btn-green')}
        `;
        break;

      case 'MODAL_DECK_SELECTOR':
        hintsHtml = `
          ${badge('D-Pad', 'Navegar Deck')}
          ${badge(btnA, 'Aprimorar / Forjar', 'btn-green')}
          ${badge(btnB, 'Cancelar', 'btn-red')}
        `;
        break;

      case 'SCREEN_VICTORY':
      case 'SCREEN_DEFEAT':
        hintsHtml = `
          ${badge('D-Pad', 'Navegar')}
          ${badge(btnA, 'Confirmar', 'btn-green')}
          ${badge(btnB, 'Menu Principal', 'btn-red')}
        `;
        break;

      default:
        hintsHtml = `
          ${badge('D-Pad', 'Navegar')}
          ${badge(btnA, 'Confirmar', 'btn-green')}
          ${badge(btnB, 'Voltar', 'btn-red')}
        `;
        break;
    }

    contentEl.innerHTML = hintsHtml;
  }
}


/* --- MÓDULO: js/app.js --- */
/**
 * js/app.js
 * Script Mestre da Aplicação Web "Cards e Dungeons".
 * Integra Game Engine, Módulos de Interface, Sintetizador de Áudio e Assets Vetoriais.
 * Sprint 2: Suporte a Salvar/Continuar run, Música ambiente, Nós de Elite e Relíquias Passivas.
 */










class GameApp {
  constructor() {
    this.gameState = new GameState();
    this.monstersDefeated = 0;
    this.startTime = Date.now();

    this.initUi();
    this.bindEvents();
    this.startInitialScreen();
  }

  initUi() {
    // 1. Gerenciador de Visão e Telas
    this.viewManager = new ViewManager({
      gameState: this.gameState
    });

    // 2. Renderizador de Combate
    this.combatRenderer = new CombatRenderer({
      container: document.getElementById('screen-combat'),
      gameState: this.gameState,
      onCombatEnd: (result) => this.handleCombatEnd(result)
    });

    // 3. Renderizador do Mapa de Nós
    this.mapRenderer = new MapRenderer({
      container: document.getElementById('screen-map'),
      gameState: this.gameState,
      onNodeSelect: (nodeId) => this.handleNodeSelected(nodeId)
    });

    // 4. Gerenciador de Cinemáticas Remotion-Style
    this.cinematicManager = new CinematicManager({
      container: document.getElementById('screen-cinematic')
    });

    // 5. Gerenciador de Controle (Gamepad / Joystick - Fase 2)
    this.gamepadManager = new GamepadManager({
      app: this,
      gameState: this.gameState,
      viewManager: this.viewManager,
      combatRenderer: this.combatRenderer,
      mapRenderer: this.mapRenderer
    });

    // Disponibiliza na janela para callbacks auxiliares
    window.GameApp = this;
    window.ViewManager = this.viewManager;
    window.CinematicManager = this.cinematicManager;
    window.GamepadManager = this.gamepadManager;
  }

  bindEvents() {
    // Botão Continuar Jornada no Menu (Sprint 2)
    const btnContinue = document.getElementById('btn-continue');
    if (btnContinue) {
      btnContinue.addEventListener('click', () => {
        this.continueSavedJourney();
      });
    }

    // Botão Nova Jornada no Menu
    const btnStartGame = document.getElementById('btn-start-game');
    if (btnStartGame) {
      btnStartGame.addEventListener('click', () => {
        this.viewManager.openClassSelectModal((chosenClassId) => {
          this.startNewJourney(chosenClassId);
        });
      });
    }

    // Botão Árvore de Talentos no Menu
    const btnTalents = document.getElementById('btn-talents');
    if (btnTalents) {
      btnTalents.addEventListener('click', () => {
        this.viewManager.openTalentsModal();
      });
    }

    // Botão Como Jogar no Menu
    const btnMenuGuide = document.getElementById('btn-menu-guide');
    if (btnMenuGuide) {
      btnMenuGuide.addEventListener('click', () => {
        this.viewManager.openGuideModal();
      });
    }

    // Botão Créditos no Menu
    const btnMenuCredits = document.getElementById('btn-menu-credits');
    if (btnMenuCredits) {
      btnMenuCredits.addEventListener('click', () => {
        this.viewManager.showToast('Cards e Dungeons v2.0 • Edição Multiclasses com Ladina & Mago!', 'info');
      });
    }

    // Botão Pular Recompensa de Combate
    const btnSkipReward = document.getElementById('btn-skip-reward');
    if (btnSkipReward) {
      btnSkipReward.addEventListener('click', () => {
        this.skipCombatReward();
      });
    }

    // Botões de Reiniciar Jogo (Vitória e Derrota)
    const btnVictoryRestart = document.getElementById('btn-victory-restart');
    if (btnVictoryRestart) {
      btnVictoryRestart.addEventListener('click', () => {
        this.viewManager.openClassSelectModal((chosenClassId) => {
          this.startNewJourney(chosenClassId);
        });
      });
    }

    const btnVictoryMenu = document.getElementById('btn-victory-menu');
    if (btnVictoryMenu) {
      btnVictoryMenu.addEventListener('click', () => {
        if (window.SoundFX) window.SoundFX.playButtonClick();
        this.gameState.clearSavedRun();
        this.viewManager.showScreen('menu');
      });
    }

    const btnDefeatRestart = document.getElementById('btn-defeat-restart');
    if (btnDefeatRestart) {
      btnDefeatRestart.addEventListener('click', () => {
        this.viewManager.openClassSelectModal((chosenClassId) => {
          this.startNewJourney(chosenClassId);
        });
      });
    }

    const btnDefeatMenu = document.getElementById('btn-defeat-menu');
    if (btnDefeatMenu) {
      btnDefeatMenu.addEventListener('click', () => {
        if (window.SoundFX) window.SoundFX.playButtonClick();
        this.gameState.clearSavedRun();
        this.viewManager.showScreen('menu');
      });
    }

    // Opções de Santuário
    this.bindShrineEvents();
  }

  bindShrineEvents() {
    const shrineModal = document.getElementById('modal-shrine');
    if (!shrineModal) return;

    // Opção 1: Descanso / Fogueira (+30% HP)
    const optHeal = shrineModal.querySelector('#shrine-opt-heal');
    if (optHeal) {
      optHeal.addEventListener('click', () => {
        const result = this.gameState.applyShrineChoice(SHRINE_ACTIONS.HEAL);
        if (window.SoundFX) window.SoundFX.playHeal();
        this.viewManager.showToast(result.choiceResult.message || 'Você descansou na fogueira (+30% HP)!', 'success');
        this.viewManager.closeModal(shrineModal);
        this.viewManager.updateHud();
        this.mapRenderer.render();
      });
    }

    // Opção 2: Forjar & Aprimorar (+) (Fase 4)
    const optForge = shrineModal.querySelector('#shrine-opt-forge');
    if (optForge) {
      optForge.addEventListener('click', () => {
        this.viewManager.closeModal(shrineModal);
        this.viewManager.openForgeModal((cardUid, card) => {
          try {
            const res = this.gameState.upgradeCardInDeck(cardUid);
            if (window.SoundFX && typeof window.SoundFX.playBuff === 'function') {
              window.SoundFX.playBuff();
            } else if (window.SoundFX && typeof window.SoundFX.playRelicObtained === 'function') {
              window.SoundFX.playRelicObtained();
            }
            this.viewManager.triggerForgeFx();
            this.viewManager.showToast(res.message || `✨ Carta "${card.name}+" forjada com sucesso!`, 'success');
            this.gameState.shrineCardOptions = [];
            this.gameState.screen = 'map';
            this.viewManager.updateHud();
            this.mapRenderer.render();
          } catch (err) {
            this.viewManager.showToast(err.message, 'error');
          }
        });
      });
    }

    // Opção 3: Purificar / Remover Carta
    const optRemove = shrineModal.querySelector('#shrine-opt-remove');
    if (optRemove) {
      optRemove.addEventListener('click', () => {
        this.viewManager.closeModal(shrineModal);
        this.viewManager.openDeckModal(this.gameState.hero.deck, {
          title: 'Purificar o Deck',
          subtitle: 'Selecione uma carta para queimar no fogo sagrado',
          selectable: true,
          onSelect: (selectedCard) => {
            const result = this.gameState.applyShrineChoice(SHRINE_ACTIONS.REMOVE_CARD, { cardUid: selectedCard.uid });
            if (window.SoundFX) window.SoundFX.playDamage();
            this.viewManager.showToast(result.choiceResult.message, 'success');
            this.viewManager.updateHud();
            this.mapRenderer.render();
          }
        });
      });
    }

    // Opção 3: Espelho de Almas / Duplicar Carta
    const optDuplicate = shrineModal.querySelector('#shrine-opt-duplicate');
    if (optDuplicate) {
      optDuplicate.addEventListener('click', () => {
        this.viewManager.closeModal(shrineModal);
        this.viewManager.openDeckModal(this.gameState.hero.deck, {
          title: 'Espelho de Almas',
          subtitle: 'Selecione uma carta para forjar uma cópia idêntica',
          selectable: true,
          onSelect: (selectedCard) => {
            const result = this.gameState.applyShrineChoice(SHRINE_ACTIONS.DUPLICATE_CARD, { cardUid: selectedCard.uid });
            if (window.SoundFX) window.SoundFX.playHeal();
            this.viewManager.showToast(result.choiceResult.message, 'success');
            this.viewManager.updateHud();
            this.mapRenderer.render();
          }
        });
      });
    }

    // Opção 4: Bênção / Aprender Carta
    const optBlessing = shrineModal.querySelector('#shrine-opt-blessing');
    if (optBlessing) {
      optBlessing.addEventListener('click', () => {
        this.viewManager.closeModal(shrineModal);
        const options = this.gameState.shrineCardOptions;
        this.openRewardSelection(options, (chosenCard) => {
          const result = this.gameState.applyShrineChoice(SHRINE_ACTIONS.ADD_CARD, { cardId: chosenCard.id });
          if (window.SoundFX) window.SoundFX.playCardDraw();
          this.viewManager.showToast(result.choiceResult.message, 'success');
          this.viewManager.updateHud();
          this.mapRenderer.render();
        });
      });
    }
  }

  startInitialScreen() {
    this.viewManager.showScreen('menu');
    this.viewManager.updateHud();

    // Injeta ícones SVG nos botões de HUD se disponíveis
    const assets = window.GameAssets || {};
    const svgs = assets.SVGS || {};

    const brandIconEl = document.getElementById('brand-header-icon');
    if (brandIconEl) brandIconEl.innerHTML = svgs.sword || '';

    const deckIconEl = document.getElementById('hud-deck-icon');
    if (deckIconEl) deckIconEl.innerHTML = svgs.deck || '';

    const audioBtnEl = document.getElementById('btn-hud-audio');
    if (audioBtnEl) audioBtnEl.innerHTML = svgs.volumeOn || '';

    const guideBtnEl = document.getElementById('btn-hud-guide');
    if (guideBtnEl) guideBtnEl.innerHTML = svgs.magic || '?';
  }

  /**
   * Continua uma run salva anteriormente do localStorage
   */
  continueSavedJourney() {
    if (window.SoundFX) {
      window.SoundFX.playButtonClick();
    }

    const loaded = this.gameState.loadRun();
    if (!loaded) {
      this.viewManager.showToast('Nenhum salvamento válido encontrado.', 'error');
      return;
    }

    if (window.SoundFX) {
      window.SoundFX.startDungeonMusic();
    }

    // Restaura tela apropriada
    this.viewManager.updateDungeonBackground(this.gameState.currentAct || 1);
    this.viewManager.startRunTimer();
    this.viewManager.updateHud();
    this.viewManager.showScreen('map');
    this.mapRenderer.render();

    if (this.gameState.screen === GAME_SCREENS.MERCHANT && this.gameState.currentMerchantInventory) {
      this.openMerchantShop();
    } else if (this.gameState.screen === GAME_SCREENS.EVENT && this.gameState.currentNarrativeEvent) {
      this.openNarrativeEvent();
    } else if (this.gameState.screen === GAME_SCREENS.TREASURE && this.gameState.currentTreasure) {
      this.openTreasureRoom();
    } else {
      this.viewManager.showToast('Jornada retomada com sucesso! Prossiga com sabedoria.', 'info');
    }
  }

  startNewJourney(heroClassId = 'warrior') {
    if (window.SoundFX) {
      window.SoundFX.playButtonClick();
      window.SoundFX.startDungeonMusic();
    }

    this.monstersDefeated = 0;
    this.startTime = Date.now();
    this.gameState.startNewRun(heroClassId);
    this.gameState.saveRun();

    this.viewManager.updateDungeonBackground(this.gameState.currentAct || 1);
    this.viewManager.startRunTimer();

    // Toca a Cinemática de Abertura Remotion-Style (com opção de pular)
    this.viewManager.showScreen('cinematic');
    this.cinematicManager.playIntro(() => {
      this.viewManager.showScreen('map');
      this.viewManager.updateHud();
      this.mapRenderer.render();
      const heroName = this.gameState.hero.name;
      this.viewManager.showToast(`Sua jornada como ${heroName} se inicia no Ato I! Escolha o primeiro caminho.`, 'info');
    });
  }

  handleNodeSelected(nodeId) {
    try {
      this.gameState.selectNode(nodeId);
      this.gameState.saveRun();

      if (this.gameState.screen === GAME_SCREENS.COMBAT) {
        const isBoss = this.gameState.currentCombat && this.gameState.currentCombat.enemy.type === 'boss';
        if (isBoss) {
          // Cinemática especial do Dragão Boss
          this.viewManager.showScreen('cinematic');
          this.cinematicManager.playBossEncounter(() => {
            this.viewManager.showScreen('combat');
            this.combatRenderer.startCombat();
          }, {
            enemy: this.gameState.currentCombat.enemy,
            act: this.gameState.currentAct || 1
          });
        } else {
          this.viewManager.showScreen('combat');
          this.combatRenderer.startCombat();
        }
      } else if (this.gameState.screen === GAME_SCREENS.SHRINE) {
        this.viewManager.openModal(this.viewManager.modals.shrine);
      } else if (this.gameState.screen === GAME_SCREENS.MERCHANT) {
        this.openMerchantShop();
      } else if (this.gameState.screen === GAME_SCREENS.EVENT) {
        this.openNarrativeEvent();
      } else if (this.gameState.screen === GAME_SCREENS.TREASURE) {
        this.openTreasureRoom();
      }
    } catch (err) {
      console.error('Erro ao selecionar nó:', err);
      this.viewManager.showToast(err.message, 'error');
    }
  }

  openTreasureRoom() {
    this.viewManager.openTreasureModal(this.gameState.currentTreasure, (choiceType) => {
      try {
        const res = this.gameState.claimTreasureChoice(choiceType);
        if (choiceType === 'gold') {
          if (window.SoundFX && typeof window.SoundFX.playCoins === 'function') {
            window.SoundFX.playCoins();
          }
        } else if (choiceType === 'relic') {
          if (window.SoundFX && typeof window.SoundFX.playRelicObtained === 'function') {
            window.SoundFX.playRelicObtained();
          }
        } else if (choiceType === 'potion') {
          if (window.SoundFX && typeof window.SoundFX.playPotion === 'function') {
            window.SoundFX.playPotion();
          }
        }
        this.viewManager.showToast(res.message, 'success');
        this.viewManager.updateHud();
        this.mapRenderer.render();
      } catch (err) {
        this.viewManager.showToast(err.message, 'error');
      }
    });
  }

  openMerchantShop() {
    this.viewManager.openMerchantModal({
      merchantData: this.gameState.currentMerchantInventory,
      onBuyCard: (cardId) => {
        const res = this.gameState.buyMerchantCard(cardId);
        this.gameState.saveRun();
        return res;
      },
      onBuyRelic: (relicId) => {
        const res = this.gameState.buyMerchantRelic(relicId);
        this.gameState.saveRun();
        return res;
      },
      onBuyRemoval: (cardUid) => {
        const res = this.gameState.buyMerchantCardRemoval(cardUid);
        this.gameState.saveRun();
        return res;
      },
      onLeave: () => {
        this.gameState.leaveMerchant();
        this.gameState.saveRun();
        this.viewManager.updateHud();
        this.mapRenderer.render();
      }
    });
  }

  openNarrativeEvent() {
    this.viewManager.openEventModal({
      eventData: this.gameState.currentNarrativeEvent,
      onChoice: (choiceId) => {
        const res = this.gameState.applyEventChoice(choiceId);
        this.gameState.saveRun();
        return res;
      },
      onLeave: () => {
        this.gameState.leaveEvent();
        this.gameState.saveRun();
        this.viewManager.updateHud();
        this.mapRenderer.render();
      }
    });
  }

  handleCombatEnd(result) {
    if (result === 'defeat') {
      if (window.SoundFX) {
        window.SoundFX.stopDungeonMusic();
        window.SoundFX.playDefeat();
      }
      this.viewManager.stopRunTimer();
      this.gameState.clearSavedRun();
      this.showDefeatScreen();
    } else if (result === 'victory') {
      this.monstersDefeated++;

      if (this.gameState.currentNode && this.gameState.currentNode.type === 'boss') {
        const isCampaignComplete = (this.gameState.currentAct || 1) >= (this.gameState.totalActs || 3);

        if (isCampaignComplete) {
          // Derrotou o Chefe do Ato III (Grande Dragão Tirano) -> Vitória Suprema Final!
          if (window.SoundFX) {
            window.SoundFX.stopDungeonMusic();
            window.SoundFX.playVictory();
          }
          this.viewManager.stopRunTimer();
          this.gameState.clearSavedRun();
          this.showVictoryScreen();
        } else {
          // Conquistou o Ato I ou II -> Celebração e Transição de Ato com Recuperação de Fôlego (+35% HP)
          if (window.SoundFX) {
            window.SoundFX.playVictory();
          }
          const transitionData = this.gameState.advanceAct();
          this.viewManager.updateDungeonBackground(this.gameState.currentAct);
          this.viewManager.updateHud();

          this.viewManager.openActTransitionModal({
            transitionData,
            onProceed: () => {
              this.viewManager.showScreen('map');
              this.mapRenderer.render();
              const themeName = transitionData.actTheme?.name || `Ato ${transitionData.act}`;
              this.viewManager.showToast(`Você adentrou ${themeName}! (+${transitionData.healAmount} HP restaurados)`, 'success');
            }
          });
        }
      } else {
        // Vitória comum ou Elite -> Recompensa de cartas (+ Relíquia se for Elite)
        if (window.SoundFX) window.SoundFX.playCardDraw();
        this.openCombatReward();
      }
    }
  }

  openCombatReward() {
    this.gameState.screen = 'combat_reward';
    const rewardModal = document.getElementById('modal-reward');
    const container = document.getElementById('reward-cards-container');
    const relicBanner = document.getElementById('reward-relic-banner');
    if (!rewardModal || !container) return;

    // 0. Recompensa em Ouro pós-combate (Fase 4)
    const goldBox = rewardModal.querySelector('#reward-gold-box');
    const goldAmountEl = rewardModal.querySelector('#reward-gold-amount');
    const goldEarned = this.gameState.combatRewardGold || (this.gameState.currentNode?.type === 'elite' ? 35 : 20);

    if (goldAmountEl) {
      goldAmountEl.textContent = goldEarned;
    }
    if (goldBox) {
      goldBox.style.display = 'flex';
    }

    // Recompensa de Almas (Meta-Progressão)
    const soulsBox = rewardModal.querySelector('#reward-souls-box');
    const soulsAmountEl = rewardModal.querySelector('#reward-souls-amount');
    const soulsEarned = this.gameState.combatRewardSouls || 2;
    if (soulsAmountEl) {
      soulsAmountEl.textContent = soulsEarned;
    }
    if (soulsBox) {
      soulsBox.style.display = 'flex';
    }

    if (window.SoundFX && typeof window.SoundFX.playCoins === 'function') {
      try {
        window.SoundFX.playCoins();
      } catch (e) {
        console.warn('Audio playCoins warning:', e);
      }
    }
    this.viewManager.updateHud();

    // Se houve drop de Relíquia em combate de Elite (Sprint 2)
    if (this.gameState.eliteRewardRelic && relicBanner) {
      try {
        if (window.SoundFX && typeof window.SoundFX.playRelicObtained === 'function') {
          window.SoundFX.playRelicObtained();
        }
      } catch (e) {
        console.warn('Audio playRelicObtained warning:', e);
      }

      const relic = this.gameState.eliteRewardRelic;
      const relicIconEl = relicBanner.querySelector('#reward-relic-icon');
      const relicNameEl = relicBanner.querySelector('#reward-relic-name');
      const relicDescEl = relicBanner.querySelector('#reward-relic-desc');

      const assets = window.GameAssets || {};
      const svgs = assets.SVGS || {};
      const relicSvgMap = {
        amulet_strength: svgs.relic_strength,
        blood_chalice: svgs.relic_blood,
        spike_shield: svgs.relic_spikes,
        ancient_orb: svgs.relic_mana,
        poison_vial: svgs.relic_poison,
        fortune_bag: svgs.relic_fortune,
        ether_cloak: svgs.relic_cloak,
        whetstone: svgs.relic_whetstone
      };

      if (relicIconEl) {
        relicIconEl.innerHTML = '';
        const img = document.createElement('img');
        img.src = `assets/relics/relic_${relic.id}.png`;
        img.className = 'relic-icon-img';
        img.alt = relic.name;
        img.style.cssText = 'width: 100%; height: 100%; object-fit: contain;';
        img.onerror = () => {
          relicIconEl.innerHTML = relicSvgMap[relic.id] || svgs.relic_strength || svgs.shield;
        };
        relicIconEl.appendChild(img);
      }
      if (relicNameEl) relicNameEl.textContent = relic.name;
      if (relicDescEl) relicDescEl.textContent = relic.description;

      relicBanner.style.display = 'block';
    } else if (relicBanner) {
      relicBanner.style.display = 'none';
    }

    // Se houve drop de Poção (Fase 3)
    if (this.gameState.combatRewardPotion) {
      try {
        if (window.SoundFX && typeof window.SoundFX.playPotion === 'function') {
          window.SoundFX.playPotion();
        }
      } catch (e) {
        console.warn('Audio playPotion warning:', e);
      }
      this.viewManager.showToast(`🧪 Poção obtida: ${this.gameState.combatRewardPotion.name}!`, 'success');
      this.viewManager.updateHud();
    }

    container.innerHTML = '';
    const cards = this.gameState.combatRewardCards || [];

    cards.forEach((card, index) => {
      const cardEl = CardRenderer.renderCard(card, {
        playable: true,
        onClick: () => {
          this.gameState.screen = 'combat_reward';
          const maxDeck = this.gameState.hero?.maxDeckSize || 15;
          const currentDeckLen = this.gameState.hero?.deck?.length || 0;
          if (currentDeckLen >= maxDeck) {
            // Se atingiu o limite de 15 cartas, aciona a Substituição Tática
            this.viewManager.openCardSwapModal(card, () => {
              this.viewManager.updateHud();
              this.viewManager.showScreen('map');
              this.mapRenderer.render();
            });
            return;
          }

          this.gameState.claimCombatReward(card.uid || card.id);
          if (window.SoundFX) window.SoundFX.playCardDraw();
          this.viewManager.showToast(`Carta "${card.name}" adicionada ao baralho!`, 'success');
          this.viewManager.closeModal(rewardModal);
          this.viewManager.updateHud();
          this.viewManager.showScreen('map');
          this.mapRenderer.render();
        }
      });
      cardEl.classList.add('remotion-reward-card');
      cardEl.style.animationDelay = `${index * 130 + 80}ms`;
      container.appendChild(cardEl);
    });

    this.viewManager.openModal(rewardModal);
  }

  skipCombatReward() {
    const rewardModal = document.getElementById('modal-reward');
    this.gameState.claimCombatReward(null);
    if (window.SoundFX) window.SoundFX.playButtonClick();
    this.viewManager.closeModal(rewardModal);
    this.viewManager.showToast('Recompensa pulada! (+15 Ouro recebido)', 'gold');
    this.viewManager.updateHud();
    this.viewManager.showScreen('map');
    this.mapRenderer.render();
  }

  openRewardSelection(cards, onSelect) {
    const rewardModal = document.getElementById('modal-reward');
    const container = document.getElementById('reward-cards-container');
    const relicBanner = document.getElementById('reward-relic-banner');
    if (!rewardModal || !container) return;

    if (relicBanner) relicBanner.style.display = 'none';

    container.innerHTML = '';
    cards.forEach((card, index) => {
      const cardEl = CardRenderer.renderCard(card, {
        playable: true,
        onClick: () => {
          this.viewManager.closeModal(rewardModal);
          if (onSelect) onSelect(card);
        }
      });
      cardEl.classList.add('remotion-reward-card');
      cardEl.style.animationDelay = `${index * 130 + 80}ms`;
      container.appendChild(cardEl);
    });

    this.viewManager.openModal(rewardModal);
  }

  showVictoryScreen() {
    const victoryScreen = document.getElementById('screen-victory');
    if (!victoryScreen) return;

    const statsFloor = victoryScreen.querySelector('#stat-victory-floors');
    const statsMonsters = victoryScreen.querySelector('#stat-victory-monsters');
    const statsDeck = victoryScreen.querySelector('#stat-victory-deck');
    const statsSouls = victoryScreen.querySelector('#stat-victory-souls');

    const totalConqueredFloors = 30; // 3 Atos de 10 andares
    if (statsFloor) statsFloor.textContent = `${totalConqueredFloors}`;
    if (statsMonsters) statsMonsters.textContent = `${this.monstersDefeated}`;
    if (statsDeck) statsDeck.textContent = `${this.gameState.hero.deck.length}`;
    if (statsSouls) statsSouls.textContent = `+${this.gameState.runSoulsEarned || 0}`;

    const subtitleEl = victoryScreen.querySelector('.game-over-subtitle');
    const timeFormatted = this.viewManager.formatRunTime(this.gameState.elapsedTime || 0);
    if (subtitleEl) {
      subtitleEl.innerHTML = `O Grande Dragão Tirano sucumbiu no Ato III! Você conquistou todos os 30 andares do calabouço em <strong>⏱️ ${timeFormatted}</strong> de pura bravura e maestria estratégica. Suas <strong>+🔮 ${this.gameState.runSoulsEarned || 0} Essências de Almas</strong> foram consagradas!`;
    }

    const iconEl = victoryScreen.querySelector('#victory-icon-box');
    if (iconEl && window.GameAssets) {
      iconEl.innerHTML = window.GameAssets.SVGS.trophy || '';
    }

    this.viewManager.showScreen('victory');
  }

  showDefeatScreen() {
    const defeatScreen = document.getElementById('screen-defeat');
    if (!defeatScreen) return;

    const currentFloor = this.gameState.currentNode ? this.gameState.currentNode.floor + 1 : 1;
    const act = this.gameState.currentAct || 1;
    const statsFloor = defeatScreen.querySelector('#stat-defeat-floors');
    const statsMonsters = defeatScreen.querySelector('#stat-defeat-monsters');
    const statsDeck = defeatScreen.querySelector('#stat-defeat-deck');
    const statsSouls = defeatScreen.querySelector('#stat-defeat-souls');
    const subtitleEl = defeatScreen.querySelector('#defeat-subtitle');

    if (statsFloor) statsFloor.textContent = `Ato ${act} (F${currentFloor})`;
    if (statsMonsters) statsMonsters.textContent = `${this.monstersDefeated}`;
    if (statsDeck) statsDeck.textContent = `${this.gameState.hero.deck.length}`;
    if (statsSouls) statsSouls.textContent = `+${this.gameState.runSoulsEarned || 0}`;

    const timeFormatted = this.viewManager.formatRunTime(this.gameState.elapsedTime || 0);
    if (subtitleEl && this.gameState.currentCombat) {
      const killer = this.gameState.currentCombat.enemy.name;
      subtitleEl.innerHTML = `Você foi superado pelas forças de <strong>${killer}</strong> no Ato ${act} após <strong>⏱️ ${timeFormatted}</strong>. Suas <strong>+🔮 ${this.gameState.runSoulsEarned || 0} Essências de Almas</strong> foram resgatadas para a Árvore de Talentos!`;
    }

    const iconEl = defeatScreen.querySelector('#defeat-icon-box');
    if (iconEl && window.GameAssets) {
      iconEl.innerHTML = window.GameAssets.SVGS.skull || '';
    }

    this.viewManager.showScreen('defeat');
  }
}

// Inicializa a aplicação de forma segura e imediata
function bootGame() {
  if (!window._gameAppInstance) {
    window._gameAppInstance = new GameApp();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootGame);
} else {
  bootGame();
}

// Registro de PWA Service Worker e Instalação Móvel
if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('📱 PWA Service Worker registrado com sucesso:', reg.scope))
      .catch(err => console.warn('PWA Service Worker aviso:', err));
  });
}

// Prompt Nativo de Instalação no Celular
let _deferredPwaPrompt = null;
if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    _deferredPwaPrompt = e;
    const btnInstall = document.getElementById('btn-pwa-install');
    if (btnInstall) {
      btnInstall.style.display = 'inline-flex';
      btnInstall.onclick = async () => {
        btnInstall.style.display = 'none';
        if (_deferredPwaPrompt) {
          _deferredPwaPrompt.prompt();
          const { outcome } = await _deferredPwaPrompt.userChoice;
          console.log('PWA instalação resultado:', outcome);
          _deferredPwaPrompt = null;
        }
      };
    }
  });

  window.addEventListener('appinstalled', () => {
    console.log('Cards e Dungeons instalado com sucesso no dispositivo!');
    const btnInstall = document.getElementById('btn-pwa-install');
    if (btnInstall) btnInstall.style.display = 'none';
  });

  // Otimização de Performance e Bateria Mobile (Page Visibility API)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (window.SoundFX && typeof window.SoundFX.stopDungeonMusic === 'function') {
        window.SoundFX.stopDungeonMusic();
      }
    }
  });
}


  // Exposição global se necessário
  if (typeof window !== 'undefined') {
    window.CardsAndDungeonsReady = true;
  }
})();
