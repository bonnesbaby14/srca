import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";
import { AiOutlineClose, AiFillEdit, AiOutlineSend } from "react-icons/ai";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import FloatButton from "./FloatButton";
import SerachBar from "./SearchBar";
import "./Tickets.css";
import TicketCard from "./TicketCard";
import Loading from "./Loading";
import ModalTicket from "./ModalTicket";
import ModalDeleteTicket from "./ModalDeleteTicket";

const Tickets = (props) => {
  //context del usuario
  const { log, setUser } = useContext(UserContext);

  //handles para edicion del elemento

  const handleRemove = (e, data) => {
    setIsModalDelete({ estado: true, data: data.id });
  };
  const handleSend = (e, data) => {};
  //handle para abrir modal para editar usuario
  const handleEdit = (e, data) => {
    setIsModal({ estado: true, action: "edit", data: data.data });
  };

  //datos de la peticion
  const [datos, setDatos] = useState({
    tickets: [],
    clients: [],
    projects: [],
  });

  // Estado de carga
  const [isLoading, setIsLoading] = useState(false);
  //estado del modal
  const [isModal, setIsModal] = useState({ estado: false, action: "" });
  const [isModalDelete, setIsModalDelete] = useState({
    estado: false,
    data: "",
  });

  //handle para abrir modal para nuevo usuario
  const handleModal = () => {
    setIsModal({
      estado: true,
      action: "new",
      data: {
        id: "",
        _import: "",
        date1: new Date(),
        signature: "firmalink",
        payment: "",
        id_project: "",
        id_client: "",
      },
    });
  };

  //consulta api rest
  const getData = () => {
    setIsLoading(true);
    fetch("https://srcaapi.gabrielangeles.com/tickets", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: log.authKey,
        // 'Content-Type': 'application/json'
      },
    }).then(
      (data) => {
        // console.table(data);
        if (data.status === 401) {
          setUser({ type: "logout" });
        } else {
          data.json().then((data) => {
            setDatos({
              tickets: data.tickets,
              clients: data.clients,
              projects: data.projects,
            });
            setIsLoading(false);
            // console.log("se guardaron dato");
          });
        }
      },
      (err) => {
        console.log(err);
        setIsLoading(false);
      }
    );
  };

  //usefect para la consulta
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="ticketsColumn">
      <SerachBar></SerachBar>

      <div className="ticketsRow">
        {isModal.estado ? (
          <ModalTicket
            closeModal={setIsModal}
            update={getData}
            estado={isModal}
          />
        ) : isModalDelete.estado ? (
          <ModalDeleteTicket
            closeModal={setIsModalDelete}
            update={getData}
            estado={isModalDelete}
          ></ModalDeleteTicket>
        ) : null}
        {isLoading ? (
          <Loading></Loading>
        ) : (
          datos.tickets.map((ticket) => {
            const client = datos.clients.find(
              (client) => client._id === ticket.id_client
            );
            const project = datos.projects.find(
              (project) => project._id === ticket.id_project
            );

            return (
              <ContextMenuTrigger key={ticket._id} id={ticket._id}>
                <TicketCard
                  key={ticket._id}
                  {...ticket}
                  client={client}
                  project={project}
                />
                <ContextMenu className="menu" id={ticket._id}>
                  <MenuItem
                    onClick={handleRemove}
                    data={{ id: ticket._id }}
                    className="menuItem"
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AiOutlineClose
                        style={{ color: "red", marginRight: "5px" }}
                      />

                      <div>Eliminar</div>
                    </div>
                  </MenuItem>
                  <MenuItem
                    onClick={handleEdit}
                    data={{ data: ticket }}
                    className="menuItem"
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AiFillEdit
                        style={{ color: "blue", marginRight: "5px" }}
                      />

                      <div>Editar</div>
                    </div>
                  </MenuItem>
                  <MenuItem
                    onClick={handleSend}
                    data={{ id: ticket._id }}
                    className="menuItem"
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AiOutlineSend
                        style={{ color: "green", marginRight: "5px" }}
                      />

                      <div>Enviar</div>
                    </div>
                  </MenuItem>
                </ContextMenu>
              </ContextMenuTrigger>
            );
          })
        )}

        <div onClick={handleModal}>
          <FloatButton></FloatButton>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
