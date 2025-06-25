// Taller Práctico de JavaScript – Fundamentos intermedio S4
// 4. Scope y errores de referencia:
/*
Corrige un código donde una variable declarada con let se imprime antes de su
declaración, causando ReferenceError.
*/

//      EJECUTAR SELECCIONANDO LÍNEAS DE CÓDIGO     //

console.log(mensaje); // ReferenceError: Cannot acces 'mensaje' before initialization
let mensaje = "hola mundo";

// Código corregido
let message = "hi world";
console.log(message); // Imprime: hi world 

