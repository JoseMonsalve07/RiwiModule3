// Sesión 2: Estructuras de Control y Funciones
// 7. Verificar número capicúa (palíndromo)

let numero;
do {
    numero = parseInt(prompt("Ingrese un número"));
}  while (isNaN(numero) || numero < 0);

function esCapicua(numero) {
    numero = numero.toString();
    return numero.split("").reverse().join("") === numero;
}

if (esCapicua(numero) === true){
    alert(`El número ${numero} es capicúa`);
} else {
    alert(`El número ${numero} no es capicúa`)
}