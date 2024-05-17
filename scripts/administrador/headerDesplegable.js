let btnDesplegable = document.getElementById("botonDesplegable");
let menuNavegador = document.getElementById("menuNavegador");

let abrir = false;
function abrirDesplegable() {
    if (abrir === false) {
        menuNavegador.style.display = "block";
        abrir = true;
    } else if (abrir === true) {
        menuNavegador.style.display = "none";
        abrir = false;
    }
}
btnDesplegable.addEventListener("click", abrirDesplegable);



