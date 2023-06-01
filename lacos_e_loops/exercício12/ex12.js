let tabuada = prompt("Insira o número da tabuada que deseja ver: ");

for (number=1; number<=10; number++) {
    document.write (tabuada + " X " + number + " = " + (tabuada * number) + "<br/>");
}

document.write("<br/> <br/> Exercício 12: Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo: <br/> <br/> Tabuada de 5: <br/> 5 X 1 = 5; <br/> 5 X 2 = 10; <br/> 5 X 10 = 50; ");