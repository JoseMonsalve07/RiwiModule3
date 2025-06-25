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





// Asincronismo
// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 1000);
// console.log("3");





// const miPromesa = new Promise(function(resolve, reject){
//     let exito = true;
//     if (exito){
//         resolve("todo bien");
//     } else {
//         reject("algo va mal");
//     }
// });

// console.log("Hola mundo");

// async function ejecutarPromesa() {
//     try {
//         const resultado = await miPromesa;
//         console.log(resultado);
//     } catch (error){
//         console.log(error);
//     }
// }

// ejecutarPromesa();





// function Persona(nombre) {
//     this.nombre = nombre;
// }

// Persona.prototype.saludar = function() {
//     console.log(this.nombre);
// }

// Persona.prototype.saludarA = function(world) {
//     console.log(world);
// }

// const pedro = new Persona("pedro");

// pedro.saludar();
// pedro.saludarA("Hola");





// class Persona {
//     constructor(nombre) {
//         this.nombre = nombre;
//     }

//     saludar() {
//         console.log(`Hola, soy ${this.nombre}`);
//     }
// }

// const maria = new Persona('María');
// maria.saludar();





// class Persona {

//      altura ;
//      peso;
//      edad;
//      genero;

//     constructor(peso){
//         this.peso=peso;
//     }

//      definirAltura(altura){
//         this.altura=altura;
//     }

//      comer(){
//         console.log("comer");
//     }

//      correr(){
//         console.log("corre");
//     }

//      mostrarAltura(){
//         console.log(this.altura);
//     }

//      mostraPeso(){
//         console.log(this.peso)
//     }
// }


// const persona1 = new Persona(18);
// persona1.mostraPeso();
// persona1.definirAltura(1.75);
// persona1.mostrarAltura();
// const persona2 = new Persona(50);
// persona2.definirAltura(2.18);
// persona2.mostrarAltura();