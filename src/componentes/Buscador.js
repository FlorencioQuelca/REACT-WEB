import React from 'react'



function Buscador(props)  {
    const BusquedaRef=React.createRef();
    const ObtenerDatos =(e) =>{
        e.preventDefault();
        const termino =BusquedaRef.current.value;
        props.mensaje(termino);
      }
    return (
       
        <form  onSubmit ={ObtenerDatos}>
            <div className ="row">
           
                <div className ="form-group col-md-8">
                    <input ref={BusquedaRef} type="text" className="form-control 
                    form-control-lg" placeholder="buscar tu imagen ejemplo :fultbol"/>
                </div>
                <div className ="form-group col-md-4"> 
                    <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar..."/>
                </div>
            </div>
        </form>
    )
}

export default Buscador;