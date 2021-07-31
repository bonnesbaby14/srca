import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";

import FloatButton from "./FloatButton";
import SerachBar from "./SearchBar";
import "./Tickets.css";
import TicketCard from "./TicketCard";

const Tickets = (props) => {
  const { log, setUser } = useContext(UserContext);
  const [tickets, setTickets] = useState([]);
  const getData = () => {
    fetch("http://localhost:5000/tickets", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: log.authKey,
        // 'Content-Type': 'application/json'
      },
    }).then(
      (data) => {
        data.json().then((data) => {
          setTickets(data);
        });
      },
      (err) => {
        console.log(err);
        setTickets({});
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="ticketsColumn">
      <SerachBar></SerachBar>

      <div className="ticketsRow">
        {tickets.length > 0 ? (
          tickets.map((ticket) => {
            <TicketCard key={ticket._id} {...ticket}></TicketCard>;
          })
        ) : (
          <h1 style={{ color: "white" }}> Sin elementos</h1>
        )}

        <FloatButton></FloatButton>
      </div>
    </div>
  );
};

export default Tickets;
