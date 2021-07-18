import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div style={{ border: "solid red", width: "100%" }}>dd</div>
    </div>
  );
}

export default App;
