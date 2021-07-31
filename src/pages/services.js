import * as React from "react"
import HeroHeader from "../components/heroHeader"

import Layout from "../components/layout"
import { Link } from "gatsby"


const About_us = () => (
  <Layout>
    <HeroHeader/>
<div className="post-thumbnail" style={{backgroundImage: `url('https://image.shutterstock.com/image-photo/novosibirsk-russia-october-16-2020-600w-1839033184.jpg')`, marginBottom: 0}}>
 <h1>HI!</h1>
 <h1> We are the BMT Team </h1>
    <p>Welcome</p><div><Link to='/contact' className="button -primary">Get in touch &rarr;</Link></div>
    </div>
   <div className="about-content two-grids -contact"><div>
        <p></p>
    </div>
    </div> 
  </Layout>
)

export default About_us
