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

function iniciar() {
    // Obtener datos de los jugadores
    obtenerDatos().then(function () {
        // Llenar el buscador de juegos una vez que los datos estén disponibles
        llenarBuscadorJuegos();
    });
}

// Función para llenar el buscador de juegos con los juegos disponibles
function llenarBuscadorJuegos() {
    // Obtener el elemento del buscador de juegos
    let buscadorJuegos = document.getElementById('buscadorJuegos').querySelector('select');

    // Crear un array para almacenar los juegos únicos
    let juegos = [];

    // Iterar sobre los datos de los jugadores para obtener los juegos únicos
    jugadores.forEach(function (jugador) {
        // Verificar si el juego del jugador ya está en la lista de juegos
        if (!juegos.includes(jugador.Juego)) {
            // Agregar el juego a la lista de juegos
            juegos.push(jugador.Juego);
        }
    });

    // Ordenar los juegos alfabéticamente
    juegos.sort();

    // Agregar las opciones de juegos al buscador de juegos
    juegos.forEach(function (juego) {
        let option = document.createElement('option');
        option.value = juego;
        option.textContent = juego;
        buscadorJuegos.appendChild(option);
    });

    // Agregar evento de cambio al buscador de juegos
    buscadorJuegos.addEventListener('change', actualizarEquipos);
}

function actualizarEquipos() {

    // Obtener el juego seleccionado en el buscador de juegos
    let juegoSeleccionado = this.value;

    // Obtener el elemento del buscador de equipos
    let buscadorEquipos = document.getElementById('buscadorEquipos').querySelector('select');

    // Filtrar los equipos disponibles para el juego seleccionado
    let equipos = [];
    jugadores.forEach(function (jugador) {
        if (jugador.Juego === juegoSeleccionado && !equipos.includes(jugador.Equipo)) {
            equipos.push(jugador.Equipo);
        }
    });

    // Limpiar el buscador de jugadores antes de agregar nuevas opciones
    buscadorEquipos.innerHTML = '';

    // Agregar la opción por defecto al buscador de juegos
    let defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Selecciona un equipo';
    buscadorEquipos.appendChild(defaultOption);

    // Agregar las opciones de equipos al buscador de equipos
    equipos.forEach(function (equipo) {
        let option = document.createElement('option');
        option.value = equipo;
        option.textContent = equipo;
        buscadorEquipos.appendChild(option);
    });

    // Agregar evento de cambio al buscador de equipos
    buscadorEquipos.addEventListener('change', actualizarJugadores);
}

function actualizarJugadores() {

    // Obtener el equipo seleccionado en el buscador de equipos
    let equipoSeleccionado = this.value;

    // Obtener el elemento de la tabla de jugadores
    let buscadorJugador = document.getElementById('buscadorJugador').querySelector('select');

    // Filtrar los jugadores disponibles para el equipo seleccionado
    let jugadoresEquipo = [];
    jugadores.forEach(function (jugador) {
        if (jugador.Equipo === equipoSeleccionado) {
            jugadoresEquipo.push(jugador);
        }
    });

    // Limpiar el buscador de jugadores antes de agregar nuevas opciones
    buscadorJugador.innerHTML = '';

    // Agregar la opción por defecto al buscador de juegos
    let defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Selecciona un jugador';
    buscadorJugador.appendChild(defaultOption);

    // Agregar las opciones de jugadores al buscador de jugadores
    jugadoresEquipo.forEach(function (jugador) {
        let option = document.createElement('option');
        option.value = jugador.Nombre_Real; 
        option.textContent = jugador.Nombre_Real; 
        buscadorJugador.appendChild(option);
    });

    // Agregar evento de cambio al buscador de jugadores
    buscadorJugador.addEventListener('change', recojerJugador);
}

function recojerJugador() {
    // Obtener el apodo del jugador seleccionado
    let Nombre_Real = document.getElementById('buscadorJugador').querySelector('select').value;

    // Obtener el jugador seleccionado
    let jugador = jugadores.find(function (jugador) {
        return jugador.Nombre_Real === Nombre_Real;
    });

    // Pasar el jugador seleccionado a la función 'mostrarJugador'
    mostrarJugador(jugador);
}

