import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";
import PropTypes from "prop-types";
import Lienzo from "./Lienzo";
import Loading from "./Loading";
import "./ModalTicket.css";

const ModalClient = ({ closeModal, update, estado }) => {
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
  const { log, setUser } = useContext(UserContext);
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState({ estado: false, color: "", texto: "" });
  const [isLoading, setIsLoading] = useState(false);
  // console.log("datos denteo del modal para edit");
  // console.table(estado.data);
  const [data, setdata] = useState({
    _id: estado.data._id,
    _import: estado.data._import,
    date1: estado.data.date1,
    signature: estado.data.signature,
    payment: estado.data.payment,
    id_project: estado.data.id_project,
    id_client: estado.data.id_client,
  });
  const upData = (data) => {
    console.log("se empieza a enviar");
    console.log(JSON.stringify(data));
    setIsLoading(true);
    fetch("http://localhost:5000/upTicket", {
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
    fetch("http://localhost:5000/updateTicket", {
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
  const handleModal = (event) => {
    const datafinal = { ...data };
    datafinal[event.target.id] = event.target.value;

    setdata(datafinal);
  };
  const handleCloseModal = () => {
    closeModal({ estado: false, action: "" });
  };

  const handleUpProject = (e) => {
    e.preventDefault();
    const datafinal = { ...data };
    data.date1 = new Date();
    if (
      datafinal.import === "" ||
      datafinal.payment === "" ||
      datafinal.signature === "" ||
      datafinal.id_client === "" ||
      datafinal.id_project === "" ||
      datafinal.date1 === ""
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
  const handleUpdateProject = (e) => {
    e.preventDefault();
    const datafinal = { ...data };
    data.date1 = new Date();
    if (
      datafinal.import === "" ||
      datafinal.payment === "" ||
      datafinal.signature === "" ||
      datafinal.id_client === "" ||
      datafinal.id_project === "" ||
      datafinal.date1 === ""
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

  const getData = () => {
    fetch("http://localhost:5000/clients", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: log.authKey,
        // 'Content-Type': 'application/json'
      },
    }).then(
      (data) => {
        if (data.status === 401) {
          setUser({ type: "logout" });
        } else {
          data.json().then((data) => {
            setClients(data);
          });
        }
      },
      (err) => {
        console.log(err);

        setClients({});
      }
    );
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: log.authKey,
        // 'Content-Type': 'application/json'
      },
    }).then(
      (data) => {
        if (data.status === 401) {
          setUser({ type: "logout" });
        } else {
          data.json().then((data) => {
            setProjects(data);
          });
        }
      },
      (err) => {
        console.log(err);

        setProjects({});
      }
    );
  };
  useEffect(() => {
    getData();
  }, []);

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
        <h2>Agregar Ticket</h2>

        <select name="metodo" onChange={handleModal} id="payment">
          <option
            value="DEFAULT"
            disabled={estado.action === "now" ? true : false}
          >
            Metodo de pago
          </option>

          <option
            className="option"
            selected={
              estado.action === "edit" && estado.data.payment === "Efectivo"
                ? true
                : false
            }
            value="Efectivo"
          >
            Efectivo
          </option>
          <option
            className="option"
            selected={
              estado.action === "edit" &&
              estado.data.payment === "Transferencia"
                ? true
                : false
            }
            value="Transferencia"
          >
            Transferencia
          </option>
        </select>

        <input
          onChange={handleModal}
          id="_import"
          type="text"
          placeholder="importe"
          value={data._import}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <select name="cliente" onChange={handleModal} id="id_client">
            <option
              value="DEFAULT"
              disabled={estado.action === "now" ? true : false}
            >
              Cliente
            </option>

            {clients.map((client) => (
              <option
                selected={
                  estado.action === "edit" &&
                  estado.data.id_client === client._id
                    ? true
                    : false
                }
                className="option"
                key={client._id}
                value={client._id}
              >
                {client.name}
              </option>
            ))}
          </select>
          <select name="proyecto" onChange={handleModal} id="id_project">
            <option
              value="DEFAULT"
              disabled={estado.action === "now" ? true : false}
            >
              Proyecto
            </option>

            {projects.map((project) => (
              <option
                selected={
                  estado.action === "edit" &&
                  estado.data.id_project === project._id
                    ? true
                    : false
                }
                className="option"
                key={project._id}
                value={project._id}
              >
                {project.name}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="lienzo">
          <Lienzo></Lienzo>
        </div> */}
        <button
          onClick={
            estado.action === "new" ? handleUpProject : handleUpdateProject
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
