<?php

require "../conexiones/conexionBdJugadores.php";
require "fotos/actualizarFotoAdmin.php";
require "fotos/actualizarFotoConApodoAdmin.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Inicializar un array para almacenar los campos actualizados
    $campos_actualizados = array();

    $idJugador = $_POST['idJugador'];
    $apodoOriginal = $_POST['apodoOriginal'];
    $equipoModificado = $_POST['equipoModificado'];
    $juegoModificado = $_POST['juegoModificado'];

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

    if (!empty($_FILES['foto'])) {
        $foto = $_FILES['foto'];
        if (!empty($_POST['apodo'])) {
            $carpeta = "../../img/imgJugadores/$juegoModificado/Jugadores/$equipoModificado/";
            actualizarFotoConApodoAdmin($foto, $apodoOriginal, $apodo, $carpeta);
        }else{
            $carpeta = "../../img/imgJugadores/$juegoModificado/Jugadores/$equipoModificado/";
            actualizarFotoAdmin($foto, $apodoOriginal, $carpeta);
        }
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

    // Crear un objeto de la clase JugadoresBD
    $jugadoresBD = new JugadoresBD();

    if (!empty($campos_actualizados)) {
        // Llamar al método actualizarJugador con los campos actualizados y el id del jugador
        if ($jugadoresBD->actualizarJugador($campos_actualizados, $idJugador)) {
            header("Location: ../../administrador/actualizarJugador.php");
        } else {
            echo "Error al actualizar el jugador.";
        }
    }
}
