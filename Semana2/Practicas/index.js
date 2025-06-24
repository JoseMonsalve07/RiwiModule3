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

// console.log(Object.keys(persona));
// console.log(" ")
// console.log(Object.values(persona));
// console.log(" ")
// console.log(Object.entries(persona));




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
// function saludar(callback) { 
//     console.log("Hola");
//     callback();
// }

// function decirAdios() {
//     console.log("Adiós");
// }

// saludar(decirAdios);





// let numbers = [1, 2, 3];
// numbers.push(4);

// let doubled = numbers.map(num => num *2)
// console.log(doubled)





// Sets
// let mySet = new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add(1);
// mySet.add(44);
// console.log(mySet, mySet.has(44));

// mySet.delete(44);
// console.log(mySet, mySet.size)





// Maps
// let myMap = new Map();

// myMap.set('name', 'Jose');
// myMap.set(123, 'ID');

// console.log(myMap.get('name'));





// Visualización avanzada de datos con console.table()
// const authors = [
//     { name: 'Jose', age: 18 },
//     { name: 'Riwi', age: 2}
// ];

// console.table(authors)





// for...of
// const developers = [
//     { name: 'Jose', language: "JavaScript" },
//     { name: 'Riwi', language: "FullStack"},
//     { name: 'Samuel', language: "C#"}
// ];
// // Usando for...of para iterar sobre cada developer
// for (const developer of developers) {
//     console.log(`${developer.name} is skilled in ${developer.language}`);
// }





// for...in
// const teamLeader = { name: 'David', language: 'Front'};

// // Usando x para iterar sobre las propiedades de un solo objeto developer
// for (const key in teamLeader) {
//     console.log(`${key}: ${teamLeader[key]}`);
// }





// forEach (Iterar sobre arrays)
// const coders = [
//     { name: 'Jose', cohorte: 1 },
//     { name: 'Riwi', cohorte: 2},
//     { name: 'Samuel', cohorte: 3}
// ];

// // Usando forEach para iterar sobre cada coder
// coders.forEach(coder=> {
//     console.log(`${coder.name} is coder cohort ${coder.cohorte}`);
// });





// ¿Cuál es la diferencia entre for...of y for...in y cuándo usarías cada uno? 
// for...of recorre valores de iterables (como arrays), mientras que for...in recorre las claves de un objeto. 

//  Algunos conceptos claves a recordar: 
// - Los sets permiten trabajar con valores únicos, mientras que los maps manejan pares clave-valor. 
// - typeof es esencial para verificar el tipo de datos. 
// - Los bucles for...of y for...in facilitan el recorrido de estructuras de datos. 