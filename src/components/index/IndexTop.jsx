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
      loop: true,
      keyboard: {
        enabled: true
      },
      autoplay: {
        delay: 5000
      }
    });
  }, []);

  return (
    <div className="swiper-slide top">
      <div className=" swiper-container swiper-container-h">
        <div className="swiper-wrapper top">
          <div className="top-info">Opening Ghana to the World</div>
          <div className="swiper-slide swiper-slide-h">
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
