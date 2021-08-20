import React from "react";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Ventana1 from "./Ventana1";
import Contacto from "./Contacto";
import Inicio from "./Inicio";
import Servicio from "./Servicio";
import Nosotros from "./Nosotros";
import ConvocatoriasPublicas from "../pages/ConvocatoriasPublicas";

const estilos = makeStyles((theme) => ({
  root: {
    flexGrow: 1,//display: "flex",// flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Principal = () => {
  const classes = estilos();
  return (
    <Router>
      <div className={classes.root}>
        <NavBar />
        <Switch>
        <Route path ="/" exact>
        <div className={classes.content}>
              <div className={classes.toolbar}>
                <Inicio/>
              </div>
            </div>
          </Route>
          <Route path ="/convocatoriasPublicas" exact>
        <div className={classes.content}>
              <div className={classes.toolbar}>
                <ConvocatoriasPublicas/>
                              </div>
            </div>
          </Route>
          <Route path ="/contactos" exact>
          <div className={classes.content}>
              <div className={classes.toolbar}>
                <Contacto />
              </div>
            </div>
          </Route>
          <Route path ="/nosotros" exact>
                <h1>asdasd</h1>
          </Route>
          <Route path ="/servicios" exact >
            <div className={classes.content}>
              <div className={classes.toolbar}>
               <Servicio/>
              </div>
            </div>
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
};
export default Principal;
