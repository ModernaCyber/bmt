import React from "react";
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer">
    <div className="social"><div className="social-icons">
        <div className="icons"><a href="https://facebook.com/" target="blank">
        <img src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/facebook-512.png" alt="fb"></img>
        </a></div>
        <div className="icons"><a href="https://www.twitter.com/" target="blank">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-512.png" alt="twitter"></img>
        </a>
        </div>
        <div className="icons">
        <a href="https://www.instagram.com/" target="blank">
        <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-3-512.png" alt="IG"></img>
        </a>
        </div>
        <div className="icons"><a href="https://www.linkedin.com/" target="blank">
        <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/51-linkedin-512.png" alt="In"></img>
        </a></div>
        <div className="icons"><a href="https://www.youtube.com/" target="blank">
        <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/58-youtube-512.png" alt="youtube"></img>
        </a></div>
        </div>
        <div><small>Find Us on social Media Too</small></div>
     </div>  
    
    <div className="footer-links">   
        <p>
        <Link to='/services' style={{margin:" 4px 10px"}}>Services</Link>
        <Link to='/contact' style={{margin:" 4px 10px"}}>Contact </Link>
        <Link to='/about-us' style={{margin:" 4px 10px"}}>About_us</Link>
        </p>
        <p>
        <Link to='/privacy' style={{margin:" 4px 10px"}}>Privacy</Link> 
        <Link to='/terms' style={{margin:" px 10px"}}>Terms</Link>
       
        </p>
        <p>
        <Link to='/contact' style={{margin:" 4px 10px"}}>Send-us-feedback</Link>
        </p>
      </div>
    <div>   
      <small >
        <p className="float-right">
        <a href="#top"><span style={{color:"blue"
      ,heigh:"10px"}}>&#160;&#8593;&#160;</span></a>
        BMWEMT, We are independent BMW Mechanics ,BMW fans. We are  dedicated 
        to BMW  owners from around the world in provision of expert maintenance practices 
        and Tips. 
        </p>
      
       </small>
</div>
    
  </footer>
);
export default Footer;
