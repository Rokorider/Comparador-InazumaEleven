const etiquetas = ['Tiro', 'Físico', 'Control', 'Defensa', 'Rapidez', 'Aguante', 'Valor'];
const grafica = document.getElementById('grafica');

let datasetss = [];

// Función para obtener los datos de la API
function obtenerDatos() {
    // Realizar una solicitud a la API 'prueba.php' utilizando fetch
    fetch("php/conexionBD.php")
        // Procesar la respuesta como JSON
        .then(function(response) {
            return response.json();
        })
        // Manejar los datos obtenidos
        .then(function(data) {
            // Asignar los datos de los jugadores a la variable global 'jugadores'
            jugadores = data;
            // Llamar a la función para imprimir los IDs después de obtener los datos
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
