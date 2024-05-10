<?php
// Credenciales de la base de datos
$dbhost = "localhost"; // Servidor de la base de datos
$dbuser = "comparador"; // Usuario de la base de datos
$dbpassword = "1234"; // Contraseña de la base de datos
$dbname = "apiinazuma"; // Nombre de la base de datos

// Conexión a la base de datos
$conexion = mysqli_connect($dbhost, $dbuser, $dbpassword, $dbname);

// Verificar la conexión
if (!$conexion) {
    die("Connection failed: " . mysqli_connect_error());
}

// CREATE
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["crear"])) {
    $nombre = mysqli_real_escape_string($conexion, $_POST["nombre"]);
    $email = mysqli_real_escape_string($conexion, $_POST["email"]);
    $contrasena = mysqli_real_escape_string($conexion, $_POST["contrasena"]);

    // Validar datos
    if (empty($nombre) || empty($email) || empty($contrasena)) {
        echo "Por favor complete todos los campos";
    } else {
        $sql = "INSERT INTO usuarios (nombre, email, contrasena) VALUES ('$nombre', '$email', '$contrasena')";

        if (mysqli_query($conexion, $sql)) {
            echo "Usuario agregado exitosamente";
        } else {
            echo "Error al registrarse: " . mysqli_error($conexion);
        }
    }
}

// DELETE
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["eliminar"])) {
    $id = mysqli_real_escape_string($conexion, $_POST["id"]);

    // Validar datos
    if (empty($id)) {
        echo "Por favor ingrese el ID del usuario a eliminar";
    } else {
        $sql = "DELETE FROM usuarios WHERE id = $id";

        if (mysqli_query($conexion, $sql)) {
            echo "Usuario eliminado exitosamente";
        } else {
            echo "Error al eliminar el usuario: " . mysqli_error($conexion);
        }
    }
}

mysqli_close($conexion);

