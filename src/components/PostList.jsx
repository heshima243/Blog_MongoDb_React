import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "./Utils";
import Article from "./Article";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getPost } from "../reduxComponent/actions/post.action";

const itemsPerPage = 6; // Number of articles to display per page

const PostList = () => {
  const posts = useSelector((state) => state.postReducer.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [isloading, setIsloading] = useState(true);
  const dispatch = useDispatch();

  // Calculate the total number of pages
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  // Calculate the start and end indices for articles on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  useEffect(() => {
    // Simulate data fetching (replace with actual data fetching logic)
    dispatch(getPost())
      .then(() => {
        setIsloading(false); // Set isLoading to false when data is loaded
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsloading(false); // Set isLoading to false on error
      });
  }, [dispatch]);

 

  window.scrollTo(0, 0);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container maxWidth="md">
      {isloading && (
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "50vh",
            }}
          >
            <CircularProgress color="primary" size={64} thickness={4} />
            
          </Box>
        </Box>
      )}

      <Grid
        container
        spacing={4}
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {currentPosts.map((post, index) => (
          <Article post={post} key={index} />
        ))}
      </Grid>

      <div className="pagination">
        <Button
          variant="contained"
          color="error"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span style={{ color: "green", fontSize: "19px", margin: "12px" }}>
          {currentPage}
        </span>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default PostList;
