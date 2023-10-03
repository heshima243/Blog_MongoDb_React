import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {
  Box,
  Grid,
  Button,
  CardActions,
  CircularProgress,
  Container,
  Paper,
} from "@mui/material";
import { deletePost, getPost } from "../reduxComponent/actions/post.action";
import { CardMedia } from "@mui/material";
import isEmpty from "./Utils";
import RecentArticle from "./RecentPost";
import RecentPost from "./RecentPost";

const ReadPost = () => {
  // Obtient l'ID de l'article à partir des paramètres d'URL
  const { id } = useParams();

  // Utilise le sélecteur Redux pour extraire la liste des articles du state
  const posts = useSelector((state) => state.postReducer.posts);

  // Obtient la fonction de dispatch Redux
  const dispatch = useDispatch();

  // État local pour gérer l'état de chargement
  const [isLoading, setIsLoading] = useState(true);

  // Permet de gérer la navigation dans l'application
  let navigate = useNavigate();

  // Effet qui se déclenche lorsque les dépendances (dispatch et posts) changent
  useEffect(() => {
    if (posts.length === 0) {
      // Fait défiler la fenêtre vers le haut
      window.scrollTo(0, 0);

      // Déclenche l'action Redux pour récupérer les articles
      dispatch(getPost());
    }
    //setIsLoading(false); <-- Cette ligne est commentée, ce qui signifie que isLoading reste vrai.
  }, [dispatch, posts]);

  // Fait défiler la fenêtre vers le haut
  window.scrollTo(0, 0);

  // Fonction pour gérer la suppression d'un article
  const handleDelete = () => {
    dispatch(deletePost(post._id)); // Supprime l'article via l'action Redux
    navigate("/"); // Redirige vers la page d'accueil
  };

  // Triez les articles par date (supposons que la date est stockée dans post.date)
  const sortedPosts = posts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Obtenez les 5 articles les plus récents
  const recentPosts = sortedPosts.slice(0, 8);

  // Trouve l'article actuellement affiché en fonction de l'ID dans les paramètres d'URL
  // const post = posts.find((post) => post.id === parseInt(id));
  const post = posts.find((post) => post._id === id);

  // Le composant commence ici
  return (
    <>
      {" "}
      <Container>
        {/* Affiche les détails de l'article s'il existe */}
        {post ? (
          <Paper
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "none",
            }}
          >
            <Typography variant="h4" style={{ textAlign: "justify" }}>
              {post.title}
            </Typography>
            <img
              src={post.image}
              component="img"
              height="200"
              object-fit="contain"
              max-width="100%"
              // style={{
              //   height: "400px",
              //   width: "300px",
              //   margin: "auto",
              //   display: "block",
              // }}
              alt={post.title}
            />
            <Typography variant="body1" style={{ textAlign: "justify" }}>
              {post.body}
            </Typography>

          
            <CardActions>

               
             
              
                {/* <div>
                
                  <Button variant="outlined" color="secondary">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/edith/${post.id}`}
                    >
                      Edit
                    </Link>
                  </Button>
                </div> */}
            
            </CardActions>
          </Paper>
        ) : (
          <div>
            {/* Affiche un indicateur de chargement si isLoading est vrai */}
            {isLoading && (
              <Box
                style={{
                  textAlign: "center",
                  backgroundColor: "#edeff2",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "50vh",
                }}
              >
                <CircularProgress color="primary" size={64} thickness={4} />
                <Typography variant="h6" color="primary" mt={2}>
                  Loading...
                </Typography>
              </Box>
            )}
          </div>
        )}
      </Container>
      {/* Affiche une section "Recent Post" avec des articles récents */}
      <Typography variant="h6" textAlign="center" style={{backgroundColor:"#33180b", color:"#fff"}} gutterBottom>
        Recent Post
      </Typography>
      <Container  maxWidth="md">
        <Grid
          container
          spacing={4}
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          {recentPosts.map((post, index) => (
            <RecentPost post={post} key={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ReadPost;
