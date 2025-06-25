// Taller Práctico de JavaScript – Fundamentos intermedio S4
// 7. Botón que cuenta clics:
/*
Usa el DOM y closures para crear un botón que aumente un contador en pantalla cada
vez que se hace clic.
*/

// Función que crea el contador (clausura)
function sumar(){
    let contador = 0;
    return function() {
        contador++
        numero.innerHTML = contador;
    };
}

// Asociar el evento al botón
const boton = document.getElementById("boton");
const clics = sumar();

boton.addEventListener("click", clics);
