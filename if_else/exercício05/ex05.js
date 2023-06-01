let n1 = parseInt(prompt("Digite um número qualquer: "));
let n2 = parseInt(prompt("Digite outro número qualquer: "));
let n3 = parseInt(prompt("Digite outro número qualquer: "));

let higher = Math.max(n1, n2, n3);
let lower = Math.min(n1, n2, n3);

alert("O maior número digitado foi: " + higher + " e o menor foi: " + lower);

document.write("Exercício 05: Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles");