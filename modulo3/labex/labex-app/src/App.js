import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const mudaEmail = (event) => {
    setEmail(event.target.value);
  };

  const mudaSenha = (event) => {
    setSenha(event.target.value);
  };

  const fazerLogin = () => {
    event.preventDefault();

    const body = {
      email: email,
      password: senha
    };

    console.log(body)
    //axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/jacson-crestani-shaw/login", body, headers")
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={fazerLogin}>
        <input value={email} onChange={mudaEmail} placeholder={"E-mail"} />
        <input
          type="password"
          value={senha}
          onChange={mudaSenha}
          placeholder={"Senha"}
        />
        <button>Fazer Login</button>
      </form>
    </div>
  );
};

export default App;
