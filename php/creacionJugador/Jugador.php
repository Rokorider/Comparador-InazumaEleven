<?php

require "Estadisticas.php";

class Jugador
{
    private $nombre;
    private $apodo;
    private $genero;
    private $posicion;
    private $foto;
    private $estadisticas;

    public function __construct($nombre = "", $apodo = "", $genero = "", $posicion = "", $foto = "")
    {
        $this->nombre = $nombre;
        $this->apodo = $apodo;
        $this->genero = $genero;
        $this->posicion = $posicion;
        $this->estadisticas = new Estadisticas();
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function getApodo()
    {
        return $this->apodo;
    }

    public function setApodo($apodo)
    {
        $this->apodo = $apodo;

        return $this;
    }

    public function getGenero()
    {
        return $this->genero;
    }

    public function setGenero($genero)
    {
        $this->genero = $genero;

        return $this;
    }

    public function getPosicion()
    {
        return $this->posicion;
    }

    public function setPosicion($posicion)
    {
        $this->posicion = $posicion;

        return $this;
    }
}
