import knex from "knex";
import dotenv from "dotenv";


dotenv.config();

const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      multipleStatements: true
   },
});

const createActor = async (
   id: string,
   name: string,
   salary: number,
   dateOfBirth: Date,
   gender: string
 ): Promise<void> => {
   await connection
     .insert({
       id: id,
       name: name,
       salary: salary,
       birth_date: dateOfBirth,
       gender: gender,
     })
     .into("Actor");
 };

export default connection

const deleteActor = async (id: string): Promise<void> => {
   await connection("Actor")
     .delete()
     .where("id", id);
 }; 