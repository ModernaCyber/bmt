import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from './Nav/Navbar';
import 'prismjs/themes/prism-okaidia.css';
import Footer from "./footer";
import Subscribe from "./subscribe";


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
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta charset="UTF-8"/>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords}/>
      <Navbar />
      <script data-ad-client="ca-pub-9428197784618612" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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
        </p><p>
        &copy; {new Date().getFullYear()} Copyright &bull; Designed{" "}
       
        by <a href="https://modernacyber.com" target="blank">ModernaCyber</a>
      </p>  
 </div>
    </div>
  )
}
