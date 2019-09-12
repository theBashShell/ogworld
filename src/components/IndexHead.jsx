import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import og_logo from '../static/images/ogworld_official_logo_nt.svg';
import main_bg from '../static/images/test.jpg';
import large_bg from '../static/images/main_bg_2.jpg';
import arrow_down from '../static/images/arrow_down.svg';
import hamburger from '../static/images/menu.svg';

function IndexHead() {
  return (
    <header className="heading">
      <div className="head_all">
        <Navbar logo={og_logo} ham={hamburger} />
        <div className="head_bg_container">
          <div className="bg_filter"></div>
          <div className="head_content">
            <h1 className="slogan">Opening Ghana to the World</h1>
            <a className="continue" href="#main_content">
              <img className="arrow_down"src={arrow_down} alt="continue reading" />
            </a>
          </div>
          <picture>
            <source srcSet={large_bg} media="(min-width: 740px)" />
            <img
              className="head_background"
              src={main_bg}
              alt="head background"
            />
          </picture>
        </div>
      </div>
    </header>
  );
}

export default IndexHead;

// function IndexHead() {
//   const [overlayHeight, setOverlayHeight] = useState('0%');

//   function handleOverlay() {
//     setOverlayHeight(overlayHeight === '0%' ? '70%' : '0%');
//   }

//   const ham_img = overlayHeight === '0%' ? hamburger : close;

//   const styles = {
//     disp: {
//       height: `${overlayHeight}`,
//       opacity: 1,
//     },
//   };

//   return (
//     <header className="page_head">
//       <Navbar
//         logo={og_logo}
//         disp={styles.disp}
//         alt="ogworld logo"
//         ham={ham_img}
//         overlayHandler={handleOverlay}
//       />
//       <picture>
//         <source srcSet={large_bg} media="(min-width: 740px)" />
//         <img className="page_background" src={main_bg} alt="page background" />
//       </picture>
//       <div className="head_content">
//         <div className="head_info">
//           <h1 className="slogan">
//             Opening Ghana <span>to the</span> World
//           </h1>
//           <div id="to_content">
//             <a className="arrow" href="#main_content">
//               <img
//                 src={arrow_down}
//                 alt="continue reading"
//                 className="arrow_down"
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
