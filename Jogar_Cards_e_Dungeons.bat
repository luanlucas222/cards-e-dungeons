@echo off
title Cards e Dungeons - Iniciando...
echo ====================================================
echo  Iniciando Cards e Dungeons no Windows...
echo ====================================================
if exist "dist\win-unpacked\Cards e Dungeons.exe" (
    start "" "dist\win-unpacked\Cards e Dungeons.exe"
) else if exist "dist\Cards e Dungeons 1.1.0.exe" (
    start "" "dist\Cards e Dungeons 1.1.0.exe"
) else (
    echo Executavel nao encontrado. Execute 'npm run dist:win' para compilar.
    pause
)
