import React from 'react';

function SlideImage({mobile, desktop}) {
  return (
    <div className="bg_container">
      <picture>
        <source srcSet={desktop} media="(min-width: 640px)" />
        <img className="head_background" src={mobile} alt="head background" />
      </picture>
    </div>
  );
}

export default SlideImage;
