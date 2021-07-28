
import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from "../logo"
import ThemeChanger from "../themeChanger";


const Nav = styled.nav`
  position:fixed;
  background:blue;
  margin:auto;
  height: auto;
  width:100%;
  padding-right:40%;
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
      <div><ThemeChanger/></div>
      <div><Burger /></div>
    </Nav>
  )
}

export default Navbar