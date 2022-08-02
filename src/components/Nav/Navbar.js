
import React from 'react';
import Burger from './Burger';
import Logo from "../logo"
import ThemeChanger from "../themeChanger";



const Navbar = () => {
  return (
    <nav className="navigation">
      <div><Logo/></div>
      <div className="theme-chg"><ThemeChanger/></div>
      <div><Burger /></div>
    </nav>
  )
}

export default Navbar