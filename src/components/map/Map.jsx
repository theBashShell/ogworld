import React from "react";
import CONSTANTS from '../../util/constants'

function Map() {
  return (
    <iframe
      className=""
      frameBorder="0"
      src={CONSTANTS.map}
      allowFullScreen
    />
  );
}

export default Map;
