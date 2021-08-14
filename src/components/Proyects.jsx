import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";
import "./Proyects.css";
import ProyectCard from "./ProyectCard";
import { AiOutlineClose, AiFillEdit, AiOutlineSend } from "react-icons/ai";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import Loading from "./Loading";

import SerachBar from "./SearchBar";
import FloatButton from "./FloatButton";
import ModalProject from "./ModalProject";
import ModalDeleteProject from "./ModalDeleteProject";

const Proyects = (props) => {
  const { log, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState({ clients: [], projects: [] });
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
        description: "",
        price: "",
        date1: new Date(),
        date2: null,
        id_cliente: "",
      },
    });
  };
  const getData = () => {
    setIsLoading(true);
    fetch("https://srca-api.gabrielangeles.com/projects", {
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
            setIsLoading(false);
          });
          console.log("datos");
          console.log(projects);
        }
      },
      (err) => {
        console.log(err);
        console.log("hubo un erro");
        setIsLoading(false);
        setProjects({ clients: [], projects: [] });
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(projects);
  return (
    <div className="proyectsColumn">
      <SerachBar></SerachBar>
      {isModal.estado ? (
        <ModalProject
          closeModal={setIsModal}
          update={getData}
          estado={isModal}
        />
      ) : isModalDelete.estado ? (
        <ModalDeleteProject
          closeModal={setIsModalDelete}
          update={getData}
          estado={isModalDelete}
        ></ModalDeleteProject>
      ) : null}
      <div className="proyectsRow">
        {isLoading ? (
          <Loading></Loading>
        ) : (
          projects.projects.map((project) => {
            const client = projects.clients.find(
              (client) => client._id === project.id_client
            );
            console.log("Este es el cliente de la igualcion:  ");
            console.log(client);
            return (
              <ContextMenuTrigger key={project._id} id={project._id}>
                <ProyectCard key={project._id} {...project} cliente={client} />
                <ContextMenu className="menu" id={project._id}>
                  <MenuItem
                    onClick={handleRemove}
                    data={{ id: project._id }}
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
                    data={{ data: project }}
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
                    data={{ id: project._id }}
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
      </div>
      <div onClick={handleModal}>
        <FloatButton></FloatButton>
      </div>
    </div>
  );
};

export default Proyects;
