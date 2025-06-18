// console.log("Hola mundo");





// let numero = 10;
// let texto = "El valor es: "





// console.log(texto);
// console.log(typeof texto);





// let num = 123;
// console.log(String(num));





// console.log(parseInt("123"));
// console.log(parseFloat("123.45"))





// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean("Hola"));
// console.log(Boolean(""));





// function saludar(){
//     console.log("Hola Mundo")
// }
// saludar();





// function sumar(num1, num2){
//     let resultado = num1 + num2;
//     return resultado;
// }
// sumar(10, 5);
// let miSuma = sumar(10, 5);
// console.log("El resultado de mi suma es: " + miSuma);





// let edad = 17;
// if (edad>=18){
//     console.log("Eres mayor de edad, puedes pasar.");
// }
// else if (edad>=16){
//     console.log("Eres casi mayor de edad, puedes pasar con un adulto.");
// }
// else{
//     console.log("Eres menor de edad, no puedes pasar.")
// }




// const edad = 20;
// const puedeBeber = edad >= 18 ? "Sí, puede beber alcohol." : "No, aún no puede beber alcohol";
// console.log(puedeBeber);





// let diaSemana = "Sabado";
// let mensaje;
// switch (diaSemana){
//     case "Lunes":
//         mensaje = "Inicio de semana laboral.";
//         break;
//     case "Viernes":
//         mensaje = "¡Casi fin de semana!";
//         break;
//     case "Sabado":
//     case "Domingo":
//         mensaje = "Es fin de semana";
//         break;
//     default:
//         mensaje = "Semana";
//     }
// console.log(mensaje);





// for (let i = 0;  i < 5; i++){
//     console.log("Repetición número: " + i);
// }





// let contador = 0;
// while (contador < 3){
//     console.log("El contador es: " + contador);
//     contador++;
// }





// let i = 0;
// do{
//     console.log("Valor de i: " + i);
//     i++;
// }
// while (i<0);





// const persona = {
//     nombre: "Elena",
//     edad: 28,
//     ciudad: "Bogotá"
// };
// for (let propiedad in persona){
//     console.log(`${propiedad}: ${persona[propiedad]}`)
// }





// const frutas = ["manzana", "banana", "cereza"];
// for(let fruta of frutas){
//     console.log(`Me gusta la ${fruta}.`);
// }
// for (let letra of "Hola"){
//     console.log(letra);
// }





// const coder = "Jose"
// let inverted =
//     `"Hello", ${coder}
//     This is an example of the potential
//     of the use of backticks
//     year: ${2024+1}`;

// console.log(inverted)





// let skills = "HTML, CSS";
// console.assert(skills.includes("JavaScript"), "the coder does not know javascript")





// let option;
// do{
//     console.log("1. Say Hello");
//     console.log("2. Exit"),

//     option = 1; //Simulate user input

//     if (option === 1){
//         console.log("Hello");
//     }

//     break;
// }   while (option !== 2);





// const skills = ["HTML", "CSS", "JavaScript"];

// const coder = {
//     name: "Jose",
//     age: 28,
//     company: "Riwi",
//     skills: skills
// }

// console.log(coder.name);
// console.log(coder["skills"][2])

// coder.age = 25;
// console.log(coder.age)

// coder.country = "Colombia";
// console.log(coder.country)





// Objetos definicion en el codigo
// const persona = {
//     nombre: "Maria",
//     edad: 25,
//     ciudad: "Bogota",
//     esEstudiante: false,
//     hobbies: ["pintar", "cocinar"],
//     direccion: {
//         calle: "Carrera 10",
//         numero: 15
//     }
// };
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.esEstudiante);
// console.log(persona.hobbies[0], persona.hobbies[1])
// console.log(persona.direccion.calle, persona.direccion.numero)





// // Set definicion en el codigo 
// const miSet = new Set();
// miSet.add(1);
// miSet.add(2);
// miSet.add(3);
// miSet.add(2); // Este set será ignorado porque ya existe
// console.log(miSet);
// miSet.add("hola");
// miSet.add( { nombre: "Juan" } );
// console.log(miSet);
// console.log(miSet.has(1));
// console.log(miSet.has(4));
// miSet.delete(2);
// console.log(miSet);





// let nombreDeUsuario = undefined;
// const nombreParaMostrar = nombreDeUsuario || "Invitado";
// console.log(`Bienvenido, ${nombreParaMostrar}.`);