<<<<<<< HEAD
<<<<<<< HEAD
//Exetcício de interpretação de código 1
=======
>>>>>>> 364fd7e1edf918a17cb3932546279aaed59b4f1f
=======
>>>>>>> 364fd7e1edf918a17cb3932546279aaed59b4f1f

let array 
console.log('a. ', array); // 'a.' fica indefinido

array = null;
console.log('b. ', array); //  o 'b.' fica null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];    // tamanho do array 13
console.log('c. ', array.length);

let i = 0;
console.log('d. ', array[i]);    // array não definido

array[i+1] = 19;
console.log('e. ', array);       // array não definido

const valor = array[i+6];
console.log('f. ', valor);     // array não defimido

//Exercício de imterpretação de código 2

const frase = prompt("Digite uma frase");
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length); // todas a frase fica em caixa alta e os "A"passa a ser "I"
// "SUBI NUM ÔNIBUS EM MIRROCOS"

//Exercício de escrita de código 1

const seuNome = prompt("Digite seu nome:");
console.log(seuNome);
const email = prompt("Digite seu email:");
console.log(email);
const cadastro = `O e-mail ${email} foi cadastrado com sucesso. Seja bem vindo ${seuNome}!`;
console.log(cadastro);

//Exercicio de escrita de código 2

const comidasPreferidas = ["Feijão.", "Arroz.", "Farofa.", "Cuzcuz.", "carne de panela."];
console.log(comidasPreferidas);
const comida1 = prompt("Digite sua comigda preferida:");
console.log(comida1);
comidasPreferidas.splice(1, 1, comida1);
console.log(`Essas são minhas comidas preferidas`);
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);

//Exercício 3

const listaDeTarefas = [];
const tarefa1 = prompt("adicione a primeira tarefa:");
console.log(tarefa1);
listaDeTarefas.push(tarefa1);
const tarefa2 = prompt("adicione a segunda tarefa:");
console.log(tarefa2);
listaDeTarefas.push(tarefa2);
const tarefa3 = prompt("adicione  a terceira tarefa:");
console.log(tarefa3);
listaDeTarefas.push(tarefa3);
console.log(listaDeTarefas);
const indice = prompt("Digite o indice da tarefa já realizada:");
listaDeTarefas.splice(indice, 1);
console.log(listaDeTarefas);
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 364fd7e1edf918a17cb3932546279aaed59b4f1f
=======
>>>>>>> 364fd7e1edf918a17cb3932546279aaed59b4f1f
