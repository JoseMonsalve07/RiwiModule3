// Seleccionamos todos los enlaces del menú
const links = document.querySelectorAll('nav a');

// Recorremos cada enlace y escuchamos el evento "click"
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevenimos el comportamiento por defecto del enlace

        const ruta = e.target.dataset.route; // Leemos el valor de data-route

        // Ocultamos todas las secciones con clase "view"
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active')
        });

        // Mostramos solo la sección correspondiente a la ruta
        const vista = document.getElementById(`vista-${ruta}`);
        if (vista) {
            vista.classList.add('active');

            // Aquí cargamos los usuarios si la vista es "users"
            if (ruta === "users") {
                cargarUsuarios();
            }
        }
    });
});

const url = "http://localhost:3000/usuarios";

// Función para obtener y mostrar los usuarios
function cargarUsuarios() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const tbody = document.querySelector("#tablaUsuarios tbody");
        tbody.innerHTML = "";

        data.forEach(usuario => {
            const fila = document.createElement("tr");

            fila.innerHTML = `
            <td>${usuario.name}</td>
            <td>${usuario.email}</td>
            <td>${usuario.phone}</td>
            <td>${usuario.enrollNumber}</td>
            <td>${usuario.dateOfAdmission}</td>
            <td>
                <button class="editar" data-id="${usuario.id}">✏️</button>
                <button class="eliminar" data-id="${usuario.id}">🗑️</button>
            </td>
            `;

            tbody.appendChild(fila);
        });
    })
    .catch(err => {
        console.error("Error al cargar usuarios:", err);
    });
}

// Referencia al formulario
const formUsuario = document.getElementById("formularioUsuario");

formUsuario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto (recargar la página)

    const nuevoUsuario = {
        name: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("telefono").value,
        enrollNumber: document.getElementById("matricula").value,
        dateOfAdmission: document.getElementById("fecha").value
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoUsuario)
    })
    .then(res => res.json())
    .then(() => {
        formUsuario.reset(); // Limpia el formulario
        modalUsuario.classList.add("oculto"); // Cierra el modal
        cargarUsuarios(); // Vuelve a mostrar la lista actualizada
    })
    .catch(err => console.error("Error al agregar usuario:", err));
});

const btnNuevoUsuario = document.getElementById("btnAgregar");
const modalUsuario = document.getElementById("modalUsuario");
const cerrarModal = document.getElementById("cerrarModal");

// Mostrar modal
btnNuevoUsuario.addEventListener("click", () => {
    modalUsuario.classList.remove("oculto");
});

// Ocultar modal
cerrarModal.addEventListener("click", () => {
    modalUsuario.classList.add("oculto");
});

// Cerrar al hacer clic fuera del contenido
modalUsuario.addEventListener("click", (e) => {
    if (e.target === modalUsuario) {
        modalUsuario.classList.add("oculto");
    }
});