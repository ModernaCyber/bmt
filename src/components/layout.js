import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from './Nav/Navbar';
import 'prismjs/themes/prism-okaidia.css';
import Footer from "./footer";
import Subscribe from "./subscribe";
import {Helmet} from "react-helmet";


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
      <header className="site-header">
      <Helmet>  <script src="../scripts/propellerad.js" type="text/javascript" />
      <script src="../scripts/multi-tag.js" type="text/javascript" />
      <script type="text/javascript" src="//inpage-push.com/400/4412347" data-cfasync="false" async="async"></script>
      <meta name="viewport" content="width=device-width, initial-scale=.8"/>
      <meta charset="UTF-8"/>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords}/>
      <script data-ad-client="ca-pub-9428197784618612" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Helmet>
     <Navbar />
     </header>
      {children}
      <div className="card google-ads">
      </div>
      <div className="site-footer">
        <Subscribe/>
        <Footer/>   
        <p>
        BMWEMT is in no way affiliated or 
        owned by BMW or its partners.
        &copy; {new Date().getFullYear()} Copyright &bull; Designed{" "}
       
        by <a href="https://modernacyber.com" target="blank">ModernaCyber</a>
      </p>  
 </div>
    </div>
  )
}
