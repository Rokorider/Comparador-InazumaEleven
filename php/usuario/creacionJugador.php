<!DOCTYPE html>
<html lang="es">
<head>
<link rel="icon" href="../../img/Favicons/plus_sign.png" type="image/x-icon">
</head>

<?php

require "../comunes/Jugador.php";
require "../conexiones/conexionBDJugadores.php";
require "../fotos/cargarFotoJugadorAdmin.php";
require "../fotos/cargarFotoEquipoAdmin.php";

session_start();

if (isset($_SESSION['usuario'])) {

    // Obtener los datos del equipo

    // Nombre del equipo del select
    $equipoModificado = $_POST['equipoModificado'];

    $equipo = $_POST['equipo'];

    if ($equipo == "Nuevo") {
        $equipo = $_POST['nombreEquipo'];
        // Nombre del equipo del input de texto
        $nombreEquipoModificado = $_POST['nombreEquipoModificado'];
        $imagenEquipo = $_FILES['imagenEquipo'];

        $carpeta = "../../img/imgJugadores/JugadoresPersonales/Escudos/";
        cargarFotoEquipo($carpeta, $imagenEquipo, $nombreEquipoModificado);
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

    $carpeta = "../../img/imgJugadores/JugadoresPersonales/Jugadores/";
    cargarFotoJugador($foto, $carpeta, $apodo, $equipoModificado);

    // Crear un objeto Jugador
    $jugador = new Jugador($apodo, $nombre, $foto, $descripcion, $posicion, $elemento, $genero, $pe, $pt, $tiro, $fisico, $control, $defensa, $rapidez, $aguante, $valor);

    $usuario = $_SESSION['usuario'];

    // Crear objeto de la clase ConexionBDJugadores
    $jugadoresBD = new JugadoresBD();

    $imagenEquipo = "hola";

    if ($jugadoresBD->crearJugadorUsuario($usuario, $equipo, $jugador, $imagenEquipo,)) {
        header("Location: ../../usuario/crearJugador.php");
        exit(); // Salir del script después de redireccionar
    } else {
        echo "Error al insertar datos del jugador.";
    }

} else {
    echo "No se ha iniciado sesión.";
}
