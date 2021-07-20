import React from "react";
import { Link } from "gatsby";

const Menu = () => (
  <div className="menu" id="top">
    <ul>
      
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about-us">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
       
    </ul>
  </div>
);
export default Menu;
