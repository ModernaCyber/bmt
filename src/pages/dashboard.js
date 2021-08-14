import React from "react"
import Helmet from 'react-helmet';
import { Link ,graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader";


const DashboardPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Dash = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title + " dashboard"}</title>
         <meta charset="UTF-8"/>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="keywords" content={site.siteMetadata.dashboard.keywords}/>
        <meta name="author" content={site.siteMetadata.author}/>
        <script data-ad-client="ca-pub-9428197784618612" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Helmet>
      <HeroHeader/>
      {<h2 className="all-about-bmws"> All ABOUT THE DASHBOARD &darr;</h2>}
 
{<div className=" miniContent">
          <div > <h3 className="button-link"><Link>dashboard</Link></h3>
          <h4>What do all the symbols Mean?</h4>
          <p> Get to know all BMW symbols.
          Tire Pressure Warning Light,
Engine Temperature Warning,
Traction Control Light,
Anti-lock Brake Warning Light,
Traction Control Malfunction...</p>  
          </div>
          <div><h3  className="button-link"> <Link>Dashboard-lights </Link></h3>
            <h4>What do the lights mean?</h4> <p>
            Get exceptional insight into all those lights.Red indicates an issue that requires immediate attention while Flashing warning lights signal an urgent issue...      </p>
          </div>

        </div>}
      <div className="grids">
        {Dash}
      </div>
    </Layout>
  )
}

export default DashboardPage
export const pageQuery = graphql`
  query dashboardPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(dashboard)/"}}) {
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
