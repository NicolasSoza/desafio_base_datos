import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import BaseColaboradores from "./assets/BaseColaboradores";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Listado from "./Componentes/Listado";
import Formulario from './Componentes/Formulario';
import Alert from './Componentes/Alert';
import Buscador from './Componentes/Buscador'; // Importar el componente Buscador

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState({ mensaje: "", color: "" });

  const handleSubmit = (nuevoColaborador) => {
    if (
      nuevoColaborador.nombre === "" ||
      nuevoColaborador.correo === "" ||
      nuevoColaborador.edad === "" ||
      nuevoColaborador.cargo === "" ||
      nuevoColaborador.telefono === ""
    ) {
      setAlerta({ mensaje: "Todos los campos son obligatorios", color: "danger" });
    } else {
      setColaboradores([...colaboradores, nuevoColaborador]);
      setAlerta({ mensaje: "Colaborador agregado exitosamente", color: "success" });
    }
  };

  return (
    <div className="mx-4">
      <h1 className="text-start">Lista de Colaboradores</h1>
      <Row>
        <Col sm={12} md={9}>
          <Buscador colaboradores={BaseColaboradores} setColaboradores={setColaboradores} />
          <Listado colaboradores={colaboradores} />
        </Col>
        <Col md={3} className="">
          <h2>Agregar Colaborador</h2>
          <Alert mensaje={alerta.mensaje} color={alerta.color} />
          <Formulario onSubmit={handleSubmit} />
        </Col>
      </Row>
    </div>
  );
}

export default App;