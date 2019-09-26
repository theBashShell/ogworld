import React from 'react';
import right_quote from '../static/images/quotes_right.svg';
import left_quote from '../static/images/quotes_left.svg';
import commentor from '../static/images/commentor.svg';

function Feedback({words, client}) {
  return (
    <div className="feedback">
      <div className='quote'><img src={left_quote} alt='left quote' /></div>
      <div>{words}</div>
      <div className='quote'><img src={right_quote} alt='right quote' /></div>
      <div className="commentor"> <img src={commentor} alt='commentor' /> {client}</div>
    </div>
  );
}

export default Feedback;
