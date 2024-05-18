<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/comunes/normalize.css" />
    <link
        href="https://fonts.googleapis.com/css2?family=Bangers&family=Boogaloo&family=Jersey+10&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="../styles/header_footer/headerAdmin.css" />
    <link rel="stylesheet" href="../styles/header_footer/footer.css" />
    <link rel="stylesheet" href="../styles/administrador/administrarUsuarios.css" />
    <script src="../scripts/administrador/administrarUsuarios.js" defer></script>
    <script src="../scripts/administrador/headerDesplegable.js" defer></script>
    <script src="../scripts/comunes/footer.js" defer></script>
    <title>Administrar Usuarios</title>
</head>

<?php
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['usuario'])) {
    header('Location: ../index.html');
    exit(); // Es importante salir después de redirigir para evitar que el resto del código se ejecute
}
?>

<body>

    <?php include '../php/imports/headerAdmin.php'; ?>


    <section class="main">

        <div class="titulo">
            <h1>Administrar Usuarios</h1>
        </div>

        <div class="contenedorUsuarios" id="contenedorUsuarios">



        </div>

    </section>




</body>

</html>