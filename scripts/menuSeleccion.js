// Definir variable global para almacenar los datos de los jugadores
let jugadores;
// Función para obtener los datos de la API
function obtenerDatos() {
    // Realizar una solicitud a la API 'prueba.php' utilizando fetch
    fetch("php/conexionBD.php")
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
            console.error("Error al obtener los datos de jugadores:", error);
        });
}

obtenerDatos();
let primerPersonaje = document.getElementById("personajeIcono1Img");
let segundoPersonaje = document.getElementById("personajeIcono2Img");
let menuSeleccion = document.getElementById("menuPopUp");

//Función para obtener la cantidad de juegos y que cree un div por cada juego
function crearCajaJuegos() {
    // Limpiar lo que estaba dentro del popUp antes de abrirlo
    menuSeleccion.innerHTML = "";
    if (jugadores) {
        const juegosUnicos = [
            ...new Set(jugadores.map((jugador) => jugador.Juego)),
        ];
        // Crear un div por cada juego único
        juegosUnicos.forEach((juego, i) => {
            // Contenedor para el título del juego
            const tituloJuego = document.createElement("div");
            tituloJuego.classList.add("tituloJuego");
            tituloJuego.textContent = juego;

            // Contenedor para el juego y sus equipos
            const juegoContenedor = document.createElement("div");
            juegoContenedor.id = `juego${i + 1}`;
            juegoContenedor.classList.add("juegoContenedor");

            // Agregar el título y el contenedor del juego al menú de selección
            juegoContenedor.appendChild(tituloJuego);
            menuSeleccion.appendChild(juegoContenedor);

            // Crear un contenedor para los equipos dentro de cada juegoContenedor
            const equiposContenedor = document.createElement("div");
            equiposContenedor.classList.add("equiposContenedor"); // Nueva clase
            juegoContenedor.appendChild(equiposContenedor);

            // Para que se abran los equipos del juego que se pulse
            tituloJuego.addEventListener("click", () => {
                // Verificar el estado actual del contenedor de equipos
                if (equiposContenedor.style.display === "block") {
                    equiposContenedor.style.display = "none";
                } else {
                    equiposContenedor.style.display = "block";
                    crearContenidoJuego(juego, equiposContenedor);
                }
            });
        });
    } else {
        console.log("No se han cargado los datos de los jugadores aún.");
    }
}


//Crea un div con todos los equipos que hay en un juego
function crearContenidoJuego(juego, equiposContenedor) {
    equiposContenedor.innerHTML = "";
    console.log(`Se ha pulsado en el juego: ${juego}`);

    // Obtener equipos únicos usando map y Set
    const equiposUnicos = [
        ...new Set(
            jugadores
                .filter((jugador) => jugador.Juego === juego)
                .map((jugador) => jugador.Equipo)
        ),
    ];

    const contenidoEquipos = document.createElement("div");
    contenidoEquipos.classList.add("contenidoEquipos");

    equiposUnicos.forEach((equipo) => {
        // Reemplazar espacios en blanco por guiones bajos
        const equipoURL = equipo.replace(/\s+/g, "_");

        const equipoDiv = document.createElement("div");
        equipoDiv.classList.add("equipo");

        const imgEquipo = document.createElement("div");
        imgEquipo.classList.add("equipoImg");
        imgEquipo.style.backgroundImage = `url(https://raw.githubusercontent.com/ggdsrll/API-Inazuma-Eleven/main/InazumaEleven1/Escudos/${equipoURL}.png)`;
        console.log(
            `url(https://raw.githubusercontent.com/ggdsrll/API-Inazuma-Eleven/main/InazumaEleven1/Escudos/${equipoURL}.png)`
        );

        const nombreEquipo = document.createElement("div");
        nombreEquipo.classList.add("equipoNombre");
        nombreEquipo.textContent = equipo;

        equipoDiv.appendChild(imgEquipo);
        equipoDiv.appendChild(nombreEquipo);

        contenidoEquipos.appendChild(equipoDiv);
    });

    equiposContenedor.appendChild(contenidoEquipos);
}

function crearJugadoresEqupo(equiposContenedor, equipoDiv){

}






const juegoContenedor = document.createElement("div");
juegoContenedor.id = "juegoContenedor";
menuSeleccion.appendChild(juegoContenedor);

function mostrarMenuSeleccion() {
    if (menuSeleccion.style.display === "block") {
        menuSeleccion.style.display = "none";
    } else {
        menuSeleccion.style.display = "block";
    }
    console.log("mostrar menu");
    crearCajaJuegos();
}

primerPersonaje.addEventListener("click", mostrarMenuSeleccion);
segundoPersonaje.addEventListener("click", mostrarMenuSeleccion);
