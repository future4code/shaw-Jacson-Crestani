import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToPost } from "../../routes/coordinator";

const FeedPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      FeedPage
      <button onClick={()=> goToPost(navigate)}> ir po PostPage</button>
      <button onClick={()=> goBack(navigate)}>Voltar</button>
    </div>
  );
};

export default FeedPage;
