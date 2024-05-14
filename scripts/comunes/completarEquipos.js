let equipos = [];

function obtenerDatosDelUsuario() {
    // Realizar una solicitud a la API 'prueba.php' utilizando fetch
    return fetch('../php/conexiones/conexionBDEquipos.php')
        // Procesar la respuesta como JSON
        .then(function (response) {
            return response.json();
        })
        // Manejar los datos obtenidos
        .then(function (data) {
            // Devolver los datos de los jugadores
            console.log(data); // Comprobación de datos recibidos
            return data; // Retornar los datos para poder usarlos en la siguiente función
        })
        // Manejar errores en caso de que la solicitud falle
        .catch(function (error) {
            console.error('Error al obtener los datos de jugadores:', error);
            throw error; // Lanzar el error para que pueda ser capturado por la siguiente función
        });
}

function completarSelectEquipos() {
    // Llamar a obtenerDatosDelUsuario para obtener los datos de los equipos
    obtenerDatosDelUsuario()
        .then(function (equipos) {
            // Verificar si hay datos antes de completar el select
            if (equipos && equipos.length > 0) {
                // Obtener el elemento select
                let selectEquipos = document.getElementById("equipo");

                // Crear y agregar una opción para cada equipo al final del select
                equipos.forEach(function (equipo) {
                    let option = document.createElement("option");
                    option.value = equipo.nombre;
                    option.text = equipo.nombre;
                    selectEquipos.appendChild(option);
                });
            } else {
                console.log("No se encontraron equipos.");
            }
        })
        .catch(function (error) {
            console.error('Error al completar el select de equipos:', error);
        });
}

// Llamar a la función para completar el select
completarSelectEquipos();