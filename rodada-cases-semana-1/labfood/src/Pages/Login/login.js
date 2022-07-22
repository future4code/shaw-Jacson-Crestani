import React, { useState } from "react";
import { Main, Form, ButtonStyled, DivPassword, InputMaterial, IconButton } from "./styled";
import { Visibility, VisibilityOff } from "@material-ui/icons";


const Login = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [showPassword, setShowPassword]=useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();

  };

  return (
    <Main>
      <p>Entar</p>
      <Form onSubmit={onSubmitLogin}>
        <InputMaterial
          id="outlined-basic"
          label="Email"
          type={"email"}
          variant="outlined"
          placeholder={"email@email.com"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <DivPassword>
          <InputMaterial
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
        </DivPassword>
        <ButtonStyled type="submit">Entrar</ButtonStyled>
      </Form>
    </Main>
  );
};

export default Login;
