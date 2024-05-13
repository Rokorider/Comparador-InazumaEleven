<?php

class JugadoresBD
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

    // Función para crear un jugador como administrador. Jugador es un objeto de la clase Jugador
    public function crearJugadorAdministrador($jugador, $equipo){
        
        // Almacenar los valores de las estadísticas en variables
        $nombre = $jugador->getNombre();
        $apodo = $jugador->getApodo();
        $descripcion = $jugador->getDescripcion();
        $imagen = $jugador->getFoto();
        $posicion = $jugador->getPosicion();
        $elemento = $jugador->getElemento();
        $genero = $jugador->getGenero();
        $pe = $jugador->getPE();
        $pt = $jugador->getPt();
        $tiro = $jugador->getTiro();
        $fisico = $jugador->getFisico();
        $control = $jugador->getControl();
        $defensa = $jugador->getDefensa();
        $rapidez = $jugador->getRapidez();
        $aguante = $jugador->getAguante();
        $valor = $jugador->getValor();
        $juego = $jugador->getJuego();
        
        $sql = "INSERT INTO api_inazuma_eleven___hoja_1 (Apodo, Nombre_Real, Descripción, Imagenes, Posición, Elemento, Género, Equipo, PE, PT, Tiro, Físico, Control, Defensa, Rapidez, Aguante, Valor, Juego) VALUES ( '$apodo', '$nombre', '$descripcion', '$imagen', '$posicion', '$elemento', '$genero', '$equipo', '$pe', '$pt', '$tiro', '$fisico', '$control', '$defensa', '$rapidez', '$aguante', '$valor', '$juego')";
        
        $stmt = $this->conexion->prepare($sql);
        $result = $stmt->execute();
    
        if ($result) {
            return true;
        } else {
            return false;
        }
    }

    public function actualizarJugador($campos_actualizados, $idJugador){

        $query = "UPDATE api_inazuma_eleven___hoja_1 SET " . implode(", ", $campos_actualizados) . " WHERE id = '$idJugador'";
        $result = mysqli_query($this->conexion, $query);
        if ($result) {
            return true;
        } else {
            return false;
        }

    }


    public function crearJugador(){

    }
    
    
}