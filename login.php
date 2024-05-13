<?php
session_start();

require 'php/conexionBdLogin.php';

// Verificar si se han enviado usuario y contraseña en el post
if (!isset($_POST['usuario']) || !isset($_POST['contrasena'])) {
    die("Por favor, ingrese un usuario y contraseña");
}

// Obtener usuario y contraseña del post
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

// Crear objeto de la clase loginBD
try {
    $login = new loginBD();
} catch (Exception $e) {
    // Redirigir a la página de mantenimiento si falla la conexión
    header("Location: mantenimiento.html");
    exit(); // Salir del script después de redirigir
}

// Llamar al método login con los datos del post

// Llamar al método login con los datos del post
if ($login->login($usuario, $contrasena)) {
    header("Location: comparador.php");
} else {
    header("Location: index.html");
}
