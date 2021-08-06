
import { useLocation } from "@reach/router"
import React from 'react';
import Bikes from "./banner/bikes";
import Course from "./banner/courses";
import Cycles from "./banner/cycles";
import Dashboard from "./banner/dashboard";
import Home from "./banner/home";
import Models from "./banner/models";
import Software from "./banner/software";
import Spares from "./banner/spares";

const Banner = () => {
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
export default Banner