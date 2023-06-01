alert("Digite dois números inteiros distintos e veja os números que estão entre eles: ")

let n1 = parseInt(prompt("Digite um número inteiro qualquer: "));
let n2 = parseInt(prompt("Digite outro número inteiro maior que o anterior: "));
let soma = 0;

for (let i = n1 + 1; i <= n2 - 1; i++) {
    document.write(i, ",");
    soma += i;
}

document.write(`<br/> <br/> A soma dos números entre ${n1} e ${n2} é: ${soma}. <br/> <br/>`);

document.write("Exercício 11: Altere o programa anterior para mostrar no final a soma dos números (Veja o exercício 10).");
