# 🛡️ CARDS E DUNGEONS (v1.2 - Dark Fantasy & Cinematic Edition)
> *Roguelike Deckbuilder RPG tático para navegador com arte Dark Fantasy HD, cinemáticas procedurais estilo Remotion e zero dependências externas de runtime.*

---

## ⚔️ Sobre o Jogo
**Cards e Dungeons** é um jogo de construção de baralho e exploração de masmorras por turnos no universo Dark Fantasy. Você assume o controle de um guerreiro rúnico com um baralho inicial de combate, explorando uma árvore procedural de caminhos convergentes repleta de inimigos sombrios, elites brutais, santuários sagrados e um dragão tirânico no cume.

### 🎮 Principais Funcionalidades:
* **Herói & Baralho Inicial:** 70 de Vida, 3 de Energia por turno e 12 cartas prontas:
  * 👊 **Murro** (Custo 1 | 6 Dano)
  * 🦶 **Chute** (Custo 1 | 8 Dano + quebra 2 de armadura)
  * 🗡️ **Espada** (Custo 2 | 14 Dano pesado)
  * 🛡️ **Escudo de Madeira** (Custo 1 | 6 Armadura)
* **Catálogo Expandido (18 Cartas Únicas):** Inclui Golpe Duplo, Dança das Lâminas, Corte Vorpal, Golpe Flamejante, Chuva de Meteoros, Pancada Atordoante, Grito Intimidador, Postura de Espinhos, Chamas da Fênix, Cura Espiritual e Fúria Berserker.
* **Sistema de Status & Modificadores:**
  * ⚔️ **Força:** Aumenta o dano de ataque de forma cumulativa.
  * 💔 **Vulnerável:** Inimigo/herói recebe +50% de dano.
  * 🥀 **Fraco:** Reduz o dano causado em 25%.
  * 🔥 **Queimadura:** Causa dano passivo no início de cada turno.
* **Relíquias Passivas Poderosas:** Amuleto da Força, Orbe Ancião de Mana, Cálice de Sangue e Escudo de Espinhos com retaliação.
* **Árvore de Caminhos Procedural:** Grafo de 6 andares com bifurcações estratégicas convergindo para o covil do Dragão.
* **Arte Dark Fantasy HD (Gemini):**
  * Sprites realistas de alta definição para Herói Guerreiro Rúnico, Goblin Ladino, Esqueleto Guardião, Feiticeiro Sombrio, Minotauro Berserker (Elite), Espectro Lamuriante e o Grande Dragão Tirano.
  * Cenários dinâmicos de masmorra por andar: Catacumbas Malditas (F1-F2), Minas de Cristais Sombrios (F3-F4) e Covil Vulcânico (F5-F6).
  * Ilustrações em moldura de alta definição para as cartas de combate.
  * Fallback automático para arte vetorial SVG caso imagens offline não estejam disponíveis.
* **Motor Cinemático estilo Remotion (Pure Browser):**
  * Cutscenes imersivas com efeito Ken Burns de câmera lenta e vinheta.
  * Partículas procedurais de brasas flutuantes via HTML5 Canvas.
  * Prólogo narrativo em capítulos e apresentação dramática de entrada de Chefe com tremor de tela.
* **Efeitos Sonoros Procedurais & Trilha:** Sintetizador via Web Audio API com fanfarra de vitória, impactos metálicos, fogo e música ambiente contínua.
* **Zero Configuração / Universal:** Roda instantaneamente clicando duas vezes em `index.html` ou servido via HTTP local.

---

## 🚀 Como Jogar

### Opção 1: Abrir diretamente no Navegador
Abra o arquivo [`index.html`](file:///c:/Users/GRAFICA/Desktop/1_Projetos_e_Trabalho/cards/index.html) diretamente no Google Chrome, Microsoft Edge, Firefox, Opera ou Brave.

### Opção 2: Iniciar Servidor Local
```bash
node server.js
```
Acesse no seu navegador: **`http://localhost:3000`**

---

## 🧪 Suíte de Testes Automatizados (100% Aprovados)
O projeto conta com 4 suítes de testes rigorosas executadas pelo Gerente Geral:

```bash
# 1. Testes de Regras, Status, Relíquias e Combate (42 testes)
node tests/engine-test.js

# 2. Verificação de Front-end, DOM, CSS e Assets (145 testes)
node tests/frontend-verify.js

# 3. Teste de Integração e Carregamento de Recursos HTTP (26 verificações)
node tests/qa-e2e-check.js

# 4. Teste de Interação Real no Google Chrome via CDP Headless (com screenshots)
node tests/browser-interaction-test.js
```

---

## 📁 Estrutura do Projeto
```
cards/
├── index.html                   # Shell da aplicação com HUD, arena, mapa, modais e cinemática
├── server.js                    # Servidor HTTP leve para execução local
├── package.json                 # Metadados e scripts de teste
├── GAME_SPEC.md                 # Especificação técnica do jogo
├── README.md                    # Documentação do projeto
├── assets/
│   ├── sprites/                 # Sprites Dark Fantasy HD dos personagens e monstros
│   ├── backgrounds/             # Cenários temáticos de masmorra por andar
│   └── cards/                   # Ilustrações temáticas de alta definição para as cartas
├── css/
│   ├── main.css                 # Tema Dark Fantasy, variáveis, HUD e tipografia
│   ├── cards.css                # Estilização das cartas, efeitos 3D, moldura e brilho de mana
│   ├── combat.css               # Arena, retratos HD dos combatentes, intenção e efeitos FX
│   ├── map.css                  # Árvore de caminhos e nós procedurais convergentes
│   ├── modal.css                # Modais (Baralho, Santuário, Recompensas, Fim de Jogo)
│   └── cinematic.css            # Estilos de cutscene, câmera Ken Burns e partículas
├── docs/
│   └── screenshots/             # Capturas de tela homologadas do jogo
├── js/
│   ├── app.js                   # Controlador mestre da aplicação
│   ├── assets.js                # Catálogo de arte vetorial SVG e caminhos de assets
│   ├── audio.js                 # Sintetizador procedural via Web Audio API e música ambiente
│   ├── game.bundle.js           # Bundle consolidado universal
│   ├── data/                    # Catálogo de cartas, monstros e eventos
│   ├── engine/                  # Máquina de combate, modificadores de status e gerador de mapa
│   └── ui/                      # Renderizadores visuais de UI, cartas, arena e cinemáticas
├── scripts/
│   └── build-bundle.js          # Utilitário de bundling universal
└── tests/                       # Suíte completa de testes automatizados e QA
```
