class UserBussines {  

  async signuo(req: Request, res: Response){
try {
  const { name, nickname, email, password, role } = req.body

  if ( 
    !name || !nickname || !email || !password || !role 
  


    ) {
    throw new Error("Faltan datos")
  }
  
} catch (error) {
  res.status(400).send(error)
}
  }

  }

  async login(){

  }

 

}

export default UserBussines;