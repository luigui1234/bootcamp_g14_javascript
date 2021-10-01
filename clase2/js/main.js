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

function type(param){
    return typeof(param);
}

let param = "loquesea";
console.log(type(param));