import React, { useState } from "react";
import { Link } from "gatsby";
import "./navbar.css";
import CONSTANTS from "../../util/constants";

const Navbar = ({ page }) => {
  const [overlay, setOverlay] = useState(false);

  const handleMenuClick = () => {
    setOverlay(prev => !prev);
  };

  return (
    <nav>
      <div className="nav-content">
        <div>one</div>
        <div className="nav-centered">
          <Link to={page}>
            <img className="nav-logo" src="/images/ogworld_logo.svg" />
          </Link>
        </div>
        <div>
          <img
            src={overlay ? CONSTANTS.images.close : CONSTANTS.images.menu}
            alt="menu button"
            onClick={handleMenuClick}
          />
        </div>
      </div>
      <div className={`nav-overlay ${overlay ? "overlay" : ""}`}>
        <div className="overlay-watermark overlay-center">
          <img src={CONSTANTS.images.world} alt="world" className="world" />
        </div>
        <div className="overlay-content overlay-center">
          <div>one</div>
          <div>one</div>
        </div>
      </div>
      <a className="credit" href="http://www.freepik.com">
        Designed by Evening_Tao / Freepik
      </a>
      <a
        className="credit"
        href="https://www.freepik.com/free-photos-vectors/technology"
      >
        Technology vector created by freepik - www.freepik.com
      </a>
    </nav>
  );
};

export default Navbar;
// <img src={CONSTANTS.images.world} alt='world' className='world' />
