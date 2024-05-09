<?php

session_start();

// Verificar si el usuario ha iniciado sesión
if (isset($_SESSION['usuario'])) {
    // Obtener el nombre de usuario de la sesión
    $usuario = $_SESSION['usuario'];

    // Establecer conexión a la base de datos
    $servername = "localhost";
    $username = "comparador";
    $password = "1234";
    $dbname = "apiinazuma";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    // Obtener el ID de usuario de la base de datos
    $sql = "SELECT id FROM usuarios WHERE nombre = '{$usuario}'";
    $resultado = $conn->query($sql);

    // Verificar si la consulta fue exitosa
    if ($resultado) {
        // Verificar si se encontraron filas
        if ($resultado->num_rows > 0) {
            // Obtiene la primera fila (asumiendo que solo debería haber una fila)
            $fila = $resultado->fetch_assoc();
            // Extrae el valor de la columna 'id'
            $idUsuario = $fila['id'];

            // Consulta para obtener los jugadores asociados a este usuario
            $sql_jugadores = "SELECT * FROM jugadorespersonales WHERE usuario_id = '{$idUsuario}'";
            $resultado_jugadores = $conn->query($sql_jugadores);

            // Verifica si se encontraron jugadores asociados a este usuario
            if ($resultado_jugadores->num_rows > 0) {
                // Mostrar los jugadores
                echo "<h2>Jugadores del usuario $usuario:</h2>";
                echo "<table border='1'>";
                echo "<tr><th>ID</th><th>Apodo</th><th>Nombre</th><th>Descripción</th><th>Imagen</th><th>Posición</th><th>Elemento</th><th>Género</th><th>PE</th><th>PT</th><th>Tiro</th><th>Físico</th><th>Control</th><th>Defensa</th><th>Rapidez</th><th>Aguante</th><th>Valor</th></tr>";
                while ($fila_jugador = $resultado_jugadores->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>{$fila_jugador['ID']}</td>";
                    echo "<td>{$fila_jugador['Apodo']}</td>";
                    echo "<td>{$fila_jugador['Nombre_Real']}</td>";
                    echo "<td>{$fila_jugador['Descripcion']}</td>";
                    echo "<td><img src='{$fila_jugador['Imagenes']}' alt='Imagen del jugador'></td>";
                    echo "<td>{$fila_jugador['Posicion']}</td>";
                    echo "<td>{$fila_jugador['Elemento']}</td>";
                    echo "<td>{$fila_jugador['Genero']}</td>";
                    echo "<td>{$fila_jugador['PE']}</td>";
                    echo "<td>{$fila_jugador['PT']}</td>";
                    echo "<td>{$fila_jugador['Tiro']}</td>";
                    echo "<td>{$fila_jugador['Fisico']}</td>";
                    echo "<td>{$fila_jugador['Control']}</td>";
                    echo "<td>{$fila_jugador['Defensa']}</td>";
                    echo "<td>{$fila_jugador['Rapidez']}</td>";
                    echo "<td>{$fila_jugador['Aguante']}</td>";
                    echo "<td>{$fila_jugador['Valor']}</td>";
                    echo "</tr>";
                }
                echo "</table>";
            } else {
                echo "No se encontraron jugadores asociados a este usuario.";
            }
        } else {
            echo "El usuario no existe en la base de datos.";
        }
    } else {
        echo "Error en la consulta: " . $conn->error;
    }

    // Cerrar la conexión
    $conn->close();
} else {
    echo "El usuario no ha iniciado sesión.";
}
