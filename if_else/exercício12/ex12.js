alert("A seguir digite três valores correspondentes aos três lados de um triângulo e descubra se o triângulo é equilátero, isósceles ou escaleno: ")

let side1 = Number(prompt("Digite o valor do primeiro lado do triângulo"));
let side2 = Number(prompt("Digite o valor do segundo lado do triângulo: "));
let side3 = Number(prompt("Digite o valor do trerceiro lado do triângulo: "));

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    if (side1 === side2 && side1 === side3) {
        alert("Os valores correspondem a um triângulo equilátero");
        document.write("Os valores correspondem a um triângulo equilátero");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        alert("Os valores correspondem a um triângulo isósceles");
        document.write("Os valores correspondem a um triângulo isósceles");
    } else {
        alert("Os valores correspondem a um triângulo escaleno");
        document.write("Os valores correspondem a um triângulo escaleno");
    }
} else {
    alert("Os valores inseridos são inválidos para determinar um triângulo");
    document.write("Os valores inseridos são invalidos para determinar um triângulo");
}

document.write("<br/> <br/> Exercício 12: Faça um script que peça os 3 lados de um triângulo. O script deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno. <br/> <br/> Dicas: <br/>Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro; <br/> Triângulo Equilátero: três lados iguais; <br/> Triângulo Isósceles: quaisquer dois lados iguais; <br/> Triângulo Escaleno: três lados diferentes;");