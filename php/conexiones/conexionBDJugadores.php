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
    public function crearJugadorAdministrador($jugador, $equipo)
    {

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

    public function actualizarJugador($campos_actualizados, $idJugador)
    {

        $query = "UPDATE api_inazuma_eleven___hoja_1 SET " . implode(", ", $campos_actualizados) . " WHERE id = '$idJugador'";
        $result = mysqli_query($this->conexion, $query);
        if ($result) {
            return true;
        } else {
            return false;
        }
    }

    public function crearJugadorUsuario($usuario, $equipo, $jugador, $fotoEquipo)
    {

        
        $sql = "SELECT id FROM usuarios WHERE nombre = '{$usuario}'";
        $resultado = mysqli_query($this->conexion, $sql);

        // Verifica si la consulta fue exitosa
        if ($resultado) {
            // Verifica si se encontraron filas
            if ($resultado->num_rows > 0) {
                // Obtiene la primera fila (asumiendo que solo debería haber una fila)
                $fila = $resultado->fetch_assoc();
                // Extrae el valor de la columna 'id'
                $idUsuario = $fila['id'];
            } else {
                // No se encontraron filas con el nombre de usuario dado
                // Manejar el caso en que el usuario no existe
            }
        } else {
            // Maneja el error de consulta
            echo "Error en la consulta: " . $this->conexion->error;
        }

        $sqlBuscarEquipo = "SELECT id FROM equipos WHERE nombre = '$equipo'";

        $resultadoBusqueda = mysqli_query($this->conexion, $sqlBuscarEquipo);

        if ($resultadoBusqueda->num_rows == 0) {
            // Insertar datos del equipo si no existe
            $sqlInsertarEquipo = "INSERT INTO equipos (nombre, foto, usuario_id) VALUES ('$equipo', '$fotoEquipo', '$idUsuario')";
            if (!$this->conexion->query($sqlInsertarEquipo)) {
                echo "Error al insertar datos del equipo: " . $this->conexion->error;
            }
        }

        // Obtener el ID del equipo
        $sqlidEquipo = "SELECT id FROM equipos WHERE nombre = '{$equipo}'";
        $resultadoidEquipo = mysqli_query($this->conexion, $sqlidEquipo);

        // Verifica si la consulta fue exitosa
        if ($resultadoidEquipo) {
            // Verifica si se encontraron filas
            if ($resultadoidEquipo->num_rows > 0) {
                // Obtiene la primera fila (asumiendo que solo debería haber una fila)
                $fila = $resultadoidEquipo->fetch_assoc();
                // Extrae el valor de la columna 'id'
                $idEquipo = $fila['id'];
            } else {
                // No se encontraron filas con el nombre de usuario dado
                // Manejar el caso en que el usuario no existe
            }
        } else {
            // Maneja el error de consulta
            echo "Error en la consulta: " . $this->conexion->error;
        }
        

        // Almacenar los valores de las estadísticas en variables
        $nombre = $jugador->getNombre();
        $apodo = $jugador->getApodo();
        $descripcion = $jugador->getDescripcion();
        $imagen = "hola";
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

        // Insertar datos del jugador
        $sqlInsertarJugador = "INSERT INTO jugadoresDeEquipo (Apodo, Nombre_Real, Descripcion, Imagenes, Posicion, Elemento, Genero, NombreEquipo, Equipo_id, PE, PT, Tiro, Fisico, Control, Defensa, Rapidez, Aguante, Valor) VALUES ('$apodo', '$nombre', '$descripcion', '$imagen', '$posicion', '$elemento', '$genero', '$equipo', '$idEquipo', '$pe', '$pt', '$tiro', '$fisico', '$control', '$defensa', '$rapidez', '$aguante', '$valor')";

        $stmt = $this->conexion->prepare($sqlInsertarJugador);
        $result = $stmt->execute();

        if ($result) {
            echo "Jugador insertado correctamente";
            return true;
        } else {
            echo "Error al insertar datos del jugador.";
            return false;
        }
    }
}
