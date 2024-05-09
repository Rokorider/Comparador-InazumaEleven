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
}