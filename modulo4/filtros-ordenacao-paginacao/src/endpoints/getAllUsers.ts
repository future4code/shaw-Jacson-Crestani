import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"



export const getAllUsers = async (_req: Request,res: Response): Promise<void> =>{
   const users = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   try {
      const result = await connection("aula48_exercicio")

      const users = result.map(toRecipe)

      res.status(200).send(users)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

const toRecipe = (input: any): user => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type,
   }
}

