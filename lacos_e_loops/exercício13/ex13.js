alert("A seguir digite dois números, um funcionará como base e outro como um expoente de uma potência: ");

let base = Number(prompt("Digite o número da base: "));
let expoente = Number(prompt("Digite o número do expoente: "));

let resultado = base;

for (let i = 1; i < expoente; i++) {
    resultado *= base;
}

alert(`${base} elevado a ${expoente} é igual a ${resultado}.`);

document.write("Exercício 13: Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem.");