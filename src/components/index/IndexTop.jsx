import React, { useEffect, useRef } from "react";
import "lazysizes";
import "./indextop.css";
import Swiper from "swiper";
import "lazysizes";
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
      <div className=" swiper-container full swiper-container-h">
        <div className="swiper-wrapper">
          <div className="top-info">Opening Ghana to the World</div>
          <div className="swiper-slide full swiper-slide-h">
            <img
              data-src={CONSTANTS.images.independence_square}
              alt="background image"
              class="bg-img lazyload"
              src={CONSTANTS.images.independenc_square_thumbnail}
            />
          </div>
          <div className="swiper-slide swiper-slide-h">
            <img
              data-src={CONSTANTS.images.beach}
              alt="background image"
              class="bg-img lazyload"
            />
          </div>
          <div className="swiper-slide swiper-slide-h">
            <img
              data-src={CONSTANTS.images.craft}
              alt="background image"
              class="bg-img lazyload"
              src={CONSTANTS.images.craft_thumbnail}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexTop;
