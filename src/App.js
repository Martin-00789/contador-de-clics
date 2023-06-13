import './App.css';
import Boton from './Componentes/Boton';
import Contador from './Componentes/Contador';
import freeCodeCampLogo from "./Imagenes/freecodecamp-logo.png";
import { useState } from 'react';

function App() {

  const [numClics , setNumclics] = useState(0);

  const manejarClic = () => {
    setNumclics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumclics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
        className="freecodecamp-logo"
        src={freeCodeCampLogo} 
        alt="Logo de freeCodeCamp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton 
        texto="clic"
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        <Boton 
        texto="Reiniciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
