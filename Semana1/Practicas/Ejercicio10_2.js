// Parte 3: Combinación de Operaciones y Concatenación Compleja

// Historia de Usuario 10: Resumen de Cálculo de Impuestos

let ingresoBruto = 50000.00;
let tasaImpuesto = 0.15;

let montoImpuesto = ingresoBruto * tasaImpuesto;
let ingresoNeto = ingresoBruto - montoImpuesto;;
let mensajeImpuesto = `Para un ingreso bruto de $${ingresoBruto.toFixed(2)}, el impuesto es $${montoImpuesto.toFixed(2)}, resultando en un ingreso
neto de $${ingresoNeto.toFixed(2)}.`

console.log(mensajeImpuesto);
