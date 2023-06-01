let semana = Number(prompt("Digite um número de 1 a 7 referente aos dias da semana: "));

switch (semana) {
    case 1: alert("Domingo");
    break

    case 2: alert("Segunda-feira");
    break

    case 3: alert("Terça-feira");
    break

    case 4: alert("Quarta-feira");
    break

    case 5: alert("Quinta-feira");
    break

    case 6: alert("Sexta-feira");
    break

    case 7: alert("Sábado");
    break


    default: alert("Valor inválido")
}

document.write("Exercício 10: Faça um script que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.")