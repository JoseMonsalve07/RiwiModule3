const url = "http://localhost:3000/productos";

    // GET: Obtener productos
    function getProductos() {
      fetch(url)
        .then(response => response.json())
        .then(data => console.log("Productos disponibles:", data))
        .catch(error => console.error("Error al obtener productos:", error));
    }

    // POST: Agregar un nuevo producto
    function postProducto() {
      const nuevoProducto = { id: "4", nombre: "Monitor", precio: 200 };
      if (!validarProducto(nuevoProducto)) return;

      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoProducto)
      })
        .then(response => response.json())
        .then(data => console.log("Producto agregado:", data))
        .catch(error => console.error("Error al agregar producto:", error));
    }

    // PUT: Actualizar el producto con id 4
    function putProducto() {
      const productoActualizado = { nombre: "Tablet", precio: 1400 };
      if (!validarProducto(productoActualizado)) return;

      fetch(`${url}/4`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productoActualizado)
      })
        .then(response => response.json())
        .then(data => console.log("Producto actualizado:", data))
        .catch(error => console.error("Error al actualizar producto:", error));
    }

    // DELETE: Eliminar el producto con id 4
    function deleteProducto() {
      fetch(`${url}/4`, {
        method: 'DELETE'
      })
        .then(() => console.log("Producto eliminado"))
        .catch(error => console.error("Error al eliminar producto:", error));
    }

    // Validación
    function validarProducto(producto) {
      if (!producto.nombre || typeof producto.precio !== "number") {
        console.error("Datos del producto no válidos:", producto);
        return false;
      }
      return true;
    }
