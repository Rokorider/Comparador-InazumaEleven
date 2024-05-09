<?php

class Estadisticas{
    private $tiro;
    private $fisico;
    private $control;
    private $defensa;
    private $rapidez;
    private $aguante;
    private $valor;

    public function __construct($tiro = "", $fisico = "", $control = "", $defensa = "", $rapidez = "", $aguante = "", $valor = ""){
        $this->tiro = $tiro;
        $this->fisico = $fisico;
        $this->control = $control;
        $this->defensa = $defensa;
        $this->rapidez = $rapidez;
        $this->aguante = $aguante;
        $this->valor = $valor;
    }

    public function getTiro()
    {
        return $this->tiro;
    }

    public function setTiro($tiro)
    {
        $this->tiro = $tiro;

        return $this;
    }

    public function getFisico()
    {
        return $this->fisico;
    }

    public function setFisico($fisico)
    {
        $this->fisico = $fisico;

        return $this;
    }

    public function getControl()
    {
        return $this->control;
    }

    public function setControl($control)
    {
        $this->control = $control;

        return $this;
    }

    public function getDefensa()
    {
        return $this->defensa;
    }

    public function setDefensa($defensa)
    {
        $this->defensa = $defensa;

        return $this;
    }

    public function getRapidez()
    {
        return $this->rapidez;
    }

    public function setRapidez($rapidez)
    {
        $this->rapidez = $rapidez;
        return $this;
    }

    public function getAguante()
    {
        return $this->aguante;
    }

    public function setAguante($aguante)
    {
        $this->aguante = $aguante;

        return $this;
    }

    public function getValor()
    {
        return $this->valor;
    }

    public function setValor($valor)
    {
        $this->valor = $valor;
        return $this;
    }
}