import React, { useEffect, useRef } from "react";
import "./indextop.css";
import Swiper from "swiper";
import CONSTANTS from "../../util/constants";

const IndexTop = () => {
  useEffect(() => {
    new Swiper(".swiper-container-h", {
      direction: "horizontal",
      effect: "fade",
      keyboard: {
        enabled: true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }, []);

  return (
    <div className="swiper-slide">
      <div className=" swiper-container t_content swiper-container-h">
        <div className="swiper-wrapper">
          <div className="swiper-slide swiper-slide-h">one</div>
          <div className="swiper-slide swiper-slide-h">two</div>
          <div className="swiper-slide swiper-slide-h">three</div>
          <div className="swiper-slide swiper-slide-h">final</div>
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
