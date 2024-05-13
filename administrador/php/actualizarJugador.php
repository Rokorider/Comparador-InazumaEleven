<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Incluir la conexión a la base de datos
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



    // Inicializar un array para almacenar los campos actualizados
    $campos_actualizados = array();

    $idJugador = $_POST['idJugador'];

    // Verificar qué campos se enviaron y cuáles están vacíos
    if (!empty($_POST['nombre'])) {
        $nombre = $_POST['nombre'];
        $campos_actualizados[] = "Nombre_Real = '$nombre'";
    }

    if (!empty($_POST['apodo'])) {
        $apodo = $_POST['apodo'];
        $campos_actualizados[] = "Apodo = '$apodo'";
    }

    if (!empty($_POST['descripcion'])) {
        $descripcion = $_POST['descripcion'];
        $campos_actualizados[] = "Descripción = '$descripcion'";
    }

    if (!empty($_POST['elemento'])) {
        $elemento = $_POST['elemento'];
        $campos_actualizados[] = "Elemento = '$elemento'";
    }

    if (!empty($_POST['genero'])) {
        $genero = $_POST['genero'];
        $campos_actualizados[] = "Género = '$genero'";
    }

    if (!empty($_POST['posicion'])) {
        $posicion = $_POST['posicion'];
        $campos_actualizados[] = "Posición = '$posicion'";
    }

    if (!empty($_POST['foto'])) {
        $foto = $_POST['foto'];
        $campos_actualizados[] = "Imagenes = '$foto'";
    }

    if (!empty($_POST['pe'])) {
        $pe = $_POST['pe'];
        $campos_actualizados[] = "PE = '$pe'";
    }

    if (!empty($_POST['pt'])) {
        $pt = $_POST['pt'];
        $campos_actualizados[] = "PT = '$pt'";
    }

    if (!empty($_POST['tiro'])) {
        $tiro = $_POST['tiro'];
        $campos_actualizados[] = "Tiro = '$tiro'";
    }

    if (!empty($_POST['fisico'])) {
        $fisico = $_POST['fisico'];
        $campos_actualizados[] = "Físico = '$fisico'";
    }

    if (!empty($_POST['control'])) {
        $control = $_POST['control'];
        $campos_actualizados[] = "Control = '$control'";
    }

    if (!empty($_POST['defensa'])) {
        $defensa = $_POST['defensa'];
        $campos_actualizados[] = "Defensa = '$defensa'";
    }

    if (!empty($_POST['rapidez'])) {
        $rapidez = $_POST['rapidez'];
        $campos_actualizados[] = "Rapidez = '$rapidez'";
    }

    if (!empty($_POST['aguante'])) {
        $aguante = $_POST['aguante'];
        $campos_actualizados[] = "Aguante = '$aguante'";
    }

    if (!empty($_POST['valor'])) {
        $valor = $_POST['valor'];
        $campos_actualizados[] = "Valor = '$valor'";
    }

    if (!empty($campos_actualizados)) {
        // Construye la consulta SQL para actualizar el jugador
        $query = "UPDATE api_inazuma_eleven___hoja_1 SET " . implode(", ", $campos_actualizados) . " WHERE id = '$idJugador'";
    }

    // Ejecuta la consulta
    mysqli_query($conn, $query);

    //Verifica si la consulta fue exitosa
    if (mysqli_affected_rows($conn) > 0) {
        header("Location: ../actualizarJugadores.html");
    } else {
        echo "Error al actualizar el jugador.";
    }
}
