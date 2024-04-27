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

// Crea un div con todos los equipos que hay en un juego
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
        const juegoURL = juego.replace(/\s+/g, "");

        const equipoDiv = document.createElement("equipoDiv");
        equipoDiv.classList.add("equipo");

        const imgEquipo = document.createElement("div");
        imgEquipo.classList.add("equipoImg");
        imgEquipo.style.backgroundImage = `url(https://raw.githubusercontent.com/ggdsrll/API-Inazuma-Eleven/main/${juegoURL}/Escudos/${equipoURL}.png)`;

        const nombreEquipo = document.createElement("div");
        nombreEquipo.classList.add("equipoNombre");
        nombreEquipo.textContent = equipo;

        equipoDiv.appendChild(imgEquipo);
        equipoDiv.appendChild(nombreEquipo);

        contenidoEquipos.appendChild(equipoDiv);

        equipoDiv.addEventListener("click", () => {
            // Crear jugadores del equipo al hacer clic en el equipoDiv
            crearJugadoresEquipo(equipo,equipoURL,juegoURL,equipoDiv);
            equipoDiv.style.width="100%";
            contenidoEquipos.style.padding="0 10% 0 10%"

            
        });
    });

    equiposContenedor.appendChild(contenidoEquipos);
}



function crearJugadoresEquipo(equipo, equipoURL, juegoURL, contenidoEquipos) {
    const jugadoresEquipo = jugadores.filter(
        (jugador) => jugador.Equipo === equipo
    );

    const contenidoJuegoContenedor = document.createElement("div");
    contenidoJuegoContenedor.classList.add("contenidoJuegoContenedor");

    const contenidoJuegoContenedor2 = document.createElement("div");
    contenidoJuegoContenedor2.classList.add("contenidoJuegoContenedor2");

    const contenidoJuego_emblema = document.createElement("div");
    contenidoJuego_emblema.classList.add("contenidoJuego_emblema");
    contenidoJuegoContenedor2.appendChild(contenidoJuego_emblema);

    const contenidoJuego_personajesCont = document.createElement("div");
    contenidoJuego_personajesCont.classList.add("contenidoJuego_personajesCont");
    contenidoJuegoContenedor2.appendChild(contenidoJuego_personajesCont);


    jugadoresEquipo.forEach((jugador) => {

        const personajeCont = document.createElement("div");
        personajeCont.classList.add("personajeCont");

        const personajeImgCont = document.createElement("div");
        personajeImgCont.classList.add("personajeImgCont");

        const personajeImg = document.createElement("img");
        personajeImg.src = `https://raw.githubusercontent.com/ggdsrll/API-Inazuma-Eleven/main/${juegoURL}/Jugadores/${equipoURL}/${jugador.Apodo}.png`;

        personajeImgCont.appendChild(personajeImg);

        const personajeInfo = document.createElement("div");
        personajeInfo.classList.add("personajeInfo");

        const personajeInfo_elemento = document.createElement("div");
        personajeInfo_elemento.classList.add("personajeInfo_elemento");
        personajeInfo_elemento.style.backgroundImage = `url("img/${jugador.Elemento}.png")`;

        const personajeInfo_nombre = document.createElement("div");
        personajeInfo_nombre.classList.add("personajeInfo_nombre");
        const personajeNombre = document.createElement("p");
        personajeNombre.textContent = jugador.Apodo;
        personajeInfo_nombre.appendChild(personajeNombre);

        personajeInfo.appendChild(personajeInfo_elemento);
        personajeInfo.appendChild(personajeInfo_nombre);

        personajeCont.appendChild(personajeImgCont);
        personajeCont.appendChild(personajeInfo);
        contenidoJuego_personajesCont.appendChild(personajeCont);
    });

    contenidoJuegoContenedor.appendChild(contenidoJuegoContenedor2);

    // Eliminar los jugadores anteriores antes de añadir los nuevos
    const jugadoresAnteriores = contenidoEquipos.querySelector(".contenidoJuegoContenedor");
    if (jugadoresAnteriores) {
        jugadoresAnteriores.remove();
    }

    // Añadir el contenido del juego al contenedor de equipos
    contenidoEquipos.appendChild(contenidoJuegoContenedor);
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
