let equipo = document.getElementById('equipo');
let errorEquipo = document.getElementById('errorEquipo');

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
let EquipoCorrecto = true;
let ImagenEquipoCorrecta = true;

function validarDatos() {
    validarEquipo();
    validarNombre();
    validarApodo();
    validarDescripcion();
    validarElemento();
    validarGenero();
    validarImagen();
    validarPosicion();
    validarEstadisticas();
}

function validarEquipo() {
    if (equipo.value === '') {
        errorEquipo.textContent = 'El equipo es obligatorio';
        aplicarEstiloError(errorEquipo);
        main.scrollIntoView({ behavior: "smooth" });
        EquipoCorrecto = false;
    } else {
        errorEquipo.textContent = '';
        limpiarEstiloError(errorEquipo);
        EquipoCorrecto = true;
    }
}


function validarNombre() {
    if (nombre.value === '') {
        errorNombre.textContent = 'El nombre es obligatorio';
        aplicarEstiloError(errorNombre);
        main.scrollIntoView({ behavior: "smooth" });
        NombreCorrecto = false;
    } else {
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

function añadirInputNombreEquipo() {
    let cajaPreguntaEquipo = document.getElementById('cajaPreguntaEquipo');
    let cajaNombreEquipo = `
        <div class="cajaPregunta" id="cajaNombreEquipo">
            <p class="tipo">Nombre del Equipo</p>
            <input type="text" id="nombreEquipo" name="nombreEquipo" class="selector" placeholder="Nombre Equipo"> <!-- Cambié el id a nombreEquipo -->
            <p class="tipoError" id="errorNombreEquipo"></p>
        </div>
        <div class="cajaImagenEquipo" id="cajaImagenEquipo">
                    <p class="tipoImagen">Imagen del Equipo</p>
                    <div class="subirImagen">
                        <div class="cajaInput">
                            <input type="file" id="imagenEquipo" name="fotoEquipo" class="imagen">
                        </div>
                        <p class="tipoErrorImagen" id="errorImagenEquipo"></p>
                    </div>
                </div>`;
    cajaPreguntaEquipo.insertAdjacentHTML('afterend', cajaNombreEquipo);
    errorEquipo.textContent = '';
    limpiarEstiloError(errorEquipo);
}

function validarNombreEquipo() {
    let nombreEquipo = document.getElementById('nombreEquipo');
    let errorNombreEquipo = document.getElementById('errorNombreEquipo');

    let cajaNombreEquipo = document.querySelector('.cajaNombreEquipo');

    if (cajaNombreEquipo) {
        // Si existe la caja de nombre de equipo, omitir la validación
        errorNombreEquipo.textContent = '';
        limpiarEstiloError(errorNombreEquipo);
        EquipoCorrecto = true;
    } else {
        // Si no existe, realizar la validación como de costumbre
        if (nombreEquipo.value === '') {
            errorNombreEquipo.textContent = 'El nombre es obligatorio';
            aplicarEstiloError(errorNombreEquipo);
            main.scrollIntoView({ behavior: "smooth" });
            EquipoCorrecto = false;
        } else {
            errorNombreEquipo.textContent = '';
            limpiarEstiloError(errorNombreEquipo);
            EquipoCorrecto = true;
        }
    }
}


function validarImagenEquipo() {
    let imagenEquipo = document.getElementById('imagenEquipo');
    let errorImagenEquipo = document.getElementById('errorImagenEquipo');
    if (imagenEquipo.value === '') {
        errorImagenEquipo.textContent = 'La imagen es obligatoria';
        aplicarEstiloError(errorImagenEquipo);
        main.scrollIntoView({ behavior: "smooth" });
        ImagenEquipoCorrecta = false;
    } else {
        errorImagenEquipo.textContent = '';
        limpiarEstiloError(errorImagenEquipo);
        ImagenEquipoCorrecta = true;
    }
}


equipo.addEventListener('change', function () {
    if (equipo.value === 'Nuevo') {
        añadirInputNombreEquipo();
    } else {
        let cajaNombreEquipo = document.getElementById('cajaNombreEquipo');
        let cajaImagenEquipo = document.getElementById('cajaImagenEquipo'); 
        if (cajaNombreEquipo) {
            cajaNombreEquipo.remove();
            cajaImagenEquipo.remove();
        }
    }
});


let boton = document.getElementById('boton');
boton.addEventListener('click', function (event) {
    validarDatos();
    let cajaNombreEquipo = document.getElementById('cajaNombreEquipo');
    if (cajaNombreEquipo) {
        validarNombreEquipo();
        validarImagenEquipo();
    }

    if (NombreCorrecto && ApodoCorrecto && GeneroCorrecto && PosicionCorrecta && ImagenCorrecta && EstadisticasCorrectas && EquipoCorrecto && ImagenEquipoCorrecta === true) {
        document.getElementById("formDatos").submit(); // Envía el formulario
        document.getElementById("formEstadisticas").submit(); // Envía el formulario
    }

});

equipo.addEventListener('change', function () {
    console.log("dgsgsdgsdg" +equipo.value);
});