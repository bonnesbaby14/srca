import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";
import "./ModalProject.css";

import Loading from "./Loading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ModalProject = ({ closeModal, update }) => {
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
  const [error, setError] = useState({ estado: false, color: "", texto: "" });
  const [isLoading, setIsLoading] = useState(false);
  const handleerror = async () => {
    setTimeout(() => {
      setError(false);
    }, 2000);
  };
  const upData = (data) => {
    console.log("se empieza a enviar");
    console.log(JSON.stringify(data));
    setIsLoading(true);
    fetch("http://192.168.100.2:5000/upProject", {
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
  const handleSuccesfull = async () => {
    setTimeout(() => {
      setError(false);

      closeModal(false);
      update();
    }, 1000);
  };
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
    if (
      datafinal.name === "" ||
      datafinal.description === "" ||
      datafinal.price === "" ||
      datafinal.date1 === "" ||
      datafinal.id_cliente === ""
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
