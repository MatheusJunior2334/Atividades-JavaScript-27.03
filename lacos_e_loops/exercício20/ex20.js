alert("Digite a seguir um número inteiro qualquer, desde que seja menor que 16, para assim calcular o seu fatorial: ");

let repeat = true;

while (repeat) {
    let number = parseInt("Digite um número: ");

    while (number < 0 || number >= 16 || isNaN(number)) {
        alert("Número inserido inválido, tente novamente: ");
        number = parseInt("Digite um número: ");
    }

    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    alert(`O fatorial de ${number} é ${factorial}`);

    let answer = prompt("Queres calcular o fatorial de algum outro número: (S/N)").toUpperCase();

    while (answer !== "S" && answer !== "N") {
        answer = prompt("Valor inválido, digite S para sim ou N para não: ").toUpperCase();
    }

    if (answer === "N") {
        repeat = false;
    }
}

document.write("Exercício 20: Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes e limitando o fatorial a números inteiros positivos e menores que 16 (Veja o exercício 17).");