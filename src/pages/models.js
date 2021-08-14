import React from "react"
import Helmet from 'react-helmet';
import {Link , graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader";

const ModelsPage = ({
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
        <title>{site.siteMetadata.title+ " models"}</title>
        <meta charset="UTF-8"/>
        <meta name="description" content={site.siteMetadata.models.description} />
        <meta name="keywords" content={site.siteMetadata.models.keywords}/>
        <meta name="author" content={site.siteMetadata.author}/>        
        <script type="text/javascript">
amzn_assoc_tracking_id = "bmwemt-20";
amzn_assoc_ad_mode = "manual";
amzn_assoc_ad_type = "smart";
amzn_assoc_marketplace = "amazon";
amzn_assoc_region = "US";
amzn_assoc_design = "enhanced_links";
amzn_assoc_asins = "B0784Y6SBM";
amzn_assoc_placement = "adunit";
amzn_assoc_linkid = "5084f9783f9f918503cf8a3729bd69c0";
</script>
<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>
        <script data-ad-client="ca-pub-9428197784618612" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Helmet>
      <HeroHeader/>
      {<h2 className="all-about-bmws">All BMW Models&darr;</h2>}
      {<div className=" miniContent">
          <div > <h3 className="button-link"><Link>Models</Link></h3>
          <h4>Why are BMW cars expensive ?</h4>
          <p> Get to know all Coupe, Convertible, Gran Coupe, Active Tourer, Gran Tourer and the M2 Competition. All Bmw models.</p>  
          </div>
          <div><h3  className="button-link"> <Link> Upcoming </Link></h3> 
         
            <h4>Which is the latest BMW model?</h4> <p>
            Get exceptional insight into all upcoming BMW Models.
            </p>
          </div>
          <div><h3 className="button-link"> <Link>Reviews</Link></h3> 
          
          <h4>Which Bmw Model is the best?</h4> <p>
          An in-depth look at the brand, the different 
          types of BMW cars available, features and price tag. 
          </p>
          </div> 
        </div>}
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default ModelsPage
export const pageQuery = graphql`
  query modelsPageQuery {
    site {
      siteMetadata {
          title
          author
          models {
            description
            keywords
          }
        }
    }
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(models)/"}}) {
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
