<?php

require "Estadisticas.php";

class Jugador
{
    private $apodo;
    private $nombre;
    private $foto;
    private $posicion;
    private $elemento;
    private $genero;
    private $estadisticas;

    public function __construct($apodo = "", $nombre = "", $foto = "", $posicion = "", $elemento = "", $genero = "", $estadisticas = "")
    {
        $this->apodo = $apodo;
        $this->nombre = $nombre;
        $this->foto = $foto;
        $this->posicion = $posicion;
        $this->elemento = $elemento;
        $this->genero = $genero;
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

    public function getFoto()
    {
        return $this->foto;
    }

    public function setFoto($foto, $carpeta)
    {
        $this->foto = cargarFoto($foto, $carpeta); // Llamamos a la función cargarFoto
    }

    public function getEstadisticas()
    {
        return $this->estadisticas;
    }

    public function setEstadisticas($estadisticas)
    {
        $this->estadisticas = $estadisticas;

        return $this;
    }

    public function getElemento()
    {
        return $this->elemento;
    }

    public function setElemento($elemento)
    {
        $this->elemento = $elemento;

        return $this;
    }
}
