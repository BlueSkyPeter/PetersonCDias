/*Faça um algoritmo que leia os valores de A, B e C 
e imprima na tela os números em ordem decrescente.*/
let A;
let B;
let C; 
function ordemdec(A, B, C){ 
      
        if(A<B && A<C && B<C){

            return"A ordem decrescente é. " + C + ", " + B + ", " + A;
        }
        else{
            
        };

    }

console.log(ordemdec(1, 8, 10));
console.log(ordemdec(5, 6, 9));
console.log(ordemdec(10, 100, 1000));