const {createServer} = require("http");

createServer((peticion,respuesta) => {

    respuesta.write("x cosa, respuesta del servidor");
    respuesta.end();

}).listen(4000);