import React, { useState } from "react";

const Listado = () => {
  const [numeros] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <>
      <ul>
        {numeros.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Listado;
