<?php

function cargarFotoJugador($foto, $carpeta, $apodo, $equipoModificado)
{
    // Ruta completa de la carpeta del equipo
    $carpetaEquipo = $carpeta . $equipoModificado . "/";

    // Verificar si la carpeta del equipo existe
    if (!file_exists($carpetaEquipo)) {
        // Si no existe, crearla
        mkdir($carpetaEquipo, 0777, true); // Se crea la carpeta con permisos de escritura
    }

    // Obtener la extensión de la imagen
    $extension = pathinfo($foto['name'], PATHINFO_EXTENSION);

    // Crear el nombre de archivo usando el apodo y la extensión de la imagen
    $nombreArchivo = $apodo . "." . $extension;

    // Ruta completa del archivo de destino
    $rutaCompleta = $carpetaEquipo . $nombreArchivo;

    // Mover la imagen a la carpeta de destino
    if (move_uploaded_file($foto['tmp_name'], $rutaCompleta)) {
        return $nombreArchivo; // Devolver el nombre del archivo guardado exitosamente
    } else {
        return false; // Si hay algún error al mover el archivo, devolver false
    }
}