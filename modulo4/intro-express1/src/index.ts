import express from "express";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

type User = {
    id: number | string,
    nome: string,
    phone: number,
    email: string,
    website: string, 
    
}

type Post = {
    id: number | string,
    userId: number | string,
    title: string,
    body: string,
}



const users = [
    {
       id: 'vitor-hugo-lopes',
       playlists: [
          {
             id: '28e07ef5-4c6f-4478-9998-1fae4c6d4745',
             name: 'mpb',
             tracks: [
                {
                   id: '8b4215f1-950b-4c06-bfd6-80c2f8d1bb19',
                   name: 'Oração',
                   artist: 'Linn da Quebrada',
                   url: 'https://www.youtube.com/watch?v=y5rY2N1XuLI',
                },
                {
                   id: '8b4215f1-950b-4c06-bfd6-80c2f8d1bc49',
                   name: 'Mulher do Fim do Mundo',
                   artist: 'Elza Soares',
                   url: 'https://www.youtube.com/watch?v=6SWIwW9mg8s',
                },
             ],
          },
          {
             id: '28e07ef5-4c6f-4478-9998-1fae4c6d4543',
             name: 'Rock',
             tracks: [
                {
                   id: '8b4215f1-950b-4c06-bfd6-80c2f8d1cc08',
                   name: 'Céu Azul',
                   artist: 'Charlie Brown Jr.',
                   url: 'https://www.youtube.com/watch?v=0dLX40UMUKo',
                },
                {
                   id: '8b4215f1-950b-4c06-bfd6-80c2f8d1bc75',
                   name: 'By The Way',
                   artist: 'Red Hot Chili Peppers',
                   url: 'https://www.youtube.com/watch?v=YXdOAUKCc0k',
                },
             ],
          },
       ],
    },
    {
       id: "gabriel-mina",
       playlists: [
          {
             id: "28e07ef5-4c6f-4478-9998-1fae4c6d4252",
             name: "rock",
             tracks: [
                {
                   id: "8b4215f1-950b-4c06-bfd6-80c2f8d1bb09",
                   name: "Under Pressure",
                   artist: "Queen",
                   url: "https://www.youtube.com/watch?v=a01QQZyl-_I"
                }
             ]
          }
       ]
    }
 ];


app.get("/users", (req, res) => {

    res.send(users);
}) 




    



