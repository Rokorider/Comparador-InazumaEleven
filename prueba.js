
    // Realizar una solicitud HTTP GET al archivo PHP que devuelve el JSON
    fetch('prueba.php')
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            // Manipular los datos JSON
            const contenedorJugadores = document.getElementById('jugadores');
            data.forEach(jugador => {
                // Crear un elemento de lista para cada usuario y añadirlo al contenedorAmiibo
                const amiiboItem = document.createElement('div');
                amiiboItem.className = 'jugador'; // Agregar una clase para estilizar si es necesario
                amiiboItem.innerHTML = `               
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
                                                <p>${jugador.Augante}</p>
                                            </div>
                                        </div>
                                    </div>  
                                    <div class="estadistica">
                                        <div class="tipo">
                                            <div class="tipoUnidad">
                                                <p>Valor</p>
                                            </div>
                                            <div class="unidad">
                                                <p>${jugador.Valor}</p>
                                            </div>
                                        </div>
                                        <div class="tipo">
                                            <div class="tipoUnidad">
                                                <p>Valor</p>
                                            </div>
                                            <div class="unidad">
                                                <p>${jugador.Valor}</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>          
                                    <div class="juego">
                                        <h4>Inazuma Eleven 1</h4>
                                    </div>
                            
                `;
                contenedorJugadores.appendChild(amiiboItem);
            });
        })
        .catch(error => {
            // Manejar errores de la solicitud
            console.error('Error al obtener los datos de usuarios:', error);
        });
