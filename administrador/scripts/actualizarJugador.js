document.getElementById('inputImagen').addEventListener('change', function(event) {
    const archivo = event.target.files[0];
    if (archivo) {
        const lector = new FileReader();
        lector.onload = function(e) {
            document.getElementById('imagenPrevia').src = e.target.result;
            document.getElementById('imagenPrevia').style.display = 'block'; // Muestra la imagen
        }
        lector.readAsDataURL(archivo);
    }
});
