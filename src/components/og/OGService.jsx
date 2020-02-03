import React from "react";
import "./ogservice.css";

const OGService = ({ pic, head, text }) => {
  return (
    <div className='s-container'>
      <div className='s-img-container'>
        <img src={pic} alt={head} />
      </div>
      <div className='s-head'>{head}</div>
      <div className='s-text'>{text}</div>
    </div>
  );
};

export default OGService;

