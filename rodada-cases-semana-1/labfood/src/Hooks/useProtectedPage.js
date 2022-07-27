import { useEffect } from "react";
import { goToLogin } from "../Routes/coordinator";
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
 const navigate = useNavigate();

 const token = localStorage.getItem('token'); 
 useEffect(() => {

   if(!token){
    goToLogin(navigate)
  }
},[navigate, token])
}






