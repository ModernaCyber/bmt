import React from "react";

import { StaticImage } from "gatsby-plugin-image"

const Logo = () => (
  <div className="logo" id="top">
    <StaticImage
      src="../components/static\log1.png"
      alt="BMWEMT"
      placeholder="blurred"
      layout="fixed"
      width={80}
      height={80}
    />
  </div>
);
export default Logo;
