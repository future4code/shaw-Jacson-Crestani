//Exercícios de interpretação de código 



const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
const novoArrayA = usuarios.map((item, index, array) => {
    console.log(item, index, array);
  });

  
 //Exercícios de interpretação de código 2



 const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  });
  
    console.log(novoArrayB);



//Exercícios de interpretação de código 3



const usuarios = [
    { nome: "Felipo", apelido: "Felipão" },
    { nome: "Crestani", apelido: "Jack" },
    { nome: "Moni", apelido: "MOM" },
  ]
const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Felião"
  })
    console.log(novoArrayC);
  


// Exercícios de escrita de código 1


const pets = [ 
    { nome: "Lupin", raca: "Salsicha"},           
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]   

const pets2 = pets.map((i) => {
     return i.nome
});
  console.log (pets2);

const pets3 = pets.filter((i) => {
     return i.raca.toLocaleLowerCase() === "vira-lata"
});
  console.log(pets3);



// Exercícios de escrita de código 2


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 //a)
const nomesFiltrados = produtos.map((produto) => {
     return produto.nome
});
    console.log(nomesFiltrados);

//b)

//c)
const soBebidas = produtos.filter((item, index, array) => {
     return item.categoria === "Bebidas"
})
    onsole.log(soBebidas);
 
//d)
 const bebidas1 = produtos.filter((item, index,array) => {
    return item = i.categoria.toLocaleLowerCase() === "bebidas"
    
 })
 console.log(bebidas1)

//e)
 const ypê = produtos.filter((a) => {
    let produtoYpe = i.categoria.toLocaleLowerCase().include("ypê")
    return produtoYpe
 })
 console.log(ypê)

f
let novoArrey = produtos((nome,preco) => {
   return `Compre ${nome} por ${preco}`
})
    























