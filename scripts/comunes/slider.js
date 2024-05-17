const sliders = document.querySelectorAll(".inputRango");

sliders.forEach(sliderEl3 => {
  const sliderValue3 = sliderEl3.nextElementSibling; 

  sliderEl3.addEventListener("input", (event) => {
    const tempSliderValue = Number(event.target.value);

    // Actualizar el valor mostrado
    if (sliderValue3) {
      sliderValue3.textContent = tempSliderValue;
    }
    
    // Calcular el progreso
    const progress = (tempSliderValue / sliderEl3.max) * 100;
    
    // Actualizar el fondo del slider
    sliderEl3.style.background = `linear-gradient(to right, #282855 ${progress}%, #ccc ${progress}%)`;
    
    // Calcular la rotación del thumb y actualizar la propiedad CSS personalizada
    sliderEl3.style.setProperty("--thumb-rotate", `${(tempSliderValue / sliderEl3.max) * 2160}deg`);
  });
});
