import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import {Link} from "gatsby"


const SparesPage = ({
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
      
      <div className="hero-header  spare-header" >
        <div className="headline" id="top">
          ALL BMW SPARES
        </div>
        <div  className="primary-content">ALL SPARES DESCRIPTION </div>
        <div><Link to='/contact' className="button -primary">Get in touch &rarr;</Link></div>
        <div className="overlay"></div>
      </div>
      {<h2 className="all-about-bmws"
      >All About BMW Spare-Parts&darr;</h2>}
    {<div className=" miniContent">
            <div > <h3 className="button-link"><Link>Spare-parts</Link></h3>
          <h4>You Got that BMW part number ?</h4>
          <p>Get exceptional value of your money as we compare pricing and features across different stores for affordable parts.</p>  
          </div>
          <div><h3  className="button-link"> <Link>Car Accessories </Link></h3> 
          <p>
            <h4>Want to upgrade and optimise your Bmw?</h4>
            Get genuine BMW Accessories information for you to customise your BMW to suit your individual lifestyle.
          </p>
          </div>
          <div><h3 className="button-link"> <Link>Bike Accessories</Link></h3> 
          <h4>Adventurer, everyday use, Optimise performance? We got you covered</h4>
          Get genuine exceptional accessories and spareparts for your classic bike.
          <p></p>
          </div> 
        </div>}
      <div className="grids">
        {Posts}
      </div>

    </Layout>
  )
}

export default SparesPage
export const pageQuery = graphql`
  query sparesPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(spares)/"}}) {
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
