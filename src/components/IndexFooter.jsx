import React, {useContext} from 'react';
import arrow_down from '../static/images/arrow_down.svg';
import a_link from '../static/images/link.svg';
import arrow_up from '../static/images/arrow_up.svg';
import Map from '../components/Map';
import {NotificationContext} from './ContactForm';

function IndexFooter() {
  return (
    <>
    <footer className="page_footer">
      <div className="map footer_item">
        <Map />
      </div>
      <address className="contact_info">
        <div className="post_box">P. O. BOX MP 2344, Mamprobi — Accra</div>
        <div class="phone">
          <a className="link" href="tel:+233302261486">
            +233 (0) 302 261486
          </a>
          <br />
          <a className="link" href="tel:+233548585888">
            +233 (0) 548 585888
          </a>
          <br />
          <a className="link" href="mailto:info@ogworldgh.com">
            info@ogworldgh.com
          </a>
        </div>
      </address>
      <div className="copyright footer_item">
        <span>&copy; {new Date().getFullYear()} OG World Foundation.</span>
      </div>
      <div className="dev_info footer_item">
        <span>
          Designed with a pint of 💕 by &nbsp;
          <a
            className="link theBashShell"
            href="https://github.com/theBashShell"
            target="_blank"
          >
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
    <div className="notification"> 
    dafdfsa
    </div>
    </>
  );
}

export default IndexFooter;
