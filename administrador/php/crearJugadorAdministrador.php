<?php
require "../../php/creacionJugador/cargarFoto.php";
require "../../php/creacionJugador/cargarFotoEquipo.php";
require "conexionBdJugadores.php";
require "../../php/creacionJugador/Jugador.php";

session_start();

if (isset($_SESSION['usuario'])) {

    //Obtener datos del juego
    $juego = $_POST['juego'];

    // Obtener los datos del equipo
    $equipo = $_POST['equipo'];
    if ($equipo == "Nuevo") {
        $equipo = $_POST['nombreEquipo'];
    }
    

    // Obtener los datos del jugador
    $nombre = $_POST['nombre'];
    $apodo = $_POST['apodo'];
    $descripcion = $_POST['descripcion'];
    $elemento = $_POST['elemento'];
    $genero = $_POST['genero'];
    $posicion = $_POST['posicion'];
    $foto = $_FILES['foto'];

    // Obtener las estadísticas del jugador
    $pe = $_POST['pe'];
    $pt = $_POST['pt'];
    $tiro = $_POST['tiro'];
    $fisico = $_POST['fisico'];
    $control = $_POST['control'];
    $defensa = $_POST['defensa'];
    $rapidez = $_POST['rapidez'];
    $aguante = $_POST['aguante'];
    $valor = $_POST['valor'];

    // Carpeta para almacenar las fotos
    $carpeta = "../../imgPersonales/";

    // Llamar a la función cargarFoto para subir la imagen
    $imagen = cargarFoto($foto, $carpeta);


    // Crear un objeto de la clase Jugador
    $jugador = new Jugador($apodo, $nombre, $foto, $descripcion, $posicion, $elemento, $genero, $pe, $pt, $tiro, $fisico, $control, $defensa, $rapidez, $aguante, $valor, $juego);

    // Crear un objeto de la clase JugadoresBD
    $jugadoresBD = new JugadoresBD();

    // Llamar al método crearJugadorAdministrador con el objeto jugador

    if ($jugadoresBD->crearJugadorAdministrador($jugador, $equipo)) {
        header("Location: ../crearJugador.html");
        exit(); // Salir del script después de redireccionar
    } else {
        echo "Error al insertar datos del jugador.";
    }

} else {
    echo "No se ha iniciado sesión.";
}
