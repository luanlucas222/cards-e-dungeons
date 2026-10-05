"""
Script de Geração de Sprites e Texturas Dark Fantasy HD para Cards e Dungeons.
Gera todas as poções, relíquias, molduras de UI e fundos de tela com alta fidelidade visual.
"""
import os
import math
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance, ImageOps

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
ASSETS_DIR = os.path.join(BASE_DIR, 'assets')
POTIONS_DIR = os.path.join(ASSETS_DIR, 'potions')
RELICS_DIR = os.path.join(ASSETS_DIR, 'relics')
UI_DIR = os.path.join(ASSETS_DIR, 'ui')
BG_DIR = os.path.join(ASSETS_DIR, 'backgrounds')

for d in [POTIONS_DIR, RELICS_DIR, UI_DIR, BG_DIR]:
    os.makedirs(d, exist_ok=True)

# -------------------------------------------------------------
# 1. GERAÇÃO DO CINTO DE POÇÕES A PARTIR DE POTION_HEALTH.JPG
# -------------------------------------------------------------
base_potion_path = os.path.join(POTIONS_DIR, 'potion_health.jpg')
if not os.path.exists(base_potion_path):
    raise FileNotFoundError(f"Arquivo base não encontrado: {base_potion_path}")

base_pot = Image.open(base_potion_path).convert('RGB')
w, h = base_pot.size

