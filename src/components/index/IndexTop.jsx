import React, { useEffect, useRef } from "react";
import "lazysizes";
import "./indextop.css";
import Swiper from "swiper";
import "lazysizes";
import CONSTANTS from "../../util/constants";

const IndexTop = () => {
  useEffect(() => {
    new Swiper(".top", {
      direction: "horizontal",
      effect: "fade",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
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
    <div id='top' className=" swiper-container top">
      <div className="swiper-wrapper">
        <div className="top-info">
          <div className="slogan">Opening Ghana to the World</div>
          <img className="scroll" src={CONSTANTS.images.scroll} alt="scroll" />
        </div>
        <div className="swiper-slide">
          <img
            data-src={CONSTANTS.images.independence_square}
            alt="background image"
            class="bg-img lazyload"
            src={CONSTANTS.images.independenc_square_thumbnail}
          />
        </div>
        <div className="swiper-slide">
          <img
            data-src={CONSTANTS.images.beach}
            alt="background image"
            class="bg-img lazyload"
          />
        </div>
        <div className="swiper-slide">
          <img
            data-src={CONSTANTS.images.craft}
            alt="background image"
            class="bg-img lazyload"
            src={CONSTANTS.images.craft_thumbnail}
          />
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default IndexTop;
