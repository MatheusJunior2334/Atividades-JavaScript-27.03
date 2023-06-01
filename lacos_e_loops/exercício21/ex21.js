alert("A seguir digite um número qualquer e descubra se ele é número primo ou não: ");

let number = parseInt(prompt("Informe um número qualquer: "));
let prime = true;

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        prime = false;
        break;
    }
}

if (prime) {
    alert (`O número ${number} é um número primo.`);
} else {
    alert (`O número ${number} não é um número primo.`)
}

if (prime) {
    document.write(`Número inserido: ${number} <br/> É número primo: Sim`);
} else {
    document.write(`Número inserido: ${number} <br/> É número primo: Não`);
}

document.write("<br/> <br/> Exercício 21: Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.");