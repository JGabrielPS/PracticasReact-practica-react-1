import React, { useState } from "react";

const Formulario = () => {
  const [data, setData] = useState({
    nombre: "",
    edad: "",
  });

  const updateState = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validar = (e) => {
    e.preventDefault();

    const { nombre, edad } = data;

    if (!nombre.trimEnd()) {
      console.log("El nombre esta vacio");
      return;
    }

    if (!edad.trimEnd()) {
      console.log("La edad esta vacia");
      return;
    }
  };

  return (
    <div className="container">
      <form onSubmit={validar} className="form-group">
        <input
          placeholder="Introduce el nombre"
          className="form-control mb-3"
          type="text"
          name="nombre"
          onChange={updateState}
        />
        <input
          placeholder="Introduce la edad"
          className="form-control mb-3"
          type="text"
          name="edad"
          onChange={updateState}
        />
        <input className="btn btn-info btn-block mb-3" type="submit" />
      </form>
    </div>
  );
};

export default Formulario;
