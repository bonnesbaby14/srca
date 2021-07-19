import React from "react";
import PropTypes from "prop-types";
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

Tickets.propTypes = {};

export default Tickets;
