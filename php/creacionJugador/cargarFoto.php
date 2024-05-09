<?php

function cargarFoto($foto, $carpeta)
{
    // Obtener el nombre de usuario de la sesión
    session_start();
    $usuario = $_SESSION['usuario'];

    // Crear la ruta de la carpeta personalizada del usuario
    $ruta_usuario = $carpeta . $usuario . '/';
    if (!file_exists($ruta_usuario)) {
        // Crear la carpeta si no existe
        mkdir($ruta_usuario, 0777, true); // 0777 para asegurarse de que la carpeta tenga permisos
    }

    // Almacenar los datos del archivo en variables
    $nombre = $foto['name'];
    $tipo = $foto['type'];
    $tamaño = $foto['size'];
    $ruta = $foto['tmp_name'];

    $rutaImagen = "imgPersonales/$usuario/$nombre";

    // Verificar que se ha cargado una imagen 
    if ($nombre != "") {
        // Verificar que la imagen tiene extensión jpg o png y tamaño < 10MB
        if ((strpos($tipo, 'jpeg') || strpos($tipo, 'png')) && $tamaño < 10500000) {
            // Cambiar nombre y extensión de los archivos al subir al servidor
            $extension = strpos($tipo, 'jpeg') !== false ? '.jpg' : '.png';

            // Mover la imagen a la carpeta del usuario
            move_uploaded_file($ruta, $ruta_usuario . $nombre . $extension);

            // No es necesario devolver ninguna ruta aquí
        } else {
            echo "ERROR al subir el archivo. Compruebe que está en formato jpg o png y el tamaño es menor a 10MB";
        }
    }
    return $rutaImagen . $extension;
}


