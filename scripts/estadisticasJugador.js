const statsForm = document.getElementById('statsForm');
const puntosRestantesSpan = document.getElementById('puntosRestantes');
const statsValues = {
    tiro: 0,
    fisico: 0,
    control: 0,
    defensa: 0,
    rapidez: 0,
    aguante: 0,
    valor: 0
};

// Manejador de evento para actualizar los puntos restantes y valores seleccionados
// Función para calcular los puntos utilizados
function calcularPuntosUtilizados() {
    return Object.values(statsValues).reduce((acc, cur) => acc + cur, 0);
}

// Función para actualizar la interfaz de usuario
function actualizarInterfazUsuario(totalPuntos, puntosUtilizados) {
    puntosRestantesSpan.textContent = totalPuntos - puntosUtilizados;

    if (totalPuntos - puntosUtilizados <= 0) {
        statsForm.querySelectorAll('input[type="range"]').forEach(el => {
            if (statsValues[el.id] === 0) {
                el.disabled = true;
            }
        });
    } else {
        statsForm.querySelectorAll('input[type="range"]').forEach(el => {
            el.disabled = false;
        });
    }

    // Proporciona feedback visual
    if (totalPuntos - puntosUtilizados < 0) {
        puntosRestantesSpan.style.color = 'red'; // Cambia el color del texto a rojo si se excede el límite
    } else {
        puntosRestantesSpan.style.color = ''; // Restaura el color del texto
    }
}

// Manejador de evento para actualizar los puntos restantes y valores seleccionados
statsForm.addEventListener('input', function (event) {
    const totalPuntos = 433;
    const input = event.target;
    const statId = input.id;
    const value = parseInt(input.value);

    statsValues[statId] = value;
    const puntosUtilizados = calcularPuntosUtilizados();
    actualizarInterfazUsuario(totalPuntos, puntosUtilizados);

    // Validación de entrada
    if (value < 0 || value > totalPuntos) {
        input.value = statsValues[statId]; // Revierte el valor si es inválido
    }

    // Actualizar los rangos de las estadísticas
    const max = totalPuntos - puntosUtilizados + value;
    input.max = max;
    document.getElementById(statId + 'Value').textContent = value;
});
