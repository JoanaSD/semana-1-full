forEach --> método arrays/lista-nodos ---> ejecutar un CALLBACK por cada uno de los elementos de la colección/array

LISTA/ARRAY.forEach(Callback)

callback --> tres argumentos --> elemento,índice,toda la colección de elementos 

map --> crea un nuevo array a partir de otro utilizando un CALLBACK 

filter ---> crea un nuevo array filtrando otro, como filtro, utiliza un CALLBACK, si el CALLBACK retorna TRUE, el elemento se queda en el nuevo array, de lo contrario es filtrado 


promesa ----> función asíncrona

new Promise(función)

.then ---> configurar el callback para cuando se cumpla la promesa 

PROMESA.then(callback)

2 callbacks ----> OK (fulfill) | KO (reject)

PROMESA
.then(callback_fulfill)
.catch(callback_reject)
.finally(callback_siempre)


async/await

try - catch

try{
    escribir código que puede tirar una excepción
}catch(excepción){

}
------------------------

ajax --> asynchronous javascript and xml

xhr xml http request 
JSON --> javascript object notation

{
    blabla : "bla",
    otro : 234
}

'{ "blabla" : "bla", "otro" : "234" }' <-- string codificado JSON



FETCH ---> peticiones asíncronas al servidor

fetch(URL,objeto petición-request) --> RETORNA UNA PROMESA con un objeto response

response ---> text/json 

.text()
.json()
AMBOS retornan promesas con el contenido (body) procesado


operador typeof

typeof x ---> retorna el TIPO de x

--------------------------------------

html ---> estructura/contenido
css ---> apariencia
js --> comportamiento

------------------------

1)servir ficheros estáticos (nginx/apache)
----------
2)conectarse a una base/fuente de datos
3)procesar datos/generar html dinámico

cualquier lenguaje de programación
a)http --> recibir y responder peticiones 
b)poder interactuar con el sistema de ficheros (abrir/crear/guardar,etc ficheros)


NODEjs ---> runtime de JS 
deno
bun 

CLI 

sistema de ventanas
aplicaciones
sistema operativo ---> APIs que permiten interactuar con la maquina

ls
cd --> change directory
cd ruta(absoluta o relativa)

clear


module ----> el fichero en ejecución

para importar un módulo ---> require(ruta al módulo)

sistema de ficheros
http --> hacer/recibir/responder peticiones



módulo fileSystem --> fs ---> módulo nativo de NODE para interactuar con el sistema de ficheros

readFile(ruta,callback) ---> el callback recibe el contenido del fichero o un error



writeFile(ruta,contenido,callback) ---> error 

createReadStream
createWriteStream


streams --> flujos de datos

---------------------
streams 
entrada y salida estándar

in PROGRAMA/SISTEMA out

process --> standard in/out 

standard out ---> flujo de escritura (write stream)

para escribir en un flujo de escritura ---> write(bla bla bla bla)
si necesitamos cortar un flujo de escritura ---> end()



cuando en un STRING tengamos un \ (backslash) --> representa un caracter escapado --> que deja de ser el caracter que representa, para cumplir otra función

standard in ---> flujo de lectura (read stream) 
escuchar el evento "data" --> dispara el callback cada vez que hay un paquete de datos (buffers)


modelo publisher subscriber ----> .on(evento,callback)

módulo HTTP/HTTPS

http ---> hacer/recibir/responder peticiones HTTP 


servidor ------> software recibir y responder peticiones HTTP
*)servir ficheros estáticos
*)ejecutar cualquier script de backend


URL --> uniform resource locator

noe.mi ----> host ---> hacer referencia a una IP

123.343.45.6/x/y/z/publica/noemi/

path ----> a partir del HOST --> /css/estilo.css 


http://noe.mi/proyectos/uno 

noe.mi --> host
/proyectos/uno --> path


---------------------------


HTTP.request --> hacer una petición a una URL ---> writeStream

.request(objetoConfiguración, CALLBACK)
callback recibe al respuesta del servidor(readStream)


http --> puerto 80
https --> puerto 443

fs.createWriteStream("nombre del fichero") 

FLUJO_LECTURA.pipe(FLUJO_ESCRITURA)

http.createServer(callback).listen(puerto)

callback ---> petición y la respuesta 

petición --> readStream 
respuesta --> writeStream

const https = require("https");
const {createWriteStream} = require("fs");


for(let i = 1; i <= 10; i++){
    https.request({
        host : "picsum.photos",
        path : "/100"
    }, respuesta => {
        //https://fastly.picsum.photos/id/289/100/100.jpg?hmac=PsaiyEAOFRf7BjQ1zeJRmkXgSczWLw5J2pL0exMzL2A

        let host = respuesta.headers.location.split("//")[1].split("/")[0];
        let path = "/" + respuesta.headers.location.split("//")[1].split("/").filter((e,i) => i != 0).join("/");

        https.request({
            host,path
        }, respuesta => {

            let imagen = createWriteStream(`./img/${i}.jpg`);

            respuesta.pipe(imagen);

            respuesta.on("end", () => console.log("descarga lista"));


        }).end();


    }).end();
}