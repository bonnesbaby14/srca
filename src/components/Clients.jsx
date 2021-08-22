import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import CardClient from "./CardClient";
import { AiOutlineClose, AiFillEdit, AiOutlineSend } from "react-icons/ai";
import Loading from "./Loading";
import "./Clients.css";
import FloatButton from "./FloatButton";
import ModalDeleteClient from "./ModalDeleteClient";

import SerachBar from "./SearchBar";
import ModalClient from "./ModalClient";

const Clients = (props) => {
  const { log, setUser } = useContext(UserContext);
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState({ estado: false, action: "" });
  const [isModalDelete, setIsModalDelete] = useState({
    estado: false,
    data: "",
  });

  const handleRemove = (e, data) => {
    setIsModalDelete({ estado: true, data: data.id });
  };
  const handleSend = (e, data) => {};
  //handle para abrir modal para editar usuario
  const handleEdit = (e, data) => {
    console.log("los datos del edit");
    console.table(data.data);
    setIsModal({ estado: true, action: "edit", data: data.data });
  };
  const handleModal = () => {
    setIsModal({
      estado: true,
      action: "new",
      data: {
        _id: "",
        name: "",
        phone: "",
        mail: "",
        website: "",
        image: "",
        date: "",
      },
    });
  };
  const getData = () => {
    setIsLoading(true);
    fetch("https://srcaapi.gabrielangeles.com/clients", {
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
            setIsLoading(false);
            setClients(data);
          });
        }
      },
      (err) => {
        console.log(err);
        setIsLoading(false);
        setClients({});
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="clientsColumn">
      <SerachBar></SerachBar>
      <div className="clientsRow">
        {isModal.estado ? (
          <ModalClient
            closeModal={setIsModal}
            update={getData}
            estado={isModal}
          />
        ) : isModalDelete.estado ? (
          <ModalDeleteClient
            closeModal={setIsModalDelete}
            update={getData}
            estado={isModalDelete}
          ></ModalDeleteClient>
        ) : null}
        {isLoading ? (
          <Loading></Loading>
        ) : (
          clients.map((client) => <CardClient key={client._id} {...client} />)
        )}
        <div onClick={handleModal}>
          <FloatButton></FloatButton>
        </div>
      </div>
    </div>
  );
};

export default Clients;