def generate_potions():
    print("-> Gerando conjunto completo de Poções HD...")
    
    # 1.1. Poção de Mana / Energia (Sapphire Arcane Blue)
    energy_pot = Image.new('RGB', (w, h))
    in_pix = base_pot.load()
    out_pix = energy_pot.load()
    for x in range(w):
        for y in range(h):
            r, g, b = in_pix[x, y]
            if r > 65 and r > g * 1.35 and r > b * 1.05:
                diff = r - max(g, b)
                nb = min(255, int(b + diff * 1.35 + 25))
                ng = min(255, int(g + diff * 0.45 + 10))
                nr = int(r * 0.18)
                out_pix[x, y] = (nr, ng, nb)
            else:
                out_pix[x, y] = (r, g, b)
    energy_pot.save(os.path.join(POTIONS_DIR, 'potion_energy.jpg'), quality=95)

    # 1.2. Frasco Peçonhento (Emerald Toxic Acid Green)
    poison_pot = Image.new('RGB', (w, h))
    out_pix = poison_pot.load()
    for x in range(w):
        for y in range(h):
            r, g, b = in_pix[x, y]
            if r > 65 and r > g * 1.35 and r > b * 1.05:
                diff = r - max(g, b)
                ng = min(255, int(g + diff * 1.4 + 30))
                nb = int(b * 0.25)
                nr = min(255, int(r * 0.25 + diff * 0.2))
                out_pix[x, y] = (nr, ng, nb)
            else:
                out_pix[x, y] = (r, g, b)
    poison_pot.save(os.path.join(POTIONS_DIR, 'potion_poison.jpg'), quality=95)

    # 1.3. Óleo Flamejante (Molten Lava Fire Orange & Amber)
    fire_pot = Image.new('RGB', (w, h))
    out_pix = fire_pot.load()
    for x in range(w):
        for y in range(h):
            r, g, b = in_pix[x, y]
            if r > 65 and r > g * 1.35 and r > b * 1.05:
                diff = r - max(g, b)
                nr = min(255, int(r * 1.15 + 30))
                ng = min(255, int(g + diff * 0.75 + 35))
                nb = int(b * 0.15)
                out_pix[x, y] = (nr, ng, nb)
            else:
                out_pix[x, y] = (r, g, b)
    fire_pot.save(os.path.join(POTIONS_DIR, 'potion_fire.jpg'), quality=95)

    # 1.4. Pele de Pedra (Granite Slate Gray & Earth Earthen Rune)
    stone_pot = Image.new('RGB', (w, h))
    out_pix = stone_pot.load()
    for x in range(w):
        for y in range(h):
            r, g, b = in_pix[x, y]
            if r > 65 and r > g * 1.35 and r > b * 1.05:
                # Transforma líquido em pedra polida cinza chumbo com reflexos minerais
                gray = int(0.299 * r + 0.587 * g + 0.114 * b)
                stone_val = min(255, int(gray * 1.1 + 35))
                out_pix[x, y] = (stone_val, stone_val + 2, stone_val + 8)
            else:
                out_pix[x, y] = (r, g, b)
    stone_pot.save(os.path.join(POTIONS_DIR, 'potion_stone.jpg'), quality=95)

    # 1.5. Poção da Fúria (Golden Amber Berserker Elixir)
    strength_pot = Image.new('RGB', (w, h))
    out_pix = strength_pot.load()
    for x in range(w):
        for y in range(h):
            r, g, b = in_pix[x, y]
            if r > 65 and r > g * 1.35 and r > b * 1.05:
                diff = r - max(g, b)
                nr = min(255, int(r * 1.1 + 40))
                ng = min(255, int(g + diff * 0.85 + 40))
                nb = min(255, int(b * 0.3 + 20))
                out_pix[x, y] = (nr, ng, nb)
            else:
                out_pix[x, y] = (r, g, b)
    strength_pot.save(os.path.join(POTIONS_DIR, 'potion_strength.jpg'), quality=95)

    # 1.6. Slot de Cinto Vazio (Ornate Leather & Cold Iron Socket)
    empty_pot = Image.new('RGB', (w, h), (14, 16, 22))
    draw = ImageDraw.Draw(empty_pot)
    # Textura concêntrica de encaixe de cinto
    cx, cy = w // 2, h // 2
    for rad in range(380, 40, -10):
        shade = int(22 + (rad / 380) * 20)
        draw.ellipse([cx - rad, cy - rad, cx + rad, cy + rad], fill=(shade, shade + 2, shade + 6), outline=(45, 50, 68), width=2)
    # Rebites de ferro forjado
    for i in range(8):
        angle = i * (2 * math.pi / 8)
        rx = int(cx + 340 * math.cos(angle))
        ry = int(cy + 340 * math.sin(angle))
        draw.ellipse([rx - 20, ry - 20, rx + 20, ry + 20], fill=(180, 150, 60), outline=(230, 200, 100), width=4)
    # Sombra interna profunda
    draw.ellipse([cx - 240, cy - 240, cx + 240, cy + 240], fill=(9, 10, 14), outline=(30, 34, 48), width=6)
    # Glifo central sutil
    draw.line([cx - 50, cy, cx + 50, cy], fill=(50, 56, 75), width=4)
    draw.line([cx, cy - 50, cx, cy + 50], fill=(50, 56, 75), width=4)
    empty_pot.save(os.path.join(POTIONS_DIR, 'potion_slot_empty.jpg'), quality=95)
    print("✅ 7/7 Poções e Slots gerados com sucesso!")

