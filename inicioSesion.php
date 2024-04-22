<?php
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

if ($usuario == 'admin' && $contrasena == 'admin') {
    echo 'Inicio de sesión exitoso como administrador';
} else {
    echo 'Inicio de sesión exitoso como usuario';
}

header('Location: index.html');
