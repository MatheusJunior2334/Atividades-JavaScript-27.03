alert("A seguir, digite uma determinada quantidade de números que deseja inserir e depois os números em si entre 0 e 1000 e descubra qual o maior número, o menor e a soma deles:");

let n = parseInt(prompt("Digite a quantidade de números a serem inseridos: "))

let zahlen = [];
let nummer;

for (let i = 0; i < n; i++) {
    nummer = parseInt(prompt("Digite qualquer número entre 0 e 1000: "));

    while (nummer < 0 || nummer > 1000 || isNaN(nummer)) {
        alert("Número inválido!")
        nummer = parseInt(prompt("Digite um número entre 0 e 1000: "));
    }

    zahlen.push(nummer);
}

let plus = 0;
let max = zahlen[0];
let min = zahlen[0];

for (let i = 0; i < zahlen.length; i++) {
    plus += zahlen[i];

    if (zahlen[i] > max) {
        max = zahlen[i];
    }

    if (zahlen[i] < min) {
        min = zahlen[i];
    }
}

alert (`O menor número inserido foi: ${min}`);
alert (`O maior número inserido foi: ${max}`);
alert (`A soma dos números inseridos é: ${plus}`);

document.write(`Números inseridos: ${n} <br/> Menor valor inserido: ${min} <br/> Maior valor inserido: ${max} <br/> Soma dos valores inseridos: ${plus} <br/> <br/>`);

document.write("Exercício 19: Altere o programa anterior para que ele aceite apenas números entre 0 e 1000 (Veja o Exercício 18).");