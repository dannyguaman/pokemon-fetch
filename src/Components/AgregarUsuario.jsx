import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PETICION_PUT_USUARIO = 'http://localhost:5000/usuarios'

function AgregarUsuario(){
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState(
        {
            id: "",
            nombre: "",
            apellido: "",
            ciudadNacimiento: ""
        }
    );

    const manejadorSubmit = async(e) =>{
        e.preventDefault();
        try{
            const res = await axios.post(PETICION_PUT_USUARIO, usuario, {headers: {'Content-Type': 'application/json'}});
            console.log(res.data);
            navigate('/');
        }catch (error){
            console.log(error);
        }
        
    }

    const manejadorInput = (e) =>{
        setUsuario({...usuario, [e.target.id]: e.target.value})
    }
    
    return(
    <form onSubmit={manejadorSubmit}>
        <h2>Agregar Usuario</h2>
        <div>
            <label htmlFor="identificador">Id:</label>
            <input type="text" name="identificador" id="id" value={usuario.id} onChange={(e) => manejadorInput(e)} />
        </div>  
        <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" value={usuario.nombre} onChange={(e) => manejadorInput(e)}/>
        </div>
        <div>
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" name="apellido" id="apellido" value={usuario.apellido} onChange={(e) => manejadorInput(e)} />
        </div>
        <div>
            <label htmlFor="ciudad">Ciudad:</label>
            <input type="text" name="ciudadNacimiento" id="ciudadNacimiento" value={usuario.ciudadNacimiento} onChange={(e) => manejadorInput(e) } />
        </div>
        <input type="submit" value="Agregar" />
        
    </form>
    );

}

export default AgregarUsuario;