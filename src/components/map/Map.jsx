import React from "react";
import 'lazysizes'
import CONSTANTS from '../../util/constants'
import "./map.css"


function Map() {
  return (
    <iframe
      className="map lazyload"
      frameBorder="0"
      data-src={CONSTANTS.map}
      allowFullScreen
    />
  );
}

export default Map;
