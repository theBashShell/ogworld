import React from 'react';

function Map() {
  return (
    <iframe
      className="map_frame full_dimension"
      frameBorder="0"
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZxVZklub3w8RNORA1tiswUA&key=AIzaSyA-DmVnumR6-EPbKWpZE2odtLyZK-7DB_E"
      allowFullScreen
    />
  );
}

export default Map;
