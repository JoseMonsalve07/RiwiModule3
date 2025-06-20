// Sesión 1: Variables y Condicionales
// 3. Verificación múltiple

let number;
do {
    number = parseInt(prompt("Ingresa un número"));
} while (isNaN(number) || number <= 0);

if ((number % 3 == 0) && (number % 5 == 0)) {
    alert(`El número ${number} es divisible entre 3 y 5`);
} else if (number % 3 == 0) {
    alert(`El número ${number} es divisible entre 3`);
} else if (number % 5 == 0) {
    alert(`El número ${number} es divisible entre 5`);
} else {
    alert(`El número ${number} no es divisible por ninguno`)
}