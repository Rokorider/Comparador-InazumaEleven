    let nombre = document.getElementById('nombre');
    let errorNombre = document.getElementById('errorNombre');
    let apodo = document.getElementById('apodo');
    let errorApodo = document.getElementById('errorApodo');
    let genero = document.getElementById('genero');
    let errorGenero = document.getElementById('errorGenero');
    let posicion = document.getElementById('posicion');
    let errorPosicion = document.getElementById('errorPosicion');
    let puntosRestantes = document.getElementById('puntosRestantes');
    let errorEstadisticas = document.getElementById('errorEstadisticas');
    let campoErrorEstadisticas = document.getElementById('campoErrorEstadisticas');
    let imagen = document.getElementById('imagen');
    let errorImagen = document.getElementById('errorImagen');

    let main = document.getElementById('main');

    let datosCorrectos = true;

    function validarDatos() {
        validarNombre();
        validarApodo();
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
            datosCorrectos = false;
        } else {
            // Si el nombre es válido, se limpia el mensaje de error y el estilo
            errorNombre.textContent = '';
            limpiarEstiloError(errorNombre);
            datosCorrectos = true;
        }
    }

    function validarApodo() {
        if (apodo.value === '') {
            errorApodo.textContent = 'El apodo es obligatorio';
            aplicarEstiloError(errorApodo);
            main.scrollIntoView({ behavior: "smooth" });
            datosCorrectos = false;
        } else {
            errorApodo.textContent = '';
            limpiarEstiloError(errorApodo);
            datosCorrectos = true;
        }
    }

    function validarGenero() {
        if (genero.value === '') {
            errorGenero.textContent = 'El género es obligatorio';
            aplicarEstiloError(errorGenero);
            main.scrollIntoView({ behavior: "smooth" });
            datosCorrectos = false;
        } else {
            errorGenero.textContent = '';
            limpiarEstiloError(errorGenero);
            datosCorrectos = true;
        }
    }

    function validarPosicion() {
        if (posicion.value === '') {
            errorPosicion.textContent = 'La posición es obligatoria';
            aplicarEstiloError(errorPosicion);
            main.scrollIntoView({ behavior: "smooth" });
            datosCorrectos = false;
        } else {
            errorPosicion.textContent = '';
            limpiarEstiloError(errorPosicion);
            datosCorrectos = true;
        }
    }

    function validarImagen() {
        if (imagen.value === '') {
            errorImagen.textContent = 'La imagen es obligatoria';
            aplicarEstiloError(errorImagen);
            main.scrollIntoView({ behavior: "smooth" });
            datosCorrectos = false;
        } else {
            errorImagen.textContent = '';
            limpiarEstiloError(errorImagen);
            datosCorrectos = true;
        }
    }

    function validarEstadisticas() {
        if (puntosRestantes.textContent > 0) {
            errorEstadisticas.textContent = 'Debes de asignar todos los puntos disponibles';
            aplicarEstiloError(campoErrorEstadisticas);
            datosCorrectos = false;
        } else {
            errorEstadisticas.textContent = '';
            datosCorrectos = true;
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

        if (datosCorrectos === true) {
            document.getElementById("formDatos").submit(); // Envía el formulario
            document.getElementById("formEstadisticas").submit(); // Envía el formulario
        }
    });
