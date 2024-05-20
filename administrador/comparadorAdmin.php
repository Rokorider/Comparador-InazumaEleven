<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="../img/Favicons/BalonGriego.png" />
    <link rel="stylesheet" href="../styles/comunes/normalize.css" />
    <link rel="stylesheet" href="../styles/header_footer/header.css" />
    <link rel="stylesheet" href="../styles/header_footer/footer.css" />
    <link rel="stylesheet" href="../styles/comunes/scrollbar.css">
    <link rel="stylesheet" href="../styles/comunes/comparador.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap&family=Pixelify+Sans:wght@400..700&display=swap" />
    <link rel="stylesheet" type="text/css" href="../styles/comunes/ventanaEmergente.css">
    <script src="../scripts/comunes/comparados.js" defer></script>
    <script type="module" src="../scripts/comunes/comparador/menuSeleccion.js" defer></script>
    <script src="../scripts/comunes/comparador/portadaParallax.js" defer></script>
    <script src="../scripts/comunes/ventanaEmergente.js" defer></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.min.js"></script>
    <script type="module" src="../scripts/comunes/comparador/grafica.js" defer></script>
    <script src="../scripts/administrador/headerDesplegable.js" defer></script>
    <script src="../scripts/comunes/comparador/flechasComparacion.js" defer></script>
    <script src="../scripts/comunes/footer.js" defer></script>
    <title>Comparador Inazuma ELeven</title>
</head>

<?php
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['usuario'])) {
    header('Location: ../index.html');
    exit(); // Es importante salir después de redirigir para evitar que el resto del código se ejecute
}
/*
// Imprimir el nombre de usuario en el registro de errores
echo("El usuario " . $_SESSION['usuario'] . " ha iniciado sesión en comparador.php");
*/
?>


