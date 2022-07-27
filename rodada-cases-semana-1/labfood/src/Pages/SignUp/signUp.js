import React, { useState } from "react";
import { useForm } from "../../Hooks/useForm";
import { InputMaterial, Main, PassDiv } from "./styles";
import { Visibility } from "@material-ui/icons";
import { VisibilityOff } from ".../../../../node_modules/@material-ui/icons";
import { IconButton } from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { useNavigate } from "react-router-dom";
import { goToSigUpAdress } from "../../Routes/coordinator";

const SignUp = () => {
  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [showCheckPass, setShowCheckPass] = useState(false);
  const [checkErrPass, setCheckErrPass] = useState(false);

  const navigate = useNavigate();

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(\d{2})\d=?$/, "$1");
  };

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };
  const handleClickShowCheckPass = () => {
    setShowCheckPass(!showCheckPass);
  };

  const onSubmitForm = (event) => {
    Event.preventDefault();

    if (form.password !== confirmPassword) {
      setCheckErrPass(true);
    }else {
      setCheckErrPass(false);
      signUpPerson();
      alert("A senha deve ser a mesma!");
      clean();
    }
  };

  const signUpPerson = async () => {
    await axios.post(`${BASE_URL}/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert(`Bem vindo ${res.data.user.name}`);
        goToSigUpAdress(navigate);
      })
      .catch((err) => {
        alert(err.response.data.massage);
        clean();
      });
  };

  return (
    <Main>
      <p>Cadastrar</p>
      <form onSubmit={onSubmitForm}>
        <InputMaterial
          id="outlined-basic"
          label={"Nome"}
          name="name"
          type={"text"}
          placeholder={"Digite seu nome"}
          variant="outlined"
          value={form.name}
          onChange={onChange}
        />
        <InputMaterial
          id="outlined-basic"
          label={"Email"}
          name="email"
          type={"email"}
          placeholder={"Digite seu email"}
          variant="outlined"
          value={form.email}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Cpf"}
          name="cpf"
          type={"text"}
          placeholder={"Digite seu cpf"}
          variant="outlined"
          value={cpfMask(form.cpf)}
          onChange={onChange}
          required
        />
        <PassDiv>
          <InputMaterial
            id="outlined-adorative-password"
            label={"Password"}
            name="password"
            type={showPass ? "text" : "password"}
            placeholder={"minino 6 caracteres"}
            inputProps={{ minLength: 6, title: "minino 6 caracteres" }}
            value={form.password}
            onChange={onChange}
            required
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPass ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </PassDiv>
        <PassDiv>
          <InputMaterial
            error={checkErrPass}
            helperText={checkErrPass ? "A senha deve ser a mesma!" : ""}
            id="outlined-adorative-password"
            label={"Confirm Password"}
            type={showCheckPass ? "text" : "password"}
            placeholder={"minino 6 caracteres"}
            inputProps={{ minLength: 6, title: "minino 6 caracteres." }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowCheckPass}
            edge="end"
          >
            {showPass ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </PassDiv>
      </form>
    </Main>
  );
};

export default SignUp;
