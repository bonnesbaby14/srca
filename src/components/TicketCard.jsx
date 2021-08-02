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
const handleAuxClick = (e) => {
  console.log("2");
  if (e.preventDefault) {
    e.preventDefault();
    console.log("aqui");
  } else {
    console.log("dos");
    e.stop();
  }
};

const handleClick = () => {
  alert("s");
};

const TicketCard = ({ _id, date, payment, _import }) => {
  return (
    <>
      <ContextMenuTrigger id="add_same_id">
        <div className="receipt" id="hola" onAuxClick={handleAuxClick}>
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
              <h5>${_import}</h5>
            </div>
            <div className="cliente">
              <h4>Cliente</h4>
              <h5>${_import}</h5>
            </div>

            <div className="qr">
              <QRCode value="https://gabrielangeles.com" size={60} />
            </div>
            {/* <button onClick={handlePDF}>sssss</button> */}
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenu className="menu" id="add_same_id">
        <MenuItem
          onClick={handleClick}
          data={{ item: "Home" }}
          className="menuItem"
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "Post" }}
          className="menuItem"
        >
          Post
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "Create Post" }}
          className="menuItem"
        >
          Create Post
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "All Post" }}
          className="menuItem"
        >
          All Post
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "Stats" }}
          className="menuItem"
        >
          Stats
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "Chat" }}
          className="menuItem"
        >
          Chat
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "Settings" }}
          className="menuItem"
        >
          Settings
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "Profile" }}
          className="menuItem"
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "Logout" }}
          className="menuItem"
        >
          Logout
        </MenuItem>
      </ContextMenu>
    </>
  );
};

export default TicketCard;
