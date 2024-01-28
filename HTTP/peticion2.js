const https = require("https");
const {createWriteStream} = require("fs");

for(let i = 1; i <= 10; i++){

    https.request({
        host: "picsum.photos",
        path: "/100"
    }, respuesta => {

        //https://fastly.picsum.photos/id/1049/100/100.jpg?hmac=AFzuA1p3qm36ZGRrvM8x99Y1OT22nXZyGpd6hssQO6c

    
        let host = respuesta.headers.location.split("//")[1].split("/")[0];
        let path = "/" + respuesta.headers.location.split("//")[1].split("/").filter((e,i) => i != 0).join("/");

        https.request({
            host, path
        }, respuesta => {

            let imagen = createWriteStream(`./img/${i}.jpg`);

            respuesta.pipe(imagen);

            respuesta.on("end", () => console.log("descarga lista"));

        }).end();

    }).end();

}