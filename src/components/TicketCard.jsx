import React from "react";
import PropTypes from "prop-types";
import "./TicketCard.css";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
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

const TicketCard = (props) => {
  return (
    <>
      <ContextMenuTrigger id="add_same_id">
        <div className="receipt" id="hola" onAuxClick={handleAuxClick}>
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

TicketCard.propTypes = {};

export default TicketCard;
