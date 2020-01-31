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
        <div className="">
          <div>one</div>
          <div>one</div>
          <a className="credit" href="http://www.freepik.com">
            Designed by Evening_Tao / Freepik
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// <img src={CONSTANTS.images.world} alt='world' className='world' />
