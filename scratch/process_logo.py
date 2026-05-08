from PIL import Image

def make_transparent(img_path, output_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        # Si el pixel es muy oscuro (negro o casi negro), hacerlo transparente
        # item[0], item[1], item[2] son R, G, B
        if item[0] < 50 and item[1] < 50 and item[2] < 50:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Imagen guardada en {output_path}")

if __name__ == "__main__":
    make_transparent("assets/firma.png", "assets/firma.png")
