import { contenidoGrafica } from "./grafica.js";
import { establecerJugadores } from "./grafica.js";

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
let primerPersonaje = document.getElementById("personaje1");
let segundoPersonaje = document.getElementById("personaje2");
let menuSeleccion = document.getElementById("menuPopUp");


//Función para obtener la cantidad de juegos y que cree un div por cada juego
function crearCajaJuegos(personaje) {
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
                    crearContenidoJuego(juego, equiposContenedor, personaje);
                }
            });
        });
    } else {
        console.log("No se han cargado los datos de los jugadores aún.");
    }
}

function crearContenidoJuego(juego, equiposContenedor, personaje) {
    // Limpiar el contenido anterior de equiposContenedor
    equiposContenedor.innerHTML = "";

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
        const equipoURL = equipo
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "_")
            .replace("'", "");

        const juegoURL = juego.replace(/\s+/g, "");

        const equipoDiv = document.createElement("div");
        equipoDiv.classList.add("equipo");

        const imgEquipo = document.createElement("img");
        imgEquipo.classList.add("equipoImg");
        imgEquipo.alt= equipo+ " Escudo";

        if (equipoURL === "Layton_Team") {
            imgEquipo.src = "img/Layton_Team.png";
        } else {
            imgEquipo.src = `https://raw.githubusercontent.com/ggdsrll/API-Inazuma-Eleven/main/${juegoURL}/Escudos/${equipoURL}.png`;
        }

        const nombreEquipo = document.createElement("div");
        nombreEquipo.classList.add("equipoNombre");
        nombreEquipo.textContent = equipo;

        equipoDiv.appendChild(imgEquipo);
        equipoDiv.appendChild(nombreEquipo);

        contenidoEquipos.appendChild(equipoDiv);

        equipoDiv.addEventListener("click", () => {
            // Abrir o cerrar el equipo al hacer clic en el equipoDiv
            if (equipoDiv.querySelector(".contenidoJuegoContenedor")) {
                // Cerrar si ya está abierto
                equipoDiv.querySelector(".contenidoJuegoContenedor").remove();
                equipoDiv.style.width = "auto";
            } else {
                crearJugadoresEquipo(
                    equipo,
                    equipoURL,
                    juegoURL,
                    equipoDiv,
                    personaje
                );
                equipoDiv.style.width = "100%";
                contenidoEquipos.style.padding = "0 10% 0 10%";
            }
        });
    });

    equiposContenedor.appendChild(contenidoEquipos);
}




function crearJugadoresEquipo(
    equipo,
    equipoURL,
    juegoURL,
    contenidoEquipos,
    personaje
) {
    const jugadoresEquipo = jugadores.filter(
        (jugador) => jugador.Equipo === equipo
    );
    const contenidoJuegoContenedor = document.createElement("div");
    contenidoJuegoContenedor.classList.add("contenidoJuegoContenedor");

    const contenidoJuegoContenedor2 = document.createElement("div");
    contenidoJuegoContenedor2.classList.add("contenidoJuegoContenedor2");

    const contenidoJuego_personajesCont = document.createElement("div");
    contenidoJuego_personajesCont.classList.add(
        "contenidoJuego_personajesCont"
    );
    contenidoJuegoContenedor2.appendChild(contenidoJuego_personajesCont);

    jugadoresEquipo.forEach((jugador) => {
        const personajeCont = document.createElement("div");
        personajeCont.classList.add("personajeCont");

        const personajeImgCont = document.createElement("div");
        personajeImgCont.classList.add("personajeImgCont");

        
        const personajeImg = document.createElement("img");
        personajeImg.src = jugador.Imagenes;
        personajeImg.alt = jugador.Apodo;
        personajeImg.classList.add("personajeImg");
        personajeImgCont.appendChild(personajeImg);

        const personajeInfo = document.createElement("div");
        personajeInfo.classList.add("personajeInfo");
        
        const personajeInfo_elemento = document.createElement("img");
        personajeInfo_elemento.classList.add("personajeInfo_elemento");
        personajeInfo_elemento.src = `img/Elementos/${jugador.Elemento}.png`;


        const personajeInfo_posicion = document.createElement("div");
        personajeInfo_posicion.classList.add("personajeInfo_posicion");
        personajeInfo_posicion.textContent=jugador.Posición;

        const personajeInfo_nombre = document.createElement("div");
        personajeInfo_nombre.classList.add("personajeInfo_nombre");
        const personajeNombre = document.createElement("p");
        personajeNombre.textContent = jugador.Apodo;
        personajeInfo_nombre.appendChild(personajeNombre);

        personajeInfo.appendChild(personajeInfo_elemento);
        personajeInfo.appendChild(personajeInfo_posicion);
        personajeInfo.appendChild(personajeInfo_nombre);

        personajeCont.appendChild(personajeImgCont);
        personajeCont.appendChild(personajeInfo);
        contenidoJuego_personajesCont.appendChild(personajeCont);

        //cerrar el pop up cuando seleccione el personaje
        personajeCont.addEventListener("click", () => {
            menuSeleccion.style.display = "none";
            seleccionPersonaje(jugador, juegoURL, equipoURL, personaje);
        });
    });

    contenidoJuegoContenedor.appendChild(contenidoJuegoContenedor2);

    // Añadir el contenido del juego al contenedor de equipos
    contenidoEquipos.appendChild(contenidoJuegoContenedor);
}


