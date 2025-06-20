// Sesión 1: Variables y Condicionales
// 5. Año bisiesto

let year;

do {
    year = parseInt(prompt("Ingrese un año"));
} while (isNaN(year) || year < 0);

if (year % 4 == 0 && year % 100 != 0) {
    alert(`El año ${year} es bisiesto`);
} else {
    alert(`El año ${year} no es bisiesto`);
}
