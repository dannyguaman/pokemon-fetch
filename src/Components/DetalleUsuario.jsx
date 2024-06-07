import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PETICION_GET_USUARIO = "http://localhost:5000/usuarios/"

function DetalleUsuario(){
    const [ usuario, setUsuario ] = useState({
        id: null,
        nombre: null,
        apellido: null,
        ciudadNacimiento: null
    })

    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(()=>{
        console.log(PETICION_GET_USUARIO + id);
        axios.get(PETICION_GET_USUARIO + id)
        .then(respuesta => {
            setUsuario(respuesta.data);

        }
        )
        .catch(err => console.log(err));
    }, []);

    const manejadorRegresar = () =>{
        navigate("/");
    }

    return(
    <form >
        <h2>Detalle Usuario</h2>
        <div>
            <label htmlFor="identificador">Id:</label>
            <span>{usuario.id}</span>
        </div>
        <div>
            <label htmlFor="nombre">Nombre:</label>
            <span>{usuario.nombre}</span>
        </div>
        <div>
            <label htmlFor="apellido">Apellido:</label>
            <span>{usuario.apellido}</span>
        </div>
        <div>
            <label htmlFor="ciudad">Ciudad:</label>
            <span>{usuario.ciudadNacimiento}</span>
        </div>
        <button onClick={manejadorRegresar}>Regresar</button>
        
    </form>
    );

}

export default DetalleUsuario;