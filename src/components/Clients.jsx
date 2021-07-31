import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";

import CardClient from "./CardClient";
import Loading from "./Loading";
import "./Clients.css";
import FloatButton from "./FloatButton";

import SerachBar from "./SearchBar";

const Clients = (props) => {
  const { log, setUser } = useContext(UserContext);
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = () => {
    setIsLoading(true);
    fetch("http://localhost:5000/clients", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: log.authKey,
        // 'Content-Type': 'application/json'
      },
    }).then(
      (data) => {
        if (data.status === 401) {
          setUser({ type: "logout" });
        } else {
          data.json().then((data) => {
            setIsLoading(false);
            setClients(data);
          });
        }
      },
      (err) => {
        console.log(err);
        setIsLoading(false);
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
        {isLoading ? (
          <Loading></Loading>
        ) : (
          clients.map((client) => <CardClient key={client._id} {...client} />)
        )}
        <FloatButton></FloatButton>
      </div>
    </div>
  );
};

export default Clients;
