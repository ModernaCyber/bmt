import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby'

const Ul = styled.ul`
  
  @media (max-width: 2410px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    align-items:center;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    padding:4px 0;
    right: 0;
    height: 100vh;
    width: 80%;
    z-index:150;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      margin:0 auto;
      
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} className="right-nav">
      <div  className="left-menu-overlay"></div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contacts</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li> 
      <li>
        <Link to="/about-us">About-us</Link>
      </li>
      <li>
        <Link to="/models">Models</Link>
      </li>
      <li>
        <Link to="/softwares">Softwares</Link>
      </li>
      <li>
        <Link to="/spares">SpareParts</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li> <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/cycles">Motorcycles</Link>
      </li>
      <li>
        <Link to="/bikes">BMW bikes</Link>
      </li>
    </Ul>
  )
}

export default RightNav