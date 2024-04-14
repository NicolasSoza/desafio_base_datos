

import React from 'react';
import AlertBootstrap from 'react-bootstrap/Alert';

function Alert({ mensaje, color }) {
  return (
    <AlertBootstrap variant={color}>
      {mensaje}
    </AlertBootstrap>
  );
}

export default Alert;