<body>

    <?php include '../php/imports/headerAdmin.php'; ?>

    <section class="portada">
        <div class="parallax" id="parallax">
            <div class="imgPortada portadaImg1" data-depth="0.002"></div>
            <div class="imgPortada portadaImg2" data-depth="0.006"></div>
            <div class="imgPortada portadaImg3" data-depth="0.015"></div>
        </div>

        <div class="btnMusica" id="btnMusica">
            <img src="../img/cd-furbol.png" alt="Logo Inazuma Eleven" id="imagenMusica"/>
            <audio id="cancion" src="../img/audio/cancion2.mp3" loop="true"></audio>
        </div>
        
    </section>
    <section class="main">
        <div class="campoComparacion">
            <div class="comparacionContenedor">
                <div class="personaje1">
                    <div class="personajeIcono1">
                        <img src="../img/icono/PlayerDeafultMarkPlus.png" alt="" class="personajeIcono1Img"
                            id="personaje1" />
                    </div>
                    <div class="nombrePersonajeContenedor1">
                        <img src="../img/boton.png" alt="">
                        <p id="apodoPersonaje1">???????</p>
                    </div>
                </div>
                <div class="vsContenedor">
                    <img src="../img/VS.png" alt="" class="vsImg" />
                </div>
                <div class="personaje2">
                    <div class="personajeIcono2">
                        <img src="../img/icono/PlayerDeafultMarkPlus.png" alt="" class="personajeIcono2Img"
                            id="personaje2" />
                    </div>
                    <div class="nombrePersonajeContenedor2">
                        <img src="../img/boton.png" alt="">
                        <p id="apodoPersonaje2">???????</p>
                    </div>
                </div>
                <!--Menu para seleccionar personaje-->
                <div class="menuPopUp" id="menuPopUp">
                    <!--
                        <div class="juegoContenedor" id="juego1">
                            <div class="tituloJuego">Juego 1</div>
                            <div class="equiposContenedor">
                                <div class="contenidoEquipos">
                                    <div class="equipo">
                                        <div class="equipoImg"></div>
                                        <div class="equipoNombre"></div>
                                    </div>
                                    <div class="equipo">Equipo B</div>
                                    <div class="equipo">Equipo C</div>
                                </div>
                            </div>
                        </div>
                        -->
                    <!--
                        <div class="contenidoJuegoContenedor">
                            <div class="contenidoJuegoContenedor2">
                                <div class="contenidoJuego_emblema"></div>
                                <div class="contenidoJuego_personajesCont">
                                    <div class="personajeCont">
                                        <div class="personajeImgCont">
                                            <img src="" alt="" />
                                        </div>
                                        <div class="personajeInfo">
                                            <div
                                                class="personajeInfo_elemento"
                                            ></div>
                                            <div class="personajeInfo_nombre">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    //personajes
                                </div>
                            </div>
                        </div>
                    -->
                    <div class="juegoContenedor">aaaaa</div>
                </div>
            </div>
        </div>


        <!--Zona de cesped-->
        <div class="contenidoContenedor">
            <div class="flechaTituloContenedor">
                <img src="../img/flechaAzulnotext.png" alt="" class="flechaTituloImg" />
                <img src="../img/Markrunning.gif" alt="" class="markCorriendo" />
            </div>
            <div class="seccionStats">
                <div class="seccionStats2">
                    <div class="personajeStat personajeStat_1">
                        <div class="infoPersonaje">
                            <div class="nombre-genero">
                                <div class="nombreEnStatCont">
                                    <p class="nombre_1">Nombre</p>
                                </div>
                                <div class="imgSexoCont">
                                    <img src="../img/generos/Otro.png" alt="" class="sexoPersonaje_1" />
                                </div>
                            </div>
                            <div class="descripcion-tipo">
                                <div class="botonDescripcion">
                                    <img src="../img/boton.png" alt="" />
                                    <p class="descripcionTxt">Descripción</p>
                                    <p class="flechaDescripcion">v</p>
                                    <div class="textoDesplegable">
                                        <p class="descripcion_1"></p>
                                    </div>
                                </div>
                                <div class="tipo">
                                    <div class="elementoCont ">
                                        <img src="" alt="" class="elemento elemento_1" />
                                    </div>
                                    <div class="posicionCont">
                                        <p class="posicion_1">--</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="statsPersonaje">
                            <div class="tiro stat">
                                <p>Tiro</p>
                                <p class="tiro_1" id="tiro_1">Nan</p>
                            </div>
                            <div class="fisico stat">
                                <p>Físico</p>
                                <p class="fisico_1">Nan</p>
                            </div>
                            <div class="control stat">
                                <p>Control</p>
                                <p class="control_1">Nan</p>
                            </div>
                            <div class="defensa stat">
                                <p>Defensa</p>
                                <p class="defensa_1">Nan</p>
                            </div>
                            <div class="rapidez stat">
                                <p>Rapidez</p>
                                <p class="rapidez_1">Nan</p>
                            </div>
                            <div class="aguante stat">
                                <p>Aguante</p>
                                <p class="aguante_1">Nan</p>
                            </div>
                            <div class="valor stat">
                                <p>Valor</p>
                                <p class="valor_1">Nan</p>
                            </div>
                        </div>
                    </div>
                    <div class="flechasComparacion">
                        <div class="flechasCont">
                            <div class="flechaComp">
                                <img src="../img/flechasComparador/Igual1.png" alt="" id="flechaTiro" />
                            </div>
                            <div class="flechaComp">
                                <img src="../img/flechasComparador/Igual2.png" alt="" id="flechaFisico" />
                            </div>
                            <div class="flechaComp">
                                <img src="../img/flechasComparador/Igual1.png" alt="" id="flechaControl" />
                            </div>
                            <div class="flechaComp">
                                <img src="../img/flechasComparador/Igual2.png" alt="" id="flechaDefensa" />
                            </div>
                            <div class="flechaComp">
                                <img src="../img/flechasComparador/Igual1.png" alt="" id="flechaRapidez" />
                            </div>
                            <div class="flechaComp">
                                <img src="../img/flechasComparador/Igual2.png" alt="" id="flechaAguante" />
                            </div>
                            <div class="flechaComp">
                                <img src="../img/flechasComparador/Igual1.png" alt="" id="flechaValor" />
                            </div>
                        </div>
                    </div>
                    <div class="personajeStat personajeStat_2">
                        <div class="infoPersonaje">
                            <div class="nombre-genero">
                                <div class="nombreEnStatCont">
                                    <p class="nombre_2">Nombre</p>
                                </div>
                                <div class="imgSexoCont">
                                    <img src="../img/generos/Otro.png" alt="" class="sexoPersonaje_2" />
                                </div>
                            </div>
                            <div class="descripcion-tipo">
                                <div class="botonDescripcion">
                                    <img src="../img/boton.png" alt="" />
                                    <p class="descripcionTxt">Descripción</p>
                                    <p class="flechaDescripcion">v</p>
                                    <div class="textoDesplegable">
                                        <p class="descripcion_2"></p>
                                    </div>
                                </div>
                                <div class="tipo">
                                    <div class="elementoCont ">
                                        <img src="" alt="" class="elemento elemento_2" />
                                    </div>
                                    <div class="posicionCont">
                                        <p class="posicion_2">--</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="statsPersonaje">
                            <div class="tiro stat">
                                <p>Tiro</p>
                                <p class="tiro_2">Nan</p>
                            </div>
                            <div class="fisico stat">
                                <p>Físico</p>
                                <p class="fisico_2">Nan</p>
                            </div>
                            <div class="control stat">
                                <p>Control</p>
                                <p class="control_2">Nan</p>
                            </div>
                            <div class="defensa stat">
                                <p>Defensa</p>
                                <p class="defensa_2">Nan</p>
                            </div>
                            <div class="rapidez stat">
                                <p>Rapidez</p>
                                <p class="rapidez_2">Nan</p>
                            </div>
                            <div class="aguante stat">
                                <p>Aguante</p>
                                <p class="aguante_2">Nan</p>
                            </div>
                            <div class="valor stat">
                                <p>Valor</p>
                                <p class="valor_2">Nan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="seccionGrafica">
                <div class="seccionGraficaRadar" id="seccionGraficaRadar">
                    <canvas id="grafica" class="canvas"></canvas>
                </div>
                <div class="seccionGraficaBarras">
                    <div class="personajesColores">
                        <div class="personajeColor1" id="personajeColor1">Nan</div>
                        <div class="personajeColor2" id="personajeColor2">Nan</div>
                    </div>
                    <div class="seccionPE">
                        <p>PE</p>
                        <div class="pe_pt_cont">
                            <div class="PE">
                                <p id="pe_1">Nan</p>
                                <div class="barra">
                                    <div class="pe_pt_barra barraIzq" id="pe_1_barra"></div>
                                    <div class="pe_pt_barra barraDer" id="pe_2_barra"></div>
                                </div>
                                <p id="pe_2">Nan</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="seccionPT">
                        <p>PT</p>
                        <div class="pe_pt_cont">
                            <div class="PT">
                                <p id="pt_1">Nan</p>
                                <div class="barra">
                                    <div class="pe_pt_barra barraIzq" id="pt_1_barra"></div>
                                    <div class="pe_pt_barra barraDer" id="pt_2_barra"></div>
                                </div>
                                <p id="pt_2">Nan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include '../php/imports/footer.php'; ?>
</body>

</html>