import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"
import Menu from "./menu";

export default (props) => (
  <nav className="navigation"> 
   <div><Menu/></div> <div>    <Link to="/contact"></Link>
</div>
<div>    <ThemeChanger/>
</div>
  </nav>
  
)