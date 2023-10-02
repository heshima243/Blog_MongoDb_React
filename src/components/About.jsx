import React from "react";
import { Container, Box, Typography, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container
      maxWidth=""
      sx={{
        borderTop: "2px solid #d7d8db",
        textAlign: "center",
        backgroundColor: "paper",
        mt:"20px"
      }}
    >
      <Typography variant="h6" style={{backgroundColor:"#33180b", color:"#fff"}} gutterBottom>
        Follow us by Link below
      </Typography>
      <img
        src="https://avatars.githubusercontent.com/u/137094885?v=4"
        alt="Votre image"
        style={{ width: "100%", maxWidth: "200px", borderRadius: "50%" }}
      />
      <Typography variant="h6" gutterBottom>
        Heshima_Lunyungu_Julien
      </Typography>
      <Typography variant="subtitle1" color="secondary">
        Passionate about web development and technology.
      </Typography>
      <Box sx={{ paddingTop: "20px" }}>
        <IconButton>
          <Link
            to="https://github.com/heshima243?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </Link>
        </IconButton>
        <IconButton>
          <Link
            to="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon/>
          </Link>
        </IconButton>
        <IconButton>
          <Link
            to="https://www.linkedin.com/in/julien-heshima-2b0770201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </Link>
        </IconButton>
      </Box>
    </Container>
  );
};

export default About;
