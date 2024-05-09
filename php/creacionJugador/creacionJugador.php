<?php

// Creacion de jugador
require "Jugador.php";
require "cargarFoto.php";

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$apodo = $_POST['apodo'];
$genero = $_POST['genero'];
$posicion = $_POST['posicion'];
$foto = $_FILES['foto'];
$tiro = $_POST['tiro'];
$fisico = $_POST['fisico'];
$control = $_POST['control'];
$defensa = $_POST['defensa'];
$rapidez = $_POST['rapidez'];
$aguante = $_POST['aguante'];
$valor = $_POST['valor'];

// Carpeta para almacenar las fotos
$carpeta = "../img/imgPersonales/";

// Llamar a la función cargarFoto para subir la imagen
cargarFoto($foto, $carpeta);

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

//$sql2 = "SELECT id FROM usuarios WHERE nombre = '{$usuario}'"; // Corrección aquí, quitando el asterisco y agregando un espacio

//$idUsuario = $conn->query($sql2);

// Insertar datos en la base de datos

$descripcion = "Jugador personalizado";
$imagen = "hola";
$elemento = "Fuego";
$idUsuario = 2;

$sql = "INSERT INTO jugadorespersonales (Apodo, Nombre_Real, Descripcion, Imagenes, Posicion, Elemento, Genero, PE, PT, Tiro, Fisico, Control, Defensa, Rapidez, Aguante, Valor, usuario_id) 
        VALUES ('{$apodo}', '{$nombre}', '{$descripcion}', '{$imagen}', '{$posicion}', '{$elemento}', '{$genero}', '{$pe}', '{$pt}', '{$tiro}', '{$fisico}', '{$control}', '{$defensa}', '{$rapidez}', '{$aguante}', '{$valor}', '{$idUsuario}')";

if ($conn->query($sql) === TRUE) {
    header("Location: ../../crearJugador.html");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar conexión
$conn->close();
