import React from 'react';
import arrow_down from '../static/images/arrow_down.svg';
import a_link from '../static/images/link.svg';
import arrow_up from '../static/images/arrow_up.svg';

function IndexFooter() {
  return (
    <footer className="page_footer">
      <div className="map footer_item"></div>
      <div className="copyright footer_item">
        <span>&copy; 2019 OG World Foundation.</span>
      </div>
      <div className="dev_info footer_item">
        <span>
          Designed with a pint of 💕 by
          <a href="https://github.com/theBashShell" target="_blank">
            theBashShell
            <img className="link_image" src={a_link} alt="visit link" />
          </a>
        </span>
      </div>
      <div className="to_top cool" title="Top">
        <a className="full_dimension" href="#">
          <img
            className="arrow_up cool full_dimension"
            src={arrow_up}
            alt="go to top"
          />
        </a>
      </div>
    </footer>
  );
}

export default IndexFooter;
