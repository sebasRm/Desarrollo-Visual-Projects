import React,{useRef} from 'react';
import axios from 'axios'

import '../assets/css/Sesion.css';
import fondoLogin from "../assets/img/fondoLogin.jpg"


import App from  '../App.js'
import { Fragment } from 'react/cjs/react.production.min';

const enviarDatos = async (usuario,contrasena)=>
 {
        try
        {
            var formData = new FormData();
            formData.append('usuario', usuario);
            formData.append('contrasena',contrasena);
            const res = await axios.post('http://localhost/Apis/login.php',formData).then((resJson)=>{
                return resJson.data;
            }); 
            return res;     
        }
        catch(error)
        {
            console.error(error);
        }       
}

export default function Sesion (props)
{
    const reftUsuario = useRef(null);
    const reftPassword = useRef(null);

    const handleLogin= async()=>{

           let usuario = reftUsuario.current.value;
           let contrasena = reftPassword.current.value;

           if(usuario=="" || contrasena =="")
           {
            alert("Ingrese los campos correctamente")
           }
           else
           {
             const resJson= await enviarDatos(usuario,contrasena);
             console.log("respuesta desde el evento: ", resJson); 
             
            if(resJson.conectado== false)
            {
                alert("El usuario no existe")
            }
            else
            {
                props.acceder(resJson.conectado)
            }
        }
    }

    return(
      <Fragment>
       <div className="">
            <img src={fondoLogin} className="fondoLogin"/>
       </div>

       <div className="row">
        <div className="col-xs-6 col-sm-12  col-md-6 col-lg-6">
           <div className="card">
               <h1 className="card-title text-center">Login</h1>
               <div className="card-body">
               <span className="input-group-text" id="basic-addon1">
                     ✉️</span> 
               </div>
           </div>
        </div>

          
        </div>
      </Fragment>     
    )
}