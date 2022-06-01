import express from 'express'
import { produtos }  from './data';

const app = express();

app.use(express.json());

type user = {
    id:string,
    name:string,
    price: number
  }

app.get("/produtos/:id", (req, res) => {          
    res.send(produtos);
})



app.post("/addProdutos:id", (req, res) => {
    try {
        req.body.id =  crypto.randomUUID();
        const { id, name, price } = req.body;
        if (price <= 0) {
            throw new Error('Preço inválido');
        }
        if(!name || price.lenght < 0) {
            throw new Error('Nome ou preço inválido');
        }
        if(name !== String(name) || price !== Number(price)) {
            throw new Error('Nome ou preço inválido');
        }
        produtos.push(req.body);
        
    } catch (error) {
        res.status(400).send({ error: 'Erro ao adicionar produto' });
    }  
})






/*
    const id = Date.now().toString();
    const { name, price } = req.body;
    const newProduto: user = {
        id: id,
        name: name,
        price:  price
    }

    produtos.push(id, name, price);
    res.send(newProduto;
})

app.get("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const produto = produtos.find(produto => produto.id === id);
    res.send(produto);
})

*/


app.listen(3003, function () {
    console.log("Server is running in locahost:3003 !");
});