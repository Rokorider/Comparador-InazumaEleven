// grafica.js
import { guardarTodosLosJugadoresComparados } from './guardarJugadores.js';

const etiquetas = [
    "Tiro",
    "Físico",
    "Control",
    "Defensa",
    "Rapidez",
    "Aguante",
    "Valor",
];
const grafica = document.getElementById("grafica");

let jugadores;
let jugadoresPersonales;

let datasetss = [];
let personajeElegidos = new Array(2);

// Función para obtener los datos de la API
function obtenerDatos() {
    fetch("../php/conexiones/conexionBD.php")
        .then(response => response.json())
        .then(data => {
            jugadores = data;
            objetosStatsJugadores();
        })
        .catch(error => {
            console.error("Error al obtener los datos de jugadores:", error);
        });
}

function obtenerDatosPersonales() {
    return fetch('../php/conexiones/conexionBDJugadoresPersonales.php')
        .then(response => response.json())
        .then(data => {
            jugadoresPersonales = data;
            console.log(jugadoresPersonales);
        })
        .catch(error => {
            console.error('Error al obtener los datos de jugadores:', error);
        });
}

obtenerDatos();
obtenerDatosPersonales();

function generarColorRGBFondo() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b}, 0.5)`;
}

function generarColorRGBBorde() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function objetosStatsJugadores() {
    let coloresAsignados = [];

    jugadores.forEach(jugador => {
        let borderColor = generarColorRGBBorde();
        let backgroundColor = generarColorRGBFondo();
        while (coloresAsignados.includes(borderColor) || coloresAsignados.includes(backgroundColor)) {
            borderColor = generarColorRGBBorde();
            backgroundColor = generarColorRGBFondo();
        }
        coloresAsignados.push(borderColor, backgroundColor);

        let dataset = {
            label: jugador.Apodo,
            data: [
                jugador.Tiro,
                jugador.Fisico,
                jugador.Control,
                jugador.Defensa,
                jugador.Rapidez,
                jugador.Aguante,
                jugador.Valor,
            ],
            borderColor: borderColor,
            backgroundColor: backgroundColor,
        };
        datasetss.push(dataset);
    });
    jugadoresPersonales.forEach(jugador => {
        let borderColor = generarColorRGBBorde();
        let backgroundColor = generarColorRGBFondo();
        while (coloresAsignados.includes(borderColor) || coloresAsignados.includes(backgroundColor)) {
            borderColor = generarColorRGBBorde();
            backgroundColor = generarColorRGBFondo();
        }
        coloresAsignados.push(borderColor, backgroundColor);

        let dataset = {
            label: jugador.Apodo,
            data: [
                jugador.Tiro,
                jugador.Fisico,
                jugador.Control,
                jugador.Defensa,
                jugador.Rapidez,
                jugador.Aguante,
                jugador.Valor,
            ],
            borderColor: borderColor,
            backgroundColor: backgroundColor,
        };
        datasetss.push(dataset);
    });
}

const options = {
    scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 0,
            suggestedMax: 100
        }
    }
};

function contenidoGrafica() {
    if (personajeElegidos[0] && personajeElegidos[1]) {
        console.log("Jugadores a comparar " + personajeElegidos[0].label + " y " + personajeElegidos[1].label);
        const datos = {
            labels: etiquetas,
            datasets: [personajeElegidos[0], personajeElegidos[1]],
        };
        const configuracion = {
            type: "radar",
            data: datos,
            options: options
        };

        if (window.myChart) {
            window.myChart.destroy();
        }

        window.myChart = new Chart(grafica, configuracion);
        guardarTodosLosJugadoresComparados(personajeElegidos);
    }
}

function establecerJugadores(jugadorApodo, personajeNum) {
    if (personajeNum === 1) {
        for (let i = 0; i < datasetss.length; i++) {
            if (datasetss[i].label === jugadorApodo) {
                personajeElegidos[0] = datasetss[i];
            }
        }
    } else {
        for (let i = 0; i < datasetss.length; i++) {
            if (datasetss[i].label === jugadorApodo) {
                personajeElegidos[1] = datasetss[i];
            }
        }
    }
}

export { contenidoGrafica, establecerJugadores };
