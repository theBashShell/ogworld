import React from 'react';
import Reveal from 'react-reveal/Reveal';
import config from 'react-reveal/globals';
import { Icon, Carousel } from 'antd';

config({ ssrFadeout: true });

const settings = {
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 300,
  autoplaySpeed: 4000,
  Reveal: true,
  mobileFirst: true,
  cssEase: 'linear',
  centerMode: false,
  swipeToSlide: true,
  pauseOnHover: true,
};

const Comment = ({ comment, user }) => {
  return (
    <div className="centered comment">
      <Reveal duration={3000}>
        <p>{comment}</p>
      </Reveal>
      <div className='commentor'>{user}</div>
    </div>
  );
};

function OGFeedback() {
  return (
    <div id="feedback">
      <h2 className="feedback_heading">What People Have Said</h2>
      <div className="">
        <section className="feedback-container">
          <div className="centered">
            <img
              className="quote"
              src="https://api.iconify.design/gridicons:quote.svg?color=white"
              alt="quote"
            />
          </div>
          <Carousel {...settings}>
            <Comment
              user="MIT student"
              comment="Thank you so much OG World. I absolutely
           cannot express my gratitude enough."
            />
            <Comment
              user="U of W Faculty"
              comment="Thanks for a terrific trip. Amazing 
          company
           and incredible connections. It's been such a pleasure to work
            with OG World. Hope to see you again"
            />
            <Comment
              user="Northeastern University 2017"
              comment="Thank you so much for
             organizing this trip.
             Everything was incredible!"
            />
            <Comment
              user="Northeastern University 2016"
              comment={`We truly couldn't have
              done this without OG World`}
            />
          </Carousel>
        </section>
      </div>
    </div>
  );
}

export default OGFeedback;
