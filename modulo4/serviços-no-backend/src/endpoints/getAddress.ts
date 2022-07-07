import { Request, Response } from "express";

const getAddress =  (req: Request, res: Response) => {
  try {
    const cep = req.params.cep;
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    console.log(res);
  } catch (error) {
    
  } 
}

export default getAddress;



//- Logradouro
//- Bairro
//- Cidade
//- Estado