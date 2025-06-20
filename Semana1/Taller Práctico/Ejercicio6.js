// Sesión 2: Estructuras de Control y Funciones
// 6. Generar patrón de triángulo

let n; 
do {
   n = parseInt(prompt("Ingrese la cantidad de filas"));
} while (isNaN(n) || n <= 0);

// Declaramos una función llamada generarTriangulo que recibe un número n
function generarTriangulo(n) {
    let resultado = "";  // Creamos una variable vacía donde guardaremos el patrón del triángulo
    // Iniciamos un bucle que va desde 1 hasta n (inclusive)
    for (let i = 1; i <= n; i++) {
        // En cada vuelta del bucle:
        // - Usamos "*".repeat(i) para repetir el asterisco i veces
        // - Agregamos un salto de línea al final con "\n"
        // - Sumamos esa línea al contenido actual de la variable resultado
        resultado += "*".repeat(i) + "\n";
    };
     // Al terminar el bucle, devolvemos todo el triángulo como un solo texto
    return resultado;
};

alert(generarTriangulo(n))