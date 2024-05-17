<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userId = $_POST['userId'];
    $action = $_POST['action'];

    // Conectar a la base de datos
    $conn = new mysqli("localhost", "usuario", "contraseña", "base_de_datos");

    // Verificar conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    if ($action == "eliminar") {
        // Eliminar usuario de la base de datos
        $sql = "DELETE FROM usuarios WHERE id = ?";
    } elseif ($action == "conceder") {
        // Conceder permisos de administrador al usuario
        $sql = "UPDATE usuarios SET permisos = 'admin' WHERE id = ?";
    }

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("i", $userId);
        $stmt->execute();
        $stmt->close();
    }

    $conn->close();

    // Redirigir de vuelta a la página de administración de usuarios
    header("Location: administrar_usuarios.php");
    exit;
}
