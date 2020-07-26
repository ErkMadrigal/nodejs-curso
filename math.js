const sumar = (x1, x2) => {
    return x1 + x2;

}

const restar = (x1, x2) => {
    return x1 - x2;

}

const multiplicar = (x1, x2) => {
    return x1 * x2;

}

const dividir = (x1, x2) => {
    if(x2 == 0){
        console.log('no se puede dividir por 0')
    }else{
        return x1 / x2;
    }

}

exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;