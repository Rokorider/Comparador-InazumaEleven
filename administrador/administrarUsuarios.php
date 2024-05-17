<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/comunes/normalize.css" />
    <link rel="stylesheet" href="../styles/header_footer/headerAdmin.css" />
    <link rel="stylesheet" href="../styles/header_footer/footer.css" />
    <link rel="stylesheet" href="../styles/administrador/administrarUsuarios.css" />
    <script src="../scripts/administrador/administrarUsuarios.js" defer></script>
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