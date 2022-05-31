import express from "express";
import cors from "cors";
import { users } from "./data";

const app = express();

app.use(express.json());
app.use(cors());


app.get("user", (req, res) => {          
    res.send("")
  
})


app.listen(3003, () => {

});

type users = {
    id: string;
    playlists: playlist[] = {
        id: string;
        name: string;
        tracks: {
            id: string;
            name: string;
            artist: string;
            url: string;
        }
    }
}

const users: users[] = [
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
]

type User = {
    id: number | string,
    name: string,
    phone: number,
    email: string,
    website: string
} 

const users1: User[] = [
    {
        id: 1,
        name: "Leanne Graham",
        phone: 1770736803156442,
        email: "leanne@gmail.com",
        website: "hildegard.org"
    },
    {
        id: 2,
        name: "Ervin Howell",
        phone: 1770736803156442,
        email: "ervin@gmail.com",   
        website: "anastasia.net"
    },
    {
        id: 3,
        name: "Clementine Bauch",
        phone: 1770736803156442,
        email: "clementine@gmail.com",
        website: "ramiro.info"
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        phone: 1770736803156442,
        email: "patricia@gmail.com",
        website: "katina.com"
    },
]  

console.table(users1)

