import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";
import PropTypes from "prop-types";
import Loading from "./Loading";
import "./ModalSacnner.css";
import Scanner from "./Scanner";

const ModalSacnner = ({ closeModal, update, estado }) => {
  const [code, setcode] = useState("");

  const [escanear, setescanear] = useState(false);

  const handleEscaner = () => {
    setescanear(true);
  };

  return (
    <div className="modalDelete">
      {escanear ? (
        <div style={{ width: "300px", height: "500px" }}>
          <Scanner stateEscaner={setescanear} setCode={setcode}></Scanner>
        </div>
      ) : null}

      <div>
        <button onClick={handleEscaner}>Escanear</button>
      </div>
      <div>
        <h1>{code}</h1>
      </div>
    </div>
  );
};

ModalSacnner.propTypes = {};

export default ModalSacnner;
