// Taller Práctico de JavaScript – Fundamentos intermedio S4
// 3. Callback personalizado:
/*
Crea una función 'procesarUsuario(nombre, callback)' que imprima el nombre y luego
ejecute el callback.
*/


// Función que recibe un nombre y un callback
function procesarUsuario(nombre, callback){
    console.log(`Nombre: ${nombre}`);
    // Ejecutar el callback
    callback();
}

// Ejemplo de uso de la función con un callback personalizado
procesarUsuario("Jose", function(){
    console.log("Callback ejecutado");
});