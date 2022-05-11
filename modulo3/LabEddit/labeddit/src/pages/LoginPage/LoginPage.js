import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToCadastre } from "../../routes/coordinator";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      LoginPage
    <button onClick={()=>goToCadastre(navigate)}>Cadastrar</button>
    <button onClick={()=>goToFeed(navigate)}>feed</button>
    
    </div>
  );
};

export default LoginPage;
