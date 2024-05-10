<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/header.css" />
    <link rel="stylesheet" href="styles/footer.css" />
    <link rel="stylesheet" href="styles/administrador.css">
    <title>Administrador</title>
</head>

<body>
    <?php include 'php/header.php'; ?>
    <div class="main">
        <h1>Administrador de Usuarios</h1>

        <!-- Formulario para Crear Usuario -->
        <h2>Crear Usuario</h2>
        <form action="php/administrarCRUD.php" method="POST">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required><br>

            <input type="submit" name="crear" value="Crear Usuario">
        </form>

       

        <!-- Formulario para Actualizar Usuario -->
        <h2>Actualizar Usuario</h2>
        <form action="php/administrarCRUD.php" method="POST">
            <label for="id_actualizar">ID del Usuario:</label>
            <input type="text" id="id_actualizar" name="id" required><br>

            <label for="nombre_actualizar">Nuevo Nombre:</label>
            <input type="text" id="nombre_actualizar" name="nombre" required><br>

            <label for="email_actualizar">Nuevo Email:</label>
            <input type="email" id="email_actualizar" name="email" required><br>

            <input type="submit" name="actualizar" value="Actualizar Usuario">
        </form>

        <!-- Formulario para Eliminar Usuario -->
        <h2>Eliminar Usuario</h2>
        <form action="php/administrarCRUD.php" method="GET">
            <label for="id_eliminar">ID del Usuario:</label>
            <input type="text" id="id_eliminar" name="id" required><br>

            <input type="submit" name="eliminar" value="Eliminar Usuario">
        </form>

    </div>
</body>

</html>