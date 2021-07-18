import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Clients from "./components/Clients";
import Navbar from "./components/Navbar";
import Proyects from "./components/Proyects";
import Settings from "./components/Settings";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/settings">
            <Settings></Settings>
          </Route>
          <Route exact path="/clients">
            <Clients></Clients>
          </Route>
          <Route exact path="/proyects">
            <Proyects></Proyects>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
