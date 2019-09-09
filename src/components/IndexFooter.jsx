import React from 'react';
import arrow_down from '../static/images/arrow_down.svg';

function IndexFooter() {
  return (
    <footer className="page_footer">
      <div className="line"></div>
      <div>&copy; 2019 OG World </div>

      <div title="back to top" className="top">
        <a className="top_link" href="#">
          <img src={arrow_down} alt="back to top" />
        </a> 
      </div>
    </footer>
  );
}

export default IndexFooter;
