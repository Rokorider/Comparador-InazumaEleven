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