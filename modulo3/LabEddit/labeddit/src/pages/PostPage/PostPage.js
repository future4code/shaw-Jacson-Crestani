import React from "react";
import { goBack } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";



const PostPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      PostPage
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  );
};

export default PostPage;
