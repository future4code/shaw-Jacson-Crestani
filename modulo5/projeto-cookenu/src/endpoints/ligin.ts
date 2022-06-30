import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Auhtenticator";
import { IdGenerator } from "../services/IdGenerator";
import { User } from "../entities/User";
import { HashManager } from "../services/HashManager";



export async function login(req: Request, res: Response) {  // cria um usuário
  try {
    const { name, email, password, role } = req.body;  // pega os dados do body

    if (!email || !password) { // se não tiver nome, email, senha ou role, retorna erro
      res
        .status(422)
        .send(
          "Dados insufficientes"
        );
    }

    const userDatabase = new UserDatabase();   // cria um novo usuário
    const user = await userDatabase.findUserByEmail(email); // verifica se o email já existe

    if (!user) { // se o email não existir, retorna erro
      res.status(409) // se o email já existir, retorna erro
        .send(
          "Usuário não existe"
        );
    }

    const hashManager = new HashManager(); // gera um hash para o password
    const isPasswordCorrect = await hashManager.compare(password, user.getPassword()); // verifica se o password é o mesmo do banco

    if (!isPasswordCorrect) { // se o password não for o mesmo, retorna erro
      res.status(401).send("Email ou senha incorretos") // se o email já existir, retorna erro
    }


    const authenticator = new Authenticator() // gera um token para o usuário
    const token = authenticator.generate({
       id: user.getId(),
       role: user.getRole(),
       });  

    res.status(200).send({ message: "Usuário logado com sucesso", token }); // retorna o token
  } catch (error) {
    res.status(400).send(error.message);
  }
}