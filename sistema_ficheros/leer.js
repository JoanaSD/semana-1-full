const sistemaFicheros = require("fs");

sistemaFicheros.readFile("./prueba.txt", (error,contenido) => {

    if(!error){
        return console.log(contenido.toString());
    }

    console.log("...hubo un error");

});

