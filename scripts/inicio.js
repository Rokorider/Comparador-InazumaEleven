let btnInicioSesion = document.getElementById('btnInicioSesion');


const imagenes = ["../img/fondo1.png", "../img/fondo2.png", "../img/fondo3.png", "../img/fondo4.png"]; // Array con las URLs de las imágenes
let indiceImagen = 0; // Índice de la imagen actual

const imagenesFunciones = {
    "../img/fondo1.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#f59701";
        // Pon aqui el codigo para cambiar los colores de la caja
        document.querySelector(".cajaInicio").style.backgroundColor = "#006265";
        document.querySelector(".boton").style.backgroundColor = "#e2550b";
    },
    "../img/fondo2.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#ffb831";
        document.querySelector(".cajaInicio").style.backgroundColor = "#1264a3";
        document.querySelector(".boton").style.backgroundColor = "#9d5735";
    },
    "../img/fondo3.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#fce13a";
        document.querySelector(".cajaInicio").style.backgroundColor = "#297891";
        document.querySelector(".boton").style.backgroundColor = "#3e3a3d";
    },
    "../img/fondo4.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#537d8c";
        document.querySelector(".cajaInicio").style.backgroundColor = "#304547";
        document.querySelector(".boton").style.backgroundColor = "#021a58";

    },
};

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") { // Si se presiona la flecha hacia arriba
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

/*
btnInicioSesion.addEventListener("click", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    document.getElementById("formularioInicio").submit(); // Envía el formulario
});
*/

btnInicioSesion.addEventListener("click", function (event) {
    window.location.href = "index.html";

});