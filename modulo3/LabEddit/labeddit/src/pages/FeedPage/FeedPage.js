import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToPost } from "../../routes/coordinator";
import { Button } from "@mui/material";

const FeedPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      FeedPage
      <button onClick={()=> goToPost(navigate)}> ir po PostPage</button>
     { /*<button onClick={()=> goBack(navigate)}>Voltar</button>*/}
      <Button onClick={()=> goBack(navigate)}>Voltar</Button>
    </div>
  );
};

export default FeedPage;
