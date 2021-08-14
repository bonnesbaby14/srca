import React from "react";

import "./ProyectCard.css";

const ProyectCard = ({
  name,
  description,
  date_start,
  date_finish,
  precio,
  cliente,
}) => {
  console.log("desde el proyect card ");
  console.log(cliente);
  return (
    <div className="cardProyect">
      <div className="titleProyect">
        <h3>{name}</h3>
      </div>

      <div className="barProyect">
        <div className="emptybarProyect" />
        <div className="filledbarProyect" />
      </div>

      <div className="desProyect">
        <span>{description}</span>
      </div>
      <div className="desProyect">
        <span>{cliente.name}</span>
      </div>
      <div className="desProyect">
        <span>${precio}</span>
      </div>
      <div className="desProyect">
        <span>{date_start}</span>
        <span>{date_finish}</span>
      </div>
    </div>
  );
};

export default ProyectCard;
