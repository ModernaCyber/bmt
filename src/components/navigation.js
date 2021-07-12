import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"
import Menu from "./menu";

export default (props) => (
  <nav className="navigation"> 
  <Menu/>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)