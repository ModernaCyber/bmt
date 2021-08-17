import SimpleImageSlider from "react-simple-image-slider";

import React from 'react';

const images = [
  { url: "https://th.bing.com/th/id/OIP.mTe3gWc9Ak3ojKDftIIUZQHaE6?pid=ImgDet&rs=1" },
  { url: "https://www.streetbikerider.us/BMW/R1100-R1200-Models/BMW-R1100-R1200-Models-76271-GP.jpg" },
  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYri-22QpI7Kmzv2cYSW7Hb4DN-_87blAcig&usqp=CAU" },
  { url: "https://th.bing.com/th/id/R.d16ba8c9c7a0460b0634268e13bae001?rik=ZB%2bfpBvmFzJIkQ&pid=ImgRaw&r=0"},
  { url: "https://di-uploads-pod29.dealerinspire.com/porscheontario1/uploads/2020/07/How-Do-I-Return-My-Porsche-Lease.jpg"},
];


const Spares = () => {
  return ( 
    <div className="footer-ads">
    <div className="footer-ads-cont">

    <SimpleImageSlider
        style={{ margin: '0 auto', marginTop: '50px' }}
        width={400}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    
    </div>
     </div> );
}
 
export default Spares;
