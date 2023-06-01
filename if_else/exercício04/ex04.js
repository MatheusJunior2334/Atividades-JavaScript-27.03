let n1 = parseInt(prompt("Digite um número qualquer"));
let n2 = parseInt(prompt("Digite outro número qualquer"));

alert(`Antes da mudança o primeiro número era = ${n1} e o segundo era = ${n2}`);

let mudanca = n1;
n1 = n2;
n2 = mudanca;

alert(`Depois da mudança o primeiro número ficou = ${n1} e o segundo ficou = ${n2}`);

document.write("Exercício 04: Faça um script que pede dois números inteiros e armazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert");