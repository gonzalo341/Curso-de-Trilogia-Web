//Crea una variable nombre con tu nombre y úsala para imprimir un mensaje.

let nombre = "Gonzalo";

console.log(`Hola ${nombre}`);

//Declara y suma dos números, muestra el resultado en consola.

const primerNumero = 5;
const segundoNumero = 8;

const suma = primerNumero + segundoNumero; //se suma la constante primerNumero + la constante segundoNumero

console.log(suma);

//Usa operadores lógicos para evaluar si 10 > 5 y 5 < 2.

const evaluar1 = 10 > 5;
const evaluar2 = 5 < 2;

console.log(`${evaluar1} y ${evaluar2}`); //si evaluar1 y evaluar2 son correctos entonces se va a mostrar por consola True si no es correcto se va a mostrar por consola False

//Declara variables con let y const y nota las diferencias al intentar cambiarlas.

const name1 = "Gonzalo";
//name1 = "Jorge" //el name1 no cambia ya que constante no se puede cambiar

let edad = 24;
edad = 25; //let si se puede cambiar

console.log(`Hola ${name1} tienes ${edad} años?`);

//Declara una variable de tipo boolean y úsala en una operación lógica.

let pasar = true;
edad = 17;

if (edad > 18) {
    pasar = false; //si se cumple la condicion entonces pasar pasa a ser false
    console.log(pasar);
}

//Imprime el tipo de dato de una variable usando typeof.

const texto = "hola";
const numero = 5;
const booleano = true;

console.log(typeof texto);   // "string"
console.log(typeof numero);  // "number"
console.log(typeof booleano); // "boolean"

//Declara un array y muestra uno de sus elementos en la consola.

const frutas = ["manzana", "banana", "cereza"];

console.log(frutas[1]); // Imprime "banana" (elemento en la posición 1)

//Usa una operación con % para encontrar el resto de 17 ÷ 3.

const resto = 17 % 3;

console.log(resto); // Imprime 2, que es el resto de 17 ÷ 3

//Declara una variable sin valor e imprime su valor inicial.

let variableSinValor;

console.log(variableSinValor); // Imprime "undefined", ya que la variable no tiene valor asignado

//Escribe un programa que verifique si un número es positivo o negativo.

const vericaciónDeNumero = -5;

if (vericaciónDeNumero > 0) {
    console.log("El número es positivo.");
}
else if (numero < 0) {
    console.log("El número es negativo.");
}
else {
    console.log("El número es cero.");
}

//Usa switch para imprimir el día de la semana según un número del 1 al 7.

const dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Número inválido. Debe ser entre 1 y 7.");
}

//Haz un bucle for que imprima los números del 1 al 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Crea un programa que calcule el factorial de un número usando while.

let numeroFactorial = 5;
let resultado = 1;

while (numeroFactorial > 0) {
    resultado *= numeroFactorial;
    numeroFactorial--;
}

console.log("El factorial es:", resultado);

//Escribe un condicional que determine si una persona puede votar según su edad.

edad = 20; //la variable edad ya lo defini antes por eso no lleva let

if (edad >= 18) {
    console.log("La persona puede votar.");
} else {
    console.log("La persona no puede votar.");
}

//Imprime los números pares entre 1 y 20 con un bucle for.

for (i=1; i <= 20; i ++) {
    if (i % 2 === 0) {
        console.log(`${i} es un numero par`)
    }
}

//Usa switch para imprimir un mensaje dependiendo de la calificación (A, B, C, D, F).

const calificacion = prompt("ingrese la nota (A, B, C, D, F).");

switch (calificacion) {
    case "A":
        console.log("Excelente");
        break;
    case "B":
        console.log("Bueno");
        break;
    case "C":
        console.log("Regular");
        break;
    case "D":
        console.log("Suficiente");
        break;
    case "F":
        console.log("Reprobado");
        break;
    default:
        console.log("Calificación no válida.");
}

//Haz un programa que pida dos números y los sume si ambos son positivos.

const numero1 = parseInt(prompt("¿Cual es el primer numero?"));
const numero2 = parseInt(prompt("¿Cual es el segundo numero?"));

if (numero1 > 0 && numero2 > 0) {
    const suma = numero1 + numero2;
    console.log(`La suma es: ${suma}`);
} else {
    console.log("Ambos números deben ser positivos.");
}

//Escribe un bucle while que cuente de 10 a 1 en orden descendente.

let contador = 10;

while (contador > 0) {
    console.log(contador);
    contador--;
}

//Crea una calculadora básica que permita sumar o restar según el operador ingresado.

const num1 = parseInt(prompt("¿Cual es el primer numero?"));
const num2 = parseInt(prompt("¿Cual es el segundo numero?"));
const operador = prompt("¿que cuenta desea hacer (+, -, *, /)?");  

switch (operador) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break;
    default:
        console.log("Operador no válido.");
        break;
}

if (resultado !== undefined) {
    console.log("El resultado es:", resultado);
}

//Selecciona un elemento por su ID y cambia su texto.

const elemento = document.getElementById("color");
elemento.textContent = "ROJO";
