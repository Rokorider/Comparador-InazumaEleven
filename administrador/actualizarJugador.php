<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="../img/Favicons/Willy.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Boogaloo&family=Jersey+10&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap&family=Pixelify+Sans:wght@400..700&display=swap" />
    <!-- Estilos -->
    <link rel="stylesheet" type="text/css" href="../styles/header_footer/header.css">
    <link rel="stylesheet" type="text/css" href="../styles/header_footer/footer.css">
    <link rel="stylesheet" type="text/css" href="../styles/administrador/actualizarJugador.css">
    <link rel="stylesheet" href="../styles/comunes/slider.css">
    <!-- Scripts -->
    <script src="../scripts/comunes/estadisticasJugador.js" defer></script>
    <script src="../scripts/administrador/actualizarJugadorAdmin.js" defer></script>
    <script src="../scripts/administrador/headerDesplegable.js" defer></script>
    <script src="../scripts/comunes/slider.js" defer></script>
    <script src="../scripts/comunes/footer.js" defer></script>
    <title>Actualizar Jugador</title>
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

    <section class="main">
        <div class="cajaTitulo">
            <h1>Actualizar Jugador</h1>
        </div>

        <div class="contenedorSelects">
            <div class="cajaPregunta" id="buscadorJuegos">
                <p class="tipo2">Juego</p>
                <select id="juego" name="juego" class="selector">
                    <option value="">Selecciona un juego</option>
                </select>
            </div>
            <div class="cajaPregunta" id="buscadorEquipos">
                <p class="tipo2">Equipo</p>
                <select id="equipo" name="equipo" class="selector">
                    <option value="">Selecciona un jugador</option>
                </select>
            </div>
            <div class="cajaPregunta" id="buscadorJugador">
                <p class="tipo2">Jugador</p>
                <select id="jugador" name="jugador" class="selector">
                    <option value="">Selecciona un jugador</option>
                </select>
            </div>
        </div>

        <div class="contenedorJugador" id="contenedorJugador">


        </div>

        <div class="contenedorFormulario" id="contenedorFormulario">

            <form class="formulario" id="formDatos" action="../php/administrador/actualizarJugador.php" method="post" enctype="multipart/form-data">

                <div class="contenedorTitulo">
                    <div class="titulo">
                        <h1>Datos del Jugador</h1>
                    </div>
                </div>

                <input type="hidden" id="idJugador" name="idJugador" value="">
                <input type="hidden" id="apodoOriginal" name="apodoOriginal" value="">
                <input type="hidden" id="equipoModificado" name="equipoModificado" value="">
                <input type="hidden" id="juegoModificado" name="juegoModificado" value="">

                <div class="cajaNomApoGenPos">
                    <div class="datos">
                        <div class="cajaPregunta">
                            <p class="tipo2">Nombre</p>
                            <input type="text" id="nombre" name="nombre" class="selector" placeholder="Nombre">
                            <p class="tipoError" id="errorNombre"></p>
                        </div>
                        <div class="cajaPregunta">
                            <p class="tipo2">Apodo</p>
                            <input type="text" id="apodo" name="apodo" class="selector" placeholder="Apodo">
                            <p class="tipoError" id="errorApodo"></p>
                        </div>
                        <div class="cajaPregunta">
                            <p class="tipo2">Descripción</p>
                            <input type="text" id="descripcion" name="descripcion" class="selector" placeholder="Descripción">
                            <p class="tipoError" id="errorDescripcion"></p>
                        </div>
                        <div class="cajaPregunta">
                            <p class="tipo2">Elemento</p>
                            <select id="elemento" name="elemento" class="selector">
                                <option value="">No Especificado</option>
                                <option value="Fuego">Fuego</option>
                                <option value="Bosque">Bosque</option>
                                <option value="Aire">Aire</option>
                                <option value="Montaña">Montaña</option>
                            </select>
                        </div>
                        <div class="cajaPregunta">
                            <p class="tipo2">Género</p>
                            <select id="genero" name="genero" class="selector">
                                <option value="">No Especificado</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div class="cajaPregunta">
                            <p class="tipo2">Posición</p>
                            <select id="posicion" name="posicion" class="selector">
                                <option value="">No Especificado</option>
                                <option value="PR">Portero</option>
                                <option value="DF">Defensa</option>
                                <option value="MD">Mediocampista</option>
                                <option value="DL">Delantero</option>
                            </select>
                        </div>

                        <div class="cajaImagen">
                            <p class="tipoImagen">Imagen del Jugador</p>
                            <div class="subirImagen">
                                <div class="cajaInput">
                                    <input type="file" id="imagen" name="foto" class="imagen">
                                </div>
                                <div class="campoErrorEstadisticasTodas" id="campoErrorEstadisticasTodas">
                                    <p id="errorImagen"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cajaEstadisticas">
                    <div class="titulo">
                        <h1>Estadísticas del jugador</h1>
                    </div>
                    <div id="statsForm" class="estadisticas">
                        <div class="estadistica2">
                            <div class="campoEstadisticas">
                                <p class="tipoEstadistica">Tiro:</p>
                                <input class="inputRango" type="range" id="tiro" name="tiro" min="0" max="100" value="0">
                                <p class="valor2" id="tiroValue">0</p>
                            </div>
                        </div>
                        <div class="estadistica2">
                            <div class="campoEstadisticas">
                                <p class="tipoEstadistica">Físico:</p>
                                <input class="inputRango" type="range" id="fisico" name="fisico" min="0" max="100" value="0">
                                <p class="valor2" id="fisicoValue">0</p>
                            </div>
                        </div>
                        <div class="estadistica2">
                            <div class="campoEstadisticas">
                                <p class="tipoEstadistica">Control:</p>
                                <input class="inputRango" type="range" id="control" name="control" min="0" max="100" value="0">
                                <p class="valor2" id="controlValue">0</p>
                            </div>
                        </div>
                        <div class="estadistica2">
                            <div class="campoEstadisticas">
                                <p class="tipoEstadistica">Defensa:</p>
                                <input class="inputRango" type="range" id="defensa" name="defensa" min="0" max="100" value="0">
                                <p class="valor2" id="defensaValue">0</p>
                            </div>
                        </div>
                        <div class="estadistica2">
                            <div class="campoEstadisticas">
                                <p class="tipoEstadistica">Rapidez:</p>
                                <input class="inputRango" type="range" id="rapidez" name="rapidez" min="0" max="100" value="0">
                                <p class="valor2" id="rapidezValue">0</p>
                            </div>
                        </div>
                        <div class="estadistica2">
                            <div class="campoEstadisticas">
                                <p class="tipoEstadistica">Aguante:</p>
                                <input class="inputRango" type="range" id="aguante" name="aguante" min="0" max="100" value="0">
                                <p class="valor2" id="aguanteValue">0</p>
                            </div>
                        </div>
                        <div class="estadistica2">
                            <div class="campoEstadisticas">
                                <p class="tipoEstadistica">Valor:</p>
                                <input class="inputRango" type="range" id="valor" name="valor" min="0" max="100" value="1">
                                <p class="valor2" id="valorValue">0</p>
                            </div>
                        </div>
                        <div class="estadistica2">
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
                        <div class="estadistica2">
                            <div class="campoEstadisticas">
                                <p class="tipoEstadistica">Pe:</p>
                                <input class="inputRango" type="range" id="pe" name="pe" min="0" max="100" value="0">
                                <p class="valor2" id="peValue">0</p>
                            </div>
                        </div>
                        <div class="estadistica2">
                            <div class="campoEstadisticas">
                                <p class="tipoEstadistica">PT:</p>
                                <input class="inputRango" type="range" id="pt" name="pt" min="0" max="100" value="1">
                                <p class="valor2" id="ptValue">0</p>
                            </div>
                        </div>
                        <div class="estadistica2">
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

            <div class="contenedorErrorTodasEstadisticas">
                <div class="campoErrorEstadisticasTodas">
                    <p id="errorEstadisticasTodas"></p>
                </div>
            </div>

            <div class="cajaBoton">
                <div class="boton" id="boton">
                    <p class="envio">Actualizar Jugador</p>
                </div>
            </div>

        </div>

    </section>

    <?php include '../php/imports/footer.php'; ?>

</body>

</html>