import React from 'react';
import arrow_down from '../static/images/arrow_down.svg';
import a_link from '../static/images/link.svg';

function IndexFooter() {
  return (
    <footer className="page_footer">
      <div className="line"></div>
      <div className="map footer_item"></div>
      <div className="copyright footer_item">
        <span>Copyright &copy; 2019 OG World. All rights reserved.</span>
      </div>
      <div className="dev_info footer_item">
        <span>
          Made with a pint of 💕 by
          <a href="https://github.com/theBashShell" target="_blank"> theBashShell <img className='link_image' src={a_link} alt="visit link" /></a>
        </span>
      </div>
    </footer>
  );
}

export default IndexFooter;
