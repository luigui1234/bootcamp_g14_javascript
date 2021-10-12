// Ejercicio 1
// input: 'The Cure'
// output: {
//   {
//     name: "Just like Heaven",
//     band: "The Cure",
//     releaseYear: "1980",
//     statistics: {
//       likes: 2545109856,
//       reproductions: 4324309,
//     }
//   }
// }

// ----------------------------
// Ejercicio 2
// -Generar el top 5 de las canciones mas escuchadas
// -Mostrar la cancion mas reciente
// -Mostrar el artista mas gustado a los fans





let songsData = [
    {
      name: "Just like Heaven",
      band: "The Cure",
      releaseYear: "1980",
      statistics: {
        likes: 2545109856,
        reproductions: 4324309,
      }
    },
    {
      name: "asdasdasdsad",
      band: "The Cure",
      releaseYear: "1980",
      statistics: {
        likes: 2545109856,
        reproductions: 4324309,
      }
    },
    {
      name: "Nikita",
      band: "Elton John",
      releaseYear: "1980",
      statistics: {
        likes: 9409483256,
        reproductions: 9843293,
      }
    },
    {
      name: "Kashmir",
      band: "Led Zeppelin",
      releaseYear: "1980",
      statistics: {
        likes: 20000,
        reproductions: 8000,
      }
    },
    {
      name: "Smells Like Teen Spirit",
      band: "Nirvana",
      releaseYear: "1989",
      statistics: {
        likes: 25000,
        reproductions: 100000,
      }
    }, {
      name: "So What",
      band: "Metallica",
      releaseYear: "1990",
      statistics: {
        likes: 12000,
        reproductions: 95000,
      }
    }, {
      name: "Nothing Else Matters",
      band: "Metallica",
      releaseYear: "1992",
      statistics: {
        likes: 128000,
        reproductions: 915000,
      }
    }, {
      name: "Daze",
      band: "Poets of the Fall",
      releaseYear: "2018",
      statistics: {
        likes: 3548413,
        reproductions: 87095138,
      }
    }, {
      name: "The Sweet Scape",
      band: "Poets of the fall",
      releaseYear: "2018",
      statistics: {
        likes: 26268856,
        reproductions: 2424568,
      }
    }
  ]
  
  // -filtrar el arreglo por nombre de banda
  // iterar el arreglo con el ciclo for 
  
  
  function filterSong(songData, band) {
      const coincidencias = [];
      
      for (let index = 0; index < songsData.length; index++) {
          if(songData[index].band === band) {
              coincidencias.push(songData[index])
          }
      }
      return coincidencias;
  };
  
  const result = filterSong(songsData, 'Led Zeppelin');
  console.log(result);
  
  
  
  // Ejercicio 2
  // -Generar el top 5 de las canciones mas escuchadas
  // -Mostrar la cancion mas reciente
  // -Mostrar el artista mas gustado a los fans
  
  
  // Iterar el arreglo 
  // crear el criterio de busqueda
  // comparar el dato de reproduciones y ordenarlo
  
  
  const topFive = songsData.sort( function(a, b){
      return b.statistics.reproductions - a.statistics.reproductions
  }).slice(0,5);
  
  const newSong = songsData.sort( function(a, b){
      return b.releaseYear - a.releaseYear;
  }).slice(0,1);
  
  const mostLike = songsData.sort( function(a, b){
      return b.statistics.likes - a.statistics.likes;
  }).slice(0,1);
  
  // Regresar un arreglo con el resultado de la busqueda
  
  
  
  
  
  
  console.log(mostLike, 'mostLike')
  
  
  const resultado = (num, num2) => {
      if(num) {
          return num1 + num2
      }
  };
  
  
  
  
  function name (num1, num2) {
    return num1 + num2;
  };
  
  songsData.forEach( (song, index, array ) => {
      const { releaseYear, band } = song;
      console.log(releaseYear, 'item')
  });
  
  // Primer Parametro: indica el elemento en la interacion actual (obligatorio)
  // segunda parametro me indico la posicion de elemento actial (opcional)
  // tercero mostrar el arreglo que se eesta iterando (opcional)
  
  const filterSongArrow = (songData, band) => {
      const coincidencias = [];
      songData.forEach((song) => {
          if(song.band === band) {
              coincidencias.push(song)
          }
      });
      console.log(coincidencias)
      return coincidencias;
  };
  
  filterSongArrow(songsData, 'Led Zeppelin')
  
  function filterSong(songData, band) {
      const coincidencias = [];
      
      for (let index = 0; index < songsData.length; index++) {
          if(songData[index].band === band) {
              coincidencias.push(songData[index])
          }
      }
      return coincidencias;
  };
  
  
  // const result = filterSong(songsData, 'Led Zeppelin');
  // console.log(result);
  
  
  /*
   Práctica:
     - obtener los productos de tipo chips en un arreglo
     - obtener los productos de tipo drink en un arreglo
     - obtener todos los productos < a $50
      - obtener >= $50
     - obtener el inventario total en valor de todos los productos
     - obtener el inventario total en valor de los productos tipo chips
     - obtener el inventario total en valor de los productos tipo drink
  */
  
  const cartShoppings = [
      {
          name: 'Coca lata 355ml',
          description: 'Coca lata 355ml',
          price: 11,
          type: 'drink'
      },
      {
          name: 'Boing Mango 500ml',
          description: 'Boing Mango 500ml',
          price: 10,
          type: 'drink'
      },
      {
          name: 'Boing Mango 1lt',
          description: 'Boing Mango 1lt',
          price: 18,
          type: 'drink'
      },
      {
          name: 'Coca-Cola 3lt No Retornable',
          description: 'Coca-Cola 3lt No Retornable',
          price: 40,
          type: 'drink'
      },
      {
          name: 'Coca-Cola 600ml',
          description: 'Coca-Cola 600ml',
          price: 14,
          type: 'drink'
      },
      {
        name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
        description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
        price: 27.5,
        type: 'chip'
      },
      {
        name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
        description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
        price: 25.5,
        type: 'chip'
      },
      {
        name: 'Botanas Chips Papas Jalapeño 100 g',
        description: 'Botanas Chips Papas Jalapeño 100 g',
        price: 29.7,
        type: 'chip'
      },
      {
        name: 'Botana Paketaxo Quexo 215 g',
        description: 'Botana Paketaxo Quexo 215 g',
        price: 52.8,
        type: 'chip'
      },
      {
        name: 'Botana Doritos Incógnita 64 g',
        description: 'Botana Doritos Incógnita 64 g',
        price: 18.15,
        type: 'chip'
      },
      {
        name: 'Botana Fritos Sal y Limón 57 g',
        description: 'Botana Fritos Sal y Limón 57 g',
        price: 15.4,
        type: 'chip'
      },
      {
        name: 'Botana Doritos Nacho 58 g',
        description: 'Botana Doritos Nacho 58 g',
        price: 17.6,
        type: 'chip'
      },
      {
        name: 'Botana Doritos Flamin Hot 62 g',
        description: 'Botana Doritos Flamin Hot 62 g',
        price: 17.6,
        type: 'chip'
      },
      {
        name: 'Botanas Chips Papas Fuego Limón 100 g',
        price: 29.7,
        type: 'chip'
      },
      {
        name: 'Papas Sabritas Original 42 g',
        description: 'Papas Sabritas Original 42 g',
        price: 17.6,
        type: 'chip'
      },
      {
        name: 'Papas Sabritas Adobadas 42 g',
        description: 'Papas Sabritas Adobadas 42 g',
        price: 16.5,
        type: 'chip'
      },
      {
        name: 'Cacahuates Hot Nuts Multintenso 50 g',
        description: 'Cacahuates Hot Nuts Multintenso 50 g',
        price: 11,
        type: 'chip'
      },
      {
        name: 'Botana Fritos Chorizo Chipotle 57 g',
        description: 'Botana Fritos Chorizo Chipotle 57 g',
        price: 15.95,
        type: 'chip'
      },
      {
        name: 'Botana Chips Sal de Mar Bolsa 170 g',
        description: 'Botana Chips Sal de Mar Bolsa 170 g',
        price: 49.5,
        type: 'chip'
      },
      {
        name: 'Botana Cheetos Poffs 100 g',
        description: 'Botana Cheetos Poffs 100 g',
        price: 34.1,
        type: 'chip'
      },
      {
        name: 'Papas Fritas Stax Cheddar 156 g',
        description: 'Papas Fritas Stax Cheddar 156 g',
        price: 47.85,
        type: 'chip'
      },
      {
        name: 'Papas Sabritas Original 240 g',
        description: 'Papas Sabritas Original 240 g',
        price: 75.35,
        type: 'chip'
      },
      {
        name: 'Botana Doritos Nacho 370 g',
        description: 'Botana Doritos Nacho 370 g',
        price: 82.5,
        type: 'chip'
      },
      {
        name: 'Chicharrón de Cerdo Sabritas 115 g',
        description: 'Chicharrón de Cerdo Sabritas 115 g',
        price: 55,
        type: 'chip'
      },
      {
        name: 'Botana Cheetos Torciditos 150 g',
        description: 'Botana Cheetos Torciditos 150 g',
        price: 34.1,
        type: 'chip'
      },
      {
        name: 'Papas Ruffles Queso 290 G',
        description: 'Papas Ruffles Queso 290 G',
        price: 71.5,
        type: 'chip'
      },
      {
        name: 'Dip Tostitos Queso Suave 255 g',
        description: 'Dip Tostitos Queso Suave 255 g',
        price: 69.3,
        type: 'chip'
      }
    ]


    // obtener los productos de tipo chips en un arreglo



