# 🛡️ CARDS E DUNGEONS - Documento de Arquitetura & Roadmap (v1.0 MVP)

**Autor:** Gerente Geral  
**Status:** APROVADO PARA EXECUÇÃO  
**Data:** Outubro de 2026  

---

## 1. Visão Geral do Produto
"Cards e Dungeons" é um roguelike deckbuilder estratégico e acessível, rodando diretamente no navegador com zero dependências externas ou fricção de build.

### 🎮 Loop Central de Gameplay
1. **Menu Principal:** Iniciar Jornada, Regras e Créditos.
2. **O Herói e Deck Inicial:**
   * HP: 70 / 70. Energia por turno: 3.
   * Deck inicial (12 cartas):
     - 4x **Murro** (Custo 1 | 6 de Dano Físico)
     - 3x **Chute** (Custo 1 | 8 de Dano + Quebra de 2 de Armadura)
     - 2x **Espada** (Custo 2 | 14 de Dano Pesado)
     - 3x **Escudo de Madeira** (Custo 1 | Ganha 6 de Armadura)
3. **Árvore de Caminhos Convergente (Mapa de Nós):**
   * Estrutura em andares/camadas onde o jogador faz escolhas estratégicas.
   * Nós disponíveis:
     * ⚔️ **Combate Comum:** Inimigos padrão (Goblin Ladino, Esqueleto Guardião, Feiticeiro Sombrio).
     * ⛺ **Santuário / Acampamento:** Escolha entre **Curar Vida**, **Remover Carta**, **Copiar Carta** ou **Aprender Nova Carta**.
     * 👑 **Chefe do Calabouço (Boss):** O Grande Dragão Tirano (HP 90, mecânica de baforada e armadura escamosa).
4. **Sistema de Combate Tático:**
   * Compra 5 cartas por turno.
   * Gasto de mana/energia (3 mana por turno).
   * Telegrafia de intenções do monstro (o jogador sempre vê o próximo movimento do monstro: ataque, defesa, golpe duplo).
   * Sistema de Armadura/Escudo temporário (reseta no início do turno).
   * Reciclagem de descarte quando o monte de compra esgota.
5. **Recompensas e Progressão:**
   * Ao vencer combates: escolha 1 entre 3 cartas oferecidas.
   * No Santuário: purificação e refinamento do deck.
6. **Desfecho:**
   * Tela de Vitória Gloriosa ao derrotar o Boss.
   * Tela de Derrota com opção de reiniciar imediatamente.

---

## 2. Equipe de Desenvolvimento e Atribuições
- **Agente de Design (`design_agent`):** UI/UX, CSS, temas dark dungeon, SVGs e sintetizador de áudio Web Audio API.
- **Agente Engine Developer (`engine_developer_agent`):** Lógica matemática, regras de combate, árvore de mapa convergente, cartas, inimigos e testes automatizados em Node.js.
- **Agente Front-end (`frontend_agent`):** Conexão das telas no navegador (`index.html`), interatividade tátil das cartas, arena e modais.
- **Gerente Geral:** Supervisão, aprovação de cada entrega e testes ponta a ponta.
