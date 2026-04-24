/*Faça um algoritmo que leia um valor, reajuste esse valor em 5% e imprima o resultado.*/
let A;
function reajuste(A){
    return "O valor reajustado é. " + (A+(A*5/100));
}
console.log(reajuste(10));
console.log(reajuste(100));
console.log(reajuste(1000));
console.log(reajuste(10000));
console.log(reajuste(100000));
console.log(reajuste(1000000));