// Sesión 2: Estructuras de Control y Funciones
// 8. Contador de palabras

let texto = prompt("Ingrese un texto");

function contarPalabras(){
    texto = texto.split(" ");
    let longitudTexto = texto.length;
    if (texto == "") {
    longitudTexto = 0;
}
    return longitudTexto;
}

alert(`En el texto: "${texto}" hay ${contarPalabras()} palabras`)