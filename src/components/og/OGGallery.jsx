import React from "react";
import "./oggallery.css";
import CONSTANTS from "../../util/constants";
import Gallery from "react-grid-gallery";

const OGGallery = () => {
  return (
    <section id="gallery" className="gallery centeredd">
      <div>
        <Gallery id="og-gallery" images={CONSTANTS.gallery} />{" "}
      </div>
    </section>
  );
};

export default OGGallery;
