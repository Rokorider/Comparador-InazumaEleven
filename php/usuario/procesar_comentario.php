<?php
require "../conexiones/comentariosBD.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Obtener el nombre del usuario de la sesión
    session_start();
    $nombre = $_SESSION['usuario'];

    // Obtener los datos del formulario
    $comentario = $_POST["comentario"];

    // Crear objeto de la clase ComentariosBD
    $comentarios = new ComentariosBD();

    $comentarios->subirComentarios($nombre, $comentario);

    header("Location: ../../usuario/comentarios.php");
    exit();
}
