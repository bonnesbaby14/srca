import React from "react";

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

export default SerachBar;
