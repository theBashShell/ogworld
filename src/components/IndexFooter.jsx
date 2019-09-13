import React from 'react';
import arrow_down from '../static/images/arrow_down.svg';

function IndexFooter() {
  return (
    <footer className="page_footer">
      <div className="line"></div>
      <div className="map footer_item">map here</div>
      <div className="copyright footer_item">
        <span>Copyright &copy; 2019 OG World. All rights reserved.</span>
      </div>
      <div className="dev_info footer_item">
        <span>
          Made with a pint of 💕 by
          <a href="https://github.com/theBashShell"> theBashShell</a>
        </span>
      </div>
    </footer>
  );
}

export default IndexFooter;

// <div title="back to top" className="top">
//         <a className="top_link" href="#">ii💚
//           <img src={arrow_down} alt="back to top" />
//         </a>
//       </div>
