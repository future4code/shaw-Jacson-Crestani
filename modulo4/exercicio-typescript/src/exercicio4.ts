type Pessoa = {
    nome: string,
    salário: number,
    setor: SETORES,
    presencial: boolean
}

enum SETORES {
    MARKETING= "marketing",
    VENDAS= "vendas",
    FINANCEIRO= "financeiro"
}

const pessoa: Array<Pessoa> = [
	{ nome: "Marcos", salário: 2500, setor: SETORES.FINANCEIRO, presencial: true },
	{ nome: "Maria" ,salário: 15000, setor: SETORES.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 22000, setor: SETORES.FINANCEIRO , presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETORES.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETORES.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 47000, setor: SETORES.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 35000, setor: SETORES.MARKETING, presencial: true }
]

const filtrarPessoas = (pessoa: Array<Pessoa>, setor: SETORES): Array<Pessoa> => {
    return pessoa.filter(pessoa1 => pessoa1.setor === setor)
}

console.table(filtrarPessoas(pessoa, SETORES.FINANCEIRO))