import React, { useState } from "react";
import { Link } from "gatsby";
import "./navbar.css";
import CONSTANTS from "../../util/constants";

const NavLinks = ({ link, nav, clk }) => {
  return (
    <Link to={link} onClick={clk}>
      {nav}
    </Link>
  );
};

const Navbar = ( ) => {
  const [overlay, setOverlay] = useState(false);

  const handleMenuClick = () => {
    setOverlay(prev => !prev);
  };

  return (
    <nav>
      <div className="nav-content">
        <div className="nav-centered">
          <Link to="/#top">
            <img className="nav-logo" src="/images/ogworld_logo.svg" alt='logo' />
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
          <NavLinks clk={handleMenuClick} link="/#service" nav="Services" />
          <NavLinks clk={handleMenuClick} link="/#project" nav="Projects" />
          <NavLinks clk={handleMenuClick} link="/#team" nav="Team" />
          <NavLinks clk={handleMenuClick} link="/#comment" nav="Comments" />
          <NavLinks clk={handleMenuClick} link="/#partner" nav="Partnerships" />
          <NavLinks clk={handleMenuClick} link="/#contact" nav="Contact" />
          <NavLinks clk={handleMenuClick} link="/#gallery" nav="Gallery" />
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
