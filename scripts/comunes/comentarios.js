let comentarios = document.getElementById('comentarios');
let comentario = [];

const ImagenJugador = [
    'Canon.png',
    'Mark_(IJ).png',
    'Darren_(IJ).png',
    'Jack_(IJ).png',
    'Scotty_(IJ).png',
    'Archer.png',
    'Tod_(IJ).png',
    'Nathan_(IJ).png',
    'Hurley_(IJ).png',
    'Thor.png',
    'Jordan.png',
    'Caleb_(IJ).png',
    'Jude_(IJ).png',
    'Samford_(IJ).png',
    'Shawn_(IJ).png',
    'Xavier.png',
    'Kevin_(IJ).png',
    'Austin.png',
    'Axel_(IJ).png',
    'Canon.png'
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
        <img src="../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/${imagenAleatoria}" alt="Foto de perfil">
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
