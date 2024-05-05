from rembg import remove
from PIL import Image

image_input = Image.open("descarga.jpg")
output = remove(image_input)
output.save("img/descarga.png", "PNG")