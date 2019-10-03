import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Img from 'gatsby-image';
import {graphql} from 'gatsby';
import og_logo from '../static/images/ogworld_official_logo_nt.svg';
import main_bg from '../static/images/main_bg_mobile_0.jpg';
import large_bg from '../static/images/main_bg_2.jpg';
import arrow_down from '../static/images/arrow_down.svg';
import hamburger from '../static/images/menu.svg';

function IndexHead() {
  const sources = [];

  return (
    <header className="heading">
      <div className="head_all">
        <Navbar logo={og_logo} ham={hamburger} />
        <div className="head_bg_container">
          <div className="bg_filter"></div>
          <div className="head_content">
            <h1 className="slogan">Opening Ghana to the World</h1>
            <a className="continue" href="#main_content">
              <img
                className="arrow_down"
                src={arrow_down}
                alt="continue reading"
              />
            </a>
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
      </div>
    </header>
  );
}

export default IndexHead;

export const query = graphql`
  query {
    file(relativePath: {eq: "blog/avatars/kyle-mathews.jpeg"}) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
