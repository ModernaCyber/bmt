import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import {Link} from "gatsby"

const CyclePage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
         <meta charset="UTF-8"/>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="keywords" content={site.siteMetadata.keywords}/>
        <meta name="author" content={site.siteMetadata.author}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <script data-ad-client="ca-pub-9428197784618612" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Helmet>
    
      <div className="hero-header cycle-header ">
        <div className="headline" id="top">
          BMW MOTORCYCLES
        </div>
        <div  className="primary-content"> ALL AT A GLANCE.</div>
         <div style={{padding:"10px 10px",fontSize:"1.8rem"}}>Ride your  BMW Motorcycle with the peace of mind you deserve
         </div>
        <div><Link to='/contact' className="button -primary">Get in touch &rarr;</Link></div>
        <div className="overlay"></div>
      </div>
      {<h2 className="all-about-bmws">All About BMWs Motorcycles &darr;</h2>}
          {<div className=" miniContent">
          <div > <h3 className="button-link"><Link>Models</Link></h3>
          <h4>Why are BMW Motorcycles expensive ?</h4>
          <p> Get to know all
          M 1000 RR. S 1000 RR.
K 1600 GT.
R 18 Transcontinental. R 18 B. R nineT. R nineT Scrambler. R nineT Pure...</p>  
          </div>
          <div><h3  className="button-link"> <Link> Upcoming </Link></h3>
            <h4>Which is the latest BMW model?</h4> <p>
            Get exceptional insight into all upcoming BMW Models.      </p>
          </div>
          <div><h3 className="button-link"> <Link>Reviews</Link></h3> 
          <h4>Which Bmw Model is the best?</h4> <p>
          An in-depth look at the brand, the different 
          types of BMW Motorcycles available, features and price tag. 
          </p>
          </div> 
        </div>}
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default CyclePage
export const pageQuery = graphql`
  query cyclePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(cycles)/"}}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
