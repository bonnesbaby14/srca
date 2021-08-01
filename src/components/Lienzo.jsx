import React, { useRef } from "react";

import "./Lienzo.css";
import SignatureCanvas from "react-signature-canvas";

const Lienzo = (props) => {
  const signatureRef = useRef({});
  return (
    <div>
      <SignatureCanvas
        canvasProps={{
          width: 300,
          height: 100,
          style: { border: "1px solid #000000", background: "white" },
        }}
        ref={signatureRef}
      />
      {/* <button
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
      </button> */}
      <button
        onClick={() => {
          signatureRef.current.clear();
        }}
      >
        Borrar
      </button>
    </div>
  );
};

export default Lienzo;
