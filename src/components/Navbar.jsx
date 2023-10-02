import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close"; // Icône de fermeture
import { Divider } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "/" },
  { label: "Post", path: "/post" },
  { label: "Projects", path: "/projects" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = undefined;

  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: "#33180b" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Titre du site à côté du toggle menu */}
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <span style={{ color: "yellow" }}>Jul-</span>Blog
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={NavLink}
                to={item.path}
                activeClassName="active"
                sx={{
                  color: "#fff",
                  "&:hover": { backgroundColor: "#262229" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {/* Contenu du menu latéral */}
          <Box sx={{ textAlign: "center" }}>
            <IconButton
              color="inherit"
              aria-label="close drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mt: 2 }}
            >
              <CloseIcon />
            </IconButton>
            <Typography color="success" variant="h6" sx={{ mt: 2 }}>
              <span style={{ color: "green" }}>Jul-</span>Blog
            </Typography>
            <Divider/>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    sx={{
                      textAlign: "center",
                      color: "#fff",
                      backgroundColor: "#413b45",
                      "&:hover": { backgroundColor: "#262229" },
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {/* Vos composants de contenu vont ici */}
      </Box>
    </Box>
  );
}
