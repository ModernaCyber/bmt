import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby"

const Cycles = () => 

<StaticQuery
query={graphql`
  query CyclesQuery {
    site {
      siteMetadata {
        cycles {
          title
          description
        }
      }
    }
  }
`}
render={data => (
  <div className="hero-header "
 // style={{backgroundImage:`url(../../../static/assets/hero-head.jpg)`}}

  >
  <div className="headline" id="top"><h1>{data.site.siteMetadata.cycles.title}</h1></div>
  <div 
    className="primary-content" 
    dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.cycles.description}}
  />
  <div><Link to='/contact' className="button -primary">Get in touch &rarr;</Link></div>
  <div className="overlay"></div>
</div> 
)}
/>

export default Cycles;