import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

import Footer from "./Footer";
import Intro from "./Intro";
import PostList from "./PostList";
import PostForm from "./PostForm";
import About from "./About";


const Home = () => {
  
  return (
    < >
  
      <main style={{backgroundColor:"#e3e1e1", marginTop:"-40px"}}>
        <Intro/>
        <PostList/>
      </main>
      
    </>
  );
};

export default Home;
