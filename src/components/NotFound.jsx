import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const centerContentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  };

  const typographyStyle = {
    color: "red",
    fontSize: "24px",
  };

  return (
    <div style={centerContentStyle}>
      <div style={typographyStyle}>Ouups!! Page Not Found</div>
      <Link to="/">Return Home page</Link>
    </div>
  );
};

export default NotFound;
