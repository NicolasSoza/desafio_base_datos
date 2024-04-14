import React, { useState } from 'react';

function Buscador({ colaboradores, setColaboradores }) {
  const [busqueda, setBusqueda] = useState("");

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const filtrarColaboradores = () => {
    const resultados = colaboradores.filter(colaborador =>
      colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(busqueda.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(busqueda.toLowerCase())
    );
    setColaboradores(resultados);
  };

  return (
    <div>
      <input
        type="text"
        value={busqueda}
        onChange={handleBusquedaChange}
        placeholder="Buscar colaboradores..."
      />
      <p></p>
      <button onClick={filtrarColaboradores}>Buscar</button>
      <p></p>
    </div>
  );
}

export default Buscador;