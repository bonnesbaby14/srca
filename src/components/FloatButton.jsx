import React from "react";

import { FaPlus } from "react-icons/fa";

import "./FloatButton.css";

const FloatButton = () => {
  return (
    <div>
      <button className="float-button" target="_blank">
        <FaPlus></FaPlus>
      </button>
    </div>
  );
};

export default FloatButton;
