// URL del json-server
const API_URL = "http://localhost:3001/eventos";

// Verificar respuesta HTTP y convertir a JSON
function checkResponse(res) {
    if (!res.ok) throw new Error(`Error ${res.status}:
    ${res.statusText}`);
    return res.json();
};

// GET: Listar todos los eventos
async function listar() {
    try {
        const res = await fetch(API_URL);
        const data = await checkResponse(res);
        console.log("Eventos: ", data);
    } catch (e) {
        console.error("Error al listar: ", e.message);
    }
}

// POST: Crear un nuevo evento
async function crear() { 
    const nombre = prompt("Nombre del evento:");
    const lugar = prompt("Lugar del evento:");
    const fecha = prompt("Fecha (YYYY-MM-DD):");


    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, lugar, fecha })
        });
        const data = await checkResponse(res);
        console.log("Evento creado:", data);
    } catch (e) {
        console.error("Error al crear:", e.message);
    }
}

// PUT: Actualizar evento existente
async function actualizar() {
    const id = prompt("ID del evento:");
    const nombre = prompt("Nuevo nombre:");
    const lugar = prompt("Nuevo lugar:");
    const fecha = prompt("Nueva fecha (YYYY-MM-DD):");

    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, lugar, fecha })
        });
        const data = await checkResponse(res);
        console.log("Evento actualizado:", data);
    } catch (e) {
        console.error("Error al actualizar:", e.message);
    }
}

// DELETE: Eliminar evento por ID
async function eliminar() {
    const id = prompt("ID del evento a eliminar:");
    try {
        const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (res.ok) {
            console.log("Evento eliminado.");
        } else {
            throw new Error(`Error ${res.status}`);
        }
    } catch (e) {
        console.error("Error al eliminar:", e.message);
    }
}

// Menú interactivo con prompt()
async function menu() {
    let opcion;
    do {
        opcion = prompt(
            `MENÚ CRUD EVENTOS\n` +
            `1. Listar\n` +
            `2. Crear\n` +
            `3. Actualizar\n` +
            `4. Eliminar\n` +
            `0. Salir\n` +
            `Elige una opción:`
        );


        switch (opcion){
            case "1": await listar(); break;
            case "2": await crear(); break;
            case "3": await actualizar(); break;
            case "4": await eliminar(); break;
            case "0": console.log("Adiós."); break;
            default: console.warn("Opción inválida")
        }
    } while (opcion !== "0");
}

// Ejecutar menú
menu();