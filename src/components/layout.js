import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Navbar from './Nav/Navbar';
import 'prismjs/themes/prism-okaidia.css';
import Footer from "./footer";
import Subscribe from "./subscribe";
import {Helmet} from "react-helmet";
import Footerads from "./footerads";
import Rightads from "./rightads";
import Logo from "./logo";
import Messenger from "./messenger";





export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
           <Helmet> 
      <html lang="en" />  
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9428197784618612" crossorigin="anonymous"></script>
            <script type="text/javascript">
    amzn_assoc_ad_type = "link_enhancement_widget";
    amzn_assoc_tracking_id = "bmwemt-20";
    amzn_assoc_linkid = "5e9f4e784e5929ab2d3ad8ba7b2d4871";
    amzn_assoc_placement = "";
    amzn_assoc_marketplace = "amazon";
    amzn_assoc_region = "US";
            </script>
      <script src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&MarketPlace=US"></script> 
      </Helmet>
      <main>
      <section className="section-a">
      <header className="site-header">
     <Navbar />
     </header>
      {children}
      <div className="card google-ads">
      </div>
      <div className="befor-footer"> 
      <Footerads/>
      </div>
      <Subscribe/>
      </section>
      <section className="section-b">
        <Rightads/>
      </section>
      <Messenger/>
      </main>
      <div className="site-footer">
        <Footer/>  
        <div style={{margin:"8px 30px"}}>
        <Logo/><p>
           <Link to="/disclaimer" style={{margin:"0 8px"}}>Discraimer</Link>
        <small>BMWEMT is in no way affiliated or 
        owned by BMW or its partners.

        &copy; {new Date().getFullYear()} ModernaCyber &bull; Designed{" "}
       
        by <a href="https://modernacyber.com" target="blank">ModernaCyber</a></small></p>
      </div>  
 </div>
    </div>
  )
}
