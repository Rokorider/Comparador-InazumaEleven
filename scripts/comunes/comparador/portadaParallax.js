function initParallax() {
    // Set initial position of the images
    const imgs = document.querySelectorAll(".imgPortada");
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;

    imgs.forEach(img => {
        let _depth = img.getAttribute("data-depth");
        let _mouseX = _w;
        let _mouseY = _h;
        let _x = `${0 - (_mouseX - _w) * _depth}%`;
        let _y = `${0 - (_mouseY - _h) * _depth}%`;
        img.style.transform = `translate(${_x}, ${_y})`;
    });

    const parallaxContainer = document.getElementById("parallax");

    // Activar parallax solo cuando se pasa el ratón sobre el contenedor
    parallaxContainer.addEventListener("mouseenter", () => {
        document.addEventListener("mousemove", parallax);
    });

    // Desactivar parallax cuando se sale del contenedor
    parallaxContainer.addEventListener("mouseleave", () => {
        document.removeEventListener("mousemove", parallax);
    });
}

// Function to handle parallax effect
function parallax(e) {
    const imgs = document.querySelectorAll(".imgPortada");
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;

    imgs.forEach(img => {
        let _depth = img.getAttribute("data-depth");
        let _x = `${0 - (_mouseX - _w) * _depth}%`;
        let _y = `${0 - (_mouseY - _h) * _depth}%`;
        img.style.transform = `translate(${_x}, ${_y})`;
    });
}

// Llamar a la función para inicializar el parallax
initParallax();
