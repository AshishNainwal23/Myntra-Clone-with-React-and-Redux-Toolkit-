import React from "react";
import discount from "../image/banner.webp";
import bannerOff from "../image/bannerOff.webp";

const banner = () => {
  return (
    <div>
      <img src={bannerOff} alt="bannerOff" />
      <img src={discount} alt="banner" />
    </div>
  );
};

export default banner;
