// Sesión 1: Variables y Condicionales
// 3. Verificación múltiple

let number;
do {
    number = parseInt(prompt("Inresa un número"));
} while (isNaN(number) || number <= 0);