// Parte 3: Combinación de Operaciones y Concatenación Compleja

// Historia de Usuario 6: Reporte Detallado de Inventario

let nombreItem = "Laptop Gamer";
let cantidadStock = 3;
let precioUnitarioItem = 1200.00;

function valorTotalInventario() {
    return cantidadStock * precioUnitarioItem;
};

const cadenaReporte = `Ítem: ${nombreItem}. Stock: ${cantidadStock} unidades. Valor total: ${valorTotalInventario().toFixed(2)}`;

console.log(cadenaReporte);
