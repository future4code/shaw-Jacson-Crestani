let a = 10  // declarando variavel a que recebe 10
let b = 10  // declarando variavel b que recebe 10

console.log(b)  //imprime no console " numero de b que é 10 " 

b = 5 // variavel b que é 10 passa a ser 5 
console.log(a, b) // imprime no console " 10, 5 "


let a = 10  // declarando variavel a recebe 10
let b = 20  // declarando variavel b recebe 20
c = a  //  c recebe valor de a = 10
b = c  //  b recebe valor de c = 10
a = b  //  a revebe valor de b = 10

console.log(a, b, c)  // impreme no console " 10, 10, 10 "


let horaTrabalhadaPorDia = prompt ("Quantas horas você trabalha por dia?")
let valorPorDia = prompt ("Quanto você recebe por dia?")
alert ('você recebe $', horaTrabalhadaPorDia/valorPorDia, 'por hora', )


const nome = nome
const idade = idade

typeof nome // undefined
typeof idade // number

nome = prompt('qual o seu nome?')
idade = prompt('Qual asua idade?')
console.log(typeof nome, typeof idade)

console.log("Olá!", "meu nome é", nome, "e tenho", idade, "anos")

let perguntaRoupa = prompt("Você esta usando roupa azul hoje? responda apenas sim ou não")
let temAnimal = prompt("você tem animal?" )
let gostaDeSuco = prompt("Você gosta de suco?")
console.log = ("pergunta roupa ", perguntaRoupa)
console.log = ("temAnimal", temAnimal)
console.log = ("gosto de suco", gostaDeSuco)


let a = 10 
 let b = 25
  let c = 25

  a = c  // a recebe 25
  b = a  // b recebe 10
  c = b // c recebe 25
  
  console.log("O novo valor de a é", a) //valor de a é 25
  console.log("O novo valor de b é", b) // valor de b é 10
