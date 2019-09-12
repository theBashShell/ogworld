import React, {useState} from 'react';
import hamburger from '../static/images/menu.svg';
import close from '../static/images/close.svg';

function Navbar({logo, disp, ham, alt}) {
  const [overlay, setOverlay] = useState(0);

  function handleDropMenu() {
    setOverlay(overlay === 0 ? 100 : 0);
  }

  return (
    <nav className="navbar">
      <div className="navbar_content">
        <div className="nav_item"></div>
        <div className="nav_item">
          <img className="og_logo" src={logo} alt={alt} />
        </div>
        <div className="hamburger nav_item">
          <img
            className="ham_btn"
            src={overlay === 0 ? hamburger : close}
            alt="menu"
            onClick={handleDropMenu}
          />
        </div>
      </div>
      <div
        className="menu_overlay"
        style={{height: `${overlay}vh`, opacity: overlay / 100}}
      ></div>
    </nav>
  );
}

export default Navbar;

// <nav className="navbar">
//   <div>
//     <img className="og_logo" src={logo} alt={alt} />
//   </div>
//   <div className="nav_center">OG</div>
//   <div>
//     <img
//       className="ham_btn"
//       src={ham}
//       alt="menu"
//       onClick={overlayHandler}
//     />
//   </div>
//   <div className="menu_overlay" style={disp}></div>
// </nav>

{
  /**  <div className="nav_items">
        <img className="og_logo" src={logo} alt={alt} />
        <div className="menu_overlay" style={disp}></div>
        <div className="menu">
          <img
            className="ham_btn"
            src={ham}
            alt="menu"
            onClick={overlayHandler}
          />
        </div>
    */
}
