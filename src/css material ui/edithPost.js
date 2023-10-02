
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";


export const FormContainer = styled("form")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    margin: "0 auto",
    padding: "16px",
    

    '@media (max-width: 768px)': {
      width: "100%", 
    },
  });
  
  export const InputField = styled(TextField)({
    marginBottom: "16px",
  });
  
  export const SubmitButton = styled(Button)({
    marginTop: "16px",
    backgroundColor:"green"
  });

  
  export default {
    FormContainer,
    InputField,
    SubmitButton,
  };
  