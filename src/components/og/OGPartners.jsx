import React from "react";
import "./ogpartners.css";
import CONSTANTS from "../../util/constants";

const Partner = ({ partner, pic }) => (
  <img src={pic} className="ptn-img" alt={partner} title={partner} />
);

const OGPartners = () => {
  return (
    <section id='partner' className="ptn centered">
      <div className="sec-title ptn-title">Trusted By</div>
      <div className="ptn-ctn centered">
        {CONSTANTS.partners.map(info => (
          <Partner {...info} />
        ))}
      </div>
    </section>
  );
};

export default OGPartners;
