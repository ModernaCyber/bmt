
import { useLocation } from "@reach/router"
import React from 'react';
import Bikes from "./footerads/bikes";
import Course from "./footerads/courses";
import Cycles from "./footerads/cycles";
import Dashboard from "./footerads/dashboard";
import Home from "./footerads/home";
import Models from "./footerads/models";
import Software from "./footerads/software";
import Spares from "./footerads/spares";

const Footerads = () => {
  const location= useLocation()
  switch (location.pathname) {
    case "/softwares":
      return(<div><Software/></div>)
    case "/dashboard":
      return(<Dashboard/>)
    case "/courses":
      return(<Course/>)
    case "/bikes":
      return(<Bikes/>)
    case "/cycles":
      return(<Cycles/>)  
    case "/models":
      return(<Models/>) 
    case "/spares":
      return(<Spares/>)
    case "/models":
      return(<Models/>)       
    default:
      return(<Home/>)
  }
}
export default Footerads