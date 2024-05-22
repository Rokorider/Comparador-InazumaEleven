/*
Cuando escribí este código solo Dios y yo sabíamos cómo funcionaba.
Ahora solo Dios lo sabe.

:)
*/


// Definir variable global para almacenar los datos de los jugadores
let jugadores;
let contenedorJugadores = document.getElementById('contenedorJugadores');

let jugadoresPersonales = [];

function obtenerDatos() {
    // Realizar una solicitud a la API 'prueba.php' utilizando fetch
    return fetch('../php/conexiones/conexionBD.php')
        // Procesar la respuesta como JSON
        .then(function (response) {
            return response.json();
        })
        // Manejar los datos obtenidos
        .then(function (data) {
            // Asignar los datos de los jugadores a la variable global 'jugadores'
            jugadores = data;
            // Devolver los datos de los jugadores
            return jugadores;
        })
        // Manejar errores en caso de que la solicitud falle
        .catch(function (error) {
            console.error('Error al obtener los datos de jugadores:', error);
        });
}

function obtenerDatosPersonales() {
    // Realizar una solicitud a la API 'prueba.php' utilizando fetch
    return fetch('../php/conexiones/conexionBDJugadoresPersonales.php')
        // Procesar la respuesta como JSON
        .then(function (response) {
            return response.json();
        })
        // Manejar los datos obtenidos
        .then(function (data) {
            // Asignar los datos de los jugadores a la variable global 'jugadores'
            jugadoresPersonales = data;
            console.log(jugadoresPersonales);
            // Devolver los datos de los jugadores
            return jugadoresPersonales;
        })
        // Manejar errores en caso de que la solicitud falle
        .catch(function (error) {
            console.error('Error al obtener los datos de jugadores:', error);
        });
}

function obtenerTamañoPantalla() {
    let anchoPantalla = window.innerWidth;
    actualizarContenidoSegunPantalla(anchoPantalla);
}

// Función para verificar el tamaño de la pantalla y actualizar el contenido en consecuencia
function actualizarContenidoSegunPantalla(anchoPantalla) {

    // Obtener el section que contiene el contenido que deseas borrar
    let contenedorJugadores = document.getElementById('contenedorJugadores');

    // Verificar el ancho de la pantalla
    if (anchoPantalla < 427) {
        contenidoMovil(contenedorJugadores);
    } else {
        contenidoPantallaGrande(jugadores, jugadoresPersonales);
    }
}

