// Ejercicios

/*
Ejercicio 1:
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Ivan"
    input Apellido = "Diaz"
    Output: "ivan DIAZ"
*/


let name = prompt("Ingresa tu nombre");
let lastName = prompt("Ingresa tu apellido");


console.log(name.toLowerCase()+" "+ lastName.toUpperCase());


/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/

let completeName = prompt("Ingresa tu nombre Completo");


console.log("Tu nombre completo tiene "+ completeName.length+ " caracteres.");

/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

completeName = prompt("Ingresa tu nombre Completo");
let number = 0;

if(completeName.match(/a/g)!=null)
    number += completeName.match(/a/g).length - parseInt(completeName.match(/a/g).length/2);
if(completeName.match(/e/g)!=null)
    number += completeName.match(/e/g).length - parseInt(completeName.match(/e/g).length/2);
if(completeName.match(/i/g)!=null)
    number += completeName.match(/i/g).length - parseInt(completeName.match(/i/g).length/2);
if(completeName.match(/o/g)!=null)
    number += completeName.match(/o/g).length - parseInt(completeName.match(/o/g).length/2);
if(completeName.match(/u/g)!=null)
    number += completeName.match(/u/g).length - parseInt(completeName.match(/u/g).length/2);

console.log("Tu nombre completo tiene "+ number + " vocales.");

/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/

let msg = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";
let str = msg.split(" ");
number = 0;

number += msg.match(/estudiante/g).length - parseInt(msg.match(/estudiante/g).length/2);
console.log(msg.replace(/estudiante/g, "Koder"));
console.log(number);


/*
Ejercicio 5:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/
let arr;
let aux;
arr = prompt("Introduce tu string de dos palabras");
aux = arr.split(" ");

if (aux[1].length > aux[0].length)
    console.log("La palabra mas grande es: ", aux[1]);
else
    console.log("La palabra mas grande es: ", aux[0]);
