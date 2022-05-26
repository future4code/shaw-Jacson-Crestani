type Person = {
    name: string,
    age: number,
    corFavorita: string
}


enum Cor {
    AZUL= "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
} 


const listPessoa: Person  = {
    name: "João",
    age: 20,
    corFavorita: Cor.AZUL
}

const listPessoa1: Person  = {
    name: "Maria",
    age: 20,
    corFavorita: Cor.AMARELO
}

const listPessoa2: Person  = {
    name: "Pedro",
    age: 20,
    corFavorita: Cor.VERDE
}

type users = Person[]

    const userList:users = []

    userList.push(listPessoa)
    userList.push(listPessoa1)
    userList.push(listPessoa2)

    console.table(userList)

