Add-Type -AssemblyName System.Drawing

function Resize-Img($source, $target, $width, $height) {
    $srcImg = [System.Drawing.Image]::FromFile($source)
    $destBmp = New-Object System.Drawing.Bitmap($width, $height)
    $g = [System.Drawing.Graphics]::FromImage($destBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($srcImg, 0, 0, $width, $height)
    $destBmp.Save($target, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $destBmp.Dispose()
    $srcImg.Dispose()
    Write-Host "Created $target ($width x $height)"
}

$base = (Get-Location).Path
$logo = Join-Path $base "assets\ui\app_logo.png"

# 1. PWA Web Icons
Resize-Img $logo (Join-Path $base "assets\ui\icon-192.png") 192 192
Resize-Img $logo (Join-Path $base "assets\ui\icon-512.png") 512 512
Resize-Img $logo (Join-Path $base "assets\ui\icon-maskable-192.png") 192 192
Resize-Img $logo (Join-Path $base "assets\ui\icon-maskable-512.png") 512 512

# 2. Android Mipmap Icons (Capacitor)
$androidRes = Join-Path $base "android\app\src\main\res"
if (Test-Path $androidRes) {
    $densities = @(
        @{ Name = "mipmap-mdpi"; Size = 48; Fg = 108 },
        @{ Name = "mipmap-hdpi"; Size = 72; Fg = 162 },
        @{ Name = "mipmap-xhdpi"; Size = 96; Fg = 216 },
        @{ Name = "mipmap-xxhdpi"; Size = 144; Fg = 324 },
        @{ Name = "mipmap-xxxhdpi"; Size = 192; Fg = 432 }
    )

    foreach ($d in $densities) {
        $dir = Join-Path $androidRes $d.Name
        if (Test-Path $dir) {
            Resize-Img $logo (Join-Path $dir "ic_launcher.png") $d.Size $d.Size
            Resize-Img $logo (Join-Path $dir "ic_launcher_round.png") $d.Size $d.Size
            Resize-Img $logo (Join-Path $dir "ic_launcher_foreground.png") $d.Fg $d.Fg
        }
    }
    Write-Host "Android launcher icons generated successfully!"
}

Write-Host "All Mobile and PWA icons generated successfully!"
