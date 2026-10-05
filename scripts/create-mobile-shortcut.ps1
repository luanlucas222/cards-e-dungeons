$ws = New-Object -ComObject WScript.Shell
$sc = $ws.CreateShortcut("C:\Users\GRAFICA\Desktop\Jogar no Celular (Servidor).lnk")
$sc.TargetPath = "C:\Users\GRAFICA\Desktop\1_Projetos_e_Trabalho\cards\Iniciar_Servidor_Mobile.bat"
$sc.WorkingDirectory = "C:\Users\GRAFICA\Desktop\1_Projetos_e_Trabalho\cards"
$sc.IconLocation = "C:\Users\GRAFICA\Desktop\1_Projetos_e_Trabalho\cards\assets\ui\icon.ico,0"
$sc.Description = "Iniciar Servidor Mobile de Cards e Dungeons"
$sc.Save()
Write-Host "Atalho criado com sucesso na Area de Trabalho!"
