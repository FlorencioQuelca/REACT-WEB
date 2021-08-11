import { useState } from 'react';
import Buscador from './componentes/Buscador';



function App() {
  
  const [buscar, setBuscar]=useState(0)
  const [personas, setPersonas]=useState([])
  

  const consultarApi =() =>{
    const url = 'http://fpslapaz.tk/api/personas?txtBuscar='+parseInt(buscar);
    console.log(url);
    fetch(url).then(respuesta =>respuesta.json()).then (respuesta => {setPersonas(respuesta)})

 }
  const DatosBusqueda = (termino) =>{
         setBuscar(termino)
         consultarApi();     
    }

    
    
  return (
    <div className="app container">
       <div className="jumbotron">
         <p className="lead text-center"> Buscador de personas</p>
          <Buscador
          mensaje = {DatosBusqueda}
          /> 
       </div>
       {buscar}
    </div>
  );
}

export default App;
