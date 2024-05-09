let nombre = document.getElementById('nombre');
let errorNombre = document.getElementById('errorNombre');

let apodo = document.getElementById('apodo');
let errorApodo = document.getElementById('errorApodo');

let descripcion = document.getElementById('descripcion');
let errorDescripcion = document.getElementById('errorDescripcion');

let elemento = document.getElementById('elemento');
let errorElemento = document.getElementById('errorElemento');

let genero = document.getElementById('genero');
let errorGenero = document.getElementById('errorGenero');

let posicion = document.getElementById('posicion');
let errorPosicion = document.getElementById('errorPosicion');

let errorEstadisticas = document.getElementById('errorEstadisticas');
let campoErrorEstadisticas = document.getElementById('campoErrorEstadisticas');

let imagen = document.getElementById('imagen');
let errorImagen = document.getElementById('errorImagen');

let puntosRestantes = document.getElementById('puntosRestantes');
let main = document.getElementById('main');

let NombreCorrecto = true;
let ApodoCorrecto = true;
let DescripcionCorrecta = true;
let ElementoCorrecto = true;
let GeneroCorrecto = true;
let PosicionCorrecta = true;
let ImagenCorrecta = true;
let EstadisticasCorrectas = true;

function validarDatos() {
    validarNombre();
    validarApodo();
    validarDescripcion();
    validarElemento();
    validarGenero();
    validarImagen();
    validarPosicion();
    validarEstadisticas();
}

function validarNombre() {
    if (nombre.value === '') {
        errorNombre.textContent = 'El nombre es obligatorio';
        aplicarEstiloError(errorNombre);
        main.scrollIntoView({ behavior: "smooth" });
        NombreCorrecto = false;
    } else {
        // Si el nombre es válido, se limpia el mensaje de error y el estilo
        errorNombre.textContent = '';
        limpiarEstiloError(errorNombre);
        NombreCorrecto = true;
    }
}

function validarApodo() {
    if (apodo.value === '') {
        errorApodo.textContent = 'El apodo es obligatorio';
        aplicarEstiloError(errorApodo);
        main.scrollIntoView({ behavior: "smooth" });
        ApodoCorrecto = false;
    } else {
        errorApodo.textContent = '';
        limpiarEstiloError(errorApodo);
        ApodoCorrecto = true;
    }
}

function validarDescripcion() {
    if (descripcion.value === '') {
        errorDescripcion.textContent = 'La descripción es obligatoria';
        aplicarEstiloError(errorDescripcion);
        main.scrollIntoView({ behavior: "smooth" });
        DescripcionCorrecta = false;
    } else {
        errorDescripcion.textContent = '';
        limpiarEstiloError(errorDescripcion);
        DescripcionCorrecta = true;
    }
}

function validarElemento() {
    if (elemento.value === '') {
        errorElemento.textContent = 'El elemento es obligatorio';
        aplicarEstiloError(errorElemento);
        main.scrollIntoView({ behavior: "smooth" });
        ElementoCorrecto = false;
    } else {
        errorElemento.textContent = '';
        limpiarEstiloError(errorElemento);
        ElementoCorrecto = true;
    }
}

function validarGenero() {
    if (genero.value === '') {
        errorGenero.textContent = 'El género es obligatorio';
        aplicarEstiloError(errorGenero);
        main.scrollIntoView({ behavior: "smooth" });
        GeneroCorrecto = false;
    } else {
        errorGenero.textContent = '';
        limpiarEstiloError(errorGenero);
        GeneroCorrecto = true;
    }
}

function validarPosicion() {
    if (posicion.value === '') {
        errorPosicion.textContent = 'La posición es obligatoria';
        aplicarEstiloError(errorPosicion);
        main.scrollIntoView({ behavior: "smooth" });
        PosicionCorrecta = false;
    } else {
        errorPosicion.textContent = '';
        limpiarEstiloError(errorPosicion);
        PosicionCorrecta = true;
    }
}

function validarImagen() {
    if (imagen.value === '') {
        errorImagen.textContent = 'La imagen es obligatoria';
        aplicarEstiloError(errorImagen);
        main.scrollIntoView({ behavior: "smooth" });
        ImagenCorrecta = false;
    } else {
        errorImagen.textContent = '';
        limpiarEstiloError(errorImagen);
        ImagenCorrecta = true;
    }
}

function validarEstadisticas() {
    if (puntosRestantes.textContent > 0) {
        errorEstadisticas.textContent = 'Debes de asignar todos los puntos disponibles';
        aplicarEstiloError(campoErrorEstadisticas);
        EstadisticasCorrectas = false;
    } else if (puntosRestantes.textContent < 0) {
        errorEstadisticas.textContent = 'Has excedido el límite de puntos disponibles';
        aplicarEstiloError(campoErrorEstadisticas);
        EstadisticasCorrectas = false;
    } else {
        errorEstadisticas.textContent = '';
        EstadisticasCorrectas = true;
    }
}

function aplicarEstiloError(elemento) {
    elemento.style.border = '3px solid #b15d654d';
    elemento.style.backgroundColor = '#f99c9c';
    elemento.style.color = '#380c10';
}

function limpiarEstiloError(elemento) {
    elemento.style.border = ''; // Se elimina el borde personalizado
    elemento.style.backgroundColor = ''; // Se elimina el color de fondo personalizado
    elemento.style.color = ''; // Se restablece el color de texto original
}

let boton = document.getElementById('boton');
boton.addEventListener('click', validarDatos);

boton.addEventListener("click", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    if (NombreCorrecto && ApodoCorrecto && GeneroCorrecto && PosicionCorrecta && ImagenCorrecta && EstadisticasCorrectas === true) {
        document.getElementById("formDatos").submit(); // Envía el formulario
        document.getElementById("formEstadisticas").submit(); // Envía el formulario
    }
});
