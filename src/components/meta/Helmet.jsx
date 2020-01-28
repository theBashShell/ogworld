import React  from "react";
import ReactHelmet from "react-helmet";
import "normalize.css"; 

const Helmet = ({ children }) => { 
  return (
    <ReactHelmet>
      <meta name="app_name" content="OG World" />
      <meta name="author" content="Bruno Edoh" />
      <link rel="icon" type="image/png" href="/images/favicon.png" />
      {children}
    </ReactHelmet>
  );
};

export default Helmet;
