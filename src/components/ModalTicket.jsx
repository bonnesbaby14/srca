import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";
import PropTypes from "prop-types";
import Lienzo from "./Lienzo";
import "./ModalTicket.css";

const ModalClient = ({ closeModal }) => {
  const { log, setUser } = useContext(UserContext);
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [data, setdata] = useState({
    import: "",
    date1: new Date(),
    signature: "",
    payment: "",
    id_project: "",
    id_client: "",
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
    console.log(data);
  };
  const getData = () => {
    fetch("http://192.168.100.2:5000/clients", {
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
    fetch("http://192.168.100.2:5000/projects", {
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
      <form className="modalForm" onSubmit={handleModal}>
        <h2>Agregar Ticket</h2>

        <select name="metodo" onChange={handleModal} id="payment">
          <option className="option" value="">
            Metodo de pago
          </option>

          <option className="option" value="Efectivo">
            Efectivo
          </option>
          <option className="option" value="Transferencia">
            Transferencia
          </option>
        </select>

        <input
          onChange={handleModal}
          id="import"
          type="text"
          placeholder="importe"
          value={data.import}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <select name="cliente" onChange={handleModal} id="id_client">
            <option className="option" value="">
              Cliente
            </option>
            {clients.map((client) => (
              <option className="option" key={client._id} value={client._id}>
                {client.name}
              </option>
            ))}
          </select>
          <select name="proyecto" onChange={handleModal} id="id_project">
            <option className="option" value="">
              Proyecto
            </option>

            {projects.map((project) => (
              <option className="option" key={project._id} value={project._id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>
        <div className="lienzo">
          <Lienzo></Lienzo>
        </div>
        <button onClick={handleUpProject}>Guardar</button>
        <button onClick={handleCloseModal}>Cancelar</button>
      </form>
    </div>
  );
};

ModalClient.propTypes = {};

export default ModalClient;
