<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="icon" type="image/png" href="../img/Favicons/plus_sign.png">
    <link rel="stylesheet" href="../styles/comunes/scrollbarGeneral.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap&family=Pixelify+Sans:wght@400..700&display=swap" />
    <link rel="stylesheet" type="text/css" href="../styles/comunes/ventanaEmergente.css">
    <script src="../scripts/administrador/validarDatos.js" defer></script>
    <script src="../scripts/administrador/completarEquiposAdmin.js" defer></script>
    <script src="../scripts/comunes/estadisticasJugador.js" defer></script>
    <script src="../scripts/administrador/headerDesplegable.js" defer></script>
    <script src="../scripts/comunes/slider.js" defer></script>
    <script src="../scripts/comunes/footer.js" defer></script>
    <link rel="stylesheet" type="text/css" href="../styles/usuario/crearJugador.css">
    <link rel="stylesheet" type="text/css" href="../styles/administrador/crearJugadorAdmin.css">
    <link rel="stylesheet" type="text/css" href="../styles/header_footer/header.css">
    <link rel="stylesheet" type="text/css" href="../styles/header_footer/footer.css">
    <link rel="stylesheet" type="text/css" href="../styles/comunes/slider.css">
    <title>Crear Jugador</title>
</head>

<?php
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['usuario'])) {
    header('Location: ../index.html');
    exit(); // Es importante salir después de redirigir para evitar que el resto del código se ejecute
}

?>

