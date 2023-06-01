let nota = (prompt("Insira uma nota: "));

while (nota<0 || nota>10) {
    nota = (
        prompt("Nota inválida, tente novamente")
    )
}

alert ("Nota válida")
document.write("A nota inserida foi: ", nota, "<br/>", "<br/>")

document.write("Exercício 01: Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido")