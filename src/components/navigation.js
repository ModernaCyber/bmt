import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"
import Menu from "./menu";
import Newmenu from "./newmenu";


export default (props) => (
  <nav className="navigation"> 
  
   
   <div><Menu/></div> 
  
   <div> <ThemeChanger/>
   </div> 
   <div><Newmenu/></div>
  </nav>
  
)