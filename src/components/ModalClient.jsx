import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ModalClient.css";

const ModalClient = ({ closeModal }) => {
  const [data, setdata] = useState({
    name: "",
    phone: "",
    mail: "",
    website: "",
  });
  const handleModal = (event) => {
    const datafinal = { ...data };
    datafinal[event.target.id] = event.target.value;

    setdata(datafinal);
  };

  const handleCloseModal = () => {
    closeModal(false);
  };
  const handleUpProject = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="modal">
      <form className="modalForm" onSubmit={handleModal}>
        <h2>Agregar cliente</h2>
        <input
          id="name"
          onChange={handleModal}
          type="text"
          placeholder="Nombre"
        />
        <input
          id="phone"
          onChange={handleModal}
          type="text"
          placeholder="Telefono"
        />
        <input
          id="mail"
          onChange={handleModal}
          type="text"
          placeholder="Correo"
        />
        <input
          id="website"
          onChange={handleModal}
          type="text"
          placeholder="WebSite"
        />
        <button onClick={handleUpProject}>Guardar</button>
        <button onClick={handleCloseModal}>Cancelar</button>
      </form>
    </div>
  );
};

ModalClient.propTypes = {};

export default ModalClient;
