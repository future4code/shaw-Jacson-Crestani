import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { Request, Response } from "express";
import { connection } from "./data/connection";


app.get("/users", getAllUsers);
 

export default async function selectAllUsers():Promise<any> {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio;
  `)

  return result[0]
}

export const getAllUser = async(req: Request,res: Response): Promise<void> =>{
  try {
     const users = await selectAllUsers()

     if(!users.length){
        res.statusCode = 404
        throw new Error("No recipes found")
     }

     res.status(200).send(users)
     
  } catch (error:any) {
      res.status(500).send("Internal server error")
      getAllUser(req,res)
  }
}
