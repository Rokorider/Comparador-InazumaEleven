<?php

require '../comunes/Usuario.php';
require '../conexiones/conexionBdLogin.php';

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

// Verificar si se han enviado usuario, correo y contraseña en el post
if (!isset($_POST['usuario']) || !isset($_POST['email']) || !isset($_POST['contrasena'])) {
    die("Por favor, ingrese un usuario, correo y contraseña");
}

// Obtener usuario, correo y contraseña del post
$usuario = $_POST['usuario'];
$correo = $_POST['email'];
$contrasena = $_POST['contrasena'];

// Consulta a la base de datos para verificar si el usuario o correo ya existen
$check_query_usuarios = mysqli_query($connection, "SELECT * FROM usuarios WHERE nombre ='$usuario' OR email ='$correo'");

// Inicializar variables para verificar duplicados
$usuario_duplicado = false;
$correo_duplicado = false;

// Verificar si ya existe un usuario o correo registrado
if (mysqli_num_rows($check_query_usuarios) > 0) {
    while ($row = mysqli_fetch_assoc($check_query_usuarios)) {
        if ($row['nombre'] == $usuario) {
            $usuario_duplicado = true;
        }
        if ($row['email'] == $correo) {
            $correo_duplicado = true;
        }
    }
}


// Mostrar mensajes de alerta según el caso y redirigir
if ($usuario_duplicado && $correo_duplicado) {
    header("Location: ../../paginasComunes/registro.php?error=usuario_y_correo");
    exit();
} elseif ($usuario_duplicado) {
    header("Location: ../../paginasComunes/registro.php?error=usuario");
    exit();
} elseif ($correo_duplicado) {
    header("Location: ../../paginasComunes/registro.php?error=correo");
    exit();
} else {

    // Crear Objeto Usuario
    $usuario = new Usuario($usuario, $correo, $contrasena);

    // Crear objeto de la clase loginBD
    try {
        $registro = new LoginBD();
    } catch (Exception $e) {
        // Redirigir a la página de mantenimiento si falla la conexión
        header("Location: ../../paginasComunes/paginasErrores/mantenimiento.html");
        exit(); // Salir del script después de redirigir
    }

    // LLamada a la función para registrar usuario
    $query = $registro->registro($usuario);

    // Comprobación
    if ($query) {
        header("Location: ../../index.html");
        exit();
    } else {
        echo "Error: " . $query . "<br>" . mysqli_error($connection);
        //header("Location: ../../paginasComunes/registro.php?error=insert");
        exit();
    }
}

