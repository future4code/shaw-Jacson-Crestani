import express from "express";
import { users } from "./data";


import { AddressInfo } from "net";

const app = express();

app.use(express.json());


app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
   
})


type users = {
    userId: number,
    id: number | string
    title: string,
    completed: boolean
}

app.get ("/todos", (req, res) => {
    const allUsers= users
        console.log(1,allUsers)

    const novosUsers = users.map((user: any) => {
    return user.todos
})   
console.log(2,novosUsers)

    res.status(200).send(novosUsers)
})

app.put("/todos/:id", (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    const index = users.findIndex((user: any) => user.id == id);
    if (index < 0) {
        res.status(404).send("User not found");
        return 
        
    }


    const user = users[index];
    user.id = id.length > 0 ? Number(id) : user.id;
    user.userId = 
    user.title = title;
    user.completed = completed;

    res.status(200).send(user);

})




const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

