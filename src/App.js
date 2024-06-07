
import './App.css';
import ListaUsuarios from './Components/ListaUsuarios';
import AgregarUsuario from './Components/AgregarUsuario';
import DetalleUsuario from './Components/DetalleUsuario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/usuario/new"} element= {<AgregarUsuario />} />
        <Route path={"/usuario/:id"} element= {<DetalleUsuario />} />
        <Route path={"/"} element= {<ListaUsuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
