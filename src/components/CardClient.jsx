import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaMailBulk, FaWindows } from "react-icons/fa";
import "./CardClient.css";

const CardClient = ({ name, phone, web, mail }) => {
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
            <div className="user-details">
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
            <div className="user-details2">
              <div className="user-name ">{name}</div>
            </div>
            <div className="content">
              <button
                className="contact-user"
                onClick={() => {
                  window.location.href = `https://wa.me/+52${phone}`;
                }}
              >
                <FaWhatsapp></FaWhatsapp> Mensaje
              </button>
              <button
                className="contact-user"
                onClick={() => {
                  window.location.href = `tel:${phone}`;
                }}
              >
                <FaPhoneAlt></FaPhoneAlt> Llamar
              </button>
              <button
                className="contact-user"
                onClick={() => {
                  window.location.href = `mailto:${mail}`;
                }}
              >
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
