import React from 'react';
import right_quote from '../static/images/quotes_right.svg';
import left_quote from '../static/images/quotes_left.svg';
import commentor from '../static/images/commentor.svg';
import Feedback from './Feedback';
import { Carousel } from 'antd';

const style = {
  container: {
    paddingBottom: '20px',
    background: 'wheat',
    flexDirection: "column nowrap",
    padding: '10px 20px'
  },
};

const Comment = ({ comment, client }) => {
  return (
    <section style={style.container}>
      <Carousel autoplay effect="fade">
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </Carousel>
    </section>
  );
};

export default Comment;
