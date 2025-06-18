// Parte 2: Manipulación Avanzada de Cadenas y Datos Numéricos

// Historia de Usuario 5: Evaluación de Desempeño Académico

let nota1 = 3;
let nota2 = 3;
let nota3 = 3;
let aprobo;

function promedio(){
    return (nota1 + nota2 + nota3)/3;
};

if (promedio() >= 3) {
    aprobo = true;
    aproboCurso = "Sí";
} else {
    aprobo = false;
    aproboCurso = "No";
};

console.log(`Promedio Final: ${promedio()}\nAprobó: ${aproboCurso}`)