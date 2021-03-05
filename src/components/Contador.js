import React, { useState } from "react";

const Contador = () => {
  const [numero, setNumero] = useState(0);

  return (
    <>
      <h2>Cantidad del contador: {numero} </h2>
      <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
      <button onClick={() => setNumero(numero - 1)}>Reducir</button>
    </>
  );
};

export default Contador;
