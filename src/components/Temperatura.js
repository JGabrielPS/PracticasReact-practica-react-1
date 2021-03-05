import React, { useState } from "react";

const Temperatura = () => {
  let [temperatura, setTemperatura] = useState(19);

  return (
    <div className="container">
      <h2>La temperatura es: {temperatura} </h2>
      <p>{temperatura > 21 ? "Hace calor" : "Hace fresco"}</p>
      <button
        className="btn btn-success btn-block"
        onClick={() => setTemperatura(temperatura + 1)}
      >
        Aumentar temperatura
      </button>
      <button
        className="btn btn-success btn-block"
        onClick={() => setTemperatura(temperatura - 1)}
      >
        Reducir temperatura
      </button>
    </div>
  );
};

export default Temperatura;
