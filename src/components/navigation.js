/*import React, {useState} from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"
import Menu from "./menu";
import Logo from "./logo";



export default (props) => {
const [open,setOpen]=useState(false)

const menu_overlay={
  position:"absolute",
  top:"0",
  right:"0",
  width:"100%",
  background:"red",
  height:"100%",
  alignItems:"center",
  justifyContent:"center"

};
const mobilenav={
 position:"relative",
 width:"100%",
 height:"100vh",
};


 if (!open){
   return(
  <nav className="navigation"    > 
   <div><Logo/></div>
   <div><Menu/></div> 
   <div> <ThemeChanger/>
   </div> 
   <div className="menu1" onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  </nav> )
}
else{
  return(<div className="navigation" style ={ mobilenav } >  
   <div><Logo/></div>
   <div className="menu1" onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div style={menu_overlay}>

    </div>
    
    
    </div>
  
  )
}
}*/

import React from "react";
import { Link } from "gatsby";
import Menu from "./menu";

const navigation = () => (
  <div>
    <input type="checkbox" id="toggle" name="toggle"/>
   <Menu/>
<div className="navbar">
  <label for="toggle"><i className="fa fa-bars"></i>  
   <div className="menu1" >
        <div></div>
        <div></div>
        <div></div>
    </div></label>
</div>
</div>

 
);
export default navigation;

