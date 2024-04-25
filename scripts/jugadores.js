// Definir variable global para almacenar los datos de los jugadores
let jugadores;
// Función para obtener los datos de la API
function obtenerDatos() {
    // Realizar una solicitud a la API 'prueba.php' utilizando fetch
    fetch('conexionBD.php')
        // Procesar la respuesta como JSON
        .then(function(response) {
            return response.json();
        })
        // Manejar los datos obtenidos
        .then(function(data) {
            // Asignar los datos de los jugadores a la variable global 'jugadores'
            jugadores = data;
            console.log(jugadores)
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
    });

    // Llamar a la función para obtener los datos de los jugadores
    obtenerDatos();
}

// Función para mostrar los jugadores del equipo correspondiente al escudo
function mostrarJugadoresPorEquipo(idEquipo) {
    // Filtrar los jugadores que pertenecen al equipo correspondiente
    const jugadoresEquipo = jugadores.filter(function(jugador) {
        // Comparar el ID del equipo del jugador con el ID del equipo del escudo
        return jugador.Equipo === idEquipo;
    });

    // Limpiar el contenedor de jugadores antes de mostrar nuevos jugadores
    var contenedorJugadores = document.getElementById('jugadores');
    contenedorJugadores.innerHTML = '';

    // Mostrar los jugadores del equipo en el contenedor
    jugadoresEquipo.forEach(function(jugador) {
        agregarJugador(jugador, contenedorJugadores);
    });
}

// Función para eliminar todos los jugadores del contenedor
function eliminarJugadores() {
    var contenedorJugadores = document.getElementById('jugadores');
    contenedorJugadores.innerHTML = '';
}

// Función para agregar un jugador al contenedor de jugadores
function agregarJugador(jugador, contenedor) {
    // Crear un elemento div que represente al jugador
    const jugadorItem = document.createElement('div');
    jugadorItem.className = 'jugador';
    jugadorItem.innerHTML = `
        <!-- Estructura HTML para mostrar los datos del jugador -->
        <div class="infoJugador">
            <!-- Sección para mostrar la imagen del jugador -->
            <div class="imgJugador">
                <img src="${jugador.Imagenes}" alt="${jugador.Nombre_Real}">
            </div>
            <!-- Sección para mostrar los datos del jugador -->
            <div class="datosJugador">
                <!-- Detalles del jugador -->
                <div class="datos1">
                    <div class="nombre">
                        <p>${jugador.Nombre_Real}</p>
                    </div>
                    <div class="nivel">
                        <p>Niv. 99</p>
                    </div>
                    <div class="posicion">
                        <div class="posicionTexto">
                            <p>${jugador.Posición}</p>
                        </div>
                    </div>
                </div>
                <!-- Más detalles del jugador -->
                <div class="datos1">
                    <div class="nombre">
                        <p>${jugador.Apodo}</p>
                    </div>
                    <div class="genero">
                        <img src="../img/generos/${jugador.Género}.png" alt="${jugador.Género}">
                    </div>
                    <div class="elemento">
                        <img src="../img/Elementos/${jugador.Elemento}.png" alt="${jugador.Elemento}">
                    </div>
                </div>
                <!-- Puntos de energía (PE) y puntos de técnica (PT) del jugador -->
                <div class="datos2">
                    <div class="pe">
                        <div class="texto">
                            <p>PE</p>
                        </div>
                        <div class="valor">
                            <p>${jugador.PE}/${jugador.PE}</p>
                        </div>
                    </div>
                    <div class="pt">
                        <div class="texto">
                            <p>PT</p>
                        </div>
                        <div class="valor">
                            <p>${jugador.PT}/${jugador.PT}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Estadísticas del jugador -->
        <div class="estadisticasJugador">
            <!-- Estadísticas de habilidades del jugador -->
            <div class="estadistica">
                <div class="tipo">
                    <div class="tipoUnidad">
                        <p>Tiro</p>
                    </div>
                    <div class="unidad">
                        <p>${jugador.Tiro}</p>
                    </div>
                </div>
                <div class="tipo">
                    <div class="tipoUnidad">
                        <p>Físico</p>
                    </div>
                    <div class="unidad">
                        <p>${jugador.Físico}</p>
                    </div>
                </div>
            </div>
            <!-- Otras estadísticas del jugador -->
            <div class="estadistica">
                <div class="tipo">
                    <div class="tipoUnidad">
                        <p>Control</p>
                    </div>
                    <div class="unidad">
                        <p>${jugador.Control}</p>
                    </div>
                </div>
                <div class="tipo">
                    <div class="tipoUnidad">
                        <p>Defensa</p>
                    </div>
                    <div class="unidad">
                        <p>${jugador.Defensa}</p>
                    </div>
                </div>
            </div>
            <div class="estadistica">
                <div class="tipo">
                    <div class="tipoUnidad">
                        <p>Rapidez</p>
                    </div>
                    <div class="unidad">
                        <p>${jugador.Rapidez}</p>
                    </div>
                </div>
                <div class="tipo">
                    <div class="tipoUnidad">
                        <p>Aguante</p>
                    </div>
                    <div class="unidad">
                        <p>${jugador.Aguante}</p>
                    </div>
                </div>
            </div>  
            <!-- Estadística única del jugador -->
            <div class="estadistica">
                <div class="tipoUnico">
                    <div class="tipoUnidadUnica">
                        <p>Valor</p>
                    </div>
                    <div class="unidadUnica">
                        <p>${jugador.Valor}</p>
                    </div>
                </div>
            </div>
        </div>          
        <!-- Descripción del jugador -->
        <div class="juego">
            <p class="descripcion">${jugador.Equipo}</p>
        </div>
    `;
    // Agregar el elemento del jugador al contenedor
    contenedor.appendChild(jugadorItem);
}

// Llamar a la función para inicializar la interfaz
obtnerIdsYcomprobarJugadores();

// Llamar a la función para obtener los datos de los jugadores
obtenerDatos();
