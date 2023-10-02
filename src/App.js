import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles"; // Assurez-vous d'importer la bonne dépendance
import { createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
// import useStyles from "./style";
import PostForm from "./components/PostForm";
import EditPost from "./components/EditPost";
import ReadPost from "./components/ReadPost";
import NotFound from "./components/NotFound";
import About from './components/About'
import Projects from "./components/Projects";



const theme = createTheme({
 
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/post" element={<PostForm/>} /> 
        <Route path="/edith/:id" element={<EditPost/>} /> 
        <Route path="/read/:id" element={<ReadPost />} />
        <Route path="/projects"  element={<Projects/>} /> 
        <Route path="*"  element={<NotFound/>} /> 
        </Routes>
        <About/>
        <Footer/>
      </Router>
      
  
    </ThemeProvider>
  );
};

export default App;
