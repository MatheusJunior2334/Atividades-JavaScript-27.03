const salario = parseFloat(prompt("Digite o salário do funcionário: "));
let salario_ajustado;

if(salario <= 280) {
    salario_ajustado = salario + (salario * 0.2);
} else if(salario > 280 && salario <= 700) {
    salario_ajustado = salario + (salario * 0.15);
} else if (salario > 700 && salario <= 1500) {
    salario_ajustado = salario + (salario * 0.1);
} else {
    salario_ajustado = salario + (salario * 0.05);
}

const ajuste = salario_ajustado - salario;

alert(`Salário antes do reajuste: R$ ${salario.toFixed(2)}`);
alert(`Percentual do ajuste: ${(((salario_ajustado / salario) - 1) * 100).toFixed(2)}%`);
alert(`Valor aumentado: R$ ${ajuste.toFixed(2)}`);
alert(`Novo salário ajustado: R$ ${salario_ajustado.toFixed(2)}`);

document.write(`Salário antes do reajuste: R$ ${salario.toFixed(2)} <br/> `);
document.write(`Percentual do ajuste: ${(((salario_ajustado / salario) - 1) * 100).toFixed(2)}% <br/>`);
document.write(`Valor aumentado: R$ ${ajuste.toFixed(2)}<br/>`);
document.write(`Novo salário ajustado: R$ ${salario_ajustado.toFixed(2)} <br/> <br/> <br/>`);

document.write("Exercício 08: As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.<br/> <br/> Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:<br/> <br/> Salários até R$ 280,00 (incluindo) : aumento de 20%; <br/> Salários entre R$ 280,00 e R$ 700,00 : aumento de 15%; <br/> Salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%; <br/> Salários de R$ 1500,00 em diante : aumento de 5% <br/> <br/> Após o aumento ser realizado, informe na tela: <br/> O salário antes do reajuste; <br/> O percentual de aumento aplicado; <br/> O valor do aumento; <br/> O novo salário, após o aumento.")