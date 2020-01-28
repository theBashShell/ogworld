import React, { useEffect } from "react";
import Swiper from "swiper";
import "./page.css";

const Page = ({ children }) => {
  useEffect(() => {
    new Swiper(".pg_swiper-container", {
      mousewheel: true,
      direction: "vertical",
      pagination: {
        el: ".p_swiper-pagination",
        clickable: true
      }
    });
  }, []);
  return (
    <div id="app" className="pg_swiper-container">
      <div class="swiper-wrapper">{children}</div>
      <div class="p_swiper-pagination"></div>
    </div>
  );
};

export default Page;
