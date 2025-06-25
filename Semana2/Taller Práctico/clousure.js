// Taller Práctico de JavaScript – Fundamentos intermedio S4
// 2. Closure contador:
/*
Crea una función 'crearContador()' que retorne otra función que incremente y retorne
un número cada vez que se llama.
*/

let i = 0;
function crearContador(){
    return function adicion(){
        i += 1;
        console.log(i);
    }
};

const jose = crearContador();

jose();
jose();
jose();
jose();
jose();
