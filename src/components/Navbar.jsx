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

  const { log, setUser } = useContext(UserContext);

  const handleLogout = async (e) => {
    await e.preventDefault();
    const data = await fetch("https://srcaapi.gabrielangeles.com/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: log.authKey,
        // 'Content-Type': 'application/json'
      },
    });
    console.log("se salio");
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
        <div className="menucontrol">
          <div className="top">
            <ul>
              <NavLink
                exact
                to="/"
                className="noStyle"
                activeClassName="active"
              >
                <li className="">
                  <div className="divSVG">
                    <FaHome color="#FFF" size="2em" />
                  </div>
                  <div className="divSPAN">
                    <span className={sideBar ? "animateSpan" : ""}>
                      DASHBOARD
                    </span>
                  </div>
                </li>
              </NavLink>

              <NavLink
                to="/clients"
                className="noStyle"
                activeClassName="active"
              >
                <li className="">
                  <div className="divSVG">
                    <FaUserFriends color="#FFF" size="2em" />
                  </div>
                  <div className="divSPAN">
                    <span className={sideBar ? "animateSpan" : ""}>
                      CLIENTES
                    </span>
                  </div>
                </li>
              </NavLink>
              <NavLink
                to="/proyects"
                className="noStyle"
                activeClassName="active"
              >
                <li className="">
                  <div className="divSVG">
                    <FaMobileAlt color="#FFF" size="2em" />
                  </div>
                  <div className="divSPAN">
                    <span className={sideBar ? "animateSpan" : ""}>
                      PROYECTOS
                    </span>
                  </div>
                </li>
              </NavLink>
              <NavLink
                to="/tickets"
                className="noStyle"
                activeClassName="active"
              >
                <li className="">
                  <div className="divSVG">
                    <FaTicketAlt color="#FFF" size="2em" />
                  </div>
                  <div className="divSPAN">
                    <span className={sideBar ? "animateSpan" : ""}>
                      RECIBOS
                    </span>
                  </div>
                </li>
              </NavLink>

              <li
                className=""
                onClick={handleLogout}
                className="noStyle"
                activeClassName="active"
              >
                <div className="divSVG">
                  <FaSignOutAlt color="#FFF" size="2em" />
                </div>
                <div className="divSPAN">
                  <span className={sideBar ? "animateSpan" : ""}>LOGOUT</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="botton">
            <NavLink
              to="/settings"
              className="noStyle"
              activeClassName="active"
            >
              <li className="">
                <div className="divSVG">
                  <FaCog color="#FFF" size="2em" />
                </div>
                <div className="divSPAN">
                  <span className={sideBar ? "animateSpan" : ""}>SETTINGS</span>
                </div>
              </li>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
