//imprime los numeros pares del 1 al 20
for (i=1; i <= 20; i ++) {
    if (i % 2 === 0) {
        console.log(`${i} es un numero par`)
    }
}

//imprime un mensaje sengun la nota
let nota = prompt("¿Cual es la nota?")

switch (nota) {
    case "F":
        console.log("La nota es F");
        break;
    case "D":
        console.log("La nota es D");
        break;
    case "C":
        console.log("La nota es C");
        break;
    case "B":
        console.log("La nota es B");
        break;
    case "A":
        console.log("La nota es A");
        break;
    default:
        break;
}

//pide 2 numeros y si son positivos se suman
const primerNumero = parseInt(prompt("¿Cual es el primer numero?"))
const segundoNumero = parseInt(prompt("¿Cual es el segundo numero?"))

if ((primerNumero, segundoNumero) % 2 === 0) {
    let resultado = primerNumero + segundoNumero
    console.log(resultado)
}
if (primerNumero % 2 !== 0) {
    console.log("El primer numero es impar")
}

if (segundoNumero % 2 !== 0) {
    console.log("El segundo numero es impar")
}