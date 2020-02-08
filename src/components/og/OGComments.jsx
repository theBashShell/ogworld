import React, { useEffect } from "react";
import "./ogcomments.css";
import Swiper from "swiper";

const Comment = ({ text, user }) => (
  <div className="swiper-slide comment">
    <div>{text}</div>
    <div className='said'>~ {user}</div>
  </div>
);

const OGComments = () => {
  useEffect(() => {
    new Swiper(
      ".swiper-comment",
      {
        spaceBetween: 30,
        centeredSlides: true,
        fadeEffect: true,
        loop: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".pag",
          clickable: true
        }
      },
      []
    );
  });
  return (
    <section id='comment' className="comments swiper-comment centered">
      <div class="sec-title comment-title">What People Have Said</div>
      <div className="swiper-wrapper">
        <Comment
          text="We truly couldn't have done this without OG World"
          user="Northeastern University, 2016"
        />
        <Comment
          text="Thank you so much OG World. I absolutely cannot 
        express my gratitude enough."
          user="MIT Student"
        />
        <Comment
          text="Thanks for a terrific trip. Amazing  company and 
        incredible connections. It's been such a pleasure to work with OG World.
         Hope to see you again"
          user="U of W Faculty"
        />
      </div>
      <div className=".pag"></div>
    </section>
  );
};

export default OGComments;