function mostrarJugador(jugador) {

    let contenedorJugador = document.getElementById('contenedorJugador');

    // Establecer el valor del campo oculto con el ID del jugador
    document.getElementById("idJugador").value = jugador.ID;
    console.log(jugador.ID);

    contenedorJugador.innerHTML = `
    
    <div class="jugador" id="jugador">
                <div class="infoJugador">
                    <div class="imgJugador">
                        <img src="${jugador.Imagenes}" alt="${jugador.Nombre_Real}">
                    </div>
                    <div class="datosJugador">
                        <div class="datos1">
                            <div class="nombre">
                                <p>${jugador.Nombre_Real}</p>
                            </div>
                            <div class="nivel">
                                <p>Niv. 99</p>
                            </div>
                            <div class="posicion">
                                <div class="posicionTexto">
                                    <p>${jugador.Posición}</p>
                                </div>
                            </div>
                        </div>
                        <div class="datos1">
                            <div class="nombre">
                                <p>${jugador.Apodo}</p>
                            </div>
                            <div class="genero">
                                <img src="../img/generos/${jugador.Género}.png" alt="${jugador.Género}">
                            </div>
                            <div class="elemento">
                                <img src="../img/Elementos/${jugador.Elemento}.png" alt="${jugador.Elemento}">
                            </div>
                        </div>
                        <div class="datos2">
                            <div class="pe">
                                <div class="texto">
                                    <p>PE</p>
                                </div>
                                <div class="valor">
                                    <p>${jugador.PE}/${jugador.PE}</p>
                                </div>
                            </div>
                            <div class="pt">
                                <div class="texto">
                                    <p>PT</p>
                                </div>
                                <div class="valor">
                                    <p>${jugador.PT}/${jugador.PT}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="estadisticasJugador">
                    <div class="estadistica">
                        <div class="tipo">
                            <div class="tipoUnidad">
                                <p>Tiro</p>
                            </div>
                            <div class="unidad">
                                <p>${jugador.Tiro}</p>
                            </div>
                        </div>
                        <div class="tipo">
                            <div class="tipoUnidad">
                                <p>Físico</p>
                            </div>
                            <div class="unidad">
                                <p>${jugador.Físico}</p>
                            </div>
                        </div>
                    </div>
                    <div class="estadistica">
                        <div class="tipo">
                            <div class="tipoUnidad">
                                <p>Control</p>
                            </div>
                            <div class="unidad">
                                <p>${jugador.Control}</p>
                            </div>
                        </div>
                        <div class="tipo">
                            <div class="tipoUnidad">
                                <p>Defensa</p>
                            </div>
                            <div class="unidad">
                                <p>${jugador.Defensa}</p>
                            </div>
                        </div>
                    </div>
                    <div class="estadistica">
                        <div class="tipo">
                            <div class="tipoUnidad">
                                <p>Rapidez</p>
                            </div>
                            <div class="unidad">
                                <p>${jugador.Rapidez}</p>
                            </div>
                        </div>
                        <div class="tipo">
                            <div class="tipoUnidad">
                                <p>Aguante</p>
                            </div>
                            <div class="unidad">
                                <p>${jugador.Aguante}</p>
                            </div>
                        </div>
                    </div>
                    <!-- Estadística única del jugador -->
                    <div class="estadistica">
                        <div class="tipoUnico">
                            <div class="tipoUnidadUnica">
                                <p>Valor</p>
                            </div>
                            <div class="unidadUnica">
                                <p>${jugador.Valor}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="juego">
                    <p class="descripcion">${jugador.Descripción}</p>
                </div>
            </div>

            <div class="cajaFlecha">
                <img src="../img/flechaAzulnotext.png" alt="Flecha">
            </div>

            <div class="jugador" id="jugador">
                <div class="infoJugador">
                    <div class="imgJugador">
                        <img src="${jugador.Imagenes}" id="imagenActualizada" alt="${jugador.Nombre_Real}">
                    </div>
                    <div class="datosJugador">
                        <div class="datos1">
                            <div class="nombre" id="nombreActualizado">
                                <p>${jugador.Nombre_Real}</p>
                            </div>
                            <div class="nivel">
                                <p>Niv. 99</p>
                            </div>
                            <div class="posicion">
                                <div class="posicionTexto">
                                    <p id="posicionActualizado">${jugador.Posición}</p>
                                </div>
                            </div>
                        </div>
                        <div class="datos1">
                            <div class="nombre" id="apodoActualizado">
                                <p>${jugador.Apodo}</p>
                            </div>
                            <div class="genero">
                                <img id="generoActualizado" src="../img/generos/${jugador.Género}.png" alt="${jugador.Género}">
                            </div>
                            <div class="elemento">
                                <img id="elementoActualizado" src="../img/Elementos/${jugador.Elemento}.png" alt="${jugador.Elemento}">
                            </div>
                        </div>
                        <div class="datos2">
                            <div class="pe">
                                <div class="texto">
                                    <p>PE</p>
                                </div>
                                <div class="valor">
                                    <p id="peActualizado">${jugador.PE}/${jugador.PE}</p>
                                </div>
                            </div>
                            <div class="pt">
                                <div class="texto">
                                    <p>PT</p>
                                </div>
                                <div class="valor">
                                    <p id="ptActualizado">${jugador.PT}/${jugador.PT}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="estadisticasJugador">
                    <div class="estadistica">
                        <div class="tipo">
                            <div class="tipoUnidad">
                                <p>Tiro</p>
                            </div>
                            <div class="unidad" >
                                <p id="tiroActualizado">${jugador.Tiro}</p>
                            </div>
                        </div>
                        <div class="tipo">
                            <div class="tipoUnidad">
                                <p>Físico</p>
                            </div>
                            <div class="unidad">
                                <p id="fisicoActualizado">${jugador.Físico}</p>
                            </div>
                        </div>
                    </div>
                    <div class="estadistica">
                        <div class="tipo">
                            <div class="tipoUnidad">
                                <p>Control</p>
                            </div>
                            <div class="unidad">
                                <p id="controlActualizado">${jugador.Control}</p>
                            </div>
                        </div>
                        <div class="tipo">
                            <div class="tipoUnidad">
                                <p>Defensa</p>
                            </div>
                            <div class="unidad">
                                <p id="defensaActualizado">${jugador.Defensa}</p>
                            </div>
                        </div>
                    </div>
                    <div class="estadistica">
                        <div class="tipo">
                            <div class="tipoUnidad">
                                <p>Rapidez</p>
                            </div>
                            <div class="unidad">
                                <p  id="rapidezActualizado">${jugador.Rapidez}</p>
                            </div>
                        </div>
                        <div class="tipo">
                            <div class="tipoUnidad">
                                <p>Aguante</p>
                            </div>
                            <div class="unidad">
                                <p id="aguanteActualizado">${jugador.Aguante}</p>
                            </div>
                        </div>
                    </div>
                    <div class="estadistica">
                        <div class="tipoUnico">
                            <div class="tipoUnidadUnica">
                                <p>Valor</p>
                            </div>
                            <div class="unidadUnica">
                                <p id="valorActualizado">${jugador.Valor}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="juego">
                    <p class="descripcion" id="descripcionActualizado">${jugador.Descripción}</p>
                </div>
            </div>
    `;

    // LLamar a la función para actualizar los datos del jugador
    actualizarDatosJugador(jugador);

}

