import React from "react";
import "./oggallery.css";
import CONSTANTS from "../../util/constants";
import Gallery from "react-grid-gallery";

const OGGallery = () => {
  return (
    <section className="gallery centeredd"> 
      <Gallery id="og-gallery" images={CONSTANTS.gallery} />
      {console.log(CONSTANTS.gallery)}
    </section>
  );
};

export default OGGallery;
