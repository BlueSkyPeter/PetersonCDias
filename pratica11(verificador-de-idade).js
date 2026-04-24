/*Faça algoritmo que leia o nome e a idade de uma pessoa e imprima na tela o nome da pessoa e se ela é maior ou menor de idade.*/
let nome;
let idade;

function verificador(nome, idade){
    if(idade >= 18){
        return nome + ", é maior de idade.";
    }
    else{
        return nome +", é menor de idade.";
    }
}
console.log(verificador("Alice", 18));
console.log(verificador("Bob", 17));
console.log(verificador("Charlie", 20));
console.log(verificador("David", 15));
console.log(verificador("Eve", 22));
console.log(verificador("Eleonor", 16));