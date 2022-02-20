// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Qual a altura do retangulo?:"))
  let largura = Number(prompt("Qual a altura do retangulo?:"))
  let resultado = altura * largura
  console.log(resultado)
  
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Em qual ano estamos?:"))
  let anoNascimento = Number(prompt("Qual sua data de nascimento?:"))
  let resultado = anoAtual - anoNascimento 
  console.log(resultado)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui 
const peso = Number(prompt("Digite seu peso:"))
const altura = Number(prompt("Digite sua altura:"))
const imc =  peso / (altura * altura)
console.log(`Seu indice de massa corporal é ${imc}`)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome = prompt("Qual seu nome?")
  let idade = Number(prompt("Qual sua idade?"))
  let email = prompt("Qual seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Digite sua primeira cor:")
const cor2 = prompt("Digite sua segunda cor:")
const cor3 = prompt("Digite sua terceira cor:")

console.log(`Suas cores favoritas são: ${cor1}, ${cor2}, ${cor3}`)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const frase = "Óla tudo bem?"
console.log(frase.toUpperCase())
}

// EXERCÍCIO 07

custo = 3000
valorIngresso = 100
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let valorDeCada = (custo / valorIngresso)
return valorDeCada
}


// EXERCÍCIO 08

const string1 = prompt("Digite uma palavra:") // definicao de string
const string2 = prompt("Digite outra palavra:")
function checaStringsMesmoTamanho(string1, string2) {
const tamanho1 = string1.length //calcula o tamanho string1
const tamanho2 = string2.length //calcula o tamanho string2
let resultado = tamanho1 - tamanho2 === 0 // compara o tamanho das strings
return resultado // retorna valor true se o resultado for === a zero 
}

// EXERCÍCIO 09

array = ["ola", "abc"]
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const primeiroElemento = array[0]
return primeiroElemento
}

// EXERCÍCIO 10
array = ["ola", "abc"]
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const ultimoElemento = array[1]
return ultimoElemento
}

// EXERCÍCIO 11
array = ["ola","abc"]
function trocaPrimeiroEUltimo(array) {
 primeiro = array.splice(0, 1)
 console.log(primeiro)
}

// EXERCÍCIO 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}