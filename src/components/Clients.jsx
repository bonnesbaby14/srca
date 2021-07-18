import React from "react";
import PropTypes from "prop-types";
import CardClient from "./CardClient";
import "./Clients.css";
import FloatButton from "./FloatButton";

import SerachBar from "./SearchBar";
const Clients = (props) => {
  return (
    <div className="clientsColumn">
      <SerachBar></SerachBar>
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
