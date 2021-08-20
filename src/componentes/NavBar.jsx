import React from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Button,
  IconButton,

} from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import LogoFps from "./logo5.ico";
import Inicio from "./Inicio.jsx";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <img src={LogoFps} alt="Logo" />
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            FPS - LAPAZ
          </Typography>

          <NavLink to="/convocatoriasPublicas" activeClassName="active"><h3>CONVOCATORIAS PUBLICAS </h3>
          </NavLink>
          <Button
            color="inherit"
          >
            Inicios
          </Button>

          <NavLink to="/servicios" activeClassName="active">
            servicios
          </NavLink>
          <NavLink to="/nosotros" activeClassName="active">
            Nosotros
          </NavLink>

          <NavLink to="/contactos" activeClassName="active">
            <Button color="inherit"> CONTACTANOS</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
};

export default NavBar;
