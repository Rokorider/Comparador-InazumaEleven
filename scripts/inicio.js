let btnInicioSesion = document.getElementById('btnInicioSesion');


const imagenes = ["../img/fondo1.png", "../img/fondo2.png", "../img/fondo3.png", "../img/fondo4.png"]; // Array con las URLs de las imágenes
let indiceImagen = 0; // Índice de la imagen actual

const imagenesFunciones = {
    "../img/fondo1.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#f59701";
        // TODO
        // Pon aqui el codigo para cambiar los colores de la caja
    },
    "../img/fondo2.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#ffb831";
    },
    "../img/fondo3.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#fce13a";
    },
    "../img/fondo4.png": function () {
        document.querySelector(".caja").style.backgroundColor = "#537d8c";
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
    }
});

btnInicioSesion.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 2000);
});
