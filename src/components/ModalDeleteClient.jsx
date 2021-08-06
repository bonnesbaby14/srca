import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";
import PropTypes from "prop-types";
import Loading from "./Loading";
import "./ModalDeleteClient.css";

const ModalDeleteClient = ({ closeModal, update, estado }) => {
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

      closeModal({ estado: false, data: "" });
      //   console.log("llegue aqui");
      update();
    }, 1000);
  };
  const handleCloseModal = () => {
    // console.log(estado.data);

    closeModal({ estado: false, data: "" });
  };
  const deleteData = () => {
    const data = { _id: estado.data };
    console.log(data);

    setIsLoading(true);
    fetch("http://192.168.100.2:5000/removeClient", {
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
              console.log(data);
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
  const handleDelete = (e) => {
    e.preventDefault();
    deleteData();
  };
  return (
    <div className="modalDelete">
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
      <form className="modalFormDelete" onSubmit={() => {}}>
        <h2>Eliminar Cliente</h2>
        <button onClick={handleDelete}>Eliminar</button>
        <button onClick={handleCloseModal}>Cancelar</button>
      </form>
    </div>
  );
};

ModalDeleteClient.propTypes = {};

export default ModalDeleteClient;
