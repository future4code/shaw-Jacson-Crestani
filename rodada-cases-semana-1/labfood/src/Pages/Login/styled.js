import styled from 'styled-components';
import { Button } from "@mui/material";
import TextField  from "@mui/material/TextField";


export const IconButton = styled(Button)`
  
`
export const Main = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    font-size: 1rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-evenly;
`

export const ButtonStyled = styled(Button)`
  && {
    background-color: #E8222E;
    color: #000;
    width: 100%;
  }
`

export const DivPass = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const InputMaterial = styled(TextField)`
 width: 100%;
`