import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import "./CardClient.css";

const CardClient = ({ name, phone, web }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="user-card ">
            <div className="user-cover">
              <img
                className="user-avatar"
                src="./assets/user.png"
                alt="user profile"
              />
            </div>
            <div className="user-details2">
              <div className="user-name1 ">{name}</div>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="user-card ">
            <div className="user-cover">
              <img
                className="user-avatar"
                src="./assets/user.png"
                alt="user profile"
              />
            </div>
            <div className="user-details">
              <div className="user-name ">{name}</div>
            </div>
            <div className="content">
              <button className="contact-user">
                <FaWhatsapp></FaWhatsapp> Mensaje
              </button>
              <button className="contact-user">
                <FaPhoneAlt></FaPhoneAlt> 33333333
              </button>
              <button className="contact-user">
                <FaMailBulk></FaMailBulk> correo@mail.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardClient;
