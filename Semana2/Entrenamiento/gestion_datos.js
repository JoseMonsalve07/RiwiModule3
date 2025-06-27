// Inicialización del proyecto
console.log("¡Gestión de Datos con Objetos, Sets y Maps!");

// Se crea un objeto para los productos
const productos = {
    1: { id: 1, nombre: "Reloj", precio: 100},
    2: { id: 2, nombre: "Pulsera", precio: 80},
    3: { id: 3, nombre: "Camiseta", precio: 130}
};

// Se crea un Set con los nombres de los productos
const setProductos = new Set(
    Object.values(productos).map(producto => producto.nombre)
);

// Se crea un Map para categorizar cada producto
const mapProductos = new Map([
    ["Accesorios", ["Reloj", "Pulsera"]],
    ["Ropa", ["Camiseta"]]
]);

// Recorrer el Objeto productos
console.log("\nLista completa de productos (Objeto)");
for (const clave in productos) {
    const product = productos[clave];
    console.log(`ID: ${product.id}, Nombre: ${product.nombre}, Precio: $${product.precio}`);
};

// Validar que todos los productos estén completos y correctos
console.log("\nValidación de datos")
for (const clave in productos) {
    const producto = productos[clave];
    if (
    !producto.id ||
    typeof producto.nombre !== "string" ||
    typeof producto.precio !== "number" ||
    producto.precio <= 0
    ) {
        console.warn(`Producto ID ${clave} tiene datos incompletos o erróneos`);
    } else {
        console.log(`Producto ID ${clave} validado correctamente`);
    }
}

// Recorrer el Set de productos
console.log("\nLista de productos únicos (Set)");
for (const nombre of setProductos) {
    console.log("Producto único: ", nombre);
};

// Recorrer el Map haciendo uso de forEach
// map.forEach(valor, clave)
console.log("\nCategorías y nombres de productos (Map)");
mapProductos.forEach((producto, categoria) => {
    console.log(`Categoría: ${categoria} -> Producto(s): ${producto.join(", ")}`);
});