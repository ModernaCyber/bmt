import React from "react"
import Helmet from 'react-helmet';
import { Link ,graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"


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
        <title>{site.siteMetadata.title}</title>
         <meta charset="UTF-8"/>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="keywords" content={site.siteMetadata.keywords}/>
        <meta name="author" content={site.siteMetadata.author}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <script data-ad-client="ca-pub-9428197784618612" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Helmet>
      {<h2 className="all-about-bmws"> All ABOUT THE DASHBOARD &darr;</h2>}
      {<div className="miniContent">
          <div> <h3><Link to="/">Dashboards</Link></h3><p></p>  </div>
          <div><h3> <Link to="/">Dashboard-lights </Link></h3> <p></p></div>
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
