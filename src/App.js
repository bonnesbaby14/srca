import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./context/contexts.js";
import Login from "./components/Login";
import RouterUser from "./components/RouterUser";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="App">
          {user ? <RouterUser></RouterUser> : <Login></Login>}
        </div>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
