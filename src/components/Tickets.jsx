import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/contexts";

import FloatButton from "./FloatButton";
import SerachBar from "./SearchBar";
import "./Tickets.css";
import TicketCard from "./TicketCard";
import Loading from "./Loading";
import ModalTicket from "./ModalTicket";

const Tickets = (props) => {
  const { log, setUser } = useContext(UserContext);
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const handleModal = () => {
    setIsModal(true);
  };
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
        {isModal ? <ModalTicket closeModal={setIsModal} /> : null}
        {isLoading ? (
          <Loading></Loading>
        ) : (
          tickets.map((ticket) => <TicketCard key={ticket._id} {...ticket} />)
        )}

        <div onClick={handleModal}>
          <FloatButton></FloatButton>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
