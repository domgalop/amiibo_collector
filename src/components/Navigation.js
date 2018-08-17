import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => {
  return (
    <nav>
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
