<?php

function cargarFotoEquipo($foto, $carpetaEquipo, $equipo)
{

    if (!file_exists($carpetaEquipo)) {
        // Crear la carpeta si no existe
        mkdir($carpetaEquipo, 0777, true); // 0777 para asegurarse de que la carpeta tenga permisos
    }

    // Almacenar los datos del archivo en variables
    $nombre = $foto['name'];
    $tipo = $foto['type'];
    $tamaño = $foto['size'];
    $ruta = $foto['tmp_name'];

    $rutaImagen = $carpetaEquipo . $equipo;

    // Verificar que se ha cargado una imagen 
    if ($nombre != "") {
        // Verificar que la imagen tiene extensión jpg o png y tamaño < 10MB
        if ((strpos($tipo, 'jpeg') || strpos($tipo, 'png')) && $tamaño < 10500000) {
            // Cambiar nombre y extensión de los archivos al subir al servidor
            $extension = strpos($tipo, 'jpeg') !== false ? '.jpg' : '.png';

            // Mover la imagen a la carpeta del usuario
            move_uploaded_file($ruta, $carpetaEquipo . $equipo . $extension);

            // No es necesario devolver ninguna ruta aquí
        } else {
            echo "ERROR al subir el archivo. Compruebe que está en formato jpg o png y el tamaño es menor a 10MB";
        }
    }
    return $rutaImagen;
}


