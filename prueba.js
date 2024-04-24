let indice = 0;
const jugadoresAMostrar = 50;
let jugadores = [];

// Función para obtener los datos de la API
function obtenerDatos() {
    fetch('prueba.php')
        .then(response => response.json())
        .then(data => {
            jugadores = data;
            mostrarJugadores(); // Llamar a la función para mostrar los jugadores después de obtener los datos
        })
        .catch(error => {
            console.error('Error al obtener los datos de jugadores:', error);
        });
}

// Función para mostrar los jugadores
function mostrarJugadores() {
    const contenedorJugadores = document.getElementById('jugadores');
    const limite = Math.min(indice + jugadoresAMostrar, jugadores.length);

    for (let i = indice; i < limite; i++) {
        agregarJugador(jugadores[i], contenedorJugadores);
    }

    if (limite < jugadores.length) {
        mostrarBotonCargar(contenedorJugadores);
    }
}

// Función para agregar un jugador al contenedor
function agregarJugador(jugador, contenedor) {
    const amiiboItem = document.createElement('div');
    amiiboItem.className = 'jugador';
    amiiboItem.innerHTML = `
        
    <div class="infoJugador">
    <div class="imgJugador">
    <img src="${jugador.Imagenes}" alt="${jugador.Nombre_Real}">
    </div>
    <div class="datosJugador">
        <div class="datos1">
            <div class="nombre">
                <p>${jugador.Nombre_Real}</p>
            </div>
            <div class="nivel">
                <p>Niv. 99</p>
            </div>
            <div class="posicion">
                <div class="posicionTexto">
                    <p>${jugador.Posición}</p>
                </div>
            </div>
        </div>
        <div class="datos1">
            <div class="nombre">
                <p>${jugador.Apodo}</p>
            </div>
            <div class="genero">
                <p>${jugador.Género}</p>
            </div>
            <div class="elemento">
                <p>${jugador.Elemento}</p>
            </div>
        </div>
        <div class="datos2">
            <div class="pe">
                <div class="texto">
                    <p>PE</p>
                </div>
                <div class="valor">
                    <p>${jugador.PE}/${jugador.PE}</p>
                </div>
            </div>
            <div class="pt">
                <div class="texto">
                    <p>PT</p>
                </div>
                <div class="valor">
                    <p>${jugador.PT}/${jugador.PT}</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="estadisticasJugador">
    <div class="estadistica">
        <div class="tipo">
            <div class="tipoUnidad">
                <p>Tiro</p>
            </div>
            <div class="unidad">
                <p>${jugador.Tiro}</p>
            </div>
        </div>
        <div class="tipo">
            <div class="tipoUnidad">
                <p>Físico</p>
            </div>
            <div class="unidad">
                <p>${jugador.Físico}</p>
            </div>
        </div>
    </div>
    <div class="estadistica">
        <div class="tipo">
            <div class="tipoUnidad">
                <p>Control</p>
            </div>
            <div class="unidad">
                <p>${jugador.Control}</p>
            </div>
        </div>
        <div class="tipo">
            <div class="tipoUnidad">
                <p>Defensa</p>
            </div>
            <div class="unidad">
                <p>${jugador.Defensa}</p>
            </div>
        </div>
    </div>
    <div class="estadistica">
        <div class="tipo">
            <div class="tipoUnidad">
                <p>Rapidez</p>
            </div>
            <div class="unidad">
                <p>${jugador.Rapidez}</p>
            </div>
        </div>
        <div class="tipo">
            <div class="tipoUnidad">
                <p>Aguante</p>
            </div>
            <div class="unidad">
                <p>${jugador.Aguante}</p>
            </div>
        </div>
    </div>  
    <div class="estadistica">
        <div class="tipoUnico">
            <div class="tipoUnidadUnica">
                <p>Valor</p>
            </div>
            <div class="unidadUnica">
                <p>${jugador.Valor}</p>
            </div>
        </div>
    </div>
    
</div>          
    <div class="juego">
        <h4>${jugador.Juego}</h4>
    </div>
    `;
    contenedor.appendChild(amiiboItem);
}

// Función para mostrar el botón de cargar más
function mostrarBotonCargar(contenedor) {
    const divBtnCargarMAs= document.createElement('div');
    divBtnCargarMAs.className = 'divBtnCargarMas';
    const botonCargarMas = document.createElement('button');
    botonCargarMas.textContent = 'Cargar más';

    botonCargarMas.classList.add('btnCargarMas', 'btnMasInformacion');

    divBtnCargarMAs.appendChild(botonCargarMas);

    botonCargarMas.addEventListener('click', () => {
        indice += jugadoresAMostrar;
        mostrarJugadores();
        eliminarBotonCargar(contenedor);
    });
    contenedor.appendChild(divBtnCargarMAs);
}

function eliminarBotonCargar(contenedor) {
    const botonCargarMas = contenedor.querySelector('.btnCargarMas');
    botonCargarMas.parentElement.remove();
}

// Llamar a la función para obtener los datos al cargar la página
document.addEventListener('DOMContentLoaded', obtenerDatos);
