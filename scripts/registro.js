let btnRegistro = document.getElementById("btnRegistro");
let mensajeAlerta=document.getElementById("mensajeAlerta")
let alertaNombre=document.getElementById("alertaNombre")
let alertaCorreo=document.getElementById("alertaCorreo")
let alertaContrasena=document.getElementById("alertaContrasena")

const imagenes = [
    "../img/fondos/fondo1.png",
    "../img/fondos/fondo2.png",
    "../img/fondos/fondo3.png",
    "../img/fondos/fondo4.png",
]; // Array con las URLs de las imágenes

let indiceImagen = 0; // Índice de la imagen actual

const imagenesFunciones = {
    "../img/fondos/fondo1.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#f59701";
        document.querySelector(".cajaInicio").style.backgroundColor = "#006265";
        document.querySelector(".boton").style.backgroundColor = "#e2550b";
        document.querySelector(".registroEnlace").style.color = "#f59701";
    },
    "../img/fondos/fondo2.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#ffb831";
        document.querySelector(".cajaInicio").style.backgroundColor = "#1264a3";
        document.querySelector(".boton").style.backgroundColor = "#7c8ea4"; //#9d5735 antiguo
        document.querySelector(".registroEnlace").style.color = "#ffb831";
    },
    "../img/fondos/fondo3.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#fce13a";
        document.querySelector(".cajaInicio").style.backgroundColor = "#297891";
        document.querySelector(".boton").style.backgroundColor = "#3e3a3d";
        document.querySelector(".registroEnlace").style.color = "#a5c9d2";
    },
    "../img/fondos/fondo4.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#457e8e";
        document.querySelector(".cajaInicio").style.backgroundColor = "#304547";
        document.querySelector(".boton").style.backgroundColor = "#021a58";
        document.querySelector(".registroEnlace").style.color = "#537d8c";
    },
};

// Variable para almacenar la secuencia actual de flechas
let secuenciaFlechas = [];
let numeroSecuencia = 0;

let cancion2 = document.getElementById("cancion2");

document.addEventListener("keydown", function (event) {
    // Agregar la flecha presionada a la secuencia
    secuenciaFlechas.push(event.key);
    // Mantener la secuencia de flechas con una longitud máxima de 4
    if (secuenciaFlechas.length > 4) {
        secuenciaFlechas.shift(); // Eliminar el primer elemento de la secuencia si excede la longitud máxima
    }

    if (
        event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "ArrowRight" ||
        event.key === "ArrowLeft"
    ) {
        if (
            event.key === "ArrowUp" ||
            event.key === "ArrowDown" ||
            event.key === "ArrowRight" ||
            event.key === "ArrowLeft"
        ) {
            if (
                secuenciaFlechas.join("") ===
                "ArrowDownArrowUpArrowRightArrowLeft"
            ) {
                numeroSecuencia++;
                if (numeroSecuencia === 3) {
                    document.querySelector(
                        ".caja"
                    ).style.backgroundImage = `url('../img/fondos/image0.jpeg')`;
                    document.querySelector(".caja").style.backgroundColor =
                        "#292929";
                    document.querySelector(
                        ".cajaInicio"
                    ).style.backgroundColor = "#d93832";
                    document.querySelector(".boton").style.backgroundColor =
                        "#292929";
                    document.querySelector(".registroEnlace").style.color =
                        "black";
                    numeroSecuencia = 0; // Reiniciar el numeroSecuencia
                    cancion2.play();
                } else if (numeroSecuencia === 2) {
                    document.querySelector(
                        ".caja"
                    ).style.backgroundImage = `url('../img/fondos/image2.jpeg')`;
                    document.querySelector(".caja").style.backgroundColor =
                        "#f59701";
                    document.querySelector(
                        ".cajaInicio"
                    ).style.backgroundColor = "#006265";
                    document.querySelector(".boton").style.backgroundColor =
                        "#e2550b";
                } else if (numeroSecuencia === 1) {
                    document.querySelector(
                        ".caja"
                    ).style.backgroundImage = `url('../img/fondos/image3.png')`;
                    document.querySelector(".caja").style.backgroundColor =
                        "#f59701";
                    document.querySelector(
                        ".cajaInicio"
                    ).style.backgroundColor = "#006265";
                    document.querySelector(".boton").style.backgroundColor =
                        "#e2550b";
                }
                // Reiniciar la secuencia de flechas
                secuenciaFlechas = [];
            }
        }
    }

    if (event.key === "ArrowUp") {
        // Si se presiona la flecha hacia arriba
        cancion2.pause();
        cancion2.currentTime = 0;

        indiceImagen = (indiceImagen + 1) % imagenes.length; // Avanza al siguiente índice de imagen
        const imagenActual = imagenes[indiceImagen]; // Obtiene la URL de la imagen actual
        document.querySelector(
            ".caja"
        ).style.backgroundImage = `url('${imagenActual}')`; // Cambia el fondo del div

        // Ejecutar la función asociada a la imagen actual
        if (imagenesFunciones.hasOwnProperty(imagenActual)) {
            imagenesFunciones[imagenActual]();
        } else {
            // Si no hay una función asociada a la imagen actual, eliminar cualquier estilo personalizado
            document.querySelector(".caja").style.backgroundColor = "";
        }
    } else if (event.key === "ArrowDown") {
        cancion2.pause();
        cancion2.currentTime = 0;

        indiceImagen = (indiceImagen - 1 + imagenes.length) % imagenes.length;
        const imagenActual = imagenes[indiceImagen];
        document.querySelector(
            ".caja"
        ).style.backgroundImage = `url('${imagenActual}')`;

        if (imagenesFunciones.hasOwnProperty(imagenActual)) {
            imagenesFunciones[imagenActual]();
        } else {
            document.querySelector(".caja").style.backgroundColor = "";
        }
    }
});

document
    .getElementById("formularioRegistro")
    .addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita el comportamiento por defecto del Enter
            document.getElementById("formularioRegistro").submit(); // Envía el formulario
        }
    });

    document.getElementById("btnRegistro").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the form from submitting by default
    
        const nombre = document.getElementById("usuario");
        const correo = document.getElementById("correo");
        const contrasena = document.getElementById("contrasena");
        const alertaNombre = document.getElementById("alertaNombre");
        const alertaCorreo = document.getElementById("alertaCorreo");
        const alertaContrasena = document.getElementById("alertaContrasena");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        let valid = true;
        
        // Validate username
        if (nombre.value.trim() === "") {
            alertaNombre.innerText = "Ingrese un nombre de usuario.";
            valid = false;
        } else if (/\s/.test(nombre.value)) {
            alertaNombre.innerText = "No puede contener espacios.";
            valid = false;
        } else {
            alertaNombre.innerText = "";
        }
    
        // Validate email
        if (correo.value.trim() === "") {
            alertaCorreo.innerText = "Ingrese un correo electrónico.";
            valid = false;
        } else if (!emailPattern.test(correo.value.trim())) {
            alertaCorreo.innerText = "Ingrese un correo electrónico válido.";
            valid = false;
        } else {
            alertaCorreo.innerText = "";
        }
    
        // Validate password
        if (contrasena.value.trim() === "") {
            alertaContrasena.innerText = "Ingrese una contraseña.";
            valid = false;
        } else if(contrasena.value.length<=5){
            alertaContrasena.innerText = "Mínimo 6 dígitos.";
            valid = false;
        }else {
            alertaContrasena.innerText = "";
        }
    
        // If all fields are valid, submit the form
        if (valid) {
            document.getElementById("formularioRegistro").submit();
        }
    });
    