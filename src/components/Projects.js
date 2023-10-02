import React from "react";
import {
  Avatar,
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

const DeveloperCV = () => {
  const developerData = {
    name: "Heshima L",
    title: "Full Stack Web Developer",
    description: `
    Hello, I am a web developer passionate about crafting innovative solutions. I have a strong background in both frontend and backend development, as well as web project management. My goal is to create high-performing and user-friendly web applications to meet my clients' needs. I am proficient in the following technologies: - HTML/CSS/JavaScript - React.js - Node.js - MongoDB - Express.js - ... Feel free to reach out if you have any questions or would like to discuss potential collaborations. I am always open to exciting new web development opportunities..

      Je suis compétent dans les technologies suivantes :
      - HTML/CSS/JavaScript
      - React.js
      - Node.js
      - MongoDB
      - Express.js
      - ...
      Feel free to contact me if you have any questions or if you'd like to discuss potential collaborations. I am always open to exciting new opportunities in web development.
    `,
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mt: 4,
        }}
      >
        <Avatar
          alt={developerData.name}
          src="https://avatars.githubusercontent.com/u/137094885?v=4"
          sx={{ width: 120, height: 120 }}
        />
        <Typography variant="h4" mt={2}>
          {developerData.name}
        </Typography>
        <Typography variant="subtitle1">{developerData.title}</Typography>
      </Box>

      <Paper
        elevation={3}
        sx={{
          mt: 4,
          p: 3,
        }}
      >
        <Typography variant="body1">{developerData.description}</Typography>
      </Paper>

      <Box
        sx={{
          mt: 4,
          padding: "16px",
          background: "linear-gradient(45deg, #ff9800, #ff5722)",
          boxShadow: "0px 5px 20px rgba(255, 87, 34, 0.5)",
          borderRadius: "10px",
          textAlign: "center",
          color: "#ebf5f4",
        }}
      >
        <Typography variant="h5" style={{ color: "#fff" }}>
          Recent Projects
        </Typography>
        <List>
          <ListItem
            button
            component="a"
            href="https://heshima-store.netlify.app "
          >
            <ListItemText primary="E-Commerce" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://heshima-movie.netlify.app"
          >
            <ListItemText primary="Movie Plateform" />
          </ListItem>
          <ListItem button component="a" href="https://jul-blog.netlify.app">
            <ListItemText primary="Blog-Web" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://heshima-meteo.netlify.app"
          >
            <ListItemText primary="Weather-App" />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default DeveloperCV;
