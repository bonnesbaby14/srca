import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";
import PropTypes from "prop-types";
import "./ModalTicket.css";

const ModalClient = ({ closeModal }) => {
  const { log, setUser } = useContext(UserContext);
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);

  const handleModal = (event) => {
    event.preventDefault();
  };
  const handleCloseModal = () => {
    closeModal(false);
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
      <form className="modalForm" onSubmit={handleModal}>
        <h2>Agregar Ticket</h2>

        <select name="metodo">
          <option className="option" value="Efectivo">
            Efectivo
          </option>
          <option className="option" value="Transferencia">
            Transferencia
          </option>
        </select>
        <select name="cliente">
          {clients.map((client) => (
            <option className="option" value={client._id}>
              {client.name}
            </option>
          ))}

          <option className="option" value="Transferencia">
            Transferencia
          </option>
        </select>
        <select name="proyecto">
          {projects.map((project) => (
            <option className="option" value={project._id}>
              {project.name}
            </option>
          ))}
        </select>

        <button onClick={() => {}}>Guardar</button>
        <button onClick={handleCloseModal}>Cancelar</button>
      </form>
    </div>
  );
};

ModalClient.propTypes = {};

export default ModalClient;
