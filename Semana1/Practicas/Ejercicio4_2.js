// Parte 2: Manipulación Avanzada de Cadenas y Datos Numéricos

// Historia de Usuario 4: Decodificación de Código de Identificación

const codigoOriginal = "ABC-123-DEF-456";
const seccion = codigoOriginal.split('-');
const parte1 = seccion[0];
const parte2 = seccion [1];
const parte3 = seccion[2];

console.log(`Parte 1: ${parte1}\nParte 2: ${parte2}\nParte 3: ${parte3}`);