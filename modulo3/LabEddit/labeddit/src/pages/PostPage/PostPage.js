import React from "react";
import { goBack } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Slider } from "@mui/material";
import { Skeleton } from "@mui/material";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {

  }
}));

const PostPage = ({PostPage}) => {
  const navigate = useNavigate();
  return (
    <Card classes={classes.root}>
      <CardHeader>

      </CardHeader>
      <CardContent>

      </CardContent>
      <CardActions>
        
      </CardActions>

    </Card>
      
  );
};

export default PostPage;
