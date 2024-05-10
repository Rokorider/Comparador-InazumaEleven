<?php

// Creacion de jugador
require "Jugador.php";
require "cargarFoto.php";
require "cargarFotoEquipo.php";

session_start();

if (isset($_SESSION['usuario'])) {

    // Obtener el nombre de usuario de la sesión
    $usuario = $_SESSION['usuario'];

    // Obtener los datos del  equipo
    $equipo = $_POST['equipo'];
    if ($equipo == "Nuevo") {
        $equipo = $_POST['nombreEquipo'];
    }
    
    $fotoEquipo = $_FILES['fotoEquipo'];

    // Obtener los datos del jugador
    $nombre = $_POST['nombre'];
    $apodo = $_POST['apodo'];
    $descripcion = $_POST['descripcion'];
    $elemento = $_POST['elemento'];
    $genero = $_POST['genero'];
    $posicion = $_POST['posicion'];
    $foto = $_FILES['foto'];

    // Obtener las estadísticas del jugador
    $pe = 120;
    $pt = 120;
    $tiro = $_POST['tiro'];
    $fisico = $_POST['fisico'];
    $control = $_POST['control'];
    $defensa = $_POST['defensa'];
    $rapidez = $_POST['rapidez'];
    $aguante = $_POST['aguante'];
    $valor = $_POST['valor'];

    // Carpeta para almacenar las fotos del equipo
    $carpetaEquipo = "../../imgEquipos/$usuario/";
    // Carpeta para almacenar las fotos de los jugadores
    $carpeta = "../../imgPersonales/$usuario/$equipo/";

    // Llamar a la función cargarFotoEquipo para subir la imagen del equipo
    $fotoEquipo = cargarFotoEquipo($fotoEquipo, $carpetaEquipo, $equipo);

    // Llamar a la función cargarFoto para subir la imagen del jugador
    $imagen = cargarFoto($foto, $carpeta);

    // Establecer conexión a la base de datos
    $servername = "localhost";
    $username = "comparador";
    $password = "1234";
    $dbname = "apiinazuma";

    // Establecer conexión a la base de datos
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    // Obtener el ID del usuario
    $sqlUsuario = "SELECT id FROM usuarios WHERE nombre = ?";
    $stmt = $conn->prepare($sqlUsuario);
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $resultado = $stmt->get_result();

    // Verificar la consulta y obtener el ID del usuario
    if ($resultado->num_rows > 0) {
        $fila = $resultado->fetch_assoc();
        $idUsuario = $fila['id'];
    } else {
        // Manejar el caso en que el usuario no existe
    }

    // Crear tabla para el equipo si no existe
    $sqlCrearTablaEquipo = "CREATE TABLE IF NOT EXISTS equipos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    foto VARCHAR(255) NOT NULL,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    )";

    $conn->query($sqlCrearTablaEquipo);

    // Insertar datos del equipo si no existe
    $sqlInsertarEquipo = "INSERT INTO equipos (nombre, foto, usuario_id) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sqlInsertarEquipo);
    $stmt->bind_param("ssi", $equipo, $fotoEquipo, $idUsuario);
    $stmt->execute();

    // Obtener el ID del equipo
    $idEquipo = $stmt->insert_id;

    // Crear tabla para los jugadores si no existe
    $sqlCrearTablaJugadores = "CREATE TABLE IF NOT EXISTS jugadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Apodo VARCHAR(50) NOT NULL,
    Nombre_Real VARCHAR(50) NOT NULL,
    Descripcion VARCHAR(255) NOT NULL,
    Imagenes VARCHAR(255) NOT NULL,
    Posicion VARCHAR(50) NOT NULL,
    Elemento VARCHAR(50) NOT NULL,
    Genero VARCHAR(50) NOT NULL,
    Equipo_id INT,
    PE INT NOT NULL,
    PT INT NOT NULL,
    Tiro INT NOT NULL,
    Fisico INT NOT NULL,
    Control INT NOT NULL,
    Defensa INT NOT NULL,
    Rapidez INT NOT NULL,
    Aguante INT NOT NULL,
    Valor INT NOT NULL,
    FOREIGN KEY (Equipo_id) REFERENCES equipos(id)
)";
    $conn->query($sqlCrearTablaJugadores);

    // Insertar datos del jugador
    $sqlInsertarJugador = "INSERT INTO jugadores (Apodo, Nombre_Real, Descripcion, Imagenes, Posicion, Elemento, Genero, Equipo_id, PE, PT, Tiro, Fisico, Control, Defensa, Rapidez, Aguante, Valor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sqlInsertarJugador);
    $stmt->bind_param("sssssssiiiiiiiiii", $apodo, $nombre, $descripcion, $imagen, $posicion, $elemento, $genero, $idEquipo, $pe, $pt, $tiro, $fisico, $control, $defensa, $rapidez, $aguante, $valor);
    $stmt->execute();

    // Cerrar conexión
    $stmt->close();
    $conn->close();
} else {
    echo "No se ha iniciado sesión";
}
