<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="../styles/comunes/scrollbarGeneral.css">
    <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Boogaloo&family=Jersey+10&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap&family=Pixelify+Sans:wght@400..700&display=swap" />   
    <link rel="stylesheet" type="text/css" href="../styles/header_footer/header.css">
    <link rel="stylesheet" type="text/css" href="../styles/header_footer/footer.css">
    <link rel="stylesheet" type="text/css" href="../styles/usuario/comentarios.css">
    <link rel="icon" type="image/x-icon" href="../img/Favicons/SilviaGrande.png" />
    <script src="../scripts/administrador/headerDesplegable.js" defer></script>
    <script src="../scripts/comunes/comentarios.js" defer></script>
    <title>Comentarios</title>
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

    <?php include '../php/imports/header.php'; ?>

    <section class="main">

        <div class="titulo">
            <h1>Comparte con Nosotros tu pasión por Inazuma Eleven</h1>
        </div>

        <div class="contSubirComentario">
            <form class="formulario" id="formComentario" method="post" action="../php/usuario/procesar_comentario.php">
                <div class="cajaAñadirComentario">
                    <div class="contNombre">
                        <p>Comentario</p>
                    </div>
                    <div class="contInputComentario">
                        <textarea name="comentario" id="comentario" maxlength="2000" placeholder="Escribe tu comentario aquí..."></textarea>
                    </div>
                    <div class="cajaError" id="cajaErrorComentario">
                        <p></p>
                    </div>
                </div>
                <div class="enviar" id="boton">
                    <p>Enviar</p>
                </div>
            </form>
        </div>

        <div class="tituloComent">
            <h1>Futblog</h1>
        </div>

        <div class="comentarios" id="comentarios"></div>

    </section>

    <?php include '../php/imports/footer.php'; ?>

</body>

</html>