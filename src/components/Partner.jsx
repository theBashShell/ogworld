import React from "react";

function Partner({ img, name, program }) {
  return (
    <div className="partner">
      <img className="partner_img" src={img} alt={name} title={name} />
      <div className="partner_program">{}</div>
    </div>
  );
}

export default Partner;
