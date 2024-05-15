<?php
session_start();

require '../conexiones/conexionBdLogin.php';

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
    header("Location: ../../paginasComunes/paginasErrores/mantenimiento.html");
    exit(); // Salir del script después de redirigir
}

// Llamar al método login con los datos del post
$login->login($usuario, $contrasena);
