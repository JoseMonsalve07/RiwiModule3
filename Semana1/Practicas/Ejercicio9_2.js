// Parte 3: Combinación de Operaciones y Concatenación Compleja

// Historia de Usuario 9: Temporizador de Cuenta Regresiva

const segundosTotales = 3670;

// Calcular horas completas
const horas = Math.floor(segundosTotales / 3600);
const segundosRestantes = segundosTotales % 3600;

// Calcular minutos restantes
const minutos = Math.floor(segundosRestantes / 60);
const segundosSobrantes = segundosRestantes % 60;

const mensaje = `${horas} hora${horas > 1 ? 's' : ''}, ${minutos} minuto${minutos > 1 ? 's' : ''}, ${segundosSobrantes} segundo${segundosSobrantes > 1 ? 's' : ''} restantes.`;

console.log(mensaje);
// imprime: 1 hora, 1 minuto, 10 segundos restantes.