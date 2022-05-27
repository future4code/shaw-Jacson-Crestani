type usuarios	= {
	name: string,
	role: string,
	email: string | number
}

const usuarios: Array<usuarios> = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const filtrarPessoasAdmin = (usuarios: Array<usuarios>): Array<usuarios> => {
	return usuarios.filter(usuario => usuario.role === "admin")

}
	console.table(filtrarPessoasAdmin(usuarios))