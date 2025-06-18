// Parte 1: Declaración y Asignación con Lógica Implícita

// Historia de Usuario 1: Perfil de Usuario Dinámico

let nombreUusuario = "Carlos Gómez";
const edadUsuario = 32;
let saldoCuenta = 1500.75;
let usuarioPremium

if (saldoCuenta >= 1000) {
    usuarioPremium = true;
    stat = "Activo";
} else {
    usuarioPremium = false
    stat = "Inactivo"
};

console.log(`Nombre: ${nombreUusuario}.\nEdad: ${edadUsuario}\nSaldo: ${saldoCuenta}\nEstado: ${stat}\nTipo de dato: ${typeof usuarioPremium}`);