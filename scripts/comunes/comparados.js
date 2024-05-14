let btnMusica = document.getElementById('btnMusica');
let imagenMusica = document.getElementById('imagenMusica');
let cancion = document.getElementById('cancion');
let reproduciendo = false;

// Función para reproducir o detener la canción
function reproducirDetenerCancion() {
    // Si la canción se está reproduciendo, detenerla y establecer el tiempo de reproducción en 0
    if (reproduciendo) {
        cancion.pause();
        cancion.currentTime = 0;
        reproduciendo = false;
        imagenMusica.classList.remove('rotating'); // Detener la rotación cuando se pausa la canción
        btnMusica.classList.remove('imagenMusica-sonando'); // Eliminar la clase cuando se pausa la canción
    } else {
        cancion.play();
        reproduciendo = true;
        imagenMusica.classList.add('rotating'); // Iniciar la rotación cuando se reproduce la canción
        btnMusica.classList.add('imagenMusica-sonando'); // Añadir la clase cuando se inicia la reproducción
    }
}

// Agregar un controlador de eventos de clic al botón btnMusica
btnMusica.addEventListener('click', function () {
    // Reproducir o detener la canción cuando se haga clic en el botón btnMusica
    reproducirDetenerCancion();
});

// Eliminar la rotación de la imagenMusica cuando se pausa la canción
imagenMusica.classList.remove('rotating');

