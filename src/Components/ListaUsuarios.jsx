import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PETICION_GET_USUARIOS = "http://localhost:5000/usuarios/";

function ListaUsuarios(){
    const [lista, setLista] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(PETICION_GET_USUARIOS)
          .then(response => {
              console.log(response.data);
              setLista(response.data);
          }).catch(err=>{ 
              console.log(err);
          })
    
      }, []);

      const borrarUsuario = async (id) =>{
        try{
            const res = await axios.delete(PETICION_GET_USUARIOS + id);
            const listaActualizada = lista.filter((usuario)=> {return(usuario.id != res.data.id)})
            setLista(listaActualizada);
        }catch(error){
            console.log(error);
        } 
      }

      return(
        <div>
            <ul className="App">
            {
                lista.map((item, idx) =>{
                    return <li key={idx}> <Link to={"/usuario/"+ item.id}>{item.nombre}</Link> <button onClick={() =>borrarUsuario(item.id)}>Borrar</button>
                        </li>
                })
            }          
            </ul>
            <button onClick={()=>{navigate('/usuario/new')}}>Nuevo</button>
        </div>
      );
}
export default ListaUsuarios;