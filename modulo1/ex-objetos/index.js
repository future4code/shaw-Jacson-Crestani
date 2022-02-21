//Exercícios de interpretação de código 1

/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}


console.log(filme.elenco[0])   // mostra do primeiro ator do elenco  //
//"Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1]) // mostra ultimo elemento (ator) da string//
//"Virginia Cavendish"
console.log(filme.transmissoesHoje[2]) // retorna o elemento de indice 2 a lista 
//{canal: "Globo", horario: "14h"}
*/

//Exercícios de interpretação de código 2

/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"} // os '...' copia a informção já definida do objeto (espalhamento)

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) 
    // nome: "Juca", 
    //idade: 3, 
    //raca: "SRD"

console.log(gato)
    // nome: "Juba", 
    //idade: 3, 
    //raca: "SRD"
console.log(tartaruga)
    // nome: "Jubo", 
    //idade: 3, 
    //raca: "SRD"
*/



//Exercícios de interpretação de código 3


/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))  //imprime false
console.log(minhaFuncao(pessoa, "altura")) //imprime undefined


/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // retorna false
console.log(minhaFuncao(pessoa, "altura")) // retorna undefined
*/

// exercicio escrita 
//Exercícios de escrita de código 1
/*const pessoa = {
    nome: "Jacson",
    apelidos: ["Jack", "JC", "Pingo"],
}
function imprimir (pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos},`)
}
const novaPessoa = {
    ...pessoa,
    apelidos: ["nado", "ando", "fando"]
    }
    */
//Exercicio 2

/*function funcao (x) {
    return Array=[x.nome, x.nome.length, x.idade, x.profissao, x.profissao.length]
}

const pessoa1 = {
    nome: "jacson",
    idade: 32,
    profissao:"estudante1",
}

const pessoa2 = {
    nome: "Lucas",
    idade: 38,
    profissao:"estudante2",   
}

funcao (pessoa1)

console.log(funcao(pessoa1))
console.log(funcao(pessoa2))*/


    //Exercícios de escrita de código 3
/*
const carrinho = []

    const objeto1 = {
        nome: "abacate",
        disponibilidade: true
}

    const objeto2 = {
        nome: "uva",
        disponibilidade: true
}

    const objeto3 = {
        nome: "pera",
        disponibilidade: true
}

function adicionaNoArray(objeto) {
   carrinho.push(objeto)
}
adicionaNoArray(objeto1)
adicionaNoArray(objeto2)
adicionaNoArray(objeto3)

console.log(carrinho)
*/


