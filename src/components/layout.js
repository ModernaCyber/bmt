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
import Banner from "./banners";
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
      <main>
      <section className="section-a">
      <header className="site-header">
      <Helmet> 
      <html lang="en" />  
      <meta name="viewport" content="width=device-width, initial-scale=.8"/>
      <meta charset="UTF-8"/>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords}/>
      
      <meta name="fo-verify" content="56186df2-ebee-435f-bbe0-f42aa0c23db0"/>
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
     <Navbar />
     </header>
      {children}
      <div className="card google-ads">
      </div>
      <div className="befor-footer"> 
      <Footerads/>
      </div>
      <Subscribe/
      
      ></section>
      <section className="section-b">
         
         <Banner/>
          <Rightads/>
      </section>
      </main>
      <div className="site-footer">
        <Footer/>  
        
        <div style={{margin:"8px 30px"}}>
        <Logo/>
           <Link to="/disclaimer" style={{margin:"0 8px"}}>Discraimer</Link>
        <small>BMWEMT is in no way affiliated or 
        owned by BMW or its partners.</small>

        &copy; {new Date().getFullYear()} ModernaCyber &bull; Designed{" "}
       
        by <a href="https://modernacyber.com" target="blank">ModernaCyber</a>
      </div>  
 </div>
    </div>
  )
}
