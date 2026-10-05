import os
from PIL import Image

src_img_path = r"C:\Users\GRAFICA\.gemini\antigravity\brain\97e13ee1-561d-4653-a8bb-6359c6f1f82c\game_icon_logo_1791165659893.jpg"
project_dir = r"C:\Users\GRAFICA\Desktop\1_Projetos_e_Trabalho\cards"
assets_ui_dir = os.path.join(project_dir, "assets", "ui")

os.makedirs(assets_ui_dir, exist_ok=True)

img = Image.open(src_img_path).convert("RGBA")

# 1. Salva cópia PNG de alta resolução
png_path = os.path.join(assets_ui_dir, "app_logo.png")
img.save(png_path, "PNG", quality=100)
print(f"Salvo PNG HD: {png_path}")

# 2. Gera ícone .ico com múltiplos tamanhos para Windows
ico_path = os.path.join(assets_ui_dir, "icon.ico")
icon_sizes = [(256, 256), (128, 128), (64, 64), (48, 48), (32, 32), (16, 16)]
img.save(ico_path, format="ICO", sizes=icon_sizes)
print(f"Salvo ICO multi-resolução: {ico_path}")
