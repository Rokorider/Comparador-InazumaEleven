<?php
require "../comunes/Jugador.php";
require "../comunes//cargarFoto.php";
require "../comunes/cargarFotoEquipo.php";
require "../conexiones/conexionBDJugadores.php";

session_start();

if (isset($_SESSION['usuario'])) {

    // Obtener los datos del equipo
    $equipo = $_POST['equipo'];
    if ($equipo == "Nuevo") {
        $equipo = $_POST['nombreEquipo'];
    }
    $fotoEquipo = $_FILES['fotoEquipo'];

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
    $imagenEquipo = cargarFotoEquipo($fotoEquipo, $carpeta, $equipo);

    // Crear un objeto Jugador
    $jugador = new Jugador($apodo, $nombre, $imagen, $descripcion, $posicion, $elemento, $genero, $pe, $pt, $tiro, $fisico, $control, $defensa, $rapidez, $aguante, $valor);

    $usuario = $_SESSION['usuario'];

    // Crear objeto de la clase ConexionBDJugadores
    $jugadoresBD = new JugadoresBD();

    if ($jugadoresBD->crearJugadorUsuario($usuario, $equipo, $jugador, $imagenEquipo)) {
        header("Location: crearJugador.html");
        exit(); // Salir del script después de redireccionar
    } else {
        echo "Error al insertar datos del jugador.";
    }

} else {
    echo "No se ha iniciado sesión.";
}
