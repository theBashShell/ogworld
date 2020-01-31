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
      
    </section>
  );
};

export default OGPartners;
