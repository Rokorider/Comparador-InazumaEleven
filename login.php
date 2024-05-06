<?php

// Credenciales de la base de datos
$dbhost = "localhost"; // Servidor de la base de datos
$dbuser = "comparador"; // Usuario de la base de datos
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
$query = mysqli_query( $connection,  "SELECT * FROM usuarios WHERE nombre = '$usuario' AND contrasena = '$contrasena'");

// Comprobación
// Si hay al menos un resultado
session_start();

if (mysqli_num_rows($query) > 0) { 
    // Iniciar sesión
    $_SESSION['usuario'] = $usuario; // Guardar el usuario en la sesión
    $_SESSION['jugadoresComparados'] = array();
    $_SESSION['jugadoresCreados'] = array();
    header("Location: comparador.php");
} else {
    header("Location: index.html");
}
