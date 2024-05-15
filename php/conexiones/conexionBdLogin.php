<?php
class loginBD
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
        $sql = "SELECT * FROM usuarios WHERE nombre = '$usuario' and contrasena = '$contrasena'";
        $result = $this->conexion->query($sql);

        if ($result->num_rows > 0) {
            // Iniciar sesión
            session_start();
            $_SESSION['usuario'] = $usuario;
            $_SESSION['jugadoresComparados'] = array();
            $_SESSION['jugadoresCreados'] = array();
            return true;
        }
        return false;
    }

    public function registro($nombre, $email, $contrasena)
    {
        // Verificar si ya existe un usuario con el mismo correo electrónico
        $sql_verificar = "SELECT * FROM usuarios WHERE email = '$email'";
        $result_verificar = $this->conexion->query($sql_verificar);

        if ($result_verificar->num_rows > 0) {
            // Ya existe un usuario con ese correo electrónico
            return false;
        } else {
            // No hay ningún usuario con ese correo electrónico, procede con el registro
            $sql_insertar = "INSERT INTO usuarios (nombre, email, contrasena) VALUES ('$nombre', '$email', '$contrasena')";
            $result_insertar = $this->conexion->query($sql_insertar);

            if ($result_insertar) {
                // Registro exitoso
                return true;
            } else {
                // Error al registrar
                return false;
            }
        }
    }
}
