<?php
// Credenciales de la base de datos
$dbhost = "localhost"; // Servidor de la base de datos
$dbuser = "yilin"; // Usuario de la base de datos
$dbpassword = "123"; // Contraseña de la base de datos
$dbname = "apiinazuma"; // Nombre de la base de datos

// Conexión a la base de datos
$connection = mysqli_connect($dbhost, $dbuser, $dbpassword, $dbname);

// Verificar la conexión
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}