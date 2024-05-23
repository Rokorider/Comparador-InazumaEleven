<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../scripts/comunes/jugadores.js" defer></script>
    <link rel="stylesheet" href="../styles/comunes/scrollbarGeneral.css">
    <script src="../scripts/comunes/footer.js" defer></script>
    <script src="../scripts/administrador/headerDesplegable.js" defer></script>
    <link rel="icon" type="image/x-icon" href="../img/Favicons/BalonCatNoir.png" />
    <link rel="stylesheet" href="../styles/header_footer/header.css" />
    <link rel="stylesheet" href="../styles/header_footer/footer.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Boogaloo&family=Jersey+10&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap&family=Pixelify+Sans:wght@400..700&display=swap" />
    <link rel="stylesheet" href="../styles/comunes/jugadores.css">
    <script type="module" src="../scripts/comunes/comparador/guardarJugadores.js" defer></script>
    <title>Jugadores</title>
</head>

<?php
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['usuario'])) {
    header('Location: ../index.html');
    exit(); // Es importante salir después de redirigir para evitar que el resto del código se ejecute
}
/*
// Imprimir el nombre de usuario en el registro de errores
echo("El usuario " . $_SESSION['usuario'] . " ha iniciado sesión en comparador.php");
*/
?>

<body>

    <?php include '../php/imports/header.php'; ?>

    <div class="main">
        <section class="contenedorJugadores" id="contenedorJugadores">

        </section>

        <div class="jugadores" id="jugadores"></div>
    </div>

    <?php include '../php/imports/footer.php'; ?>

</body>

</html>