async function miFuncion() {
  return "Hola";
}

async function saludar() {
  const mensaje = await miFuncion(); // espera a que miFuncion termine
  console.log(mensaje); // luego muestra "Hola"
}

saludar()