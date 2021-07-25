import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserFriends,
  FaMobileAlt,
  FaCog,
  FaSignOutAlt,
  FaTicketAlt,
} from "react-icons/fa";
import "./Navbar.css";
import "./Navbar.css";

import { UserContext } from "../context/contexts";

const Navbar = (props) => {
  const [sideBar, setSidebar] = useState(false);

  const { setUser } = useContext(UserContext);

  const handleLogout = (e) => {
    e.preventDefault();
    setUser({ type: "logout" });
  };

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
          <NavLink to="/" className="noStyle">
            <li className="">
              <div className="divSVG">
                <FaHome color="#FFF" size="2em" />
              </div>
              <div className="divSPAN">
                <span
                  style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}
                >
                  DASHBOARD
                </span>
              </div>
            </li>
          </NavLink>

          <NavLink to="/clients" className="noStyle">
            <li className="">
              <div className="divSVG">
                <FaUserFriends color="#FFF" size="2em" />
              </div>
              <div className="divSPAN">
                <span
                  style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}
                >
                  CLIENTES
                </span>
              </div>
            </li>
          </NavLink>
          <NavLink to="/proyects" className="noStyle">
            <li className="">
              <div className="divSVG">
                <FaMobileAlt color="#FFF" size="2em" />
              </div>
              <div className="divSPAN">
                <span
                  style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}
                >
                  PROYECTOS
                </span>
              </div>
            </li>
          </NavLink>
          <NavLink to="/tickets" className="noStyle">
            <li className="">
              <div className="divSVG">
                <FaTicketAlt color="#FFF" size="2em" />
              </div>
              <div className="divSPAN">
                <span
                  style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}
                >
                  RECIBOS
                </span>
              </div>
            </li>
          </NavLink>

          <li className="" onClick={handleLogout} className="noStyle">
            <div className="divSVG">
              <FaSignOutAlt color="#FFF" size="2em" />
            </div>
            <div className="divSPAN">
              <span style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}>
                LOGOUT
              </span>
            </div>
          </li>
          <NavLink to="/settings" className="noStyle">
            <li className="">
              <div className="divSVG">
                <FaCog color="#FFF" size="2em" />
              </div>
              <div className="divSPAN">
                <span
                  style={sideBar ? { opacity: "1", marginLeft: "0px" } : {}}
                >
                  SETTINGS
                </span>
              </div>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
