// Evento al enviar el formulario
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el recargo de la página al enviar el formulario

    // Expresión que permite solo letras (mayúsculas/minúsculas) y espacios
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    // Se obtienen los valores del formulario y se quitan espacios
    let nombre = document.getElementById("name").value.trim();
    let edad = parseInt(document.getElementById("age").value); // Convierte la edad a número entero

    // Validación del nombre usando la expresión
    if (!regex.test(nombre)) {
        alert("Nombre inválido. Solo letras y espacios.");
        return;
    }

    // Validación de la edad, debe ser un número positivo
    if (isNaN(edad) || edad <= 0){
        alert("Edad inválida. Debe ser un número positivo o mayor que 0.");
        return;
    }

    // Validación adicional por si los campos vienen vacíos o no existen
    if (!nombre || !edad) {
        document.getElementById("output").textContent = "Los elementos del formulario no existen."
        return;
    }

    // Almacena los datos en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("edad", edad);

    // Muestra el mensaje con los datos en pantalla
    document.getElementById("output").textContent = `Hola ${nombre}, tu edad es ${edad}`
})

// Función para limpiar los datos guardados y la pantalla
function clearData() {
    localStorage.clear(); // Elimina todos los datos del localStorage
    document.getElementById("output").textContent = "" // Limpia el contenido mostrado
}

// Evento que se activa al hacer clic en cualquier parte del body
document.body.addEventListener("click", () => {
    // Obtiene el contador de clicks desde sessionStorage
    let contador = sessionStorage.getItem("contador");
    contador = parseInt(contador) || 0;
    contador += 1;
    sessionStorage.setItem("contador", contador); // Guarda el nuevo valor

    // Muestra en pantalla la cantidad de interacciones con la página
    if (!contador) {
        document.getElementById("contadorOutput").textContent = 'Has interactuado con la página ' + 0 + " veces";
    } else {
        document.getElementById("contadorOutput").textContent = 'Has interactuado con la página ' + contador + " veces";
    }
});

// Evento que se ejecuta al cargar la página
window.onload = function () {
    // Recupera los datos guardados del localStorage
    const nombre = localStorage.getItem("nombre");
    const edad = localStorage.getItem("edad");

    // Recupera el contador de sessionStorage
    let contador = sessionStorage.getItem("contador");

    // Si hay datos, los muestra en pantalla
    if (nombre && edad) {
        document.getElementById("output").textContent = `Hola ${nombre}, tu edad es ${edad}`
    }

    // Muestra el contador de interacciones al cargar la página
    if (contador) {
        document.getElementById("contadorOutput").textContent = 'Has interactuado con la página ' + contador + " veces";
    } else {
        document.getElementById("contadorOutput").textContent = 'Has interactuado con la página ' + 0 + " veces";
    }
    
}

