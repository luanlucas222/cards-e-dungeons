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

