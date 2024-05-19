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
            console.log(jugadores);
            return jugadores;
        })
        // Manejar errores en caso de que la solicitud falle
        .catch(function (error) {
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
    jugadores.forEach(function (jugador) {
        // Verificar si el juego del jugador ya está en la lista de juegos
        if (!juegos.includes(jugador.Juego)) {
            // Agregar el juego a la lista de juegos
            juegos.push(jugador.Juego);
        }
    });

    // Ordenar los juegos alfabéticamente
    juegos.sort();

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

    // Limpiar el buscador de jugadores antes de agregar nuevas opciones
    buscadorEquipos.innerHTML = '';

    // Agregar la opción por defecto al buscador de juegos
    let defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Selecciona un equipo';
    buscadorEquipos.appendChild(defaultOption);

    // Agregar las opciones de equipos al buscador de equipos
    equipos.forEach(function (equipo) {
        let option = document.createElement('option');
        option.value = equipo;
        option.textContent = equipo;
        buscadorEquipos.appendChild(option);
    });

    // Agregar evento de cambio al buscador de equipos
    buscadorEquipos.addEventListener('change', actualizarJugadores);
}

function actualizarJugadores() {

    // Obtener el equipo seleccionado en el buscador de equipos
    let equipoSeleccionado = this.value;

    // Obtener el elemento de la tabla de jugadores
    let buscadorJugador = document.getElementById('buscadorJugador').querySelector('select');

    // Filtrar los jugadores disponibles para el equipo seleccionado
    let jugadoresEquipo = [];
    jugadores.forEach(function (jugador) {
        if (jugador.Equipo === equipoSeleccionado) {
            jugadoresEquipo.push(jugador);
        }
    });

    // Limpiar el buscador de jugadores antes de agregar nuevas opciones
    buscadorJugador.innerHTML = '';

    // Agregar la opción por defecto al buscador de juegos
    let defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Selecciona un jugador';
    buscadorJugador.appendChild(defaultOption);

    // Agregar las opciones de jugadores al buscador de jugadores
    jugadoresEquipo.forEach(function (jugador) {
        let option = document.createElement('option');
        option.value = jugador.Nombre_Real;
        option.textContent = jugador.Nombre_Real;
        buscadorJugador.appendChild(option);
    });

    // Agregar evento de cambio al buscador de jugadores
    buscadorJugador.addEventListener('change', recojerJugador);
}

function recojerJugador() {
    // Obtener el apodo del jugador seleccionado
    let Nombre_Real = document.getElementById('buscadorJugador').querySelector('select').value;

    // Obtener el jugador seleccionado
    let jugador = jugadores.find(function (jugador) {
        return jugador.Nombre_Real === Nombre_Real;
    });

    // Pasar el jugador seleccionado a la función 'mostrarJugador'
    mostrarJugador(jugador);
}

function mostrarJugador(jugador) {
    let contenedorJugador = document.getElementById('contenedorJugador');
    let equipoModificado = jugador.Equipo.normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/'/g, '').replace(/\s+/g, '_');
    let juegoModificado = jugador.Juego.replace(/\s+/g, "");

    contenedorJugador.innerHTML = `
        <div class="cajaJugador">
            <div class="cajaImagen">
                <figure class="imagen">
                <img src="../img/imgJugadores/${juegoModificado}/Jugadores/${equipoModificado}/${jugador.Apodo}.png" 
                onerror="this.onerror=null; this.src='../img/imgJugadores/${juegoModificado}/Jugadores/${equipoModificado}/${jugador.Apodo}.jpg';"
                alt="${jugador.Nombre_Real}">
                </figure>
                <div class="apodo">
                    <p>${jugador.Apodo}</p>
                </div>
            </div>
            <div class="datos">
                <div class="fila">
                    <div class="id">
                        <p>835</p>
                    </div>
                    <div class="nombre">
                        <p>${jugador.Nombre_Real}</p>
                    </div>
                </div>
                <div class="fila">
                    <div class="juego">
                        <p>${jugador.Juego}</p>
                    </div>
                </div>
                <div class="fila">
                    <div class="equipo">
                        <p>${jugador.Equipo}</p>
                    </div>
                </div>
                <div class="fila filaBoton">
                    <div class="boton" id="boton">
                        <p>Eliminar Jugador</p>
                    </div>
                </div>
            </div>
            <form id="eliminarJugador" action="../php/administrador/eliminarJugador.php" method="POST">
                <input type="hidden" id="idJugador" name="idJugador" value="${jugador.ID}">  
            </form>
        </div>
    `;

    let boton = document.getElementById('boton');
    boton.addEventListener('click', function () {
        console.log('click');
        document.getElementById('eliminarJugador').submit();
    });
}

function iniciar() {
    // Obtener datos de los jugadores
    obtenerDatos().then(function () {
        // Llenar el buscador de juegos una vez que los datos estén disponibles
        llenarBuscadorJuegos();
    });
}




// Iniciar la aplicación
iniciar();
