alert("Digite dois números inteiros distintos e veja os números que estão entre eles: ")

let n1 = parseInt(prompt("Digite um número inteiro qualquer: "));
let n2 = parseInt(prompt("Digite outro número inteiro maior que o anterior: "));

for (let i = n1 + 1; i <= n2 - 1; i++) {
    document.write(i, ",");
} 

document.write("<br/> <br/> Exercício 10: Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.")