function actualizarDatosJugador(jugador) {

    document.getElementById('imagen').addEventListener('change', function (event) {
        const archivo = event.target.files[0];
        if (archivo) {
            const lector = new FileReader();
            lector.onload = function (e) {
                document.getElementById('imagenActualizada').src = e.target.result;
                document.getElementById('imagenActualizada').style.display = 'block'; // Muestra la imagen
            }
            lector.readAsDataURL(archivo);
        } else {
            document.getElementById('imagenActualizada').src = jugador.Imagenes;
        }
    });

    document.getElementById('nombre').addEventListener('change', function (event) {
        const nombre = event.target.value;

        if (nombre) {
            nombreActualizado.innerText = nombre;
        } else {
            // Restablecer el texto por defecto
            nombreActualizado.innerText = jugador.Nombre_Real;
        }
    });

    document.getElementById('apodo').addEventListener('change', function (event) {
        const apodo = event.target.value;

        if (apodo) {
            apodoActualizado.innerText = apodo;
        } else {
            // Restablecer el texto por defecto
            apodoActualizado.innerText = jugador.Apodo;
        }
    });

    document.getElementById('descripcion').addEventListener('change', function (event) {
        const descripcion = event.target.value;

        if (descripcion) {
            descripcionActualizado.innerText = descripcion;
        } else {
            // Restablecer el texto por defecto
            descripcionActualizado.innerText = jugador.Descripción;
        }
    });

    document.getElementById('elemento').addEventListener('change', function (event) {
        const elemento = event.target.value;
        const elementoActualizado = document.getElementById('elementoActualizado');

        if (elemento) {
            // Si el valor del input no está vacío, mostrar la imagen correspondiente
            elementoActualizado.src = "../img/Elementos/" + elemento + ".png";
        } else {
            // Si el valor del input está vacío, mostrar la imagen original
            elementoActualizado.src = "../img/Elementos/" + jugador.Elemento + ".png"; // Ruta a la imagen original
            elementoActualizado.alt = jugador.Elemento;
        }
    });

    document.getElementById('posicion').addEventListener('change', function (event) {
        const posicion = event.target.value;
        if (posicion) {
            document.getElementById('posicionActualizado').innerText = posicion;
        } else {
            document.getElementById('posicionActualizado').innerText = jugador.Posición;
        }
    });

    document.getElementById('genero').addEventListener('change', function (event) {
        const genero = event.target.value;
        const generoActualizado = document.getElementById('generoActualizado');

        if (genero) {
            generoActualizado.src = "../img/generos/" + genero + ".png";
        } else {
            // Si el valor del input está vacío, mostrar la imagen original
            generoActualizado.src = "../img/generos/" + jugador.Género + ".png"; // Ruta a la imagen original
            generoActualizado.alt = jugador.Género;
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

}

let NombreCorrecto = true;
let ApodoCorrecto = true;
let EstadisticasCorrectas = true;
let todosLosDatosCorrectos = true;


function validarDatos(jugadores) {

    let nombre = document.getElementById('nombre');
    let errorNombre = document.getElementById('errorNombre');

    let apodo = document.getElementById('apodo');
    let errorApodo = document.getElementById('errorApodo');

    let errorEstadisticas = document.getElementById('errorEstadisticas');
    let campoErrorEstadisticas = document.getElementById('campoErrorEstadisticas');

    let errorEstadisticasPePt = document.getElementById('errorEstadisticasPePt');
    let campoErrorEstadisticasPePt = document.getElementById('campoErrorEstadisticasPePt');

    let errorEstadisticasTodas = document.getElementById('errorEstadisticasTodas');

    let puntosRestantes = document.getElementById('puntosRestantes');
    let puntosRestantesPePt = document.getElementById('puntosRestantesPePt');
    let contenedorFormulario = document.getElementById('contenedorFormulario');

    // Crear un array para almacenar los nombres de los jugadores
    let nombreJugadores = [];
    // Iterar sobre los datos de los jugadores para obtener los nombres
    jugadores.forEach(function (jugador) {
        // Agregar los nombres de los jugadores a la lista de nombres
        nombreJugadores.push(jugador.Nombre_Real);
    });

    let apodosJugadores = [];
    jugadores.forEach(function (jugador) {
        apodosJugadores.push(jugador.Apodo);
    });

    validarTodosLosDatos();
    validarNombre();
    validarApodo();
    validarEstadisticas();
    validarEstadisticasPePt();

    function validarTodosLosDatos() {
        if (nombre.value === '' || apodo.value === '' || puntosRestantes.textContent === 433 || puntosRestantesPePt.textContent === 248) {
            errorEstadisticasTodas.textContent = 'Para actualizar un jugador debes de completar al menos un campo o modificar las estadísticas';
            aplicarEstiloError(errorEstadisticasTodas);
            todosLosDatosCorrectos = false;
        } else {
            errorEstadisticasTodas.textContent = '';
            limpiarEstiloError(errorEstadisticasTodas);
            todosLosDatosCorrectos = true;
        }
    }

    function validarNombre() {

        if (nombreJugadores.includes(nombre.value)) {
            errorNombre.textContent = 'Ya existe un jugador con ese nombre';
            aplicarEstiloError(errorNombre);
            contenedorFormulario.scrollIntoView({ behavior: "smooth" });
            NombreCorrecto = false;
        } else {
            errorNombre.textContent = '';
            limpiarEstiloError(errorNombre);
            NombreCorrecto = true;
        }

    }

    function validarApodo() {
        if (apodosJugadores.includes(apodo.value)) {
            errorApodo.textContent = 'Ya existe un jugador con ese apodo';
            aplicarEstiloError(errorApodo);
            contenedorFormulario.scrollIntoView({ behavior: "smooth" });
            ApodoCorrecto = false;
        } else {
            errorApodo.textContent = '';
            limpiarEstiloError(errorApodo);
            ApodoCorrecto = true;
        }
    }

    function validarEstadisticas() {
        if (puntosRestantes.textContent > 0 && puntosRestantes.textContent != 433) {
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
        if (puntosRestantesPePt.textContent > 0 && puntosRestantesPePt.textContent != 248) {
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

}

let boton = document.getElementById('boton');

boton.addEventListener('click', function (event) {
    validarDatos(jugadores);

    
    if (NombreCorrecto && ApodoCorrecto && EstadisticasCorrectas && todosLosDatosCorrectos === true) {
        document.getElementById("formDatos").submit(); // Envía el formulario
    }
    

});


// Iniciar  el script
iniciar();