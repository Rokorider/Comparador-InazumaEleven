let cancion = document.getElementById('cancion');
// Función para reproducir la canción
function reproducirCancion() {
    cancion.play();
}
// Agregar un controlador de eventos de clic al elemento body
document.body.addEventListener('click', function () {
    // Reproducir la canción cuando se haga clic en cualquier parte del cuerpo
    reproducirCancion();
});