"""
Gera assets HD para os templates de Mapa, Recompensas e Placas de Intenção
em estilo Dark Fantasy com acabamento profissional.
"""
import os
import math
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
UI_DIR = os.path.join(BASE_DIR, 'assets', 'ui')
ASSETS_DIR = os.path.join(BASE_DIR, 'assets')
os.makedirs(UI_DIR, exist_ok=True)

size = 256

def make_base_token(rim_color=(212, 175, 55), core_color=(18, 20, 28)):
    im = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(im)
    cx, cy = size // 2, size // 2

    # Sombra externa profunda
    for r in range(120, 105, -1):
        alpha = int((120 - r) * 12)
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(0, 0, 0, min(180, alpha)))

    # Aro metálico externo
    draw.ellipse([cx - 106, cy - 106, cx + 106, cy + 106], fill=(24, 26, 36, 255), outline=rim_color, width=6)
    # Aro interno decorativo
    draw.ellipse([cx - 96, cy - 96, cx + 96, cy + 96], outline=(rim_color[0]//2, rim_color[1]//2, rim_color[2]//2), width=3)
    # Núcleo escuro chanfrado
    draw.ellipse([cx - 90, cy - 90, cx + 90, cy + 90], fill=core_color)

    # Rebites cardeais
    for ang in [0, math.pi/2, math.pi, 3*math.pi/2, math.pi/4, 3*math.pi/4, 5*math.pi/4, 7*math.pi/4]:
        rx = int(cx + 101 * math.cos(ang))
        ry = int(cy + 101 * math.sin(ang))
        draw.ellipse([rx - 4, ry - 4, rx + 4, ry + 4], fill=(255, 235, 160), outline=(120, 95, 20), width=1)

    return im

def generate_map_tokens():
    print("-> Gerando tokens HD para o Mapa Procedural...")
    cx, cy = size // 2, size // 2

    # 1. Nó de Combate Comum (Espadas Cruzadas em Chamas)
    t_combat = make_base_token(rim_color=(212, 175, 55), core_color=(26, 22, 28))
    draw = ImageDraw.Draw(t_combat)
    # Brilho de fogo no fundo
    draw.ellipse([cx - 50, cy - 50, cx + 50, cy + 50], fill=(90, 25, 15, 180))
    # Espada 1
    draw.line([(cx - 55, cy - 55), (cx + 55, cy + 55)], fill=(250, 230, 200), width=8)
    draw.line([(cx - 55, cy - 55), (cx + 55, cy + 55)], fill=(255, 255, 255), width=3)
    # Guarda 1
    draw.line([(cx - 40, cy - 20), (cx - 20, cy - 40)], fill=(212, 175, 55), width=6)
    # Espada 2
    draw.line([(cx + 55, cy - 55), (cx - 55, cy + 55)], fill=(250, 230, 200), width=8)
    draw.line([(cx + 55, cy - 55), (cx - 55, cy + 55)], fill=(255, 255, 255), width=3)
    # Guarda 2
    draw.line([(cx + 40, cy - 20), (cx + 20, cy - 40)], fill=(212, 175, 55), width=6)
    # Faíscas
    for (fx, fy) in [(cx, cy - 45), (cx - 35, cy), (cx + 35, cy), (cx, cy + 45)]:
        draw.ellipse([fx - 3, fy - 3, fx + 3, fy + 3], fill=(255, 160, 30))
    t_combat.save(os.path.join(UI_DIR, 'node_combat.png'))
    print("  ✓ node_combat.png")

    # 2. Nó de Elite (Crânio de Minotauro & Chifres com Aura Carmesim)
    t_elite = make_base_token(rim_color=(231, 76, 60), core_color=(36, 16, 20))
    draw = ImageDraw.Draw(t_elite)
    # Brilho de sangue
    draw.ellipse([cx - 55, cy - 55, cx + 55, cy + 55], fill=(120, 20, 25, 180))
    # Chifres
    draw.arc([cx - 75, cy - 65, cx + 15, cy + 25], start=180, end=330, fill=(240, 210, 150), width=8)
    draw.arc([cx - 15, cy - 65, cx + 75, cy + 25], start=210, end=360, fill=(240, 210, 150), width=8)
    # Crânio central
    draw.ellipse([cx - 35, cy - 35, cx + 35, cy + 25], fill=(225, 220, 210), outline=(140, 120, 100), width=3)
    # Olhos vermelhos brilhantes
    draw.ellipse([cx - 20, cy - 15, cx - 8, cy - 3], fill=(255, 30, 40))
    draw.ellipse([cx + 8, cy - 15, cx + 20, cy - 3], fill=(255, 30, 40))
    # Focinho / dentes
    draw.polygon([(cx - 14, cy + 5), (cx + 14, cy + 5), (cx + 10, cy + 30), (cx - 10, cy + 30)], fill=(200, 195, 180))
    draw.line([(cx - 7, cy + 30), (cx - 7, cy + 20)], fill=(40, 30, 30), width=2)
    draw.line([(cx + 7, cy + 30), (cx + 7, cy + 20)], fill=(40, 30, 30), width=2)
    t_elite.save(os.path.join(UI_DIR, 'node_elite.png'))
    print("  ✓ node_elite.png")

    # 3. Nó de Santuário (Fogueira Mística com Chamas e Brasas)
    t_shrine = make_base_token(rim_color=(46, 204, 113), core_color=(16, 28, 22))
    draw = ImageDraw.Draw(t_shrine)
    # Aura de vida
    draw.ellipse([cx - 50, cy - 50, cx + 50, cy + 50], fill=(25, 80, 45, 180))
    # Troncos de madeira cruzados
    draw.line([(cx - 45, cy + 35), (cx + 45, cy + 20)], fill=(90, 50, 25), width=8)
    draw.line([(cx + 45, cy + 35), (cx - 45, cy + 20)], fill=(75, 40, 20), width=8)
    # Chamas místicas ascendentes (Amarelo, Verdejante e Dourado)
    draw.polygon([(cx, cy - 55), (cx + 30, cy + 15), (cx - 30, cy + 15)], fill=(255, 215, 0))
    draw.polygon([(cx, cy - 45), (cx + 20, cy + 15), (cx - 20, cy + 15)], fill=(46, 204, 113))
    draw.polygon([(cx, cy - 30), (cx + 10, cy + 15), (cx - 10, cy + 15)], fill=(255, 255, 255))
    # Faíscas de cura flutuando
    draw.ellipse([cx - 15, cy - 65, cx - 9, cy - 59], fill=(120, 255, 170))
    draw.ellipse([cx + 15, cy - 55, cx + 21, cy - 49], fill=(255, 230, 100))
    t_shrine.save(os.path.join(UI_DIR, 'node_shrine.png'))
    print("  ✓ node_shrine.png")

    # 4. Nó de Mercador (Balança Dourada e Moedas)
    t_merch = make_base_token(rim_color=(241, 196, 15), core_color=(32, 28, 16))
    draw = ImageDraw.Draw(t_merch)
    # Aura dourada
    draw.ellipse([cx - 50, cy - 50, cx + 50, cy + 50], fill=(95, 75, 15, 180))
    # Haste da balança
    draw.line([(cx, cy - 45), (cx, cy + 45)], fill=(212, 175, 55), width=6)
    draw.line([(cx - 45, cy - 30), (cx + 45, cy - 30)], fill=(250, 228, 140), width=5)
    # Pratos da balança
    for side in [-1, 1]:
        px = cx + side * 40
        draw.line([(px, cy - 30), (px - 14, cy + 10)], fill=(180, 145, 30), width=2)
        draw.line([(px, cy - 30), (px + 14, cy + 10)], fill=(180, 145, 30), width=2)
        draw.arc([px - 18, cy + 5, px + 18, cy + 25], start=0, end=180, fill=(241, 196, 15), width=4)
        # Moedas no prato
        draw.ellipse([px - 8, cy + 5, px + 8, cy + 15], fill=(255, 225, 90))
    t_merch.save(os.path.join(UI_DIR, 'node_merchant.png'))
    print("  ✓ node_merchant.png")

    # 5. Nó de Evento / Mistério (Orbe Arcano Rúnico)
    t_event = make_base_token(rim_color=(155, 89, 182), core_color=(26, 18, 36))
    draw = ImageDraw.Draw(t_event)
    # Vórtice místico
    draw.ellipse([cx - 50, cy - 50, cx + 50, cy + 50], fill=(80, 25, 95, 180))
    # Orbe central púrpura
    draw.ellipse([cx - 35, cy - 35, cx + 35, cy + 35], fill=(180, 100, 220), outline=(230, 180, 255), width=4)
    # Anel rúnico inclinado em órbita
    draw.arc([cx - 55, cy - 25, cx + 55, cy + 25], start=0, end=360, fill=(255, 240, 180), width=3)
    # Ponto de luz estelar no centro
    draw.ellipse([cx - 10, cy - 10, cx + 10, cy + 10], fill=(255, 255, 255))
    t_event.save(os.path.join(UI_DIR, 'node_event.png'))
    print("  ✓ node_event.png")

    # 6. Nó de Boss (Coroa Imperial & Caveira Infernal Dracônica)
    t_boss = make_base_token(rim_color=(230, 126, 34), core_color=(38, 14, 10))
    draw = ImageDraw.Draw(t_boss)
    # Chamas infernais no fundo
    draw.ellipse([cx - 55, cy - 55, cx + 55, cy + 55], fill=(140, 40, 10, 200))
    # Grande Coroa de Ouro com 3 Pontas e Rubis
    crown = [
        (cx - 50, cy + 30),
        (cx - 50, cy - 25),
        (cx - 25, cy - 5),
        (cx, cy - 45),
        (cx + 25, cy - 5),
        (cx + 50, cy - 25),
        (cx + 50, cy + 30),
    ]
    draw.polygon(crown, fill=(212, 175, 55), outline=(255, 240, 160), width=4)
    # Rubis da coroa
    for (rx, ry) in [(cx - 50, cy - 25), (cx, cy - 45), (cx + 50, cy - 25), (cx, cy + 10)]:
        draw.ellipse([rx - 6, ry - 6, rx + 6, ry + 6], fill=(231, 76, 60), outline=(255, 255, 255), width=2)
    # Base decorada
    draw.line([(cx - 50, cy + 25), (cx + 50, cy + 25)], fill=(140, 110, 25), width=4)
    t_boss.save(os.path.join(UI_DIR, 'node_boss.png'))
    print("  ✓ node_boss.png")

def generate_reward_chest():
    print("-> Gerando Baú de Tesouro HD para o Modal de Recompensas...")
    cw, ch = 320, 240
    chest_im = Image.new('RGBA', (cw, ch), (0, 0, 0, 0))
    draw = ImageDraw.Draw(chest_im)
    cx, cy = cw // 2, ch // 2 + 10

    # Brilho dourado emanando do baú (Remotion style glow)
    for rad in range(110, 40, -10):
        draw.ellipse([cx - rad, cy - rad + 10, cx + rad, cy + rad + 10], fill=(255, 215, 0, int((110 - rad) * 2.5)))

    # Base de madeira nobre do baú
    draw.polygon([(cx - 90, cy - 20), (cx + 90, cy - 20), (cx + 80, cy + 60), (cx - 80, cy + 60)], fill=(75, 42, 20), outline=(35, 18, 8), width=3)
    # Reforços de ferro forjado
    for ox in [-85, -30, 30, 85]:
        draw.line([(cx + ox, cy - 20), (cx + ox * 0.9, cy + 60)], fill=(180, 150, 60), width=6)
        draw.line([(cx + ox, cy - 20), (cx + ox * 0.9, cy + 60)], fill=(255, 230, 120), width=2)

    # Tampa arqueada do baú (aberta levemente com luz saindo)
    lid_top = [
        (cx - 95, cy - 20),
        (cx - 70, cy - 65),
        (cx + 70, cy - 65),
        (cx + 95, cy - 20)
    ]
    draw.polygon(lid_top, fill=(90, 52, 26), outline=(212, 175, 55), width=4)
    # Luz interna emergindo da fresta
    draw.polygon([(cx - 80, cy - 20), (cx + 80, cy - 20), (cx + 60, cy - 35), (cx - 60, cy - 35)], fill=(255, 250, 180, 240))

    # Fechadura rúnica e cadeado dourado
    draw.ellipse([cx - 18, cy - 25, cx + 18, cy + 10], fill=(212, 175, 55), outline=(255, 240, 150), width=3)
    draw.ellipse([cx - 6, cy - 14, cx + 6, cy - 2], fill=(25, 20, 10))

    chest_im.save(os.path.join(UI_DIR, 'chest_reward.png'))
    print("  ✓ chest_reward.png gerado com sucesso!")

if __name__ == '__main__':
    generate_map_tokens()
    generate_reward_chest()
    print("\n✅ TODOS OS NOVOS TEMPLATES E SPRITES HD GERADOS!")
