import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./context/contexts.js";
import Login from "./components/Login";

import RouterUser from "./components/RouterUser";

import { AuthReducer } from "./reducers/reducers";
import LoginRouter from "./routes/LoginRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("log")) || { log: false };
};

const App = () => {
  const [log, setUser] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);

  return (
    <UserContext.Provider value={{ log, setUser }}>
      <LoginRouter></LoginRouter>
    </UserContext.Provider>
  );
};

export default App;
