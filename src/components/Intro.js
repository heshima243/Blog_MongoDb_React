import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Zoom to The Message
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          "Explore a space where expression comes to life. Our blog invites you
          to create, edit, and share captivating articles. Enjoy an enriching
          blogging experience."
        </Typography>
        <div>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Link to="/projects">
                <Button variant="contained" color="success">
                  Discover
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="https://github.com/heshima243" target="_blank">
                <Button variant="outlined" color="secondary">
                  Join Us
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
