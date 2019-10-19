import React from 'react';

function Service({
  img,
  heading,
  description,
  children,
  imgClass,
  serviceClass,
}) {
  return (
    <div className={`service ${serviceClass}`}>
      {img ? (
        <>
          <div className="service_image_container">
            <img
              className={`service_image ${imgClass}`}
              src={img}
              alt={heading}
            />
          </div>
          <small className="credit">{children}</small>
        </>
      ) : null}
      <h3 className="service_heading">{heading}</h3>
      <div className="service_description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Service;
