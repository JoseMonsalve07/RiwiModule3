// Sesión 1: Variables y Condicionales
// 4. Validación de acceso con rol

let usuario = prompt("Ingrese su usuario");
let rol = prompt("Ingrese su rol");

if (usuario === "admin" && rol === "superusuario") {
    alert("Hola admin, tienes acceso.");
} else {
    alert("No tienes acceso.")
}
