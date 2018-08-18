import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo_amiibo.png";
const Navigation = props => {
  return (
    <nav className="nav" role="navigation">
      <img src={logo} alt="amiibo" />
      <ul>
        <li>
          <NavLink to="/collection"> Collection</NavLink>
        </li>
        <li>
          <NavLink to="/wishlist"> Wish List </NavLink>
        </li>
        <li>
          <NavLink to="/shelf"> All amiibos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
