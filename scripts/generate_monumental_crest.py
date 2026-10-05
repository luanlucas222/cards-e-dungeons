"""
Gera um emblema heráldico monumental e suntuoso para o Menu Inicial de Cards e Dungeons.
"""
import os
import math
from PIL import Image, ImageDraw, ImageFilter

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
UI_DIR = os.path.join(BASE_DIR, 'assets', 'ui')
os.makedirs(UI_DIR, exist_ok=True)

w, h = 600, 360
img = Image.new('RGBA', (w, h), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

cx, cy = w // 2, h // 2 - 10

# 1. Asas Heráldicas Douradas & Ébano no Fundo
wing_poly_left = [
    (cx - 20, cy),
    (cx - 120, cy - 80),
    (cx - 240, cy - 110),
    (cx - 270, cy - 70),
    (cx - 220, cy - 20),
    (cx - 260, cy + 20),
    (cx - 180, cy + 60),
    (cx - 80, cy + 40),
]
wing_poly_right = [(w - x, y) for (x, y) in wing_poly_left]

# Sombra suave das asas
draw.polygon(wing_poly_left, fill=(10, 12, 18, 220), outline=(140, 115, 32, 255))
draw.polygon(wing_poly_right, fill=(10, 12, 18, 220), outline=(140, 115, 32, 255))

# Detalhes internos das penas
for i in range(1, 4):
    inset = i * 14
    sub_left = [
        (cx - 20, cy),
        (cx - 110, cy - 70 + inset),
        (cx - 220 + inset, cy - 90 + inset),
        (cx - 170 + inset, cy + 30),
    ]
    sub_right = [(w - x, y) for (x, y) in sub_left]
    draw.polygon(sub_left, fill=(24 + i*4, 27 + i*4, 38 + i*6, 230), outline=(212, 175, 55, 200))
    draw.polygon(sub_right, fill=(24 + i*4, 27 + i*4, 38 + i*6, 230), outline=(212, 175, 55, 200))

# 2. Espadas Cruzadas Monumentais de Aço Valiriano com Pomos Dourados
sword_len = 220
# Espada 1 (\)
s1_p1 = (cx - sword_len, cy - int(sword_len * 0.55))
s1_p2 = (cx + sword_len, cy + int(sword_len * 0.55))
# Espada 2 (/)
s2_p1 = (cx + sword_len, cy - int(sword_len * 0.55))
s2_p2 = (cx - sword_len, cy + int(sword_len * 0.55))

# Lâminas de aço brilhante
draw.line([s1_p1, s1_p2], fill=(230, 240, 255, 255), width=12)
draw.line([s1_p1, s1_p2], fill=(255, 255, 255, 255), width=4)
draw.line([s2_p1, s2_p2], fill=(230, 240, 255, 255), width=12)
draw.line([s2_p1, s2_p2], fill=(255, 255, 255, 255), width=4)

# Guardas douradas
for (px, py, angle) in [(s1_p1[0] + 60, s1_p1[1] + 33, -0.5), (s2_p1[0] - 60, s2_p1[1] + 33, 0.5)]:
    draw.line([(px - 25, py - 14), (px + 25, py + 14)], fill=(250, 228, 140, 255), width=10)
    draw.line([(px - 25, py - 14), (px + 25, py + 14)], fill=(180, 140, 40, 255), width=4)

# 3. Grande Escudo Gótico Central (Crest)
shield_pts = [
    (cx - 90, cy - 80),
    (cx + 90, cy - 80),
    (cx + 90, cy + 10),
    (cx, cy + 115),
    (cx - 90, cy + 10),
]
# Borda externa dourada grossa
draw.polygon(shield_pts, fill=(16, 18, 26, 255), outline=(212, 175, 55, 255))
# Borda interna de ouro polido
shield_inner = [
    (cx - 78, cy - 70),
    (cx + 78, cy - 70),
    (cx + 78, cy + 8),
    (cx, cy + 100),
    (cx - 78, cy + 8),
]
draw.polygon(shield_inner, fill=(28, 32, 46, 255), outline=(250, 228, 140, 255))

# Campo Heráldico do Escudo (Bipartido Azul Meia-Noite e Carmesim)
draw.polygon([(cx - 74, cy - 66), (cx, cy - 66), (cx, cy + 92), (cx - 74, cy + 6)], fill=(18, 48, 92, 255))
draw.polygon([(cx, cy - 66), (cx + 74, cy - 66), (cx + 74, cy + 6), (cx, cy + 92)], fill=(120, 20, 32, 255))

# Linha dourada divisória
draw.line([(cx, cy - 66), (cx, cy + 92)], fill=(250, 228, 140, 255), width=4)

# 4. Rubi Imperial Central Lapidado com Brilho
ruby_pts = [
    (cx, cy - 35),
    (cx + 32, cy),
    (cx, cy + 35),
    (cx - 32, cy),
]
draw.polygon(ruby_pts, fill=(231, 76, 60, 255), outline=(255, 255, 255, 255))
ruby_inner = [
    (cx, cy - 22),
    (cx + 20, cy),
    (cx, cy + 22),
    (cx - 20, cy),
]
draw.polygon(ruby_inner, fill=(255, 120, 100, 255), outline=(255, 230, 200, 255))

# Facetas de brilho do rubi
draw.line([(cx, cy - 35), (cx, cy + 35)], fill=(255, 255, 255, 220), width=2)
draw.line([(cx - 32, cy), (cx + 32, cy)], fill=(255, 255, 255, 220), width=2)

# Coroa Rúnica no Topo do Escudo
crown_pts = [
    (cx - 50, cy - 80),
    (cx - 50, cy - 105),
    (cx - 25, cy - 92),
    (cx, cy - 118),
    (cx + 25, cy - 92),
    (cx + 50, cy - 105),
    (cx + 50, cy - 80),
]
draw.polygon(crown_pts, fill=(212, 175, 55, 255), outline=(255, 240, 160, 255))

# Pérolas na Coroa
for px, py in [(cx - 50, cy - 105), (cx, cy - 118), (cx + 50, cy - 105)]:
    draw.ellipse([px - 5, py - 5, px + 5, py + 5], fill=(255, 255, 255, 255), outline=(250, 228, 140, 255), width=1)

out_file = os.path.join(UI_DIR, 'menu_logo_emblem.png')
img.save(out_file, 'PNG')
print("✅ Novo emblema heráldico monumental gerado em:", out_file)
