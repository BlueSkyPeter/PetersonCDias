/*Faça um algoritmo que leia os valores de A, B, C e em seguida 
imprima na tela a soma entre A e B é mostre se a soma é menor que C.*/
let A = 2;
let B = 2;
let C = 6;
let D;
//Soma dos valores de A e B
function soma(){
         D = A+B;
        return "O Resultado é " + D ;
}
//Chamando a função soma
console.log(soma());

//função de comparação
function comparador(){
    if(D>C){
    return"Maior que C ";
    }
    else{
        return"Menor que C";
    }
}
//chamando a função de comparador
console.log(comparador());