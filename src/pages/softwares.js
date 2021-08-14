import React from "react"
import Helmet from 'react-helmet';
import { Link ,graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader";


const SoftwaresPage = ({
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
        <title>{site.siteMetadata.title + " all bmw softwares"}</title>
        <meta charset="UTF-8"/>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="keywords" content={site.siteMetadata.software.keywords}/>
        <meta name="author" content={site.siteMetadata.author}/>
        <script data-ad-client="ca-pub-9428197784618612" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Helmet>
      <HeroHeader/>
      {<h2 className="all-about-bmws"> All BMWs Software Updates and Diagnostic Softwares &darr;</h2>}
      {
          <div className="miniContent">
          <div> </div>
          <div> 
          </div>
        </div>
      }
       {<section className="section-update">
            <div className="section-update-a">
              <h3 className="button-link"><Link to="/software-updates">Software updates</Link></h3>
              <h3>UPGRADING YOUR BMW SOFTWARE</h3>
              <div>
                <p>
                  The latest software version have a ton of features
                 which do include: 
                 Alexa. 
                     The ability to quickly and easily sign in
                   with your driver profile once on board using
                    the My BMW app. 
                    Expansion of Active 
                    Navigation. 
                                  
                </p>
              </div>
            </div>
            <div className="section-update-b">
                <h3 className="button-link"><Link to="/diagnostic-softwares">Diagnostic-Softwares</Link></h3>
                <h3>BMW DIAGNOSTICS SOFTWARES</h3>
                <div><p>What is the best bmw diagnostic softwares?
                If you are having some issues like brake issues, battery problems,
                 light or even the engine, Diagnostic software allow you to diagnose the cause and be able to fix it.
                </p>

                </div>
            </div>
        </section>
       }

      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default SoftwaresPage
export const pageQuery = graphql`
  query softwaresPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(softwares)/"}}) {
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
