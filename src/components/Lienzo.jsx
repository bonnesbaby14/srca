import React from "react";
import PropTypes from "prop-types";
import "./Lienzo.css";
import SignatureCanvas from "react-signature-canvas";

const Lienzo = (props) => {
  return (
    <div>
      <SignatureCanvas
        canvasProps={{
          width: 500,
          height: 200,
          style: { border: "1px solid #000000", background: "white" },
        }}
      />
    </div>
  );
};

Lienzo.propTypes = {};

export default Lienzo;
