<?php

// Credenciales de la base de datos
$dbhost = "localhost";
$dbuser = "comparador";
$dbpassword = "1234";
$dbname = "apiinazuma";

// Conexión a la base de datos
$connection = mysqli_connect($dbhost, $dbuser, $dbpassword, $dbname);

// Verificar la conexión
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Iniciar la sesión
session_start();

// Verificar si el usuario está autenticado
if (!isset($_SESSION['usuario'])) {
    die("El usuario no está autenticado");
}

// Obtener el nombre de usuario de la sesión
$usuario = $_SESSION['usuario'];

// Obtener el ID del usuario de la base de datos
$idUsuario = obtenerIdUsuario($connection, $usuario);

// Obtener los jugadores de todos los equipos del usuario
$data = obtenerJugadoresEquiposUsuario($connection, $idUsuario);

// Convertir los datos a formato JSON y devolverlos
header('Content-Type: application/json');
echo json_encode($data);

// Cerrar la conexión a la base de datos
$connection->close();

// Función para obtener el ID del usuario
function obtenerIdUsuario($connection, $usuario) {
    $sql = "SELECT id FROM usuarios WHERE nombre = '" . mysqli_real_escape_string($connection, $usuario) . "'";
    $result = $connection->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        return $row['id'];
    } else {
        die("No se pudo obtener el ID del usuario");
    }
}

// Función para obtener los jugadores de todos los equipos del usuario
function obtenerJugadoresEquiposUsuario($connection, $idUsuario) {
    $sql = "SELECT * FROM equipos WHERE usuario_id = $idUsuario";
    $result = $connection->query($sql);
    $data = array();
    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $idEquipo = $row['id'];
            $sqlJugadores = "SELECT * FROM jugadoresdeequipo WHERE Equipo_id = $idEquipo";
            $resultJugadores = $connection->query($sqlJugadores);
            if ($resultJugadores && $resultJugadores->num_rows > 0) {
                while ($rowJugador = $resultJugadores->fetch_assoc()) {
                    $data[] = $rowJugador;
                }
            }
        }
    }
    return $data;
}
