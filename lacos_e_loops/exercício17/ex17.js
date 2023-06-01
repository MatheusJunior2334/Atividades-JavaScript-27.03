let numero = parseInt(prompt("Digite um número inteiro qualquer: "));
let resultado = 1;
let count = 1;

while(count <= numero) {
    resultado *= count;
    count++;
}

alert(`O resultado fatorial do número inserido foi de: ${resultado}`);

document.write("Exercício 17: Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. <br/> Ex.: 5! = 5.4.3.2.1 = 120");