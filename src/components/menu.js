import React from "react";
import { Link } from "gatsby";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
         <nav className="menu" id="top">
    <ul>
      
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about-us">About</Link>
      </li>
    </ul>
  </nav>
      </div>
    );
  }
};
export default Menu



