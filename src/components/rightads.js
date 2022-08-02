import React from "react"
import bffimage from "../../static/assets/bffimage.jpg" 
import Banner from "./banners"

const Rightads = (
  //<div><a href="https://www.amazon.com/s?k=Auto+Replacement+Parts+bmw&rh=n%3A15684181%2Cn%3A15736321&dc=&qid=1627982834&rnid=2941120011&linkCode=ll2&tag=bmwemt-20&linkId=6003a1bc03a20867b059e251b47e1f9a&language=en_US&ref_=as_li_ss_tl" target="blank">
   //    check-out this accessories</a> </div> 
) => {
  return (
<div className="right-ads">
        <div>
          <a href="https://www.beforward.jp/stocklist?refer_bfs=2066114&utm_source=sns&utm_medium=social&utm_term=BFS_Share&utm_content=sharelink&utm_campaign=supporters_profilepage" target="blank"><img src={bffimage} alt="be forward " width="auto" height="300"/></a>
        </div> 
        <div>
          <Banner/>
        </div>
        <div><iframe title="rightads2" src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ez&f=ifr&linkID=6d26e7a6cba61d3b77d9141d8d3e29f9&t=bmwemt-20&tracking_id=bmwemt-20" 
        width="280" height="250" scrolling="no" border="0" marginWidth="5" 
        style={{border:"none" ,frameBorder:"0"}}> 
        </iframe></div>
        
        <div><iframe title="rightads1" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbmwemt.info%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=375449370627659" style={{border:"none" ,overflow:"hidden",width:"100%", height:"70vh",maxHeight:"500" ,maxWidth:"290" }} scrolling="no" frameBorder="0" allowFullScreen={true} 
       allow="autoplay; clipboardWrite; encryptedMedia; pictureInPicture; webShare"></iframe></div>
       
       
</div>
    
  )
}
export default  Rightads
