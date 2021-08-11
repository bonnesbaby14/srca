import React, { useState } from "react";
import ModalSacnner from "./ModalSacnner";
import Scanner from "./Scanner";

import "./Settings.css";

const Settings = (props) => {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = (result) => {
    setResult(result);
  };

  return <div className="settings">{/* <ModalSacnner></ModalSacnner> */}</div>;
};

export default Settings;
