import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";
import PropTypes from "prop-types";
import Loading from "./Loading";
import "./ModalClient.css";

const ModalClient = ({ closeModal, update }) => {
  const [error, setError] = useState({ estado: false, color: "", texto: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { log, setUser } = useContext(UserContext);
  const handleerror = async () => {
    setTimeout(() => {
      setError(false);
    }, 2000);
  };
  const handleSuccesfull = async () => {
    setTimeout(() => {
      setError(false);

      closeModal(false);
      update();
    }, 1000);
  };
  const [data, setdata] = useState({
    name: "",
    phone: "",
    mail: "",
    website: "",
    image: "",
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
    const datafinal = { ...data };
    data.date1 = new Date();
    if (
      datafinal.name === "" ||
      datafinal.phone === "" ||
      datafinal.mail === "" ||
      datafinal.website === ""
    ) {
      setError({
        estado: true,
        color: "yellow",
        texto: "Llena todos los datos",
      });
      handleerror();
      return;
    }
    upData(data);
  };
  const upData = (data) => {
    console.log("se empieza a enviar");
    console.log(JSON.stringify(data));
    setIsLoading(true);
    fetch("http://192.168.100.2:5000/upClient", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        Authorization: log.authKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(
      (data) => {
        if (data.status === 401) {
          setUser({ type: "logout" });
        } else {
          data.json().then((data) => {
            if (data.error === "errorData") {
              setIsLoading(false);
              setError({
                estado: true,
                color: "red",
                texto: "Ocurrio un error",
              });
              handleerror();
            } else if (data.error === "errorSave") {
              setIsLoading(false);
              setError({
                estado: true,
                color: "red",
                texto: "Intenta de nuevo",
              });
              handleerror();
            } else if (data.error === "noError") {
              setIsLoading(false);
              setError({
                estado: true,
                color: "green",
                texto: "Guardado con exito",
              });
              handleSuccesfull();
            }
          });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <div className="modal">
      {error.estado ? (
        <div
          style={{
            background: error.color,
            width: "100%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          <span>{error.texto}</span>
        </div>
      ) : null}
      {isLoading ? <Loading></Loading> : null}
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
