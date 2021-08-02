import React from "react"
import Helmet from 'react-helmet';
import { Link ,graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

const BikesPage = ({
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
      <HeroHeader/>
      {<h2 className="all-about-bmws"> All BMWs Bicycles &darr;</h2>}
{<div className=" miniContent">
          <div > <h3 className="button-link"><Link>Models</Link></h3>
          <h4>Does BMW make cycles?</h4>
          <p> Get to know all BMW bicycles geared for performance.</p>  
          </div>
          <div><h3  className="button-link"> <Link> Upcoming </Link></h3>
            <h4>Which is the latest BMW bicycle model?</h4> <p>
            Get exceptional insight into all upcoming BMW cycles Models.      </p>
          </div>
          <div><h3 className="button-link"> <Link>Reviews</Link></h3> 
          <h4>Which Bmw Cycles is the best?</h4> <p>
          An in-depth look at the brand, the different 
          types of BMW cycles available, features and price tag. 
          </p>
          </div> 
        </div>}
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default BikesPage
export const pageQuery = graphql`
  query bikesPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(bikes)/"}}) {
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
