let jugadores = [];
let jugadoresPersonales = [];

function obtenerDatos() {
    // Realizar una solicitud a la API 'prueba.php' utilizando fetch
    return fetch('../php/conexiones/conexionBD.php')
        // Procesar la respuesta como JSON
        .then(function (response) {
            return response.json();
        })
        // Manejar los datos obtenidos
        .then(function (data) {
            // Asignar los datos de los jugadores a la variable global 'jugadores'
            jugadores = data;
            // Devolver los datos de los jugadores
            return jugadores;
        })
        // Manejar errores en caso de que la solicitud falle
        .catch(function (error) {
            console.error('Error al obtener los datos de jugadores:', error);
        });
}

function obtenerDatosPersonales() {
    // Realizar una solicitud a la API 'prueba.php' utilizando fetch
    return fetch('../php/conexiones/conexionBDJugadoresPersonales.php')
        // Procesar la respuesta como JSON
        .then(function (response) {
            return response.json();
        })
        // Manejar los datos obtenidos
        .then(function (data) {
            jugadoresPersonales = data;
            // Devolver los datos de los jugadores
            return jugadoresPersonales;
        })
        // Manejar errores en caso de que la solicitud falle
        .catch(function (error) {
            console.error('Error al obtener los datos de jugadores:', error);
        });
}


let equipo = document.getElementById('equipo');
let errorEquipo = document.getElementById('errorEquipo');

let nombreEquipo;

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

let errorEstadisticasPePt = document.getElementById('errorEstadisticasPePt');
let campoErrorEstadisticasPePt = document.getElementById('campoErrorEstadisticasPePt');

let imagen = document.getElementById('imagen');
let errorImagen = document.getElementById('errorImagen');

let puntosRestantes = document.getElementById('puntosRestantes');
let puntosRestantesPePt = document.getElementById('puntosRestantesPePt');
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

let apodosJugadores = [];
obtenerDatos().then(function (jugadores) {
    jugadores.forEach(function (jugador) {
        apodosJugadores.push(jugador.Apodo);
    });
});

let apodosJugadoresPersonales = [];
obtenerDatosPersonales().then(function (jugadoresPersonales) {
    jugadoresPersonales.forEach(function (jugador) {
        apodosJugadoresPersonales.push(jugador.Apodo);
    });
});

const letrasRegex = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/;

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
    validarEstadisticasPePt();
    if (document.getElementById('buscadorJuegos')) {
        validarJuego();
    }
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

    const nombreInput = nombre.value.trim(); // Elimina los espacios en blanco al principio y al final

    if (nombre.value === '') {
        errorNombre.textContent = 'El nombre es obligatorio';
        aplicarEstiloError(errorNombre);
        main.scrollIntoView({ behavior: "smooth" });
        NombreCorrecto = false;
    } else if (!letrasRegex.test(nombreInput)) {
        errorNombre.textContent = 'El nombre solo puede contener letras';
        aplicarEstiloError(errorNombre);
        main.scrollIntoView({ behavior: "smooth" });
        NombreCorrecto = false;
    } else if (nombreInput.length > 25) { // Validación para verificar si el apodo tiene más de 10 letras
        errorNombre.textContent = 'El nombre no puede tener más de 25 letras';
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

    // Obtener el apodo ingresado por el usuario
    let nuevoApodo = apodo.value.trim();

    // Verificar si el apodo está vacío
    if (nuevoApodo === '') {
        errorApodo.textContent = 'El apodo es obligatorio';
        aplicarEstiloError(errorApodo);
        main.scrollIntoView({ behavior: "smooth" });
        ApodoCorrecto = false;
    } else if (!letrasRegex.test(nuevoApodo)) {
        errorApodo.textContent = 'El apodo solo puede contener letras';
        aplicarEstiloError(errorApodo);
        main.scrollIntoView({ behavior: "smooth" });
        ApodoCorrecto = false;
    } else if (nuevoApodo.length > 10) { // Validación para verificar si el apodo tiene más de 10 letras
        errorApodo.textContent = 'El apodo no puede tener más de 10 letras';
        aplicarEstiloError(errorApodo);
        main.scrollIntoView({ behavior: "smooth" });
        ApodoCorrecto = false;
    } else if (apodosJugadores.includes(nuevoApodo) || apodosJugadoresPersonales.includes(nuevoApodo)) {
        errorApodo.textContent = 'Ya existe un jugador con ese apodo';
        aplicarEstiloError(errorApodo);
        main.scrollIntoView({ behavior: "smooth" });
        ApodoCorrecto = false;
    } else {
        // Si el apodo no existe, limpiar el error
        errorApodo.textContent = '';
        limpiarEstiloError(errorApodo);
        ApodoCorrecto = true;
    }

}


