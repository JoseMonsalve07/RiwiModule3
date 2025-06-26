class Person {
    constructor(name, age, alias){
        this.name = name;
        this.age = age;
        this.alias = alias;
    };
};

let person = new Person("Jose", 18, "Joselo");
let person2 = new Person("Juan", 19, "Juancito");
console.log(person);
console.log(person2);
console.log("");

// Valores por defecto

class DefaultPerson {
    constructor(name = "Sin nombre", age = 0, alias = "Sin alias"){
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

let person3 = new DefaultPerson();
let person4 = new DefaultPerson("Emilio", 21);
console.log(person3);
console.log(person4);
console.log("");

// Acceso de propiedades
console.log(person4.age);
console.log(person4["alias"]);
console.log("");

// Funciones

class Person2 {
    constructor(name, age, alias){
        this.name = name;
        this.age = age;
        this.alias = alias;
    };
    walk(){
        console.log("La persona camina");
    };
};

let person5 = new Person2("moure", 34, "MoureDev");
console.log(person5);
person5.walk();
console.log("");

// Propiedades privadas

class PrivatePerson {
    #banck // Se define que la propiedad será privada con #
    constructor(name, age, alias, banck){
        this.name = name;
        this.age = age;
        this.alias = alias;
        this.#banck = banck;
    };
    pay(){
        this.#banck;
    };
};

let person6 = new PrivatePerson("Juan", 21, "Juanchis", "Bancolombia");
console.log(person6.banck); // No podemos acceder a banck ya que es privado. Imprime: undefinded.
console.log("");

// Herencia 

class Animal {
    constructor(name) {
        this.name = name;
    };

    sound(){
        console.log("El animal emite un sonido genérico");
    };
}

class Dog extends Animal{
    sound(){
        console.log("Guau");
    };

    run(){
        console.log("El perro corre");
    };
}

class Fish extends Animal {
    constructor(name, size){
        super(name);
        this.size = size;
    }

    swim(){
        console.log("El pez nada");
    };
};

let myDog = new Dog("Rocky");
myDog.run();
myDog.sound();

let myFish = new Fish("RockyFish", 10);
myFish.swim();
myFish.sound();
console.log("");

// Método estáticos

class MathOperations{
    static sum(a,b){
        return a + b;
    };
};

console.log(MathOperations.sum(5, 10));