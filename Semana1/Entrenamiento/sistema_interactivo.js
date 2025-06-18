// Entrenamiento - Módulo 3 Semana 1
// Coder: Jose Manuel Bustamante Monsalve

// Mensaje de bienvenida (en consola y en prompt)
console.log("¡Bienvenido/a al sistema interactivo de mensajes!")
alert("¡Bienvenido/a al sistema interactivo de mensajes!")

// Solicitud de datos
let name = prompt("Por favor, ingresa tu nombre:")
let age = prompt("Muy bien! Ahora, por favor, ingresa tu edad:")

// Validación de edad
while (isNaN(age)) {
    // Se muestra el error tanto en la consola como en un prompt
    alert("Error: por favor ingresa una edad válida (números).");
    console.error("Error: por favor ingresa una edad válida (números).");
    age = prompt("Por favor, ingresa tu edad:")
}

// Se muestran en la consola la edad y el nombre ingresados.
console.log(`Nombre: ${name}\nEdad: ${age}`)

// Se valida si es mayor de edad o no
if (age >= 18){
    // Se muestran los mensajes tanto en la consola como en un prompt
    console.log(`Hola ${name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
    alert(`Hola ${name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
} else {
    // Se muestran los mensajes tanto en la consola como en un prompt
    console.log(`Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
    alert(`Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
}