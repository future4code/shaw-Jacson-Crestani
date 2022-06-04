import express, { Request, Response } from 'express'
import cors from 'cors'
import { read } from 'fs'

const app = express()
app.use(express.json())
app.use(cors())

type User = {
    nome: string,
    cpf: string,
    data_nascimento: string,
    saldo: number
}

let users: User[] = [
    {
        nome: 'João',
        cpf: "166.454.22-9",
        data_nascimento: "10-10-2000",
        saldo: 100
    },
    {
        nome: 'Maria',
        cpf: "126.456.789-9",
        data_nascimento: "05/05/2000",
        saldo: 100
    },
    {
        nome: 'Pedro',
        cpf: "123.445.78-9",
        data_nascimento: "27/09/1997",
        saldo: 100
    },
    {
        nome: 'Joana',
        cpf: "123.456.77-9",
        data_nascimento: "31/12/1999",
        saldo: 100
    },
]

app.get('/users', (req, res) => {
    try {
        let type = req.query.type as string
        let search = req.query.search as string

        if (type) {
            if (type === 'nome') {
                users = users.filter(user => user.nome.includes(search))
            } else if (type === 'cpf') {
                users = users.filter(user => user.cpf.includes(search))
            } else if (type === 'data_nascimento') {
                users = users.filter(user => user.data_nascimento.includes(search))
            } else if (type === 'saldo') {
                users = users.filter(user => user.saldo.toString().includes(search))
            }

            throw new Error("Type not found")
        }

        if (search) {
            search = search.toLowerCase()

            const result = users.filter(
                user => user.data_nascimento.toLowerCase().includes(search)
            )

            console.log(result, search)

            if (result.length === 0) {
                return res.status(204).send("No content")
            }

            return res.status(200).send(result)
        }

        res.status(200).send(users)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

app.post("/users", (req, res) => {
    try {
        const { nome, cpf, data_nascimento } = req.body
   
        if (!nome || !cpf || !data_nascimento) {
            throw new Error("Missing fields")
        }

        if (typeof nome !== "string" || typeof cpf !== "string" || typeof data_nascimento !== "string") {
            throw new Error("Invalid fields")
        }

        users.forEach(user => {
            if (user.cpf === cpf) {
                throw new Error("CPF already exists")
            }
        })

        const newUser: User = {
            nome,
            cpf,
            data_nascimento,
            saldo: 0
        }

        users.push(newUser)

        res.status(200).send({
            message: "user created successfuly",
            user: newUser
        })
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

app.put("/users/:cpf", (req, res) => {
    try {
        const { cpf } = req.params

        if (isNaN(Number(cpf))) {
            throw new Error("Invalid CPF")
        }

        users.forEach(user => {
            if (user.cpf === cpf) {
                user.nome += " updated"
                return res.status(200).end()
            }
        })
        res.status(204).send("User not found")
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

app.delete("/users/:cpf", (req, res) => {
    try {
        const cpf = String(req.params.cpf)

        if (isNaN(Number(cpf))) {
            throw new Error("Invalid CPF")
        }

        users.forEach(user => {
            if (user.cpf === cpf) {
                user.nome += "-realted"
                return res.status(200).end()
            }
        })

        res.status(204).send("User not found")
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

app.delete("/users/cpf", (req, res) => {
    try {
        const cpf = String(req.query.cpf)

        if (isNaN(Number(cpf))) {
            throw new Error("Invalid CPF")  
        }

        for (let i = 0; i < users.length; i++) {
            if (users[i].cpf === cpf) {
                users.splice(i, 1)
                return res.status(200).end()
            }
        }

        res.status(204).send("User not found")
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})


app.listen(3003, () => {
    console.log('Server is running at port 3003')
})


