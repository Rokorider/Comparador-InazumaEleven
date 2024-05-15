<?php
function actualizarFotoAdmin($foto, $apodoOriginal, $carpeta){
    // Obtener la extensión del archivo subido
    $extension = pathinfo($foto['name'], PATHINFO_EXTENSION);

    // Ruta completa de la foto a eliminar
    $fotoEliminar = $carpeta . $apodoOriginal . ".png";

    // Verificar si la foto original existe y eliminarla
    if (file_exists($fotoEliminar)) {
        unlink($fotoEliminar);
    } else {
        echo "La foto original no existe en la carpeta.";
        return; // Detener la ejecución si la foto original no existe
    }

    // Ruta completa de la nueva foto a añadir
    $nuevaRuta = $carpeta . "/" . $apodoOriginal . "." . $extension;

    // Mover la nueva foto a la carpeta con el nombre del apodo original
    if (move_uploaded_file($foto['tmp_name'], $nuevaRuta)) {
        echo "Foto actualizada exitosamente.";
    } else {
        echo "Error al actualizar la foto.";
    }
}
