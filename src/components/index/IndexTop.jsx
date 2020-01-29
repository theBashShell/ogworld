import React, { useEffect, useRef } from "react";
import "./indextop.css";
import Swiper from "swiper";
import CONSTANTS from "../../util/constants";

const IndexTop = () => {
  useEffect(() => {
    new Swiper(".gallery-container", {
      direction: "horizontal",
      effect: "fade",
      keyboard: {
        enabled: true
      }
    });
  }, []);

  return (
    <div className="swiper-slide"> 
      <div className=" swiper-container t_content gallery-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">one</div>
          <div className="swiper-slide">adf</div>
          <div className="swiper-slide">gdsg</div>
          <div className="swiper-slide">sfdv</div>
          <div className="swiper-slide">adfs</div>
          <div className="swiper-slide">grer</div>
          <div className="swiper-slide">32</div>
          <div className="swiper-slide">oadfne</div>
        </div>
      </div>
    </div>
  );
};

export default IndexTop;

// <div className="t_content">
//   <div className="swiper-slide">
//     <img src={CONSTANTS.images.independence_square} alt="background image" />
//   </div>
//   <div className="swiper-slide">
//     <img src={CONSTANTS.images.independence_square} alt="background image" />
//   </div>
// </div>;
