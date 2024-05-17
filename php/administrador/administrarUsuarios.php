<?php

require '../conexiones/conexionBdLogin.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $userId = $_POST['userId'];
    $action = $_POST['action'];

    if ($action == "eliminar") {
        // Crear Objeto login
        $login = new loginBD();
        $login->eliminarUsuario($userId);
    } elseif ($action == "conceder") {
        // Crear Objeto login
        $login = new loginBD();
        $login->concederPermisos($userId);
    }

    header("Location: ../../administrador/administrarUsuarios.php");

    
    exit;
}
