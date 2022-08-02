import React from "react"
import Helmet from 'react-helmet';
import { Link ,graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"





const CoursePage = ({
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
        <title>{site.siteMetadata.courses.title} </title>
        <meta charset="UTF-8"/>
        <meta name="description" content={site.siteMetadata.courses.description} />
        <meta name="keywords" content={site.siteMetadata.courses.keywords}/>
        <meta name="author" content={site.siteMetadata.author}/>
        <script data-ad-client="ca-pub-9428197784618612" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Helmet>
      <HeroHeader/>
      {<h2 className="all-about-bmws"> All BMWs courses &darr;</h2>}
        {<div className=" miniContent">
          <div > <h3 className="button-link"><Link>Courses</Link></h3>
          <h4>You Got Time to learn something new Today?</h4>
          <p>
            Get exceptional skills in the BMW world in the art of basic repair and mentainance and diagnostics.
            <h5>Never Stop Learning!</h5>
             </p>  
          </div>
          <div><h3  className="button-link"> <Link>Softwares </Link></h3> 
          <p>
            <h4>Want to learn about different bmw diagnostic softwares?</h4>
            Learn how to operate different diagnostic softwares, perform diagnostics and upgrade your BMW firmware & maps. Also know whereto download the Softwares.
          </p>
          </div>
          <div><h3 className="button-link"> <Link>E-books</Link></h3> 
          <h4>You got a question? We got the answer</h4>
          Get genuine and exceptional e-books on bmw vehicles diagnosis and maintenance tips .
          Free to download manuals on all Bmw models.
          <p></p>
          </div> 
        </div>}
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default CoursePage
export const pageQuery = graphql`
  query coursePageQuery {
    site {
      siteMetadata {
        title
        author
        courses {
          description
          keywords
          title
        }
      }
  }
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(courses)/"}}) {
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
