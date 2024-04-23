let btnMusica = document.getElementById('btnMusica');
let imagenMusica = document.getElementById('imagenMusica');
let cancion = document.getElementById('cancion');
let reproduciendo = false;

// Función para reproducir o detener la canción
function reproducirDetenerCancion() {
    if (reproduciendo) {
        cancion.pause();
        cancion.currentTime = 0;
        reproduciendo = false;
        imagenMusica.classList.remove('rotating'); // Detener la rotación cuando se pausa la canción
    } else {
        cancion.play();
        reproduciendo = true;
        imagenMusica.classList.add('rotating'); // Iniciar la rotación cuando se reproduce la canción
    }
}

// Agregar un controlador de eventos de clic al botón btnMusica
btnMusica.addEventListener('click', function () {
    // Reproducir o detener la canción cuando se haga clic en el botón btnMusica
    reproducirDetenerCancion();
});

// Al cargar la página, asegúrate de que la imagenMusica no esté girando inicialmente
imagenMusica.classList.remove('rotating');

