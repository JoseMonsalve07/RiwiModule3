// Parte 1: Declaración y Asignación con Lógica Implícita

// Historia de Usuario 2: Cálculo de Pedido con Descuento y Clasificación

let cantidadArticulos = 10;
let precioBase = 25;
let descuentoAplicado = 0.50;
let pedidoGrande;

function total(){
    subtotal = cantidadArticulos * precioBase;
    conDescuento = subtotal - (subtotal * descuentoAplicado);
    totalPagar = conDescuento;
    return totalPagar;
}

if (cantidadArticulos >= 5) {
    pedidoGrande = true;
} else {
    pedidoGrande = false;
};

console.log(`Total a pagar: ${total()}\nPedido grande: ${pedidoGrande}`)