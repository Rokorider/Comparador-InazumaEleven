document.getElementById('imagen').addEventListener('change', function (event) {
    const archivo = event.target.files[0];
    if (archivo) {
        const lector = new FileReader();
        lector.onload = function (e) {
            document.getElementById('imagenActualizada').src = e.target.result;
            document.getElementById('imagenActualizada').style.display = 'block'; // Muestra la imagen
        }
        lector.readAsDataURL(archivo);
    }
});

// Guardar el texto por defecto
const nombreActualizado = document.getElementById('nombreActualizado');
nombreActualizado.setAttribute('data-default-text', nombreActualizado.innerText);

document.getElementById('nombre').addEventListener('change', function(event) {
    const nombre = event.target.value;
    
    if (nombre) {
        nombreActualizado.innerText = nombre;
    } else {
        // Restablecer el texto por defecto
        nombreActualizado.innerText = nombreActualizado.getAttribute('data-default-text');
    }
});

// Guardar el texto por defecto
const apodoActualizado = document.getElementById('apodoActualizado');
apodoActualizado.setAttribute('data-default-text', apodoActualizado.innerText);

document.getElementById('apodo').addEventListener('change', function (event) {
    const apodo = event.target.value;

    if (apodo) {
        apodoActualizado.innerText = apodo;
    } else {
        // Restablecer el texto por defecto
        apodoActualizado.innerText = apodoActualizado.getAttribute('data-default-text');
    }
});

// Guardar el texto por defecto
const descripcionActualizado = document.getElementById('descripcionActualizado');
descripcionActualizado.setAttribute('data-default-text', descripcionActualizado.innerText);

document.getElementById('descripcion').addEventListener('change', function (event) {
    const descripcion = event.target.value;

    if (descripcion) {
        descripcionActualizado.innerText = descripcion;
    } else {
        // Restablecer el texto por defecto
        descripcionActualizado.innerText = descripcionActualizado.getAttribute('data-default-text');
    }
});

document.getElementById('elemento').addEventListener('change', function(event) {
    const elemento = event.target.value;
    const elementoActualizado = document.getElementById('elementoActualizado');

    if (elemento) {
        // Si el valor del input no está vacío, mostrar la imagen correspondiente
        elementoActualizado.src = "../img/Elementos/" + elemento + ".png";
    } else {
        // Si el valor del input está vacío, mostrar la imagen original
        elementoActualizado.src = "../img/original.png"; // Ruta a la imagen original
        elementoActualizado.alt = "Imagen Original";
    }
});


document.getElementById('posicion').addEventListener('change', function (event) {
    const posicion = event.target.value;
    if (posicion) {
        document.getElementById('posicionActualizado').innerText = posicion;
    }
});

document.getElementById('genero').addEventListener('change', function (event) {
    const genero = event.target.value;
    const generoActualizado = document.getElementById('generoActualizado');

    if (genero) {
        generoActualizado.src = "../img/generos/" + genero + ".png";
    }else {
        // Si el valor del input está vacío, mostrar la imagen original
        generoActualizado.src = "../img/original.png"; // Ruta a la imagen original
        generoActualizado.alt = "Imagen Original";
    }

});

document.getElementById('tiro').addEventListener('change', function (event) {
    const tiro = event.target.value;
    if (tiro) {
        document.getElementById('tiroActualizado').textContent = tiro;
    }
});

document.getElementById('fisico').addEventListener('change', function (event) {
    const fisico = event.target.value;
    if (fisico) {
        document.getElementById('fisicoActualizado').textContent = fisico;
    }
});

document.getElementById('control').addEventListener('change', function (event) {
    const control = event.target.value;
    if (control) {
        document.getElementById('controlActualizado').textContent = control;
    }
});

document.getElementById('defensa').addEventListener('change', function (event) {
    const defensa = event.target.value;
    if (defensa) {
        document.getElementById('defensaActualizado').textContent = defensa;
    }
});

document.getElementById('rapidez').addEventListener('change', function (event) {
    const rapidez = event.target.value;
    if (rapidez) {
        document.getElementById('rapidezActualizado').textContent = rapidez;
    }
});

document.getElementById('aguante').addEventListener('change', function (event) {
    const aguante = event.target.value;
    if (aguante) {
        document.getElementById('aguanteActualizado').textContent = aguante;
    }
});

document.getElementById('valor').addEventListener('change', function (event) {
    const valor = event.target.value;
    if (valor) {
        document.getElementById('valorActualizado').textContent = valor;
    }
});

document.getElementById('pe').addEventListener('change', function (event) {
    const pe = event.target.value;
    if (pe) {
        document.getElementById('peActualizado').textContent = pe + "/" + pe;
    }
});

document.getElementById('pt').addEventListener('change', function (event) {
    const pt = event.target.value;
    if (pt) {
        document.getElementById('ptActualizado').textContent = pt + "/" + pt;
    }
});


