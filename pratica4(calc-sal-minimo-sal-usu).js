/*Faça um algoritmo que leia o salário mínimo e o salário de um usuário, 
calcule e imprima quantos salários mínimos o usuário ganha.*/
let Salm;
let Sal;
function calcsalario(){
    let Salmedia;
    Salm = 1320;
    Sal = 2600;
    Salmedia = Sal / Salm;
    return"A pessoa tem o salario equivalente a " + Salmedia + " salarios minimos";
}
console.log(calcsalario());