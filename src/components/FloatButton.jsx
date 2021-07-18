import React from "react";
import PropTypes from "prop-types";
import { FaUserPlus } from "react-icons/fa";
import "./FloatButton.css";

const FloatButton = (props) => {
  return (
    <div>
      <button className="float-button" target="_blank">
        <FaUserPlus></FaUserPlus>
      </button>
    </div>
  );
};

FloatButton.propTypes = {};

export default FloatButton;
