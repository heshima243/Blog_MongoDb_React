import styled from "styled-components";
import { Typography } from "@mui/material";

const StyledFooter = styled.footer`
  background-color: #33180b; 
  padding: 20px;
  color: white;
`;

const StyledText = styled(Typography)`
  font-weight: bold; 
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledText variant="h6" align="center" gutterBottom>
        Heshima inc
      </StyledText>
      <StyledText variant="subtitle1" align="center">
        &copy; 2023 Heshima_Lunyungu_Julien Tous droits réservés
      </StyledText>
    </StyledFooter>
  );
};

export default Footer;
