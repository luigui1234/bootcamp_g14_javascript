// Crear funcion que permita indicar la cantidad de koders a guardar,
// que pida tantos nombre completos de koders como se haya indicado, y 
// que imprima el nombre del koder y su numero asignado.

// Ejemplo:
// input   
//    - Freddy Krueger
//    - Michael Myers
//    - Jason Vorhees

// output: 
//     koder 1: Freddy Krueger (F.K.)
//     koder 2: Michael Myers (M.M.)
//     koder 3: Jason Vorhees (J.V.)


//     koder 1: Freddy Krueger (F.K.)


// -Pedir al usuario un numero
// -crear un ciclo que pida los datos del koder N veces, basandonos al numero que dio usuario
// -Revisar que se cumpla el numero de veces que pediremos los datos
// -Pedir nombre
// -Guardar en una variable
// -Crear una variable para guardar el numero y el nombre del koder concatenado
// -Agregar el string creado a un arreglo
// -Mostrar en consola el arreglo con los koders.

// primero donde haremos la modificacion
// hacer dinamicas las inciales
// separar los nombres
// obtener la primera letra de cada elemento
// convertir esa letra en mayusculas
// Freddy Krueger

[
    'koder 1: Freddy Krueger (F.K.)',
    'koder 1: Freddy Krueger (F.K.)',
    'koder 1: Freddy Krueger (F.K.)',
]

[
    {
        id:1,
        nombre:'freddy',
        apellido: 'Kruegger',
        iniciales: '()'
    },
    {
        id:2,
        nombre:'freddy',
        apellido: 'Kruegger',
        iniciales: '()'
    }
]


function createKoder () {
    const cantidad = prompt('Ingresa la cantidad de koders a crear ');
    let koders = [];
    let objArray; 
    let persona = {};

    for (let index = 1; index <= cantidad; index++) {
        const nombreCompleto = prompt('Ingresa nombre y apellido del koder ');
        const nombreSeparado = nombreCompleto.split(' ');
        objArray[index] = persona.nombre = nombreSeparado[0].charAt(0).toUpperCase();
        objArray[index] = persona.apellido = nombreSeparado[1].charAt(0).toUpperCase();
        const resultado = `koder ${index}: ${nombreCompleto} (${nombre}.${apellido}.)` 
        koders.push(resultado);
    };
    console.log(koders);
};

 createKoder();



// input: kodemia
// output: aimedok

// const personas = [
//     { 
//         nombre: 'Freeddy',
//         apellido: 'Kruegger',
//         direccion: {
//             colonia: 'calle elm'
//         } 
//     },
//     { 
//         nombre: 'Jason',
//         apellido: 'Vorhees',
//         direccion: {
//             colonia: 'calle elm'
//         } 
//     }
// ];

// for (let index = 0; index < personas.length; index++) {
//     const element = personas[index];
//     const { nombre, direccion  } = element;
//     const { colonia } = direccion;
//     console.log(colonia)
// }


// console.log()


function swipe(){
    let aux = prompt("Ingresa cadena").split("").reverse();
    let str = aux.join("");
    console.log(str);
}