# -------------------------------------------------------------
# 2. GERAÇÃO DE RELÍQUIAS E AMULETOS HD COM MOLDURA DOURADA RÚNICA
# -------------------------------------------------------------
def create_relic_medal(source_img_path, output_filename, relic_tint=(255, 215, 0)):
    src = Image.open(source_img_path).convert('RGB')
    size = 512
    # Corta o centro quadrado do asset
    sw, sh = src.size
    min_dim = min(sw, sh)
    left = (sw - min_dim) // 2
    top = (sh - min_dim) // 2
    cropped = src.crop((left, top, left + min_dim, top + min_dim)).resize((size, size), Image.Resampling.LANCZOS)

    # Realça contraste e cor
    cropped = ImageEnhance.Contrast(cropped).enhance(1.25)
    cropped = ImageEnhance.Color(cropped).enhance(1.15)

    # Cria máscara circular com moldura ornamental rúnica
    relic = Image.new('RGB', (size, size), (10, 11, 16))
    mask = Image.new('L', (size, size), 0)
    draw_mask = ImageDraw.Draw(mask)
    draw_mask.ellipse([24, 24, size - 24, size - 24], fill=255)

    # Aplica o conteúdo dentro da máscara
    relic.paste(cropped, (0, 0), mask)

    # Desenha anéis dourados e runas no contorno
    draw = ImageDraw.Draw(relic)
    # Borda externa escura
    draw.ellipse([8, 8, size - 8, size - 8], outline=(15, 17, 24), width=10)
    # Anel dourado principal
    draw.ellipse([18, 18, size - 18, size - 18], outline=(212, 175, 55), width=6)
    # Anel rúnico intermediário
    draw.ellipse([26, 26, size - 26, size - 26], outline=(140, 115, 32), width=3)
    # Anel interno com brilho
    draw.ellipse([34, 34, size - 34, size - 34], outline=(250, 228, 140), width=2)

    # 4 Gemas de canto nos eixos cardeais
    for angle in [0, math.pi/2, math.pi, 3*math.pi/2]:
        gx = int(size/2 + (size/2 - 20) * math.cos(angle))
        gy = int(size/2 + (size/2 - 20) * math.sin(angle))
        draw.ellipse([gx - 10, gy - 10, gx + 10, gy + 10], fill=relic_tint, outline=(255, 255, 255), width=2)

    out_path = os.path.join(RELICS_DIR, output_filename)
    relic.save(out_path, quality=95)
    print(f"  ✓ Relíquia gerada: {output_filename}")

def generate_relics():
    print("-> Gerando conjunto completo de Relíquias e Amuletos HD...")
    # 2.1. Amuleto da Força (sword.jpg)
    create_relic_medal(os.path.join(ASSETS_DIR, 'cards', 'sword.jpg'), 'relic_strength.jpg', (231, 76, 60))
    # 2.2. Orbe Ancião (meteor.jpg)
    create_relic_medal(os.path.join(ASSETS_DIR, 'cards', 'meteor.jpg'), 'relic_mana.jpg', (52, 152, 219))
    # 2.3. Cálice de Sangue (phoenix.jpg)
    create_relic_medal(os.path.join(ASSETS_DIR, 'cards', 'phoenix.jpg'), 'relic_blood.jpg', (192, 57, 43))
    # 2.4. Escudo de Espinhos (postura_espinhos.jpg)
    create_relic_medal(os.path.join(ASSETS_DIR, 'cards', 'postura_espinhos.jpg'), 'relic_spikes.jpg', (46, 204, 113))
    # 2.5. Bolsa da Fortuna (merchant.jpg)
    create_relic_medal(os.path.join(ASSETS_DIR, 'sprites', 'merchant.jpg'), 'relic_fortune.jpg', (241, 196, 15))
    # 2.6. Manto de Éter (passo_sombrio.jpg)
    create_relic_medal(os.path.join(ASSETS_DIR, 'cards', 'passo_sombrio.jpg'), 'relic_cloak.jpg', (155, 89, 182))
    # 2.7. Pedra de Amolar (estocada_precisa.jpg)
    create_relic_medal(os.path.join(ASSETS_DIR, 'cards', 'estocada_precisa.jpg'), 'relic_whetstone.jpg', (230, 126, 34))
    print("✅ 7/7 Relíquias geradas com sucesso!")

