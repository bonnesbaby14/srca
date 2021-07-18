import React from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";
import { FaSistrix } from "react-icons/fa";

const SerachBar = (props) => {
  return (
    <div className="bar">
      <input type="text" placeholder="Buscar " />
      <button>
        <FaSistrix></FaSistrix>
      </button>
    </div>
  );
};

SerachBar.propTypes = {};

export default SerachBar;
