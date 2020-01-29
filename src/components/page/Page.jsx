import React, { useEffect } from "react";
import Swiper from "swiper";
import "./page.css";
import "swiper/css/swiper.min.css";

const Page = ({ children }) => {
  useEffect(() => {
    new Swiper(".pg_swiper-container", {
      mousewheel: true,
      direction: "vertical",
      keyboard: { enabled: true },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      hashNavigation: {
        watchState: true
      }
    });
  }, []);
  return (
    <div id="app" className="swiper-container pg_swiper-container">
      <div className="swiper-wrapper">{children}</div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Page;
