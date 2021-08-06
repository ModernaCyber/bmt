
import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby"

const Models = () =>

<StaticQuery
query={graphql`
  query ModelsQuery {
    site {
      siteMetadata {
        models {
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
  <div className="headline" id="top"><h1>{data.site.siteMetadata.models.title}</h1></div>
  <div 
    className="primary-content" 
    dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.models.description}}
  />
  <div><Link to='/contact' className="button -primary">Get in touch &rarr;</Link></div>
  <div className="overlay"></div>
</div> 
)}
/>

 
export default Models;