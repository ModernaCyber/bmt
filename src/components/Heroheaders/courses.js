import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby"


const Courses = () => 

<StaticQuery
query={graphql`
  query CoursesQuery {
    site {
      siteMetadata {
        courses {
          title
          description
        }
      }
    }
  }
`}
render={data => (

        <div className="hero-header "
      //  style={{backgroundImage:`url(../../../static/assets/hero-head.jpg)`}}

        >
        <div className="headline" id="top"><h1>{data.site.siteMetadata.courses.title}</h1></div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.courses.description}}
        />
        <div><Link to='/contact' className="button -primary">Get in touch &rarr;</Link></div>
        <div className="overlay"></div>
      </div>
)}
/>

     

export default Courses;