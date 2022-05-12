import { useNavigate } from "react-router-dom";
import { goToFeed, goToCadastre } from "../../routes/coordinator";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import React,{ useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../connstants/urls";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const onChangeEmail = (e) => {
    setEmail(e.target.value);

  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    
  }

  useEffect(() => {
    if(localStorage.getItem("token")!==null){
      goToFeed(navigate)
    }
  },[])

const apiLogin = async (e) => {
  e.preventDefault();
  
  const body = {
    email: email,
    password: password
}
try{
  const response = await axios.post(`${baseURL}/users/login`, body) 
    localStorage.setItem("token", response.data.token)
    goToFeed(navigate)
}
catch(error){
  alert("Usuario ou senha incorretos")
}
}
  
  return (
   
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
           onSubmit={apiLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocuson
              onChange={onChangeEmail}
              value={email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="senha"
              label="senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChangePassword}
              value={password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link onClick={() => goToCadastre(navigate)} href="" variant="body2">
                  {"Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}

export default LoginPage