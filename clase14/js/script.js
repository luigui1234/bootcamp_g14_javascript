console.log(document.body)

const h1 = document.createElement("h1");
const text = document.createTextNode("Hola Koders");

h1.appendChild(text)

document.body.appendChild(h1);

console.log(h1)

const personas = [
  'quienes somos?',
  'contacto',
  'login',
];

// iterar el arreglo
const ul = document.createElement('ul');
personas.forEach((persona) => {
  const li = document.createElement('li');
  const text = document.createTextNode(persona);
  li.appendChild(text);
  ul.appendChild(li)
});

document.body.appendChild(ul);



// Crear tabla con el sigueinte arreglo

const mentorsArray = [
  {
      name:"Ivan Diaz",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:8
          },
          {
              signature:"ReactJS",
              score:8
          }
      ]
  },
  {
      name:"Alan Medina",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:7
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  },
  {
      name:"Elvira Camarillo",
      scores:[
          {
              signature:"HTML",
              score:9
          },
          {
              signature:"CSS",
              score:9
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:9
          }
      ]
  },
  {
      name:"Alejandra Paez",
      scores:[
          {
              signature:"HTML",
              score:10
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:10
          },
      ]
  },
]



const getScoreByName = mentorName => {
    let suma = 0;
    let promedio= 0;
    const name = document.createElement('td');
    const textName = document.createTextNode(mentorName);
    name.appendChild(textName);
    const tr = document.createElement('tr');
    tr.appendChild(name)
    mentorsArray.forEach(mentor => {
        if(mentor.name === mentorName){
            mentor.scores.forEach((materia, index) => {
                suma += materia.score;
                promedio = suma/(index + 1);
                console.log(`Promedio individual de ${mentor.name} es de ${promedio}`);
                const row = document.createElement('td');
                const text = document.createTextNode(`${materia.score}`);
                row.appendChild(text);
                tr.appendChild(row);
            });       
        }
    });
    
    const row = document.createElement('td');
    const text = document.createTextNode(`${promedio}`);
    row.appendChild(text);
    tr.appendChild(row);
    table.appendChild(tr);
    return promedio;
}


const table = document.createElement('table');
console.log(document.body.appendChild(table));

const tr1 = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const td6 = document.createElement('td');
    const text1 = document.createTextNode("Koder");
    const text2 = document.createTextNode("HMTL");
    const text3 = document.createTextNode("CSS");
    const text4 = document.createTextNode("JS");
    const text5 = document.createTextNode("REACTJS");
    const text6 = document.createTextNode("Promedio");
    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);
    td6.appendChild(text6);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);
    tr1.appendChild(td5);
    tr1.appendChild(td6);
    table.appendChild(tr1);

const createTable = mentorsArray.forEach(mentor => {
    
    
    const prom = getScoreByName(mentor.name);
});