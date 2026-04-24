/* Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento

 pelo comprador e imprima na tela o valor final do produto a ser pago. Utilize os códigos da tabela de condições de pagamento para efetuar o cálculo adequado.

 

 Tabela de Código de Condições de Pagamento

 

 1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto

 2 - À Vista no cartão de crédito, recebe 10% de desconto

 3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros

 4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10% */

 let valorproduto;
 let metdepagamento;
 let valorfinal;
 let parcelas;

    function pagamento(valorproduto, metdepagamento, parcelas){
        if(metdepagamento == "pix"){
            valorfinal = valorproduto - (valorproduto * 15/100);
            return "O valor a ser pago é R$ " +valorfinal;

        }
        if(metdepagamento == "cartao" && parcelas == 1){
            valorfinal = valorproduto - (valorproduto * 10/100);
            return "O valor a ser pago é R$ " +valorfinal;
        }
        if(metdepagamento == "cartao" && parcelas == 2){
            valorfinal = valorproduto;
            return "O valor a ser pago é R$ " +valorfinal;

        }
        if(metdepagamento == "cartao" && parcelas >= 3){
            valorfinal = valorproduto + (valorproduto * 10/100);
            return "O valor a ser pago é R$ " +valorfinal;
        }  

    }
    console.log(pagamento(100, "pix", 1));
    console.log(pagamento(100, "cartao", 1));
    console.log(pagamento(100, "cartao", 2));
    console.log(pagamento(100, "cartao", 3));
    