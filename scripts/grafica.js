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

let datasetss = [];
//Array con los 2 personajes para la configuración de la gráfica
let personajeElegidos = new Array(2);

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
            // Llamar a la función para imprimir los IDs después de obtener los datos
            objetosStatsJugadores();
        })
        .catch(function (error) {
            console.error("Error al obtener los datos de jugadores:", error);
        });
}
obtenerDatos();


// Función para generar un color RGB aleatorio
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

// Convierte a cada personaje en formato para la gráfica
function objetosStatsJugadores() {
    // Array para almacenar los colores ya asignados
    let coloresAsignados = [];

    jugadores.forEach(function (jugador, index) {
        // Generar colores aleatorios hasta que no se repitan
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
                jugador.Físico,
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

// Función para establecer contenido de la gráfica
function contenidoGrafica() {
    // Verificar si ambos personajes están seleccionados
    if (personajeElegidos[0] && personajeElegidos[1]) {
        const datos = {
            labels: etiquetas,
            datasets: [personajeElegidos[0], personajeElegidos[1]],
        };
        const configuracion = {
            type: "radar",
            data: datos,
            options: options
        };

        // Destruir la instancia anterior de Chart si existe
        if (window.myChart) {
            window.myChart.destroy();
        }

        // Crear una nueva instancia de Chart
        window.myChart = new Chart(grafica, configuracion);
    }
}


/*Función para establecer en el array "personajeElegidos[]" los personajes que se hayan elegido
Se exporta a menuSeleccion.js para saber si se ha elegido al personaje 1 o 2
*/
function establecerJugadores(jugadorApodo, personajeNum) {
    if (personajeNum === 1) {
        //Busco en el array modificado el personaje que coincida con el seleccionado para meterlo en el array "personajeElegidos[]"
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