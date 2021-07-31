import React from "react";

import "./CardClient.css";

const CardClient = ({ nombre, phone, web }) => {
  return (
    <div className="user-card ">
      <div className="user-cover">
        <img
          className="user-avatar"
          src="
  https://yossiabramov.com/images/avatar.jpeg"
          alt="user profile"
        />
      </div>
      <div className="user-details">
        <div className="user-name ">{nombre}</div>
        <div className="user-name ">{phone}</div>
        <div className="">{web}</div>
      </div>
      <button className="contact-user hide-text">CONTACT</button>
    </div>
  );
};

export default CardClient;
