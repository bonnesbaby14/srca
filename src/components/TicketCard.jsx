import React from "react";
import PropTypes from "prop-types";
import "./TicketCard.css";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const handlePDF = () => {
  html2canvas(document.querySelector("#hola"), { scale: 2 }).then((canvas) => {
    var link = document.createElement("a");
    link.download = "ticked.jpeg";
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
  });
};
const TicketCard = (props) => {
  return (
    <div className="receipt" id="hola">
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
          <QRCode value="http://gabrielangeles.com" size={150} />
        </div>
        <button onClick={handlePDF}>sssss</button>
      </div>
    </div>
  );
};

TicketCard.propTypes = {};

export default TicketCard;
