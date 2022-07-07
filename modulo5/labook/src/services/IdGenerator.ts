import { v4 } from "uuid"
import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types/authData"

const generateId = (): string => v4()

function generateToken(
   payload: authenticationData
): string {
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn: process.env.JWT_EXPIRES_IN
      }
   )

}