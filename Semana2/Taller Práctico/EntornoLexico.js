// Taller Práctico de JavaScript – Fundamentos intermedio S4
// 5. Entorno léxico:
/*
Crea una función que contiene otra función y demuestra que la función interna recuerda
variables de su entorno, aunque el externo haya terminado.
*/

function funcion1(){
    let number = 0;
    console.log(`Función1: Oye Funcion2!, sumas el número ${number}`);
    function funcion2(){
        number += 1;
        console.log(`Funcion2: Sí, tú número sumado 1 da como resultado el ${number}`);
    }
    return funcion2
}

const llamar = funcion1();
llamar();
llamar();
llamar();
llamar();