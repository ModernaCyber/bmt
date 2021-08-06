import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"


const About_us = () => (
  <Layout>
    <div className="post-thumbnail" style={{ backgroundImage: `url('https://image.shutterstock.com/image-photo/novosibirsk-russia-october-16-2020-600w-1839033184.jpg')`, margin:"60px 15px 15px 0" }}>
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
        Who-we-are <hr/>
        <p>Your number one source 
          for all things BMW [products and resourses].<br/>
        We're dedicated to giving you the very best of our product,
        with a focus on detailed information on <strong>Models, Softwares, Spares and Accessories. 
          </strong>Founded in 2018 by modernacyber, BMWEMT has come a long way from its beginnings 
          in East-Africa. When Modernacyber first started out, their passion for bmw automobiles
           drove them to seek relevant detailed information on different bmw products after which BMWEMT 
           was born to offer you what we discovered. We are thrilled to be able to turn our passion
            into our own website. We hope you enjoy our products as much as we enjoy offering them to you.</p> 
       Our-vision <hr/>                                                                                                   
<p></p>
To be the leading source of  reliable information
in the region in various fields. – with us,Everyone shall be proud 
to work with Us. We create chances to achieve exceptional 
results and bmw products. – The society shall consider us responsible 
and effective.

The challenge we face is to become a reference point for our clients
 and partners in a global context that always calls for greater specific
  competence in dealing with bmw products. We aim to achieve this goal by tapping into our team’s
    specific know-how and experience in each of these fields. We enjoy
     the flexibility of a lean, independent company structure for best 
     liaising with a knowledgeable clientele that always expects the best value.
     <br/>
     <p/>
Our-objective   <hr/>                                                                                                 
<p>
Time and safety are always our priorities, as our company has always 
been desirous of clean record free from any
 accidents, failures and regret in  the long run that may rsult from mis-information
</p>
Our-ethics     <hr/>                                                                                                     
<p>
Our culture is based on integrity and mutual respect. Our reputation in
 adherence to the highest ethics in information is one of our valuable rules. 
 We undertake the responsibility of each record published. 

</p>
<p>If you have any questions or comments, please don't hesitate to</p>
<p> <Link to ="/contact"><p>OurContacts</p></Link></p>

     </div>
  </Layout>
)

export default About_us
