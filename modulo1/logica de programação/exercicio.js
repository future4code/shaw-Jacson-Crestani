

let nome = prompt("Digite o seu nome");
let anoNasc = Number(prompt("Digite o ano que você nasceu"));
let anoAtual = Number(prompt("digite o ano que estamos"));

const resultadoNome = nome
const resultadoNascimento = anoNasc
const resultadoMaiorDeIdade = anoAtual - anoNasc
const resultadoAnoAtual= anoAtual
const idadeFutura = 2050 - anoNasc

console.log("Nome:", nome);
console.log("Ano de nascimento:", resultadoNascimento);
console.log("É maior de idade?", resultadoMaiorDeIdade >= 18);
console.log("Idade em 2050", idadeFutura);
