function obtenerDatos() {
    // Realizar una solicitud a la API 'prueba.php' utilizando fetch
    return fetch('../php/conexiones/conexionBDJugadoresPersonales.php')
        // Procesar la respuesta como JSON
        .then(function (response) {
            return response.json();
        })
        // Manejar los datos obtenidos
        .then(function (data) {
            // Asignar los datos de los jugadores a la variable global 'jugadores'
            jugadores = data;
            console.log(jugadores);
            console.log("hola")
            // Devolver los datos de los jugadores
            return jugadores;
        })
        // Manejar errores en caso de que la solicitud falle
        .catch(function (error) {
            console.error('Error al obtener los datos de jugadores:', error);
        });
}

function imprimirDatos() {
    let main = document.getElementById('main');

    // Verificar si hay datos de jugadores disponibles

    // Iterar sobre cada jugador
    jugadores.forEach(function (jugador) {
        // Crear un elemento de párrafo para mostrar los detalles del jugador
        let jugadorElemento = document.createElement('p');
        jugadorElemento.textContent = `Nombre: ${jugador.Nombre_Real}, Apodo: ${jugador.Apodo}, Descripción: ${jugador.Descripcion}, Posición: ${jugador.Posicion}, Genero: ${jugador.Genero}, PE: ${jugador.PE}, PT: ${jugador.PT}, Tiro: ${jugador.Tiro}, Control: ${jugador.Control}, Defensa: ${jugador.Defensa}, Rapidez: ${jugador.Rapidez}, Aguante: ${jugador.Aguante}, Fisico: ${jugador.Fisico}, Valor: ${jugador.Valor} `;

        // Agregar el elemento del jugador al <main>
        main.appendChild(jugadorElemento);
    });

}


// Llamar a la función imprimirDatos después de obtener los datos de los jugadores
obtenerDatos().then(imprimirDatos);
