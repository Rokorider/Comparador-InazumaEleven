<header>

    <figure class="logoNav">
        <a href="../paginasComunes/comparador.php"><img src="../img/logo/InazumaElevenComparadorLogo2.png" alt="Logo Inazuma Eleven" /></a>
    </figure>

    <nav>
        <ul>
            <li>
                <a href="../paginasComunes/jugadores.php">Jugadores</a>
            </li>
            <li>
                <a href="../usuario/crearJugador.php">Crear Jugador</a>
            </li>
        </ul>
    </nav>

    <figure class="user">
        <a href="../paginasComunes/paginasErrores/mantenimiento.html"><img src="../img/user-circle-svgrepo-com.svg" alt=""></a>
        <p><?php echo ($_SESSION['usuario']); ?></p>
    </figure>
    <figure class="cerrarSesion">
        <a href="../php/login_logout/logout.php"><img src="../img/exit.svg" alt="Cerrar Sesión" /></a>
    </figure>

</header>