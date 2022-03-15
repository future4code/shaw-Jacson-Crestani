
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:
/*
function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b
*/
/*
function checarIgualdade(a, b) {
    
    return `No comparativo de igualdade ${a}!==${b} é ${a !== b}`
    
}
console.log(checarIgualdade(3, 4));

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b) {

    return `No comparativo maior ${a} > ${b} é ${a < b}`
}
console.log(verificaSeEMaior(321, 2156));
*/

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= 


// CONDICIONAIS
/*
// Exercício 3------------------------------------------------------------------------------------
const nomeDoUsuario=prompt( "digite seu nome")
let anoDeNascimento= Number(prompt("qual seu ano de nascimento") )
const senhaDoUsuario =prompt("senha de usuario")
const  nacionalidade= prompt("digite sua nascionalidade!")
let idade = 2022 - anoDeNascimento
const usuario = []
const cadastro = () => {
     if (anoDeNascimento <= 18) {
            console.log("você não tem data para se cadastra!")
     }else if (senhaDoUsuario.length < 6){
         console.log("Digite pelo menos 6 digitos!")
     }else if(nacionalidade == "brasileiro"){
console.log("voce foi cadastrado")
     }else {
         console.log("voce nao foi cadastrado")
     }
}
let objUsuario ={
    nome:nomeDoUsuario,
    ano:idade,
    senha:senhaDoUsuario,
    nascionalidade:nacionalidade
    }
usuario.push(objUsuario)
console.log(usuario)
console.log(cadastro());
 
// Exercício 4-----------------------------------------------------------------------------------------------
let senha = prompt("Digite sua senha:")
const login = () => {
if (senha === senhaDoUsuario){
    return "Usuário Logado"
}else {
    return "Senha Inválida"
}
}

console.log(login(senha));
*/
// Exercício 5----------------------------------------------------------------------------------------------------
/*
const primeiraDose = () =>{
    let nome = prompt("qual seu nome?")
    let vacina = prompt("qual vacina você tomou?")
    let tempo
    let data

    if(vacina === "coronavac"){
        return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo = "28 dias"} dias. Compareça no posto na data ${data = "Dia 10 de abril"}.`
    }else if(vacina === "astrazenica"){
        return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo = "90 dias"} dias. Compareça no posto na data ${data = "dia 11 de junho"}.`
    }else{
        return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo = "90 dias"} dias. Compareça no posto na data ${data = "dia 11 de junho"}.`
    }
}
console.log(primeiraDose())

*/
// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------
/*
const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
        return {...usuarios, nomeDoUsuario, imunizacao: "completa"}

}

console.log(segundaDose("Barbara"));
*/
// Exercício 7 --------------------------------------------------------------------------------------

//const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta"}
    ]
    for(let i = 0; i < usuarios.length; i++){
       if (usuarios[i].imunizacao == "incompleta"){
        console.log(`Olá ${usuarios[i].nome}! Sua imunização está ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
       }
    }
    
    
//}



// DESAFIO------------------------------------------------------------------------------------------
/*
const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());
*/