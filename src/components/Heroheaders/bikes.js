
import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby"

const BikesHeader = () =>


<StaticQuery
query={graphql`
  query BikesQuery {
    site {
      siteMetadata {
        bikes {
          title
          description
        }
      }
    }
  }
`}
render={data => (
  <div className="hero-header "
  //style={{backgroundImage:`url(../../../static/assets/hero-head.jpg)`}}
  >
    <div className="headline" id="top"><h1>{data.site.siteMetadata.bikes.title}</h1></div>
    <div 
      className="primary-content" 
      dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.bikes.description}}
    />
    <div><Link to='/contact' className="button -primary">Get in touch &rarr;</Link></div>
    <div className="overlay"></div>
  </div> 
)}
/>



 
 
export default BikesHeader;