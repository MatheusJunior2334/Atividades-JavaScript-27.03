alert ("A seguir digite duas notas referentes aos dois semestres e veja a média, o conceito e se você foi aprovado ou não: ");

const n1 = parseFloat(prompt("Digite a primeira nota: "));
const n2 = parseFloat(prompt("Digite a segunda nota: "));
let conceito;

const media = (n1 + n2) / 2;

alert (`Nota do primeiro semestre: ${n1}`);
alert (`Nota do segundo semestre: ${n2}`);
alert (`Média: ${media}`);

if (media >= 9) {
    conceito = "A";
} else if (media >= 7.5) {
    conceito = "B";
} else if (media >= 6) {
    conceito = "C";
} else if (media >= 4) {
    conceito = "D";
} else {
    conceito = "E";
}

alert (`Conceito: ${conceito}`);

if (conceito === "A" || conceito === "B" || conceito === "C") {
    alert("Parabéns, você foi aprovado :)");
} else {
    alert("Lamentamos, mas você foi reprovado :(")
}


document.write(`Nota do primeiro semestre: ${n1} <br/>`);
document.write(`Nota do segundo semestre: ${n2} <br/>`);
document.write(`Média das notas: ${media} <br/>`);
document.write(`Conceito: ${conceito} <br/> <br/>`);

document.write("Exercício 11: Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo: <br/> <br/> Média de Aproveitamento Conceito <br/> Entre 9.0 e 10.0 = A <br/>Entre 7.5 e 9.0 = B <br/> Entre 6.0 e 7.5 = C <br/> Entre 4.0 e 6.0 = D <br/> Entre 4.0 e zero = E <br/> <br/> O algoritmo deve mostrar numa janela de alertas notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.")