function contenidoPantallaGrande() {
    // Limpiar el contenido existente
    contenedorJugadores.innerHTML = '';

    // Obtener datos de los jugadores
    obtenerDatos().then(function (jugadores) {
        // Obtener un conjunto de juegos únicos
        let juegosUnicos = new Set(jugadores.map(jugador => jugador.Juego));

        // Iterar sobre cada juego único
        juegosUnicos.forEach(juego => {
            // Crear un contenedor para este juego
            let contenedorJuego = document.createElement('div');
            contenedorJuego.className = 'escudos'; // Cambio de nombre de clase
            let tituloJuego = document.createElement('div');
            tituloJuego.className = 'tituloJuego'; // Agregando clase para el título
            tituloJuego.innerHTML = `<h1>${juego}</h1>`; // Rellenando el título con el nombre del juego
            let flecha = document.createElement('img');
            flecha.className = 'flecha'; 
            flecha.src = "../img/trianguloRelleno.png";
            tituloJuego.appendChild(flecha);
            contenedorJuego.appendChild(tituloJuego);

            // Agregar evento clic al título del juego para crear o eliminar los escudos

            let contenedorEscudos = contenedorJuego.querySelector('.contenedorEscudos');

            let contenedorEscudos2 = document.createElement('div');
            contenedorEscudos2.className = 'contenedorEscudos'; // Agregando clase para los escudos
            contenedorEscudos2.style.display = 'none'; // Inicialmente oculto

            if (contenedorEscudos) {
                contenedorJuego.removeChild(contenedorEscudos); // Eliminar contenedor de escudos si ya existe
            } else {

                // Filtrar jugadores por el juego actual
                let jugadoresDeEsteJuego = jugadores.filter(jugador => jugador.Juego === juego);

                // Crear un conjunto para evitar equipos duplicados
                let equiposUnicos = new Set();

                // Iterar sobre cada jugador de este juego
                jugadoresDeEsteJuego.forEach(jugador => {
                    // Agregar equipo al conjunto de equipos únicos
                    equiposUnicos.add(jugador.Equipo);
                });

                // Iterar sobre cada equipo único
                equiposUnicos.forEach(equipo => {
                    let escudo = document.createElement('div');
                    escudo.className = 'escudo';
                    escudo.id = equipo; // Usar el nombre del equipo como ID

                    let imagenEscudo = document.createElement('div');
                    imagenEscudo.className = 'imagenEscudo';
                    let imagen = document.createElement('img');

                    // Modificar el nombre del equipo para que coincida con el nombre del archivo de imagen
                    equipoModificado = equipo.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
                    equipoModificado = equipoModificado.replace(/'/g, '');
                    equipoModificado = equipoModificado.replace(/\s+/g, '_');


                    imagen.src = `../img/imgJugadores/${juego.replace(/\s+/g, "")}/Escudos/${equipoModificado}.png`; // Intenta cargar la imagen en formato png

                    imagen.onerror = function () {
                        this.onerror = null; // Elimina el controlador de errores actual para evitar bucles infinitos
                        this.src = `../img/imgJugadores/${juego.replace(/\s+/g, "")}/Escudos/${equipoModificado}.jpg`; // Intenta cargar la imagen en formato jpg si la PNG no está disponible
                    };

                    imagen.alt = equipo;

                    imagenEscudo.appendChild(imagen);

                    let nombreEscudo = document.createElement('div');
                    nombreEscudo.className = 'nombreEscudo';
                    let nombre = document.createElement('p');
                    nombre.textContent = equipo;
                    nombreEscudo.appendChild(nombre);

                    escudo.appendChild(imagenEscudo);
                    escudo.appendChild(nombreEscudo);

                    contenedorEscudos2.appendChild(escudo);
                });

                contenedorJuego.appendChild(contenedorEscudos2); // Agregar contenedor de escudos
                // Llamar a la función para agregar event listeners después de que los escudos estén agregados al DOM

            }

            tituloJuego.addEventListener('click', function () {
                if (contenedorEscudos2.style.display === 'none') {
                    contenedorEscudos2.style.display = 'flex';
                    flecha.style.rotate = '180deg';
                } else {
                    contenedorEscudos2.style.display = 'none';
                    flecha.style.rotate = '0deg';
                }
            });

            // Agregar el contenedor del juego al contenedor principal
            contenedorJugadores.appendChild(contenedorJuego);
            obtnerIdsYcomprobarJugadores();
        });
    });

    obtenerDatosPersonales().then(function (jugadoresPersonales) {
        if (jugadoresPersonales.length > 0) {
            let contenedorJuego = document.createElement('div');
            contenedorJuego.className = 'escudos'; // Cambio de nombre de clase
            let tituloJuego = document.createElement('div');
            tituloJuego.className = 'tituloJuego'; // Agregando clase para el título
            tituloJuego.innerHTML = `<h1>Jugadores Personales</h1>`; // Rellenando el título con el nombre del juego
            let flecha = document.createElement('img');
            flecha.className = 'flecha'; 
            flecha.src = "../img/trianguloRelleno.png";
            tituloJuego.appendChild(flecha);
            contenedorJuego.appendChild(tituloJuego);

            // Crear un contenedor para los escudos de este juego
            let contenedorEscudos = document.createElement('div');
            contenedorEscudos.className = 'contenedorEscudos'; // Agregando clase para los escudos
            contenedorEscudos.style.display = 'none'; // Inicialmente oculto
            contenedorJuego.appendChild(contenedorEscudos); // Agregar contenedor de escudos

            // Crear un conjunto para evitar equipos duplicados
            let equiposUnicos = new Set();

            // Iterar sobre cada equipo de estos jugadores
            jugadoresPersonales.forEach(jugadorPersonal => {
                // Agregar equipo al conjunto de equipos únicos
                equiposUnicos.add(jugadorPersonal.NombreEquipo);
            });

            // Iterar sobre cada equipo único
            equiposUnicos.forEach(equipo => {
                let escudo = document.createElement('div');
                escudo.className = 'escudo';
                escudo.id = equipo; // Usar el nombre del equipo como ID

                let imagenEscudo = document.createElement('div');
                imagenEscudo.className = 'imagenEscudo';
                let imagen = document.createElement('img');

                // Modificar el nombre del equipo para que coincida con el nombre del archivo de imagen
                let equipoModificado = equipo.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
                equipoModificado = equipoModificado.replace(/'/g, '');
                equipoModificado = equipoModificado.replace(/\s+/g, '_');

                imagen.src = `../img/imgJugadores/JugadoresPersonales/Escudos/${equipoModificado}.png`; // Intenta cargar la imagen en formato png

                imagen.onerror = function () {
                    this.onerror = null; // Elimina el controlador de errores actual para evitar bucles infinitos
                    this.src = `../img/imgJugadores/JugadoresPersonales/Escudos/${equipoModificado}.jpg`; // Intenta cargar la imagen en formato jpg si la PNG no está disponible
                };

                imagen.alt = equipo;

                imagenEscudo.appendChild(imagen);

                let nombreEscudo = document.createElement('div');
                nombreEscudo.className = 'nombreEscudo';
                let nombre = document.createElement('p');
                nombre.textContent = equipo;
                nombreEscudo.appendChild(nombre);

                escudo.appendChild(imagenEscudo);
                escudo.appendChild(nombreEscudo);

                contenedorEscudos.appendChild(escudo);
            });

            // Agregar el contenedor del juego al contenedor principal
            contenedorJugadores.appendChild(contenedorJuego);

            // Llamar a la función para agregar event listeners después de que los escudos estén agregados al DOM
            obtnerIdsYcomprobarJugadoresPersonales();

            tituloJuego.addEventListener('click', function () {
                if (contenedorEscudos.style.display === 'none') {
                    contenedorEscudos.style.display = 'flex';
                    flecha.style.transform = 'rotate(180deg)';
                } else {
                    contenedorEscudos.style.display = 'none';
                    flecha.style.transform = 'rotate(0deg)';
                }
            });
        } else {
            console.log("No se encontraron jugadores personales.");
        }
    });
}

// Función para obtener los IDs de los escudos y comprobar los jugadores correspondientes
function obtnerIdsYcomprobarJugadoresPersonales() {
    // Agregar un event listener a cada escudo
    let escudos = document.querySelectorAll('.escudo');
    escudos.forEach(function (escudo) {
        escudo.addEventListener('click', function () {
            // Obtener el ID del equipo correspondiente al escudo
            let idEquipo = escudo.id;
            // Obtener el contenedor de jugadores
            let contenedorJugadores = document.getElementById('jugadores');

            // Si el contenedor de jugadores está vacío o si se va a mostrar un equipo diferente al que ya está mostrado
            if (contenedorJugadores.innerHTML === '' || contenedorJugadores.dataset.equipo !== idEquipo) {
                // Mostrar los jugadores del equipo correspondiente
                mostrarJugadoresPorEquipoOrdenadorPersonales(idEquipo);
                // Almacenar el ID del equipo en el atributo de datos del contenedor
                contenedorJugadores.dataset.equipo = idEquipo;
                // No es necesario obtener el contenedor de jugadores nuevamente aquí
                contenedorJugadores.scrollIntoView({ behavior: "smooth" }); // Usar la referencia existente
            }
        });
    });
}

// Función para mostrar los jugadores del equipo correspondiente al escudo
function mostrarJugadoresPorEquipoOrdenadorPersonales(idEquipo) {
    // Filtrar los jugadores que pertenecen al equipo correspondiente
    const jugadoresEquipo = jugadoresPersonales.filter(function (jugador) {
        // Comparar el ID del equipo del jugador con el ID del equipo del escudo
        return jugador.NombreEquipo === idEquipo;
    });

    // Limpiar el contenedor de jugadores antes de mostrar nuevos jugadores
    let contenedorJugadores = document.getElementById('jugadores');
    contenedorJugadores.innerHTML = '';

    // Mostrar los jugadores del equipo en el contenedor
    jugadoresEquipo.forEach(function (jugador) {
        agregarJugadorPersonal(jugador);
    });
}

// Función para agregar un jugador personal al contenedor de jugadores
function agregarJugadorPersonal(jugador) {

    let equipoModificado;

    equipoModificado = jugador.NombreEquipo
    equipoModificado = equipoModificado.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    equipoModificado = equipoModificado.replace(/'/g, '');
    equipoModificado = equipoModificado.replace(/\s+/g, '_');

    let jugadores = document.getElementById('jugadores');

    // Crear un elemento div que represente al jugador
    const jugadorItem = document.createElement('div');
    jugadorItem.className = 'jugador';
    jugadorItem.innerHTML = `
        <div class="infoJugador">
            <!-- Sección para mostrar la imagen del jugador -->
            <div class="imgJugador">
                <img src="../img/imgJugadores/JugadoresPersonales/Jugadores/${equipoModificado}/${jugador.Apodo}.png" 
                onerror="this.onerror=null; this.src='../img/imgJugadores/JugadoresPersonales/Jugadores/${equipoModificado}/${jugador.Apodo}.jpg';"
                alt="${jugador.Nombre_Real}">
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
                            <p>${jugador.Posicion}</p>
                        </div>
                    </div>
                </div>
                <!-- Más detalles del jugador -->
                <div class="datos1">
                    <div class="nombre">
                        <p>${jugador.Apodo}</p>
                    </div>
                    <div class="genero">
                        <img src="../img/generos/${jugador.Genero}.png" alt="${jugador.Genero}">
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
                        <p>${jugador.Fisico}</p>
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
            <p class="descripcion">${jugador.Descripcion}</p>
        </div>
    `;
    // Agregar el elemento del jugador al contenedor
    jugadores.appendChild(jugadorItem);
}

// Función para obtener los IDs de los escudos y comprobar los jugadores correspondientes
function obtnerIdsYcomprobarJugadores() {
    // Agregar un event listener a cada escudo
    let escudos = document.querySelectorAll('.escudo');
    escudos.forEach(function (escudo) {
        escudo.addEventListener('click', function () {
            // Obtener el ID del equipo correspondiente al escudo
            let idEquipo = escudo.id;
            // Obtener el contenedor de jugadores
            let contenedorJugadores = document.getElementById('jugadores');

            // Si el contenedor de jugadores está vacío o si se va a mostrar un equipo diferente al que ya está mostrado
            if (contenedorJugadores.innerHTML === '' || contenedorJugadores.dataset.equipo !== idEquipo) {
                // Mostrar los jugadores del equipo correspondiente
                mostrarJugadoresPorEquipoOrdenador(idEquipo);
                // Almacenar el ID del equipo en el atributo de datos del contenedor
                contenedorJugadores.dataset.equipo = idEquipo;
                // No es necesario obtener el contenedor de jugadores nuevamente aquí
                contenedorJugadores.scrollIntoView({ behavior: "smooth" }); // Usar la referencia existente
            }
        });
    });
}

// Función para mostrar los jugadores del equipo correspondiente al escudo
function mostrarJugadoresPorEquipoOrdenador(idEquipo) {
    // Filtrar los jugadores que pertenecen al equipo correspondiente
    const jugadoresEquipo = jugadores.filter(function (jugador) {
        // Comparar el ID del equipo del jugador con el ID del equipo del escudo
        return jugador.Equipo === idEquipo;
    });

    // Limpiar el contenedor de jugadores antes de mostrar nuevos jugadores
    let contenedorJugadores = document.getElementById('jugadores');
    contenedorJugadores.innerHTML = '';

    // Mostrar los jugadores del equipo en el contenedor
    jugadoresEquipo.forEach(function (jugador) {
        agregarJugador(jugador);
    });
}

function contenidoMovil(contenedorJugadores) {
    // Limpiar el contenedor de jugadores
    contenedorJugadores.innerHTML = '';

    // Obtener datos de los jugadores
    obtenerDatos().then(function () {
        // Llenar el buscador de juegos una vez que los datos estén disponibles
        llenarBuscadorJuegos();
    });

    // Agregar el contenedor de jugadores al DOM
    contenedorJugadores.innerHTML = `
            <div class="contenedorBuscadores">
                <div class="select" id="buscadorJuegos">
                    <select></select>
                </div>
                <div class="select" id="buscadorEquipos">
                    <select>
                        <option value="">Escoge un Equipo</option>
                    </select>
                </div>
            </div>
    `;
}

// Función para llenar el buscador de juegos con los juegos disponibles
function llenarBuscadorJuegos() {
    // Obtener el elemento del buscador de juegos
    let buscadorJuegos = document.getElementById('buscadorJuegos').querySelector('select');

    // Crear un array para almacenar los juegos únicos
    let juegos = [];

    // Iterar sobre los datos de los jugadores para obtener los juegos únicos
    jugadores.forEach(function (jugador) {
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


    obtenerDatosPersonales().then(function (jugadoresPersonales) {
        if (jugadoresPersonales.length > 0) {
            let defaultOption = document.createElement('option');
            defaultOption.value = 'Jugadores Personales';
            defaultOption.textContent = 'Jugadores Personales';
            buscadorJuegos.appendChild(defaultOption);
        }
    });

    // Agregar las opciones de juegos al buscador de juegos
    juegos.forEach(function (juego) {
        let option = document.createElement('option');
        option.value = juego;
        option.textContent = juego;
        buscadorJuegos.appendChild(option);
    });

    // Agregar evento de cambio al buscador de juegos
    buscadorJuegos.addEventListener('change', actualizarEquipos);
}

function actualizarEquipos() {
    // Limpiar el contenedor de jugadores
    document.getElementById('jugadores').innerHTML = '';

    // Obtener el juego seleccionado en el buscador de juegos
    let juegoSeleccionado = this.value;

    // Obtener el elemento del buscador de equipos
    let buscadorEquipos = document.getElementById('buscadorEquipos').querySelector('select');

    // Filtrar los equipos disponibles para el juego seleccionado
    let equipos = [];
    jugadores.forEach(function (jugador) {
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

    if (juegoSeleccionado = "Jugadores Personales") {
        jugadoresPersonales.forEach(function (jugador) {
            equipos.push(jugador.NombreEquipo);
        });
    }

    // Agregar las opciones de equipos al buscador de equipos
    equipos.forEach(function (equipo) {
        let option = document.createElement('option');
        option.value = equipo;
        option.textContent = equipo;
        buscadorEquipos.appendChild(option);
    });

    // Agregar evento de cambio al buscador de equipos
    buscadorEquipos.addEventListener('change', mostrarJugadoresPorEquipoMovil);
}

// Función para obtener el valor seleccionado en el buscador de equipos y mostrar los jugadores correspondientes
function mostrarJugadoresPorEquipoMovil() {

    // Obtener el valor seleccionado en el buscador de equipos
    let equipoSeleccionado = document.getElementById('buscadorEquipos').querySelector('select').value;

    // Obtener el contenedor de jugadores
    let contenedorJugadores = document.getElementById('jugadores');

    // Limpiar el contenedor de jugadores antes de mostrar nuevos jugadores
    contenedorJugadores.innerHTML = '';

    let juegoSeleccionado = document.getElementById('buscadorJuegos').querySelector('select').value;
    if (juegoSeleccionado === "Jugadores Personales") {
        jugadoresPersonales.forEach(function (jugador) {
            if (jugador.NombreEquipo === equipoSeleccionado) {
                agregarJugadorPersonal(jugador);
            }
        });
    }

    // Filtrar los jugadores que pertenecen al equipo seleccionado y mostrarlos
    jugadores.forEach(function (jugador) {
        if (jugador.Equipo === equipoSeleccionado) {
            agregarJugador(jugador);
        }
    });
}

function agregarJugador(jugador) {

    equipoModificado = jugador.Equipo
    equipoModificado = equipoModificado.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    equipoModificado = equipoModificado.replace(/'/g, '');
    equipoModificado = equipoModificado.replace(/\s+/g, '_');

    jugador.Juego = jugador.Juego.replace(/\s+/g, "");
    juegoModificado = jugador.Juego;

    let jugadores = document.getElementById('jugadores');

    let apodoModificado = jugador.Apodo;
    apodoModificado = apodoModificado.replace(/\s+/g, '_');

    // Crear un elemento div que represente al jugador
    const jugadorItem = document.createElement('div');
    jugadorItem.className = 'jugador';
    jugadorItem.innerHTML = `
        <div class="infoJugador">
            <!-- Sección para mostrar la imagen del jugador -->
            <div class="imgJugador">
                <img src="../img/imgJugadores/${juegoModificado}/Jugadores/${equipoModificado}/${apodoModificado}.png" 
                onerror="this.onerror=null; this.src='../img/imgJugadores/${juegoModificado}/Jugadores/${equipoModificado}/${apodoModificado}.jpg';"
                alt="${jugador.Nombre_Real}">
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
                            <p>${jugador.Posicion}</p>
                        </div>
                    </div>
                </div>
                <!-- Más detalles del jugador -->
                <div class="datos1">
                    <div class="nombre">
                        <p>${jugador.Apodo}</p>
                    </div>
                    <div class="genero">
                        <img src="../img/generos/${jugador.Genero}.png" alt="${jugador.Genero}">
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
                        <p>${jugador.Fisico}</p>
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
            <p class="descripcion">${jugador.Descripcion}</p>
        </div>
    `;
    // Agregar el elemento del jugador al contenedor
    jugadores.appendChild(jugadorItem);
}

// Llamar a la función para actualizar el contenido según el tamaño de la pantalla cuando se cargue la página
window.addEventListener('load', obtenerTamañoPantalla);

let pantallaAncha = false; // Inicialmente, asumimos que la pantalla no es ancha
let pantallaMovil = false; // Inicialmente, asumimos que la pantalla no es móvil

window.addEventListener('resize', function () {

    // Obtener el ancho de la pantalla
    let anchoPantalla = window.innerWidth;

    // Verificar si la pantalla es ancha y si aún no se ha ajustado el contenido
    if (anchoPantalla >= 427 && !pantallaAncha) {
        // Llamar a la función para mostrar el contenido de pantalla grande
        contenidoPantallaGrande();
        pantallaAncha = true; // Marcar que el contenido se ha ajustado a pantalla grande
    } else if (anchoPantalla < 427 && pantallaAncha) {

        if (anchoPantalla < 427 && pantallaMovil == false) {
            let jugadores = document.getElementById('jugadores');
            jugadores.innerHTML = '';
        }

        // Llamar a la función para mostrar el contenido de pantalla móvil solo si la pantalla estaba en modo ancho
        contenidoMovil(contenedorJugadores);
        pantallaAncha = false; // Marcar que la pantalla ya no es grande
        pantallaMovil = true; // Marcar que la pantalla es móvil
    }
});
