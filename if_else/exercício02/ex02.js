let nota1 = parseFloat(prompt("Digite a sua primeira nota de 0 a 10: "));
let nota2 = parseFloat(prompt("Digite a sua segunda nota de 0 a 10: "));

let media = (Number(nota1) + Number(nota2)) / 2;

if (media === 10) {
    alert("Aprovado com Distinção");
} else if (media >=7) {
    alert("Aprovado");
} else {
    alert("Reprovado");
}

document.write("Exercício 02: Faça um script que peça duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:", "<br/>", "A mensagem 'Aprovado', se a média alcançada for maior ou igual a sete;", "<br/>", "A mensagem 'Reprovado', se a média for menor do que sete;", "<br/>", "A mensagem 'Aprovado com Distinção', se a média for igual a dez.")