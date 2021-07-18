import React from "react";
import PropTypes from "prop-types";
import "./Proyects.css";
import ProyectCard from "./ProyectCard";
import { FaSistrix } from "react-icons/fa";
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

Proyects.propTypes = {};

export default Proyects;
