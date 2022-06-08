import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Request, Response } from "express";



const app = express();

app.use(express.json());
app.use(cors());

app.get("/actor", async (req, res) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});


app.post("/actor", async (req, res) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary

    );

    res.status(200).send();
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }

});


app.get("/actor/actor?gender=", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});


