import React, { useEffect, useReducer } from "react";

import "./App.css";
import { UserContext } from "./context/contexts.js";

import { AuthReducer } from "./reducers/reducers";
import LoginRouter from "./routes/LoginRouter";

const App = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("log")) || { log: false };
  };
  const [log, setUser] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);

  return (
    <div className="App">
      <UserContext.Provider value={{ log, setUser }}>
        <LoginRouter></LoginRouter>
      </UserContext.Provider>
    </div>
  );
};

export default App;
