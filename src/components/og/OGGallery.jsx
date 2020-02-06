import React from "react";
import "./oggallery.css";
import CONSTANTS from '../../util/constants'
import Gallery from "react-grid-gallery";

const OGGallery = () => {
  return (
    <section className="gallery centered">
      gallery
      <Gallery images={CONSTANTS.gallery} />
    </section>
  );
};

export default OGGallery;
