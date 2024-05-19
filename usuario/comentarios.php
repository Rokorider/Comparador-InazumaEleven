<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Boogaloo&family=Jersey+10&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../styles/header_footer/header.css">
    <link rel="stylesheet" type="text/css" href="../styles/header_footer/footer.css">
    <link rel="stylesheet" type="text/css" href="../styles/usuario/comentarios.css">
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

    <!-- 
        <h1>Sistema de Comentarios</h1>
        <form id="formComentario" method="post" action="../php/usuario/procesar_comentario.php">
            <label for="nombre">Nombre:</label><br>
            <input type="text" id="nombre" name="nombre" required><br><br>
            <label for="comentario">Comentario:</label><br>
            <textarea id="comentario" name="comentario" required></textarea><br><br>
            <button type="submit">Enviar</button>
        </form>
        <h2>Comentarios:</h2>
        <div id="comentarios">
            
        </div>
    -->

    <?php include '../php/imports/header.php'; ?>

    <section class="main">

        <div class="titulo">
            <h1>Comparte con Nosotros tu pasión por Inazuma Eleven</h1>
        </div>

        <div class="contSubirComentario">
            <form class="formulario" id="formComentario" method="post" action="../php/usuario/procesar_comentario.php">
                <div class="cajaNombre">
                    <div class="contNombre">
                        <p>Nombre</p>
                    </div>
                    <div class="contInputNombre">
                        <input type="text" id="nombre" name="nombre" required>
                    </div>
                </div>
                <div class="cajaAñadirComentario">
                    <div class="contNombre">
                        <p>Comentario</p>
                    </div>
                    <div class="contInputComentario">
                        <input type="text" id="nombre" name="nombre" required>
                    </div>
                </div>
                <div class="enviar" id="boton">
                    <p>Enviar</p>
                </div>
            </form>
        </div>


        <div class="tituloComent">
            <h1>Comentarios</h1>
        </div>

        <div class="comentarios" id="comentarios">



        </div>

    </section>



</body>

</html>

<!--
    <script>
        // Código para cargar comentarios
        async function cargarComentarios() {
            const response = await fetch('../php/usuario/cargar_comentarios.php');
            const comentarios = await response.json();
            const contenedorComentarios = document.getElementById('comentarios');
            contenedorComentarios.innerHTML = '';
            comentarios.forEach(comentario => {
                const divComentario = document.createElement('div');
                divComentario.className = 'comentario';
                divComentario.innerHTML = `
                <div class="nombre">${comentario.nombre}</div>
                <div class="fecha">${comentario.fecha}</div>
                <div>${comentario.comentario}</div>
                `;
                contenedorComentarios.appendChild(divComentario);
            });
        }
        
        // Cargar los comentarios al cargar la página
        document.addEventListener('DOMContentLoaded', cargarComentarios);
    </script>
-->