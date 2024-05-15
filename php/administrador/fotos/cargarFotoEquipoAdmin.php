<?php

function cargarFotoEquipoAdmin($carpeta, $imagenEquipo, $equipoModificado)
{
    // Obtener la extensión de la imagen
    $extension = pathinfo($imagenEquipo['name'], PATHINFO_EXTENSION);

    // Crear el nombre de archivo usando el nombre del equipo modificado y la extensión original de la imagen
    $nombreArchivo = $equipoModificado . "." . $extension;

    // Ruta completa del archivo de destino
    $rutaCompleta = $carpeta . $nombreArchivo;

    // Mover la imagen a la carpeta de destino
    if (move_uploaded_file($imagenEquipo['tmp_name'], $rutaCompleta)) {
        return true; // Devolver verdadero si la imagen se ha movido correctamente
    } else {
        return false; // Si hay algún error al mover el archivo, devolver false
    }
}