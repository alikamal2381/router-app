import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <h3>
        <Link style={navStyle} to="/">
          Logo
        </Link>
      </h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About Page</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>Shop Page</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
