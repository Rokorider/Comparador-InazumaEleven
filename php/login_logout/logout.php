<?php

session_start();

// Si el usuario está logueado y tiene jugadores comparados y creados en la sesión 
if(isset($_SESSION['usuario']) && isset($_SESSION['jugadoresComparados']) && isset($_SESSION['jugadoresCreados'])){

    $fecha = date("l jS \of F Y h:i:s A"); // Fecha y hora actual
    $nombre_usuario = $_SESSION['usuario']; // Nombre de usuario

    // Cerrar sesión
    session_destroy();

    header("Location: ../../index.html"); // Redirigir al index.html

}