import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="logo kasa" />
      </div>

      <div className="navigation ">
        <NavLink
          to="/"
          end
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          A Propos
        </NavLink>
      </div>
    </div>
  );
};

export default Header;