//función para cambiar el contenido del contenedor de personaje1 y 2
function seleccionPersonaje(jugador, juegoURL, equipoURL, personaje) {
    let personajeNum;
    if (personaje === "primer") {
        personajeNum = 1;
        establecerJugadores(jugador.Apodo, personajeNum);
    } else if (personaje === "segundo") {
        personajeNum = 2;
        establecerJugadores(jugador.Apodo, personajeNum);
    }
    const personajeIconoImg = document.querySelector(
        `.personajeIcono${personajeNum}Img`
    );
    personajeIconoImg.src = jugador.Imagenes;
    const nombrePersonajeContenedor = document.querySelector(
        `.nombrePersonajeContenedor${personajeNum} p`
    );
    nombrePersonajeContenedor.textContent = jugador.Apodo;
    const personajeNombre = document.querySelector(`.nombre_${personajeNum} `);
    personajeNombre.textContent = jugador.Nombre_Real;
    const personajeDescripcion = document.querySelector(
        `.descripcion_${personajeNum} `
    );
    personajeDescripcion.textContent = jugador.Descripción;
    const sexoPersonaje = document.querySelector(
        `.sexoPersonaje_${personajeNum} `
    );
    sexoPersonaje.src = `img/generos/${jugador.Género}.png`;
    const elementoPersonaje = document.querySelector(
        `.elemento_${personajeNum} `
    );
    elementoPersonaje.src = `img/Elementos/${jugador.Elemento}.png`;
    const personajePosicion = document.querySelector(
        `.posicion_${personajeNum} `
    );
    personajePosicion.textContent = jugador.Posición;

    const tiro = document.querySelector(`.tiro_${personajeNum}`);
    tiro.textContent = jugador.Tiro;
    const fisico = document.querySelector(`.fisico_${personajeNum}`);
    fisico.textContent = jugador.Físico;
    const control = document.querySelector(`.control_${personajeNum}`);
    control.textContent = jugador.Control;
    const defensa = document.querySelector(`.defensa_${personajeNum}`);
    defensa.textContent = jugador.Defensa;
    const rapidez = document.querySelector(`.rapidez_${personajeNum}`);
    rapidez.textContent = jugador.Rapidez;
    const aguante = document.querySelector(`.aguante_${personajeNum}`);
    aguante.textContent = jugador.Aguante;
    const valor = document.querySelector(`.valor_${personajeNum}`);
    valor.textContent = jugador.Valor;

    //Crear la gráfica cuando estén los 2 personajes seleccionadcos
    contenidoGrafica();
}

const juegoContenedor = document.createElement("div");
juegoContenedor.id = "juegoContenedor";
menuSeleccion.appendChild(juegoContenedor);

function mostrarMenuSeleccion(personaje) {
    if (menuSeleccion.style.display === "block") {
        menuSeleccion.style.display = "none";
        menuSeleccion.style.overflowY = "hidden";
    } else {
        menuSeleccion.style.display = "block";
        menuSeleccion.style.overflowY = "auto";
    }

    if (personaje === "primer") {
        crearCajaJuegos(personaje);
    } else if (personaje === "segundo") {
        crearCajaJuegos(personaje);
    }
}


primerPersonaje.addEventListener("click", () => mostrarMenuSeleccion("primer"));
segundoPersonaje.addEventListener("click", () => mostrarMenuSeleccion("segundo"));

// Cierra el popup al hacer clic fuera de él
document.addEventListener("click", function(event) {
    // Verifica si el clic no ocurrió dentro del popup o en los botones que lo abren
    if (!menuSeleccion.contains(event.target) && 
        event.target !== primerPersonaje &&
        event.target !== segundoPersonaje) {
        menuSeleccion.style.display = "none";
    }
});



