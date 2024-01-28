const https = require("https");
const {writeFile} = require("fs");

//https://es.wikipedia.org/wiki/Invasi%C3%B3n_rusa_de_Ucrania

https.request({
    port: 443,
    method: "GET",
    host: "es.wikipedia.org",
    path: "/wiki/Invasi%C3%B3n_rusa_de_Ucrania"
}, respuesta => {
    let contenidoRespuesta = "";

    respuesta.on("data", datos => {
        contenidoRespuesta+=datos;

    });

    respuesta.on("end", () => {
        writeFile("./index.html", contenidoRespuesta, error => {
            if(!error){
                return console.log("descarga lista");
            }
            console.log("..error");
        });
    });
}).end();