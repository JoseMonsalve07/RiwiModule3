// Sesión 1: Variables y Condicionales
// 2. Comparador de tres números

let numberOne;
do{
    numberOne = parseInt(prompt("Ingrese el primer número:"));
} while (isNaN(numberOne) || numberOne < 0);

let numberTwo;
do{
    numberTwo = parseInt(prompt("Ingrese el segundo número:"));
} while (isNaN(numberTwo) || numberTwo < 0);

let numberThree;
do{
    numberThree = parseInt(prompt("Ingrese el tercer número:"));
} while (isNaN(numberThree) || numberThree < 0);

let maxNumber = Math.max(numberOne, numberTwo, numberThree);

if (numberOne == numberTwo && numberOne != numberThree) {
    alert(`Empate entre el número 1 y el número 2: ${numberOne}`);
} else if (numberOne == numberThree && numberOne != numberTwo) {
    alert(`Empate entre el número 1 y el número 3: ${numberOne}`);
} else if (numberTwo == numberThree && numberTwo != numberOne) {
    alert(`Empate entre el número 2 y el número 3: ${numberTwo}`);
} else if (numberOne == numberTwo && numberTwo == numberThree) {
    alert(`Empate entre los tres números`);
} else { 
    alert(`El número mayor es: ${maxNumber}`);
}
