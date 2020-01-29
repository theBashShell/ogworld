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
      autoplay: {
        delay: 3000
      }
    });
  }, []);

  return (
    <div className="swiper-slide">
      <div className=" swiper-container t_content swiper-container-h">
        <div className="swiper-wrapper">
          <div className="swiper-slide swiper-slide-h">
            <img
              src={CONSTANTS.images.independence_square}
              alt="background image"
            />
          </div>
          <div className="swiper-slide swiper-slide-h">
            <img src={CONSTANTS.images.beach} alt="background image" />
          </div>
          <div className="swiper-slide swiper-slide-h">two</div>
        </div>
      </div>
    </div>
  );
};

export default IndexTop;
