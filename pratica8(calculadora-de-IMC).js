/*Faça um algoritmo que leia o peso e a altura de uma pessoa,
calcule o seu IMC e imprima na tela a classificação do IMC*/
let peso;
let altura;
let imc;
function calcimc(peso, altura){
    imc = peso / (altura*altura);
    if(imc < 18.5){
        return "Abaixo do peso";
    }
    if(imc > 18.5 && imc< 24.9){
        return "Peso normal";
    }
    if(imc >24.9 && imc <29.9){
        return "Sobrepeso";
    }
    if(imc > 29.9 && imc <34.9){
        return "Obesidade grau 1";
    }
    if(imc > 34.9 && imc < 39.9){
        return "Obesidade grau 2";
    }
    if(imc > 39.9){
        return "Obesidade grau 3";
    }
}
console.log(calcimc(100, 1.79));
console.log(calcimc(50, 1.60));
console.log(calcimc(70, 1.75));
console.log(calcimc(90, 1.80));
console.log(calcimc(110, 1.65));