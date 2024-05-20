<?php
class ComentariosBD
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

    public function subirComentarios($nombre, $comentario){
        $sql = "INSERT INTO comentarios (nombre, comentario) VALUES ('$nombre', '$comentario')";
        $result = $this->conexion->query($sql);
        
    }

}