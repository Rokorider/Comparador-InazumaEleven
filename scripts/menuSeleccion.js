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
    //Liampiar lo que estaba dentro del popUp antes de abrirlo
    menuSeleccion.innerHTML = "";
    if (jugadores) {
        const juegosUnicos = [...new Set(jugadores.map(jugador => jugador.Juego))];
        // Crear un div por cada juego único
        juegosUnicos.forEach((juego,i) => {
            const juegoContenedor = document.createElement('div');
            juegoContenedor.textContent = juego;
            juegoContenedorClase= `juego`;
            juegoContenedor.id = `juego${i+1}`;
            juegoContenedor.classList.add(juegoContenedorClase);
            menuSeleccion.appendChild(juegoContenedor);
        });
    } else {
        console.log('No se han cargado los datos de los jugadores aún.');
    }
}
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