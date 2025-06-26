// Crea un objeto con 3 propiedades
let person = {
    name: "Jose",
    age: 18,
    alias: "Joselo"
};

// Accede y muestra su valor 
console.log(person);
console.log("");

// Agrega una nueva propiedad
person.country = "Colombia";
console.log(person.country);
console.log("");

// Elimina una de las 3 primeras propiedades
delete person.alias;
console.log(person);
console.log("");

// Agrega una funcion e invocala
person.walk = function(){
    console.log(this.name + " camina");
}
person.walk();
console.log("");

// Itera las propiedades del objeto
for (let key in person){
    console.log(`${key}: ${person[key]}`);
};
console.log("");

// Crea un objeto anidado
let person2 = {
    name: "Jose",
    age: 18,
    alias: "Joselo",
    job: {
        name: "Developer",
        exp: 1,
        work: function(){
            console.log(person2.name + " is a " + this.name);
        }
    }
};
console.log(person2.job.name);
console.log("");

// Accede y muestra el valor de las propiedades anidadas
console.log(Object.values(person2.job));
console.log("");

// Comprueba si los dos objetos creados son iguales 
console.log(person == person2); // no son iguales en tipo
console.log(person === person2); // no son iguales ni en tipo ni en valor
console.log("");

// Comprueba si dos propiedades diferentes son iguales
console.log(person.name === person2.name); // ahora si es verdadero