/*aça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos anos, 
meses e dias essa pessoa ja viveu. 
Leve em consideração o ano com 365 dias e o mês com 30 dias.*/
let AnoNascimento;
let AnoAtual;
let IdadeAnos;
let IdadeMeses;
let IdadeDias;
function idade(AnoNascimento, AnoAtual){
    IdadeAnos = AnoAtual - AnoNascimento;
    IdadeMeses = IdadeAnos * 12;
    IdadeDias = (AnoAtual - AnoNascimento) * 365 / 30;
    return "A pessoa tem. " +IdadeAnos+ " anos, " +IdadeMeses+ " Meses e " +IdadeDias+ " Dias de vida ";
    
}
console.log(idade(1990, 2026));
console.log(idade(2000, 2026));
console.log(idade(1985, 2026));
