import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";



const RecentPost = ({ post }) => {

  window.scrollTo(0, 0);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Card style={{ flexGrow: 1 }}>
          <Link to={`/read/${post.id}`}>
            <CardMedia
              component="img"
              height="200"
              object-fit="contain"
              max-width="100%"
              border-radius="50% "
              image={post.image}
              alt="image title"
            />
          </Link>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              <Link
                style={{
                  textDecoration: "none",
                  transition: "transform 0.2s",
                  display: "inline-block",
                }}
                to={`/read/${post.id}`}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                {post.title.length > 50 ? `${post.title.substring(0, 50)}...` : post.title}
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Grid>
  );
};

export default RecentPost;
