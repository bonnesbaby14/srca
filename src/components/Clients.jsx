import React from "react";
import PropTypes from "prop-types";
import CardClient from "./CardClient";
import "./Clients.css";
import FloatButton from "./FloatButton";
import { FaSistrix } from "react-icons/fa";
const Clients = (props) => {
  return (
    <div className="clientsColumn">
      <div className="bar">
        <input type="text" placeholder="Buscar " />
        <button>
          <FaSistrix></FaSistrix>
        </button>
      </div>

      <div className="clientsRow">
        <CardClient></CardClient>

        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <CardClient></CardClient>
        <FloatButton></FloatButton>
      </div>
    </div>
  );
};

Clients.propTypes = {};

export default Clients;
