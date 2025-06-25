// Taller Práctico de JavaScript – Fundamentos intermedio S4
// 9. Crea un 'reloj tonto':
/*
Cada segundo, muestra en pantalla el número de segundos que han pasado desde que
se hizo clic en un botón.
*/

const boton = document.getElementById("iniciar");
const spanTiempo = document.getElementById("tiempo");
let segundos = 0;
let intervaloActivo = false; // Paraevitar múltiples contadores

boton.addEventListener("click", function(){
    if (intervaloActivo) return; // Evita que se inicie varias veces

    intervaloActivo = true;

    setInterval(function() {
        segundos++;
        spanTiempo.textContent = segundos;
    }, 1000);
});