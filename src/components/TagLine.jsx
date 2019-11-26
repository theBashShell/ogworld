import React from 'react';
import Reveal from 'react-reveal/Reveal';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

function TagLine() {
  return (
    <div className="tagline">
      <div className="tagline_filter">
        <Reveal opposite bottom duration={7000}>
          <h2>
            Experience <br /> & <br /> Explore Ghana
          </h2>
        </Reveal>
      </div>
    </div>
  );
}

export default TagLine;
