// Clousure 1
/*
const a = "Hey! ";
function global() {
    const b = "¿Qué ";
    function local() {
        const c = "tal?";
        return a + b + c;
    }
    return local;
}

const clousure = global();
console.log(clousure());
*/



// Clousure 2
/*
const miContador = (function() {
    let _contador = 0;

    function incrementar() {
        return _contador++;
    }

    function decrementar() {
        return _contador--;
    }

    function valor() {
        return _contador;
    }

    return {
        incrementar,
        decrementar,
        valor
    }
})();

console.log(miContador.valor());
console.log(miContador.incrementar());
console.log(miContador.valor());
console.log(miContador.incrementar());
console.log(miContador.incrementar());
console.log(miContador.valor());
console.log(miContador.decrementar());
console.log(miContador.valor());
*/



// Clousure 3
/*
🟢 Ejercicio 1: Contador simple
Crea una función crearContador que devuelva otra función. Cada vez que se llame, debe incrementar un contador interno y devolverlo.
*/
/*
function crearContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    };
}

const contador = crearContador();

console.log(contador());
console.log(contador());
console.log(contador());
*/



// Clousure 4
/* 🟢 Ejercicio 2: Mensaje personalizado
Crea una función crearSaludador(nombre) que devuelva otra función que, al ejecutarse, diga "Hola, [nombre]!" */

/*
function crearSaludador(nombre) {
    return function() {
        return `Hola, ${nombre}`;
    };
};


const saludarJuan = crearSaludador("Juan");
console.log(saludarJuan());
*/



// Clousure 5
/* 🟡 Ejercicio 3: Caja secreta
Crea una función crearCajaSecreta que almacene un valor secreto. Solo se puede acceder a él a través de métodos verSecreto y cambiarSecreto. */
/*
function crearCajaSecreta(secretoInicial) {
    let secreto = secretoInicial;
    function verSecreto() {
        return secreto;
    };

    function cambiarSecreto(nuevoValor) {
        return secreto = nuevoValor;
    };

    return {
        verSecreto,
        cambiarSecreto
    };
}

const caja = crearCajaSecreta("1234");

console.log(caja.verSecreto()); // "1234"
caja.cambiarSecreto("abcd");
console.log(caja.verSecreto()); // "abcd"
*/



// Clousure 6
/* 🟡 Ejercicio 4: Generador de multiplicadores
Crea una función crearMultiplicador(factor) que devuelva una función que multiplica un número por ese factor. */
/*
function crearMultiplicador(factor) {
    let multiplicador = factor;

    function multiplicar(numero) {
        return multiplicador * numero;
    }

    return multiplicar
}

const porDos = crearMultiplicador(2);
console.log(porDos(5));

const porCinco = crearMultiplicador(5);
console.log(porCinco(10));
*/



// Clousure 7
/* 🔴 Ejercicio 5: Solo una vez
Crea una función soloUnaVez(fn) que devuelva una función que solo puede ejecutarse una vez. Después de eso, debe devolver "Ya fue ejecutada" */
/*
function soloUnaVez(callback) {
    let yaEjecutado = false;

    return function(){
        if (yaEjecutado){
            console.log("Ya fue ejecutado")
        } else {
            callback();
            yaEjecutado = true;
        }
    };
}

const saludar = soloUnaVez(() => console.log("¡Hola mundo!"));

saludar();
saludar(); 
saludar(); 
saludar();
*/



// Clousure 8
/* 🔴 Ejercicio 6: Temporizador de ejecución
Crea una función que acepte un número de segundos y devuelva una función que, al llamarla, diga cuántos segundos han pasado desde que se creó. */
/*
function crearTemporizador() {
    const inicio = Date.now();

    return function() {
        const ahora = Date.now();
        const segundos = Math.floor((ahora - inicio) / 1000);
        return `Han pasado ${segundos} segundos`;
    };
}

const tiempo = crearTemporizador();

setTimeout(() => {
    console.log(tiempo()); // Debería decir "Han pasado 2 segundos" (aproximadamente)
}, 2000);
*/
