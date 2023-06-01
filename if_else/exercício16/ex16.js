const number = parseInt(prompt("Digite um número qualquer: "));

if (number % 2 === 0) {
    alert("O número: " + number + " é par");
} else {
    alert("O número: " + number + " é ímpar");
}

document.write("Exercício 16: Faça um script que peça um número inteiro e determine se ele é par ou ímpar.<br/> Dica: utilize o operador módulo (resto da divisão): %")