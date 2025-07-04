const API_URL = "http://localhost:3000/productos";
const form = document.getElementById("form-producto");
const lista = document.getElementById("lista-productos");
const nombreInput = document.getElementById("nombre");
const precioInput = document.getElementById("precio");
const idInput = document.getElementById("producto-id");

// 🔄 Obtener y mostrar productos
function cargarProductos() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      lista.innerHTML = "";
      data.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>${producto.nombre}</strong> — $${producto.precio}
          <button onclick="editarProducto(${producto.id}, '${producto.nombre}', ${producto.precio})">✏️</button>
          <button onclick="eliminarProducto(${producto.id})">🗑️</button>
        `;
        lista.appendChild(li);
      });
    });
}

// 🟢 Crear o actualizar producto
form.addEventListener("submit", e => {
  e.preventDefault();

  const id = idInput.value;
  const nombre = nombreInput.value.trim();
  const precio = parseFloat(precioInput.value);

  if (!nombre || isNaN(precio)) {
    alert("Completa bien los datos.");
    return;
  }

  const producto = { nombre, precio };

  const metodo = id ? "PUT" : "POST";
  const url = id ? `${API_URL}/${id}` : API_URL;

  fetch(url, {
    method: metodo,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto)
  })
    .then(() => {
      form.reset();
      cargarProductos();
    });
});

// ✏️ Editar producto
function editarProducto(id, nombre, precio) {
  nombreInput.value = nombre;
  precioInput.value = precio;
  idInput.value = id;
}

// 🗑️ Eliminar producto
function eliminarProducto(id) {
  fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  }).then(() => cargarProductos());
}

// ▶️ Inicializar
cargarProductos();
