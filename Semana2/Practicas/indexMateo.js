let person1 = {
    name: "David",
    age: 40,
    alias: "deivis"
};

// Acceder a propiedades

// Llamada por punto
console.log("Persona 1");
console.log(person1.name);

// Notación de corchetes
console.log(person1["name"]);

// Modificcación propiedades
person1.name = "Isaac"; // Cambiar valor
person1.age = 23;

// Tipo de dato
console.log(typeof person1.age);

// Eliminar propiedades
delete person1.age;

// Añadir propiedades
person1.email = "email@gmail.com";
person1["age"] = 23;

console.log(person1);
console.log("");
console.log("Persona 2");

// Métodos
let person2 = {
    name: "Jose",
    age: 18,
    alias: "Monsalve",
    walk: function(){
        console.log("La persona camina");
    }
};

person2.walk();
console.log("");
console.log("Persona 3");

// Anidación de objetos
let person3 = {
    name: "Joselo",
    age: 18,
    alias: "Joselin",
    walk: function(){
        console.log("La persona camina");
    },
    job: {
        name: "Development",
        exp: 1,
        work: function(){
            console.log("La persona trabaja");
        }
    }
};
console.log(person3);

// Accediendo a los valores de los objetos
console.log(person3.job.name);
console.log("");
console.log("Persona 4");

// Igualdad de objetos
let person4 = {
    name: "Joselo",
    age: 18,
    alias: "Joselin",
    walk: function(){
        console.log("La persona camina");
    },
    job: {
        name: "Development",
        exp: 1,
        work: function(){
            console.log(`${this.name} persona trabaja`);
        }
    }
};
person4.job.work();

console.log("")

console.log(person3 == person4); // no son iguales en tipo
console.log(person3 === person4); // no son iguales ni en tipo ni en valor
console.log(person3.name === person4.name); // ahora si es verdadero

console.log("");

// Iteración

for(let key in person4){
    console.log(`${key}: ${person4[key]}`);
}

// Funciones como objetos
function Person(name, age){
    this.name = name;       // NO ES BUENA PRACTICA!!!
    this.age = age;
}