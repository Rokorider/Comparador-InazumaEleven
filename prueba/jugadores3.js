

// Función para verificar el tamaño de la pantalla y actualizar el contenido en consecuencia
function actualizarContenidoSegunPantalla() {
    // Obtener el ancho de la pantalla
    let anchoPantalla = window.innerWidth;

    // Obtener el section que contiene el contenido que deseas borrar
    let contenedorJugadores = document.getElementById('contenedorJugadores');

    // Verificar el ancho de la pantalla
    if (anchoPantalla < 425) {
        // Si el ancho de la pantalla es menor que 425px, borrar el contenido del section
        contenedorJugadores.innerHTML = `
            <div class="contenedorBuscadores">
                <div class="select"  id="buscadorJuegos">
                    <select></select>
                </div>
                <div class="select" id="buscadorEquipos">
                    <select></select>
                </div>
            </div>
        `;
        // Definir variable global para almacenar los datos de los jugadores
let jugadores;

// Función para obtener los datos de la API
function obtenerDatos() {
    // Realizar una solicitud a la API 'prueba.php' utilizando fetch
    fetch('../php/conexionBD.php')
        // Procesar la respuesta como JSON
        .then(function(response) {
            return response.json();
        })
        // Manejar los datos obtenidos
        .then(function(data) {
            // Asignar los datos de los jugadores a la variable global 'jugadores'
            jugadores = data;
            console.log(jugadores);

            // Llenar el buscador de juegos con los juegos disponibles
            llenarBuscadorJuegos();
        })
        // Manejar errores en caso de que la solicitud falle
        .catch(function(error) {
            console.error('Error al obtener los datos de jugadores:', error);
        });
}

// Función para llenar el buscador de juegos con los juegos disponibles
function llenarBuscadorJuegos() {
    // Obtener el elemento del buscador de juegos
    let buscadorJuegos = document.getElementById('buscadorJuegos').querySelector('select');
    
    // Crear un array para almacenar los juegos únicos
    let juegos = [];
    
    // Iterar sobre los datos de los jugadores para obtener los juegos únicos
    jugadores.forEach(function(jugador) {
        // Verificar si el juego del jugador ya está en la lista de juegos
        if (!juegos.includes(jugador.Juego)) {
            // Agregar el juego a la lista de juegos
            juegos.push(jugador.Juego);
        }
    });
    
    // Ordenar los juegos alfabéticamente
    juegos.sort();
    
    // Limpiar el contenido actual del buscador de juegos
    buscadorJuegos.innerHTML = '';
    
    // Agregar la opción por defecto al buscador de juegos
    let defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Escoge un Juego';
    buscadorJuegos.appendChild(defaultOption);
    
    // Agregar las opciones de juegos al buscador de juegos
    juegos.forEach(function(juego) {
        let option = document.createElement('option');
        option.value = juego;
        option.textContent = juego;
        buscadorJuegos.appendChild(option);
    });
    
    // Agregar evento de cambio al buscador de juegos
    buscadorJuegos.addEventListener('change', actualizarEquipos);
}

// Función para actualizar los equipos disponibles según el juego seleccionado
function actualizarEquipos() {
    // Limpiar el contenedor de jugadores
    document.getElementById('jugadores').innerHTML = '';

    // Obtener el juego seleccionado en el buscador de juegos
    let juegoSeleccionado = this.value;
    
    // Obtener el elemento del buscador de equipos
    let buscadorEquipos = document.getElementById('buscadorEquipos').querySelector('select');
    
    // Filtrar los equipos disponibles para el juego seleccionado
    let equipos = [];
    jugadores.forEach(function(jugador) {
        if (jugador.Juego === juegoSeleccionado && !equipos.includes(jugador.Equipo)) {
            equipos.push(jugador.Equipo);
        }
    });
    
    // Limpiar el contenido actual del buscador de equipos
    buscadorEquipos.innerHTML = '';
    
    // Agregar la opción por defecto al buscador de equipos
    let defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Escoge un Equipo';
    buscadorEquipos.appendChild(defaultOption);
    
    // Agregar las opciones de equipos al buscador de equipos
    equipos.forEach(function(equipo) {
        let option = document.createElement('option');
        option.value = equipo;
        option.textContent = equipo;
        buscadorEquipos.appendChild(option);
    });
    
    // Agregar evento de cambio al buscador de equipos
    buscadorEquipos.addEventListener('change', mostrarJugadoresPorEquipo);
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

// Función para obtener el valor seleccionado en el buscador de equipos y mostrar los jugadores correspondientes
function mostrarJugadoresPorEquipo() {
    // Obtener el valor seleccionado en el buscador de equipos
    let equipoSeleccionado = document.getElementById('buscadorEquipos').querySelector('select').value;

    // Obtener el contenedor de jugadores
    let contenedorJugadores = document.getElementById('jugadores');

    // Limpiar el contenedor de jugadores antes de mostrar nuevos jugadores
    contenedorJugadores.innerHTML = '';

    // Filtrar los jugadores que pertenecen al equipo seleccionado y mostrarlos
    jugadores.forEach(function(jugador) {
        if (jugador.Equipo === equipoSeleccionado) {
            agregarJugador(jugador, contenedorJugadores);
        }
    });
}

obtenerDatos();



    } else {
        contenedorJugadores.innerHTML = `
        <div class="escudos">
        <div class="tituloJuego">
            <h1>Inazuma Eleven 1</h1>
        </div>
        <div class="escudo" id="Brain">
            <div class="imagenEscudo"><img src="../img/Escudos/Brain.png" alt=""></div>
            <div class="nombreEscudo"><p>Instituto Brain</p></div>
        </div>
        <div class="escudo" id="Inazuma Eleven">
            <div class="imagenEscudo"> <img src="../img/Escudos/Inazuma_Eleven.png" alt=""></div>
            <div class="nombreEscudo"><p>Inazuma Eleven</p></div>
        </div>
        <div class="escudo" id="Raimon">
            <div class="imagenEscudo"> <img src="../img/Escudos/Raimon.png" alt=""></div>
            <div class="nombreEscudo"><p>Instituto Raimon</p></div>
        </div>
        <div class="escudo" id="Inazuma KFC">
            <div class="imagenEscudo"> <img src="../img/Escudos/Inazuma_KFC.png" alt=""></div>
            <div class="nombreEscudo"><p>Inazuma Kids</p></div>
        </div>
        <div class="escudo" id="Kirkwood">
            <div class="imagenEscudo"> <img src="../img/Escudos/Kirkwood.png" alt=""></div>
            <div class="nombreEscudo"><p>Instituto Kirkwood</p></div>
        </div>
        <div class="escudo" id="Zeus">
            <div class="imagenEscudo"> <img src="../img/Escudos/Zeus.png" alt=""></div>
            <div class="nombreEscudo"><p>Instituto Zeus</p></div>
        </div>
        <div class="escudo" id="Wild">
            <div class="imagenEscudo"> <img src="../img/Escudos/Wild.png" alt=""></div>
            <div class="nombreEscudo"><p>Instituto Wild</p></div>
        </div>
        <div class="escudo" id="Shuriken">
            <div class="imagenEscudo"> <img src="../img/Escudos/Shuriken.png" alt=""></div>
            <div class="nombreEscudo"><p>Instituto Shuriken</p></div>
        </div>
        <div class="escudo" id="Farm">
            <div class="imagenEscudo"> <img src="../img/Escudos/Farm.png" alt=""></div>
            <div class="nombreEscudo"><p>Instituto Farm</p></div>
        </div>
        <div class="escudo" id="Umbrella">
            <div class="imagenEscudo"> <img src="../img/Escudos/Umbrella.png" alt=""></div>
            <div class="nombreEscudo"><p>Instituto Umbrella</p></div>
        </div>
        <div class="escudo" id="Occult">
            <div class="imagenEscudo"> <img src="../img/Escudos/Occult.png" alt=""></div>
            <div class="nombreEscudo"><p>Instituto Occult</p></div>
        </div>
        <div class="escudo" id="Otaku">
            <div class="imagenEscudo"> <img src="../img/Escudos/Otaku.png" alt=""></div>
            <div class="nombreEscudo"><p>Instituto Otaku</p></div>
        </div>
        <div class="escudo" id="Sally's">
            <div class="imagenEscudo"> <img src="../img/Escudos/Sallys.png" alt=""></div>
            <div class="nombreEscudo"><p>Sally's</p></div>
        </div>
        <div class="escudo" id="Royal Academy">
            <div class="imagenEscudo"> <img src="../img/Escudos/Royal_Academy.png" alt=""></div>
            <div class="nombreEscudo"><p>Royal Academy</p></div>
        </div>
    </div>

    <div class="jugadores" id="jugadores"></div>

    </div>
        `;
        // Definir variable global para almacenar los datos de los jugadores
let jugadores;
// Función para obtener los datos de la API
function obtenerDatos() {
    // Realizar una solicitud a la API 'prueba.php' utilizando fetch
    fetch('../php/conexionBD.php')
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

    }
}

// Llamar a la función para actualizar el contenido según el tamaño de la pantalla cuando se cargue la página
window.addEventListener('load', actualizarContenidoSegunPantalla);

// Llamar a la función para actualizar el contenido según el tamaño de la pantalla cuando se redimensione la pantalla
window.addEventListener('resize', actualizarContenidoSegunPantalla);

