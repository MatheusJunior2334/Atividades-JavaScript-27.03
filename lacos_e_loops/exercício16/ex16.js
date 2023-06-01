alert("A seguir, a sequência de Finobacci com valor até 500 + 1 sequência após esse valor: ")

let a = 0;
let b = 1;

let serie = [];

while (a < 500) {
    const c = a + b;
    a = b;
    b = c;
    serie.push(a)
}

alert(`A sequência de Finobacci que vai até uma série maior que 500 é: ${serie}`);

document.write(`Série: ${serie} <br/> <br/>`);

document.write("Exercício 16: A série de Fibonacci é formada pela sequência 0,1,1,2,3,5,8,13,21,34,55,... <br/>Faça um programa que gere a série até que o valor seja maior que 500.")