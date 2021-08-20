//import { Button, Icon, IconButton } from "@material-ui/core";
//import DeleteIcon from "@material-ui/icons/Delete";
//import { Container, Typography, InputAdornment } from "@material-ui/core";

//import NavBar from "./componentes/NavBar";
//import Inicio from "./componentes/Inicio";
import theme from "./temaConfig";
import { ThemeProvider } from "@material-ui/core/styles";
import Principal from "./componentes/Principal";
function App() {
  return (
    

      <ThemeProvider theme={theme}>
        <Principal />
      </ThemeProvider>
  
  );
}

export default App;
