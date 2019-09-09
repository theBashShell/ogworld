import React, {useState} from 'react';
import og_logo from '../static/images/ogworld_logo.svg';
import main_bg from '../static/images/test.jpg';
import large_bg from '../static/images/main_bg_2.jpg';
import arrow_down from '../static/images/arrow_down.svg';
import hamburger from '../static/images/menu.svg';
import close from '../static/images/close.svg'; 

function IndexHead() {
  const [overlayHeight, setOverlayHeight] = useState('0%');

  function handleOverlay() {
    setOverlayHeight(overlayHeight === '0%' ? '70%' : '0%');
  }

  const ham_img = overlayHeight === '0%' ? hamburger : close;

  const styles = {
    disp: {
      height: `${overlayHeight}`,
      opacity: 1,
    },
  };

  return (
    <header className="page_head">
      <nav className="navbar">
        <img className="og_logo" src={og_logo} alt="ogworld logo" />
        <div className="nav_items">
          <div className="menu_overlay" style={styles.disp}></div>
          <div className="menu">
            <img
              className="ham_btn"
              src={ham_img}
              alt="menu"
              onClick={handleOverlay}
            />
          </div>
        </div>
      </nav>
      <picture>
        <source srcSet={large_bg} media="(min-width: 740px)" />
        <img className="page_background" src={main_bg} alt="page background" />
      </picture>
      <div className="head_content">
        <div className="head_info">
          <h1 className="slogan">
            Opening Ghana <span>to the</span> World
          </h1>
          <div id="to_content">
            <a className="arrow" href="#main_content">
              <img
                src={arrow_down}
                alt="continue reading"
                className="arrow_down"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default IndexHead;
