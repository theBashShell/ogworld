import React, { useEffect } from "react";
import "./ogpartners.css";
import Swiper from 'swiper'

const OGPartners = () => {
  useEffect(() => {
    new Swiper(".swiper-container-p", {
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
    <section className="swiper-slide ptn full" data-hash="partnerships">
      <div className=" swiper-container full swiper-container-p">
        <div className="swiper-wrapper mid">
          <div className="swiper-slide swiper-slide-p ptn">afds</div>
          <div className="swiper-slide swiper-slide-p ptn">adfs</div>
          <div className="swiper-slide swiper-slide-p ptn">two</div>
        </div>
      </div>
    </section>
  );
};

export default OGPartners;
