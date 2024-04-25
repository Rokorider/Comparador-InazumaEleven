// Definir variable global para almacenar los datos de los jugadores
let jugadores;
// Función para obtener los datos de la API
function obtenerDatos() {
    // Realizar una solicitud a la API 'prueba.php' utilizando fetch
    fetch('prueba.php')
        // Procesar la respuesta como JSON
        .then(function(response) {
            return response.json();
        })
        // Manejar los datos obtenidos
        .then(function(data) {
            // Asignar los datos de los jugadores a la variable global 'jugadores'
            jugadores = data;
            console.log(jugadores);
        })
        // Manejar errores en caso de que la solicitud falle
        .catch(function(error) {
            console.error('Error al obtener los datos de jugadores:', error);
        });
}

// Función para inicializar la interfaz
function obtnerIdsYcomprobarJugadores() {
    // Agregar un event listener a cada escudo
    let escudos = document.querySelectorAll('.escudo');
    escudos.forEach(function(escudo) {
        escudo.addEventListener('click', function() {
            // Obtener el ID del equipo correspondiente al escudo
            let idEquipo = escudo.id;
            // Obtener el contenedor de jugadores
            let contenedorJugadores = document.getElementById('jugadores');
            // Si el contenedor de jugadores está vacío o si se va a mostrar un equipo diferente al que ya está mostrado
            if (contenedorJugadores.innerHTML === '' || contenedorJugadores.dataset.equipo !== idEquipo) {
                // Mostrar los jugadores del equipo correspondiente
                mostrarJugadoresPorEquipo(idEquipo);
                // Almacenar el ID del equipo en el atributo de datos del contenedor
                contenedorJugadores.dataset.equipo = idEquipo;
            } else {
                // Si el mismo equipo ya está mostrado, eliminar todos los jugadores
                eliminarJugadores();
                // Eliminar el atributo de datos del contenedor
                contenedorJugadores.dataset.equipo = '';
            }
        });
    })
    // Llamar a la función para obtener los datos de los jugadores
    obtenerDatos();
}