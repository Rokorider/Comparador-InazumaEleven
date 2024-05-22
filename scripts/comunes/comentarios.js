let comentarios = document.getElementById('comentarios');
let comentario = [];

const ImagenJugador = [
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Canon.png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Mark_(IJ).png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Darren_(IJ).png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Jack_(IJ).png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Archer.png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Nathan_(IJ).png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Hurley_(IJ).png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Thor.png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Jordan.png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Caleb_(IJ).png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Jude_(IJ).png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Samford_(IJ).png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Shawn_(IJ).png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Xavier.png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Kevin_(IJ).png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Austin.png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Axel_(IJ).png',
    '../img/imgJugadores/InazumaEleven1/Jugadores/Raimon/Max.png',
    '../img/imgJugadores/InazumaEleven1/Jugadores/Zeus/Aphrodite.png',
    '../img/imgJugadores/InazumaEleven2/Jugadores/Servicio_Secreto/Tori.png',
    '../img/imgJugadores/InazumaEleven2/Jugadores/Triple_C/Sue.png',
    '../img/imgJugadores/InazumaEleven2/Jugadores/Mary_Times/Shark.png',
    '../img/imgJugadores/InazumaEleven2/Jugadores/Mary_Times/Soundtown.png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Neo_Japon/King_(NJ).png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Neo_Japon/Zell_(NJ).png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Unicorn/Bobby_(U).png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Unicorn/Erick_(U).png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/The_Little_Giants/Hector.png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Unicorn/Erick_(U).png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Orfeo/Bianchi.png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Los_emperadores/Torres.png',
    '../img/imgJugadores/InazumaEleven3/Jugadores/Equipo_Ogro/Lancer.png',
];

function obtenerDatosComentarios() {
    return fetch('../php/usuario/cargar_comentarios.php')
        .then(response => response.json())
        .then(data => {
            comentario = data;
            return comentario;
        })
        .catch(error => {
            console.error('Error al obtener los datos de jugadores:', error);
        });
}

function mostrarComentarios() {
    comentarios.innerHTML = '';
    for (let i = 0; i < comentario.length; i++) {
        // Selecciona una imagen al azar
        const imagenAleatoria = ImagenJugador[Math.floor(Math.random() * ImagenJugador.length)];

        comentarios.innerHTML += `
        <div class="comentario">
        <div class="cajaFoto">
        <img src="${imagenAleatoria}" alt="Foto de perfil">
         </div>
         <div class="cajaGeneral">
            <div class="cajaDatos">
                <div class="nombre">
                    <p>${comentario[i].nombre}</p>
                </div>
                <div class="fecha">
                    <p>${comentario[i].fecha}</p>
                </div>
            </div>
            <div class="cajaComentario">
                <p>${comentario[i].comentario}</p>
            </div>
            </div>
        </div>
        `;
    }
}

obtenerDatosComentarios().then(mostrarComentarios);

// JavaScript para ajustar automáticamente la altura del textarea
let comentarioText = document.getElementById('comentario');
let comentarioError = true;
let cajaErrorComentario = document.getElementById('cajaErrorComentario');
let boton = document.getElementById('boton');

comentarioText.addEventListener('input', function () {
    this.style.height = 'auto'; // Resetea la altura
    this.style.height = (this.scrollHeight) + 'px'; // Ajusta la altura basada en el contenido
    
    if (this.value.length >= 2000) {
        cajaErrorComentario.textContent = 'Se ha alcanzado el máximo de caracteres';
        aplicarEstiloError(cajaErrorComentario);
    } else {
        limpiarEstiloError(cajaErrorComentario);
    }
});

function validarComentario() {
    if (comentarioText.value === '') {
        cajaErrorComentario.textContent = 'Escribe un comentario';
        aplicarEstiloError(cajaErrorComentario);
        comentarioError = false;
    } else {
        limpiarEstiloError(cajaErrorComentario);
        comentarioError = true;
    }
}

function aplicarEstiloError(elemento) {
    elemento.style.border = '3px solid #b15d654d';
    elemento.style.backgroundColor = '#f99c9c';
    elemento.style.color = '#380c10';
}

function limpiarEstiloError(elemento) {
    elemento.style.border = ''; // Se elimina el borde personalizado
    elemento.style.backgroundColor = ''; // Se elimina el color de fondo personalizado
    elemento.style.color = ''; // Se restablece el color de texto original
}

boton.addEventListener('click', function () {
    validarComentario();

    if (comentarioError) {
        // Enviar formulario
        document.getElementById("formComentario").submit(); // Envía el formulario
    }
});
