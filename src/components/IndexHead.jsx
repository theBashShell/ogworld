import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import og_logo from '../static/images/ogworld_official_logo_nt.svg';
import main_bg from '../static/images/main_bg_mobile_0.jpg';
import large_bg from '../static/images/main_bg_2.jpg'; 
import hamburger from '../static/images/menu.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'normalize.css';
import Slider from 'react-slick';
import Picture from '../components/PictureSlide';
import { Icon } from 'antd';
import { Link } from 'gatsby';
import Reveal from 'react-reveal/Reveal';

const settings = {
  dots: false,
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  Reveal: true,
  mobileFirst: true,
  centerMode: true,
  cssEase: 'linear',
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
                <Icon type="caret-down" className="arrow_down" style={{color: 'white', fontSize: '20px'}} />
              </Link>
            </div>
            <picture>
              <source srcSet={large_bg} media="(min-width: 640px)" />
              <img
                className="head_background"
                src={main_bg}
                alt="head background"
              />
            </picture>
          </div> 
        </Reveal>
      </div>
    </header>
  );
}

export default IndexHead;
