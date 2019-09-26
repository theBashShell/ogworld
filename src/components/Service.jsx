import React from 'react';

function Service({img, heading, description, children}) {
  return (
    <div className="service">
      {img ? (
        <div className="service_image_container">
          <img className="service_image" src={img} alt={heading} />
          <small className="credit">{children}</small>
        </div>
      ) : null}
      <h3 className="service_heading">{heading}</h3>
      <div className="service_description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Service;
