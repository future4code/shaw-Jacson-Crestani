import knex from "knex";
import dotenv from "dotenv";
import express from "express";


import { AddressInfo } from "net";

import axios from 'axios';
import { baseURL } from './baseURL';

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});



const app = express();


type user = {
	id: string;
	name: string;
	email: string;
}

type news = {
  "subscribers": Array<user>;
  "massage": string;
}
 
const getSubscribers = async (): Promise<any[]> => {
  const response = await axios.get(`${baseURL}/subscribers`)
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
      }
  } ) as user[];
        
}

async function createNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  try {
    await axios.post(`${baseURL}/news`, {
      title,
      content,
      date,
    });
  } catch (error) {
  console.log(error);
  }


  const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
    try {
      for (const user of users) {
        await axios.post(`${baseURL}/notifications`, {
          subscriberId: user.id,
          message: message,

        });
      }
  
      console.log("All notifications sent");
    } catch {
      console.log("Error");
    }
  };

  await axios.put(`${baseURL}/news`, {
    subscriberId: "1",
    message: "seja bem seja "
  });
}

axios.put(`${baseURL}/news`)
  .then(function (response) {
    console.log(response);
  }
  )
  .catch(function (error) {
    console.log(error);
  }
  );



axios.get(`${baseURL}/subscribers`)
.then((res) => {console.log(res.data)})


app.use(express.json());

const server = app.listen(process.env.PORT || 3306, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;