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

// Verificar si se han enviado usuario, correo y contraseña en el post
if (!isset($_POST['usuario']) || !isset($_POST['email']) || !isset($_POST['contrasena'])) {
    die("Por favor, ingrese un usuario, correo y contraseña");
}

// Obtener usuario y contraseña del post
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
    // Verificar que el usuario y el correo no existan
    while ($row = mysqli_fetch_assoc($check_query_usuarios)) {
        if ($row['nombre'] == $usuario) {
            $usuario_duplicado = true;
        }
        if ($row['email'] == $correo) {
            $correo_duplicado = true;
        }
    }
}

// Mostrar mensajes de alerta según el caso
if ($usuario_duplicado && $correo_duplicado) {
    echo "<script>alert('El usuario y el correo ya están registrados, pruebe con otros')</script>";
    header("Location: registro.html");
} elseif ($usuario_duplicado) {
    echo "<script>alert('El usuario ya está registrado, pruebe con otro')</script>";
    header("Location: registro.html");
} elseif ($correo_duplicado) {
    echo "<script>alert('El correo ya está registrado, pruebe con otro')</script>";
    header("Location: registro.html");
} else {
    // Insertar el usuario en la base de datos
    $query = mysqli_query($connection, "INSERT INTO usuarios (nombre, email, contrasena) VALUES ('$usuario', '$correo', '$contrasena')");

    // Comprobación
    // Si hay al menos un resultado
    if ($query) {
        header("Location: index.html");
    } else {
        header("Location: registro.html");
    }
}
?>
