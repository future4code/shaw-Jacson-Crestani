import * as jwt from 'jsonwebtoken';   // to generate a token
import { USER_ROLES } from '../entities/User';

export interface AuthenticationData {  
  id: string;  
  role: USER_ROLES
}


export class Authenticator {                                              // método para gerar o token
  public generate(input: AuthenticationData): string {
    const token = jwt.sign(input, process.env.JWT_KEY, {  // gera o token
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN, // duração do token
    });
    return token;
  }

  public getTokenData(token: string): AuthenticationData {          // pega os dados do token
    const data = jwt.verify(token, process.env.JWT_KEY) //  verifica se o token é válido
    return data as AuthenticationData;  // retorna os dados do token
  }
}
