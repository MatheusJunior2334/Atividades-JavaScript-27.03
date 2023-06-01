const valorHora = parseFloat(prompt("Digite o valor da hora trabalhada: "));
const horasTrabalhadas = parseFloat(
  prompt("Digite a quantidade de horas trabalhadas: ")
);

const salarioBruto = valorHora * horasTrabalhadas;

let ir = 0;
if (salarioBruto > 2500) {
  ir = salarioBruto * 0.2;
} else if (salarioBruto > 1500) {
  ir = salarioBruto * 0.1;
} else {
  ir = salarioBruto * 0.05;
}

const inss = salarioBruto * 0.1;

const fgts = salarioBruto * 0.11;

const totalDescontos = ir + inss;

const salarioLiquido = salarioBruto - totalDescontos;

alert(`Salário Bruto: (${valorHora} * ${horasTrabalhadas}) : R$ ${salarioBruto.toFixed(
  2
)}
(-) IR (${((ir / salarioBruto) * 100).toFixed(0)}%) : R$ ${ir.toFixed(2)}
(-) INSS (${((inss / salarioBruto) * 100).toFixed(0)}%) : R$ ${inss.toFixed(
  2
)}
FGTS (11%) : R$ ${fgts.toFixed(2)}
Total de descontos : R$ ${totalDescontos.toFixed(2)}
Salário Líquido : R$ ${salarioLiquido.toFixed(2)}`);

document.write("Exercício 09: Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O script deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês. <br/> <br/> Desconto do IR: <br/> Salário Bruto até 900 (inclusive) - isento <br/> Salário Bruto até 1500 (inclusive) - desconto de 5% <br/> Salário Bruto até 2500 (inclusive) - desconto de 10% <br/> Salário Bruto acima de 2500 - desconto de 20% <br/><br/> Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.	<br/> Salário Bruto: (5 * 220): R$ 1100,00 <br/> (-) IR (5%): R$55,00 <br/> (-) INSS ( 10%): R$110,00 <br/> FGTS (11%): R$121,00 <br/>Total de descontos: R$165,00 <br/> Salário Liquido: R$935,00 <br/> <br/>")