<body>

    <?php include '../php/imports/headerAdmin.php'; ?>

    <section class="main" id="main">
        <div class="tituloPrincipal">
            <h1>Crear / Añadir Nuevo Jugador</h1>
        </div>

        <form class="formulario" id="formDatos" action="../php/administrador/crearJugadorAdministrador.php" method="post"
            enctype="multipart/form-data">

            <input type="hidden" id="equipoModificado" name="equipoModificado" value="">
            <input type="hidden" id="juegoModificado" name="juegoModificado" value="">
            <input type="hidden" id="nombreEquipoModificado" name="nombreEquipoModificado" value="">

            <div class="cajaNomApoGenPos">
                <div class="datos">
                    <div class="cajaPregunta">
                        <p class="tipo">Juego</p>
                        <select id="buscadorJuegos" name="juego" class="selector">
                            <option value="">No Especificado</option>
                            <option value="Nuevo">Nuevo</option>
                        </select>
                        <p class="tipoError" id="errorJuego"></p>
                    </div>
                    <div class="cajaPregunta" id="cajaPreguntaEquipo">
                        <p class="tipo">Equipo</p>
                        <select id="equipo" name="equipo" class="selector">
                            <option value="">No Especificado</option>
                            <option value="Nuevo">Nuevo</option>
                        </select>
                        <p class="tipoError" id="errorEquipo"></p>
                    </div>
                </div>
            </div>

            <div class="contenedorTitulo">
                <div class="titulo">
                    <h1>Datos del Jugador</h1>
                </div>
            </div>

            <div class="cajaNomApoGenPos">
                <div class="datos">
                    <div class="cajaPregunta">
                        <p class="tipo">Nombre</p>
                        <input type="text" id="nombre" name="nombre" class="selector" placeholder="Nombre">
                        <p class="tipoError" id="errorNombre"></p>
                    </div>
                    <div class="cajaPregunta">
                        <p class="tipo">Apodo</p>
                        <input type="text" id="apodo" name="apodo" class="selector" placeholder="Apodo">
                        <p class="tipoError" id="errorApodo"></p>
                    </div>
                    <div class="cajaPregunta">
                        <p class="tipo">Descripción</p>
                        <input type="text" id="descripcion" name="descripcion" class="selector"
                            placeholder="Descripción">
                        <p class="tipoError" id="errorDescripcion"></p>
                    </div>
                    <div class="cajaPregunta">
                        <p class="tipo">Elemento</p>
                        <select id="elemento" name="elemento" class="selector">
                            <option value="">No Especificado</option>
                            <option value="Fuego">Fuego</option>
                            <option value="Bosque">Bosque</option>
                            <option value="Aire">Aire</option>
                            <option value="Montaña">Montaña</option>
                        </select>
                        <p class="tipoError" id="errorElemento"></p>
                    </div>
                    <div class="cajaPregunta">
                        <p class="tipo">Género</p>
                        <select id="genero" name="genero" class="selector">
                            <option value="">No Especificado</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="otro">Otro</option>
                        </select>
                        <p class="tipoError" id="errorGenero"></p>
                    </div>
                    <div class="cajaPregunta">
                        <p class="tipo">Posición</p>
                        <select id="posicion" name="posicion" class="selector">
                            <option value="">No Especificado</option>
                            <option value="PR">Portero</option>
                            <option value="DF">Defensa</option>
                            <option value="MD">Mediocampista</option>
                            <option value="DL">Delantero</option>
                        </select>
                        <p class="tipoError" id="errorPosicion"></p>
                    </div>

                    <div class="cajaImagen">
                        <p class="tipoImagen">Imagen del Jugador</p>
                        <div class="subirImagen">
                            <div class="cajaInput">
                                <input type="file" id="imagen" name="foto" class="imagen">
                            </div>
                            <div class="consejo">
                                <p>*Se recomienda no subir imágenes personales*</p>
                            </div>
                            <p class="tipoErrorImagen" id="errorImagen"></p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="cajaEstadisticas">
                <div class="titulo">
                    <h1>Estadísticas del jugador</h1>
                </div>
                <div id="statsForm" class="estadisticas">
                    <div class="estadistica">
                        <div class="campoEstadisticas">
                            <p class="tipoEstadistica">Tiro:</p>
                            <input class="inputRango" type="range" id="tiro" name="tiro" min="1" max="100" value="0">
                            <p class="valor" id="tiroValue">0</p>
                        </div>
                    </div>
                    <div class="estadistica">
                        <div class="campoEstadisticas">
                            <p class="tipoEstadistica">Físico:</p>
                            <input class="inputRango" type="range" id="fisico" name="fisico" min="1" max="100"
                                value="0">
                            <p class="valor" id="fisicoValue">0</p>
                        </div>
                    </div>
                    <div class="estadistica">
                        <div class="campoEstadisticas">
                            <p class="tipoEstadistica">Control:</p>
                            <input class="inputRango" type="range" id="control" name="control" min="1" max="100"
                                value="0">
                            <p class="valor" id="controlValue">0</p>
                        </div>
                    </div>
                    <div class="estadistica">
                        <div class="campoEstadisticas">
                            <p class="tipoEstadistica">Defensa:</p>
                            <input class="inputRango" type="range" id="defensa" name="defensa" min="1" max="100"
                                value="0">
                            <p class="valor" id="defensaValue">0</p>
                        </div>
                    </div>
                    <div class="estadistica">
                        <div class="campoEstadisticas">
                            <p class="tipoEstadistica">Rapidez:</p>
                            <input class="inputRango" type="range" id="rapidez" name="rapidez" min="1" max="100"
                                value="0">
                            <p class="valor" id="rapidezValue">0</p>
                        </div>
                    </div>
                    <div class="estadistica">
                        <div class="campoEstadisticas">
                            <p class="tipoEstadistica">Aguante:</p>
                            <input class="inputRango" type="range" id="aguante" name="aguante" min="1" max="100"
                                value="0">
                            <p class="valor" id="aguanteValue">0</p>
                        </div>
                    </div>
                    <div class="estadistica">
                        <div class="campoEstadisticas">
                            <p class="tipoEstadistica">Valor:</p>
                            <input class="inputRango" type="range" id="valor" name="valor" min="1" max="100" value="0">
                            <p class="valor" id="valorValue">0</p>
                        </div>
                    </div>
                    <div class="estadistica puntoRestante">
                        <div class="campoEstadisticas">
                            <p class="textoPuntos">Puntos restantes:</p>
                            <p class="valorPuntos" id="puntosRestantes">440</p>
                        </div>
                    </div>
                </div>
                <div class="errorEstadisticas">
                    <div class="campoErrorEstadisticas" id="campoErrorEstadisticas">
                        <p id="errorEstadisticas"></p>
                    </div>
                </div>
                

                <div class="cajaPePt" id="cajaPePt">
                    <div class="estadistica">
                        <div class="campoEstadisticas">
                            <p class="tipoEstadistica">Pe:</p>
                            <input class="inputRango" type="range" id="valor" name="pe" min="1" max="100" value="1">
                            <p class="valor" id="peValue">0</p>
                        </div>
                    </div>
                    <div class="estadistica">
                        <div class="campoEstadisticas">
                            <p class="tipoEstadistica">PT:</p>
                            <input class="inputRango" type="range" id="valor" name="pt" min="1" max="100" value="1">
                            <p class="valor" id="ptValue">0</p>
                        </div>
                    </div>
                    <div class="estadistica puntoRestante">
                        <div class="campoEstadisticas">
                            <p class="textoPuntos">Puntos restantes:</p>
                            <p class="valorPuntos" id="puntosRestantesPePt">250</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>

        <div class="errorEstadisticas">
            <div class="campoErrorEstadisticas" id="campoErrorEstadisticasPePt">
                <p id="errorEstadisticasPePt"></p>
            </div>
        </div>

        <div class="cajaBoton">
            <div class="boton" id="boton">
                <p class="envio">Crear Jugador</p>
            </div>
        </div>

    </section>

    <?php include '../php/imports/footer.php'; ?>

</body>

</html>