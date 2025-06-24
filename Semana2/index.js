// console.group("Author details");
// console.log("Name: Jose");
// console.log("Year: 2025");
// console.groupEnd();





// let persona = {
//     nombre: 'Jose',
//     edad: 30,
//     saludar: function() {
//         console.log("Hola, soy " + this.nombre);
//     }
// };

// console.log(persona.nombre);
// console.log(persona["edad"])
// persona.saludar();

// Object.keys(persona);
// Object.values(persona);
// Object.entries(persona);




// Clousure
// function oficina() {
//     let laptop = "Dell XPS";
//     let claveWifi = "oficina123";

//     return function seguirTrabajando() {
//         console.log("Trabajando con " + laptop + " y clave " + claveWifi);
//     };
// }

// const pedro = oficina();
// pedro();






//Callback
function saludar(callback) { 
    console.log("Hola");
    callback();
}

function decirAdios() {
    console.log("Adiós");
}

saludar(decirAdios);