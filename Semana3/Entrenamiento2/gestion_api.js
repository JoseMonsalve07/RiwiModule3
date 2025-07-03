const url = "http://localhost:3000/productos";

fetch(url)
.then(response => response.json())
.then(data => console.log("Prouctos disponibles: ", data))
.catch(error => console.error("Erorr al obtener productos:", error));

const nuevoProducto = { id: "4", nombre: "Monitor", precio: 200};

fetch(url, {
    method: POST,
    headers : {`Content-Type`: aplicaciones}
}) 