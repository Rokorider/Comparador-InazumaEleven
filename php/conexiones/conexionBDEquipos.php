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

session_start();
$usuario = $_SESSION['usuario'];

$sql2 = "SELECT id FROM usuarios WHERE nombre = '{$usuario}'";
$resultado = $connection->query($sql2);

// Verifica si la consulta fue exitosa
if ($resultado) {
    // Verifica si se encontraron filas
    if ($resultado->num_rows > 0) {
        // Obtiene la primera fila (asumiendo que solo debería haber una fila)
        $fila = $resultado->fetch_assoc();
        // Extrae el valor de la columna 'id'
        $idUsuario = $fila['id'];
    } else {
        // No se encontraron filas con el nombre de usuario dado
        // Manejar el caso en que el usuario no existe
    }
} else {
    // Maneja el error de consulta
    echo "Error en la consulta: " . $conn->error;
}

// Consulta SQL para obtener los datos de la tabla usuarios
$sql = "SELECT * FROM equipos WHERE usuario_id = '{$idUsuario}'";
$result = $connection->query($sql);

// Verificar si hay resultados y convertirlos a un array asociativo
if ($result->num_rows > 0) {
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Convertir el array a formato JSON
    $json_data = json_encode($data);

    // Devolver el JSON
    header('Content-Type: application/json');
    echo $json_data;
} else {
    // Si no hay resultados, devolver un JSON vacío o un mensaje de error
    echo json_encode(array("message" => "No se encontraron usuarios"));
}
