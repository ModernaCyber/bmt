import React from "react";
import { Link } from "gatsby";

<<<<<<< HEAD
const Menu = () => (
  <div className="menu" id="top">
=======
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
>>>>>>> 2fb179ef989534356874a7ab6830a8b0c750f424
    <ul>
      
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about-us">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
       
    </ul>
<<<<<<< HEAD
  </div>
);
export default Menu;
=======
  </nav>
      </div>
    );
  }
};
export default Menu



>>>>>>> 2fb179ef989534356874a7ab6830a8b0c750f424
