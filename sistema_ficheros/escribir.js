const fs = require("fs");

fs.writeFile("./prueba.txt", "lo que sea", error => {
    if(!error){
        return console.log("fichero escrito");
    }
    console.log("..error");
});