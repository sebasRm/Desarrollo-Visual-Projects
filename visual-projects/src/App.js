
import React,{useState, useEffect} from 'react';

import Sesion from './components/Sesion';
import Menu from './components/Menu';

function App(){

    const [conectado, setConectado]= useState(false);

    const acceder = (estado)=>{
        setConectado(estado)
    }

    return(

        conectado ? <Menu/> : <Sesion acceder={acceder}/>

    );
}

export default App;