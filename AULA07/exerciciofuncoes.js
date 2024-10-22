function calcularIMC(peso, altura) {

    let imc = peso / (altura * altura);
    let classificacao
    if (imc < 16.9) {
        classificacao = `Muito abaixo do peso ${imc}`;
    } else if (imc >= 17 && imc <= 18.4) {

        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {

        classificacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Acima do peso";

    } else if (imc >= 30 && imc <= 34.9) {

        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc <= 40) {

        classificacao = "Obesidade grau II";
    } else {

        classificacao = "Obesidade grau III";
    }
    return classificacao

}
console.log(calcularIMC(53, 150));