# -------------------------------------------------------------
# 3. GERAÇÃO DE LOGO OFICIAL E FUNDOS DE TELA ÉPICOS
# -------------------------------------------------------------
def generate_menu_and_screens():
    print("-> Gerando artes monumentais de Menu, Vitória e Derrota...")

    # 3.1. Fundo do Menu Principal (Portal Sinistro das Catacumbas com Iluminação Dramática)
    catacombs = Image.open(os.path.join(BG_DIR, 'catacombs.jpg')).convert('RGB')
    cw, ch = catacombs.size
    menu_bg = ImageEnhance.Contrast(catacombs).enhance(1.25)
    menu_bg = ImageEnhance.Brightness(menu_bg).enhance(0.85)
    menu_bg = ImageEnhance.Color(menu_bg).enhance(1.15)
    # Vinheta dramática gótica
    vignette = Image.new('L', (cw, ch), 0)
    vdraw = ImageDraw.Draw(vignette)
    vdraw.ellipse([int(cw * 0.1), int(ch * 0.05), int(cw * 0.9), int(ch * 0.95)], fill=255)
    vignette = vignette.filter(ImageFilter.GaussianBlur(radius=80))
    dark_layer = Image.new('RGB', (cw, ch), (6, 7, 10))
    final_menu = Image.composite(menu_bg, dark_layer, vignette)
    final_menu.save(os.path.join(BG_DIR, 'main_menu_bg.jpg'), quality=95)

    # 3.2. Fundo de Vitória Gloriosa (Covil Dracônico com Luz Divina Dourada)
    dragon_lair = Image.open(os.path.join(BG_DIR, 'dragon_lair.jpg')).convert('RGB')
    vic_bg = ImageEnhance.Brightness(dragon_lair).enhance(1.05)
    vic_bg = ImageEnhance.Contrast(vic_bg).enhance(1.2)
    # Overlay dourado de celebração
    gold_overlay = Image.new('RGB', vic_bg.size, (255, 215, 0))
    vic_bg = Image.blend(vic_bg, gold_overlay, 0.08)
    vic_bg.save(os.path.join(BG_DIR, 'victory_bg.jpg'), quality=95)

    # 3.3. Fundo de Derrota (Cripta Fúnebre e Cinzas Carmesim)
    mines = Image.open(os.path.join(BG_DIR, 'mines.jpg')).convert('RGB')
    def_bg = ImageEnhance.Brightness(mines).enhance(0.7)
    def_bg = ImageEnhance.Contrast(def_bg).enhance(1.3)
    # Overlay carmesim fúnebre
    crimson_overlay = Image.new('RGB', def_bg.size, (110, 16, 26))
    def_bg = Image.blend(def_bg, crimson_overlay, 0.15)
    def_bg.save(os.path.join(BG_DIR, 'defeat_bg.jpg'), quality=95)

    # 3.4. Emblema do Logo Oficial (Brasão de Ferro & Ouro Rúnico)
    emblem_w, emblem_h = 700, 300
    logo_img = Image.new('RGBA', (emblem_w, emblem_h), (0, 0, 0, 0))
    ldraw = ImageDraw.Draw(logo_img)
    # Brasão heráldico central
    cx, cy = emblem_w // 2, emblem_h // 2
    # Asas e ornamentos de fundo
    ldraw.polygon([(cx - 240, cy), (cx, cy - 110), (cx + 240, cy), (cx, cy + 110)], fill=(20, 23, 34, 230), outline=(212, 175, 55, 255))
    ldraw.polygon([(cx - 210, cy), (cx, cy - 90), (cx + 210, cy), (cx, cy + 90)], fill=(12, 14, 20, 240), outline=(140, 115, 32, 255))
    # Espadas cruzadas
    ldraw.line([(cx - 160, cy - 80), (cx + 160, cy + 80)], fill=(250, 228, 140, 255), width=8)
    ldraw.line([(cx + 160, cy - 80), (cx - 160, cy + 80)], fill=(250, 228, 140, 255), width=8)
    # Joia central
    ldraw.ellipse([(cx - 30, cy - 30), (cx + 30, cy + 30)], fill=(231, 76, 60, 255), outline=(255, 255, 255, 255), width=4)
    # Salva logo em PNG com transparência
    logo_img.save(os.path.join(UI_DIR, 'menu_logo_emblem.png'))
    print("✅ Menus, telas finais e logotipo gerados com sucesso!")

if __name__ == '__main__':
    generate_potions()
    generate_relics()
    generate_menu_and_screens()
    print("\n🎉 TODOS OS ASSETS VISUAIS HD FORAM CRIADOS E SALVOS COM SUCESSO!")
