<header>

    <figure class="logoNav">
        <a href="../paginasComunes/comparador.php"><img src="../img/logo/InazumaElevenComparadorLogo2.png" alt="Logo Inazuma Eleven" /></a>
    </figure>

    <nav>
        <div class="desplegable">
            <div class="botonDesplegable" id="botonDesplegable">
                <p>[ Otras Páginas ]</p>
            </div>
            <div class="menuNavegador" id="menuNavegador">
                <ul>
                    <li>
                        <a href="../paginasComunes/jugadores.php">Jugadores</a>
                    </li>
                    <li>
                        <a href="../usuario/crearJugador.php">Crear Jugador</a>
                    </li>
                    <li>
                        <a href="../usuario/comentarios.php">Futblog</a>
                    </li>
                </ul>
            </div>
            
        </div>
    </nav>

    <figure class="user">
        <img src="../img/user-circle-svgrepo-com.svg" alt="icono sesión">
        <p><?php echo ($_SESSION['usuario']); ?></p>
    </figure>
    <figure class="cerrarSesion">
        <a id="cerrarSesion" href="../php/login_logout/logout.php"><img src="../img/exit.svg" alt="Cerrar Sesión" /></a>
    </figure>

</header>
