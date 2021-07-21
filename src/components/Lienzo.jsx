import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import "./Lienzo.css";
import SignatureCanvas from "react-signature-canvas";

const Lienzo = (props) => {
  const signatureRef = useRef({});
  return (
    <div>
      <SignatureCanvas
        canvasProps={{
          width: 500,
          height: 200,
          style: { border: "1px solid #000000", background: "white" },
        }}
        ref={signatureRef}
      />
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.download = "ticked.jpeg";
          console.log(signatureRef);
          link.href = signatureRef.current
            .getTrimmedCanvas()
            .toDataURL("image/jpg");
          link.click();
        }}
      >
        listo
      </button>
      <button
        onClick={() => {
          signatureRef.current.clear();
        }}
      >
        borrrar
      </button>
    </div>
  );
};

Lienzo.propTypes = {};

export default Lienzo;
