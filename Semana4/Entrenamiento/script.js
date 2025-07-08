document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    let nombre = document.getElementById("name").value.trim();
    let edad = parseInt(document.getElementById("age").value);

    if (!regex.test(nombre)) {
        alert("Nombre inválido. Solo letras y espacios.");
        return;
    }

    if (isNaN(edad) || edad <= 0){
        alert("Edad inválida. Debe ser un número positivo o mayor que 0.");
        return;
    }

    if (!nombre || !edad) {
        document.getElementById("output").textContent = "Los elementos del formulario no existen."
        return;
    }

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("edad", edad);
    document.getElementById("output").textContent = `Hola ${nombre}, tu edad es ${edad}`
})

function clearData() {
    localStorage.clear();
    document.getElementById("output").textContent = ""
}

document.body.addEventListener("click", () => {
    let contador = sessionStorage.getItem("contador");
    contador = parseInt(contador) || 0;
    contador += 1;
    sessionStorage.setItem("contador", contador);
    if (!contador) {
        document.getElementById("contadorOutput").textContent = 'Has interactuado con la página ' + 0 + " veces";
    } else {
        document.getElementById("contadorOutput").textContent = 'Has interactuado con la página ' + contador + " veces";
    }
});

window.onload = function () {
    const nombre = localStorage.getItem("nombre");
    const edad = localStorage.getItem("edad");
    let contador = sessionStorage.getItem("contador");
    if (nombre && edad) {
        document.getElementById("output").textContent = `Hola ${nombre}, tu edad es ${edad}`
    }
    if (contador) {
        document.getElementById("contadorOutput").textContent = 'Has interactuado con la página ' + contador + " veces";
    } else {
        document.getElementById("contadorOutput").textContent = 'Has interactuado con la página ' + 0 + " veces";
    }
    
}