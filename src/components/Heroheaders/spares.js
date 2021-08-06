
import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby"

const Spares = () => 

<StaticQuery
query={graphql`
  query SparesQuery {
    site {
      siteMetadata {
        spares {
          title
          description
        }
      }
    }
  }
`}
render={data => (
  <div className="hero-header "
 // style={{background:`url("../../../static/assets/hero-head.jpg")`}}

  >
  <div className="headline" id="top"><h1>{data.site.siteMetadata.spares.title}</h1></div>
  <div 
    className="primary-content" 
    dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.spares.description}}
  />
  <div><Link to='/contact' className="button -primary">Get in touch &rarr;</Link></div>
  <div className="overlay"></div>
</div> 
)}
/>


    
export default Spares;