import React from 'react';
import "./indexfooter.css"
import Map from '../map/Map'

const IndexFooter = () => {
  return (
    <footer className="swiper-slide full" data-hash="info">
      <Map />
      <address className="contact_info">
        <div className="post_box">P. O. BOX MP 2344, Mamprobi — Accra</div>
        <div className="phone">
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
        <span>&copy; {new Date().getFullYear()} OG World Foundation</span>
      </div>
    </footer>
  );
}

export default IndexFooter;
