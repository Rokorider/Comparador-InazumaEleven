<?php

session_start();

// Verificar si el usuario ha iniciado sesión
if(isset($_SESSION['usuario'])) {
    // Obtener el ID de usuario de la sesión
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

    if ($resultado->num_rows > 0) {
        // Obtener el ID de usuario
        $fila = $resultado->fetch_assoc();
        $usuario_id = "2";

        // Obtener los jugadores asociados al usuario
        $sql_jugadores = "SELECT * FROM jugadorespersonales WHERE usuario_id = '{$usuario_id}'";
        $resultado_jugadores = $conn->query($sql_jugadores);

        if ($resultado_jugadores->num_rows > 0) {
            // Mostrar los jugadores
            echo "<h2>Jugadores del usuario $usuario:</h2>";
            echo "<table border='1'>";
            echo "<tr><th>ID</th><th>Apodo</th><th>Nombre</th><th>Descripción</th><th>Imagen</th><th>Posición</th><th>Elemento</th><th>Género</th><th>PE</th><th>PT</th><th>Tiro</th><th>Físico</th><th>Control</th><th>Defensa</th><th>Rapidez</th><th>Aguante</th><th>Valor</th></tr>";
            while($fila_jugador = $resultado_jugadores->fetch_assoc()) {
                echo "<tr>";
                echo "<td>{$fila_jugador['ID']}</td>";
                echo "<td>{$fila_jugador['Apodo']}</td>";
                echo "<td>{$fila_jugador['Nombre_Real']}</td>";
                echo "<td>{$fila_jugador['Descripcion']}</td>";
                echo "<td>{$fila_jugador['Imagenes']}</td>";
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

    // Cerrar conexión
    $conn->close();
} else {
    echo "El usuario no ha iniciado sesión.";
}
?>
