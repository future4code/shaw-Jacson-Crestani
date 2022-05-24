/*const name = process.argv[2]
let age = Number(process.argv[3])
const soma = age+7

console.log(`Meu nome é ${name}... e tenho ${age} anos, daqui 7 anos tenho ${soma}.`)
*/

//exe2

/*
const soma = (a,b) => 2+2
console.log(soma(2,2))
*/

//3

/*
const subtracao = (a,b) => a-b
console.log(subtracao(10,2))
*/

/*
const multiplicacao = (a,b) => a*b
console.log(multiplicacao(50,2))
  */    

/*
const divisao = (a,b) => a/b
console.log(divisao(10,2))
*/

/*
process.argv[0] = //node
process.argv[1] = //caminho para o arquivo sendo executado
process.argv[2] = //primeiro argumento
process.argv[3] = //segundo argumento
*/

const name = process.argv[2]
let age = Number(process.argv[3])
const add = tarefas => tarefa + tarefa
const tarefa = i => i + 1

let tarefas = [tarefa]
for(let i = 0; i < age; i++){
    tarefas.push(tarefa(i))
}

tarefas:[
	"Lavar a louça",
	"Comprar Leite",
]

console.log(` adição de tarefas ${tarefas}`)
