function switchLowUpCase(prompt("Introduce tu cadena")){
    let aux;
    for (let i=0; i<str.length; i++){
        if (i%2==0)
            str[i]=str[i].toUperCase();
        else
            str[i]=str[i].toLowerCase();
    }
    console.log(str);
}



let str = "Hola mundo";


switchLowUpCase(str);