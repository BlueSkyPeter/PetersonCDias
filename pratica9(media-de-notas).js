/*Faça um algoritmo que leia as notas de 3 provas de um aluno, 
calcule a média e imprima na tela se o aluno foi aprovado ou reprovado.*/
let nota1;
let nota2;
let nota3;
let media;
let nome;

function mediadenotas(nota1, nota2, nota3, nome){
    media = (nota1 + nota2 + nota3) / 3;
    if(media >= 7){
        return nome + ", sua média é " + media + " Aprovado!";

}
    else{
    return nome + ", sua média é " + media + " Reprovado!";
}
}
console.log(mediadenotas(8, 9, 10, "Alice"));
console.log(mediadenotas(5, 6, 7, "Bob"));
console.log(mediadenotas(4, 5, 6, "Charlie"));
console.log(mediadenotas(7, 7, 7, "David"));
console.log(mediadenotas(10, 10, 10, "Eve"));