const productType = (product) => {
    let products = [];
    cartShoppings.forEach( (cartShoppingsProduct) => {
        if (cartShoppingsProduct.type === product){
            products.push(cartShoppingsProduct)

        }
        
    });
    return products;

}



const productPrice = (condition) => {
    let products = [];
    if (condition == "mayor"){
        cartShoppings.forEach( (cartShoppingsProduct) => {
            if (cartShoppingsProduct.price >= 50){
                products.push(cartShoppingsProduct)
    
            }
            
        });
        
    } else if(condition == "menor"){
        cartShoppings.forEach( (cartShoppingsProduct) => {
            if (cartShoppingsProduct.price < 50){
                products.push(cartShoppingsProduct)
    
            }

    });

        
    }
    return products;

}



const valorTotal = () => {
    let valor = 0;
    cartShoppings.forEach(cartShoppingsProduct => {
        valor += cartShoppingsProduct.price;
    });
    return valor;
}




const valorTotalByProduct = (product) => {
    let valor = 0;
    let products = [];

    products = productType(product);
    products.forEach(cartShoppingsProduct => {
        valor += cartShoppingsProduct.price;
      /*   console.log(cartShoppingsProduct.price, typeof(cartShoppingsProduct.price));
        console.log("Acumulado: ", valor); */
    });
    return parseFloat(valor).toFixed(2);
}

/* console.log("Chips:" , productType("chip"))
console.log("Drinks:" , productType("drink")) */

/* console.log("Mayor a 50: ",productPrice("mayor"));
console.log("Menor a 50: ",productPrice("menor")); */

console.log("El total del inventario es: ", valorTotal());

console.log("El total del inventario de chips es: ", valorTotalByProduct("chip"));
console.log("El total del inventario de drinks es: ", valorTotalByProduct("drink")); 