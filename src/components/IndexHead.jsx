import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import og_logo from '../static/images/ogworld_official_logo_nt.svg';
import main_bg from '../static/images/main_bg_mobile_0.jpg';
import large_bg from '../static/images/main_bg_2.jpg';
import main_2 from '../static/images/main_bg_3.jpg';
import main_3 from '../static/images/main_bg_3_0.jpg'; 
import hamburger from '../static/images/menu.svg';
import { Icon } from 'antd';
import { Link } from 'gatsby';
import Reveal from 'react-reveal/Reveal';
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';
import { Carousel } from 'antd';
import SlideImage from './SlideImage';

config({ ssrFadeout: true });

const settings = {
  dots: false,
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  fade: true,  
  autoplaySpeed: 9000,
  Reveal: true,
  mobileFirst: true, 
  cssEase: 'linear',
  lazyLoad: 'ondemand',
};

function IndexHead() {
  return (
    <header className="heading">
      <div className="head_all">
        <Navbar logo={og_logo} ham={hamburger} />
        <Reveal duration={2000}>
          <div className="head_bg_container">
            <div className="bg_filter" />
            <div className="head_content">
              <h1 className="slogan">Opening Ghana to the World</h1>
              <Link className="continue" to="#main_content">
                <Zoom duration={900}>
                  <Icon
                    type="down-circle"
                    className="arrow_down"
                    style={{ color: 'white', fontSize: '20px' }}
                  />
                </Zoom>
              </Link>
            </div>
            <Carousel {...settings}>
              <SlideImage
                mobile={main_bg}
                desktop={large_bg}
              />
              <SlideImage
              mobile={main_3}
              desktop={main_2}
            />
            </Carousel>
          </div>
        </Reveal>
      </div>
    </header>
  );
}

export default IndexHead;
