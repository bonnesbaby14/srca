import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";
import "./Proyects.css";
import ProyectCard from "./ProyectCard";

import SerachBar from "./SearchBar";

const Proyects = (props) => {
  const { log, setUser } = useContext(UserContext);
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    const data = await fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: log.authKey,
        // 'Content-Type': 'application/json'
      },
    });

    if (data.status === 401) {
      setUser({ type: "logout" });
    } else {
      const project = await data.json();
      setProjects(project);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="proyectsColumn">
      <SerachBar></SerachBar>
      <div className="proyectsRow">
        <ProyectCard></ProyectCard>
        <ProyectCard></ProyectCard>
        <ProyectCard></ProyectCard>
        <ProyectCard></ProyectCard>
        <ProyectCard></ProyectCard>
        <ProyectCard></ProyectCard>
      </div>
    </div>
  );
};

export default Proyects;
