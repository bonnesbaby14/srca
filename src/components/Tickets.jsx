import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";

import FloatButton from "./FloatButton";
import SerachBar from "./SearchBar";
import "./Tickets.css";
import TicketCard from "./TicketCard";
import Loading from "./Loading";

const Tickets = (props) => {
  const { log, setUser } = useContext(UserContext);
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = () => {
    setIsLoading(true);
    fetch("http://localhost:5000/tickets", {
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
            setTickets(data);
          });
        }
      },
      (err) => {
        console.log(err);
        setIsLoading(false);
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
        {isLoading ? (
          <Loading></Loading>
        ) : (
          tickets.map((ticket) => <TicketCard key={ticket._id} {...ticket} />)
        )}

        <FloatButton></FloatButton>
      </div>
    </div>
  );
};

export default Tickets;
