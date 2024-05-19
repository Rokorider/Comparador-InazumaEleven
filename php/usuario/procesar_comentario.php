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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $conn->real_escape_string($_POST["nombre"]);
    $comentario = $conn->real_escape_string($_POST["comentario"]);

    $sql = "INSERT INTO comentarios (nombre, comentario) VALUES ('$nombre', '$comentario')";

    if ($conn->query($sql) === TRUE) {
        echo "Comentario añadido correctamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
header("Location: ../../usuario/comentarios.php");
exit();
