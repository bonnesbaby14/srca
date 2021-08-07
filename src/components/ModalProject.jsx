import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";
import "./ModalProject.css";

import Loading from "./Loading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ModalProject = ({ closeModal, update, estado }) => {
  console.log("desde proyecto edit");
  console.table(estado.data);
  console.log(Date(estado.data.date_start));
  console.log(Date(estado.data.date_finish));
  console.log(estado.data.date_finsh || null);

  const [startDateInicio, setStartDateInicio] = useState(
    Date.parse(estado.data.date_start)
  );
  const [startDateFin, setStartDateFin] = useState(
    Date.parse(estado.data.date_finsh || null)
  );

  const [data, setdata] = useState({
    _id: estado.data._id,
    name: estado.data.name,
    description: estado.data.description,
    price: estado.data.precio,
    date1: "",
    date2: "",

    id_cliente: estado.data.id_cliente,
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
  const updateData = (data) => {
    console.log("se empieza a enviar la actualizacion");
    console.table(JSON.stringify(data));
    setIsLoading(true);
    fetch("http://192.168.100.2:5000/updateProject", {
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
    console.log("esto es en el uo del priyecto");
    console.table(datafinal);
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
    upData(datafinal);
    console.log(data);
  };
  const handleUpdateProject = (e) => {
    e.preventDefault();

    const datafinal = { ...data };

    datafinal.date1 = startDateInicio;
    datafinal.date2 = startDateFin;
    console.log("esto es en el update del priyecto");
    console.table(datafinal);
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
    updateData(datafinal);
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
        <div className="dates">
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
          <option
            value="DEFAULT"
            disabled={estado.action === "now" ? true : false}
          >
            Cliente
          </option>

          {clients.map((client) => (
            <option
              className="option"
              selected={
                estado.action === "edit" && estado.data.id_client === client._id
                  ? true
                  : false
              }
              key={client._id}
              value={client._id}
            >
              {client.name}
              {console.table(estado.data)}
              {console.table(client._id)}
            </option>
          ))}
        </select>
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

ModalProject.propTypes = {};

export default ModalProject;
