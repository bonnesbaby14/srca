import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";
import PropTypes from "prop-types";
import Loading from "./Loading";
import "./ModalClient.css";

const ModalClient = ({ closeModal, update, estado }) => {
  console.log("esto es un los clientes:");
  console.table(estado.data);
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
    _id: estado.data._id,
    name: estado.data.name,
    phone: estado.data.phone,
    mail: estado.data.mail,
    website: estado.data.web,
    image: estado.data.image,
    date: estado.data.date,
  });
  const handleModal = (event) => {
    const datafinal = { ...data };
    datafinal[event.target.id] = event.target.value;

    setdata(datafinal);
  };

  const handleCloseModal = () => {
    closeModal(false);
  };
  const handleUpClient = (e) => {
    e.preventDefault();
    const datafinal = { ...data };

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
  const handleUpdateClient = (e) => {
    e.preventDefault();
    const datafinal = { ...data };

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
    updateData(data);
  };
  const upData = (data) => {
    console.log("se empieza a enviar");
    console.log(JSON.stringify(data));
    setIsLoading(true);
    fetch("https://srca-api.gabrielangeles.com/upClient", {
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
  const updateData = (data) => {
    console.log("se empieza a enviar la actualizacion");
    console.table(JSON.stringify(data));
    setIsLoading(true);
    fetch("https://srca-api.gabrielangeles.com/updateClient", {
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
          value={data.name}
        />
        <input
          id="phone"
          onChange={handleModal}
          type="text"
          placeholder="Telefono"
          value={data.phone}
        />
        <input
          id="mail"
          onChange={handleModal}
          type="text"
          value={data.mail}
          placeholder="Correo"
        />
        <input
          id="website"
          value={data.website}
          onChange={handleModal}
          type="text"
          placeholder="WebSite"
        />
        <button
          onClick={
            estado.action === "new" ? handleUpClient : handleUpdateClient
          }
        >
          Guardar
        </button>
        <button onClick={handleCloseModal}>Cancelar</button>
      </form>
    </div>
  );
};

ModalClient.propTypes = {};

export default ModalClient;
