/* =========================
   AUTH.JS
   Control de sesión básico
========================= */

// Guardar sesión
function iniciarSesion(email, nombre = "") {
    localStorage.setItem("usuario", email);
    if (nombre) {
        localStorage.setItem("nombre", nombre);
    }
}

// Cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("nombre");
    window.location.href = "../login.html";
}

// Verificar si hay sesión
function estaLogueado() {
    return localStorage.getItem("usuario") !== null;
}

// Proteger página (redirige si no hay login)
function protegerPagina(rutaLogin = "login.html") {
    if (!estaLogueado()) {
        alert("Debes iniciar sesión para acceder");
        window.location.href = rutaLogin;
    }
}

// Obtener usuario actual
function usuarioActual() {
    return localStorage.getItem("usuario");
}

// Obtener nombre del usuario
function nombreUsuario() {
    return localStorage.getItem("nombre");
}
