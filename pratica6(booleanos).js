/*Faça um algoritmo que leia os valores de A e B, ambos booleanos, 
e imprima na tela se A e B são ambos verdadeiros ou não.*/
let A;
let B;

function booleano(A, B){
    if(A==true && B==true){
        return "A e B são verdadeiros";
    }
    else{
        return "A e B não são ambos verdadeiros";
    }

}
console.log(booleano(true, true));
console.log(booleano(false, false));
console.log(booleano(true, false));
console.log(booleano(false, true));
