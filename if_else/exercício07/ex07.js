let turno = prompt("Em qual turno você estuda? Digite M(matutino), V(vespertino) ou N(noturno)");

if (turno.toUpperCase() == "M") {
    alert("Bom Dia!");
} else if (turno.toUpperCase() == "V") {
    alert("Boa Tarde!");
} else if (turno.toUpperCase() == "N") {
    alert("Boa Noite!");
} else {
    alert("Valor Inválido");
}

document.write("Exercício 07: Faça um script que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N-Noturno. Imprima a mensagem 'Bom Dia!', 'Boa Tarde!' ou 'Boa Noite!' ou 'Valor Inválido!', conforme o caso.");