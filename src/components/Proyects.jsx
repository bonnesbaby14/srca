import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";
import "./Proyects.css";
import ProyectCard from "./ProyectCard";

import SerachBar from "./SearchBar";
import TicketCard from "./TicketCard";

const Proyects = (props) => {
  const { log, setUser } = useContext(UserContext);
  const [projects, setProjects] = useState([]);
  const getData = () => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: log.authKey,
        // 'Content-Type': 'application/json'
      },
    }).then(
      (data) => {
        data.json().then((data) => {
          setProjects(data);
        });
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
    <div className="proyectsColumn">
      <SerachBar></SerachBar>
      <div className="proyectsRow">
        {projects.length > 0 ? (
          projects.map((project) => {
            <TicketCard key={project._id} {...project}></TicketCard>;
          })
        ) : (
          <h1 style={{ color: "white" }}> Sin elementos que mostrar</h1>
        )}
      </div>
    </div>
  );
};

export default Proyects;
