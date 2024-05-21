<?php

session_start();

// Verificar si se recibieron datos de jugadores comparados
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    // Conectar a la base de datos (asegúrate de ajustar estos valores según tu configuración)
    $servername = "localhost";
    $username = "comparador";
    $password = "1234";
    $dbname = "apiinazuma";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Obtener el ID del usuario actual
    if(isset($_SESSION['usuario'])){
        $usuario = $_SESSION['usuario'];
        $sql = "SELECT id FROM usuarios WHERE nombre = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $usuario);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $usuario_id = $row["id"];
        } else {
            die("Error al obtener el ID del usuario.");
        }
        $stmt->close();
    } else {
        die("Error: Sesión no iniciada.");
    }

    // Obtener los datos JSON de jugadores comparados del cuerpo de la solicitud
    $json_data = file_get_contents("php://input");

    // Decodificar los datos JSON en un array asociativo de PHP
    $jugadoresComparados = json_decode($json_data, true);

    // Verificar si se decodificaron correctamente los datos
    if ($jugadoresComparados !== null) {

        // Iterar sobre los jugadores comparados y guardarlos en la base de datos
        foreach ($jugadoresComparados as $personajeElegidos) {
            // Query para insertar los jugadores comparados en la tabla de la base de datos
            $sql = "INSERT INTO consultas (usuario_id, jugadoresComparados) VALUES (?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("is", $usuario_id, $personajeElegidosJSON);
            $personajeElegidosJSON = json_encode($personajeElegidos);
            if ($stmt->execute() === false) {
                die("Error al insertar jugadores comparados: " . $stmt->error);
            }
            $stmt->close();
        }

        // Enviar respuesta de éxito al cliente
        http_response_code(200);
        echo "Jugadores comparados guardados correctamente.";

    } else {
        // Error al decodificar los datos JSON
        http_response_code(400);
        echo "Error: No se pudieron decodificar los datos JSON.";
    }

    // Cerrar la conexión a la base de datos
    $conn->close();
} else {
    // Solicitud no válida
    http_response_code(405);
    echo "Error: Método no permitido.";
}

// Si el usuario está logueado y tiene jugadores comparados y creados en la sesión 
if(isset($_SESSION['usuario']) && isset($_SESSION['jugadoresComparados']) && isset($_SESSION['jugadoresCreados'])){

    $fecha = date("l jS \of F Y h:i:s A"); // Fecha y hora actual
    $nombre_usuario = $_SESSION['usuario']; // Nombre de usuario

    // Cerrar sesión
    session_destroy();

    header("Location: ../../index.html"); // Redirigir al index.html

}
