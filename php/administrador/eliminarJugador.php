<!DOCTYPE html>
<html lang="en">
    <head>
    <link rel="icon" type="image/x-icon" href="../img/Favicons/plus_sign.png" />
    </head>


<?php

require "../conexiones/conexionBDJugadores.php";
require "../comunes/Jugador.php";

session_start();

if (isset($_SESSION['usuario'])) {
    $idJugador = $_POST['idJugador'];

    // Crear un objeto de la clase JugadoresBD
    $jugadoresBD = new JugadoresBD();

    // Llamar al método eliminarJugador con el id del jugador
    if ($jugadoresBD->eliminarJugador($idJugador)) {
        header("Location: ../../administrador/eliminarJugador.php");
    } else {
        echo "Error al eliminar el jugador.";
    }
} else {
    echo "No tiene permiso para realizar esta acción.";
}
