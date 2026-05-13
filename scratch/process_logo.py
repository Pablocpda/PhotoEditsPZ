from PIL import Image
import sys

def make_transparent(img_path, output_path):
    try:
        img = Image.open(img_path).convert("RGBA")
        datas = img.getdata()

        new_data = []
        for item in datas:
            # item = (R, G, B, A)
            # Usar la luminancia (promedio de RGB) como canal Alfa (transparencia).
            # Todo el pixel será blanco (255, 255, 255), y su opacidad dependerá de qué tan brillante era originalmente.
            # Esto elimina el fondo negro perfectamente y preserva el anti-aliasing del logo blanco.
            luminance = int(0.299 * item[0] + 0.587 * item[1] + 0.114 * item[2])
            new_data.append((255, 255, 255, luminance))

        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Imagen guardada en {output_path}")
    except Exception as e:
        print(f"Error procesando la imagen: {e}", file=sys.stderr)

if __name__ == "__main__":
    make_transparent("assets/firma.png", "public/logo.png")
