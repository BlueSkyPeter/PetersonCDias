/*Faça um algoritmo que leia um número e imprima o seu antecessor e sucessor.*/
let A = 10 ;
function antecessor(A){
  
    return("Antecessor é. " +(A - 1));
}

function sucessor(A){
    
    return("O Sucessor é. " +(A+ 1));
} 

console.log(antecessor(A), sucessor(A));