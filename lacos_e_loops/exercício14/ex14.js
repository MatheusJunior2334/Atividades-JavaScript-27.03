alert("Digite a seguir diferentes números inteiros e veja a quantidade de números pares e ímpares: ");

let par = 0;
let impar = 0;

for (let i = 1; i <=10; i++) {
    let number = Number(prompt("Digite um número inteiro qualquer: "));
    if (number % 2 === 0) {
        par++;
    } else {
        impar++;
    }
}

alert(`Foram inseridos ${par} números pares e ${impar} números ímpares.`);

document.write("Exercício 14: Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares.")