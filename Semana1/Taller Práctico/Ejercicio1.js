// Sesión 1: Variables y Condicionales
// 1. Clasificación de edades

alert("¡Bienvenido/a al clasificador de edades!");

// Solicitar y validar el número de usuarios
let numberOfUsers;
do {
    numberOfUsers = parseInt(prompt("Por favor, ingrese la cantidad de usuarios:"));
} while (isNaN(numberOfUsers) || numberOfUsers <= 0);

// Array para almacenar la información de los usuarios
let users = [];

// Recopilar y clasificar la edad de cada usuario
for (let i = 1; i <= numberOfUsers; i++) {
    let age;
    do {
        age = parseInt(prompt(`Ingrese la edad del Usuario ${i}:`));
    } while (isNaN(age) || age < 0);

    users.push({
        name: `Usuario ${i}`,
        age: age,
        classifiedAge: classifyAge(age)
    });
}

// Mostrar la información clasificada
users.forEach(user => {
    alert(
        `Nombre: ${user.name}\nEdad: ${user.age}\nEdad clasificada: ${user.classifiedAge}`
    );
});

// Función para clasificar la edad
function classifyAge(age) {
    if (age <= 12) {
        return "Niñez";
    } else if (age <= 17) {
        return "Adolescencia";
    } else if (age <= 59) {
        return "Adulto";
    } else {
        return "Adulto mayor";
    }
}
