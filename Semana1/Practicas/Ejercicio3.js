// EJERCICIO 3

// 1. Calcular el saldo final después de un depósito
let initialBalance = 500;

function deposit(){
    let deposit = 200;
    finalBalance = initialBalance + deposit;
    return finalBalance;
}

console.log('Initial balance: ' + initialBalance);
console.log(`Final balance after deposit: ${deposit()}\n`);


// 2. Determinar la diferencia de temperatura
let maxTemperature = 30.5;
let minTemperature = 18;

function difference(){
    difference = maxTemperature - minTemperature;
    return difference;
}

console.log(`Max. Temperature: ${maxTemperature}\nMin. Temperature: ${minTemperature}\nDifference: ${difference()}\n`)


// 3. Calcular el salario bruto
let hoursWorked = 40;
let hourlyRate = 25.5;

function salary(){
    let salary = hoursWorked * hourlyRate;
    return salary;
}

console.log(`Hours worked: ${hoursWorked}\nHourly rate: ${hourlyRate}\nGross salary: ${salary()}\n`);


// 4. Obtener el promedio de ventas por vendedor
let totalSales = 12000;
let sellers = 4;

function averageSales(){
    let averageSales = totalSales / sellers;
    return averageSales;
}

console.log(`Total Sales: ${totalSales}\nSellers: ${sellers}\nAverage sales: ${averageSales()}\n`)


// 5. Saber los minutos restantes de una clase
let totalDuration = 75;
let durationPerBlock = 60;

function leftoverMinutes(){
    let leftoverMinutes = durationPerBlock * 2 - totalDuration;
    return leftoverMinutes;
}

console.log(`Total class duration: ${totalDuration} minutes\nDuration per block: ${durationPerBlock} minutes\nTotal blocks: 2\nLeft over minutes: ${leftoverMinutes()} minutes`)