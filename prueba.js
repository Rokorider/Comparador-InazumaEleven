
let contenedorJugadores = document.getElementById('contenedorJugadores');

fetch('prueba.php')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {

        data.forEach(jugador => {

            const jugadores = document.createElement('div');
            jugadores.className = 'jugadores';

            jugadores.innerHTML = `
                        <div class="jugador">
                        <div class="infoJugador">
                            <div class="imgJugador">
                            <img src="${jugador.imagen}" alt="${jugador.Nombre_Real}">
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
                                        <p>${jugador.Tiro}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="estadistica">
                                <div class="tipo">
                                    <div class="tipoUnidad">
                                        <p>Control</p>
                                    </div>
                                    <div class="unidad">
                                        <p>${jugador.Tiro}</p>
                                    </div>
                                </div>
                                <div class="tipo">
                                    <div class="tipoUnidad">
                                        <p>Defensa</p>
                                    </div>
                                    <div class="unidad">
                                        <p>${jugador.Tiro}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="estadistica">
                                <div class="tipo">
                                    <div class="tipoUnidad">
                                        <p>Rapidez</p>
                                    </div>
                                    <div class="unidad">
                                        <p>${jugador.Tiro}</p>
                                    </div>
                                </div>
                                <div class="tipo">
                                    <div class="tipoUnidad">
                                        <p>Aguante</p>
                                    </div>
                                    <div class="unidad">
                                        <p>${jugador.Tiro}</p>
                                    </div>
                                </div>
                            </div>  
                            <div class="estadistica">
                                <div class="tipoUnico">
                                    <div class="tipoUnidad">
                                        <p>Tiro</p>
                                    </div>
                                    <div class="unidad">
                                        <p>${jugador.Tiro}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>          
                            <div class="juego">
                                <h4>Inazuma Eleven 1</h4>
                            </div>
                    </div>
                        
                    `;
            contenedorJugadores.appendChild(jugadores);


        });

    })