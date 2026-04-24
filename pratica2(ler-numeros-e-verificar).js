/*Faça um algoritmo que leia os valores de A, B, C e em seguida
imprima na tela a soma entre A e B e mostre se a soma é menor que C.*/
let A;
let B;
let C;

function operacao() {
    A = 3;
    B = 2;
    if(A==B){
        C=A+B;
        return"Os valores de A e B são iguais, o resultado é. " +C;

    }
    else{
        C=A*B;
        return"Os valores de A e B não são iguais, o resultado é. " +C;
    }
}
console.log(operacao());
