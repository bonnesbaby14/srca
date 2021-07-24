import React from "react";

import "./CardClient.css";

const CardClient = (props) => {
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
        <div className="user-name ">Yossi Abramov</div>
        <div className="user-email hide-text">josephabramov90@gmail.com</div>
      </div>
      <button className="contact-user hide-text">CONTACT</button>
    </div>
  );
};

export default CardClient;
