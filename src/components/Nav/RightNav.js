import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
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
        <Link to="/models">All-Bmw Models</Link>
      </li>
     
      <li>
        <Link to="/spares">Spare-parts</Link>
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