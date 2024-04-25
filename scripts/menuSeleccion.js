// Definir variable global para almacenar los datos de los jugadores
let jugadores;
// Función para obtener los datos de la API
function obtenerDatos() {
    // Realizar una solicitud a la API 'prueba.php' utilizando fetch
    fetch('php/conexionBD.php')
        // Procesar la respuesta como JSON
        .then(function (response) {
            return response.json();
        })
        // Manejar los datos obtenidos
        .then(function (data) {
            // Asignar los datos de los jugadores a la variable global 'jugadores'
            jugadores = data;
            console.log(jugadores);
        })
        // Manejar errores en caso de que la solicitud falle
        .catch(function (error) {
            console.error('Error al obtener los datos de jugadores:', error);
        });
}

function obtenerJuegos(){
    if (jugadores) {

    const juegosUnicos = [...new Set(jugadores.map(jugador => jugador.Juego))];
    console.log(juegosUnicos)
    }else {
        console.log('No se han cargado los datos de los jugadores aún.');
    }
}
function obtenerEquipos() {
    if (jugadores) {
       // Obtener una lista de equipos únicos
    const equiposUnicos = [...new Set(jugadores.map(jugador => jugador.Equipo))];
    console.log(equiposUnicos)
    } else {
        console.log('No se han cargado los datos de los jugadores aún.');
    }
}

obtenerDatos();

//Esto es para llamar a la función cuando se carguen todos los datos
setTimeout(obtenerJuegos,1000)
setTimeout(obtenerEquipos, 1000);


let primerPersonaje = document.getElementById("personajeIcono1Img");
let segundoPersonaje = document.getElementById("personajeIcono2Img");
let menuSeleccion = document.getElementById("menuPopUp");



//Función para obtener la cantidad de juegos y que cree un div por cada juego
function crearCajaJuegos() {
    //Limpiar lo que estaba dentro del popUp antes de abrirlo
    menuSeleccion.innerHTML = "";
    if (jugadores) {
        const juegosUnicos = [...new Set(jugadores.map(jugador => jugador.Juego))];
        // Crear un div por cada juego único
        juegosUnicos.forEach((juego, i) => {
            const juegoContenedor = document.createElement('div');
            juegoContenedor.textContent = juego;
            juegoContenedorClase = `juego`;
            juegoContenedor.id = `juego${i + 1}`;
            juegoContenedor.classList.add(juegoContenedorClase);
            menuSeleccion.appendChild(juegoContenedor);

            // Crear un contenedor para los equipos dentro de cada juegoContenedor
            const contenidoEquipos = document.createElement('div');
            contenidoEquipos.classList.add('contenidoEquipos');
            juegoContenedor.appendChild(contenidoEquipos);

            // Para que se abran los equipos del juego que se pulse
            juegoContenedor.addEventListener('click', () => {
                // Llamar a una función para crear el contenido cuando se haga clic en el juego
                crearContenidoJuego(juego, contenidoEquipos);
            });
        });
    } else {
        console.log('No se han cargado los datos de los jugadores aún.');
    }
}
function crearContenidoJuego(juego, contenidoEquipos) {
    contenidoEquipos.innerHTML = "";
    console.log(`Se ha pulsado en el juego: ${juego}`);
    contenidoEquipos.innerHTML = "";

    // Obtener equipos únicos usando map y Set
    const equiposUnicos = [...new Set(jugadores.filter(jugador => jugador.Juego === juego).map(jugador => jugador.Equipo))];

    equiposUnicos.forEach(equipo => {
        const equipoDiv = document.createElement('div');
        equipoDiv.textContent = equipo;
        equipoDiv.classList.add('equipo');
        contenidoEquipos.appendChild(equipoDiv);

        // Imprimir cada equipo por consola
        console.log(`Equipo: ${equipo}`);
    });
}

const juegoContenedor = document.createElement('div');
juegoContenedor.id = 'juegoContenedor';
menuSeleccion.appendChild(juegoContenedor);

function mostrarMenuSeleccion() {
    if (menuSeleccion.style.display === "block") {
        menuSeleccion.style.display = "none";
    } else {
        menuSeleccion.style.display = "block";
    }
    console.log("mostrar menu")
    crearCajaJuegos()
}

primerPersonaje.addEventListener("click", mostrarMenuSeleccion);
segundoPersonaje.addEventListener("click", mostrarMenuSeleccion);