import React from "react"

const Subscribe = (
  
) => {
  return (
      <div className="subscribe" style={{ paddingBottom: "30px"}}>
         
          <form className="form-container" action="" method="post"> <div><p>
              Subscribe today and be among the first to Receive the upcoming <i>Bmw maintenance e-book.</i>
        </p></div>
            <div>
              <label htmlFor="w3lSender">Email</label>
              <input type="email" name="w3lSender" id="w3lSender"/>
            </div>

            <div style={{display: "flex", justifyContent: "center"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} >Subscribe</input>
            </div>
          </form>
      </div>
  )
}
export default Subscribe

