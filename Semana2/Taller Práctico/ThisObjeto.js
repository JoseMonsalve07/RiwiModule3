// Taller Práctico de JavaScript – Fundamentos intermedio S4
// 6. Uso de 'this' en un objeto:
/*
Crea un objeto con un método que salude usando 'this.nombre'.
*/

let persona = {
    nombre: "Jose",
    saluda: function(){
        console.log(`Hola, soy ${this.nombre}`);
    }
}

persona.saluda();