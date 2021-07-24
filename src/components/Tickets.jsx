import React from "react";

import FloatButton from "./FloatButton";
import SerachBar from "./SearchBar";
import "./Tickets.css";
import TicketCard from "./TicketCard";

const Tickets = (props) => {
  return (
    <div className="ticketsColumn">
      <SerachBar></SerachBar>

      <div className="ticketsRow">
        <TicketCard></TicketCard>
        <TicketCard></TicketCard>
        <TicketCard></TicketCard>
        <TicketCard></TicketCard>
        <TicketCard></TicketCard>
        <TicketCard></TicketCard>

        <FloatButton></FloatButton>
      </div>
    </div>
  );
};

export default Tickets;
