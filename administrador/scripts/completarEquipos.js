function obtenerDatos() {
    // Realizar una solicitud a la API 'prueba.php' utilizando fetch
    return fetch('../php/conexionBD.php')
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

// Definir una variable global para almacenar los datos de los jugadores
let jugadores;

// Llamar a la función obtenerDatos cuando la página se cargue
window.onload = function () {
    obtenerDatos()
        .then(llenarBuscadorJuegos)
        .catch(function (error) {
            console.error('Error al cargar la página:', error);
        });
};

function llenarBuscadorJuegos() {
    // Obtener el elemento del buscador de juegos
    let buscadorJuegos = document.getElementById('buscadorJuegos');

    // Limpiar el contenido actual del buscador de juegos
    buscadorJuegos.innerHTML = '';

    // Agregar la opción por defecto al buscador de juegos
    let defaultOptionJuegos = document.createElement('option');
    defaultOptionJuegos.value = '';
    defaultOptionJuegos.textContent = 'No Especificado';
    buscadorJuegos.appendChild(defaultOptionJuegos);

    // Agregar las opciones de juegos al buscador de juegos
    if (jugadores) {
        let juegos = obtenerJuegosUnicos();
        juegos.forEach(function (juego) {
            let option = document.createElement('option');
            option.value = juego;
            option.textContent = juego;
            buscadorJuegos.appendChild(option);
        });
    }

    // Agregar evento de cambio al buscador de juegos
    buscadorJuegos.addEventListener('change', actualizarEquipos);
}

function obtenerJuegosUnicos() {
    let juegos = [];
    jugadores.forEach(function (jugador) {
        if (!juegos.includes(jugador.Juego)) {
            juegos.push(jugador.Juego);
        }
    });
    return juegos.sort();
}

function actualizarEquipos() {

    // Obtener el juego seleccionado en el buscador de juegos
    let juegoSeleccionado = this.value;

    // Obtener el elemento del buscador de equipos
    let buscadorEquipos = document.getElementById('equipo');

    // Limpiar el contenido actual del buscador de equipos
    buscadorEquipos.innerHTML = '';

    // Agregar la opción por defecto al buscador de equipos
    let defaultOptionEquipos = document.createElement('option');
    defaultOptionEquipos.value = '';
    defaultOptionEquipos.textContent = 'No Especificado';
    buscadorEquipos.appendChild(defaultOptionEquipos);

    // Agregar la opción Nuevo al buscador de equipos
    let nuevoOptionEquipos = document.createElement('option');
    nuevoOptionEquipos.value = 'Nuevo';
    nuevoOptionEquipos.textContent = 'Nuevo';
    buscadorEquipos.appendChild(nuevoOptionEquipos);

    // Filtrar los equipos disponibles para el juego seleccionado
    let equipos = obtenerEquiposPorJuego(juegoSeleccionado);

    // Agregar las opciones de equipos al buscador de equipos
    equipos.forEach(function (equipo) {
        let option = document.createElement('option');
        option.value = equipo;
        option.textContent = equipo;
        buscadorEquipos.appendChild(option);
    });
}

function obtenerEquiposPorJuego(juegoSeleccionado) {
    let equipos = [];
    jugadores.forEach(function (jugador) {
        if (jugador.Juego === juegoSeleccionado && !equipos.includes(jugador.Equipo)) {
            equipos.push(jugador.Equipo);
        }
    });
    return equipos.sort();
}

console.log(" El equipo es" + document.getElementById('equipo').value);
