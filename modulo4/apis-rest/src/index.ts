import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

type user = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

enum UserType {
  ADMIN = 'admin',
  NORMAL = 'normal'
}

// Mock simulando um array de usuários no Banco de Dados
let users: user[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]



app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const name: string = req.query.name as string
    const user: user | undefined = users.find((user) => user.name === name)
    if (!user) {
      errorCode = 404
      throw new Error("User not found");
    }
    res.status(200).send(user)
  } catch (error:any) {
      res.status(errorCode).send({error: error.message})
  }
})

app.get("/users/:id", (req: Request, res: Response) => {
  let errorCode = 400
try {
  const id: number = Number(req.params.id)
  if(isNaN(id)) {
    errorCode = 422
    throw new Error("Invalid id")
  }
  const user = users.find((user) => {
    return user.id === id
  })
  res.status(200).send(user)
} catch (error:any) {
  res.status(errorCode).send({error: error.message})
}
})


app.post("/users", (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const {id, name, email, type, age} = req.body

    if(!id || !name || !email || !type || !age) {
      errorCode = 422
      throw new Error("Invalid user")
    }


    const  newUser: user = {
      id,
      name,
      email,
      type,
      age
    }

    users.push(newUser)

    res.status(201).send({message: "User created successfully"}) 

  } catch (error:any) {
    res.status(errorCode).send({message: error.message})
  }
})

app.put("/users/:id", (req: Request, res: Response) => {
  let name : string = req.params.id as string
  let errorCode: number = 400

  try{
    const getName = users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase()
    })
    if(!getName) {
      errorCode = 404
      throw new Error("User not found")
    }
    res.status(200).send(getName)
  }catch(error:any) {
    res.status(errorCode).send({error: error.message})
  }
})

app.post("/users", (req,res) => {
  let errorCode = 400
  try {
    const {id, name, email, type, age} = req.body
    users.push({id, name, email, type, age})
    res.send(users)
  } catch (error:any) {
    res.status(errorCode).send({message: error.message})
  }
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})