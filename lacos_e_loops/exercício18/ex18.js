alert("A seguir, digite uma determinada quantidade de números que deseja inserir e depois os números em si e descubra qual o maior número, o menor e a soma deles:");

let n = parseInt(prompt("Digite a quantidade de números a serem inseridos: "));
let min, max, plus = 0;

for (let i = 0; i < n; i++) {
    const number = parseInt(prompt(`Digite o ${i + 1}º número: `));

    if (i === 0) {
        min = number;
        max = number;
    } else {
        if (number < min) {
            min = number;
        } if (number > max) {
            max = number
        }
    }

    plus += number;
}

alert(`O menor número inserido foi: ${min}`);
alert(`O maior número inserido foi: ${max}`);
alert(`A soma dos valores inseridos é: ${plus}`);

document.write(`Números inseridos: ${n} <br/> Menor valor inserido: ${min} <br/> Maior valor inserido: ${max} <br/> Soma dos valores inseridos: ${plus} <br/> <br/>`);

document.write("Exercício 18: Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.")