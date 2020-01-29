import React from "react";
import CONSTANTS from '../../util/constants'
import "./map.css"

function Map() {
  return (
    <iframe
      className="map"
      frameBorder="0"
      src={CONSTANTS.map}
      allowFullScreen
    />
  );
}

export default Map;
