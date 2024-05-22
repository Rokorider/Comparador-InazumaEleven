// guardarJugadores.js

document.addEventListener("DOMContentLoaded", function () {
    let storedPersonajeElegidos = JSON.parse(localStorage.getItem('personajeElegidos'));
    if (storedPersonajeElegidos) {
        personajeElegidos = storedPersonajeElegidos;
        contenidoGrafica(); // Esto asegurará que se actualice la gráfica con los datos cargados
    }
});

// Función para guardar los jugadores comparados en localStorage
function guardarTodosLosJugadoresComparados(personajeElegidos) {
    let jugadoresComparados = JSON.parse(localStorage.getItem('jugadoresComparados')) || [];
    const labels = [personajeElegidos[0].label, personajeElegidos[1].label];
    jugadoresComparados.push(labels);
    localStorage.setItem('jugadoresComparados', JSON.stringify(jugadoresComparados));
    localStorage.setItem('personajeElegidos', JSON.stringify(personajeElegidos));
    console.log("Jugadores comparados:", jugadoresComparados);
}

// Función para enviar los jugadores comparados
function enviarJugadoresComparados() {
    let jugadoresComparados = JSON.parse(localStorage.getItem('jugadoresComparados')) || [];
    if (jugadoresComparados.length > 0) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "../php/login_logout/logout.php", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(jugadoresComparados));
    } else {
        console.log("No hay jugadores comparados para enviar.");
    }
}

// Función para inicializar el evento de cerrar sesión
function inicializarCerrarSesion() {
    let cerrarSesion = document.getElementById("cerrarSesion");
    if (cerrarSesion) {
        cerrarSesion.addEventListener("click", enviarJugadoresComparados);
    } else {
        console.error("No se encontró el botón de cerrar sesión");
    }
}

// Inicializar el evento al cargar el script
document.addEventListener("DOMContentLoaded", inicializarCerrarSesion);

export { guardarTodosLosJugadoresComparados, enviarJugadoresComparados, inicializarCerrarSesion };
