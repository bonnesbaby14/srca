import React from "react";
import PropTypes from "prop-types";
import "./TicketCard.css";
import QRCode from "react-qr-code";

const TicketCard = (props) => {
  return (
    <div className="receipt">
      <img
        className="logo"
        src="./assets/logo-negro.png"
        alt="Gabriel Angeles"
      />
      <hr />
      <div className="address">666 Lincoln St. Santa Monica, CA</div>

      <div className="transactionDetails">Helped by: Garrett</div>
      <div className="centerItem bold">
        <div className="item">ExtraCare Card #: *********1875</div>
        <div>
          <QRCode value="http://gabrielangeles.com" size="150" />
        </div>
      </div>
    </div>
  );
};

TicketCard.propTypes = {};

export default TicketCard;
