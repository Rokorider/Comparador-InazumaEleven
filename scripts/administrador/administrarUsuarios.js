function obtenerDatos() {
    // Realizar una solicitud a la API 'prueba.php' utilizando fetch
    return fetch('../php/conexiones/datosUsuarios.php')
        // Procesar la respuesta como JSON
        .then(function (response) {
            return response.json();
        })
        // Manejar los datos obtenidos
        .then(function (data) {
            // Asignar los datos de los jugadores a la variable global 'jugadores'
            usuarios = data;
            // Devolver los datos de los jugadores
            console.log(usuarios);
            return usuarios;
        })
        // Manejar errores en caso de que la solicitud falle
        .catch(function (error) {
            console.error('Error al obtener los datos de jugadores:', error);
        });
}

let contenedorUsuarios = document.getElementById('contenedorUsuarios');

function mostrarUsuarios() {

    obtenerDatos().then(function (usuarios) {
        // Limpiar el contenedor de jugadores
        contenedorUsuarios.innerHTML = '';
        // Recorrer la lista de jugadores
        usuarios.forEach(function (usuario) {
            
            contenedorUsuarios.innerHTML += `
            <div class="usuario">
            <div class="fila">
                <div class="id">
                    <p>${usuario.id}</p>
                </div>
                <div class="nombre">
                    <p>${usuario.nombre}</p>
                </div>
            </div>
            <div class="fila">
                <div class="correo">
                    <p>${usuario.email}</p>
                </div>
            </div>
            <div class="fila">
                <div class="fecha">
                    <p>${usuario.ultimaConexion}</p>
                </div>
            </div>
            <div class="fila">
                <form class="formulario" action="../php/administrador/administrarUsuarios.php" method="post">
                    <input type="hidden" name="userId" value="${usuario.id}">
                    <input type="hidden" name="action" value="eliminar">
                    <input class="input" type="submit" value="Eliminar Usuario">
                </form>
                <form class="formulario" action="../php/administrador/administrarUsuarios.php" method="post">
                    <input type="hidden" name="userId" value="${usuario.id}">
                    <input type="hidden" name="action" value="conceder">
                    <input class="input" type="submit" value="Conceder Permisos">
                </form>
            </div>
        </div>
            `;
        });
    });
}
obtenerDatos();

mostrarUsuarios();