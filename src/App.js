import React from 'react';
import "./App.css";

// import Hola from "./components/Hola";
// import Contador from "./components/Contador";
// import Listado from "./components/Listado";
import Temperatura from "./components/Temperatura";

function App() {
  return (
    <div className="App mt-5">
      <h1>Titulo de nuestro primer proyecto</h1>
      {/* <Hola /> */}
      {/* <Contador /> */}
      {/* <Listado /> */}
      <Temperatura />
    </div>
  );
}

export default App;
