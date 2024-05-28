<?php

// Verificar si hay un parámetro de error en la URL
if (isset($_GET['error'])) {
    $error = $_GET['error'];
    if ($error == 'usuario') {
        $mensaje_error = "Introduce otro nombre.";
    } elseif ($error == 'correo') {
        $mensaje_error = "El correo ya está registrado, prueba con otro.";
    } elseif ($error == 'usuario_y_correo') {
        $mensaje_error = "El usuario y el correo ya están registrados, prueba con otros.";
    } elseif ($error == 'insert') {
        $mensaje_error = "Hubo un error al registrar el usuario. Inténtalo nuevamente.";
    }
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../../Comparador-InazumaEleven/img/Favicons/BalonMark.png">
    <link rel="stylesheet" type="text/css" href="../styles/comunes/sesion.css">
    <link rel="stylesheet" type="text/css" href="../styles/comunes/registro.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap&family=Pixelify+Sans:wght@400..700&display=swap" />
    <script src="../scripts/registro.js" defer></script>
    <title>Registro de Usuario</title>
</head>

<body>
    <div class="caja">
        <div class="tituloCaja">
            <img src="../img/logo/InazumaElevenComparadorLogo2.png" alt="" class="logoInazuma">
        </div>

        <audio id="cancion2" src="../img/audio/cancionReves.mp3" preload="auto" loop="true"></audio>

        <div class="cajaInicio">

        <div class="tituloRegistrar">
            <h2>Regístrate</h2>
        </div>
            <form action="../php/registro/registrarse.php" method="post" id="formularioRegistro">

                <div class="formContenedor">
                    <div class="usuario">
                        <h2>Nombre de Usuario</h2>
                        <input type="text" name="usuario" id="usuario" required>
                    </div>
                    <div class="usuarioMalo">
                    </div>
                    <div class="correo">
                        <h2>Correo electrónico</h2>
                        <input type="email" name="email" id="correo" required>
                    </div>
                    <div class="correoMalo">
                    </div>
                    <div class="contrasena">
                        <h2>Contraseña</h2>
                        <input type="password" name="contrasena" id="contrasena" required>
                    </div>
                    <div class="contrasenaMala">
                    </div>
                </div>

                <div class="iniciarSesion">
                    <!-- Cambié el tipo de input a "submit" para que sea un botón de envío del formulario -->
                    <input type="submit" id="btnRegistro" name="boton" value="Registrarse" class="boton">
                </div>

                <div class="mensaje">
                    <?php if (isset($mensaje_error)): ?>
                        <p><?php echo $mensaje_error; ?></p>
                    <?php endif; ?>
                </div>

            </form>

        </div>

    </div>

</body>

</html>