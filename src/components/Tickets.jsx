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

const Tickets = (props) => {
  const handleEdit = (e, data) => {};
  const handleRemove = (e, data) => {};
  const handleSend = (e, data) => {};
  const { log, setUser } = useContext(UserContext);

  const [datos, setDatos] = useState({
    tickets: [],
    clients: [],
    projects: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const handleModal = () => {
    setIsModal(true);
  };

  const getData = () => {
    setIsLoading(true);
    fetch("http://192.168.100.2:5000/tickets", {
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

  useEffect(() => {
    // console.log("se ejecuto el useefect");
    getData();
  }, []);
  // console.log("estos son los datos");
  // console.log(datos);
  return (
    <div className="ticketsColumn">
      <SerachBar></SerachBar>

      <div className="ticketsRow">
        {isModal ? (
          <ModalTicket closeModal={setIsModal} update={getData} />
        ) : null}
        {isLoading ? (
          <Loading></Loading>
        ) : datos.tickets.length > 0 &&
          datos.clients.length > 0 &&
          datos.projects.length > 0 ? (
          datos.tickets.map((ticket) => {
            return (
              <ContextMenuTrigger id={ticket._id}>
                <TicketCard
                  key={ticket._id}
                  {...ticket}
                  client={datos.clients.find(
                    async (client) => (await client._id) === ticket.id_client
                  )}
                  project={datos.projects.find(
                    async (project) => (await project._id) === ticket.id_project
                  )}
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
        ) : null}

        <div onClick={handleModal}>
          <FloatButton></FloatButton>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
