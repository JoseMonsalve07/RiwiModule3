// Sesión 2: Estructuras de Control y Funciones
// 9. Validación de contraseña segura

let contraseña = prompt("Cree su contraseña:");

function validarContraseña(contraseña) {
    let mayus = /[A-Z]/.test(contraseña);
    if (mayus == false){
        alert("Faltó incluir mayuscula");
    }
    let minus = /[a-z]/.test(contraseña);
    if (minus == false) {
        alert("Faltó incluir minuscula");
    }
    let num = /[0-9]/.test(contraseña);
    if (num == false) {
        alert("Faltó incluir número");
    }
    let caracter =/[!@#$%^&*]/.test(contraseña);
    if (caracter == false) {
        alert("Faltó incluir caracter");
    }
    return mayus && minus && num && caracter;
}

if (validarContraseña(contraseña) == true){
    alert("Contraseña creada correctamente.");
}