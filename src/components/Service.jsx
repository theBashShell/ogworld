import React from 'react';

function Service({img, heading, description, children}) {
  return (
    <div className="service">
      <h3>{heading}</h3>
      <p>{description}</p>
      {img ? (
        <div className="service_image_container">
          <img className="service_image" src={img} alt={heading} />
          <small className="credit">{children}</small>
        </div>
      ) : null}
    </div>
  );
}

export default Service;
