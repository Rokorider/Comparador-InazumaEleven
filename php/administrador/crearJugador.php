<?php
require "Jugador.php";
require "cargarFoto.php";
require "cargarFotoEquipo.php";

session_start();

if (isset($_SESSION['usuario'])) {

    //Obtener datos del juego
    $juego = $_POST['juego'];

    // Obtener los datos del equipo
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
    $pe = $_POST['pe'];
    $pt = $_POST['pt'];
    $tiro = $_POST['tiro'];
    $fisico = $_POST['fisico'];
    $control = $_POST['control'];
    $defensa = $_POST['defensa'];
    $rapidez = $_POST['rapidez'];
    $aguante = $_POST['aguante'];
    $valor = $_POST['valor'];

    // Carpeta para almacenar las fotos
    $carpeta = "../../imgPersonales/";

    // Llamar a la función cargarFoto para subir la imagen
    $imagen = cargarFoto($foto, $carpeta);
    $fotoEquipo = cargarFotoEquipo($fotoEquipo, $carpeta, $equipo);

    // Establecer conexión a la base de datos
    $servername = "localhost";
    $username = "comparador";
    $password = "1234";
    $dbname = "apiinazuma";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    // Insertar datos del jugador
    $sqlInsertarJugador = "INSERT INTO api_inazuma_eleven___hoja_1 (Apodo, Nombre_Real, Descripcion, Imagenes, Posición, Elemento, Género, Equipo, PE, PT, Tiro, Físico, Control, Defensa, Rapidez, Aguante, Valor, Juego) VALUES ('$apodo', '$nombre', '$descripcion', '$imagen', '$posicion', '$elemento', '$genero', '$equipo', '$pe', '$pt', '$tiro', '$fisico', '$control', '$defensa', '$rapidez', '$aguante', '$valor', '$juego')";

    if (!$conn->query($sqlInsertarJugador)) {
        echo "Error al insertar datos del jugador: " . $conn->error;
    } else {
        header("Location: ../../crearJugador.html");
        exit(); // Salir del script después de redireccionar
    }
} else {
    echo "No se ha iniciado sesión.";
}
