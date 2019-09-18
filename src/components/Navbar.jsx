import React, {useState, useEffect, useRef} from 'react';
import close from '../static/images/close.svg';
import hamburger from '../static/images/menu.svg';

function Navbar({logo, alt}) {
  let overlayHeight = 100;
  const hamburgerRef = useRef(null);
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

  function handleHamburgerClick(event) {
    if (event.target.id === hamburgerRef.current.id) {
      setShowOverlay(showOverlay ? false : true);
    } else if (event.target.id === hamContentRef.current.id) {
    } else {
      setShowOverlay(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleHamburgerClick);

    return () => {
      document.removeEventListener('click', handleHamburgerClick);
    };
  });

  return (
    <nav className="navbar">
      <div className="navbar_content">
        <div className="nav_item">
          <a className="nav_link link" href="#">
            OG World
          </a>
        </div>
        <div className="nav_item">
          <img className="og_logo" src={logo} alt={alt} />
        </div>
        <div className="hamburger nav_item">
          <img
            className="ham_btn"
            id="hamburger_btn"
            src={showOverlay ? close : hamburger}
            alt="menu"
            ref={hamburgerRef}
          />
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
          <a
            className="nav_link"
            href="#services"
            style={{display: `${showOverlay ? 'block' : 'none'}`}}
          >
            services
          </a>
          <a
            className="nav_link"
            href="#projects"
            style={{display: `${showOverlay ? 'block' : 'none'}`}}
          >
            projects
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
