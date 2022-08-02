
import { useLocation } from "@reach/router"
import React from 'react';
import BikesHeader from "./Heroheaders/bikes";
import Courses from "./Heroheaders/courses";
import Cycles from "./Heroheaders/cycles";
import Dashboard from "./Heroheaders/dashboard";
import Main from "./Heroheaders/main";
import Models from "./Heroheaders/models";
import Softwares from "./Heroheaders/software";
import Spares from "./Heroheaders/spares";

const MiniHero = () => {
  const location= useLocation()
  switch (location.pathname) {
    case "/bikes":
        return(<BikesHeader/>)
    case "/dashboard":
        return(<Dashboard/>)
    case "/cycles":
        return(<Cycles/>)
    case "/softwares":
        return(<Softwares/>)
    
    case "/courses":
      return(<Courses/>)  
    case "/models":
      return(<Models/>) 
    case "/spares":
      return(<Spares/>)
        
    default:
      return(<Main/>)
  }
}
export default MiniHero