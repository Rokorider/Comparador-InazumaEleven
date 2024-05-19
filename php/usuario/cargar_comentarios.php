<?php
$servername = "localhost";
$username = "comparador";
$password = "1234";
$dbname = "comentarios_db";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT nombre, comentario, fecha FROM comentarios ORDER BY fecha DESC";
$result = $conn->query($sql);

$comentarios = array();
while($row = $result->fetch_assoc()) {
    $comentarios[] = $row;
}

$conn->close();
echo json_encode($comentarios);

