<?php

// Credenciales de la base de datos
$dbhost = "localhost"; // Servidor de la base de datos
$dbuser = "javi"; // Usuario de la base de datos
$dbpassword = "1234"; // Contraseña de la base de datos
$dbname = "apiinazuma"; // Nombre de la base de datos


// Conexión a la base de datos
$connection = mysqli_connect($dbhost, $dbuser, $dbpassword, $dbname);

// Verificar la conexión
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Consulta SQL para obtener los datos de la tabla usuarios
$sql = "SELECT * FROM api_inazuma_eleven___hoja_1";
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

// Cerrar la conexión a la base de datos
$connection->close();
