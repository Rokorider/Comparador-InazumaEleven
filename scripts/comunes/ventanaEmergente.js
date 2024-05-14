function mostrarVentana() {
    // Crear el elemento div contenedor
    let contenedor = document.createElement("div");

    contenedor.classList.add("contenedor");
    contenedor.innerHTML = `
    <div class="cajaInfo">

    <div class="cajaCerrar">
        <figure class="cruz" id="cerrar">
            <img src="img/cruz.png" alt="cerrar">
        </figure>
    </div>
    <div class="cajalogo">
        <img src="img/logo/InazumaElevenComparadorLogo2.png" alt="logo">
    </div>
    <div class="cajaTexto">
        <p class="texto1">Esta página es un proyecto creado por fans para fans.</p>
        <p class="texto2">Nuestro objetivo es proporcionar un espacio donde los
            aficionados puedan comparar a sus jugadores favoritos,
            consultar sus estadísticas y crearse a si mismos dentro
            del mundo de Inazuma Eleven.
        </p>
        <p class="texto3">¡Comparte tu pasión con Nosotros!</p>
    </div>
</div> 
    `;

    // Agregar el contenedor al body
    document.body.appendChild(contenedor);

    // Función para cerrar la caja al hacer clic en la cruz
    document.getElementById("cerrar").addEventListener("click", function () {
        // Eliminar el contenedor del DOM
        contenedor.remove();
    });
}

// Llamar a la función para mostrar la ventana emergente
mostrarVentana();
