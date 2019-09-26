import React from 'react';

function Map() {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=og%20world&t=&z=19&ie=UTF8&iwloc=&output=embed"
        ></iframe>
        <a href="https://www.embedgooglemap.org">embedgooglemap.org</a>
      </div>
    </div>
  );
}

export default Map;
