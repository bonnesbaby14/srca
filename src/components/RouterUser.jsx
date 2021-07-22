import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Clients from "./Clients";
import Navbar from "./Navbar";
import Proyects from "./Proyects";
import Settings from "./Settings";
import Tickets from "./Tickets";
import Dashboard from "./Dashboard";

const RouterUser = (props) => {
  return (
    <>
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/settings">
          <Settings></Settings>
        </Route>
        <Route exact path="/clients">
          <Clients></Clients>
        </Route>
        <Route exact path="/proyects">
          <Proyects></Proyects>
        </Route>
        <Route exact path="/tickets">
          <Tickets></Tickets>
        </Route>
      </Switch>
    </>
  );
};

Router.propTypes = {};

export default RouterUser;
