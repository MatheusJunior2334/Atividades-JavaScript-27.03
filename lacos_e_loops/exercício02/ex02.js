let usuario = prompt("Digite o seu nome de usuário:");
let senha = prompt("Digite a sua senha: ");

while (usuario==senha) {
    alert ("Erro, tente novamente")
    usuario = prompt("Digite o seu nome de usuário: ");
    senha = prompt("Digite a sua senha");
}

alert ("Usuário criado com sucesso");
document.write("Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. ")