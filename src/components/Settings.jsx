import React, { useState } from "react";
import Scanner from "./Scanner";

import "./Settings.css";

const Settings = (props) => {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);
  const onDetected = (result) => {
    setResult(result);
  };

  return (
    <div className="settings">
      <div style={{ border: "solid red 1px" }}>
        <p>{result ? result : "Scanning..."}</p>
        <button onClick={() => setCamera(!camera)}>
          {camera ? "Stop" : "Start"}
        </button>
        <div className="container">
          {camera && <Scanner onDetected={onDetected} />}
        </div>
      </div>
    </div>
  );
};

export default Settings;
