<?php

require "cargarFotoEquipo.php";

class Equipo{
    private $nombre;
    private $fotoEquipo;

    public function __construct($nombre = "", $fotoEquipo = ""){
        $this->nombre = $nombre;
        $this->fotoEquipo = $fotoEquipo;
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

    public function getFotoEquipo()
    {
        return $this->fotoEquipo;
    }

    public function setFoto($foto, $carpeta)
    {
        // Llamamos a la función cargarFoto
    }
}