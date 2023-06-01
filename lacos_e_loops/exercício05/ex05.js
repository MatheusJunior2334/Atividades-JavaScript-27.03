let paisA = parseInt(prompt("Digite a população do país A: "));
let paisB = parseInt(prompt("Digite a população do país B: "));

const crescimentoA = parseFloat(prompt("Digite uma taxa de crescimento para o país A: "));
const crescimentoB = parseFloat(prompt("Digite uma taxa de crescimento para o país B: "));

let anos = 0;

while (paisA < paisB) {
    paisA += paisA * crescimentoA;
    paisB += paisB * crescimentoB;
    anos++;
}

alert(`A população do País A irá se igualar ao País B em aproximadamente ${anos} anos`);
document.write("Exercício 05: Altere o programa do exercício anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação")