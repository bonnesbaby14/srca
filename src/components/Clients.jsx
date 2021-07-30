import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";

import CardClient from "./CardClient";
import "./Clients.css";
import FloatButton from "./FloatButton";

import SerachBar from "./SearchBar";

const Clients = (props) => {
  const { log } = useContext(UserContext);
  const [clients, setClients] = useState([]);
  const getData = async () => {
    const data = await fetch("http://localhost:5000/clients", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: log.authKey,
        // 'Content-Type': 'application/json'
      },

      body: JSON.stringify({ messeage: "holi" }),
    });
    const clients = await data.json();
    setClients(clients);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="clientsColumn">
      <SerachBar></SerachBar>
      <div className="clientsRow">
        {clients.map((clients) => (
          <CardClient key={clients.id} {...clients} />
        ))}
        <FloatButton></FloatButton>
      </div>
    </div>
  );
};

export default Clients;