function validarDescripcion() {

    const descripcionInput = descripcion.value.trim(); // Elimina los espacios en blanco al principio y al final

    if (descripcion.value === '') {
        errorDescripcion.textContent = 'La descripción es obligatoria';
        aplicarEstiloError(errorDescripcion);
        main.scrollIntoView({ behavior: "smooth" });
        DescripcionCorrecta = false;
    } else if (!letrasRegex.test(descripcionInput)) {
        errorDescripcion.textContent = 'La descripción solo puede contener letras';
        aplicarEstiloError(errorDescripcion);
        main.scrollIntoView({ behavior: "smooth" });
        DescripcionCorrecta = false;
    } else if (descripcionInput.length > 80) {
        errorDescripcion.textContent = 'La descripción no puede tener más de 80 letras';
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
    let imagen = document.getElementById('imagen');
    let errorImagen = document.getElementById('errorImagen');
    let allowedExtensions = /(\.png|\.jpg)$/i; // Expresión regular para permitir solo PNG o JPG

    if (imagen.value === '') {
        errorImagen.textContent = 'La imagen es obligatoria';
        aplicarEstiloError(errorImagen);
        main.scrollIntoView({ behavior: "smooth" });
        ImagenCorrecta = false;
    } else if (!allowedExtensions.exec(imagen.value)) {
        errorImagen.textContent = 'Solo se permiten archivos PNG o JPG.';
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

function validarEstadisticasPePt() {
    if (puntosRestantesPePt.textContent > 0) {
        errorEstadisticasPePt.textContent = 'Debes de asignar todos los puntos disponibles';
        aplicarEstiloError(campoErrorEstadisticasPePt);
        EstadisticasCorrectas = false;
    } else if (puntosRestantesPePt.textContent < 0) {
        errorEstadisticasPePt.textContent = 'Has excedido el límite de puntos disponibles';
        aplicarEstiloError(campoErrorEstadisticasPePt);
        EstadisticasCorrectas = false;
    } else {
        errorEstadisticasPePt.textContent = '';
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
                            <input type="file" id="imagenEquipo" name="imagenEquipo" class="imagen">
                        </div>
                        <p class="tipoErrorImagen" id="errorImagenEquipo"></p>
                    </div>
                </div>`;
    cajaPreguntaEquipo.insertAdjacentHTML('afterend', cajaNombreEquipo);
    errorEquipo.textContent = '';
    limpiarEstiloError(errorEquipo);
}


function validarNombreEquipo() {

    nombreEquipo = document.getElementById('nombreEquipo').value; // Obtener el valor del campo de entrada
    let errorNombreEquipo = document.getElementById('errorNombreEquipo');

    inputNombreEquipo = nombreEquipo.trim(); // Elimina los espacios en blanco al principio y al final

    let cajaNombreEquipo = document.querySelector('.cajaNombreEquipo');

    // Si existe la caja de nombre de equipo, omitir la validación
    if (cajaNombreEquipo) {
        errorNombreEquipo.textContent = '';
        limpiarEstiloError(errorNombreEquipo);
        EquipoCorrecto = true;
    } else {
        // Verificar si el nombre del equipo ya existe en la lista de equipos
        if (nombreEquipo === '') {
            errorNombreEquipo.textContent = 'El nombre es obligatorio';
            aplicarEstiloError(errorNombreEquipo);
            main.scrollIntoView({ behavior: "smooth" });
            EquipoCorrecto = false;
        } else if (!letrasRegex.test(inputNombreEquipo)) {
            errorNombreEquipo.textContent = 'El nombre del equipo solo puede contener letras';
            aplicarEstiloError(errorNombreEquipo);
            main.scrollIntoView({ behavior: "smooth" });
            EquipoCorrecto = false;
        } else if (inputNombreEquipo.length > 15) {
            errorNombreEquipo.textContent = 'El nombre del Equipo no puede tener más de 15 letras';
            aplicarEstiloError(errorNombreEquipo);
            main.scrollIntoView({ behavior: "smooth" });
            EquipoCorrecto = false;
        } else {
            let selectEquipos = document.getElementById("equipo");
            let opciones = selectEquipos.options;
            let existeEnSelect = false;

            for (let i = 0; i < opciones.length; i++) {
                // Verificar si el valor es igual a algún valor del select excepto "Nuevo"
                if (opciones[i].value === nombreEquipo && nombreEquipo !== "Nuevo") {
                    existeEnSelect = true;
                }
            }

            if (existeEnSelect) {
                errorNombreEquipo.textContent = 'Equipo ya existente';
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

    let nombreEquipoModificado = document.getElementById('nombreEquipo').value;
    nombreEquipoModificado = nombreEquipoModificado.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    nombreEquipoModificado = nombreEquipoModificado.replace(/'/g, '');
    nombreEquipoModificado = nombreEquipoModificado.replace(/\s+/g, '_');
    document.getElementById("nombreEquipoModificado").value = nombreEquipoModificado;

    console.log(document.getElementById('nombreEquipoModificado').value);

}

function validarImagenEquipo() {
    let imagenEquipo = document.getElementById('imagenEquipo');
    let errorImagenEquipo = document.getElementById('errorImagenEquipo');
    let allowedExtensions = /(\.png|\.jpg)$/i; // Expresión regular para permitir solo PNG o JPG

    if (imagenEquipo.value === '') {
        errorImagenEquipo.textContent = 'La imagen es obligatoria';
        aplicarEstiloError(errorImagenEquipo);
        main.scrollIntoView({ behavior: "smooth" });
        ImagenEquipoCorrecta = false;
    } else if (!allowedExtensions.exec(imagenEquipo.value)) {
        errorImagenEquipo.textContent = 'Solo se permiten archivos PNG o JPG.';
        aplicarEstiloError(errorImagenEquipo);
        main.scrollIntoView({ behavior: "smooth" });
        ImagenEquipoCorrecta = false;
    } else {
        errorImagenEquipo.textContent = '';
        limpiarEstiloError(errorImagenEquipo);
        ImagenEquipoCorrecta = true;
    }
}

function validarJuego() {
    let juego = document.getElementById('buscadorJuegos');
    let errorJuego = document.getElementById('errorJuego');
    if (juego.value === '') {
        errorJuego.textContent = 'El juego es obligatorio';
        aplicarEstiloError(errorJuego);
        main.scrollIntoView({ behavior: "smooth" });
    } else {
        errorJuego.textContent = '';
        limpiarEstiloError(errorJuego);
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

boton.addEventListener('click', function (event) {
    validarDatos();
    let cajaNombreEquipo = document.getElementById('cajaNombreEquipo');
    if (cajaNombreEquipo) {
        validarNombreEquipo();
        validarImagenEquipo();
    }

    if (NombreCorrecto && ApodoCorrecto && GeneroCorrecto && PosicionCorrecta && ImagenCorrecta && EstadisticasCorrectas && EquipoCorrecto && ImagenEquipoCorrecta === true) {


        let equipo = document.getElementById('equipo').value;
        let equipoModificado = document.getElementById('equipoModificado').value;
        equipoModificado = equipo;
        equipoModificado = equipoModificado.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
        equipoModificado = equipoModificado.replace(/'/g, '');
        equipoModificado = equipoModificado.replace(/\s+/g, '_');
        document.getElementById("equipoModificado").value = equipoModificado;

        console.log("Equipo Modificado" + document.getElementById('equipoModificado').value);

        console.log("Nombre del equipo modificado" + document.getElementById('nombreEquipoModificado').value);

        document.getElementById("formDatos").submit(); // Envía el formulario
    }

});

