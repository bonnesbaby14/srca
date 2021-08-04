import React from "react";

import "./TicketCard.css";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";

import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const handlePDF = () => {
  html2canvas(document.querySelector("#hola"), { scale: 2 }).then((canvas) => {
    var link = document.createElement("a");
    link.download = "ticked.jpeg";
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
  });
};

const TicketCard = ({ _id, date, payment, _import, client, project }) => {
  console.log("datos dento del ");
  console.log(client);
  console.log(project);
  return (
    <>
      <div className="receipt" id="hola">
        <div className="logo">
          <img src="./assets/logo-negro.png" alt="Gabriel Angeles" />
        </div>
        <div className="data">
          <div className="folio">
            <h4>Folio:</h4>
            <h5>{_id}</h5>
          </div>

          <div className="fecha">
            <h4>Fecha:</h4>
            <h5>{new Date(date).toDateString()}</h5>
          </div>
          <div className="pago">
            <h4>Metodo de pago:</h4>
            <h5>{payment}</h5>
          </div>
          <div className="importe">
            <h4>Importe</h4>
            <h5>${_import}</h5>
          </div>
          <div className="proyecto">
            <h4>Proyecto</h4>
            <h5>{project.name}</h5>
          </div>
          <div className="cliente">
            <h4>Cliente</h4>
            <h5>{client.name}</h5>
          </div>

          <div className="qr">
            <QRCode value="https://gabrielangeles.com" size={60} />
          </div>
          {/* <button onClick={handlePDF}>sssss</button> */}
        </div>
      </div>
    </>
  );
};

export default TicketCard;
