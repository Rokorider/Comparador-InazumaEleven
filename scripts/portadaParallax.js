// configurar la posición inicial 
function initParallax() {
    const imgs = document.querySelectorAll(".img");
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;

    // Set initial position of the images
    imgs.forEach(img => {
        let _depth = img.getAttribute("data-depth");
        let _mouseX = _w;
        let _mouseY = _h;
        let _x = `${0 - (_mouseX - _w) * _depth}%`;
        let _y = `${0 - (_mouseY - _h) * _depth}%`;
        img.style.transform = `translate(${_x}, ${_y})`;
    });
}


//activar parallax al mover el ratón
document.addEventListener("mousemove", parallax);

// Function to handle parallax effect
function parallax(e) {
    const imgs = document.querySelectorAll(".img");
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

// Call the function to initialize parallax effect when the page loads
window.onload = initParallax;
