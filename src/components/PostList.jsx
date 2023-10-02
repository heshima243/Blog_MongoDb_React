import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

const itemsPerPage = 6; // Number of articles to display per page

const PostList = () => {
  const posts = useSelector((state) => state.postReducer.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [isloading, setIsloading] = useState(false);

  // Calculate the total number of pages
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  // Calculate the start and end indices for articles on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  // Use useEffect to listen for changes in the 'posts' array
  useEffect(() => {
    // You can perform any additional actions here when 'posts' changes
    // For example, you can set 'isloading' to false if needed
    setIsloading(false);
  }, [posts]);


  window.scrollTo(0, 0);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container maxWidth="md">
      {isloading && (
        <Box>
          <Box>
            <CircularProgress color="primary" size={64} thickness={4} />
            <Typography variant="h6" color="primary" mt={2}>
              Loading...
            </Typography>
          </Box>
        </Box>
      )}

      <Grid
        container
        spacing={4}
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {currentPosts.map((post, index) => (
          <>
       
            {post ? (
              <>
                <Article post={post} key={index} />
              </>
            ) : (
              <div>
                {isloading && (
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
          </>
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
