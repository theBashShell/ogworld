import React, { useEffect } from "react";
import "./indexfooter.css";
import Map from "../map/Map";
import Tooltip from "@atlaskit/tooltip";
import CONSTANTS from "../../util/constants";
import Swiper from "swiper";

const IndexFooter = () => {
  useEffect(() => {
    new Swiper(".footer", {});
  }, []);
  return (
    <footer className="foot" data-hash="info">
      <div className="swiper-container footer">
        <div className="swiper-wrapper">
          <div className="swiper-slide foot">
            <Map />
            <address className="contact_info">
              <div className="post_box">
                P. O. BOX MP 2344, Mamprobi — Accra
              </div>
              <div className="phone">
                <a className="link" href="tel:+233302261486">
                  +233 (0) 302 261486
                </a>
                <br />
                <a className="link" href="tel:+233548585888">
                  +233 (0) 548 585888
                </a>
                <br />
                <a className="link" href="mailto:info@ogworldgh.com">
                  info@ogworldgh.com
                </a>
              </div>
            </address>{" "}
            <div className="copyright footer_item">
              <span>&copy; {new Date().getFullYear()} OG World Foundation</span>
              <div className="tip">
                Designed with a pint of{" "}
                <img src={CONSTANTS.images.heart} alt="heart" /> by &nbsp;
                <a
                  href={CONSTANTS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github"
                >
                  <Tooltip content="Bruno Edoh">
                    <span>theBashShell</span>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default IndexFooter;
