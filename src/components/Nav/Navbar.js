
import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from "../logo"
import ThemeChanger from "../themeChanger";


const Nav = styled.nav`
  position:fixed;
  margin:auto;
  background: rgb(2,0,36);
  background: -moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
  height: auto;
  width:100%;
  padding-right:40%;
  display: flex;
  justify-content: space-between;
  font-weight:600;
  align-items:center;
  top:0;
  left:0;
  &:first-child {
    margin-left:auto;
  }
  a {
    color: #888;
    text-decoration: none;
    margin: 0 8px 0;
    margin-left: auto;
    &[aria-current] {
      color: var(--secondary-color);
      font-weight: 500;
    }
    &:hover {
      color: var(--primary-color);
    }
    &:last-child {
      margin-left:auto;
    }
  }
`
const Navbar = () => {
  return (
    <Nav>
      <div><Logo/></div>
      <div className="theme-chg"><ThemeChanger/></div>
      <div><Burger /></div>
    </Nav>
  )
}

export default Navbar