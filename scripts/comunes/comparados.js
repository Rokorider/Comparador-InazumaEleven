let btnMusica = document.getElementById('btnMusica');
let imagenMusica = document.getElementById('imagenMusica');
let cancion = document.getElementById('cancion');
let reproduciendo = false;
let indiceCancion = 0;

let canciones = [
    "../img/audio/cancion2.mp3", 
    "../img/audio/Holy Ground.mp3",
    "../img/audio/Inazuma11 OST 3 - Epsilon's Attack_XngLChWsZaU.mp3", 
    "../img/audio/Inazuma11 OST 2 - Mou Hitori no Ace Striker_Zt2nfGJ4utE.mp3", 
    "../img/audio/Inazuma11 OST 3 - Blast_1Hw7Z1Nr7hY.mp3", 
    "../img/audio/Inazuma Eleven - OST - Activate_ Burning Phase_tFVWlEVcUE0.mp3", 
    "../img/audio/Inazuma11 OST 1 - Mortal Battle With Imperial Academy (Animever.)_r-vduKfBTGg.mp3", 
    "../img/audio/Inazuma11 OST 2 - Raimon no chikara_N4EuBoJiiR8.mp3", 
];

// Función para reproducir la canción actual
function reproducirCancionActual() {
    cancion.src = canciones[indiceCancion];
    console.log(cancion.src);
    cancion.play();
    reproduciendo = true;
    imagenMusica.classList.add('rotating'); // Iniciar la rotación cuando se reproduce la canción
    btnMusica.classList.add('imagenMusica-sonando'); // Añadir la clase cuando se inicia la reproducción
}

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
        reproducirCancionActual();
    }
}

// Agregar un controlador de eventos de clic al botón btnMusica
btnMusica.addEventListener('click', function () {
    // Reproducir o detener la canción cuando se haga clic en el botón btnMusica
    reproducirDetenerCancion();
});

// Agregar un controlador de eventos para cuando termine una canción
cancion.addEventListener('ended', function () {
    // Avanzar al siguiente índice de la canción
    indiceCancion = (indiceCancion + 1) % canciones.length;
    reproducirCancionActual();
});

// Eliminar la rotación de la imagenMusica cuando se pausa la canción
imagenMusica.classList.remove('rotating');
