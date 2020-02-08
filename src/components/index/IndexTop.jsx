import React, { useEffect } from "react";
import "lazysizes";
import "./indextop.css";
import Swiper from "swiper";
import CONSTANTS from "../../util/constants";

const SlidePic = ({ pic, thumbnail }) => (
  <div className="swiper-slide">
    <img
      data-src={pic}
      alt="background"
      className="bg-img lazyload"
      src={thumbnail}
    />
  </div>
);
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
      keyboard: {
        enabled: true
      },
      autoplay: {
        delay: 5000
      }
    });
  }, []);

  return (
    <div id="top" className=" swiper-container top">
      <div className="swiper-wrapper">
        <div className="top-info">
          <div className="slogan">Opening Ghana to the World</div>
          <img className="scroll" src={CONSTANTS.images.scroll} alt="scroll" />
        </div>
        {CONSTANTS.pageslide.map(el => (
          <SlidePic {...el} key={btoa(el.pic)} />
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default IndexTop;
