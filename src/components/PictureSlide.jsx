import React from "react";

function PictureSlide(props) {
  return (
    <picture>
      <source srcSet={props.desktop} media="(min-width: 640px)" />
      <img
        className="head_background"
        src={props.mobile}
        alt="head background"
      />
    </picture>
  );
}

export default PictureSlide;
