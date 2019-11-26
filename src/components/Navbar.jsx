import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import { Icon, Breadcrumb } from 'antd';

function Navbar({ logo, alt }) {
  let overlayHeight = 100;
  const hamContentRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const activeStyle = {
    menu: {
      opacity: 1,
      height: `${overlayHeight}vh`,
    },
    content: {
      opacity: 1,
      height: '100%',
    },
  };

  const inActiveStyle = {
    menu: {
      opacity: 0,
      height: '0vh',
    },
    content: {
      opacity: 0,
      height: '0%',
    },
  };

  function handleHamburgerClick() {
    setShowOverlay(!showOverlay);
  }

  const NavLink = ({ id, link, kind = 1 }) => {
    const css = { style: { display: `${showOverlay ? 'block' : 'none'}` } };
    return (
      <Link
        className={`${kind === 1 ? '' : 'nav_link'}  nav_nav`}
        to={id}
        style={kind === 1 ? null : css.style}
        onClick={() => setShowOverlay(false)}
      >
        {link}
      </Link>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar_content">
        <div className="nav_item og_item">
          <Link to="#">
            <span className="text-white">OG World</span>
          </Link>
        </div>
        <div className="logo_item nav_item">
          <div className="full_dimension logo_link">
            <Link to="#">
              <img className="og_logo" src={logo} alt={alt} />
            </Link>
          </div>
        </div>
        <div className="hamburger nav_item">
          <Icon
            type={showOverlay ? 'close' : 'menu'}
            className="ham_btn"
            onClick={handleHamburgerClick}
          />
        </div>

        <div className="page_link nav_item">
          <NavLink id="#services" link="services" />
          <NavLink id="#projects" link="projects" />
          <NavLink id="#team" link="team" />
          <NavLink id="#feedback" link="comments" />
          <NavLink id="#reach_us" link="contact" />
          <NavLink id="#partnerships" link="partnerships" />
        </div>
      </div>
      <div
        className="menu_overlay"
        style={showOverlay ? activeStyle.menu : inActiveStyle.menu}
      >
        <div
          id="overlay_menu_content"
          className="overlay_content"
          ref={hamContentRef}
          style={showOverlay ? activeStyle.content : inActiveStyle.content}
        >
          <NavLink id="#services" link="services" kind={2} />
          <NavLink id="#projects" link="projects" kind={2} />
          <NavLink id="#team" link="team" kind={2} />
          <NavLink id="#feedback" link="comments" kind={2} />
          <NavLink id="#reach_us" link="contact" kind={2} />
          <NavLink id="#partnerships" link="partnerships" kind={2} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
