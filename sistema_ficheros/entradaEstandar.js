process.stdin.on("data", datos => {
    if(datos.toString().trim() == "salir"){

        process.exit();

    }
});

process.on("exit", () => console.log("bye bye"));