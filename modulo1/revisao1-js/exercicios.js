// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02


function retornaArrayInvertido(array) {
    return array.reverse();

}
 
// EXERCÍCIO 03

//let array = [36,12,56,7,3];
function retornaArrayOrdenado(array) {
  function compararNumeros(a, b) {
  return a - b;
}
    return array.sort(compararNumeros);
}

// EXERCÍCIO 04

//let array =  [1,2,3,4,5,6,7,8]
function retornaNumerosPares(array) {
  let arrayPares = [];
    for(let i = 0; i <= array.length; i++){      
     if (array[i] % 2 === 0);
    arrayPares.push(array[i]);
    }
    return arrayPares
}

// EXERCÍCIO 05
//let array = [1, 2, 3, 4, 5, 6]
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = []
    for(let i = 0; i <= array.length; i++){      
     if (array[i] % 2 === 0)
    arrayPares.push(array[i] * array[i])
    }
    return arrayPares
}

// EXERCÍCIO 06
//let array = [1,2,3,4,5,6,7]
function retornaMaiorNumero(array) {
    let maiorNumero = 0
  for(let i = 0; i <= array.length; i++) {
    if (array[i] > maiorNumero)
    maiorNumero = array[i]
  }
  return maiorNumero
}
//console.log(maiorNumero)
// EXERCÍCIO 07

let num1 = 15
let num2 = 30
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = num1
    let menorNumero = num2
     maiorDivisivelPorMenor
    if (num2 > num1){
    maiorNumero = num2
    menorNumero = num1
    }
    maiorDivisivelPorMenor = maiorNumero % menorNumero == 0
}
console.log(maiorDivisivelPorMenor)
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}