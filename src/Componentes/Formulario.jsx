import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario({ onSubmit }) {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(nuevoColaborador);
    setNuevoColaborador({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Nombre del colaborador"
          name="nombre"
          className="my-3"
          onChange={handleChange}
          value={nuevoColaborador.nombre} />
        <Form.Control
          type="text"
          placeholder="Email del colaborador"
          name="correo"
          className="my-3"
          onChange={handleChange}
          value={nuevoColaborador.correo} />
        <Form.Control
          type="text"
          placeholder="Edad del Colaborador"
          name="edad"
          className="my-3"
          onChange={handleChange}
          value={nuevoColaborador.edad} />
        <Form.Control
          type="text"
          placeholder="Cargo del colaborador"
          name="cargo"
          className="my-3"
          onChange={handleChange}
          value={nuevoColaborador.cargo} />
        <Form.Control
          type="text"
          placeholder="Telefono del colaborador"
          name="telefono"
          className="my-3"
          onChange={handleChange}
          value={nuevoColaborador.telefono} />
        <Button variant="primary" type="submit">
          Agregar Colaborador
        </Button>
      </Form.Group>
    </Form>
  );
}

export default Formulario;