alert("A seguir digite um termo (número qualquer) para descobrir a série dele dentro do esquema de Finobacci: ");

let term = parseInt(prompt("Digite um número como termo: "));
let penultimate = 0, last = 1;
let result;

if (term <= 2) {
    result = term - 1;
} else {
    for(let i = 3; i <= term; i++) {
        result = penultimate + last;
        penultimate = last;
        last = result;
    }
}

alert(`O termo ${term} faz parte sa sequência ${result} de Finobacci.`);

document.write(`Termo: ${term}<br/> Sequência: ${result}`);

document.write("<br/> <br/>Exercício 15: A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34,55,... <br/> Faça um programa capaz de gerar a série até o n−ésimo termo.");