import React from "react"

const Subscribe = (
  
) => {
  return (
      <div className="subscribe" style={{ paddingBottom: "30px"}}>
         
          <form className="form-container" action="https://getform.io/f/ff65b37d-7840-424b-b240-3a464ede432f" method="post" target="blank"> <div><p>
              Subscribe today and receive maintenance tips.!
              Also be among the first to Receive the upcoming <i>Bmw maintenance e-book.</i>
        </p></div>
            <div>
              <label htmlFor="w3lSender">Email</label>
              <input type="email" name="w3lSender" id="w3lSender"/>
            </div>

            <div style={{display: "flex", justifyContent: "center"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
      </div>
  )
}
export default Subscribe

