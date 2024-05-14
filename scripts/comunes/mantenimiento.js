
const imagenes = ["../../img/fondos/fondo1.png", "../../img/fondos/fondo2.png", "../../img/fondos/fondo3.png", "../../img/fondos/fondo4.png"]; // Array con las URLs de las imágenes
let indiceImagen = 0; // Índice de la imagen actual

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


        if (secuenciaFlechas.join("") === "ArrowDownArrowUpArrowRightArrowLeft") {
            numeroSecuencia++;
            if (numeroSecuencia === 3) {
                document.querySelector(".main").style.backgroundImage = `url('../../img/fondos/image0.jpeg')`;
                document.querySelector(".main").style.color = `white`;
                numeroSecuencia = 0;

            } else if (numeroSecuencia === 2) {
                // Cambiar la imagen de fondo por otra que tengas en una variable
                document.querySelector(".main").style.backgroundImage = `url('../../img/fondos/image2.jpeg')`;
            } else if (numeroSecuencia === 1) {
                // Cambiar la imagen de fondo por otra que tengas en una variable
                document.querySelector(".main").style.backgroundImage = `url('../../img/fondos/image3.png')`;
            }
            // Reiniciar la secuencia de flechas
            secuenciaFlechas = [];
        }

    }

    if (event.key === "ArrowUp") { // Si se presiona la flecha hacia arriba

        indiceImagen = (indiceImagen + 1) % imagenes.length; // Avanza al siguiente índice de imagen
        const imagenActual = imagenes[indiceImagen]; // Obtiene la URL de la imagen actual
        document.querySelector(".main").style.backgroundImage = `url('${imagenActual}')`; // Cambia el fondo del div
        document.querySelector(".main").style.color = `black`;

    } else if (event.key === "ArrowDown") {

        indiceImagen = (indiceImagen - 1 + imagenes.length) % imagenes.length;
        const imagenActual = imagenes[indiceImagen];
        document.querySelector(".main").style.backgroundImage = `url('${imagenActual}')`;
        document.querySelector(".main").style.color = `black`;

    }
});
