const circulos = document.querySelectorAll(".circulo");

/*
circulos.forEach(circulo => {
    circulo.addEventListener("click", () => {
        circulos.forEach(circulo => circulo.classList.remove("seleccion"));
        circulo.classList.add("seleccion");
    });
});
*/

for(let i = 0; i < circulos.length; i++){
    circulos[i].addEventListener("click", () => {
        for(let j = 0; j < circulos.length; j++){
            circulos[j].classList.remove("seleccion");
        }
        circulos[i].classList.add("seleccion");
    });
}