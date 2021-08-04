import React from "react";

import { FaUserPlus } from "react-icons/fa";

import "./FloatButton.css";

const FloatButton = () => {
  return (
    <div>
      <button className="float-button" target="_blank">
        <FaUserPlus></FaUserPlus>
      </button>
    </div>
  );
};

export default FloatButton;
