import React, { useEffect } from "react";
import Swiper from "swiper";
import "./page.css";

const Page = ({ children }) => {
  useEffect(() => {
    new Swiper(".pg_swiper-container", {
      mousewheel: true,
      direction: "vertical",
      keyboard: { enabled: true },
      pagination: {
        el: ".p_swiper-pagination",
        clickable: true
      }
    });
  }, []);
  return (
    <div id="app" className="swiper-container pg_swiper-container">
      <div className="swiper-wrapper">{children}</div>
      <div className="p_swiper-pagination"></div>
    </div>
  );
};

export default Page;
