import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"


const About_us = () => (
  <Layout>
    <div className="post-thumbnail" style={{ backgroundImage: `url('https://image.shutterstock.com/image-photo/novosibirsk-russia-october-16-2020-600w-1839033184.jpg')`, margin:"120px 15px 15px 15px" }}>
      <h1>HI!</h1>
      <h1> We are the BMWEMT Team </h1>
      <div><Link to='/contact' className="button -primary">Get in touch &rarr;</Link></div>
    </div>
    <div className="about-content two-grids -contact"><div>
      <p></p>
    </div>
    </div>
    <div className="about-content ">
      <p>
        <h2>Welcome to bmwemt</h2> <h3>your number one source 
          for all things BMW [products and resourses]</h3>
        <h3>We're dedicated to giving you the very best of product,
           with a focus on detailed information on 
           <strong>
         Models, Softwares, Spares and Accessories 
          </strong>
         </h3> 
         <h3>Founded in 2018 by modernacyber, bmwemt has come a long way from its
            beginnings in East-Africa. When Modernacyber first started out, their 
            passion for bmw automobiles drove them to seek relevant detailed information on different bmw products
            after which bmwemt was born to offer you what we discovered.
            we are thrilled to be able to turn our passion into our own website.
        We hope you enjoy our products as much as we enjoy offering them to you.
        </h3>
        
         If you have any questions or comments, please don't hesitate to <Link to ="/contact">contact us</Link>
      </p>

    </div>
  </Layout>
)

export default About_us
