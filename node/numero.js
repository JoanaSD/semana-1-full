let numero = 0;

function getNumero(){
    return numero;
}

function sumar(){
    numero++;
}

function restar(){
    numero--;
}

module.exports = {getNumero,sumar,restar};