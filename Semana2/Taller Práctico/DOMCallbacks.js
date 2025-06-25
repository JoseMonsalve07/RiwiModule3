// Taller Práctico de JavaScript – Fundamentos intermedio S4
// 8. Agrega elementos al DOM con callbacks:
/*
Crea una función que reciba un callback, espere 2 segundos y luego agregue un párrafo
al DOM usando ese callback
*/

function esperarYAgregar(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}

function agregarParrafo(){
    let parrafo = document.createElement("p");
    parrafo.textContent = "Hola, aparecí después de 2 segundos";
    document.getElementById("contenedor").appendChild(parrafo);
}

esperarYAgregar(agregarParrafo);