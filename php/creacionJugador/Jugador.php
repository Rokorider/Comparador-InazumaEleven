<?php

require "Estadisticas.php";

class Jugador
{
    private $apodo;
    private $nombre;
    private $foto;
    private $descripcion;
    private $posicion;
    private $elemento;
    private $genero;
    private $pe;
    private $pt;
    private $tiro;
    private $fisico;
    private $control;
    private $defensa;
    private $rapidez;
    private $aguante;
    private $valor;
    private $juego;

    public function __construct($apodo = "", $nombre= "", $foto = "", $descripcion = "", $posicion = "", $elemento = "", $genero = "", $pe = "", $pt = "", $tiro = "", $fisico = "", $control = "", $defensa = "", $rapidez = "", $aguante = "", $valor = "", $juego = "")
    {
        $this->apodo = $apodo;
        $this->nombre = $nombre;
        $this->foto = $foto;
        $this->descripcion = $descripcion;
        $this->posicion = $posicion;
        $this->elemento = $elemento;
        $this->genero = $genero;
        $this->pe = $pe;
        $this->pt = $pt;
        $this->tiro = $tiro;
        $this->fisico = $fisico;
        $this->control = $control;
        $this->defensa = $defensa;
        $this->rapidez = $rapidez;
        $this->aguante = $aguante;
        $this->valor = $valor;
        $this->juego = $juego;
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

    public function getDescripcion()
    {
        return $this->descripcion;
    }

    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;
        return $this;
    }

    public function getGenero()
    {
        return $this->genero;
    }

    public function getPe()
    {
        return $this->pe;
    }

    public function setPe($pe)
    {
        $this->pe = $pe;
        return $this;
    }

    // Getter y setter para $pt
    public function getPt()
    {
        return $this->pt;
    }

    public function setPt($pt)
    {
        $this->pt = $pt;
        return $this;
    }

    // Getter y setter para $tiro
    public function getTiro()
    {
        return $this->tiro;
    }

    public function setTiro($tiro)
    {
        $this->tiro = $tiro;
        return $this;
    }

    // Getter y setter para $fisico
    public function getFisico()
    {
        return $this->fisico;
    }

    public function setFisico($fisico)
    {
        $this->fisico = $fisico;
        return $this;
    }

    // Getter y setter para $control
    public function getControl()
    {
        return $this->control;
    }

    public function setControl($control)
    {
        $this->control = $control;
        return $this;
    }

    // Getter y setter para $defensa
    public function getDefensa()
    {
        return $this->defensa;
    }

    public function setDefensa($defensa)
    {
        $this->defensa = $defensa;
        return $this;
    }

    // Getter y setter para $rapidez
    public function getRapidez()
    {
        return $this->rapidez;
    }

    public function setRapidez($rapidez)
    {
        $this->rapidez = $rapidez;
        return $this;
    }

    // Getter y setter para $aguante
    public function getAguante()
    {
        return $this->aguante;
    }

    public function setAguante($aguante)
    {
        $this->aguante = $aguante;
        return $this;
    }

    // Getter y setter para $valor
    public function getValor()
    {
        return $this->valor;
    }

    public function setValor($valor)
    {
        $this->valor = $valor;
        return $this;
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

    public function getElemento()
    {
        return $this->elemento;
    }

    public function setElemento($elemento)
    {
        $this->elemento = $elemento;
        return $this;
    }

    public function getJuego()
    {
        return $this->juego;
    }

    public function setJuego($juego)
    {
        $this->juego = $juego;
        return $this;
    }
}
