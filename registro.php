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

// Verificar si se han enviado usuario, correo y contraseña en el post
if (!isset($_POST['usuario']) || !isset($_POST['correo']) || !isset($_POST['contrasena'])) {
    die("Por favor, ingrese un usuario, correo y contraseña");
}

// Obtener usuario y contraseña del post
$usuario = $_POST['usuario'];
$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];

// Consulta a la base de datos
$query = mysqli_query( $connection,  "SELECT * FROM usuarios WHERE nombre = '$usuario' AND correo = '$correo' AND contrasena = '$contrasena'");

// Comprobación
// Si hay al menos un resultado
if ($query) {
    header("Location: index.html");
} else {
    header("Location: registro.html");
}

