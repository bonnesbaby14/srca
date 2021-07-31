import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";

import CardClient from "./CardClient";
import "./Clients.css";
import FloatButton from "./FloatButton";

import SerachBar from "./SearchBar";

const Clients = (props) => {
  const { log, setUser } = useContext(UserContext);
  const [clients, setClients] = useState([]);
  const getData = () => {
    fetch("http://localhost:5000/clients", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: log.authKey,
        // 'Content-Type': 'application/json'
      },
    }).then(
      (data) => {
        data.json().then((data) => {
          setClients(data);
        });
      },
      (err) => {
        console.log(err);
        setClients({});
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="clientsColumn">
      <SerachBar></SerachBar>
      <div className="clientsRow">
        {clients.map((clients) => (
          <CardClient key={clients._id} {...clients} />
        ))}
        <FloatButton></FloatButton>
      </div>
    </div>
  );
};

export default Clients;
