let n1 = parseInt(prompt("Digite um número qualquer: "));
let n2 = parseInt(prompt("Digite outro número qualquer: "));
let n3 = parseInt(prompt("Digite outro número qualquer: "));

if (n1 >= n2 && n1 >= n3) {
    if (n1 >= n3) {
        alert(`${n1}, ${n2}, ${n3}`);
    } else {
        alert(`${n1}, ${n3}, ${n2}`);
    }
} else if (n2 >= n1 && n2 >= n3) {
    if (n1 >= n3) {
        alert(`${n2}, ${n1}, ${n3}`);
    } else {
        alert(`${n2}, ${n3}, ${n1}`);
    }
} else {
    if (n1 >= n2) {
        alert(`${n3}, ${n1}, ${n2}`);
    } else {
        alert(`${n3}, ${n2}, ${n1}`)
    }
}

document.write("Exercício 06: Faça um script que leia três números e mostre-os em ordem decrescente.");