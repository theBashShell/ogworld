import React from "react";
import "./ogservice.css";
import "lazysizes";

const OGService = ({ pic, head, text, color }) => {
  return (
    <div className="s-container" style={{ background: color }}>
      <div className="s-img-container">
        <img data-src={pic} alt={head} className="lazyload" />
      </div>
      <h3 className="s-head">{head}</h3>
      <div className="s-text">{text}</div>
    </div>
  );
};

export default OGService;
