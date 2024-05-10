<?php
require "Jugador.php";
require "cargarFoto.php";
require "cargarFotoEquipo.php";

session_start();

if (isset($_SESSION['usuario'])) {

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

    $usuario = $_SESSION['usuario'];

    $sql2 = "SELECT id FROM usuarios WHERE nombre = '{$usuario}'";
    $resultado = $conn->query($sql2);

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

    // Crear tabla para el equipo si no existe
    $sqlCrearTablaEquipo = "CREATE TABLE IF NOT EXISTS equipos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL,
        foto VARCHAR(255) NOT NULL,
        usuario_id INT,
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    )";

    if (!$conn->query($sqlCrearTablaEquipo)) {
        echo "Error al crear la tabla de equipos: " . $conn->error;
    }

    $sqlBuscarEquipo = "SELECT id FROM equipos WHERE nombre = '$equipo'";

    $resultadoBusqueda = $conn->query($sqlBuscarEquipo);

    if ($resultadoBusqueda->num_rows == 0) {
        // Insertar datos del equipo si no existe
        $sqlInsertarEquipo = "INSERT INTO equipos (nombre, foto, usuario_id) VALUES ('$equipo', '$fotoEquipo', '$idUsuario')";
        if (!$conn->query($sqlInsertarEquipo)) {
            echo "Error al insertar datos del equipo: " . $conn->error;
        }
    }
    

    // Obtener el ID del equipo
    $sqlidEquipo = "SELECT id FROM equipos WHERE nombre = '{$equipo}'";
    $resultadoidEquipo = $conn->query($sqlidEquipo);

    // Verifica si la consulta fue exitosa
    if ($resultadoidEquipo) {
        // Verifica si se encontraron filas
        if ($resultadoidEquipo->num_rows > 0) {
            // Obtiene la primera fila (asumiendo que solo debería haber una fila)
            $fila = $resultadoidEquipo->fetch_assoc();
            // Extrae el valor de la columna 'id'
            $idEquipo = $fila['id'];
        } else {
            // No se encontraron filas con el nombre de usuario dado
            // Manejar el caso en que el usuario no existe
        }
    } else {
        // Maneja el error de consulta
        echo "Error en la consulta: " . $conn->error;
    }

    // Crear tabla para los jugadores si no existe
    $sqlCrearTablaJugadores = "CREATE TABLE IF NOT EXISTS jugadoresDeEquipo (
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


    if (!$conn->query($sqlCrearTablaJugadores)) {
        echo "Error al crear la tabla de jugadores: " . $conn->error;
    }

// Insertar datos del jugador
$sqlInsertarJugador = "INSERT INTO jugadoresDeEquipo (Apodo, Nombre_Real, Descripcion, Imagenes, Posicion, Elemento, Genero, Equipo_id, PE, PT, Tiro, Fisico, Control, Defensa, Rapidez, Aguante, Valor) VALUES ('$apodo', '$nombre', '$descripcion', '$imagen', '$posicion', '$elemento', '$genero', '$idEquipo', '$pe', '$pt', '$tiro', '$fisico', '$control', '$defensa', '$rapidez', '$aguante', '$valor')";

// Ejecutar la consulta para insertar el jugador
if (!$conn->query($sqlInsertarJugador)) {
    echo "Error al insertar datos del jugador: " . $conn->error;
} else {
    // Consulta para aumentar el número de jugadores del equipo
    $sqlAumentarJugadores = "UPDATE equipos SET numeroJugadores = numeroJugadores + 1 WHERE id = '$idEquipo'";
    
    // Ejecutar la consulta para aumentar el número de jugadores del equipo
    if (!$conn->query($sqlAumentarJugadores)) {
        echo "Error al aumentar el número de jugadores del equipo: " . $conn->error;
    } else {
        header("Location: ../../crearJugador.html");
        exit(); // Salir del script después de redireccionar
    }
}

} else {
    echo "No se ha iniciado sesión.";
}
