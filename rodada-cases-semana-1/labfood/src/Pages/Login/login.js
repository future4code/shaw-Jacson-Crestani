import React, { useState } from "react";
import { Main, Form, ButtonStyled, InputMaterial, IconButton, DivPass } from "./styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios  from "axios";
import {BASE_URL} from "../../Constants/url";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../Routes/coordinator"


const Login = () => {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [showPassword, setShowPassword]=useState(true);
  const [errEmail,setErrEmail]=useState("");
  const [errPass,setErrPass]=("");
  const [checkErrEmail,setCheckEmail]=useState(false);
  const [checkErrPass,setCheckPass]=useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate()

  const onSubmitLogin = (e) => {
    e.preventDefault();

     const userLogin = {
       email,
       password
     };
     loginApi(userLogin);
   };

  const loginApi = async (body) => {
      await axios.post(`${BASE_URL}/login`,body)
      .then((res) => {
        setEmail("")
        setPassword("")
        setErrEmail("")
        setErrPass("")
        setCheckEmail(false)
        setCheckPass(false) 
        localStorage.setItem('token',res.data.token)
        alert(`Boas vindas ${res.data.user.name}`)
        goToFeed(navigate)
      })

  .catch((err) => {
    if(err.response.data.message.includes("senha incorreta")){
      setErrPass(err.response.data.message);
      setCheckPass(true);
    }else{
      setErrEmail(err.response.data.message);
      setCheckEmail(true);
    }
     console.log(err.response.data.message);
});
  }

  return (
    <Main>
      <p>Entar</p>
      <Form onSubmit={onSubmitLogin}>
        <InputMaterial
        error={checkErrEmail}
        helperText={checkErrEmail ? errEmail : ""}
          id="outlined-basic"
          label="Email"
          type={"email"}
          variant="outlined"
          placeholder={"email@email.com"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <DivPass>
          <InputMaterial
          error={checkErrPass}
          helperText={checkErrPass ? errPass : ""}
            id="outlined-basic"
            label="Password"
            type={showPassword ? "password" : "text"}
            variant="outlined"
            placeholder={"Minimo 6 caracteres"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            inputProps={{minLength:6,title: "Minimo 6 caracteres"}}
            required
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </DivPass>
        <ButtonStyled type="submit">Entrar</ButtonStyled>
      </Form>
    </Main>
  );
 }

export default Login