// Sesión 2: Estructuras de Control y Funciones
// 10. Juego piedra, papel o tijera

alert("Bienvenido/a, hoy jugaremos PIEDRA, PAPEL O TIJERA. Suerte!");
let respuesta;
do{
    respuesta = prompt("Piedra, papel o tijera?").toLowerCase();
} while(respuesta != "piedra" && respuesta != "papel" && respuesta != "tijera");

function eleccionComputadora() {
    let opciones = ["piedra", "papel", "tijera"];
    let indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

let compu = eleccionComputadora();

if (
    (respuesta === "piedra" && compu === "tijera") ||
    (respuesta === "papel" && compu === "piedra") ||
    (respuesta === "tijera" && compu === "papel")
) {
    alert(`Tú elegiste: ${respuesta}\nEl sistema eligió: ${compu}\n!GANASTE!`)
} else if (compu === respuesta){
    alert(`Tú elegiste: ${respuesta}\nEl sistema eligió: ${compu}\n¡ES UN EMPATE!`)
} else {
    alert(`Tú elegiste: ${respuesta}\nEl sistema eligió: ${compu}\nPERDISTE :(`)
}
