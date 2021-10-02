/* let x, y;

x = parseInt(window.prompt("Elige tu x"));
y = parseInt(window.prompt("Elige tu y"));
console.log("Tu x es: " + x + " y tu y es: " + y)
if(x>y)
    console.log("x es mayor que y");
else if (x==y)
    console.log("Tus numeros son iguales");
else
    console.log("x es menor que y"); */


/* //Calcula numero par
let num;

num = parseInt(window.prompt("Introduce tu número"));

if(num%2 == 0)
    console.log("Tu número es par");
else
    console.log("Tu número es impar");


//Determina el mayor


let x, y;

x = parseInt(window.prompt("Elige tu Primer número"));
y = parseInt(window.prompt("Elige tu Segundo número"));
console.log("Tu primer número es: " + x + " \nTu segundo número es: " + y)

if(x==y)
    console.log("¡Tus numeros son iguales!");
else if (x>y)
    console.log("¡Tus números son diferentes!\nEl primer número es el mayor");   
else
    console.log("¡Tus números son diferentes!\nEl segundo número es el mayor"); */

/* function type(param){
    return typeof(param);
}

let param = "loquesea";
console.log(type(param)); */


// Programa 1
let num;

num = parseInt(window.prompt("Introduce tu número"));

if(num%2 == 0)
    console.log("Tu número es par");
else
    console.log("Tu número es impar");



//Programa 2
let x, y;

x = parseInt(window.prompt("Elige tu Primer número"));
y = parseInt(window.prompt("Elige tu Segundo número"));

console.log("Tu primer número es: " + x + " \nTu segundo número es: " + y)

if(x==y)
    console.log("¡Tus numeros son iguales!");
else if (x>y)
    console.log("El primer número es el mayor y el segundo es el menor");   
else
    console.log("El primer número es el menor y el segundo número es el mayor");



//Programa 3

let nombre = "Desconocido", peso=0;
nombre = window.prompt("Introduce tu nombre");
peso = parseInt(window.prompt("Introduce tu peso"));

console.log("Hola "+ nombre)
console.log("Tu peso en la luna sería: "+  parseFloat(peso/9.8*1.622).toFixed(2) + " kg")


//Programa 4

let calificacion=0;

calificacion = parseInt(window.prompt("Ingrese la calificación 0 - 100"));

if (calificacion>=90)
    console.log("Tu calificación es A");

else if (calificacion>=80 && calificacion<90)
    console.log("Tu calificación es B");

else if (calificacion>=70 && calificacion<80)
    console.log("Tu calificación es C");

else if (calificacion>=60 && calificacion<70)
    console.log("Tu calificación es D");

else if (calificacion>=50 && calificacion<60)
    console.log("Tu calificación es E");

else
    console.log("Tu calificación es F");

