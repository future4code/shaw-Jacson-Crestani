import UserBussines from "../Bussines/UserBussines";
import { Request, Response } from "express";



class UserController {
  async signuo(req: Request, res: Response) {
    try {
      const { name, nickname, email, password, role } = req.body;
      const userBusiness = UserBussines()

      const newUser: userInput = {
        name,
        nickname,
        email,
        password,
        role
      };

      const userBusiness = new UserBussines();

      const user = await userBusiness.signuo(newUser);

      res.status(200).send({messege: "Usuario creado correctamente" token });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await UserBussines.login(email, password);
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }   
}