<?php

class Usuario
{

    private $nombre;
    private $email;
    private $contrasena;
    private $ultimaConexion;

    public function __construct($nombre = "", $email = "", $contrasena = "", $ultimaConexion = "")
    {
        $this->nombre = $nombre;
        $this->email = $email;
        $this->contrasena = $contrasena;
        $this->ultimaConexion = $ultimaConexion;
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

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
        return $this;
    }

    public function getContrasena()
    {
        return $this->contrasena;
    }

    public function setContrasena($contrasena)
    {
        $this->contrasena = $contrasena;
        return $this;
    }

    public function getUltimaConexion()
    {
        return $this->ultimaConexion;
    }

    public function setUltimaConexion($ultimaConexion)
    {
        $this->ultimaConexion = $ultimaConexion;
        return $this;
    }

}