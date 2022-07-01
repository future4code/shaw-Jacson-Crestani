import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Auhtenticator";
import { IdGenerator } from "../services/IdGenerator";
import { User } from "../entities/User";
import { HashManager } from "../services/HashManager";



export async function signup(req: Request, res: Response) {  // cria um usuário
  try {
    const {name, email, password, role } = req.body;  // pega os dados do body

    if (name || !email || !password || !role ) { // se não tiver nome, email, senha ou role, retorna erro
      res
        .status(422)
        .send(
          "Dados insufficientes"
        );
    }

    const userDatabase = new UserDatabase();   // cria um novo usuário
    const user = await userDatabase.findUserByEmail(email); // verifica se o email já existe

    if (user) {
      res.status(409) // se o email já existir, retorna erro
        .send(
          "Usuário já existe"
        );
    }

    const idGenerator = new IdGenerator();  // gera um id para o usuário
    const id = idGenerator.generate(); // gera um id para o usuário

    const hashManager = new HashManager(); // gera um hash para o password
    const hashPassword = await hashManager.hash(password);

    const newUser = new User(id, name, email, hashPassword, role); // cria um usuário
    await userDatabase.createUser(newUser);

    const authenticator = new Authenticator() // gera um token para o usuário
    const token = authenticator.generate({id, role});

    res.status(200).send({ message: "Usuário criado com sucesso", token }); // retorna o token
  } catch (error) {
    res.status(400).send(error.message);
  }
}