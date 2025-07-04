// const url = "http://localhost:3000/productos";

// // GET: Obtener productos
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log("Productos disponibles: ", data))
//   .catch(error => console.error("Error al obtener productos:", error));

// // POST: Agregar un nuevo producto
// const nuevoProducto = { id: "4", nombre: "Monitor", precio: 200 };

// fetch(url, {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(nuevoProducto)
// })
//   .then(response => response.json())
//   .then(data => console.log("Producto agregado: ", data))
//   .catch(error => console.error("Error al agregar producto: ", error));

// // PUT: Actualizar el producto con id 4
// const productoActualizado = { nombre: "Laptop", precio: 1400 };

// fetch(`${url}/4`, {  // <-- Aquí se especifica el ID
//   method: 'PUT',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(productoActualizado)
// })
//   .then(response => response.json())
//   .then(data => console.log("Producto actualizado: ", data))
//   .catch(error => console.error("Error al actualizar producto: ", error));

// // DELETE: Eliminar el producto con id 4
// fetch(`${url}/4`, {  // <-- Aquí también se especifica el ID
//   method: 'DELETE'
// })
//   .then(() => console.log("Producto eliminado"))
//   .catch(error => console.error("Error al eliminar producto: ", error));

// // Función para validar un producto antes de enviarlo
// function validarProducto(producto) {
//   if (!producto.nombre || typeof producto.precio !== "number") {
//     console.error("Datos del producto no válidos");
//     return false;
//   }
//   return true;
// }

const url = "http://localhost:3000/productos";

    function cargarProductos() {
      fetch(url)
        .then(res => res.json())
        .then(productos => {
          const tbody = document.querySelector("#tabla-productos tbody");
          tbody.innerHTML = "";
          productos.forEach(producto => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
              <td>${producto.id}</td>
              <td>${producto.nombre}</td>
              <td>$${producto.precio}</td>
              <td>
                <button onclick="eliminarProducto('${producto.id}')">Eliminar</button>
              </td>
            `;
            tbody.appendChild(fila);
          });
        });
    }

    function agregarProducto() {
      const nombre = document.getElementById("nombre").value;
      const precio = parseFloat(document.getElementById("precio").value);
      if (!nombre || isNaN(precio)) {
        alert("Por favor ingresa nombre y precio válidos.");
        return;
      }

      const nuevoProducto = { nombre, precio };

      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoProducto)
      })
        .then(res => res.json())
        .then(() => {
          document.getElementById("nombre").value = "";
          document.getElementById("precio").value = "";
          cargarProductos();
        });
    }

    function eliminarProducto(id) {
      fetch(`${url}/${id}`, {
        method: "DELETE"
      })
        .then(() => cargarProductos());
    }

    window.onload = cargarProductos;