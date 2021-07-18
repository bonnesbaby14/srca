import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = (props) => {
  const [sideBar, setSidebar] = useState(false);

  return (
    <div id="wrapper">
      <div id="sidebar-menu" className={sideBar ? "animate" : ""}>
        <div
          id="toggleMenu"
          onClick={() => {
            setSidebar(!sideBar);
          }}
        >
          <div className="list">
            <img src="./assets/logo.png" alt="Logo" />
          </div>
        </div>
        <ul>
          <NavLink to="/">
            <li className="DASHBOARD">
              <span style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}>
                DASHBOARD
              </span>
            </li>
          </NavLink>
          <NavLink to="/clients">
            <li className="USERS">
              <span style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}>
                CLIENTES
              </span>
            </li>
          </NavLink>
          <NavLink to="/proyects">
            <li className="PRIORITY">
              <span style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}>
                PROYECTOS
              </span>
            </li>
          </NavLink>
          <li className="COLLECTIONS">
            <span style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}>
              RECIBOS
            </span>
          </li>
          <li className="ARCHIVED">
            <span style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}>
              ARCHIVED
            </span>
          </li>
          <li className="DELETED">
            <span style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}>
              DELETED
            </span>
          </li>
          <li className="TRENDS">
            <span style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}>
              TRENDS
            </span>
          </li>
          <li className="TASKS">
            <span style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}>
              TASKS
            </span>
          </li>
          <li className="FILTERS">
            <span style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}>
              FILTERS
            </span>
          </li>
          <li className="STATS">
            <span style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}>
              STATS
            </span>
          </li>
          <NavLink to="/settings">
            <li className="SETTINGS">
              <span style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}>
                SETTINGS
              </span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
