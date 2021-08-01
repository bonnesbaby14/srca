import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import "./ModalProject.css";
import { UserContext } from "../context/contexts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ModalProject = ({ closeModal }) => {
  const [startDateInicio, setStartDateInicio] = useState(new Date());
  const [startDateFin, setStartDateFin] = useState(null);
  const [data, setdata] = useState({
    name: "",
    description: "",
    price: "",
    date1: startDateInicio,
    date2: startDateFin,
    id_cliente: "",
  });

  const { log, setUser } = useContext(UserContext);
  const [clients, setClients] = useState([]);

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

    datafinal.date1 = startDateInicio;
    datafinal.date2 = startDateFin;
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
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="modal">
      <form className="modalForm" onSubmit={handleModal}>
        <h2>Agregar proyecto</h2>
        <input
          onChange={handleModal}
          type="text"
          id="name"
          placeholder="Nombre"
          value={data.name}
        />
        <textarea
          onChange={handleModal}
          id="description"
          type="text"
          placeholder="Descripción"
          style={{ resize: "none" }}
          value={data.description}
        />
        <input
          onChange={handleModal}
          type="text"
          id="price"
          placeholder="Precio"
          value={data.price}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <label htmlFor="">
            Inicio{" "}
            <DatePicker
              selected={startDateInicio}
              onChange={(date) => {
                setStartDateInicio(date);
              }}
            />
          </label>
          <label htmlFor="">
            Final{" "}
            <DatePicker
              selected={startDateFin}
              onChange={(date) => {
                setStartDateFin(date);
                setdata(data);
              }}
            />
          </label>
        </div>
        <select name="cliente" onChange={handleModal} id="id_cliente">
          <option className="option" value="">
            Cliente
          </option>
          {clients.map((client) => (
            <option className="option" key={client._id} value={client._id}>
              {client.name}
            </option>
          ))}
        </select>
        <button onClick={handleUpProject}>Guardar</button>
        <button onClick={handleCloseModal}>Cancelar</button>
      </form>
    </div>
  );
};

ModalProject.propTypes = {};

export default ModalProject;
