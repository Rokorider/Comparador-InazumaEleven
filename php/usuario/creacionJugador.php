<?php
require "../comunes/Jugador.php";
require "../conexiones/conexionBDJugadores.php";

session_start();

if (isset($_SESSION['usuario'])) {

    // Obtener los datos del equipo
    $equipo = $_POST['equipo'];
    if ($equipo == "Nuevo") {
        $equipo = $_POST['nombreEquipo'];
    }
    $fotoEquipo = $_FILES['imagenEquipo'];

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

    echo "El nombre del equipo es: $equipo<br>";
    echo "El nombre del jugador es: $nombre<br>";
    echo "El apodo del jugador es: $apodo<br>";
    echo "La descripción del jugador es: $descripcion<br>";
    echo "El elemento del jugador es: $elemento<br>";
    echo "El género del jugador es: $genero<br>";
    echo "La posición del jugador es: $posicion<br>";
    echo "El pe del jugador es: $pe<br>";
    echo "El pt del jugador es: $pt<br>";
    echo "La puntuación de tiro del jugador es: $tiro<br>";
    echo "La puntuación física del jugador es: $fisico<br>";
    echo "La puntuación de control del jugador es: $control<br>";
    echo "La puntuación de defensa del jugador es: $defensa<br>";
    echo "La puntuación de rapidez del jugador es: $rapidez<br>";
    echo "La puntuación de aguante del jugador es: $aguante<br>";
    echo "El valor del jugador es: $valor<br>";



    // Carpeta para almacenar las fotos
    $carpeta = "../../imgPersonales/";

    // Crear un objeto Jugador
    $jugador = new Jugador($apodo, $nombre, $foto, $descripcion, $posicion, $elemento, $genero, $pe, $pt, $tiro, $fisico, $control, $defensa, $rapidez, $aguante, $valor);

    $usuario = $_SESSION['usuario'];

    // Crear objeto de la clase ConexionBDJugadores
    $jugadoresBD = new JugadoresBD();

    $imagenEquipo = "hola";

    if ($jugadoresBD->crearJugadorUsuario($usuario, $equipo, $jugador, $imagenEquipo)) {
        header("Location: ../../usuario/crearJugador.php");
        exit(); // Salir del script después de redireccionar
    } else {
        echo "Error al insertar datos del jugador.";
    }

} else {
    echo "No se ha iniciado sesión.";
}
