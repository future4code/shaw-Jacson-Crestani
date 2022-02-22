
//Exercicios de interpretacao de codigo 1


// realiza o teste se o numero que voce digita vai ser igual a zero. Se for, "passou no teste"
//caso contrario a mensagem sera "Nao passou nno teste "
const respostaDoUsuario = prompt("Digite o numero que voce quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {  // O numero digitado no prompt / 2 o resto for 0, imprime "Passou no teste"
  console.log("Passou no teste.")
} else {
  console.log("Nao passou no teste.") // se o resto for diferente de 0 "Nao passou no teste"
}



//Exercicios de interpretacao de codigo 2

// esse codigo te diz o valor de cada fruta, se a fruta nao tiver na lista undefined
/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maca":
    preco = 2.25  // "O preco da fruta maca e R$ 2.25 "
    break
  case "Uva":
    preco = 0.30
    break;
  case "Pera":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:  // O preco da fruta  pera  e  R$  5
    preco = 5
    break;
}
console.log("O preco da fruta ", fruta, " e ", "R$ ", preco)
*/


//Exercicios de interpretacao de codigo 3

/*
const numero = Number(prompt("Digite o primeiro numero.")) // pede para voce digitar um numero 

if(numero > 0) {  // se o numero for maior que 0 "Esse numero passou no teste "
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem e secreta!!!" // mesagem foi declarada, mas nuca é lido
}

console.log(mensagem)*/


 //Exercícios de escrita de código 1
 /*
const habilitacao = Number(prompt("qual a sua idade"))

    if (habilitacao > 17){
        console.log("Você pode dirigir")
    }else {
        console.log("você não pode dirigir")
    }

    */


//Exercícios de escrita de código 2

/*
let horario = (prompt("Digite em qual turno você esta, apenas com M, V ou N"))

function imprimeTurno(turno) {
    switch (turno) {
        case "M":
            console.log("Bom dia!")
            break;
        case "V":
            console.log("Boa tarde!")
            break;
                 default:
        case "N":  
            console.log("Boa noite!")
            break;
    }
}
imprimeTurno(horario)

//Exercícios de escrita de código 3

let horario = (prompt("Digite em qual turno você esta, apenas com M, V ou N"))

function imprimeTurno(turno) {
    switch (turno) {
        case "M":
            console.log("Bom dia!")
            break;
        case "V":
            console.log("Boa tarde!")
            break;
                 default:
        case "N":  
            console.log("Boa noite!")
            break;
    }
}
imprimeTurno(horario)
*/


//Exercícios de escrita de código 4
/*
const genero = prompt("Digite o genero do filme:")
const precoIngresso = Number(prompt("digite o valor do ingresso"))
function cinema() {
    if ((genero && precoIngresso) === "fantasia" < 15) {
            console.log("Bom filme!")
    }else{
            console.log("Escolha outro filme :(")
    }  

}
cinema()
*/












