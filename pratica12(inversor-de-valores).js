/*Faça um algoritmo que receba um valor A e B, e troque o valor de A por B e o valor de B por A e imprima na tela os valores.*/
let A;
let B; 
let C; 
function inversor(A, B){
    C=A;
    A=B;
    B=C;
    return "O valor de A é. " +A+ " e o valor de B é. " +B;
}
console.log(inversor(10, 20));
console.log(inversor(20, 50));
console.log(inversor(100, 200));