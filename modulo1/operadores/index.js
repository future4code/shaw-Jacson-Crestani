//Exercício 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 
console.log("a. ", resultado); // false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado); // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado); // true

console.log("d. ", typeof resultado)*/ // boolean

//Exercício 2

let primeiroNumero = prompt("Digite um numero!");    // O comando Number deve envolver o prompt
let segundoNumero = prompt("Digite outro numero!");  // O comando Number deve envolver o prompt
let resultado = primeiroNumero + segundoNumero

const soma = primeiroNumero + segundoNumero

console.log(soma); 

//Exercicio 3

// A solução para soma dos números o namber envolver o prompt

//Exercício de escrita de código

let idadeUsuario = Number (prompt("Digite a idade do usuário: "))
  console.log(idadeUsuario);
let idadeAmigo = Number (prompt("Qual a idade do seu melhor amigo? "))
  console.log(idadeAmigo);
let maisVelho = toString(prompt("Sua idade é maior do que a do seu melhor amigo? S ou N"))
  console.log(maisVelho);
let somaDasIdades = idadeUsuario + idadeAmigo

let soma = idadeUsuario + idadeAmigo
  console.log(soma);

//Exercício 2

let numeroPar = Number (prompt("Insira um número par:"))
  console.log(numeroPar);

// Imprime no console da mesma forma acredito que eu não tenha dado o comando 


//Exercicio 3

let idade = Number (prompt("Digite sua idade:" ));
let meses = Number (12);
let resultado = idade * meses
const mult = idade * meses
  console.log(mult);

let idade = Number (prompt("Digite sua idade:"));
let dias = Number (365);
let resultado = idade * dias 
const mult = idade * dias 
  console.log(resultado);

let idade = Number (prompt("Digite sua idade:"));
let horas = Number (1440);
let resultado = idade * horas
const mult = idade * horas
  console.log(resultado);

//Exercício 4

let primeiroNumero = Number (prompt("Digite um número:"));
let outroNumero = Number (prompt("Digite outro número:"));
let primeiroMaior = primeiroNumero >= outroNumero
let primeiroIgual = primeiroNumero == outroNumero
let divisaoPrimeiroOutro = primeiroNumero % outroNumero === 0
let divisaoOutroPrimeiro = outroNumero % primeiroNumero === 0


  console.log("O primeiro numero é maior que segundo?", primeiroMaior); 
  console.log("O primeiro numero é igual ao segundo?", primeiroIgual);
  console.log("O primeiro numero é divisível pelo segundo?", divisaoPrimeiroOutro);
  console.log("O segundo numero é divisível pelo primeiro?", divisaoOutroPrimeiro);
