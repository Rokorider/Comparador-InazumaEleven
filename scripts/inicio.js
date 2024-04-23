let btnInicioSesion = document.getElementById('btnInicioSesion');


const imagenes = ["../img/fondo1.png", "../img/fondo2.png", "../img/fondo3.png", "../img/fondo4.png"]; // Array con las URLs de las imágenes
let indiceImagen = 0; // Índice de la imagen actual

const imagenesFunciones = {
    "../img/fondo1.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#f59701";
        // Pon aqui el codigo para cambiar los colores de la caja
        document.querySelector(".cajaInicio").style.backgroundColor = "#006265";
        document.querySelector(".boton").style.backgroundColor = "#e2550b";
        document.querySelector(".registroEnlace").style.color = "#b8371c";
    },
    "../img/fondo2.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#ffb831";
        document.querySelector(".cajaInicio").style.backgroundColor = "#1264a3";
        document.querySelector(".boton").style.backgroundColor = "#9d5735";
        document.querySelector(".registroEnlace").style.color = "#7f8da2";
    },
    "../img/fondo3.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#fce13a";
        document.querySelector(".cajaInicio").style.backgroundColor = "#297891";
        document.querySelector(".boton").style.backgroundColor = "#3e3a3d";
        document.querySelector(".registroEnlace").style.color = "#a5c9d2";
    },
    "../img/fondo4.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#457e8e";
        document.querySelector(".cajaInicio").style.backgroundColor = "#304547";
        document.querySelector(".boton").style.backgroundColor = "#021a58";
        document.querySelector(".registroEnlace").style.color = "#537d8c";

    },
};

// Variable para almacenar la secuencia actual de flechas
let secuenciaFlechas = [];
let numeroSecuencia = 0;

let cancion2 = document.getElementById('cancion2');

document.addEventListener("keydown", function (event) {

    // Agregar la flecha presionada a la secuencia
    secuenciaFlechas.push(event.key);
    // Mantener la secuencia de flechas con una longitud máxima de 4
    if (secuenciaFlechas.length > 4) {
        secuenciaFlechas.shift(); // Eliminar el primer elemento de la secuencia si excede la longitud máxima
    }

    if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowRight" || event.key === "ArrowLeft") {


        if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowRight" || event.key === "ArrowLeft") {
            if (secuenciaFlechas.join("") === "ArrowDownArrowUpArrowRightArrowLeft") {
                numeroSecuencia++;
                if (numeroSecuencia === 3) {
                    document.querySelector(".caja").style.backgroundImage = `url('../img/image0.jpeg')`;
                    document.querySelector(".caja").style.backgroundColor = "#292929";
                    document.querySelector(".cajaInicio").style.backgroundColor = "#d93832";
                    document.querySelector(".boton").style.backgroundColor = "#292929";
                    document.querySelector(".registroEnlace").style.color = "black";
                    numeroSecuencia = 0; // Reiniciar el numeroSecuencia
                    cancion2.play();
                } else {
                    // Cambiar la imagen de fondo por otra que tengas en una variable
                    document.querySelector(".caja").style.backgroundImage = `url('../img/image2.jpeg')`;
                    document.querySelector(".caja").style.backgroundColor = "#f59701";
                    document.querySelector(".cajaInicio").style.backgroundColor = "#006265";
                    document.querySelector(".boton").style.backgroundColor = "#e2550b";

                }
                // Reiniciar la secuencia de flechas
                secuenciaFlechas = [];
            }
        }
    }

    if (event.key === "ArrowUp") { // Si se presiona la flecha hacia arriba
        cancion2.pause();
        cancion2.currentTime = 0;

        indiceImagen = (indiceImagen + 1) % imagenes.length; // Avanza al siguiente índice de imagen
        const imagenActual = imagenes[indiceImagen]; // Obtiene la URL de la imagen actual
        document.querySelector(".caja").style.backgroundImage = `url('${imagenActual}')`; // Cambia el fondo del div

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
        document.querySelector(".caja").style.backgroundImage = `url('${imagenActual}')`;

        if (imagenesFunciones.hasOwnProperty(imagenActual)) {
            imagenesFunciones[imagenActual]();
        } else {
            document.querySelector(".caja").style.backgroundColor = "";
        }
    }
});

btnInicioSesion.addEventListener("click", function (event) {
    window.location.href = "index.html";
});


/*
btnInicioSesion.addEventListener("click", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    document.getElementById("formularioInicio").submit(); // Envía el formulario
});
*/