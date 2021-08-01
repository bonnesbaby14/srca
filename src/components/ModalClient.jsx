import React from "react";
import PropTypes from "prop-types";
import "./ModalClient.css";

const ModalClient = ({ closeModal }) => {
  const handleModal = (event) => {
    event.preventDefault();
  };
  const handleCloseModal = () => {
    closeModal(false);
  };
  return (
    <div className="modal">
      <form className="modalForm" onSubmit={handleModal}>
        <h2>Agregar cliente</h2>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Telefono" />
        <input type="text" placeholder="Correo" />
        <input type="text" placeholder="WebSite" />
        <button onClick={() => {}}>Guardar</button>
        <button onClick={handleCloseModal}>Cancelar</button>
      </form>
    </div>
  );
};

ModalClient.propTypes = {};

export default ModalClient;
