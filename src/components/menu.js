import React from "react";
import { Link } from "gatsby";

const Menu = () => (
  <nav className="menu" id="top">
    <ul>
      
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about-us">About</Link>
      </li>
    </ul>
  </nav>
);
export default Menu;
