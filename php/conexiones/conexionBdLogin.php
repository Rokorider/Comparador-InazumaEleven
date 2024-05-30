<?php

class LoginBD
{
    private $conexion;
    private $dbname = "apiinazuma"; // Nombre de la base de datos
    private $server = "localhost";
    private $user = "comparador";
    private $password = "1234";

    public function __construct()
    {
        $this->conexion = new mysqli($this->server, $this->user, $this->password, $this->dbname);
        $this->conexion->set_charset("utf8");
        if ($this->conexion->connect_error) {
            throw new Exception("Connection failed: " . $this->conexion->connect_error);
        }
    }

    public function login($usuario, $contrasena)
    {
        $sql = "SELECT * FROM usuarios WHERE nombre = '$usuario' AND contrasena = '$contrasena'";
        $result = $this->conexion->query($sql);

        if ($result->num_rows > 0) {
            // Obtener los datos del usuario
            $datos_usuario = $result->fetch_assoc();

            // Verificar si el usuario tiene permisos
            $permisos = $datos_usuario['permisos'];

            // Actualizar la última conexión del usuario
            $sql_update = "UPDATE usuarios SET ultimaConexion = NOW() WHERE nombre = '$usuario'";
            $this->conexion->query($sql_update);

            // Iniciar sesión
            session_start();
            $_SESSION['usuario'] = $usuario;
            $_SESSION['jugadoresComparados'] = array();
            $_SESSION['jugadoresCreados'] = array();

            if ($permisos) {
                // Redirigir a la página de comparador de administrador
                header("Location: ../../administrador/comparadorAdmin.php");
            } else {
                // Redirigir a la página de comparador común
                header("Location: ../../paginasComunes/comparador.php");
            }
            exit(); // Salir del script después de redirigir
        } else {
            // Redirigir al inicio de sesión si falla
            header("Location: ../../index.html");
            exit(); // Salir del script después de redirigir
        }
    }


    public function registro($usuario)
    {
        // Obtiene las propiedades del objeto Usuario
        $nombre = $usuario->getNombre();
        $email = $usuario->getEmail();
        $contrasena = $usuario->getContrasena();
    
        // Prepara la consulta SQL utilizando sentencias preparadas para evitar inyecciones SQL
        $sql_insertar = $this->conexion->prepare("INSERT INTO usuarios (nombre, email, contrasena, permisos) VALUES (?, ?, ?, 0)");
        
        // Asigna los parámetros a la consulta
        $sql_insertar->bind_param("sss", $nombre, $email, $contrasena);
    
        // Ejecuta la consulta
        $result_insertar = $sql_insertar->execute();
    
        // Verifica el resultado de la ejecución
        if ($result_insertar) {
            // Registro exitoso
            return true;
        } else {
            // Error al registrar
            return false;
        }
    }
    

    public function eliminarUsuario($idUsuario)
    {
        $sql = "DELETE FROM usuarios WHERE id = $idUsuario";
        $result = $this->conexion->query($sql);

        $this->conexion->close();
    }

    public function concederPermisos($idUsuario)
    {
        $sql = "UPDATE usuarios SET permisos = 1 WHERE id = $idUsuario";
        $result = $this->conexion->query($sql);

        $this->conexion->close();
    }
}
