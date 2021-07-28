import React, { useEffect, useState } from "react";

import CardClient from "./CardClient";
import "./Clients.css";
import FloatButton from "./FloatButton";

import SerachBar from "./SearchBar";

const Clients = (props) => {
  const [clients, setClients] = useState([]);
  const getData = async () => {
    const data = await fetch("http://localhost:5000/clients");
    const clients = await data.json();
    setClients(clients);
    console.log(clients);
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
