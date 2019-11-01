import React from 'react';

function Partner({img, name, program}) {
  return (
    <div className="partner">
      <img className="partner_img" src={img} alt={name} title={name} />
      <p className="partner_program">{program}</p>
    </div>
  );
}

export default Partner;
