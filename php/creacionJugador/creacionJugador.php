<?php

// Creacion de jugador
require "Jugador.php";
require "cargarFoto.php";
require "cargarFotoEquipo.php";

session_start();

if (isset($_SESSION['usuario'])) {

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

    $pe = 120;
    $pt = 120;

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


    // Insertar datos en la base de datos
    $sql = "INSERT INTO jugadorespersonales (Apodo, Nombre_Real, Descripcion, Imagenes, Posicion, Elemento, Genero, Equipo, PE, PT, Tiro, Fisico, Control, Defensa, Rapidez, Aguante, Valor, usuario_id) 
        VALUES ('{$apodo}', '{$nombre}', '{$descripcion}', '{$imagen}', '{$posicion}', '{$elemento}', '{$genero}', '{$equipo}', '{$pe}', '{$pt}', '{$tiro}', '{$fisico}', '{$control}', '{$defensa}', '{$rapidez}', '{$aguante}', '{$valor}', '{$idUsuario}')";

    if ($conn->query($sql) === TRUE) {
        header("Location: ../../crearJugador.html");
        echo $equipo;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "No se ha iniciado sesión.";
}
