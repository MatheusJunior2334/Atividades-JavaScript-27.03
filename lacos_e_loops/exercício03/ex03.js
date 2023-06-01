let nome = prompt("Digite o seu nome: ");
let idade = prompt("Digite a sua idade: ");
let salario = prompt("Entre com o seu salário");
let sexo = prompt("Entre com o seu sexo (f ou m): ");
let e_civil = prompt("Entre com seu estado civil (s, c, v ou d): ")


while (nome.length<3) {
    alert ("O seu nome deve conter mais de 3 caracteres")
    nome = prompt("Digite o seu nome: ")
}

while (idade<0 || idade>150) {
    alert ("Idade inválida")
    idade = prompt ("Digite a sua idade:")
}

while (salario<0) {
    alert ("Salário inválido, digite um valor maior que '1'")
    salario = prompt("Entre com o sue salário")
}

while (sexo !== "f" && sexo !=="m") {
    alert ("Digite 'f' ou 'm' para sexo: ")
    sexo = prompt("Entre com o seu sexo (f ou m): ")
}

while (e_civil !== "s" && e_civil !== "c" && e_civil !== "v" && e_civil !== "d") {
    alert ("Estado civil inválido, digite 's', 'c', 'v ou 'd'")
    e_civil = prompt("Entre com seu estado civil (s, c, v ou d): ")
}

alert ("Cadastro finalizado com sucesso!")
document.write("Exercício03: Faça um programa que leia e valide as seguintes informações: ", "<br/>",

"Nome: maior que 3 caracteres; ", "<br/>",

"Idade: entre 0 e 150;", "<br/>", 

"Salário: maior que zero;", "<br/>", 

"Sexo: 'f' ou 'm'; ", "<br/>",

"Estado Civil: 's', 'c', 'v', 'd';" )