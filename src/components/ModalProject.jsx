import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import "./ModalProject.css";
import { UserContext } from "../context/contexts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ModalProject = ({ closeModal }) => {
  const [startDateInicio, setStartDateInicio] = useState(new Date());
  const [startDateFin, setStartDateFin] = useState(null);
  const { log, setUser } = useContext(UserContext);
  const [clients, setClients] = useState([]);
  const handleModal = (event) => {
    event.preventDefault();
  };
  const handleCloseModal = () => {
    closeModal(false);
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
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="modal">
      <form className="modalForm" onSubmit={handleModal}>
        <h2>Agregar proyecto</h2>
        <input type="text" placeholder="Nombre" />
        <textarea type="text" placeholder="Descripción" />
        <input type="text" placeholder="Precio" />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <label htmlFor="">
            Inicio{" "}
            <DatePicker
              selected={startDateInicio}
              onChange={(date) => setStartDateInicio(date)}
            />
          </label>
          <label htmlFor="">
            Final{" "}
            <DatePicker
              selected={startDateFin}
              onChange={(date) => setStartDateFin(date)}
            />
          </label>
        </div>
        <select name="cliente">
          {clients.map((client) => (
            <option className="option" value={client._id}>
              {client.name}
            </option>
          ))}
        </select>
        <button onClick={() => {}}>Guardar</button>
        <button onClick={handleCloseModal}>Cancelar</button>
      </form>
    </div>
  );
};

ModalProject.propTypes = {};

export default ModalProject;
