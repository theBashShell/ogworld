import React, { useState } from "react";
import { Link } from "gatsby";
import "./navbar.css";
import CONSTANTS from "../../util/constants";

const NavLinks = ({ link, nav }) => {
  return <Link to={link}>{nav}</Link>;
};

const Navbar = ({ page }) => {
  const [overlay, setOverlay] = useState(false);

  const handleMenuClick = () => {
    setOverlay(prev => !prev);
  };

  return (
    <nav>
      <div className="nav-content">
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
        <div className="overlay-watermark overlay-center centered">
          <img src={CONSTANTS.images.world} alt="world" className="world" />
        </div>
        <div className="overlay-content overlay-center centered">
          <NavLinks link="/#service" nav="Services" />
          <NavLinks link="/#project" nav="Projects" />
          <NavLinks link="/#team" nav="Team" />
          <NavLinks link="/#comment" nav="Comments" />
          <NavLinks link="/#partner" nav="Partnerships" />
          <NavLinks link="/#gallery" nav="Gallery" />
          <NavLinks link="/#contact" nav="Contact" />
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
