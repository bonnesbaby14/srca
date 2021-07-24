import React from "react";

import "./Proyects.css";
import ProyectCard from "./ProyectCard";

import SerachBar from "./SearchBar";

const Proyects = (props) => {
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
