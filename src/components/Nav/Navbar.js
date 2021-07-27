
import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import ThemeChanger from "../themeChanger";
import Logo from "../logo"
const Nav = styled.nav`
  position:fixed;
  background:var(--secondary-color);
  margin:auto;
  height: auto;
  width:100%;
  padding-right:30%;
  display: flex;
  justify-content: space-between;
  font-weight:600;
  align-items:center;
  top:0;
  left:0;

  a {
    color: #888;
    text-decoration: none;
    margin: 0 8px 0;
    margin-left: auto;
    &[aria-current] {
      color: var(--primary-color);
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
      <div style={{alignItems:"center"}}><ThemeChanger/><Burger /></div>
    </Nav>
  )
}

export default Navbar