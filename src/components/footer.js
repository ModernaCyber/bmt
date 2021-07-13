import React from "react";
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer">
    <div className="social"><div className="social-icons">
        <div className="icons">
        <img src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/facebook-512.png" alt="fb"></img>
        </div>
        <div className="icons">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-512.png" alt="twitter"></img>
        
        </div>
        <div className="icons">
        <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-3-512.png" alt="IG"></img>
        
        </div>
        <div className="icons">
        <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/51-linkedin-512.png" alt="In"></img>
        </div>
        <div className="icons">
        <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/58-youtube-512.png" alt="youtube"></img>
        </div>
        </div>
        <div><small>Find Us on social Media Too</small></div>
     </div>  
    
    <div className="footer-links">   
      <p>
        <Link to='/404'>Services</Link></p><p>
        <Link to='/contact'>Contact </Link></p><p>
        <Link to='/about-us'>About_us</Link>


      </p>
     
      </div>
    <div>   
      <small>
        <p className="float-right">
        <a href="#top"><span style={{color:"blue"
      ,heigh:"10px"}}>&#160;&#8593;&#160;</span></a>
        BMT, We are independent BMW Mechanics ,BMW fans. We are  dedicated 
        to BMW  owners from around the world in provision of expert maintenance practices 
        and Tips 
        </p>
        <p>
        BMT is in no way affiliated or 
        owned by BMW or its partners.
        </p>
       </small>
</div>

  </footer>
);
export default Footer;
