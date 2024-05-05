
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
statsForm.addEventListener('input', function (event) {
    const totalPuntos = 440;
    const input = event.target;
    const statId = input.id;
    const value = parseInt(input.value);

    // Calcular puntos utilizados y mostrar valores seleccionados
    statsValues[statId] = value;
    const puntosUtilizados = Object.values(statsValues).reduce((acc, cur) => acc + cur, 0);
    puntosRestantesSpan.textContent = totalPuntos - puntosUtilizados;

    // Actualizar los rangos de las estadísticas
    const max = totalPuntos - puntosUtilizados + value;
    input.max = max;
    document.getElementById(statId + 'Value').textContent = value;

    // Deshabilitar otros rangos si los puntos restantes son menores o iguales a cero
    if (totalPuntos - puntosUtilizados <= 0) {
        statsForm.querySelectorAll('input[type="range"]').forEach(el => {
            if (el.id !== statId) {
                el.disabled = true;
            }
        });
    } else {
        statsForm.querySelectorAll('input[type="range"]').forEach(el => {
            el.disabled = false;
        });
    }
});
