import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"


const About_us = () => (
  <Layout>
    <div className="post-thumbnail" style={{ backgroundImage: `url('https://image.shutterstock.com/image-photo/novosibirsk-russia-october-16-2020-600w-1839033184.jpg')`, margin:"120px 15px 15px 0" }}>
      <h1>HI!</h1>
      <h1> WE ARE BMWEMT TEAM </h1>
      <div><Link to='/contact' className="button -primary">Get in touch &rarr;</Link></div>
    </div>
    <div className="about-content two-grids -contact"><div>
      <p></p>
    </div>
    </div>
    <div className="about-content-main ">
        <h2>Welcome to BMWEMT</h2>
         <p>Your number one source 
          for all things BMW [products and resourses].
        We're dedicated to giving you the very best of our product,with a focus on detailed information on <strong>Models, Softwares, Spares and Accessories. </strong>Founded in 2018 by modernacyber, BMWEMT has come a long way from its beginnings in East-Africa. When Modernacyber first started out, their passion for bmw automobiles drove them to seek relevant detailed information on different bmw products after which BMWEMT was born to offer you what we discovered. We are thrilled to be able to turn our passion into our own website. We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to <Link to ="/contact">contact-us</Link></p>
    </div>
  </Layout>
)

export default About_us
