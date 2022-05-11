import React from "react";
import { useState } from "react";

const CadastrePage = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
  }

  if (password !== confirmPassword) {
    setError("As senhas devem ser iguais");
    return;
  }

}


  return (
    <div>
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input 
          type="text" 
          name="displayName" 
          required placeholder="Nome do usuário" />
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        </label>
        <label>
          <span>E-mail</span>
          <input type="email" 
          name="email" 
          required placeholder="E-mail do usuário" />
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        </label>
        <label>
          <span>Senha</span>
          <input type="password" 
          name="password" 
          required placeholder="Insira sua senha" />
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        </label>
        <label>
          <span>Confirmação de Senha</span>
          <input type="password" 
          name="confirmPassword" 
          required placeholder="Confirme sua senha" />
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastrePage;
