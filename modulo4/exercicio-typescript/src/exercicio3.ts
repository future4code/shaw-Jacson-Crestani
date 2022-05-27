enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function filme(nome: string, genero: string, ano: number) {
console.log(`nome: ${nome}, genero: ${genero} ano: ${ano}`);
}


(filme("Avengers", GENERO.ACAO, 2018));
