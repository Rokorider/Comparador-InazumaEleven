let btnMusica = document.getElementById('btnMusica');
let cancion = document.getElementById('cancion');
let reproduciendo = false;

// Función para reproducir o detener la canción
function reproducirDetenerCancion() {
    if (reproduciendo) {
        cancion.pause();
        cancion.currentTime = 0;
        reproduciendo = false;
    } else {
        cancion.play();
        reproduciendo = true;
    }
}

// Agregar un controlador de eventos de clic al botón btnMusica
btnMusica.addEventListener('click', function () {
    // Reproducir o detener la canción cuando se haga clic en el botón btnMusica
    reproducirDetenerCancion();
});