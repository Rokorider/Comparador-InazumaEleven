let comentarios = document.getElementById('comentarios');
let comentario = [];

function obtenerDatosComentarios() {
    return fetch('../php/usuario/cargar_comentarios.php')
        // Procesar la respuesta como JSON
        .then(function (response) {
            return response.json();
        })
        // Manejar los datos obtenidos
        .then(function (data) {
            // Asignar los datos de los jugadores a la variable global 'jugadores'
            comentario = data;
            // Devolver los datos de los jugadores
            return comentario;
        })
        // Manejar errores en caso de que la solicitud falle
        .catch(function (error) {
            console.error('Error al obtener los datos de jugadores:', error);
        });
}

function mostrarComentarios() {
    comentarios.innerHTML = '';
    for (let i = 0; i < comentario.length; i++) {
        comentarios.innerHTML += `
        <div class="comentario">
        <div calss="cajaFoto">
        <img src="../img/imgJugadores/InazumaEleven3/Jugadores/Inazuma_Japon/Canon.png" alt="Foto de perfil">
         </div>
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
        `;
    }
}

obtenerDatosComentarios().then(function () {

    mostrarComentarios();

});

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
    if (comentarioText.value == '') {
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

    if (comentarioError == true) {
        // Enviar formulario
        document.getElementById("formComentario").submit(); // Envía el formulario
    }
});
