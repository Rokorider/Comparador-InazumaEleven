<?php

// Credenciales de la base de datos
$dbhost = "localhost"; // Servidor de la base de datos
$dbuser = "ruben"; // Usuario de la base de datos
$dbpassword = "1234"; // Contraseña de la base de datos
$dbname = "apiinazuma"; // Nombre de la base de datos


// Conexión a la base de datos
$connection = mysqli_connect($dbhost, $dbuser, $dbpassword, $dbname);

// Verificar la conexión
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Verificar si se han enviado usuario y contraseña en el post
if (!isset($_POST['usuario']) || !isset($_POST['contrasena'])) {
    die("Por favor, ingrese un usuario y contraseña");
}

// Obtener usuario y contraseña del post
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

// Consulta a la base de datos
$query = mysqli_query( $connection,  "SELECT * FROM usuarios WHERE nombreUsuario = '$usuario' AND contrasena = '$contrasena'");

// Comprobación
// Si hay al menos un resultado
if (mysqli_num_rows($query) > 0) { 
    // Establecer una variable de sesión para indicar que el usuario ha iniciado sesión
    session_start();
    $_SESSION['usuario'] = $usuario;
    header("Location: index.php");
} else {
    header("Location: iniciosSesion.php");
}