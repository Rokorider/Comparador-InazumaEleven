const etiquetas = ['Tiro', 'Físico', 'Control', 'Defensa', 'Rapidez', 'Aguante', 'Valor'];
const grafica = document.getElementById('grafica');
const personaje1=document.getElementById("apodoPersonaje1");
const personaje2=document.getElementById("apodoPersonaje2");
let datasetss = [];

function obtenerDatos() {
    fetch("php/conexionBD.php")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            jugadores = data;
            obtenerStatsJugadores();
        })
        .catch(function(error) {
            console.error("Error al obtener los datos de jugadores:", error);
        });
}

// Función para obtener las estadísticas de los jugadores
function obtenerStatsJugadores() {

    jugadores.forEach(function(jugador) {
        let dataset = {
            label: jugador.Apodo,
            data: [jugador.Tiro, jugador.Físico, jugador.Control, jugador.Defensa, jugador.Rapidez, jugador.Aguante, jugador.Valor],
            borderColor: 'rgba(137, 224, 196, 0.8)',
            backgroundColor: 'rgba(224, 137, 182, 0.3)'
        };
        datasetss.push(dataset);
    });

    console.log(datasetss);
    
    // Crear el objeto de datos para el gráfico
    const datos3 = {
        labels: etiquetas,
        datasets: [datasetss[0], datasetss[1]]
    }

    // Configuración del gráfico
    const configuracion3 = {
        type: 'radar',
        data: datos3,
    }

    // Indicar donde se va a renderizar el gráfico
    new Chart(grafica, configuracion3);
}

// Llamar a la función para obtener los datos de la API
obtenerDatos();
console.log(personaje1)