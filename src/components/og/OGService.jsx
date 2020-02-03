import React from "react";
import "./ogservice.css";

const OGService = ({ pic, head, text, color }) => {
  return (
    <div className="s-container" style={{ background: color }}>
      <div className="s-img-container">
        <img src={pic} alt={head} />
      </div>
      <h3 className="s-head">{head}</h3>
      <div className="s-text">{text}</div>
    </div>
  );
};

export default OGService;
