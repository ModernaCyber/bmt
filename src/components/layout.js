import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
      <main>
      <section className="section-a">
      <header className="site-header">
      <Helmet> 
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
      </div><Subscribe/
      
      ></section>
      <section className="section-b"> 
      <div>success Re-building development bundle - 0.355s
success extract queries from components - 0.060s
success Re-building development bundle - 0.383s
</div>
      <div>success Re-building development bundle - 0.355s
success extract queries from components - 0.060s
success Re-building development bundle - 0.383s
</div>
      <div>success Re-building development bundle - 0.355s
success extract queries from components - 0.060s
success Re-building development bundle - 0.383s
</div>
      </section>
      </main>
      <div className="site-footer">
        <Footer/>   
        <p style={{margin:"8px 30px"}}>
          <Link to="/disclaimer" style={{margin:"0 8px"}}>Discraimer</Link>
        <small>BMWEMT is in no way affiliated or 
        owned by BMW or its partners.</small>
        &copy; {new Date().getFullYear()} Copyright &bull; Designed{" "}
       
        by <a href="https://modernacyber.com" target="blank">ModernaCyber</a>
      </p>  
 </div>
    </div>
  )
}
